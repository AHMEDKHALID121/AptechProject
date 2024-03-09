import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import TabRoutes from './TabRoutes'
import * as Container from '../Container/index'

export default function (Stack) {
    return (
        <>
            <Stack.Screen  options={{title: 'Home'}} name={NavigationStrings.HOME} component={Container.Home}  />
            <Stack.Screen  options={{title: 'Add Events', headerShown: true}} name={NavigationStrings.ADD_EVENTS} component={Container.AddEvents}  />
            <Stack.Screen  options={{title: 'View Events', headerShown: true}} name={NavigationStrings.VIEW_EVENTS} component={Container.ViewEvents}  />        
            <Stack.Screen  options={{title: 'Events CRUD', headerShown: true}} name={NavigationStrings.EVENT_CRUD} component={Container.EventCrud}  />
        </>
    )
}