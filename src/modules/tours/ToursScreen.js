import { Component } from 'react';

import {
  Dimensions, FlatList, SafeAreaView, StyleSheet, View,
} from 'react-native';

import Images from '../../../assets';
import BarButton from '../../components/BarButton';
import ItemView from '../../components/ItemView';

const width = Dimensions.get('window').width
const tabButtons = [
    {
        title: 'All',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'East Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'Short Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'Long Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    }
]

class ToursScreen extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentBarIndex: 0,
            test: ''
        }
    }

    filterData = () => {
        const {currentBarIndex} = this.state
        if (currentBarIndex === 0) return Data
        return Data.filter((item, index) => item.type === tabButtons[currentBarIndex].title)
    }

    handleBarButtons = (type) => {
        let index = tabButtons.findIndex(item => item.title === type)
        this.setState({...this.state, currentBarIndex: index})
    }   

    renderItemView = ({ item, index }) => (
        <ItemView 
            item={item} 
            width={width}
            onEvent={(item) => {
                const {navigation} = this.props
                navigation.navigate('[Tours]Detail', item)
            }}
        />
    )

    renderBarButtons = () => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: 10
            }}>
                {tabButtons.map((item, index) => {
                    const {currentBarIndex} = this.state
                    return <BarButton 
                        image={currentBarIndex === index ? item.imageActive : item.imageInActive }
                        title={item.title}
                        onEvent={this.handleBarButtons}
                        isActive={currentBarIndex === index}
                    />
                })}
            </View>
        )
    }

    componentDidMount() {
        console.log('****** Tours Launched')
    }
    componentWillUnmount() {
        console.log('****** Tours Closed')
    }

    componentDidUpdate(prevState) {
        if (prevState.test !== this.state.test) {
            console.log('****** Tours Update')
        }
    }

    render() {
        return (
            <SafeAreaView>
                {this.renderBarButtons()}
                <FlatList
                    style={{
                        marginHorizontal: 4
                    }}
                    numColumns={2}
                    data={this.filterData()}
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
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'Short Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'Long Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'Long Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        type: 'East Tour',
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