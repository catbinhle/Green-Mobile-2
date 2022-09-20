import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function HomeScreen({
    onLogout,
    navigation
}) {
    const handleLogout = () => {
        
        alert("Sign out complete")
        navigation.goBack()
    }

    const handlePackage = () => {
        navigation.navigate('PackageScreen')
    }
    
    const windowWidth = Dimensions.get('window').width
    const renderView = ({item}) => (
      <View style={{
        width:250,
        height:280,
        margin:10,
      }}>
          {/* <Image style={{width:'100%',height:'100%', borderRadius:20}} source={require('../assets/HomeScreen/frame1.jpg')}/> */}
          <Image style={{width:'100%',height:'100%',borderRadius:20}} source={{uri:item.image}} />
      </View>
    )

  return (
    <View style={{
      flex:1,
      backgroundColor:'white'
    }}>
        <View>
          <Image style={{width:'100%'}} source={require('../assets/topimg.jpg')}/>
          <View style={{
            position:'absolute',
            marginLeft:30,
            justifyContent:'center',
            height:'100%',
          }}>
            <Text style={{
              fontSize:50,
              color:'white',
            }}>=</Text>
          </View>

          <View style={{
            position:'absolute',
            width:'80%',
            bottom:10,
            marginLeft:30,
            backgroundColor:'white',
            borderRadius:12,
            padding:10,
            flexDirection:'row',
            justifyContent:'space-between',
          }}>
            <TextInput style={{fontSize:20}} placeholder='Search'></TextInput>
            <TouchableOpacity>
            <View style={{
              height:30,
              width:30,
              borderRadius:50,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <Icon name='search' size={20} color="black" />
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          marginVertical:20,
          alignItems:'center',
        }}>
            <Image source={require('../assets/HomeScreen/earthplane.jpg')}/>
            <Image source={require('../assets/HomeScreen/taxi.jpg')}/>
            <Image source={require('../assets/HomeScreen/earth.jpg')}/>
        </View>
        
        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          top:-30
        }}>
            <Text style={{
              marginTop:10,
              fontSize:15,
              textAlign:'center',
              width:100,
            }}>Maui Tour</Text>
                     
            <Text style={{
              marginTop:10,
              fontSize:15,
              textAlign:'center',
              width:100
            }}>Taxi services in Maui</Text>
            
            <Text style={{
              marginTop:10,
              fontSize:15,
              textAlign:'center',
              width:100
            }}>Maui tour packages</Text>
        </View>

        <View style={{
          flex:2
        }}>
          <View style={{
            marginLeft:30,
          }}>
            <Text style={{
              fontSize:18,
              fontWeight:'bold'
            }}>Mauibay Popular Destination</Text>
          </View>

          <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item,index) => index.toString()}
            data = {DATA}
            renderItem = {renderView}
          />

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={handleLogout}>  
              <View style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'lightgreen',
                borderRadius:20,
                width:100,
                height:50,
                alignSelf:'center',
                marginBottom:20,
              }}>
                <Text style={{
                  fontSize:20,
                  textAlign:'center'
                }}>Log out</Text>
              </View>
            </TouchableOpacity>  

            <TouchableOpacity onPress={handlePackage}>  
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
                }}>Package</Text>
              </View>
            </TouchableOpacity>  
        </View>

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