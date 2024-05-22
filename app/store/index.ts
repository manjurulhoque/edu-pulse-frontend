import { configureStore } from '@reduxjs/toolkit'
import { CategoryApi } from "@/app/store/reducers/categories/api";

export const store: any = configureStore({
    reducer: {
        [CategoryApi.reducerPath]: CategoryApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({}).concat(CategoryApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch