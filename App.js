import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './Screens/searchBar'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/Main'
import CardContainer from './Screens/CardContainer'
import BlogDetails from './Screens/BlogDetails'

//Redux
import { Provider } from 'react-redux';
import store from './Redux/store'
const Stack = createStackNavigator();
const App=()=> {
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardContainer">
        <Stack.Screen name="CardContainer" component={CardContainer} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   )
}

// const App=()=> {
//     return(
//       <Provider store={store}>
//    <View>
//        <CardContainer/>
//    </View>
//    </Provider>
//     );
//   }

const styles = StyleSheet.create({

});
export default App;
