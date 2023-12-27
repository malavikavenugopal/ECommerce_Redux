import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    //morethan one item thats why empty array
    initialState:[],
    reducers:{
        //actions
        //function /logic to add items into wishlist array
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer