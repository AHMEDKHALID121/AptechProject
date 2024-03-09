/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AuthHeading = ({title, desc, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default AuthHeading;

const styles = StyleSheet.create({
  container: {
  },
  desc: {
    marginTop: 16,
    lineHeight: 17,
  },
});
