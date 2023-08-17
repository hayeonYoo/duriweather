import axios from 'axios'

export const getComment = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment`
  const res = await axios.get(url)
  console.log('+ res.data comment: ', res.data)
  return res.data
}

export const getCommentToday1 = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment/today`
  const res = await axios.get(url)
  console.log('+ res.data comment1 today: ', res.data[0])
  return res.data[0]
}

export const getCommentToday2 = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/comment/today`
  const res = await axios.get(url)
  console.log('+ res.data comment2 today: ', res.data[1])
  return res.data[1]
}