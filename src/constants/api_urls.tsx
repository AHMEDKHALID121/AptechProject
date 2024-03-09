const authController = 'Authentication';
const common = 'https://ahmed-khalid.com/controllers/event';
const commonUser = "https://ahmed-khalid.com/controllers/user";
const driver = 'driver';
export const SERVICE_CONFIG_URLS = {
  AUTH: {
    LOGIN: `${authController}/login`,
    ME: `${authController}/me`,
    REQUEST_OTP: `${driver}/tokens/request-otp`,
    VERIFY_OTP: `${driver}/tokens/verify-otp`,
    PRIVACY_POLICY: `${driver}/personal/privacy-policy`,
  },
  CHAT: {
    SEND_MESSAGE: 'common/chat/send',
    GET_CHAT_BY_ID: 'common/chat/list',
  },
  DRIVER: {
    ONLINE_STATUS: `${driver}/personal/online-status`,
    USER_DETAILS: `${driver}/personal/profile`,
    GET_LANGUAGES: `${driver}/preference/languages`,
    UPDATE_LANGUAGE: `${driver}/preference/language`,
    SUPPORT_CHAT: `${driver}/personal/support-chat`,
    GET_ALL_RIDE_DETAILS: `${driver}/booking/list`,
    GET_EARNING_DETAILS: `${driver}/personal/earning-listing`,
    UPDATE_LOCATION: `${driver}/personal/update-location`,
    GET_TRIP_DETAILS: `${driver}/booking/`,
    SIGN_OUT: `${driver}/tokens/log-out`,
    TOTAL_EARNINGS: `${driver}/personal/total-earning`,
    DISCONNECT_STRIPE_ACCOUNT: `${driver}/personal/connected-account-status`,
    CONNECT_STRIPE_ACCOUNT: `${driver}/personal/update-stripe-accountid`,
    BANKING_INFO: `${driver}/personal/banking-info`,
    GET_NOTIFICATION: `${common}/notification`,
    COUNT_NOTIFICATION: `${common}/notification/unseen-count`,
    PATCH_NOTIFICATION: `${common}/notification`,
    GET_TRIP_POLYLINE: `${driver}/booking/`,
    GET_DASHBOARD_LINK: `${driver}/personal/dashboard-link`,
    UPDATE_INCOMING_REQUEST:  `${driver}/personal/update-allow-incoming-requests`,
    UPDATE_BANKING_INFO:  `${driver}/personal/create-connected-account`,
    // GET_ALL_EVENTS: `${common}?List=true&token=1`,
    GET_ALL_EVENTS: `${common}`,
    CREATE_EVENT: `${common}`,
    GET_ALL_USERS : `${commonUser}`
  },
  BOOKING: {
    RIDE_FLOW: `${driver}/booking/`,
  },
};
