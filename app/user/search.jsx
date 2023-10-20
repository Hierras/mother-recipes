import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    queryLine: '',
    q: '',
    searchParams: {
        diet: {
            balanced: ['balanced', 'Balanced', false],
            highFiber: ['high-fiber', 'Highfiber', false],
            highProtein: ['high-protein', 'High protein', false],
            lowCarb: ['low-carb', 'Low carb', false],
            lowFat: ['low-fat', 'Low fat', false],
            lowSodium: ['low-sodium', 'Low sodium', false],
        },
        cuisineType: {
            American: ['American', 'American', false],
            Asian: ['Asian', 'Asian', false],
            British: ['British', 'British', false],
            Caribbean: ['Caribbean', 'Caribbean', false],
            CentralEurope: ['Central%20Europe', 'Central Europe', false],
            Chinese: ['Chinese', 'Chinese', false],
            EasternEurope: ['Eastern%20Europe', 'Eastern Europe', false],
        },
        mealType: {
            Breakfast: ['Breakfast', 'Breakfast', false],
            Dinner: ['Dinner', 'Dinner', false],
            Lunch: ['Lunch', 'Lunch', false],
            Snack: ['Snack', 'Snack', false],
            Teatime: ['Teatime', 'Teatime', false],
        },
        dishType: {
            BiscuitsAndCookies: ['Biscuits%20and%20cookies', 'Biscuits and cookies', false],
            Bread: ['Bread', 'Bread', false],
            Cereals: ['Cereals', 'Cereals', false],
            CondimentsAndSauces: ['Condiments%20and%20sauces', 'Condiments and sauces', false],
            Desserts: ['Desserts', 'Desserts', false],
            Drinks: ['Drinks', 'Drinks', false],
            Maincourse: ['Main%20course', 'Main course', false],
            Pancake: ['Pancake', 'Pancake', false],
            Preps: ['Preps', 'Preps', false],
            Preserve: ['Preserve', 'Preserve', false],
            Salad: ['Salad', 'Salad', false],
            Sandwiches: ['Sandwiches', 'Sandwiches', false],
            SideDish: ['Side%20dish', 'Side dish', false],
            Soup: ['Soup', 'Soup', false],
            Starter: ['Starter', 'Starter', false],
            Sweets: ['Sweets', 'Sweets', false],
        }
    },
    reload: true,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        reload: 
            (state) => {state.reload = !state.reload},
        setSearchState: (state, action) => {
            state.q = action.payload;
        },
        toggleCat: (state, action) => {
            state.searchParams[action.payload[0]][action.payload[1]][2] = 
                !state.searchParams[action.payload[0]][action.payload[1]][2];
        },
        formRequestString: (state) => {
            state.queryLine = '';
            for (let paramKey in state.searchParams) {
                for (let key in state.searchParams[paramKey]) {
                    let tempString = '';
                    if (paramKey === 'diet') tempString = '&diet=';
                    else if(paramKey === 'cuisineType') tempString = '&cuisineType=';
                    else if(paramKey === 'mealType') tempString = '&mealType=';
                    else if (paramKey === 'dishType') tempString = '&dishType=';

                    if (state.searchParams[paramKey][key][2])
                        state.queryLine +=
                            (tempString + state.searchParams[paramKey][key][0]);
                }
            }
        },
        clearCat: (state) => {
            for (let paramKey in state.searchParams) {
                for (let key in state.searchParams[paramKey]) {
                    state.searchParams[paramKey][key][2] = false;
                }
            }
        }
    },
});

export const {
    setSearchState,
    toggleCat,
    formRequestString,
    clearCat,
    reload
} = searchSlice.actions;

export default searchSlice.reducer;