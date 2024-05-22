import { createApi } from "@reduxjs/toolkit/query/react";
import DynamicBaseQuery from "@/app/store/dynamic-base-query";


export const CategoryApi = createApi({
    reducerPath: "CategoryApi",
    refetchOnFocus: true,
    baseQuery: DynamicBaseQuery,
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        categories: builder.query<Category[], null>({
            query: () => {
                return {
                    url: `categories/`,
                }
            },
            providesTags: ['Category']
        })
    })
});

export const {
    useCategoriesQuery
} = CategoryApi;