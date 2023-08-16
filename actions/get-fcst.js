import axios from 'axios'

export const getPop = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/pop`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getPty = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/pty`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getReh = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/reh`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getSky = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/sky`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getTmn = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/tmn`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getTmx = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/tmx`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getVec = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/vec`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getWsd = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/wsd`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}