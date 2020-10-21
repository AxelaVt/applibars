import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import BarsList from './Components/BarsList'
import BarDetails from './Components/BarDetails'


export default class App extends React.Component {

  

  render(){
    
    const Stack = createStackNavigator();
    console.log(this.props)
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BarsList} title={"MabièreàNevers"} />
          <Stack.Screen name="BarDetails" component={BarDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
