/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ShoppingCart from '../src/screens/shoppingCart';
 import { fireEvent, render, waitFor } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../src/store';
import { ProductCart, Types } from '../src/store/ducks/shoppingCart/types';
  
 const component = (
    <Provider store={store} > <ShoppingCart navigation={{ navigate: (screen:'string') => null }}/> </Provider>
  );
 it('renders correctly', async () => {
   const screen = render(component)
   expect(screen.toJSON()).toMatchSnapshot()
 });
  
describe('more tests', () => {
    const storeCart = store.getState().shoppingCart
    const fakeValues:ProductCart[] = [{
        "id":1,
        "title":"Title",
        "price":100,
        "description":"description",
        "category":"category",
        "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating":{"rate":3.9,"count":120},
        "quantity": 1
    }]

    test('list empty', () => {   
        expect(storeCart.list).toHaveLength(0)
    })

    test('list', async () => {   
        const screen = render(component)
        store.dispatch({ type: Types.CHANGE, payload: { list: fakeValues }})
        await waitFor( () => {
            const cart = store.getState().shoppingCart.list
            expect(cart).not.toHaveLength(0)
          //  expect(screen.getAllByTestId('cart')).not.toHaveLength(0)
        })
    })

    // test('change quantity', async () => {   
    //     const { getAllByTestId, getByText } = render(component)
    //     store.dispatch({ type: Types.CHANGE, payload: { cart: fakeValues }})
    //     const card = getAllByTestId('cart')[0]
    //     fireEvent( getByText('+') , 'press')
    //     expect(getByText('2')).toBeTruthy()

    //     fireEvent( getByText('-') , 'press')
    //     expect(getByText('1')).toBeTruthy()
    // })

})