import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDestinationData = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_my_naznachenia`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GET_DIRECTION_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const addMyDestinationData = (
  name,
  timetakingdrug,
  startDate,
  endDate,
  dosage,
  periodicity,
) => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/user_add_naznachenia`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          nazvaniya_lekarstva: name,
          vremya_priyoma_preporata: timetakingdrug,
          data_nachala: startDate,
          data_zaversheniya: endDate,
          dozirovka: dosage,
          pereodichnosty: periodicity,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'ADD_DESTINATION_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getSelectItemTime = time => dispatch => {
  dispatch({
    type: 'TIME_ITEM',
    payload: time,
  });
};

export const getSelectTimeNew = time => dispatch => {
  dispatch({
    type: 'TIME_SELECT_NEW',
    payload: time,
  });
};

export const getSelectDay = time => dispatch => {
  dispatch({
    type: 'DAY_SELECT',
    payload: time,
  });
};

export const getUserDestinationData = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      console.log(token, 'llll');
      let url = `https://archimed.justcode.am/api/get_user_adds_naznachenia`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GET_USER_DESTINATION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const deleteDestinationFunction = id => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/delete_naznacheniya`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          naznachenya_id: id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'DELETE_DESTINATION',
            payload: resp,
          });
          dispatch(getUserDestinationData());
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getDirectionData = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/my_direction`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GET_DIRECT_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const globalSearch = value => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/search`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          text: value,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GLOBAL_SEARCHING',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};
