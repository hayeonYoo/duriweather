// page.js를 감싸는 파일
// 페이지 바깥에 넣을 내용 작성. ex) <head>, 상단바 등

import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import logo from "/public/logo/망곰로고.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '두리날씨알리미',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">
            <div className='main-logo'><Image src={logo} alt="망곰 로고" width={100} height={100} /></div>
            <div className='main-title'>망곰날씨알리미</div>
          </Link>
        </div>
        {children}

        <footer className='footer'><p>2023년 산학협력프로젝트</p>
          <p>정유한 유하연 조수현</p></footer>
      </body>
    </html>
  )
}
