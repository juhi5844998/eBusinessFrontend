import React from 'react'
import {View, TextInput, StyleSheet,StatusBar} from 'react-native'
import SearchBar from './searchBar'

const MainScreen = (props) => {
return (
    <View style= {styles.container}>
       <SearchBar/>
       {props.children}
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        //paddingHorizontal:15,

    }
})
export default MainScreen