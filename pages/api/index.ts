// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

const api = axios.create({
  baseURL:"http://127.0.0.1:5000",
})

export const apis = {
  get: (countryName:any,numRef:any) => api.get(`/search/news?query=${countryName}&display=${numRef}`)
}

interface NewsInterface {
  countryName : any
  numRef : object
}

export function NewsList(){
//   const {isLoading, isError, error, data} = useQuery<NewsInterface[]>(["repoData"],() => 
//   axios.get(`http://127.0.0.1:5000/search/shop?query=${countryName}&display=${numRef.current}`)
//   .then((res) => res.data)
// );
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
