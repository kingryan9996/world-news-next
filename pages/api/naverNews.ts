// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const api = axios.create({
  baseURL:"http://127.0.0.1:5000",
})

export const apis = {
  get: (obj:string,numRef:any) => api.get(`/search/shop?query=${obj}&display=${numRef.current}`)
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
