import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import Splash from '../screens/splash';
import Home from '../screens/home';

const Stack = createStackNavigator();

const RootStack = () => {

    return (       
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ gestureEnabled: false, headerShown: false }}
        >

            <Stack.Screen
                name="Splash"
                component={Splash}
            />  

            <Stack.Screen
                name="Home"
                component={Home}
            /> 
        </Stack.Navigator>
    )
}

export default RootStack