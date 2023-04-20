//'naver.ts'는 전역 스크립트 파일로 간주되어 '--isolatedModules'에서 컴파일할 수 없습니다.
// import, export 또는 빈 'export {}' 문을 추가하여 모듈로 만듭니다.


// import type { NextApiRequest, NextApiResponse } from 'next'

 //var express = require('express');
import express from 'express';

//var cors = require('cors'); // 크로스에러 해결법으로 *모든 경로에서 접근허용.
import cors from 'cors';
//var request = require('request');
import request from 'request';
var app = express();

// declare global {
//     namespace Express {
//        interface type {
//         use:any;
//        }
//     }
// } // 일단 주석
// app.use(express.urlencoded({extended:true}))// 인코딩에러해결
app.use(cors({
    origin: '*',
})); // 크로스에러 해결법으로 *모든 경로에서 접근허용.

var client_id = 'D4z2FcUbkf_ToGXADh0H';
var client_secret = '9LjNdS8bM2';

// type responseGet = {
//     req: NextApiRequest,
//     res: NextApiResponse<Data>  
// }

type Data = {
    name: string|any
}

app.get('/search/news', function (req, res) {
    console.log(res,'res입')
    
    var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(<any>req.query.query) + `&display=${req.query.display}` + "&start=1&sort=date";
    
    var options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    
    
    request.get(options, function (error:any, response:any, body:any) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

app.listen(5000, function () {
    console.log('http://127.0.0.1:5000/search/news?query=검색어 app listening on port 5000!');
});


// express , cors : 크로스에러땜에,  request











