import axios from 'axios'

export const getPm10Grade = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10/grade`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getPm10No2value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10/no2value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getPm10O3value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10/o3value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getPm10Pm25value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10/pm25value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getPm10Value = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10/value`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}

export const getPm10 = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/pm10`
  const res = await axios.get(url)
  console.log('+ res.data T1H : ', res.data)
  return res.data
}
