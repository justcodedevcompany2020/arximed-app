import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMedicalTest = value => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/medical_test`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: value,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MEDICAL_TEST',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getMedicalTestParam = (id, value) => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/medical_test_params`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: value,
          test_id: id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MEDICAL_TEST_PARAMS',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getMedicalTestComplex = value => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/medical_test`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: value,
          complex: true,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MEDICAL_TEST_COMPLEX',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getMedicalTestComplexParams = (id, value) => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/medical_test_params`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: value,
          complex: true,
          test_id: id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MEDICAL_TEST_COMPLEX_PARAMS',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const addBasketFunction = (
  parent_type,
  PL_EXAM_ID,
  parent_id,
  start_time,
  end_time,
  day,
) => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/add_service_in_basket`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          parent_type: parent_type,
          PL_EXAM_ID: PL_EXAM_ID,
          parent_id: parent_id,
          start_time: start_time,
          end_time: end_time,
          day: day,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'ADD_BASKET',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getExamId = id => dispatch => {
  dispatch({
    type: 'EXAM_ID',
    payload: id,
  });
};

export const getParentId = id => dispatch => {
  dispatch({
    type: 'PARENT_ID',
    payload: id,
  });
};

export const getBasketData = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_basket`;
      let requestOptions = {
        method: 'GET',
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
            type: 'GET_BASKET_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const deleteBasketFunction = basket_id => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/delete_my_all_basket`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          basket_id: basket_id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'DELETE_BASKET',
            payload: resp,
          });
          if (resp.message) {
            dispatch(getBasketData());
          }
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const createAnalisePageFunction = value => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/CreateAnalisePage`;
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
            type: 'ANALYSIS_PAGE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const addNewOrder = pay_type => {
  console.log(pay_type, 'opuygh');
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      console.log(token, 'tokkeen');
      let url = `https://archimed.justcode.am/api/add_new_order`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          pay_type: pay_type,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'ADD_NEW_ORDER',
            payload: resp,
          });
        })
        .catch(err => console.error(err, 'adsdfvsdf'));
    };
  } catch (error) {}
};

export const getMedicalTestParmasSinglePage = test_id => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/medical_test_params_single_page`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          test_id: test_id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MEDICAL_TEST_SINGLE',
            payload: resp,
          });
        })
        .catch(err => console.error(err, 'adsdfvsdf'));
    };
  } catch (error) {}
};

export const getFlowerData = value => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/get_analise_and_service`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'FLOWER_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getAboutAnalyses = () => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/get_about_analise_info`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'ABOUT_ANALYSES',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const callPhoneNumber = () => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/get_Moscow_clinic_phone`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'PHONE_NUMBER_CLINIC',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};
