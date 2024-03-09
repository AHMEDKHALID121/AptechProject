import React from 'react';

import {useController} from 'react-hook-form';
import MaterialTextInput from '../MaterialTextInput';
import {InputFieldType} from './types';

const InputField = ({
  trigger,
  blurTrigger,
  valuePropName,
  component: Component = MaterialTextInput,
  ...rest
}: InputFieldType) => {
  const {
    field: {onBlur, onChange, value, ref},
    fieldState: {error, isTouched},
  } = useController({...rest});
  return (
    <Component
      {...{
        [valuePropName || 'value']: value,
        [trigger || 'onChangeText']: onChange,
        [blurTrigger || 'onBlur']: onBlur,
      }}
      inputRef={ref}
      error={isTouched || error ? error?.message : undefined}
      {...rest}
    />
  );
};

export default InputField;
