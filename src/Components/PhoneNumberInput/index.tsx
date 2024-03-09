import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

// import {AppStyles, Colors, Fonts} from '../../themes';
import {InputProps} from './types';
import MaskInput, {Masks} from 'react-native-mask-input';
const PhoneInput = (props: InputProps) => {
  const {style, placeholder, inputRef, ...rest} = props;

  return (
    <MaskInput
      ref={inputRef}
      style={[styles.input, style]}
      mask={Masks.USA_PHONE}
      selectionColor={"green"}
      {...(!!placeholder && {
        placeholderTextColor: "grey",
        placeholder,
      })}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // ...AppStyles.inputControl,
    // ...Fonts.Regular(Fonts.Size.small, Colors.Colors.PRIMARY),
  },
});

export default PhoneInput;
