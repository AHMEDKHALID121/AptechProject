import Toast from 'react-native-toast-message';
import ApiServices from './ApiServices';

type TRequestProps = {
  url: string; //Service url
  method: string; //Web Service type 'post,get,put,delete....'
  params?: object; //Paramter for request body
  config?: object; //Request Config
  showLoader?: boolean; //To display loading spinner
  showToast?: boolean; //To display Error toast message
  showSuccessToast?: boolean;
  formData?: boolean;
};

// TODO: Handle unhandel prmomise rejection on failure
export async function apiRequest({
  url, //Service url
  method, //Web Service type 'post,get,put,delete....'
  params, //Paramter for request
  config, //APIrequest Configuration
  showLoader = true, //Show spinner
  showToast = true,
  showSuccessToast = false,
  formData = false,
}: TRequestProps) {
  
console.log('API Request:', {
  url,
  method,
  params,
  config,
  formData,
}); // Log the complete payload

  const response =
    (await ApiServices[method]?.(url, params, config, formData)) || {};
    console.log(response, "responseresponseresponse")
//   setTimeout(_hideSpinner, 100);
  if (response.ok) {
    if (showSuccessToast) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message?.message || response?.message,
      });
    }

    return response;
  } else {
    showToast &&
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: response?.data?.message?.message,
      });
    throw response?.data;
  }
}
