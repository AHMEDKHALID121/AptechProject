import {ReactElement} from 'react';
import {TextInputProps} from 'react-native';

import {Control} from 'react-hook-form';
import {IInputControl} from '../MaterialTextInput/types';

interface InputField extends TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  trigger?: string;
  isPassword?:boolean;
  data?:Object;
  mode?:string;
  rightIcon?:any
  disabledBg?: boolean;
  blurTrigger?: string;
  valuePropName?: string;
  isPhone?:boolean
  component?: (a: IInputControl) => ReactElement;
}

export type InputFieldType = InputField;
