import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: false,
    categories: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        profileChangeVisabilty: (state) => {
            state.profile = !state.profile;
        },
        categoriesChangeVisabilty: (state) => {
            state.categories = !state.categories;
        }
    }
});

export const { profileChangeVisabilty, categoriesChangeVisabilty } = modalSlice.actions;
export default modalSlice.reducer;