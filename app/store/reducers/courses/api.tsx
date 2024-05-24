import { createApi } from "@reduxjs/toolkit/query/react";
import DynamicBaseQuery from "@/app/store/dynamic-base-query";


export const CourseApi = createApi({
    reducerPath: "CourseApi",
    refetchOnFocus: true,
    baseQuery: DynamicBaseQuery,
    tagTypes: ['Course'],
    endpoints: (builder) => ({
        myCreatedCourses: builder.query<Course[], null>({
            query: () => {
                return {
                    url: 'my-created-courses/',
                }
            },
            providesTags: ['Course'],
            transformResponse: (rawResult: { data: Course[], message: string }, meta) => {
                const { data } = rawResult;
                return data;
            },
        }),
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
    useCreateCourseMutation,
    useMyCreatedCoursesQuery
} = CourseApi;