import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(baseUrl, newBlog, config)
  return request.then(response => response.data)
}

const update = (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios
    .put(baseUrl+blog.id, blog, config)
  return request.then(response => response.data)
}

const deleteBlog = (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios
    .delete(baseUrl+blog.id, config)
  return request.then(response => response.data)
}

export default { getAll, create, update, deleteBlog, setToken }