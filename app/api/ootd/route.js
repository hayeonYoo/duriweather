import { NextRequest, NextResponse } from 'next/server'


export async function POST(res) {
  const data = await res.json();
  console.log('+ POST /api/ootd', data)

  const url = `${process.env.DURIWEATHER_API_URL}/closet`

  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
   
    body: JSON.stringify({
        outer: data.OuterList,
        top: data.TopList,
        bottom: data.BottomList,
        acc: data.AccList,
      }),
  })

  if (req.ok) {
    console.log("API 전송 성공");
    console.log(data.OuterList, data.TopList, data.BottomList, data.AccList);
  }
  else {
    console.log("API 전송 실패");
    console.log(outer, top, bottom, acc);
  }


  return new NextResponse({}, {
    status: 201,
  })
}