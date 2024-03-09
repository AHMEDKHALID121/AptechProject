import * as React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  AllLabels,
  ButtonText,
  ConditionText,
  Placeholder,
} from '../../../constants/common';
import useLoginContainer from './LoginContainer';
import AuthAnimatedSheetWrapper from '../../../Components/AuthSheetWrapper/AuthAnimatedSheetWrapper';
import InputField from '../../../Components/InputField';
import AuthBottomHandler from '../Shared/AuthBottomHandler';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';
export default function LoginScreen() {
const {control, handleSubmit} = useLoginContainer();
const navigation = useNavigation();
const handleOnSignUp = () => {
  navigation.navigate(NavigationStrings.SIGNUP)
}
  return (
    <AuthAnimatedSheetWrapper>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View >
            <InputField
              control={control}
              name="email"
              label={AllLabels.EMAIL}
              placeholder={Placeholder.EMAIL_PLACEHOLDER}
              autoCapitalize={'none'}
              style={{width:"100%"}}
            />
            <InputField
              control={control}
              name="password"
              label={AllLabels.PASSWORD}
              isPassword={true}
              placeholder={Placeholder.PASSWORD_PLACEHOLDER}
              style={{width:"80%"}}
            />
          </View>
        </View>
        <View
          style={[
            styles.authBottomContainer,
            Platform.OS === 'android' ? {flex: 1} : {height: 300},
          ]}>
          <AuthBottomHandler
            submitHandler={handleSubmit}
            // handleSigin={handleOnSignUp}
            submitBtnText={ButtonText.LOGIN_BUTTON}
            handleSigin={handleOnSignUp}
            bottomText={ButtonText.SIGN_UP}
            bottomExtraText={ButtonText.DONT_HAVE_ACCOUNT}
            disabledSubmit={ConditionText.FALSE_TEXT}
            style={styles.authBottomStyle}
          />
        </View>
      </View>
    </AuthAnimatedSheetWrapper>
  );
}

const styles = StyleSheet.create({
  container: {minHeight: '100%', flex: 1},
  innerContainer: {
    flex: 1,
  },
  content: {
    marginHorizontal: 35,
  },
  forgotText: {
    alignSelf: 'flex-end',
  },
  authBottomContainer: {
    marginHorizontal: 16,
    flex: 1,
    marginBottom: 100
  },
  authBottomStyle: {
    height: 130,
  },
});
