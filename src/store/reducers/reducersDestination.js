const initialState = {
  destinationData: [],
  selectedTimeData: [],
  timeNew: '',
  addMyDestination: [],
  selectedDay: [],
  userDestinationData: [],
  deleteDestinationData: [],
  directionData: [],
  globalSearchData: [],
};

function destinationReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DIRECTION_DATA':
      return {...state, destinationData: action.payload};
    case 'TIME_ITEM':
      return {...state, selectedTimeData: action.payload};
    case 'TIME_SELECT_NEW':
      return {...state, timeNew: action.payload};
    case 'ADD_DESTINATION_DATA':
      return {...state, addMyDestination: action.payload};
    case 'DAY_SELECT':
      return {...state, selectedDay: action.payload};
    case 'GET_USER_DESTINATION':
      return {...state, userDestinationData: action.payload};
    case 'DELETE_DESTINATION':
      return {...state, deleteDestinationData: action.payload};
    case 'GET_DIRECT_DATA':
      return {...state, directionData: action.payload};
    case 'GLOBAL_SEARCHING':
      console.log(action.payload, 'sdjncjndkjnck');
      return {
        ...state,
        globalSearchData: [
          ...state.globalSearchData,
          action.payload.data.Analises.data,
          action.payload.data.Doctor_list.data,
        ],
      };
    default:
      return state;
  }
}

export default destinationReducer;
