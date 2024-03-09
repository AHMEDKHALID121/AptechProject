import { TouchableWithoutFeedback } from 'react-native';

export const innerContainer = {
    optionsWrapper: {
      paddingVertical: 10,
    },
    optionsContainer: {
      width: 140,
      borderRadius: 15,
      marginTop: 30,
      marginLeft: -20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    optionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
    },
  };
  export const triggerStyles = {
    triggerText: {
      color: 'red',
    },
    triggerOuterWrapper: {
      flex: 1,
    },
    triggerWrapper: {
      paddingVertical: 5,
      justifyContent: 'center',
      color: 'red',
      flexDirection: 'row',
      flex: 1,
    },
    TriggerTouchableComponent: TouchableWithoutFeedback,
    triggerTouchable: {
      activeOpacity: 10,
      backgroundColor: 'grey',
      style: {
        backgroundColor: 'grey',
        flex: 1,
      },
    },
  };



  //
  import {Colors} from '../themes';
import { QueryClient } from '@tanstack/react-query';

export const AuthTitle = {
  LOGIN_TITLE: 'Login',
  SIGNUP_TITLE: 'Signup',
  FORGOT_PASSWORD_TITLE: 'Forgot Password',
  VERIFICATION_TITLE: 'Verification',
  NEW_PASSWORD_TITLE: 'New Password',
};
export const AuthText = {
  LOGIN_DESC: 'Please login to continue',
  SIGNUP_DESC: 'Create a new account',
  FORGOT_PASSWORD_DESC: 'We will send a one-time code to your email address',
  VERIFICATION_DESC:
    'A one-time password was sent to the email associated with this account. Please provide the password below.',
};
export const Placeholder = {
  EMAIL_PLACEHOLDER: 'name@example.com',
  PASSWORD_PLACEHOLDER: '*********',
  USERNAME_PLACEHOLDER: 'Alexender Homes',
  PHONE_NUMBER_PLACEHOLDER: '(234) 567-8910',
  SUBJECT_PLACEHOLDER: 'Type your Subject',
  MESSAGE_PLACEHOLDER: 'Type your message here...',
  NAME_PLACEHOLDER: 'Your Name',
  GENDER_PLACEHOLDER: 'Your Gender',
  COUNTRY_PLACEHOLDER: 'Select Country',
  STATE_PLACEHOLDER: 'Select State',
  CITY_PLACEHOLDER: 'Enter City',
  OTP_PLACEHOLDER: 'OTP Code',
};

