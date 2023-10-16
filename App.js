import React, { useEffect,useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from './pages/Dashboard';
import CommentPage from './pages/CommentPage'
import CameraPage from "./pages/CameraPage";
import LoginRegister from "./pages/LoginRegister";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createStackNavigator();



const App = () => {

  // const [user, setUser] = useState < User | null>(null);

  // useEffect (() =>{
  //    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
  //     console.log('user', user);
  //     setUser(user)
  //    })
  // },[])

  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     if (user) {
  //       // User is signed in.
  //       setUser(user);
  //     } else {
  //       // No user is signed in.
  //       setUser(null);
  //     }
  //   });
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginRegister}  />
        <Stack.Screen name="LoginRegisterPage" options={{ headerShown: false }} component={LoginRegisterPage}  />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Dashboard}  />
        <Stack.Screen name="CommentPage" options={{ headerShown: false }} component={CommentPage} />
        <Stack.Screen name="CameraPage" options={{ headerShown: false }} component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
