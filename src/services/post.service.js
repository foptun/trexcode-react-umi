import * as axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com'

export const findAllPost = async () => {
  const response = await axios.get(apiUrl + '/posts')
  console.log(response)
  return response.data
}

export const findPostDetail = async (id) => {
  const response = await axios.get(apiUrl + '/posts/'+id)
  console.log(response)
  return response.data
}

export const createPost = async (data) => {
  const response = await axios.post(apiUrl + '/posts', data)
  console.log(response)
  return response.data
}
