import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import ImageButton from "../../ImageButton";

const CommentBox = (props, { navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profileImg} source={props.profilePicture} />
        <View style={styles.profileDetails}>
          <Text style={styles.clientName}>{props.Client_name}</Text>
          <Text style={styles.loginType}>{props.Login_type}</Text>
        </View>
      </View>
      <View style={styles.images}>
        <Image style={styles.plantImages} source={props.plantImage} />
      </View>
      <View style={styles.options}>
        {/* <Button title="Comments" onPress={() => navigation.navigate('commentPage')} /> */}
        <ImageButton
          imageStyle={(style = styles.commentbtn)}
          onPress={props.onCommentClick}
          source={require("./profileImages/message.png")}
        />
        <View style={styles.QueryInfo}>
          <Text style={styles.plantName}>{props.PlantName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 10, // Border width
    borderColor: "#eeeeee", // Border color
    borderStyle: "solid", // Border style (solid, dashed, dotted, etc.)
    padding: "3%", // Optional padding
    borderRadius: 20,
    width: "100%",
    height: 320,
    marginBottom: 15,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  profileImg: {
    height: "100%",
    width: "20%",
    borderRadius: 50,
  },
  profileDetails: {
    marginLeft: 30,
    justifyContent: "space-evenly",
  },
  clientName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginType: {
    fontSize: 15,
  },
  images: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  plantImages: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  plantName: {
    fontSize: 15,
    marginTop: 20,
  },
  commentbtn: {
    height: "90%",
    width: "90%",
    marginTop: 5,
    marginLeft: -10,
  },
});

export default CommentBox;
