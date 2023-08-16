import { NextRequest, NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.json();
  console.log('+ POST /api/ootd', data)
  // const url = `${process.env.DURIWEATHER_API_URL}/pm10/value`

  // const res = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'text/html',
  //   }
  // })

  return new NextResponse({}, {
    status: 201,
  })
}