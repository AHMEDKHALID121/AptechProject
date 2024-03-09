import React from 'react'
// import * as Screens from '../Screens/index'
import NavigationStrings from '../constants/NavigationStrings'
import * as Container from '../Container/index'

export default function (Stack) {
    return (
        <>
        <Stack.Screen  options={{title: 'Login'}} name={NavigationStrings.LOGIN} component={Container.Login}  />
        <Stack.Screen  options={{title: 'Signup'}} name={NavigationStrings.SIGNUP} component={Container.Signup}  />
        </>
    )
}