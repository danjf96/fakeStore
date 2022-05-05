/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Product from '../../src/components/product';
 
 // Note: test renderer must be required after react-native.
import { fireEvent, render } from 'react-native-testing-library';
const fakeValues = {
    "id":1,
    "title":"Title",
    "price":100,
    "description":"description",
    "category":"category",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120}
}
describe('renders correctly', () => {
    it('basic', () => {
        const screen = render(<Product 
            data={fakeValues}
        />);
        expect(screen.toJSON()).toMatchSnapshot()
    });


    it('validation data and big button', () => {
        const { getAllByText,  getByTestId} = render(<Product 
            data={fakeValues}
        />);
        expect(getAllByText(/Title|R$ 100,00|description|category/)).toBeTruthy()
        expect(getByTestId('buttonBig')).toBeTruthy()
    });

    it('onPress', () => {
        const onPress = jest.fn()

        const { getByTestId } = render(<Product 
            data={fakeValues}
            onPressButton={onPress}
        />);

        fireEvent( getByTestId('buttonBig'), 'onPress' )
        expect(onPress).toBeCalled()
    });

    it('small type', () => {
        const onPress = jest.fn()

        const { getByTestId } = render(<Product 
            data={fakeValues}
            onPressButton={onPress}
            typeStyle='small'
        />);

        expect(getByTestId('buttonSmall')).toBeTruthy()
    });


})

 