/** @type {import('next').NextConfig} */
const path = require('path'); // sass 사용순서 1. path 선언
const nextConfig = {
  reactStrictMode: true,
  // sass 사용순서 2. sassOptions 옵션 추가
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // scss변수 쓸때, 하단링크참조
    // https://blog.itcode.dev/posts/2021/09/24/nextjs-reorganization-3#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-SCSS%20%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
    // 모든 파일에서 _variables.scss", "styles/_mixins.scss 두 파일에서 선언한 변수를 사용하기 위해 추가.
    //prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`, // prependData 옵션 추가
  },
}

module.exports = nextConfig
