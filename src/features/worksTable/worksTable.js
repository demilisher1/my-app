import { createSlice } from '@reduxjs/toolkit'

export const worksTable = createSlice({
    name: 'worksTable',
    initialState: {
        visible: true,
        data: [],
        head: [],
        hideColumns: []
    },
    reducers: {
        changeVisible: (state, action) => {
            state.value = !state.value;
        },

        removeColumnHead: (state, action) => {
            const column = action.payload.column
            const indexHC = state.hideColumns.indexOf(column);

            if(indexHC !== -1){
                state.hideColumns.splice(indexHC, 1)
            } else{
                state.hideColumns.push(column)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeVisible, removeColumnHead } = worksTable.actions

export default worksTable.reducer