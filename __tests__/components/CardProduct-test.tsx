/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import CardProduct from '../../src/components/cardProduct';
 
 // Note: test renderer must be required after react-native.
import { fireEvent, render } from 'react-native-testing-library';
const fakeValues = {
    "id":1,
    "title":"Title",
    "price":100,
    "description":"description",
    "category":"category",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120},
    "quantity": 1
}
describe('renders correctly', () => {
    it('basic', () => {
        const screen = render(<CardProduct 
            data={fakeValues}
            onPressButton={ () => null}
        />);
        expect(screen.toJSON()).toMatchSnapshot()
    });


    it('validation data and big button', () => {
        const { getAllByText} = render(<CardProduct 
            data={fakeValues}
            onPressButton={ () => null}
        />);
        expect(getAllByText(/Title|R$ 100,00|1x/)).toBeTruthy()
    });

    it('onPress', () => {
        const onPress = jest.fn()

        const { getByText } = render(<CardProduct 
            data={fakeValues}
            onPressButton={onPress}
        />);

        fireEvent(getByText('+'), 'onPress' )
        expect(onPress).toBeCalled()

        fireEvent(getByText('-'), 'onPress' )
        expect(onPress).toBeCalled()

    });
})

 