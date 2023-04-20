import { useRouter} from 'next/router'
import React,{useState,useEffect,useRef} from 'react'
import WorldMap from '../src/component/WorldMap';
import CountryData from '../Countrydata.json'
import styles from '@/styles/CountryName.module.scss'
import News from '../src/component/News';


const CountryName = () => {
  const router = useRouter();
  console.log(router.query.id)
  const deleteData = CountryData.filter((obj) => obj["alpha-3"] == router.query.id);
  // console.log(deleteData, '새로운데이터')
  let countryName = deleteData[0]?.name;

  return (
    <div>CountryName
         해당하는 날씨?
         {/* {newsData?.[0]['title']}
         {newsData?.map((item:any,index:number) : any => {return <span>{item.title} + {index}</span>})} */}
      <News countryName={countryName}/>
    </div>
  )
}

export default CountryName