const LoginDefaultValues = {
    email: '',
    password: '',
  };
  
  const SignUpDefaultValues = {
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    country: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    image_url: '',
    couunty: '',
  };
  
  const UpdateProfileDefaultValues = {
    name: 'Alexander Homes',
    email: 'alexanderhomes@example.com',
    phone: '+12 345 678 9101',
    gender: '',
    dob: '',
    country: '',
    state: '',
    city: 'Dallas',
    image_url: '',
  };
  
  const ForgotPasswordDefaultValues = {
    email: '',
  };
  
  const OTPDefaultValues = {
    verificationCode: '',
    userEmail: '',
    device_id: '1',
    device_name: 'ios',
    fcm_token: '1',
  };
  
  const NewPasswordDefaultValues = {
    password: '',
    confirmPassword: '',
  };
  
  const ChangePasswordDefaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  
  const ContactUsDefaultValues = {
    name: 'Alexander Homes',
    email: '',
    phone: '+12 345 678 9101',
    subject: '',
    message: '',
  };
  
  const ChallengeDefaultValues = {
    sphere: {},
    // sphere: '',
    // challenge: '',
    selectChallenge: {},
    challenge: '',
  };
  
  const TaskDefaultValueObj = {
    user_task_id: '',
    title: '',
    description: '',
    deadline: '',
    time: '',
  };
  const TaskDefaultValues = {
    tasks: [TaskDefaultValueObj],
  };
  
  const GoalDefaultValues = {
    sphere: {},
    challenge: {},
    goalTitle: '',
    goalDate: '',
    goalDescription: '',
    is_email: 0,
    is_push_notification: 0,
  };
  
  export {
    ForgotPasswordDefaultValues,
    NewPasswordDefaultValues,
    ChangePasswordDefaultValues,
    ContactUsDefaultValues,
    LoginDefaultValues,
    SignUpDefaultValues,
    OTPDefaultValues,
    UpdateProfileDefaultValues,
    ChallengeDefaultValues,
    GoalDefaultValues,
    TaskDefaultValues,
    TaskDefaultValueObj,
  };
  