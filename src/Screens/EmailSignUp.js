import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
<<<<<<< HEAD
import {SignUp} from '../Components/Auth.js';

export default function EmailSignUp({navigation}) {
=======
import SignUpApi from '../Components/Auth';
>>>>>>> 177db292ad4be57bcd5266548c36c27a9fc48c0c

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
<<<<<<< HEAD
  
  
  const SubmitCred = () => {
    if (!email && !password && !confirmPassword)
    {console.log(email)
      // return alert('Please fill the email field')
    }
    // if (password !== confirmPassword) return alert('Password do not match');

    SignUp(email, password);
  };
  
  
=======

  const SubmitCred = () => {
    console.log(email);
  };

>>>>>>> 177db292ad4be57bcd5266548c36c27a9fc48c0c
  return (
    <SafeAreaView>
      <View style={styles.head}>
        <Text style={{fontSize: 34, fontWeight: 'bold'}}>
          Sign up with email
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.loginField}>
        <TextInput
          style={styles.email}
          placeholder="Email id"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.confirmpass}
          placeholder="Confirm password"
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity activeOpacity={0.5} onPress={SubmitCred}>
        <View style={styles.btnWrap}>
          <Text style={{fontSize: 16}}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 128,
    paddingHorizontal: 40,
  },
  loginField: {
    paddingTop: 90,
    paddingHorizontal: 40,
  },
  email: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
    fontSize: 14,
  },
  password: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
    fontSize: 14,
  },
  confirmpass: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    marginBottom: 12,
    fontSize: 14,
  },
  btnWrap: {
    marginTop: 64,
    marginHorizontal: 40,
    width: 295,
    height: 56,
    backgroundColor: '#E94057',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
