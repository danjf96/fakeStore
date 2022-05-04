/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Container from '../../src/components/container';
 
 // Note: test renderer must be required after react-native.
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';
 
describe('renders correctly', () => {
    it('basic', () => {
        const screen = render(<Container />);
        expect(screen.toJSON()).toMatchSnapshot()
    });

    it('with children', () => {
        const { getByText } = render(<Container >
            <Text>Teste</Text>
        </Container>);
        expect(getByText('Teste')).toBeTruthy()
    });
})

 