import {configureStore} from '@reduxjs/toolkit'
import postSlice from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        posts: postSlice
    }
})