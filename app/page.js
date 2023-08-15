// 메인 페이지 

import Image from 'next/image'
import Link from "next/link"
import ootd from "/public/logo/ootd망곰.png"

// import axios from "axios"
// import "./app/api/router.js";
// const express = require("express");
// const bodyParser = require("body-parser");
// const basicAuth = require("express-basic-auth");



// Create an express instance
// const app = express();


/**
 * Express 내장 미들웨어 등록
 */
// app.use(express.static("public")); // ok
// app.use("/static", express.static("static")); // ok
// // app.use("/static", express.static(__dirname + "/public")); // ko

// app.use(express.urlencoded());
// app.use(express.json());
// // app.use(
// //   bodyParser.urlencoded({
// //     extended: true,
// //   })
// // );
// // app.use(bodyParser.json());

// /**
//  * API router 등록
//  */
// const apiRouter = require("./api/router");
// app.use("/api", apiRouter);

// module.exports = app;




export default function Home() {
  return (
    <div>
    <div><div>
      <div className="whole-container">
        <div className='dust-sheet'>
          <p>미세먼지 관련 시트</p>
        </div>
        <div className='weather-sheet'>
          <p>날씨 관련 시트</p>
        </div>
      </div>

      <div className="whole-container">
        <div className='clothes-sheet'>
          <p>오늘의 추천 옷차림 시트</p>
        </div>
        <div className='picture-sheet'>
          <p>그림 시트</p>
        </div>
      </div>

      <div className="whole-container">
        <div className='todo-sheet'>
          <p>오늘의 추천 할 일 시트</p>
        </div>
      </div>
      </div>
      </div>

      <Link href="/ootd">
          <div class="floating-button">
            <div class="img-box">
              <div className="img"><p>OOTD 입력하러 가기</p></div>
              <div className="img"><Image src={ootd} alt="망곰" width={50} height={50} /></div>
            </div>
          </div>
        </Link>
      </div>

      
  )
}
