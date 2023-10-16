import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import ImageButton from '../ImageButton';

const Controlbox = (props) => {

  const onCameraClick=()=>{
    return props.navigation.navigate('CameraPage');
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.centeredRow}>
        <ImageButton imageStyle = {style= styles.image} onPress={console.log("Button pressed 1")} source={require('../icons/cart.png')}/>
        <ImageButton imageStyle = {style= styles.image} onPress={console.log("Button pressed 2")} source={require('../icons/message.png')}/>
        <ImageButton imageStyle = {style= styles.image} onPress={onCameraClick} source={require('../icons/camera.png')}/>
        <ImageButton imageStyle = {style= styles.image} onPress={console.log("Button pressed 4")} source={require('../icons/expert.png')}/>
        <ImageButton imageStyle = {style= styles.image} onPress={console.log("Button pressed 5")} source={require('../icons/profile.png')}/>
      </View>
    </View>
  );
};

// require('../icons/camera.png')
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:3
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    height:'100%',
    width:'100%',
    marginTop:5,
    padding:10
}
 
});

export default Controlbox;