import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {LoginFormType, LoginPayload, LoginResponse} from './types';
import { LoginDefaultValues } from '../../../constants/FormDefaultValues';
import { login } from '../../../APIServices/App';
import { setItem } from '../../../Services/storageServices';
import { useAuth } from '../../../Services/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';

export default function useSignupContainer() {
  const { setIsAuthenticated } = useAuth();
  const navigation = useNavigation();
const {mutate: logintMutation} = useMutation(login, {
  onSuccess: (data) => {
    console.log(data, "SignUp");
    if(data?.status == 200){
      navigation.navigate(NavigationStrings.LOGIN)
    }

  },
  onError: (data) => {
    console.log(data.message.validationErrors, 'errrrrrrrrrr ');
  },
});


  const {control, handleSubmit} = useForm<LoginFormType>({
    mode: 'all',
    defaultValues: LoginDefaultValues,
  });
  const handleSubmitForm = async (data: LoginFormType) => {
    const {email, password, name} = data;
    let formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('Signup', true);
    formdata.append('token', Math.floor(10000 + Math.random() * 90000));
    
    console.log(formdata, "App")
    logintMutation(formdata)
  };
  return {
    control,
    handleSubmit: handleSubmit(handleSubmitForm),
  };
}
