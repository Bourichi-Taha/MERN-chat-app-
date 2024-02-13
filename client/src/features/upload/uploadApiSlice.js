import { apiSlice } from "../../app/api/apiSlice";

export const uploadApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createUpload: builder.mutation({
            query: (formData) => ({
                url: '/upload',
                method: 'POST',
                body: formData ,
                formData: true,
            }),
            invalidatesTags:['Upload']
        }),
    })
})

export const { useCreateUploadMutation} = uploadApiSlice