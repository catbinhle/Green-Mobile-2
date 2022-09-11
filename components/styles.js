import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      top:{
        flex:2,
      },
      bottom:{
        flex:1,
      },
      titleWelcome:{
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
      },
      backgroundimg:{
        alignItems:'flex-end',
        height:'100%',
        justifyContent:'center'
      },
      signInButton:{
        marginTop:10,
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#0E4A86',
        width:'85%',
        borderRadius:12,
        justifyContent:'center',
        padding:15,
      },
      signUpLink:{
        marginTop:10,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'46%'
      },
})

export default styles