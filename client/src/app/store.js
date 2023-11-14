import {configureStore}from'@reduxjs/toolkit'

 import productListSlice from '../features/product-lists/productListSlice'

export const store = configureStore({
    reducer:{
        product:productListSlice
    }
})