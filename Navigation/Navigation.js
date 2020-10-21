
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BarsList from '../Components/BarsList'
import BarDetails from '../Components/BarDetails'


const Stack = createStackNavigator();


 function Nav() {

        return(
            
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={BarsList} />
                    <Stack.Screen name="BarDetails" component={BarDetails}/>
                </Stack.Navigator>
            
        );
    }
        
export default Nav()