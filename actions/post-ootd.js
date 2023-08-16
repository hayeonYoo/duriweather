import axios from 'axios'

export const postOotd = async (data) => {
    console.log('+ postOotd()', data)

    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/ootd`
    const res = await axios.post(url,data)
  return res.data
}
