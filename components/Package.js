import { View, Text, Image, TextInput, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import loginScreen from './LoginScreen';

export default function PackageScreen({ navigation }) {
    const [selectedId, setSelectedId] = useState(null)

    const renderView = ({item}) => (
        <TouchableOpacity onPress={() => {
          setSelectedId(item.id)
            item.isChecked=!item.isChecked
          }}
         style={{
         marginBottom:15,
         marginHorizontal:7,
         width:'46%',
         height:200,
         }}>
           <Image style={{width:'100%',height:'100%', borderRadius:20,}} source={{uri:item.image}}/>
           <Text style={item.id%2==0?styles.odd:styles.even}>{item.title}</Text>
        <View style={{
          position:'absolute',
          right:0,
          padding:15,
          }}>
          {
            item.isChecked?
            <Text style={{fontWeight:'bold',color:'red'}}>Checked</Text>
            :
            <Text style={{fontWeight:'bold',color:'red'}}>Not check</Text>   
          }   
          </View>
        </TouchableOpacity>
    )

    const handleLogout = () => {
          
        alert("Sign out complete")
        navigation.popToTop()
    }

    const handleGoBack = () => {
        navigation.goBack('HomeScreen')
    }
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={require('../assets/group.jpg')} />
            <Text style={{
                fontSize:30,
                fontWeight:'bold'
            }}>Package</Text>
            <Image source={require('../assets/avatar.jpg')} />
        </View>

        <View style={{
          marginVertical:10,
          flex:1,
          paddingHorizontal: 15
        }}>
          <FlatList
            data = {DATA}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={renderView}
            keyExtractor={(item,index) => index.toString()}
          />
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
            <TouchableOpacity onPress={handleLogout}>  
              <View style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'lightgreen',
                borderRadius:20,
                width:100,
                height:50,
                alignSelf:'center'
              }}>
                <Text style={{
                  fontSize:20,
                  textAlign:'center'
                }}>Log out</Text>
              </View>
            </TouchableOpacity>  

            <TouchableOpacity onPress={handleGoBack}>  
              <View style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'lightgreen',
                borderRadius:20,
                width:100,
                height:50,
                alignSelf:'center'
              }}>
                <Text style={{
                  fontSize:20,
                  textAlign:'center'
                }}>Go back</Text>
              </View>
            </TouchableOpacity>  
        </View>
    </View>
  )
}

const DATA = [
    {
      id: 1,
      image: 'https://c0.wallpaperflare.com/preview/298/610/503/vietnam-ho-chi-minh-city-cityscape-dusk-thumbnail.jpg',
      title: 'Ho Chi Minh city',
      isChecked: false
    },
    {
      id: 2,
      image: 'https://c0.wallpaperflare.com/preview/582/203/631/ha-noi-city-vietnam-lake-thumbnail.jpg',
      title: 'Ha Noi city',
      isChecked: false
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/photos/sunny-beach-in-the-pearl-island-of-phu-quoc-vietnam-picture-id1307905856?b=1&k=20&m=1307905856&s=170667a&w=0&h=MMd7neh6NOOxeUUlo6eCeU49vWp7HhQXtgTw0VNjogo=',
      title: 'Phu Quoc island',
      isChecked: false
    },
    {
      id: 4,
      image: 'https://media.istockphoto.com/photos/panorama-of-the-city-of-nha-trang-in-vietnam-from-drone-point-of-view-picture-id827359312?k=20&m=827359312&s=612x612&w=0&h=4QigU_O-sGaDhuFBOS_K66A4cXxc5IUoT4NrbsPw7Oo=',
      title: 'Nha Trang city',
      isChecked: false
    },
    {
      id: 5,
      image: 'https://c0.wallpaperflare.com/preview/298/610/503/vietnam-ho-chi-minh-city-cityscape-dusk-thumbnail.jpg',
      title: 'Ho Chi Minh city',
      isChecked: false
    },
    {
      id: 6,
      image: 'https://c0.wallpaperflare.com/preview/582/203/631/ha-noi-city-vietnam-lake-thumbnail.jpg',
      title: 'Ha Noi city',
      isChecked: false
    },
    {
      id: 7,
      image: 'https://media.istockphoto.com/photos/sunny-beach-in-the-pearl-island-of-phu-quoc-vietnam-picture-id1307905856?b=1&k=20&m=1307905856&s=170667a&w=0&h=MMd7neh6NOOxeUUlo6eCeU49vWp7HhQXtgTw0VNjogo=',
      title: 'Phu Quoc island',
      isChecked: false
    },
    {
      id: 8,
      image: 'https://media.istockphoto.com/photos/panorama-of-the-city-of-nha-trang-in-vietnam-from-drone-point-of-view-picture-id827359312?k=20&m=827359312&s=612x612&w=0&h=4QigU_O-sGaDhuFBOS_K66A4cXxc5IUoT4NrbsPw7Oo=',
      title: 'Nha Trang city',
      isChecked: false
    },
  ]

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:50,
    },
    titleText:{
        fontWeight:'bold',
        
    },
    even:{ //số chẵn
        position:'absolute',bottom:0,padding:15,color:'yellow', fontWeight:'bold'
    },  
    odd:{ //số lẻ
        position:'absolute',bottom:0,padding:15,color:'red', fontWeight:'bold'
    },
})
