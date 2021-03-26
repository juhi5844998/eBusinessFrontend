import React,{useState} from 'react'
import { View, TextInput, StyleSheet, StatusBar, Image, ImageBackground, Text, Dimensions, ScrollView } from 'react-native'


 const Title = (props) => {
    const [title, settitle] = useState();
 return (
     <>
     <Text  style={{fontWeight: 'bold', fontSize: 18}}>{props.children}</Text>
     </>
 )
 }
 const styles = StyleSheet.create({})

 export default Title