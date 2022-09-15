import { configureStore } from '@reduxjs/toolkit'
import worksTableReducer from '../features/worksTable/worksTable'

export default configureStore({
    reducer: {
        worksTable: worksTableReducer,
    },
})