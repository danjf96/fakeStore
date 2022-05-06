import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import Splash from '../screens/splash';
import Home from '../screens/home';
import ShoppingCart from '../screens/shoppingCart';

const Stack = createStackNavigator();

const RootStack = () => {

    return (       
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ gestureEnabled: false, headerShown: false, cardStyle: {
                backgroundColor: 'white'
            } }}
        >

            <Stack.Screen
                name="Splash"
                component={Splash}
            />  

            <Stack.Screen
                name="Home"
                component={Home}
            /> 

            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCart}
            /> 
        </Stack.Navigator>
    )
}

export default RootStack