import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9951c0eee02f9a1b703f5b4d8b97c3562408c4b305ef926b163c54959c3db409'
  }
})
