import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePhoneNumberRegister = phone => dispatch => {
  dispatch({
    type: 'SAVE_PHONE_NUMBER_REGISTER',
    payload: phone,
  });
};

export const idDoctor = id => dispatch => {
  dispatch({
    type: 'DOCTOR_ID',
    payload: id,
  });
};

export const registeredFunction = (
  firstName,
  lastName,
  middleName,
  phone,
  birthDate,
  gender,
  email,
) => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/register`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          phone: phone,
          birthDate: birthDate,
          gender: gender,
          mail: email,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GET_REGISTER',
            payload: resp,
          });
          console.log(resp, 'register');
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

// export const getDoctorsList = number => {
//   try {
//     return async dispatch => {
//       const token = await AsyncStorage.getItem('token');
//       const Auth = 'Bearer ' + token;
//       let url = `https://archimed.justcode.am/api/doctors_list?page=${number}`;
//       let requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: Auth,
//         },
//         body: JSON.stringify({
//           city: 'Москва',
//           orderby: false,
//         }),
//       };
//       fetch(url, requestOptions)
//         .then(resp => {
//           return resp.json();
//         })
//         .then(resp => {
//           dispatch({
//             type: 'GET_DOCTORS_LIST',
//             payload: resp,
//           });
//         })
//         .catch(err => console.error(err, 'doctors list'));
//     };
//   } catch (error) {}
// };

export const getDoctorsList = (page, next_url, filter, city) => {
  console.log(city);
  return async dispatch => {
    dispatch({type: 'FETCH_ITEMS_REQUEST'});
    const token = await AsyncStorage.getItem('token');
    const Auth = 'Bearer ' + token;
    try {
      let url =
        page <= 1 ? `https://archimed.justcode.am/api/doctors_list` : next_url;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          filtr: filter,
          city: city,
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          console.log(item, 'klj');
          dispatch({
            type: 'GET_DOCTORS_LIST',
            payload: item.data.data,
          });
        });
    } catch (error) {
      dispatch({type: 'FETCH_ITEMS_FAILURE', payload: error});
      console.log(error, 'jkj');
    }
  };
};

export const newConfirmCode = phone => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/requestNewAccountConfirmationCode`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log(resp, 'jknkjn');
          dispatch({
            type: 'GET_NEW_CONFIRM_CODE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getCityList = () => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/GetCity`;
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
            type: 'GET_CITY_LIST',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};
//

