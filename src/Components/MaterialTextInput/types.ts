import {LegacyRef, ReactElement} from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  TextInput,
  TextStyle,
} from 'react-native';
import {InputProps} from '../Input/types';

export interface IInputControl {
  label?: string;
  error?: string;
  value?: string;
  onBlur?: Function;
  onFocus?: Function;
  onPress?: Function;
  labelLines?: number;
  isPassword?: boolean;
  numberOfLines?: number;
  wrapperheight?: any;
  disabledBg?: boolean;
  RightIcon?: ImageProps;
  labelStyle?: TextStyle;
  LeftIcon?: ImageSourcePropType;
  inputRef: LegacyRef<TextInput>;
  wrapperStyle?: StyleProp<Object>;
  isFieldHidden?: any;
  containerStyle?: StyleProp<Object>;
  height?: any;
  totalCharacters?: number;
  multiline?: boolean;
  showCount?: boolean;
  disabled?: boolean;
  isPhone?: boolean;
  as?: (a: InputProps) => ReactElement;
}
