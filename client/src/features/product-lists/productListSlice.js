import {createSlice,createAsyncThunk}from'@reduxjs/toolkit'
import {fetchAllProducts,fetchProductByFilters}from'./productListApi'

const initialState = {
    products :[],
    status:'idle',
    totalItems:0
};
export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchProduct',
    async()=>{
        const response = await fetchAllProducts();
   
        return response.data;
    }
)
export const fetchProductByFiltersAsync = createAsyncThunk(
    'product/fetchProductByFilters',
    async({filter,sort,pagination})=>{
        const response = await fetchProductByFilters(filter,sort,pagination);
   
        return response.data;
    }
)
export const prouductSlice = createSlice({
    name:'product',
    initialState,
   
    extraReducers:(builder)=>{
        builder
              .addCase(fetchAllProductsAsync.pending,(state)=>{
                state.status = 'loading'
              })
              .addCase(fetchAllProductsAsync.fulfilled,(state,action)=>{
                state.status = 'idle',
                state.products =action.payload
              })
              .addCase(fetchProductByFiltersAsync.pending,(state)=>{
                state.status = 'loading'
              })
              .addCase(fetchProductByFiltersAsync.fulfilled,(state,action)=>{
                state.status = 'idle',
                state.products =action.payload.products
                state.totalItems =action.payload.totalItems

              })
    }
});
 
export const selectAllProducts = (state)=>state.product.products
export const selectTotalItems = (state)=>state.product.totalItems

export default prouductSlice.reducer;