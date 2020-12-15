import React from 'react'
import{ StyleSheet, TouchableOpacity,Text, ImageBackground} from 'react-native'

function WelcomeScreen({navigation}) {
  const pressHandler1=()=>{
    navigation.push('Businessscreen')
  }
  const pressHandler2=()=>{
    navigation.push('Gamingscreen')
  }
    return (
     
    <ImageBackground source={require('./assets/OL1V330.jpg')}
                style={styles.background}
                blurRadius={2}>
          <Text style={styles.welcometxt}> Welcome to "Your-Best-Seller" Computer Store: +961 76/504815</Text>
          
        <TouchableOpacity onPress={pressHandler2} style={styles.appButtonContainer}>
           <Text style={styles.appButtonText}> Gaming Laptops</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={pressHandler1} style={styles.appButtonContainer}>
           <Text style={styles.appButtonText}> Business Laptops</Text>
         </TouchableOpacity> 
    </ImageBackground>
     
    )
}
const styles = StyleSheet.create({
   background: {
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center"
    },
welcometxt:{
  fontSize:24 ,
  color:'#FFF',
  textShadowColor:'#E86F29',
  textShadowOffset:{width: 2.5, height: 2.5},
  textShadowRadius:3,
  position:'absolute',
  top:40,
  backgroundColor:"#0177A2",
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid'
},
appButtonContainer: {
  borderWidth:5,
  width:"100%",
  height:90,
  elevation: 8,
  backgroundColor: "E86F29",
  borderRadius: 40,
  paddingVertical: 25,
  paddingHorizontal: 12,
  backgroundColor:"#E86F29"
},
appButtonText: {
  fontSize: 23,
  color: "#000",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase",
  backgroundColor:"#E86F29"
  
}
  });
export default WelcomeScreen
