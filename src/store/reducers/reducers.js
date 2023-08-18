const initialState = {
  registerPhoneNumber: '',
  registerConfirmData: [],
  doctorsList: [],
  newConfirmCodeData: [],
  cityListData: [],
  userAddCityData: [],
  feedBackData: [],
  doctorsSinglePageData: [],
  consultationDate: [],
  userInfo: [],
  doctorTimeData: [],
  exam_id_doctors: '',
  subject_id_doctors: '',
  priceConsultation: '',
  timeConsultation: '',
  newsData: [],
  myOrdersData: [],
  ordersPaymountData: [],
  orderCancelData: [],
  startInfo: [],
  loading: true,
  error: null,
  logoutData: [],
  updadeUserData: [],
  cityName: '',
  getAllReceptionData: [],
  doctorCommentData: [],
  aplicationData: [],
  pivacyPolicyData: [],
  termsOfServiceData: [],
  callDoctorData: [],
  getQuestionData: [],
};

function justDriveReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PHONE_NUMBER_REGISTER':
      return {...state, registerPhoneNumber: action.payload};
    case 'GET_REGISTER':
      return {...state, registerConfirmData: action.payload};
    case 'FETCH_ITEMS_REQUEST':
      return {...state, loading: true};
    case 'GET_DOCTORS_LIST':
      return {
        ...state,
        loading: false,
        doctorsList: [...state.doctorsList, action.payload],
      };
    case 'FETCH_ITEMS_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'GET_NEW_CONFIRM_CODE':
      return {...state, newConfirmCodeData: action.payload};
    case 'GET_CITY_LIST':
      return {...state, cityListData: action.payload};
    case 'USER_ADD_CITY':
      return {...state, userAddCityData: action.payload};
    case 'SEND_FEED_BACK':
      return {...state, feedBackData: action.payload};
    case 'DOCTORS_SINGLE_PAGE':
      return {...state, doctorsSinglePageData: action.payload};
    case 'SAVE_DATE_FOR_CONSULTATION':
      return {...state, consultationDate: action.payload};
    case 'GET_USER_INFO':
      return {...state, userInfo: action.payload};
    case 'DOCTORS_VISIT_TIME':
      return {...state, doctorTimeData: action.payload};
    case 'EXAM_ID_DOCTORS':
      return {...state, exam_id_doctors: action.payload};
    case 'SUBJECT_ID_DOCTORS':
      return {...state, subject_id_doctors: action.payload};
    case 'PRICE_FOR_CONSULTATION':
      return {...state, priceConsultation: action.payload};
    case 'TIME_FOR_CONSULTATION':
      return {...state, timeConsultation: action.payload};
    case 'GET_NEWS':
      return {...state, newsData: [...state.newsData, action.payload]};
    case 'GET_MY_ALL_ORDERS':
      return {...state, myOrdersData: action.payload};
    case 'ORDERS_PAYMENT':
      return {...state, ordersPaymountData: action.payload};
    case 'ORDERS_CANCEL':
      return {...state, orderCancelData: action.payload};
    case 'GET_START_INFO':
      return {...state, startInfo: action.payload};
    case 'LOGOUT_FUNCTION':
      return {...state, logoutData: action.payload};
    case 'UPDATE_USER_INFO':
      return {...state, updadeUserData: action.payload};
    case 'CITY_NAME':
      return {...state, cityName: action.payload};
    case 'GET_ALL_RECEPTION':
      return {...state, getAllReceptionData: action.payload};
    case 'DOCTOR_COMMENT':
      return {...state, doctorCommentData: action.payload};
    case 'GET_APLICATION_USE':
      return {...state, aplicationData: action.payload};
    case 'GET_PRIVACY_POLICY':
      return {...state, pivacyPolicyData: action.payload};
    case 'GET_TERMS_OF_SERVICE':
      return {...state, termsOfServiceData: action.payload};
    case 'CALL_DOCTOR_SERVICE':
      return {...state, callDoctorData: action.payload};
    // GET_QUESTION
    case 'GET_QUESTION':
      return {...state, getQuestionData: action.payload};
    default:
      return state;
  }
}

export default justDriveReducer;
