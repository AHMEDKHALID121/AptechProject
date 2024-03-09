import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonView from '../../../Components/ButtonView';


const AuthRouting = ({buttonText, onPress, style, text, forgotText}) => {
  return (
    <View style={[styles.container, style]}>
      {text && <Text style={styles.text}>{text}</Text>}
      <ButtonView onPress={onPress} style={{flexDirection: 'row'}}>
        <Text style={styles.forgotText} >{forgotText}</Text>
        <Text style={styles.buttonText} >{buttonText}</Text>
      </ButtonView>
    </View>
  );
};

export default AuthRouting;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonText: {
    // ...Fonts.Medium(Fonts.Size.small, Colors.PRIMARY),
  },
  text: {
    // ...Fonts.Medium(Fonts.Size.small, Colors.LIGHT_GREY),
  },
  forgotText: {
    // ...Fonts.Medium(Fonts.Size.small, Colors.PRIMARY),
    marginTop: -5,
  },
});
