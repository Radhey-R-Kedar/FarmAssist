import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRoute } from '@react-navigation/native';


const LoginRegisterPage = ({navigation}) => {
  const route = useRoute();
  const { type } = route.params;
  const [page, setPage] = useState(type);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;
 


  const handleLogin = async () => {
    setIsLoading(true);
    try{
        const responce = await signInWithEmailAndPassword(auth, email, password);
        if(responce._tokenResponse.email === email){
          navigation.navigate('Home');
        }
    }catch(error) {
        console.log(error);
        alert('Sign in failed: ' + error.message);
    }finally{
        setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try{
        const responce = await createUserWithEmailAndPassword(auth, email, password);
        alert('Check your emails!');
        if(responce._tokenResponse.email === email){
          navigation.navigate('Home');
        }
    }catch(error) {
        console.log(error);
        alert('Sign in failed: ' + error.message);
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{page === 'login' ? 'Login' : 'Register'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {page === 'register' && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      )}
      <Button
        title={page === 'login' ? 'Login' : 'Register'}
        onPress={page === 'login' ? handleLogin : handleRegister}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text
        style={styles.toggleLink}
        onPress={() => {
          setPage(page === 'login' ? 'register' : 'login');
        }}
      >
        {page === 'login' ? 'Create an account?' : 'Already have an account?'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  toggleLink: {
    color: 'blue',
    marginTop: 20,
  },
});

export default LoginRegisterPage;