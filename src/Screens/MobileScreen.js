import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function MobileScreen() {
  const [value, setValue] =useState('');
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <Text style={{fontSize: 34, fontWeight: 'bold'}}>My Mobile</Text>
      </View>
      <View style={styles.description}>
        <Text>
          Please enter your valid phone number. We will send you a 4-digit code
          to verify your account.
        </Text>
      </View>
      <View style={styles.mobileField}>
        <TextInput style={styles.input} placeholder="Your mobile number" value={value} onChangeText={setValue} keyboardType="numeric" />
      </View>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Text>Continue</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop:128,
    marginHorizontal:40,
  },
  description: {
    marginHorizontal:40,
  },
  mobileField: {
    marginTop:32,
    marginHorizontal:40,

  },
  input: {},
  btn: {
    marginTop: 64,
    marginHorizontal:40,
    width: 295,
    height: 56,
    backgroundColor: '#E94057',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
