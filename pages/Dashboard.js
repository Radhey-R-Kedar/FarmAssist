import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Controlbox from '../components/homepage/Controlbox';
import HeaderSection from '../components/homepage/HeaderSection'
import CommentSection from '../components/homepage/CommentsSection/CommentSection';
import ExpertSection from '../components/homepage/ExpertSection';

const Dashboard = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.headersection}>
       <HeaderSection/>
      </View>
      <View style={styles.expertSection}>
       <ExpertSection/>
      </View>
      <View style={styles.commentbox}>
       <CommentSection navigation={navigation}/>
      </View>
      <View style={styles.controlbox}>
        <Controlbox navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', // This sets the direction to vertical (default)
    alignItems: 'center', // This centers the boxes horizontally
    backgroundColor: '#fff', // Set your desired background color
    width: '100%',
    height:'100%',
  },
  headersection:{
    width: '100%', // Adjust the width of the boxes as needed
    height: '8%', // Set the height of each box
    backgroundColor: '#fff', // Set the background color of the boxes
    justifyContent:'center',
    alignItems:'center'
  },
  expertSection:{
    width: '100%', // Adjust the width of the boxes as needed
    height: '12%', // Set the height of each box
    backgroundColor: '#fff', // Set the background color of the boxes
  },
  commentbox:{
    width: '100%', // Adjust the width of the boxes as needed
    height: '70%', // Set the height of each box
    backgroundColor: '#fff', // Set the background color of the boxes
    alignItems: 'center',
    paddingTop:5,
  },
  controlbox:{
    width: '100%', // Adjust the width of the boxes as needed
    height: '10%', // Set the height of each box
    backgroundColor: '#e5ffe5', // Set the background color of the boxes
    margin:0,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
});

export default Dashboard;


// import React from "react";
// import { View, Text, Button } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Welcome to the Home Screen!</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// };

// export default HomeScreen;
