import axios, { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: 'https://dog.ceo/api',
})

export const get = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(endpoint)
    return response.data
  } catch (error) {
    throw new Error(`GET ${endpoint} failed: ${error}`)
  }
}

export const post = async <T>(endpoint: string, data: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, data)
    return response.data
  } catch (error) {
    throw new Error(`POST ${endpoint} failed: ${error}`)
  }
}

export default api
