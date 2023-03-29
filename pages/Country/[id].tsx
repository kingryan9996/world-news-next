import { useRouter} from 'next/router'
import React,{useState,useEffect} from 'react'
import WorldMap from '../src/component/WorldMap';
import CountryData from '../Countrydata.json'
import axios from 'axios'

const CountryName = () => {
  const router = useRouter();
  console.log(router.query.id)
  const deleteData = CountryData.filter((obj) => obj["alpha-3"] == router.query.id);
  // console.log(deleteData, '새로운데이터')
  let countryName = deleteData[0]?.name;
  console.log(countryName)

  const [newsData,setNewsData] = useState<any[]>();

  console.log(newsData,'호출한 뉴스데이터')

  
useEffect(()=>{

  let obj = countryName;
  let numRef = {current:10};
  axios.get(`http://127.0.0.1:5000/search/shop?query=${obj}&display=${numRef.current}`).
        then(res=>setNewsData(res.data.items))
},[countryName])

let qqq:any = newsData?.map((item:string,index:number) : any => console.log(item,index))

  return (
    <div>CountryName
         해당하는 날씨?
         {newsData?.[0]['title']}
         {newsData?.map((item:any,index:number) : any => {return <span>{item.title} + {index}</span>})}

    </div>
  )
}

export default CountryName