import React from 'react';
import { SafeAreaView , StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Item = ({item}) => {
        return(
    <View 
    // style={styles.item}
    style={{
        flex:1,
        marginBottom:16,
        marginHorizontal: 8,
        //width:"45%",
        height:200
    }}
    >
    <Image
        style={{width: "100%", height:"80%"}}
        source={item.img}
        resizeMode = {"cover"}
      />
    <Text style={{color: 'black', fontSize:20}}>{item.name}</Text>
    <Text style={{color: 'black', fontSize:9}}>{item.desc}</Text>
    </View>
    );
    }

function SaleScreen() {
    const DATA = [
        {
          id: '20',
          name: 'Ha Noi',
          desc: 'Thu do',
          img:require('../assets/hanoi.jpg')
        },
        {
          id: '50',
          name: 'Ho Chi Minh',
          desc: 'Thanh Pho',
          img:require('../assets/hochiminh.jpg')
        },
        {
            id: '43',
            name: 'Da Nang',
            desc: 'Thanh Pho',
            img:require('../assets/danang.jpg')
        },
        {
          id: '75',
          name: 'Hue',
          desc: 'Co do',
          img:require('../assets/hue.jpg')
        },
        {
            id: '85',
            name: 'Phan Thiet',
            desc: 'Du lich',
            img:require('../assets/phanthiet.jpg')
          },
          {
            id: '62',
            name: 'Long An',
            desc: 'Vua o',
            img:require('../assets/hue.jpg')
          },
          {
              id: '63',
              name: 'Tien Giang',
              desc: 'Hau o',
              img:require('../assets/phanthiet.jpg')
            },
        {
            id: '64',
            name: 'Vinh Long',
            desc: 'Vua o',
            img:require('../assets/hue.jpg')
            },
            {
                id: '65',
                name: 'Can Tho',
                desc: 'Hau o',
                img:require('../assets/phanthiet.jpg')
            },
            {
                id: '68',
                name: 'Kien Giang',
                desc: 'Hau o',
                img:require('../assets/phanthiet.jpg')
            },         
            {
                id: '69',
                name: 'Ca Mau',
                desc: 'Hau o',
                img:require('../assets/phanthiet.jpg')
            },                              
      ];
      
      const renderItem = ({item})=>(
        <Item item={item}/>
        );
    return (
         <SafeAreaView>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
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
        width:"100%",
        height:100,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        },
});

export default SaleScreen