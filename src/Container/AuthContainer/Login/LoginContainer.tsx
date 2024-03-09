import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {LoginFormType, LoginPayload, LoginResponse} from './types';
import { LoginDefaultValues } from '../../../constants/FormDefaultValues';
import { login } from '../../../APIServices/App';
import { setItem } from '../../../Services/storageServices';
import { useAuth } from '../../../Services/AuthContext';

export default function useLoginContainer() {
  const { setIsAuthenticated } = useAuth();
const stackChange = async(data) => {
  await setItem("myLogin",data)
}
const {mutate: logintMutation} = useMutation(login, {
  onSuccess: (data) => {
    console.log(data, "LOGINNN");
    if(data?.status == 200){
      setIsAuthenticated(true)
      stackChange(data)
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
    const {email, password} = data;
    let formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('SignIn', true);

    logintMutation(formdata)
  };
  return {
    control,
    handleSubmit: handleSubmit(handleSubmitForm),
  };
}
