//import { cartSlice } from './cartSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IProduct {
    id: string
    titulo: string
    img: string
    preço: number
    quantidade: number
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction <IProduct>) => {
            if(state.findIndex((pro) => pro.id === action.payload.id) === -1) {
            } else {
                    return state.map((item) => {
                        return item.id === action.payload.id ? {...item, quantidade: item.quantidade + 1 }
                        : item;
                    });
                }
            },

removeFromCart: (state, action: PayloadAction<string>) => {
    const id = action.payload
    return state.filter((item) => item.id !== id)
}

        },
    });


    export const {addToCart, removeFromCart} = cartSlice.actions
    export default cartSlice.reducer