import React, {useEffect, useMemo, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

// import {Colors, Fonts} from '../../themes';
// import Metrics from '../../utility/Metrics';
import ButtonView from '../ButtonView/index';
import Input from '../Input';
import PhoneInput from '../PhoneNumberInput';
import {IInputControl} from './types';

const MaterialTextInput = ({
  label,
  error,
  value,
  onBlur,
  onFocus,
  onPress,
  LeftIcon,
  RightIcon,
  disabledBg,
  isPassword,
  labelStyle,
  labelLines,
  wrapperStyle,
  isFieldHidden = false,
  numberOfLines,
  containerStyle,
  totalCharacters,
  multiline,
  wrapperheight = false,
  disabled,
  height = 'auto',
  showCount = false,
  isPhone = false,
  as: Component = isPhone ? PhoneInput : Input,
  ...rest
}: IInputControl) => {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(setValue, [value]);

  function setValue() {
    Boolean(value);
  }

  function handleFocus() {
    onFocus && onFocus();
  }

  function handleBlur() {
    onBlur && onBlur();
  }

  function handleIconPress() {
    isPassword ? setShowPassword(!showPassword) : onPress && onPress();
  }

  const icon = useMemo(
    () => ({
      true: require('../../assets/images/eyeopen.png'),
      false: require('../../assets/images/eyeclose.png'),
    }),
    [],
  );

return (
    <>
      {isFieldHidden == false ? (
        <View
          style={[
            wrapperheight ? {
              height: 'auto'
            } : {height: height},
            {
            marginBottom: 15,
            // height: height,
            // display: isFieldHidden,
          }]}>
          {label && (
            <Text
              numberOfLines={numberOfLines || 1}
              style={[styles.labelStyle, labelStyle]}>
              {label}
            </Text>
          )}
          <View
            style={[
              {
                backgroundColor: disabledBg
                  ? "grey"
                  : "#fff",
                paddingHorizontal:
                  Platform.OS === 'android'
                    ? 5
                    : 10,
              },
              styles.wrapper,
              wrapperStyle,
              multiline && {height: height},
              !!error && {
                borderColor: 'red',
                marginBottom: 30,
              },
            ]}>
            <View
              style={[
                styles.container,
                containerStyle,
                multiline && {height: height},
              ]}>
              {Boolean(LeftIcon) && (
                <View style={styles.iconWrapper}>
                  <Image source={LeftIcon} style={[styles.iconLeft]} />
                </View>
              )}

              <Component
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
                autoCapitalize="none"
                {...(isPassword && {secureTextEntry: !showPassword})}
                style={[
                  {
                    color: disabledBg ? '#707070' : "blue",
                    textAlignVertical: 'top',
                  },
                  multiline && {height: height},
                ]}
                {...rest}
              />

              {(isPassword || Boolean(RightIcon)) && (
                <ButtonView
                  onPress={handleIconPress}
                  disabled={!isPassword || Boolean(onPress)}
                  style={styles.iconWrapper}
                  hitSlop={{top: 10, bottom: 10, left: 5, right: 5}}>
                  <Image
                    source={
                      isPassword
                        ? icon[String(showPassword) as keyof typeof icon]
                        : RightIcon
                    }
                    resizeMode="contain"
                    style={[styles.iconRight]}
                  />
                </ButtonView>
              )}
            </View>
            {!!error && <Text style={styles.errorMessage}>{error}</Text>}

            {showCount ? (
              <View style={styles.messageWrapper}>
                {!error ? (
                  <Text
                    style={{
                      color: '#616161',
                      marginRight: 5,
                    }}>
                    {value.length}/{totalCharacters} character
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: '#616161',
                      marginTop: -15,
                    }}>
                    {value.length}/{totalCharacters} character
                  </Text>
                )}
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default MaterialTextInput;

const styles = StyleSheet.create({
  messageWrapper: {alignItems: 'flex-end', marginTop: 5},
  mainContainer: {
    marginBottom: 15,
  },
  wrapper: {
    // flex: 1,
    // height: Metrics.verticalScale(48),
    height: 48,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 25,
    // paddingHorizontal: Metrics.horizonatalScale(10),
    marginBottom: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  labelStyle: {
    // ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.PRIMARY),
    marginBottom: 10,
    marginTop: 10,
  },
  iconWrapper: {
    paddingHorizontal: 16,
  },
  iconLeft: {width: 20, height: 20},
  iconRight: {
    width: 25,
    height: 25,
    right: -5,
  },
  errorMessage: {
    // ...Fonts.Medium(12, Colors.Colors.TOMATO),
    marginTop: 5,
    marginBottom: 10,
  },
});
