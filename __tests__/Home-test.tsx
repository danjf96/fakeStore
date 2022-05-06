/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import { act, fireEvent, render, waitFor } from 'react-native-testing-library';
 import Home from '../src/screens/home';
 import store from '../src/store'
 import { Provider } from 'react-redux';
 
 const component = (
   <Provider store={store} > <Home navigation={{ navigate: (screen:'string') => null }}/> </Provider>
 );
 const fakeTime = (time: number) => new Promise( (resolve, reject) => setTimeout( () => resolve(null) ,time))
 
 it('renders correctly', async () => {
   const screen = render(component)
   await waitFor( () => expect(screen.toJSON()).toMatchSnapshot()) 
 });
 
 describe('test loading and render items or not', () => {
   const storeProducts = store.getState().products
 
   test('renders correctly loading', async () => {
 
     const { getByTestId } = render( component )   
     const { list, newsList} = store.getState().products
     expect(list).toHaveLength(0)
     expect(newsList).toHaveLength(0)
     expect(getByTestId('loading')).toBeTruthy()
 
   });
 
   test('renders correctly card products', async () => {
     const onPress = jest.fn()
     const onPressSecond = jest.fn()
 
     const { getAllByTestId } = await waitFor(() =>
         render(component)
     ); 
 
     await waitFor( () => {
       const { list, newsList } = store.getState().products
       expect(list).not.toHaveLength(0)
       expect(newsList).not.toHaveLength(0)
       //expect(getAllByTestId('product')).not.toHaveLength(0)
     })
 
   });
   
}) 
   