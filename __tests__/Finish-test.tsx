/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Finish from '../src/screens/finish';
 import { render, waitFor } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../src/store';
import { ProductCart, Types } from '../src/store/ducks/shoppingCart/types';
 const component = (
  <Provider store={store} > <Finish navigation={{ navigate: (screen:'string') => null }}/> </Provider>
);

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

describe('clean cart', () => {
  it('renders correctly', async () => {
    const screen = render(component)
    expect(screen.toJSON()).toMatchSnapshot()
  });

  store.dispatch({ type: Types.CHANGE, payload: { list: fakeValues, total: 10 }})
  const cart = store.getState().shoppingCart

  it('values', () => {
    expect(cart.list.length).not.toBe(0)
    expect(cart.total).toBe(10)
  
  })

  it('clean values', async () => {
    const screen = await waitFor( () => {
      return render(component)
    })
  
  
    await waitFor( () => {
      const { list, total } = store.getState().shoppingCart
  
      expect(list.length).toBe(0)
      expect(total).toBe(0)
    })  
  
  })

});
  