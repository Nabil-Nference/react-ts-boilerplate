import axios, { AxiosResponse } from 'axios'

/**
 * Axios instance configured with base URL
 */
const api = axios.create({
  baseURL: 'https://dog.ceo/api',
})

/**
 * Make a GET request to the specified endpoint
 * @template T - The expected response type
 * @param {string} endpoint - The endpoint to make the GET request to
 * @returns {Promise<T>} - The response data
 * @throws Will throw an error if the GET request fails
 */
export const get = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(endpoint)
    return response.data
  } catch (error) {
    throw new Error(`GET ${endpoint} failed: ${error}`)
  }
}

/**
 * Make a POST request to the specified endpoint with the provided data
 * @template T - The expected response type
 * @param {string} endpoint - The endpoint to make the POST request to
 * @param {string} data - The data to send in the POST request
 * @returns {Promise<T>} - The response data
 * @throws Will throw an error if the POST request fails
 */
export const post = async <T>(endpoint: string, data: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, data)
    return response.data
  } catch (error) {
    throw new Error(`POST ${endpoint} failed: ${error}`)
  }
}

export default api
