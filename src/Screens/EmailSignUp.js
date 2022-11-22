import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SignUp} from '../Components/Auth';

export default function EmailSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const SubmitCred = () => {
    if (!email && !password && !confirmPassword)
      return alert('Please fill the email field');
    if (password !== confirmPassword) return alert('Password do not match');

    SignUp(email, password, confirmPassword);
  };
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
          onSubmitEditing={text => setEmail(text)}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          secureTextEntry={true}
          onSubmitEditing={text => setPassword(text)}
          //   value={email}
        />
        <TextInput
          style={styles.confirmpass}
          placeholder="Confirm password"
          secureTextEntry={true}
          onSubmitEditing={text => setConfirmPassword(text)}
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