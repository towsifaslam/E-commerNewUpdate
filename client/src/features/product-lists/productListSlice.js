import {createSlice,createAsyncThunk}from'@reduxjs/toolkit'
import {fetchAllProducts,fetchProductByFilters}from'./productListApi'

const initialState = {
    products :[],
    status:'idle'
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
    async({filter,sort})=>{
        const response = await fetchProductByFilters(filter,sort);
   
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
                state.products =action.payload
              })
    }
});
 
export const selectAllProducts = (state)=>state.product.products
export default prouductSlice.reducer;