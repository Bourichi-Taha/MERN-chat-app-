import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

export const baseUrl = 'http://localhost:4040';
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4040/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args,api,extraOptions);
    if (result?.error?.status === 403) {
        // send refresh token to get a valid access one
        const refreshResult = await baseQuery('/auth/refresh',api,extraOptions);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            //store the new token
            api.dispatch(setCredentials({...refreshResult.data,user}));
            //retry the original query with the new token
            result = await baseQuery(args, api, extraOptions);
        }else{
            api.dispatch(logOut());
        }
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User','Chat','Message','Upload'],
    endpoints: builder => ({})
})