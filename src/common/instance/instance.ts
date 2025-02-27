import axios from 'axios'

const token = '8ba0cea1-8992-4c55-ba76-4d8b5d75a72a'
const apiKey = 'e4843da7-ecf0-496a-b18c-07e675523c2f'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  headers: {
    Authorization: `Bearer ${token}`,
    'API-KEY': apiKey,
  },
})
