import { createApi } from "@reduxjs/toolkit/query/react";
import DynamicBaseQuery from "@/app/store/dynamic-base-query";


export const CourseApi = createApi({
    reducerPath: "CourseApi",
    refetchOnFocus: true,
    baseQuery: DynamicBaseQuery,
    tagTypes: ['Course'],
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: body => {
                return {
                    url: 'create-course/',
                    method: 'POST',
                    body: body,
                }
            },
            invalidatesTags: ['Course']
        }),
    })
});

export const {
    useCreateCourseMutation
} = CourseApi;