// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyMessage } from 'ethers/lib/utils';
import { createClient } from '@supabase/supabase-js';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { NFT_CONTRACT_ADDRESS, NFT_IMG_URL } from '../../utils';

const supabase = createClient(
  'https://tpuycrkgdcqwcwrihmjj.supabase.co',
  process.env.SUPABASE_ANON_KEY as string
);

type Data = {
  address: string;
  tokenId: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rpc.ankr.com/polygon',
    137
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
  const sdk = new ThirdwebSDK(signer, {
    gasless: {
      openzeppelin: {
        relayerUrl: process.env.RELAYER_WEBHOOK_URL as string,
      },
    },
  });
  const nftContract = sdk.getNFTCollection(NFT_CONTRACT_ADDRESS);

  const message = req.query.message as string;
  const recoveredAddress = verifyMessage('gm', message);

  const { error } = await supabase
    .from('entries')
    .insert([{ address: recoveredAddress }]);

  // Temp disable duplicate error so that people who have already signed can mint an NFT too
  // if (process.env.NODE_ENV === 'production' && error) {
  //   if (error.code === '23505') {
  //     return res.status(400).json({ error: 'You already have an entry.' });
  //   }
  //   return res.status(500).json({ error: error.message });
  // }

  const metadata = {
    name: `Thanks for signing dhaiwat.xyz's guestbook! <3`,
    description: 'Dhaiwat loves you',
    image: NFT_IMG_URL,
  };

  const tx = await nftContract.mintTo(recoveredAddress, metadata);
  const tokenId = tx.id.toString();

  console.log(tx, tokenId);

  return res.status(200).json({ address: recoveredAddress, tokenId });
}
