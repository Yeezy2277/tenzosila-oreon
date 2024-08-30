import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categories: [{id: 1, title: "Взвешивания", isActive: true},
        {id: 2, title: "События", isActive: false}],
    currentCategory: "Взвешивания",
    filters: []
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            const categoryId = action.payload;
            state.categories = state.categories.map(item => {
                if (item.id === categoryId) {
                    state.currentCategory = item.title;
                    return {...item, isActive: true}
                } else {
                   return  {...item, isActive: false}
                }
            });
        },
        updateFilters: (state, action) => {
            state.filters = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateCategory} = journalSlice.actions

export default journalSlice.reducer
