/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../../Components/Buttons/AppButton';
import AuthRouting from './AuthRouting';

const AuthBottomHandler = ({
  submitHandler,
  handleSigin,
  bottomText,
  submitBtnText,
  isSubmitDisable,
  bottomExtraText,
  style,
  isLoading = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      <AppButton
        isSubmitDisable={isSubmitDisable ? true : false}
        style={styles.button}
        textStyle={styles.buttonText}
        title={submitBtnText}
        onPress={submitHandler}
        isLoading = {isLoading}
      />
      {bottomText && (
        <AuthRouting
          buttonText={bottomText}
          onPress={handleSigin}
          text={bottomExtraText}
        />
      )}
    </View>
  );
};

export default AuthBottomHandler;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    marginBottom: 80,
  },
});
