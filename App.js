import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'

export default class App extends React.Component {

  render() {
    return (
      
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )
  }

}
    
  
  

