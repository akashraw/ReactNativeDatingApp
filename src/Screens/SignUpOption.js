import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export default function SignUpOption({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../Assets/images/Login/base1.png')} />
      </View>
      <View style={styles.signUp}>
        <View>
          <Text style={styles.signUpText}>Sign Up to continue</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.push('EmailSignUp')}>
          <View style={styles.emailSign}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Continue with email
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mobile')}
          style={styles.phoneSign}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#E94057'}}>
              Use phone number
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.lineSep} />
          <Text
            style={{alignSelf: 'center', paddingHorizontal: 14, fontSize: 12}}>
            or sign up with
          </Text>
          <View style={styles.lineSep} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <TouchableOpacity
            style={[styles.icons, {marginLeft: 32, marginRight: 20}]}>
            <Icons name="facebook-official" size={28} style={styles.iconItem} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Icons name="google" size={28} style={styles.iconItem} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.icons, {marginLeft: 20, marginRight: 32}]}>
            <Icons name="apple" size={28} style={styles.iconItem} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.left}>Term of use</Text>
        <Text style={styles.right}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imgContainer: {
    marginTop: 128,
    marginHorizontal: 133,
    alignItems: 'center',
  },
  signUp: {
    marginTop: 78,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  signUpText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailSign: {
    marginTop: 32,
    width: 295,
    height: 56,
    backgroundColor: '#E94057',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneSign: {
    marginTop: 20,
    width: 295,
    height: 56,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E8E6EA',
    borderWidth: 1,
  },
  line: {
    marginTop: 64,
    flex: 1,
    marginHorizontal: 40,
  },
  lineSep: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  icons: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius: 15,
  },
  iconItem: {
    color: '#E94057',
    // marginLeft: 16,
    marginTop: 18,
    // marginBottom:16,
    alignSelf: 'center',
  },
  footer: {
    marginTop: 76,
    marginHorizontal: 90,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    color: '#E94057',
  },
  right: {
    color: '#E94057',
  },
});
