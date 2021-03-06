/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Header from '../../src/components/header';
 
 // Note: test renderer must be required after react-native.
import { fireEvent, render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../../src/store';
const icon = require('../../src/assets/images/logo_icon.png');

describe('renders correctly', () => {
    const onPressLeft = jest.fn()
    const onPressRight = jest.fn()
    
    const component  = <Provider store={store} ><Header 
        buttonLeft={icon}
        title='TITLE'
        buttonRight={icon}

        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
    />
    </Provider>

    it('basic', () => {
        const screen = render(component);
        expect(screen.toJSON()).toMatchSnapshot()
    });

    it('more renders', () => {
        const { getAllByText, getByTestId } = render(<Provider store={store} ><Header 
            buttonLeft={'LEFT'}
            title='TITLE'
            buttonRight={icon}
        /></Provider>);

        expect(getAllByText(/TITLE|LEFT/)).toBeTruthy()
        expect(getByTestId('imageRight')).toBeTruthy()
       
    });

    it('functions', () => {

        const { getByTestId } = render(component);

        expect(getByTestId('imageLeft')).toBeTruthy()

        fireEvent(getByTestId('buttonLeft'), 'onPress')
        expect(onPressLeft).toBeCalled()

        fireEvent(getByTestId('buttonRight'), 'onPress')
        expect(onPressRight).toBeCalled()
    });
})

 