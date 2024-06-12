import { configureStore ,createSlice } from '@reduxjs/toolkit';


// Create a slice
const initialState = {
    sku : null,
    quantity: 0,
    name: null,
    description: null,
    image : [],
    allProducts : null
};

const reduxSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setSKU: (state, action) => {
            state.sku = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setImage: (state, action) => {
            state.description = action.payload;
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        }
    },
});

export const {setSKU, setQuantity,setName,setDescription,setImage,setAllProducts} = reduxSlice.actions;

const store = configureStore({
    reducer: {
        example: reduxSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
