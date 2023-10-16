import React from "react";
import { View ,Text, StyleSheet, Image, TouchableOpacity} from "react-native"; 


const LoginRegister = ({ navigation }) =>{

    const logo = require('../assets/loginBackground.png');
 const onLoginClick=()=>{
    return navigation.navigate('LoginRegisterPage', { type : 'login' });
  }
  const onRegisterClick=()=>{
    return navigation.navigate('LoginRegisterPage', { type : 'register' });
  }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/loginBackground.png')} style={styles.BackgroundImage}/>
            <View style={styles.logoContainer} >
                {/* <Image source={logo} style={styles.LogoImage}/> */}
                <Text style={styles.LogoName} >FarmAssist</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={onLoginClick}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={onRegisterClick} >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      display:"flex",
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
    },
    BackgroundImage:{
        height:'65%',
        width:'100%',
        padding:30,
    },
    logoContainer:{
      height:"10%",
    },
    LogoImage:{
       width:"100%",
       height:"100%",
    },
    LogoName:{
      fontSize:25,
      fontWeight:"bold",
    },
    buttonContainer:{
        height:"25%",
      },
    loginButton: {
        backgroundColor: "rgba(30,35,44,255)", // Button background color
        borderRadius: 10, // Border radius to round the button
        width: 300, // Set your preferred button width
        alignItems: "center", // Center the text horizontally
        margin:10,
        height:60,
        justifyContent:"center"
      },
      buttonText: {
        color: "white", // Text color
        fontSize: 18, // Text font size
      },
     
      
});

export default LoginRegister; 