import { Component } from "react";
import { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ImageEditor
} from 'react-native'
import TourScreenTab from "./TourScreenTab/TourScreenTab";
import Images from "../assets";

const tabButtons = [
    {
        title: 'All',
        imageActive: Images.tours.allActive,
        imageInActive: Images.tours.allInActive
    },
    {
        title: 'East Tour',
        imageActive: Images.tours.EastActive,
        imageInActive: Images.tours.EastInActive
    },
    {
        title: 'Short Tour',
        imageActive: Images.tours.ShortActive,
        imageInActive: Images.tours.ShortInActive
    },
    {
        title: 'Long Tour',
        imageActive: Images.tours.LongActive,
        imageInActive: Images.tours.LongInActive
    },
]

class TourScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentBarIndex: 0,
        }
    }


    renderView = ({ item }) => (
        <View style={styles.flatListStyle}>
            <Image style={styles.flatListImage} source={{ uri: item.image }} />
            <Text style={styles.flatListText}>{item.title}</Text>
        </View>
    )

    handleCheckPress = (type) => {
        let indexx = tabButtons.findIndex(item => item.title === type)
        this.setState({ ...this.state, currentBarIndex: indexx })
    }

    renderBarButtons = () => {
        return (
            <View style={styles.tab}>
                {tabButtons.map((item, index) => {
                    const { currentBarIndex } = this.state
                    return <TourScreenTab
                        image={currentBarIndex === index ? item.imageActive : item.imageInActive}
                        title={item.title}
                        onEvent={this.handleCheckPress}
                        isActive={currentBarIndex === index}
                    />
                })}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image source={require('../assets/group.jpg')} />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Tour</Text>
                    <Image source={require('../assets/avatar.jpg')} />
                </View>

                <View style={styles.bottom}>
                    {this.renderBarButtons()}

                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            data={DATA}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={this.renderView}
                        />
                    </View>

                </View>
            </View>
        )
    }
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
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    titleText: {
        fontWeight: 'bold',

    },
    bottom: {
        flex: 2,
    },
    flatListStyle: {
        margin: 12,
        width: 151,
        height: 210,
    },
    flatListImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    flatListText: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        color: 'red',
        fontWeight: 'bold'
    },
    tab: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    }


})

export default TourScreen