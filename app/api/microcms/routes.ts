import { client } from '@/utils/microcms';
import { NextResponse } from 'next/server';

export async function GET(){
  const data = await client.get({
    endpoint: 'photo',
    queries: {
      limit: 20,
    },
  });
  const response = data.contents;
  console.log(response);
  return NextResponse.json(response);
}
