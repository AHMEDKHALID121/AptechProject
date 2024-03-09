export const API_CONFIG = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    BASE_URL_QA: '',
    DELETE: 'delete',
    BASE_URL_REL: '',
    BASE_URL_DEV: 'https://ahmed-khalid.com/controllers/',
    BASE_URL_PROD: '',
  };
  
  export const CONTENT_TYPE = {
    JSON: 'application/json',
    FORM_DATA: 'multipart/form-data',
  };
  
  export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    PAYLOAD_TOO_LARGE: 413,
  };
  
  export const PAGE_SIZE = 10;
  
  export const STALE_TIME = 60 * 1000;
  
  export const CACHE_TIME = 1000 * 60 * 60 * 24;
  // export const GOOGLE_API_KEY = "AIzaSyDLtrI9p7sQmgFjzQAhH48ko-de_Kc6mQM" current
  export const GOOGLE_API_KEY = "AIzaSyBZlU2NPuHvbtBARx1R4oQx46pMG417qZw"
  export const SOCKET_SERVER = {
    JoinChatRoom: 'JoinChatRoom',
    LeaveChatRoom: 'LeaveChatRoom',
    ChatMessage: 'ChatMessage',
    RideOffer: 'RideOffer',
    RideUpdate: "RideUpdate",
  };
  export const RideStatus = {
    Cancelled: 0, //cancel api
    WaitingForAccept: 1, //accept screen
    Accepted: 2, // start navigation
    DriverOnTheWay: 3, // arrived for pickup screen
    Arrived: 4, // start trip
    InTransit: 5, //end trip
    Reached: 6, //finish
    Completed: 7, //ride end
    Transfer: 8, //Reassign Driver
  };
  