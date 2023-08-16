import axios from 'axios'

export const getNo2Value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/air/no2value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getO3Value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/air/o3value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getpm10Grade = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/air/pm10grade`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getpm10Value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/air/pm10value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getpm25Value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/air/pm25value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}