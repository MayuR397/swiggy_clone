import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item : []
    },
    reducers:{
        addItems :(state, action)=>{
            state.item.push(action.payload)
        },
        removeItems: (state)=>{
            state.item.length = 0
        }
    }
})

export const {addItems, removeItems} = cartSlice.actions
export default cartSlice.reducer;