// import { API_CONFIG, CONTENT_TYPE, PAGE_SIZE } from '@Constants/api';
// import { apiRequest } from '@Service/ServiceAction';
import { API_CONFIG } from '../constants/api';
import { SERVICE_CONFIG_URLS } from '../constants/api_urls';
import { apiRequest } from '../Services/ServiceActions';


export const getAllEvents = async({ queryKey })=> {
  const [key, params] = queryKey;
  const { token } = params;
  console.log(queryKey, "queryKeyqueryKeyqueryKeyqueryKeyqueryKey")
    const { data } = await apiRequest({
      url: `${SERVICE_CONFIG_URLS.DRIVER.GET_ALL_EVENTS}?List=true&token=${token}`,
      method: API_CONFIG.GET,
      // params: {}, 
      showLoader: false,
      showSuccessToast: false
    });
    return data;
  };

export const createEvent = async (params: any) => {
    const {data} = await apiRequest({
      url: SERVICE_CONFIG_URLS.DRIVER.CREATE_EVENT,
      method: API_CONFIG.POST,
      params,
      config: {
        headers: {
          'Content-Type': "multipart/form-data",
        },
      },
      formData: true,
      showLoader: false,
    });
    return data;
  };

  export const updateEvent = async (params: any) => {
    const {data} = await apiRequest({
      url: SERVICE_CONFIG_URLS.DRIVER.CREATE_EVENT,
      method: API_CONFIG.POST,
      params,
      config: {
        headers: {
          'Content-Type': "multipart/form-data",
        },
      },
      formData: true,
      showLoader: false,
    });
    return data;
  };
  
  export const deleteEvent = async (params: any) => {
    console.log(params, "paramsparamsparams")
    const {data} = await apiRequest({
      url: SERVICE_CONFIG_URLS.DRIVER.CREATE_EVENT,
      method: API_CONFIG.POST,
      params,
      config: {
        headers: {
          'Content-Type': "multipart/form-data",
        },
      },
      formData: true,
      showLoader: false,
    });
    return data;
  };
  export const login = async (params: any) => {
    console.log(params, "paramsparamsparams")
    const {data} = await apiRequest({
      url: "https://ahmed-khalid.com/controllers/auth",
      method: API_CONFIG.POST,
      params,
      config: {
        headers: {
          'Content-Type': "multipart/form-data",
        },
      },
      formData: true,
      showLoader: false,
      showToast: true
    });
    return data;
  };

  
export const getAllUsers = async (params: any) => {
  console.log(params, "params11111111")
    const { data } = await apiRequest({
      url: `${SERVICE_CONFIG_URLS.DRIVER.GET_ALL_USERS}?List=true&token=1`,
      method: API_CONFIG.GET,
      params,
      showLoader: false,
      showSuccessToast: false
    });
    return data;
  };