import { configureStore } from '@reduxjs/toolkit'
import worksTableSliceReducer from './worksTableSlice/worksTableSlice'
const store = configureStore({
    reducer: {
        worksTable: worksTableSliceReducer,
    },
})
export default store
