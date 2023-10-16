import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";

const ImageButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => {
          return { opacity: pressed ? 0 : 1 };
        }}
      >
        <Image style={props.imageStyle} source={props.source} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 40,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 2,
  },
});

export default ImageButton;
