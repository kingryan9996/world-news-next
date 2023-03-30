import { useRouter} from 'next/router'
import React,{useState,useEffect} from 'react'
import WorldMap from '../src/component/WorldMap';
import CountryData from '../Countrydata.json'
import axios from 'axios'
import styles from '@/styles/CountryName.module.scss'
import News from '../src/component/News';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../api/naverNews';

const CountryName = () => {
  const router = useRouter();
  console.log(router.query.id)
  const deleteData = CountryData.filter((obj) => obj["alpha-3"] == router.query.id);
  // console.log(deleteData, '새로운데이터')
  let countryName = deleteData[0]?.name;
  console.log(countryName)
  let numRef = {current:10};

  const [newsData,setNewsData] = useState<any[]>();

  console.log(newsData,'호출한 뉴스데이터')

  const getDataFn:any = () => {
    apis.get(countryName,numRef)
    .then((res) => res.data)
  }

  const {isLoading, isError, error, data} = useQuery(["repoData"], () =>
  axios.get(
    "https://api.github.com/repos/tannerlinsley/react-query"
  ).then((res) => res.data)
);
  ///////////////////////////
  // getDataFn(), {
  //   refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
  //   retry: 0, // 실패시 재호출 몇번 할지
  //   onSuccess: data => {
  //     // 성공시 호출
  //     console.log(data);
  //   },
  //   onError: e => {
  //     // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
  //     // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
  //     console.log(e);
  //   }
  //})
  ////////////////////////////////////////
  console.log(data,'리액트쿼리')

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + error


  
// useEffect(()=>{

 //          `/search/shop?query=${obj}&display=${numRef.current}`

//   let obj = countryName;

//   axios.get(`http://127.0.0.1:5000/search/shop?query=${obj}&display=${numRef.current}`).
//         then(res=>setNewsData(res.data.items))
// },[countryName])

// let qqq:any = newsData?.map((item:string,index:number) : any => console.log(item,index))

  return (
    <div>CountryName
         해당하는 날씨?
         {/* {newsData?.[0]['title']}
         {newsData?.map((item:any,index:number) : any => {return <span>{item.title} + {index}</span>})} */}
      <News/>
    </div>
  )
}

export default CountryName