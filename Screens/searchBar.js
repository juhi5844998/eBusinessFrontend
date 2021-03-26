import React,{useState} from 'react'
import {View, TextInput, StyleSheet,Image,Dimensions} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements' 
const { width, height } = Dimensions.get("window");
const SearchBar = () => {
const [input, setInput] = useState()

    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Here..'/>
           
        </View>
    )

};
const styles = StyleSheet.create({
    container:{
        width:width -20,
        height: 50,
        backgroundColor:'lightgrey',
        //borderRadius:8,
        justifyContent:'center',
        marginTop:25
    },
    searchInput:{
        width:width - 20,
        height:'100%',
        paddingLeft:8,
        fontSize:16
    }
});

export default SearchBar;