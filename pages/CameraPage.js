import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { View, Text, Image, StyleSheet, Button } from "react-native";
import ImageButton2 from "../components/ImageButton2";

const CameraPage = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            await MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const saveImage = async ()=>{
      if(image){
        try{
          await MediaLibrary.createAssetAsync(image);
          alert('Picture saved');
          setImage(null);
        }catch(e){
          console.log(e);
        }
      }
    }

    if (hasCameraPermission === false) {
        return <Text>No Access to camera</Text>
    }

    return (
        <View style={styles.newcontainer}>
            {!image ? (
                <Camera
                    style={styles.camera}
                    type={type}
                    flashMode={flash}
                    ref={cameraRef}
                >
                  <View  style={styles.upbuttons}>
                    <ImageButton2 icon={'retweet'} onPress={()=>{
                      setType(type===CameraType.back ? CameraType.front :CameraType.back)
                    }} />
                    <ImageButton2 icon={'flash'} 
                    color={flash=== Camera.Constants.FlashMode.off ? 'gray':'#f1f1f1'}
                    onPress={()=>{
                      setFlash(flash===Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on :Camera.Constants.FlashMode.off)
                    }} />
                  </View>
                </Camera>
            ) : (
                <Image source={{ uri: image }} style={styles.camera} />
            )}
            <View>
                {image ?
                    <View style={styles.buttons}>
                        <ImageButton2 title={'Re-take'} icon="retweet" onPress={()=>setImage(null)} />
                        <ImageButton2 title={'Save'} icon="check" onPress={saveImage} />
                    </View>
                : 
                <ImageButton2 title={'Take a picture'} onPress={takePicture} icon="camera"/>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    newcontainer: {
       flex:1,
       backgroundColor:'#000',
       justifyContent:'center',
       paddingBottom:20, 
    },
    camera: {
       flex:1,
       borderRadius:20,
    },
    upbuttons:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:40
    },
    buttons:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:50
    },
  
});

export default CameraPage;