export const ButtonText = {
  FORGOT_PASSWORD_BUTTON: 'Forgot Password?',
  LOGIN_BUTTON: 'Login',
  SIGN_UP: ' Sign Up',
  BACK_TO_LOGIN: 'Go back to login',
  SET_NEW_PASSWORD: 'Set new password',
  SUBMIT_BUTTON: 'Submit',
  ALREADY_HAVE_ACCOUNT: 'Already have an account? ',
  DONT_HAVE_ACCOUNT: `Don't have an account? `,
  ADD_NEW_TASK: 'Add New Task',
  REMAINING_TAKS: 'Tasks Remaining',
};
export const MenuButtons = {
  ABOUT_US: 'About Us',
  TERMS_OF_USE: 'Terms Of use',
  PRIVACY_POLICY: 'Privacy Policy',
  FAQS: 'FAQs',
  CONTACT_US: 'Contact Us',
  CHANGE_PASSWORD: 'Change Password',
  SETTINGS: 'Settings',
  LOGOUT: 'Logout',
  DELETE_ACCOUNT: 'Delete Account',
};
export const ModalTexts = {
  MODAL_DEL_TEXT: 'Are you sure you want to Delete the account?',
  MODAL_LOGOUT_TEXT: 'Are you sure you want to Logout the account?',
  MODAL_CANCEL_TEXT: 'Cancel',
  MODAL_ACTION_DEL_TEXT: 'Delete',
  MODAL_ACTION_CONFIRM_TEXT: 'Yes',
  MODAL_DONE_TEXT: 'Done',
  MODAL_SUBMIT_TEXT:
    'Your submission has been received. We look forward to attending to your message promptly',
};
export const ConditionText = {
  TRUE_TEXT: 'true',
  FALSE_TEXT: 'false',
};
export const AppScreenTitles = {
  TASK_DESCRIPTION_SCREEN_TITLE: 'Meeting',
  MENU_SCREEN_TITLE: 'Menu',
  CONTACT_US: 'Contact Us',
  CHANGE_PASSWORD: 'Change Password',
  SETTINGS: 'Settings',
  GREETING_TEXT: 'Hi, John Smith',
  TASK_SCREEN_TITLE: 'Goal > Task',
};
export const ToggleText = {
  EMAIL_NOTIFICATION: 'Email Notification',
  PUSH_NOTIFICATION: 'Push Notification',
};
export const AppScreenDescription = {
  TASK_DESCRIPTION_SCREEN_DESC: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat cum egestas et amet facilisis ut suspendisse eu. Parturient elit vitae, sed risus cum a tortor malesuada. Arcu dolor et tempus vestibulum. Accumsan nunc velit felis, arcu scelerisque cursus quis est non. Amet urna, eu a, nibh amet at. Nunc nulla pulvinar in massa fusce urna habitant. Odio eu risus id sit gravida. Id quis pellentesque vel faucibus nisl, lacus. Diam proin varius lacus, est aliquam ultricestristique quam.`,
  SHORT_DESCRIPTION:
    'Lorem ipsum dolor sit amet consectetur. Massa aenean sem pellentesque mi. Ullamcorper vitae id molestie ipsum mattis urna.',
};
export const DateFormats = {
  DEFAULT_DATE: 'hh:mm A, DD-MMM-YYYY',
  SIGNUP_DATE_PLACEHOLDER: 'mm-dd-yyyy',
  // DATE: 'YYYY-MM-DD',
  DATE: 'DD-MMM-yyyy',
  TIME: 'hh:mm A',
};
export const NormalTexts = {
  FILE_SIZE_TEXT: 'File size should be less than 6MB',
  MILESTONE_NO: 'Milestone No #',
  MILESTONE_HASH: 'Milestone #',
};
export const SizeNumber = {
  FILE_SIZE_NUMBER: 6291456,
};
export const AuthHeaderText = {
  TITLE: 'Welcome to',
  APP_NAME: 'THE 5 SPHERES OF FIT',
  DESCRIPTION: 'Your roadmap to personal wellness',
};

export const AllLabels = {
  NAME: 'Name',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  PHONE_NUMBER: 'Phone Number',
  GENDER: 'Gender',
  DOB: 'Date of Birth',
  COUNTRY: 'Country',
  STATE: 'State',
  CITY: 'City',
  OTP: 'OTP',
  COMPLETED: 'Completed',
  MARK_COMPLETE: 'Mark as completed',
  TASK_OVERDUE: 'Task Overdue',
  PUSH_DEADLINE: '(Push deadline)',
};
export const CategoryNames = {
  EDUCATIONAL: 'Educational',
  PHYSICAL: 'Physical',
  MENTAL: 'Mental',
  SOCIAL: 'Social',
  FINANCIAL: 'Financial',
};
export const GoalsHeadings = {
  PERSONALJOURNAL: 'Personal Journal',
  NOTIFICATION: 'Notification',
};
export const EmptyScreenText = {
  NO_GOALS_CREATED: 'No Goal Created yet',
  NO_RECORD_FIND: 'No Record Found',
  NO_TASK_FOUND:'No Tasks Created',
  NO_NEW_NOTIFICATION: 'No Notification Found',
  NO_ARTICLE_FOUND: 'No Article Found',
};
export const EmptyScreenDescription = {
  CREATE_FIRST_GOAL: 'Create your very first goal by tapping on “ + “ button',
  NO_MILESTONE_FOUND: 'No milestone found at this time',
  NO_NOTIFICATION_DESCRIPTION: 'There is no new Notification',
};

export const mutationKeys = {
  ARTICLE_LIST: 'articleList',
  ALL_SPHERE: 'AllSphereskey',
  JOURNAL_LIST: 'journalList',
  GOAL_CHALLENGE_EDIT: 'getChallengeAndGoalEdit',
  NOTIFICATION_SETTING: 'SettingNotification',
  ARTICLE_DETAIL: 'ArticleDetail',
  INDIVIDUAL_TASK_EDIT: 'taskindividualEdit',
  ALL_PROGRESS: 'allProgress',
  MILESTONE_LIST: 'milestoneList',
  ALL_CATEGORY: 'allCategory',
  SEARCH_CHALLENGE_LIST: 'searchUserChallengeList',
  GET_SELECT_CHALLENGE: 'getselectChallenge',
  SELECT_COMPLETE_CHALLENGE_LIST: 'selectChallangeCompleteList',
  ALL_TASK_EDIT: 'AlltaskEditData',
  OVERVIEW_DATA: 'overviewdata',
  USER_INFO:'userkey'
};

export const CategoryData = {
  sphere_one: {
    id: 1,
    name: 'Educational',
    // color: Colors.Colors.PURPLE,
  },
  sphere_two: {
    id: 5,
    name: 'Physical',
    // color: Colors.Colors.RED,
  },
  sphere_three: {
    id: 2,
    name: 'Mental',
    // color: Colors.Colors.LIGHT_BLUE,
  },
  sphere_four: {
    id: 4,
    name: 'Social',
    // color: Colors.Colors.YELLOW,
  },
  sphere_five: {
    id: 3,
    name: 'Financial',
    // color: Colors.Colors.GREEN,
  },
};

export const DUMMY_LIST_FOR_SKELETON = [0, 0, 0];

export const STALE_TIME = 60 * 1000;

export const CACHE_TIME = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      getNextPageParam: (lastPage: any) => {
        return lastPage?.meta?.hasNextPage;
      },
      onError: e => {
        console.log('api error ', e?.message.validationErrors);
      },
    },
    mutations: {
      onError: e => {
        console.log('api mutation error ', e?.message.validationErrors);
      },
    },
  },
});