/**
* @format
*/

import 'react-native';
import React from 'react';
import InfoModal from '../../src/components/infoModal';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from 'react-native-testing-library';

describe('renders correctly', () => {
    const pressSuccess = jest.fn()
    const pressCancel = jest.fn()

    const component = <InfoModal 
        title='TITLE'
        text='TEXT'
        textSuccess='OK'
        textCancel='CANCEL'
        btnCancel={pressSuccess}
        btnSuccess={pressCancel}
        visible={true}
    />

    it('basic', () => {
        const screen = render(component);
        expect(screen.toJSON()).toMatchSnapshot()
    });



    it('text', () => {
        const { getAllByText } = render(component);
        expect(getAllByText(/TITLE|TEXT|OK|CANCEl/)).toBeTruthy()
    });

    // it('functions', () => {
    //     const { getByText } = render(component);

    //     fireEvent(getByText('OK'), 'onPress')
    //     expect(pressSuccess).toBeCalled()

    //     fireEvent(getByText('CANCEL'), 'onPress')
    //     expect(pressCancel).toBeCalled()

    // });
})

