
import { applyMiddleware, combineReducers, createStore } from 'redux'
import products from './ducks/products'
import shoppingCart from './ducks/shoppingCart'
import categoriesProduct from './ducks/categoriesProduct'
import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = {
    products,
    shoppingCart,
    categoriesProduct
}
const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

