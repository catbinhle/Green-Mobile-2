import React from 'react';

import { SafeAreaView,StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Item = ({item}) => {
    return(
    <View style={styles.item}>
    <Image
        style={{width: "100%",height:200}}
        source={item.img}
        resizeMode = {'cover'}
      />
    <Text style={{color: 'white', fontSize:20}}>{item.name}</Text>
    <Text style={{color: 'white', fontSize:9}}>{item.desc}</Text>
    </View>
    );
    }

function PurchaseScreen() {
    const DATA = [
        {
          id: '20',
          name: 'Ha Noi',
          desc: 'Thu do',
          img:require('')
        },
        {
          id: '50',
          name: 'Ho Chi Minh',
          desc: 'Thanh Pho',
          img:require('')
        },
        {
            id: '43',
            name: 'Da Nang',
            desc: 'Thanh Pho',
            img:require('')
        },
        {
          id: '75',
          name: 'Hue',
          desc: 'Co do',
          img:require('')
        },
        {
            id: '85',
            name: 'Phan Thiet',
            desc: 'Du lich',
            img:require('')
          },
          {
            id: '62',
            name: 'Long An',
            desc: 'Vua o',
            img:require('')
          },
          {
              id: '63',
              name: 'Tien Giang',
              desc: 'Hau o',
              img:require('')
            },
      ];
      
      const renderItem = ({item})=>(
        <Item item={item}/>
        );
    
    return (        
         <SafeAreaView>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
         </SafeAreaView>            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    centerImg: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
        flex: 1
    },
    centerObj: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    titleStyle: {
        fontWeight: '800',
        fontSize: 20,
        marginVertical: 15,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15,
    },
    item: {
        backgroundColor: 'green',
        //width:"100%",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        },
});

export default PurchaseScreen