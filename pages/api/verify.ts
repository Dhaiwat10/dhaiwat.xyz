// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyMessage } from 'ethers/lib/utils';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tpuycrkgdcqwcwrihmjj.supabase.co',
  process.env.SUPABASE_ANON_KEY as string
);

type Data = {
  address: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  console.log({ msg: req.query.message });
  const message = req.query.message as string;
  const recoveredAddress = verifyMessage('gm', message);
  console.log({ recoveredAddress });
  const { error } = await supabase
    .from('entries')
    .insert([{ address: recoveredAddress }]);
  if (error) {
    if (error.code === '23505') {
      return res.status(400).json({ error: 'You already have an entry.' });
    }
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ address: recoveredAddress });
}
