import { NextRequest, NextResponse } from 'next/server'

export async function GET(req) {
  const url = `${process.env.DURIWEATHER_API_URL}/vilageFcst/vec`

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    }
  })

  return new NextResponse(res.body, {
    status: res.status,
  })
}