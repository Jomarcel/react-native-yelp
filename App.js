import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import ResultsDetails from './src/components/ResultsDetails'





const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: ResultsShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'BusinessSearch'
  }
}



);



export default createAppContainer(navigator);