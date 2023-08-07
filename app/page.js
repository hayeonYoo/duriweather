// 메인 페이지 

import Image from 'next/image'
import Link from "next/link"
// import axios from "axios"

const express = require("express");

const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");

// Create an express instance
const app = express();


/**
 * Express 내장 미들웨어 등록
 */
// app.use(express.static("public")); // ok
app.use("/static", express.static("static")); // ok
// app.use("/static", express.static(__dirname + "/public")); // ko

app.use(express.urlencoded());
app.use(express.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());

/**
 * API router 등록
 */
const apiRouter = require("./api/router");
app.use("/api", apiRouter);

/**
 * Page router 등록
 */
app.use("/api", apiRouter);
app.get("/", (req, res) => {
  res.send("Express JS on Vercel");
});
app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

/**
 * API documents 등록
 */
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./api-docs/swagger-output.json");
app.use(
  "/api-docs",
  basicAuth({
    users: { admin: "secret" },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCssUrl: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
    ],
  })
);

module.exports = app;


export default function Home() {
  return (
<<<<<<< HEAD
    <div>
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

=======
    <main className={styles.main}>
      <div>
        DuriWeather 홈페이지입니다.
      </div>

    </main>
>>>>>>> develop
  )
}
