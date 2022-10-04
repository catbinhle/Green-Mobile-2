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
            toursData: []
        }
    }

    getAPI = () => {
        fetch('https://cattechsolutions.com/tours.json')
        .then((response) => response.json())
        .then((json) => {
            this.setState({...this.state, toursData: json})
        })
        .catch((error) => {
            console.error(error)
        })
    }

    filterData = () => {
        const {currentBarIndex, toursData} = this.state
        if (currentBarIndex === 0) return toursData
        return toursData.filter((item, index) => item.type === tabButtons[currentBarIndex].title)
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
        this.getAPI()
    }
    componentWillUnmount() {
        console.log('****** Tours Closed')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('***** preview State: ', prevState)
        if (prevState.currentBarIndex !== this.state.currentBarIndex) {
            console.log('****** Tours Update: ', this.state.currentBarIndex)
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