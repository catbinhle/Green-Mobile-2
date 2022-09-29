import { PureComponent } from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';

class ItemView extends PureComponent {

    constructor(props) {
        super(props)
    }

    handleItem = () => {
        const {item, onEvent } = this.props
        onEvent(item)
    }

    render() {
        const {item, width } = this.props

        return (
            <TouchableOpacity 
                style={styles.content}
                onPress={this.handleItem}
                // onPress={() => handleItem(item)}
            >
                <Image 
                    source={{uri: item.image}}
                    style={{
                        flex: 1,
                        height: (width - 40) * 2 / 3 ,
                        resizeMode: 'cover'
                    }}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        width: '50%',
        marginHorizontal: 4,
        marginVertical: 4,
        borderRadius: 10,
        shadowColor: '#8C8C98',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 10, // only Android
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});

export default ItemView

