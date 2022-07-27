import axiosServices from '../axiosServices'
import { API_ENDPOINT_LARAVEL } from '@constant/index'

export const uploadAvatar = (fd, setProgress) => {
  return axiosServices.post(`${API_ENDPOINT_LARAVEL}/api/employee/uploadavatar`, fd, {
    onUploadProgress: (progressEvent) => {
      setProgress((progressEvent.loaded / progressEvent.total) * 100)
    },
  })
}
export const getAvatar = (address) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/employee/getavatar?address=${address}`, {
    responseType: 'arraybuffer',
  })
}
