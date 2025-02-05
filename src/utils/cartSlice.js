import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItems:(state, action)=>{
            state.items.push(action.payload);
        },
        clearCart:()=>{
            state.items=[];
        },
        removeItem:(state, action)=>{
            state.items.pop();
        }
    }

});


export default cartSlice.reducer;
export const {addItems, clearCart, removeItem} = cartSlice.actions;