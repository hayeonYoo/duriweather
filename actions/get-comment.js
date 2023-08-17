import axios from 'axios'

export const getComment = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment`
  const res = await axios.get(url)
  console.log('+ res.data comment: ', res.data)
  return res.data
}

export const getCommentToday = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment/today`
  const res = await axios.get(url)
  console.log('+ res.data comment today: ', res.data)
  return res.data
}