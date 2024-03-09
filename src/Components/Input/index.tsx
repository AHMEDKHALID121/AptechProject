import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

// import {AppStyles, Colors, Fonts} from '../../themes';
import {InputProps} from './types';

const Input = (props: InputProps) => {
  const {style, placeholder, inputRef, ...rest} = props;

  return (
    <TextInput
      ref={inputRef}
      style={[styles.input, style]}
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

export default Input;
