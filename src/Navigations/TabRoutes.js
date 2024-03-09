// import * as React from 'react';
// import { Image, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import * as Screens from '../Screens/index'
// import NavigationStrings from '../constants/NavigationStrings';
// import ImagePath from '../constants/ImagePath';

// const Tab = createBottomTabNavigator();

// export default function TabRoutes() {
//   return (
//       <Tab.Navigator initialRouteName={NavigationStrings.CHATS} screenOptions={{headerShown: false}}>
//         <Tab.Screen 
//         options={{
//             tabBarIcon: ({focused}) => {
//                 return (
//                     <Image style={{tintColor: focused ? "blue" : "black" }} source={ImagePath.icStatus}/>
//                 )
//             }
//         }}  
//         name={NavigationStrings.STATUS} component={Screens.Status} />
//         <Tab.Screen
//          options={{
//             tabBarIcon: ({focused}) => {
//                 return (
//                     <Image style={{tintColor: focused ? "blue" : "black" }} source={ImagePath.icCalls}/>
//                 )
//             }
//         }}  
//         name={NavigationStrings.CALLS} component={Screens.Calls} />
//         <Tab.Screen
//          options={{
//             tabBarIcon: ({focused}) => {
//                 return (
//                     <Image style={{tintColor: focused ? "blue" : "black" }} source={ImagePath.icCamera}/>
//                 )
//             }
//         }}  
//         name={NavigationStrings.CAMERA} component={Screens.Camera} />
//         <Tab.Screen
//          options={{
//             tabBarIcon: ({focused}) => {
//                 return (
//                     <Image style={{tintColor: focused ? "blue" : "black" }} source={ImagePath.icChat}/>
//                 )
//             }
//         }}  
//         name={NavigationStrings.CHATS} component={Screens.Chats} />
//         <Tab.Screen
//          options={{
//             tabBarIcon: ({focused}) => {
//                 return (
//                     <Image style={{tintColor: focused ? "blue" : "black" }} source={ImagePath.icSettings}/>
//                 )
//             }
//         }}  
//         name={NavigationStrings.SETTINGS} component={Screens.Settings} />
//       </Tab.Navigator>
//   );
// }