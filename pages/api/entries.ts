// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

export type Entry = {
  address: string;
  created_at?: string;
};

type Data = {
  entries: Entry[];
};

type Error = {
  error: string;
};

export const getEntries = async () => {
  const supabase = createClient(
    'https://tpuycrkgdcqwcwrihmjj.supabase.co',
    process.env.SUPABASE_ANON_KEY as string
  );
  const { data, error } = await supabase.from('entries');
  return {
    data,
    error,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { data, error } = await getEntries();
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ entries: data as Entry[] });
}
