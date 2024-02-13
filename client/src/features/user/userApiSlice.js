import { apiSlice } from "../../app/api/apiSlice";
import { setUsers } from "./userSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setUsers(data));
                } catch (error) {
                    console.log(error)
                }
            },
            providesTags:['User']
        }),
        sendRequest: builder.mutation({
            query: (userId) => ({
                url: `/user/request/${userId}`,
                method: 'PATCH',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags:['User']
        }),
        acceptRequest: builder.mutation({
            query: (userId) => ({
                url: `/user/accept/${userId}`,
                method: 'PATCH',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags:['User']
        }),
        refuseRequest: builder.mutation({
            query: (userId) => ({
                url: `/user/refuse/${userId}`,
                method: 'PATCH',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags:['User']
        }),
        cancelRequest: builder.mutation({
            query: (userId) => ({
                url: `/user/cancel/${userId}`,
                method: 'PATCH',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags:['User']
        }),
        unfriendUser: builder.mutation({
            query: (userId) => ({
                url: `/user/unfriend/${userId}`,
                method: 'PATCH',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags:['User']
        }),
        
        
    })
})

export const {useGetUsersQuery, useAcceptRequestMutation, useSendRequestMutation, useRefuseRequestMutation, useCancelRequestMutation, useUnfriendUserMutation } = userApiSlice