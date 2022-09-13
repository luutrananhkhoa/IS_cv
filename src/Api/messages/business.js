import axiosServices from '../axiosServices'
import { API_ENDPOINT_NODEJS } from '@constant/index'

export const getListMessagesByTime = (businessid, employeeid, from, to) => {
  return axiosServices.get(
    `${API_ENDPOINT_NODEJS}/messages/business/getlistmessagesbytime?businessid=${businessid}&employeeid=${employeeid}&from=${from}&to=${to}`
  )
}
