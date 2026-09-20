import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

client.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)

client.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.message ||
            (error.code === 'ECONNABORTED'
                ? 'Request timed out. Please try again.'
                : 'Something went wrong while contacting the server.')
        console.error('[api]', error.message)
        return Promise.reject(Object.assign(new Error(message), { cause: error }))
    }
)

export default client