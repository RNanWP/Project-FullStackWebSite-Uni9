import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IProduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    nome: "",
    preço: "",
    categoria: "",
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payload;
        }
    }
})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;