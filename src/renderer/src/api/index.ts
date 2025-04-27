import axios from 'axios'
import qs from 'qs'
import cfg from '../cfg'

type Data = object | FormData | null

interface IParams {
  query?: Record<string, any>
  data?: Data
}

const EmptyParams = {
  query: {},
  data: null
}

const getHeaders = (url: string, data: Data) => {
  const headers: Record<string, any> = {}

  headers.Authorization = cfg.api.adminToken

  if (data instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data'
  }

  return headers
}

type TRequestProps = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  query: Record<string, any>
  url: string
  data: any
}

const request = ({ method, url, query, data }: TRequestProps) =>
  axios({
    method,
    url: `${cfg.api.url}/${url}?${qs.stringify(query)}`,
    data,
    headers: getHeaders(url, data)
  })
    .then(({ data: resp }) => resp)
    .catch(
      (err) =>
        new Promise((_, reject) => {
          const error = err.response ? err.response.data : err

          if (error.detail) {
            error.message = error.detail
            delete error.detail
          }

          reject(error)
        })
    )

const api = {
  get: async function <T>(url: string, params: IParams = EmptyParams): Promise<T> {
    const resp = await request({
      method: 'get',
      url,
      query: params.query || {},
      data: null
    })

    return resp as T
  },
  post: async function <T>(url: string, params: IParams = EmptyParams): Promise<T> {
    const resp = await request({
      method: 'post',
      url,
      query: params.query || {},
      data: params.data || null
    })

    return resp as T
  },
  put: async function (url: string, params: IParams = EmptyParams): Promise<void> {
    await request({
      method: 'put',
      url,
      query: params.query || {},
      data: params.data || null
    })
  },
  patch: async function (url: string, params: IParams = EmptyParams): Promise<void> {
    await request({
      method: 'patch',
      url,
      query: params.query || {},
      data: params.data || null
    })
  },
  delete: async function <T>(url: string, params: IParams = EmptyParams): Promise<T> {
    const resp = await request({
      method: 'delete',
      url,
      query: params.query || {},
      data: params.data || null
    })

    return resp as T
  }
}

export default api
