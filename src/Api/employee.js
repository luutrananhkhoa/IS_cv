import axiosServices from './axiosServices'

export const allArticle = () => {
  return axiosServices.get()
}
