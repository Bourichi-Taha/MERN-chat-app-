import { apiSlice } from "../../app/api/apiSlice";
import { setMessages } from "./messageSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query({
            query: (chatId) => ({
                url: `/message/${chatId}`,
                method: 'GET',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setMessages(data));
                } catch (error) {
                    console.log(error)
                }
            },
            providesTags:['Message']
        }),
        createMessage: builder.mutation({
            query: (data) => ({
                url: '/message',
                method: 'POST',
                body: data
            }),
            invalidatesTags:['Message']
        }),
    })
})

export const {useGetMessagesQuery , useCreateMessageMutation} = authApiSlice