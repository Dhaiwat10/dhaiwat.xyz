// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyMessage } from 'ethers/lib/utils';
import { createClient } from '@supabase/supabase-js';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

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
    'https://rpc.ankr.com/polygon_mumbai',
    80001
  );
  const sdk = new ThirdwebSDK(provider, {
    gasless: {
      openzeppelin: {
        relayerUrl: process.env.RELAYER_WEBHOOK_URL as string,
      },
    },
  });
  const nftContract = sdk.getNFTCollection(
    '0x24bB3E4C3b2611976aA5494790Bd74e20F4CdeD3'
  );

  const message = req.query.message as string;
  const recoveredAddress = verifyMessage('gm', message);

  const { error } = await supabase
    .from('entries')
    .insert([{ address: recoveredAddress }]);

  if (process.env.NODE_ENV === 'production' && error) {
    if (error.code === '23505') {
      return res.status(400).json({ error: 'You already have an entry.' });
    }
    return res.status(500).json({ error: error.message });
  }

  const metadata = {
    name: `Thanks for signing dhaiwat.xyz's guestbook! <3`,
    description: 'Dhaiwat loves you',
    image:
      'https://yvserbqzlsygbs4alzsbfautd3q7exfqwwflgzrspqikcdep.arweave.net/xWRI_hhlcsGDLgF5kEoKTHuHyXLC1irNmMnw_QoQyPU',
  };

  const tx = await nftContract.mintTo(recoveredAddress, metadata);
  const tokenId = tx.id.toString();

  console.log(tx, tokenId);

  return res.status(200).json({ address: recoveredAddress, tokenId });
}
