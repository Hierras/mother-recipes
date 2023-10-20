import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: '',
    dishes: [
        // {
        //   
        //     label: '',
        //     image: '',
        //     href: '',
        //     calories: 0,
        //     ingredients: 0
        // }
    ]
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registration: (state, action) => {
            state.login = action.payload;
        },
        addDish: (state, action) => {
            state.dishes.push(action.payload);
        },
        deleteDish: (state, action) => {
            for (let i = 0; i < state.dishes.length; i++)
                if (state.dishes[i].href === action.payload)  state.dishes.splice(i, 1);
           
        }
    },
});

export const {registration, addDish, deleteDish} = loginSlice.actions;

export default loginSlice.reducer;