import React,{ useState } from "react";
import { StyleSheet, View, Text, ScrollView, RefreshControl } from "react-native";
import CommentBox from "./CommentBox";


const commentArray = [
  {key: 0 ,id: 0, profilePicture: require('./profileImages/pic-1.png'), plantImage: require('./profileImages/leaf1.jpeg'), PlantName: 'Grapes', Client_name : "Joe Smith", Login_type : "Login Type" },
  {key: 1 ,id: 1, profilePicture: require('./profileImages/pic-2.png'), plantImage: require('./profileImages/leaf2.jpeg'), PlantName: 'Guava', Client_name : "Kat Johnson", Login_type : "Login Type" },
  {key: 2 ,id: 2, profilePicture: require('./profileImages/pic-3.png'), plantImage: require('./profileImages/leaf3.jpeg'), PlantName: 'Mango', Client_name : "Client name", Login_type : "Login Type" },
  {key: 3 ,id: 3, profilePicture: require('./profileImages/pic-4.png'), plantImage: require('./profileImages/leaf4.jpeg'), PlantName: 'Tomato', Client_name : "Client name", Login_type : "Login Type" },
  {key: 4 ,id: 4, profilePicture: require('./profileImages/pic-1.png'), plantImage: require('./profileImages/leaf1.jpeg'), PlantName: 'Grapes', Client_name : "Client name", Login_type : "Login Type" },
];

const CommentSection = (props) => {


const[Refreshing, setRefreshing] = useState(false)

// const onRefresh=()=>{
//     setRefreshing=(false);

// }

const onCommentClick=()=>{
  return props.navigation.navigate('CommentPage');
}

  return (
    <View style={styles.container}>
        <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
            refreshing={ Refreshing }
            // onRefresh={onRefresh}
            />
        }
        >

        {commentArray.map((item) => (
          <CommentBox
          key={item.key} // Add this line
          profilePicture={item.profilePicture}
          plantImage={item.plantImage}
          onCommentClick = {onCommentClick}
          Client_name={item.Client_name}
          Login_type={item.Login_type}
          PlantName ={item.PlantName}
          />
        ))}      
        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column", // This sets the direction to vertical (default)
    alignItems: "center", // This centers the boxes horizontally
    backgroundColor: "#fff", // Set your desired background color
    width: "100%",
    height: "100%",
  },
  scrollView:{
    width:'90%',
  }
});

export default CommentSection;
