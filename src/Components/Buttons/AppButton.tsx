import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text} from 'react-native';
import ButtonView from '../ButtonView';

interface IAppButton {
  title: string;
  onPress?: Function;
  onLongPress?: Function;
  style?: {};
  textStyle?: {};
  imageStyle?: {};
  imageSource?: ImageSourcePropType;
  iconAfterText?: boolean;
  isSubmitDisable?: boolean;
  bgColor?: any;
}

const AppButton = ({
  title = 'Submit',
  style = {},
  textStyle = {},
  imageStyle = {},
  imageSource,
  iconAfterText = false,
  isSubmitDisable,
  bgColor = "",
  ...rest
}: IAppButton) => {
  return (
    <ButtonView
      enableClick={isSubmitDisable}
      style={[
        styles.button,
        {
          backgroundColor: isSubmitDisable ? "grey" : bgColor,
          opacity: isSubmitDisable ? 0.3 : 1,
        },
        style,
      ]}
      {...rest}>
      {imageSource && !iconAfterText && (
        <Image
          style={[styles.image, imageStyle]}
          source={imageSource}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {imageSource && iconAfterText && (
        <Image
          style={[styles.imageRight, imageStyle]}
          source={imageSource}
          resizeMode="contain"
        />
      )}
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingHorizontal: 16,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 60,
    width: '100%',
    paddingVertical: 23,
    height: 'auto',
  },
  icon: {
    marginRight:10,
  },
  // title: Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
  image: {
    width: 22,
    height: 22,
    marginRight: 5,
    marginBottom: 3,
  },
  imageRight: {
    width: 22,
    height: 22,
    marginLeft: 5,
    marginBottom: 3,
  },
});

export default AppButton;
