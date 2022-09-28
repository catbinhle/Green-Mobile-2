import { Component } from 'react';

import { Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native';

import ItemView from '../../components/ItemView';

const width = Dimensions.get('window').width

class ToursScreen extends Component {

    constructor(props) {
        super(props) 
    }

    renderItemView = ({ item, index }) => (
        <ItemView 
            item={item} 
            width={width}
            onEvent={(item) => {
                this.props.navigation.navigate('[Tours]Detail', item)
            }}
        />
    )

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    style={{
                        marginHorizontal: 4
                    }}
                    numColumns={2}
                    data={Data}
                    renderItem={this.renderItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
    
            </SafeAreaView>
        )
    }
}

const Data = [
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});


export default ToursScreen