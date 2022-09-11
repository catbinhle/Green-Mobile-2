import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function HomeScreen({
    onLogout
}) {
    const handleLogout = () => {
        
        alert("Sign out complete")
        onLogout()
    }
  return (
    <View style={{
      flex:1
    }}>
        <View>
          <Image style={{width:'100%'}} source={require('../assets/topimg.jpg')}/>
          <View style={{
            position:'absolute',
            marginLeft:30,
            justifyContent:'center',
            height:'100%',
            bottom:10
          }}>
            <Text style={{
              fontSize:50,
              color:'white',
            }}>=</Text>
          </View>
          <View style={{
            position:'absolute',
            //height:'100%',
            width:'80%',
            bottom:15,
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
              backgroundColor:'#0E4A86',
              height:30,
              width:30,
              borderRadius:50,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <Text style={{fontSize:18, color:'white'}}>Go</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          flex:0.8,
          alignItems:'center'
        }}>
             <View style={{
              width:44,
              height:44,
              backgroundColor:'green',
              borderRadius:50,
              alignSelf:'center'
            }}></View>
            <View style={{
              width:44,
              height:44,
              backgroundColor:'green',
              borderRadius:50,
              alignSelf:'center'
            }}></View>
            <View style={{
              width:44,
              height:44,
              backgroundColor:'green',
              borderRadius:50,
              alignSelf:'center'
            }}></View>
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
 
          <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            marginHorizontal:20,
            marginVertical:20,
          }}>
            <Image style={{
              width:150,
              height:200,
              borderWidth:1,
              borderRadius:10,
              borderColor:'red'
            }} source={require('../assets/background.jpg')}/>
            <Image style={{
              width:150,
              height:200,
              borderWidth:1,
              borderRadius:10,
              borderColor:'red'
            }} source={require('../assets/background.jpg')}/>
          </View>

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

        </View>    
    </View>
  )
}