
import React, { useEffect, useRef } from 'react'
import {  BackHandler, StatusBar, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { CommonActions, NavigationContainer } from '@react-navigation/native' //

import RootStack from './RootStack'
const rotasParaFechaApp = ['Home','Splash']
const rotasRedirectHome = ['Finish']

const Routes = () => {
    const nav:any = useRef();

    useEffect( () => {
       
        const backAction = () => {
            
            if(nav.current) {
                
                const rotaAtual = nav.current.getCurrentRoute() 
     
                if (rotasParaFechaApp.includes(rotaAtual.name)) {
                    BackHandler.exitApp()
                    return false
                } 
                else if (rotasRedirectHome.includes(rotaAtual.name)){
                    nav.current.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Home' }
                        ],
                    }))
                    return true
                }
            } 
            
            nav.current.goBack()
            
            return true;
        };
    
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => backHandler.remove();
    },[])

    const getActiveRouteName = (navigation:any) =>  {
        if (!navigation) {
            return null
        }

        const route = navigation.routes[navigation.index]

        return route.routeName    
    }

    return (
        <React.Fragment>
            <StatusBar backgroundColor={'black'} />
            <NavigationContainer  ref={nav} 
                onStateChange={ state => {
                        // let prevScreen = getActiveRouteName(state)
                        // let currentScreen = getActiveRouteName(state)
                        // if (prevScreen !== currentScreen) 
                        Keyboard.dismiss()                        
                }}>
                {/* <KeyboardAvoidingView behavior={'padding'} style={{ flex:1 }} keyboardVerticalOffset={Platform.OS == 'ios' ? undefined : -400} > */}
                    <RootStack />   
                {/* </KeyboardAvoidingView> */}
            </NavigationContainer>
        </React.Fragment>
    )
}
export default Routes
