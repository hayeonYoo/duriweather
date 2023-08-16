import axios from 'axios'

export const getPop = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment/today`
  const res = await axios.get(url)
  console.log('+ res.data : ', res.data)
  return res.data
}