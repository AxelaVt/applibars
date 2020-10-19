import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const StackNavigator = createStackNavigator({

    
        Display: {
            screen: Display,
            navigationOptions: {
                title: 'Liste des Bars'
            }
        },
        BarDetail: {
            screen: BarDetail
        }
    


})
export default createAppContainer(StackNavigator)