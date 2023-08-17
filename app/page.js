// 메인 페이지 
import {
  getCloset,
  getClosetJacket,
  getClosetPants,
  getClosetSopum,
  getClosetTop,
  getComment,
  getCommentToday,
  getFcst,
  getFcstPop,
  getFcstPty,
  getFcstReh,
  getFcstSky,
  getFcstTmn,
  getFcstTmx,
  getFcstVec,
  getFcstWsd,
  getNcst,
  getNcstT1H,
  getPm10Grade,
  getPm10No2value,
  getPm10O3value,
  getPm10Pm25value,
  getPm10Value,
  getPm10,
} from '@/actions'


import Image from 'next/image'
import Link from "next/link"
import ootd from "/public/logo/ootd망곰.png"
import Good from "/public/dust/좋음두리.png"
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
  const [
    closetJacket,
    closetPants,
    closetSopum,
    closetTop,
    commentToday,
    fcstPop,
    fcstPty,
    fcstReh,
    fcstSky,
    fcstTmn,
    fcstTmx,
    fcstVec,
    fcstWsd,
    ncstT1H,
    pm10Grade,
    pm10No2value,
    pm10O3value,
    pm10Pm25value,
    pm10Value,
  ] = await Promise.all([
    getClosetJacket(),
    getClosetPants(),
    getClosetSopum(),
    getClosetTop(),
    getCommentToday(),
    getFcstPop(),
    getFcstPty(),
    getFcstReh(),
    getFcstSky(),
    getFcstTmn(),
    getFcstTmx(),
    getFcstVec(),
    getFcstWsd(),
    getNcstT1H(),
    getPm10Grade(),
    getPm10No2value(),
    getPm10O3value(),
    getPm10Pm25value(),
    getPm10Value(),
  ]);

  return (
    <div>
      <div>
        <div className="whole-container-dustweather">
          {/* 미세먼지 시트 */}
          <div className='dust-sheet'>
            <div><Dust /></div>
            <div>미세먼지 {pm10Value}㎍/m³ / 초미세먼지 {pm10Pm25value}㎍/m³ / 이산화질소 {pm10No2value}ppm / 오존 {pm10O3value}ppm </div>
          </div>

          {/* 날씨 시트 */}
          <div className='weather-sheet'>
            <div><Weather /></div>
            <div><h1>{ncstT1H}°C</h1></div>
            <p>오늘 하루 기온은 최고 {fcstTmx}°C까지 올라가고 최저 {fcstTmn}°C까지 떨어질 예정이에요.</p>
            <p>현재습도 {fcstReh}% / 강수확률 {fcstPop}% / 풍속 {fcstWsd}m/s / 풍향 {fcstVec}degree</p>
          </div>
        </div>

        <div className="whole-container-picture">
          <div className='picture-sheet-title'>
          <h1><div className='picture-sheet-maintitle'>오늘 입기 좋은 OOTD를 추천해 드릴게요!</div></h1>
          <div className='picture-sheet-subtitle'>오늘 하루 기온이랑 비슷한 날에 사용자들이 가장 많이 입은 룩을 보여드려요.</div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Outer</p></h1>
            <div><Image src={closetJacket.img_url} alt="" width={200} height={200} /></div>
            <div><h3>{closetJacket.name}</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Top</p></h1>
            <div><Image src={closetTop.img_url} alt="" width={200} height={200} /></div>
            <div><h3>{closetTop.name}</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Bottom</p></h1>
            <div><Image src={closetPants.img_url} alt="" width={200} height={200} /></div>
            <div><h3>{closetPants.name}</h3></div>
          </div>
          <div className='picture-sheet'>
            <h1><p>Accessary</p></h1>
            <div><Image src={closetSopum.img_url} alt="" width={200} height={200} /></div>
            <div><h3>{closetSopum.name}</h3></div>
          </div>
        </div>

        <div className="whole-container-todo">
        <div className='todo-sheet-title'>
          <h1><div className='todo-sheet-maintitle'>오늘 하기 좋은 일을 추천해 드릴게요!</div></h1>
          <div className='todo-sheet-subtitle'>오늘의 날씨와 대기질을 고려해서 추천해드려요.</div>
          </div>   
          <div className='todo-sheet'>
          <p>{commentToday.comment}</p>
          {/* <p>{commentToday[1].comment}</p> */}
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
        return <div className='dust-info'><Image src={Good} alt="좋음" width={300} height={300} /><h2><p>미세먼지 좋음</p></h2><h3><p>공기상태 최고! 신선한 공기 듬뿍 마시고 건강하세요~</p></h3></div>;
      case 2:
        return <div className='dust-info'><Image src={Normal} alt="보통" width={300} height={300} /><h2><p>미세먼지 보통</p></h2><h3><p>공기상태는 무난해요~</p></h3></div>;
      case 3:
        return <div className='dust-info'><Image src={Bad} alt="나쁨" width={300} height={300} /><h2><p>미세먼지 나쁨</p></h2><h3><p>공기가 탁하네요! 마스크 챙기세요~</p></h3></div>;
      case 4:
        return <div className='dust-info'><Image src={Worst} alt="매우나쁨" width={300} height={300} /><h2><p>미세먼지 매우나쁨</p></h2><h3><p>공기상태 최악! 최대한 외출을 삼가세요!</p></h3></div>;
    }
  }

  function Weather() {
    switch (fcstPty) { // 강수 확률 우선
      case 0: // 강수 확률 없음 
        switch (fcstSky) { // 하늘 차선
          case 1: // 맑음 
            return <div className='weather-info'><Image src={Sunny} alt='맑음' width={200} height={200} /><h3><p>맑음</p></h3></div>;
            break;
          case 2, 3: // 구름 조금 
            return <div className='weather-info'><Image src={SunCloudy} alt='구름조금' width={200} height={200} /><h3><p>대체로 맑음</p></h3></div>;
            break;
          case 4: // 구름 많음 
            return <div className='weather-info'><Image src={Cloudy} alt='흐림' width={200} height={200} /><h3><p>구름 많음</p></h3></div>;
            break;
          default: // 예외처리
            return <div>error!</div>;
            break;
        }
        break;
      case 1: // 비
        return <div className='weather-info'><Image src={Rainy} alt='비' width={200} height={200} /><h3><p>비</p></h3></div>;
        break;
      case 2: // 진눈깨비
        return <div className='weather-info'><Image src={SnowRainy} alt='눈/비' width={200} height={200} /><h3><p>진눈깨비</p></h3></div>;
        break;
      case 3: // 눈
        return <div className='weather-info'><Image src={Snowy} alt='눈' width={200} height={200} /><h3><p>눈</p></h3></div>;
        break;
      default: // 예외처리 
        return <div>error!</div>;
        break;
    }
  }
}


