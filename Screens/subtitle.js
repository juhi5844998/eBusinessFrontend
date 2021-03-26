import React from 'react'
import { View, TextInput, StyleSheet, StatusBar, Image, ImageBackground, Text, Dimensions, ScrollView } from 'react-native'


 const SubTitle = (props) => {
 return (
     <>
     <Text  style={{fontWeight: '200', fontSize: 18}}>{props.children}</Text>
     </>
 )
 }
 const styles = StyleSheet.create({})

 export default SubTitle