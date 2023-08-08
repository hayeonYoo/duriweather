// 메인 페이지 

import Image from 'next/image'
import Link from "next/link"
// import axios from "axios"


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
      </div>
  )
}
