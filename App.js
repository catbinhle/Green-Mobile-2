import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Binh comment
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.backgroundImg} 
        source={require('./assets/welcomes/bg.png')}/>

      <View style={styles.centerObj}>
        <Image style={styles.centerImg} 
          source={require('./assets/welcomes/welcome1.png')}/>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <Text style={{
            fontWeight:'800',
            fontSize: 18,
          }}>Best Service</Text>
          <Text style={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 16
          }}>
            We promise to provide the best services when it comes to customer experiences.
          </Text>
          <Text style={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 16
          }}>
            version 1.0
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  centerObj: {
    width: '100%', 
    height: '100%',  
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontWeight:'800',
    fontSize: 20,
    marginVertical:15,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal:15,
  },
});
