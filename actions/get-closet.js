import axios from 'axios'

export const getClosetJacket = async () => {
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/closet/jacket`
    const res = await axios.get(url)
  return res.data
}

export const getClosetPants = async () => {
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/closet/pants`
    const res = await axios.get(url)
    return res.data
  }

export const getClosetSopum = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/closet/sopum`
  const res = await axios.get(url)
  return res.data
}
export const getClosetTop = async () => {
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/closet/top`
    const res = await axios.get(url)
    return res.data
  }