import React,{useState, useRef} from 'react'
import styles from '@/styles/News.module.scss'
import { useQuery } from '@tanstack/react-query';
import { apis } from '@/pages/api';
import {queryKeys} from '@/types/NewsQuery';
console.log(queryKeys.news)


interface NewsInterface {
  countryName : string
}

const News = ({countryName}:NewsInterface):JSX.Element => {

  const numRef = useRef(10);
  console.log(numRef.current)


  const [newsData,setNewsData] = useState<any[]>();

  console.log(newsData,'호출한 뉴스데이터')

  const getNewsDataFn:any = async () => {
    apis.get(countryName,numRef.current)
    .then((res) =>  res.data )
  }

  // getDataFn();

  const {isLoading, isError, error, data} = useQuery([queryKeys.news[0],countryName,numRef.current],() => 
  // getNewsDataFn(countryName,numRef.current)
  apis.get(countryName,numRef.current)
  .then((res) => res.data)


  // axios.get(`http://127.0.0.1:5000/search/shop?query=${countryName}&display=${numRef.current}`)
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

  if (isLoading) {'Loading...'}

  if (isError) {'An error has occurred: ' + error }


  // console.log(data?.items)
  return (
    <div className={styles.newsWrap}>
        {data?.items.map((item:any, idx:any) => {
          return <div className={styles.newsItem} key={idx}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <div>
            <span>{item.pubDate}</span>
            <button><a href={item.link} target='blank'>더 보기</a></button>
          </div>
          </div>
          
})}
    </div>
  )
}

export default News