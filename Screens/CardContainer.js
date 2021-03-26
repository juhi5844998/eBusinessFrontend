import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { View, TextInput, StyleSheet, StatusBar, Image, ImageBackground, Text, Dimensions, TouchableOpacity, ScrollView, Button } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MainScreen from './Main'
import Title from './Title'
import SubTitle from './subtitle'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import {blogAction} from '../Redux/Actions/blogAction'

const { width, height } = Dimensions.get("window");

const CardContainer = (props) => {


  
  const getBlogAll =useSelector(state=> state.getBlogAll)
  const {blogs} = getBlogAll
  console.log(blogs)
  //console.log(product)
 
  const dispatch = useDispatch()
  //console.log(getBlogAll);


  useEffect(() => {
   dispatch(blogAction())
  }, [])

 

  return (
    <ScrollView style={{margin:7.5}}>
      <View style={{ flex: 1 }}>
        <View style={{marginBottom:5}}>
          <MainScreen />
        </View>
       
        <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
          <View style={{ overflow: 'hidden' }}>
            <ImageBackground style={{ width: width - 20, height: height/4 - 20 }} source={require('../assets/darkbuilding.jpg')}>
              <Text style={styles.text}>My Blog</Text>
              <Text style={styles.text1}>professional Blog Page</Text>
            </ImageBackground>
          </View>
          
              {blogs&&blogs.map((item) => {
            return (
              
          <View style={{ marginTop: 3 }}>
            <Image style={{ height: height/2-20 , width: width -20 , resizeMode:"center"  }} source={{uri:item.imageUrl}}  />
            
            <View style={{ flexWrap: 'wrap', flexDirection: 'row',  margin: 10, marginTop:1 }}>
              <View style={{padding:2}}><AntDesign name="message1" size={22} color="black" /></View>
              <Text  style={{padding:2}}>11 comments</Text>
              <View  style={{padding:2}}><EvilIcons name="calendar" size={22} color="black" /></View>
              <Text  style={{padding:2}}>{item.date}</Text>
            </View>
            <View>
              <Title>{item.title}</Title>
            </View>
            <View>
              <SubTitle>{item.html}</SubTitle>
            </View>
            <View>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => props.navigation.navigate('BlogDetails')}
              >
                <Text style={styles.TextStyle}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
            )
          })}
        </View>
      </View>
</ScrollView>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20
  },
  text1: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    //marginVertical:10
  },
  stretch: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginHorizontal: 10

  },
  SubmitButtonStyle: {

    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 30,
    width: width /3 - 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor:'#00BCD4'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize:15
  }
})

export default CardContainer