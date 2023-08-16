import axios from 'axios'

export const getFcst = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstPop = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/pop`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstPty = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/pty`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstReh = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/reh`
  const res = await axios.get(url)
  console.log('+ res.data 습도: ', res.data)
  return res.data
}

export const getFcstSky = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/sky`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstTmn = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/tmn`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstTmx = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/tmx`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstVec = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/vec`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}

export const getFcstWsd = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/fcst/wsd`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}