export const userAddCity = id => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/UserAddCity`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city_id: id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'USER_ADD_CITY',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const userRegData = data => dispatch => {
  dispatch({
    type: 'USER_REG_DATA',
    payload: data,
  });
};

export const sendFeedBack = (name, email, description) => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/Feedback`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          description: description,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'SEND_FEED_BACK',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const doctorsSinglePage = id => {
  try {
    return async dispatch => {
      let url = `https://archimed.justcode.am/api/single_doctor`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctor_id: id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'DOCTORS_SINGLE_PAGE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const saveDateForConsultation = date => dispatch => {
  dispatch({
    type: 'SAVE_DATE_FOR_CONSULTATION',
    payload: date,
  });
};

export const getHasNotificatiion = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/has_mynotification`;
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
            type: 'GET_HAS_NOTIFICATION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getUserInfo = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/auth_user_info`;
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
            type: 'GET_USER_INFO',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const doctorVisitTime = (
  subject_id,
  PL_EXAM_ID,
  start_date,
  end_date,
) => {
  try {
    return async dispatch => {
      console.log(subject_id, PL_EXAM_ID, start_date, end_date, 'tvyaaalll');
      dispatch({
        type: 'DOCTOR_TIME_LOADING',
        payload: true,
      });
      let url = `https://archimed.justcode.am/api/doctor_visit_time`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject_id: subject_id,
          PL_EXAM_ID: PL_EXAM_ID,
          start_date: start_date,
          end_date: end_date,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'DOCTOR_TIME_LOADING',
            payload: false,
          });
          dispatch({
            type: 'DOCTORS_VISIT_TIME',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getExamIdDoctors = id => dispatch => {
  dispatch({
    type: 'EXAM_ID_DOCTORS',
    payload: id,
  });
};

export const getSubjectIdDoctors = id => dispatch => {
  dispatch({
    type: 'SUBJECT_ID_DOCTORS',
    payload: id,
  });
};

export const getPriceConsultation = price => dispatch => {
  dispatch({
    type: 'PRICE_FOR_CONSULTATION',
    payload: price,
  });
};
export const getTimeConsultation = price => dispatch => {
  dispatch({
    type: 'TIME_FOR_CONSULTATION',
    payload: price,
  });
};

export const getNewsFunction = offset => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_news?offset=${offset}`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: Auth,
        },
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GET_NEWS',
            payload: resp.data,
          });
        })
        .catch(err => console.error(err, 'kjuu'));
    };
  } catch (error) {
    console.log(error, 'khhh');
  }
};

export const getMyAllOrders = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_my_all_orders`;
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
            type: 'GET_MY_ALL_ORDERS',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const orderPaymentSuccessfully = order_id => {
  console.log(order_id, 'order_id');
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/order_payment_successfully`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          order_id: order_id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log(resp, 'paymanttttt');
          dispatch({
            type: 'ORDERS_PAYMENT',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const orderPaymentCancel = order_id => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/cancel_order`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          order_id: order_id,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'ORDERS_CANCEL',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getStartInfo = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/StartInfo`;
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
            type: 'GET_START_INFO',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const logoutFunction = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/Logout`;
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
          console.log(resp);
          dispatch({
            type: 'LOGOUT_FUNCTION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {
    console.log(error, 'errrrrr');
  }
};

// all_keys_count

export const getCount = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/all_keys_count`;
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
            type: 'GET_KEYS_COUNT',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const updateProfileFunction = (grajdantstvo, adress, job) => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/update_user_info`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          GRAGDANSTVO: grajdantstvo,
          FACT_ADRES: adress,
          JOB: job,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'UPDATE_USER_INFO',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getCityName = name => dispatch => {
  dispatch({
    type: 'CITY_NAME',
    payload: name,
  });
};

export const commentDoctor = (
  doctorServiceId,
  description,
  grade,
  orderId,
  userId,
) => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/add_review`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          doctor_services_id: doctorServiceId,
          description: description,
          grade: grade,
          order_id: orderId,
          user_id: userId,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'DOCTOR_COMMENT',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getAllReception = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_auth_user_order`;
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
            type: 'GET_ALL_RECEPTION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getAplicationUse = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_ApplicationUse`;
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
            type: 'GET_APLICATION_USE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getPrivacyPolicy = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_PrivacyPolicy`;
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
            type: 'GET_PRIVACY_POLICY',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getTermsOfService = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_TermsOfService`;
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
            type: 'GET_TERMS_OF_SERVICE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const callDoctorService = ({adress, description, polygone}) => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/setDeparture`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Auth,
        },
        body: JSON.stringify({
          address: adress,
          description: description,
          poligone: polygone,
        }),
      };
      fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'CALL_DOCTOR_SERVICE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getQuestioms = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_question`;
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
            type: 'GET_QUESTION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getHomePageAnalisys = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_analis_limit3`;
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
            type: 'GET_HOMEPAGE_ANALISYS',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getHomePageDirection = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/my_basket_record_limit3`;
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
            type: 'GET_HOMEPAGE_DIRECTION',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getHomeService = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_home_service`;
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
            type: 'GET_HOMESERVICE',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getNotificationData = () => {
  try {
    return async dispatch => {
      const token = await AsyncStorage.getItem('token');
      const Auth = 'Bearer ' + token;
      let url = `https://archimed.justcode.am/api/get_my_notyfy`;
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
            type: 'GET_NOTIFICATION_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};
