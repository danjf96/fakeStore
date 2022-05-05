/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import CustomButton from '../../src/components/customButton';
 
 // Note: test renderer must be required after react-native.
import { fireEvent, render } from 'react-native-testing-library';
 
describe('renders correctly', () => {
    const onPress = jest.fn()
    const component = <CustomButton text='BUTTON' onPress={onPress} testID='button'/>
    it('basic', () => {
        const screen = render(component);
        expect(screen.toJSON()).toMatchSnapshot()
    });

    it('onPress and text', () => {
        const { getByText, getByTestId } = render(component);
        expect(getByText('BUTTON')).toBeTruthy()
        fireEvent(getByTestId('button'),'onPress')
        expect(onPress).toBeCalled()
    });
})

 