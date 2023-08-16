import axios from 'axios'

export const getNcstT1H = async () => {
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/ncst/T1H`
    const res = await axios.get(url)
    console.log('+ res.data T1H : ', res.data)
    return res.data
  }