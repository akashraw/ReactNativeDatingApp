import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function OnBoardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.girlPhoto}
          source={require('../Assets/images/girl1.jpg')}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Algorithm</Text>
        </View>
        <Text style={styles.para}>
          Users going through a vetting process to ensure you never match with
          bots.
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginNote}>
        <Text
          style={{
            fontSize: 16,
          }}>
          Already have an account? Sign In
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  imgContainer: {
    marginHorizontal: 70,
    marginTop: 76,
    elevation: 27,
    shadowColor: '#171717',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#171717',
  },
  girlPhoto: {
    borderRadius: 25,
  },
  textContainer: {
    marginTop: 44,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#E94057',
  },
  desc: {},
  para: {
    fontSize: 14,
    textAlign: 'center',
  },
  carDot: {},
  btn: {
    marginTop: 42,
    marginHorizontal: 40,
    width: 295,
    height: 56,
    backgroundColor: '#E94057',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginNote: {
    marginHorizontal: 40,
    marginTop: 20,
  },
});
