import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    //morethan one item thats why empty array
    initialState:[],
    reducers:{
        //actions
        //function /logic to add items into wishlist array
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },
        //fn to rempove all items from cart
        emptyCart:(state,action)=>{
return state = []
        }
       
    }
})
export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer