import React, {memo} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { EMS, LogoSvg } from '../../assets/images';


const AuthHeader = () => {
  return (
    <View
      style={[
        styles.root,
        {
          marginTop:
            Platform.OS === 'android'
              ? 65
              : 30,
        },
      ]}>
      {/* <LogoSvg /> */}
      <Image 
       style={styles.image}
       source={EMS}
       resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.text}>Event Magagement System</Text>
        {/* <Text style={styles.subText}>Your roadmap to personal wellness</Text> */}
      </View>
    </View>
  );
};

export default memo(AuthHeader);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    // ...Fonts.SemiBold(Fonts.Size.xxSmall, Colors.PRIMARY),
    paddingTop: 10,
  },
  text: {
    // ...Fonts.Bold(Fonts.Size.large, Colors.PRIMARY),
  },
  subText: {
    // ...Fonts.Regular(Fonts.Size.xxSmall, Colors.SECONDARY),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
