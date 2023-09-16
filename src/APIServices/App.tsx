// import { API_CONFIG, CONTENT_TYPE, PAGE_SIZE } from '@Constants/api';
// import { apiRequest } from '@Service/ServiceAction';
import { API_CONFIG } from '../constants/api';
import { SERVICE_CONFIG_URLS } from '../constants/api_urls';
import { apiRequest } from '../Services/ServiceActions';


export const getAllEvents = async (params: any) => {
    const { data } = await apiRequest({
      url: `${SERVICE_CONFIG_URLS.DRIVER.GET_ALL_EVENTS}`,
      method: API_CONFIG.GET,
      params,
      showLoader: false,
      showSuccessToast: false
    });
    return data;
  };
  