import React from 'react';
import { StyleSheet, View, Text,Image,ScrollView, FlatList} from 'react-native';


const imageArray = [
    { id: '1', source: require('./profileImages/pic-1.png') },
    { id: '2', source: require('./profileImages/pic-2.png') },
    { id: '3', source: require('./profileImages/pic-3.png') },
    { id: '4', source: require('./profileImages/pic-4.png') },
    { id: '5', source: require('./profileImages/pic-1.png') },
    { id: '6', source: require('./profileImages/pic-2.png') },
    { id: '7', source: require('./profileImages/pic-3.png') },
    { id: '8', source: require('./profileImages/pic-4.png') },
    // Add more images as needed
  ];

const ExpertSection = (props) => {
 return (
    <View style={styles.container}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {imageArray.map((item) => (
          <Image key={item.id} source={item.source} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'black',
        borderStyle:'solid'
    },
    image: {
        width: 70,
        height: 70,
        marginHorizontal: 5,
        borderRadius: 50,
      },
});

export default ExpertSection;