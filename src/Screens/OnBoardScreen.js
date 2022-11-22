import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import DATA from '../DataSources/OnBoardScreenData';

export default function OnBoardScreen({navigation}) {
  const {width} = useWindowDimensions();
  const [dot, setDot] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        bounces={false}
        pagingEnabled
        renderItem={({item, index}) => (
          <View style={[styles.flatList, {width}]}>
            <View style={styles.imgContainer}>
              <Image
                key={index}
                style={[styles.girlPhoto]}
                source={item.imgSource}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.heading}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.para}>{item.desc}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('SignUpOption')}>
        <View style={styles.btn}>
          <Text style={styles.buttonText}>Create an account</Text>
        </View>
      </TouchableOpacity>

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
    alignItems: 'center',
    paddingVertical: 10,
  },
  flatList: {
    alignItems: 'center',
  },
  imgContainer: {
    marginHorizontal: 70,
    marginTop: 32,
    elevation: 27,
    shadowColor: '#171717',
    alignItems: 'center',
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
    color: '#E94057',
  },
  para: {
    fontSize: 14,
    textAlign: 'center',
  },
  carDot: {},
  btn: {
    marginTop: 80,
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
