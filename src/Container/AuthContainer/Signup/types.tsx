export interface LoginFormType {
    email: string;
    name: string;
    password: string;
  }
  
  export type LoginPayload = {
    email: string;
    password: string;
    device_id: any;
    device_name: any;
    fcm_token: any;
  };
  
  export type LoginResponse = {
    // email: string;
    // password: string;
    // device_id: any;
    // device_name: any;
    // fcm_token: any;
    user?: {
      personal: {
        id: any;
        name: string;
        email: string;
        phone: string;
        gender: any;
        gender_name: any;
        user_type: number;
        dob: string;
        is_active: boolean;
        image_url: any;
        image_thumbnail: any;
        created_date: string;
      };
      detail: {
        country_id: any;
        state_id: any;
        city_name: any;
      };
      token: any;
    };
  };
  