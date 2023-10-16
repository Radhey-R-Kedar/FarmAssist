import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';




const CommentBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>FarmAssist</Text>
      <Image style={styles.image} source={require('../icons/leaf.png')}/>
      <Image style={styles.image2} source={require('../icons/bell.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', // This sets the direction to vertical (default)
    alignItems: 'center', // This centers the boxes horizontally
    backgroundColor: '#fff', // Set your desired background color
    width: '100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  name:{
    fontFamily: '',
    fontSize:20,
    fontWeight:'bold',
    margin:10,
  },
  image:{
    height:20,
    width:20
  },
  image2:{
    height:20,
    width:20,
    alignItems: 'flex-end',
    marginLeft:'50%'
  }
  
});

export default CommentBox;