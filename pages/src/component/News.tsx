import React from 'react'
import styles from '@/styles/CountryName.module.scss'

const News = () => {
  return (
    <div className={styles.newsWrap}>
        <strong>타이틀</strong>
        <p>본문내용</p>
        <div>날짜 + 자세히보기</div>
    </div>
  )
}

export default News