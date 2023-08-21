const initialState = {
  medicalTestData: [],
  medicalTestParamsData: [],
  medicalTestComplexData: [],
  medicalTestComplexParamsData: [],
  addBasketData: [],
  examId: '',
  parentId: '',
  basketData: [],
  deleteBasketData: [],
  createAnalysis: [],
  addNewOrdersData: [],
  medicalTestSingleData: [],
  flowerdata: [],



  
};

function analysisReducer(state = initialState, action) {
  switch (action.type) {
    case 'MEDICAL_TEST':
      return {...state, medicalTestData: action.payload};
    case 'MEDICAL_TEST_PARAMS':
      return {...state, medicalTestParamsData: action.payload};
    case 'MEDICAL_TEST_COMPLEX':
      return {...state, medicalTestComplexData: action.payload};
    case 'MEDICAL_TEST_COMPLEX_PARAMS':
      return {...state, medicalTestComplexParamsData: action.payload};
    case 'ADD_BASKET':
      return {...state, addBasketData: action.payload};
    case 'EXAM_ID':
      return {...state, examId: action.payload};
    case 'PARENT_ID':
      return {...state, parentId: action.payload};
    case 'GET_BASKET_DATA':
      return {...state, basketData: action.payload};
    case 'DELETE_BASKET':
      return {...state, deleteBasketData: action.payload};
    case 'ANALYSIS_PAGE':
      return {...state, createAnalysis: action.payload};
    case 'ADD_NEW_ORDER':
      return {...state, addNewOrdersData: action.payload};
    case 'MEDICAL_TEST_SINGLE':
      return {...state, medicalTestSingleData: action.payload};
    case 'FLOWER_DATA':
      return {...state, flowerdata: action.payload};
    default:
      return state;
  }
}

export default analysisReducer;
