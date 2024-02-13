import { apiSlice } from "../../app/api/apiSlice";
import { setChats, setSelectedChat } from "./chatSlice";

export const chatApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getChats: builder.query({
            query: () => ({
                url: '/chat',
                method: 'GET',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setChats(data));
                } catch (error) {
                    console.log(error)
                }
            },
            providesTags:['Chat']
        }),
        getChat: builder.query({
            query: ({chatId}) => ({
                url: `/chat/${chatId}`,
                method: 'GET',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(setSelectedChat(data));

                } catch (error) {
                    console.log(error)
                }
            },
            providesTags:['Chat']
        }),
        createChat: builder.mutation({
            query: (data) => ({
                url: '/chat',
                method: 'POST',
                body: data
            }),
            invalidatesTags:['Chat']
        }),
    })
})

export const {useGetChatsQuery , useCreateChatMutation, useGetChatQuery} = chatApiSlice