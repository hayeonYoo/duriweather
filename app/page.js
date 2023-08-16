// 메인 페이지 
import {
  getNcstT1H, getPop, getPty, getReh, getSky, getTmn, getTmx, getVec, getWsd, getNo2Value, getO3Value, getpm10Grade, getpm10Value, getpm25Value, getClosetJacket, getClosetPants, getClosetSopum, getClosetTop,
} from '@/actions'


import Image from 'next/image'
import Link from "next/link"
import ootd from "/public/logo/ootd망곰.png"
import Good from "/public/dust/좋음.png"
import Normal from "/public/dust/보통.png"
import Bad from "/public/dust/나쁨.png"
import Worst from "/public/dust/매우나쁨.png"
import Rainy from "/public/weather/rainy.png"
import SnowRainy from "/public/weather/snowrainy.png"
import Snowy from "/public/weather/snowy.png"
import Cloudy from "/public/weather/cloudy.png"
import SunCloudy from "/public/weather/sunclody-day.png"
import Sunny from "/public/weather/sunny-day.png"



export default async function Home() {
  const [ncstT1H, Pop, Pty, Reh, Sky, Tmn, Tmx, Vec, Wsd, No2Value, O3Value, pm10Grade, pm10Value, pm25Value, Jacket, Pants, Top, Sopum] = await Promise.all([
    getNcstT1H(), getPop(), getPty(), getReh(), getSky(), getTmn(), getTmx(), getVec(), getWsd(), getNo2Value(), 
    getO3Value(), getpm10Grade(), getpm10Value(), getpm25Value(), getClosetJacket(), getClosetPants(), getClosetTop(), getClosetSopum(),
  ]);

  return (
    <div>
      <div>
        <div className="whole-container">
          {/* 미세먼지 시트 */}
          <div className='dust-sheet'>
            <div><Dust /></div>
            <div>미세먼지 {pm10Value} / 초미세먼지 {pm25Value} / 오존 {O3Value} / 이산화질소 {No2Value} </div>
          </div>

          {/* 날씨 시트 */}
          <div className='weather-sheet'>
            <div><Weather /></div>
            <div><h1>{ncstT1H}°</h1></div>
            <p>오늘 하루 기온은 최고 {Tmx}°까지 올라가고 최저 {Tmn}°까지 떨어질 예정이에요.</p>
            <p>현재습도 {Reh}% / 강수확률 {Pop}% / 풍속 {Wsd}m/s / 풍향 {Vec}degree</p>
        </div>
        </div>

        <div className="whole-container-picture">
          <div className='picture-sheet-title'><h1>* 오늘의 추천 OOTD *</h1></div>
          <div className='picture-sheet'>
            <h1><p>Outer</p></h1>
            <div><Image src="/clothes/jacket.png" alt="" width={200} height={200} /></div>
            <div><h3>Jacket</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Top</p></h1>
            <div><Image src="/clothes/short-sleeve.png" alt="" width={200} height={200} /></div>
            <div><h3>Short Sleeve</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Bottom</p></h1>
            <div><Image src="/clothes/jeans.png" alt="" width={200} height={200} /></div>
            <div><h3>Jeans</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Accessary</p></h1>
            <div><Image src="/clothes/baseball-cap.png" alt="" width={200} height={200} /></div>
            <div><h3>Baseball Cap</h3></div>
          </div>
        </div>

        <div className="whole-container">
          <div className='todo-sheet'>
            <p>오늘의 추천 할 일 시트</p>
          </div>
        </div>
      </div>

      <Link href="/ootd">
        <div className="floating-button">
          <div className="img-box">
            <div className="img"><h3><p>OOTD 입력하러 가기</p></h3></div>
            <div className="img"><Image src={ootd} alt="망곰" width={50} height={50} /></div>
          </div>
        </div>
      </Link>
    </div>


  )


  function Dust() {
    console.log(pm10Grade);
    switch (pm10Grade) {
      case 1:
        return <div className='dust-info'><Image src={Good} alt="좋음" width={200} height={200} /><h2><p>미세먼지 좋음</p></h2><h3><p>공기상태 최고! 건강하세요~</p></h3></div>;
      case 2:
        return <div className='dust-info'><Image src={Normal} alt="보통" width={200} height={200} /><h2><p>미세먼지 보통</p></h2><h3><p>공기상태는 무난해요~</p></h3></div>;
      case 3:
        return <div className='dust-info'><Image src={Bad} alt="나쁨" width={200} height={200} /><h2><p>미세먼지 나쁨</p></h2><h3><p>공기가 탁하네요! 마스크 챙기세요~</p></h3></div>;
      case 4:
        return <div className='dust-info'><Image src={Worst} alt="매우나쁨" width={200} height={200} /><h2><p>미세먼지 매우나쁨</p></h2><h3><p>공기상태 최악! 최대한 외출을 삼가세요!</p></h3></div>;
    }
  }

  function Weather() {
    switch (Pty) {
      case 0:
        switch (Sky) {
          case 1:
            return <div className='weather-info'><Image src={Sunny} alt='맑음' width={200} height={200} /><h3><p>맑음</p></h3></div>;
            break;
          case 2, 3:
            return <div className='weather-info'><Image src={SunCloudy} alt='구름조금' width={200} height={200} /><h3><p>대체로 맑음</p></h3></div>;
            break;
          case 4:
            return <div className='weather-info'><Image src={Cloudy} alt='흐림' width={200} height={200} /><h3><p>구름 많음</p></h3></div>;
            break;
          default:
            return <div>에러발생</div>;
            break;
        }
        break;
      case 1:
        return <div className='weather-info'><Image src={Rainy} alt='비' width={200} height={200} /><h3><p>비</p></h3></div>;
        break;
      case 2:
        return <div className='weather-info'><Image src={SnowRainy} alt='눈/비' width={200} height={200} /><h3><p>진눈깨비</p></h3></div>;
        break;
      case 3:
        return <div className='weather-info'><Image src={Snowy} alt='눈' width={200} height={200} /><h3><p>눈</p></h3></div>;
        break;
      default:
        return <div>에러발생</div>;
        break;
    }
  }
}


