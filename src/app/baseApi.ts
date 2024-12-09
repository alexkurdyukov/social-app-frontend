import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../shared/const'

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
        // const state = getState() as RootState
        // const token = state.auth.token || localStorage.getItem('token')
        // if (token) {
        //     headers.set('authorization', `Bearer ${token}`)
        // }
        // return headers
    },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const baseApi = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})
