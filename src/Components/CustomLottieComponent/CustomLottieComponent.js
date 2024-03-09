import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const CustomLottieComponent = ({text = 'No Record Found', isAddEvent = false, handlePress}) => {
  console.log("AHMED")
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()} onLongPress={() => console.log("Long Pressed")}>
      <LottieView
        style={styles.lottieStyle}
        resizeMode="cover"
        autoPlay={true}
        loop={true}
        progress={0}
        source={isAddEvent ? require('../../assets/Lottie/animation_lmjmi29x.json') : require('../../assets/Lottie/ViewEvents.json')}
      />
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomLottieComponent);
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '46%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 12
  },
  textStyle: {
    marginBottom: 10,
    color: '#000',
    fontSize: 14
  },
  lottieStyle: {height: 70, width: 100},
});
