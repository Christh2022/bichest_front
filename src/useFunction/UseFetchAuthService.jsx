// src/services/authService.js
import axios from 'axios';
import moment from 'moment';


const API_URL = 'https://127.0.0.1:8000'; 

const login = async (email, password) => {

  let options = {
    method: 'POST',
    url: `${API_URL}/api/login`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {email: email, password: password}
  };

  return axios.request(options).then(function (response) {
    console.log(response.data);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
  
};

const logout = () => {
  localStorage.removeItem('user');

  let options = {
    method: 'POST',
    url: `${API_URL}/logout`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };

  axios.request(options).then(function (response) {
    return (response.data);
  }).catch(function (error) {
    console.error(error);
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const signup = async (email, firstName, lastName, address, birthday) => {
   const birthDate = moment(birthday).format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  let options = {
    method: 'POST',
    url: `${API_URL}/api/signup`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {
      email: email,
      last_name: lastName,
      first_name: firstName,
      address: address,
      birth_day: birthDate
    }
  };

  return axios.request(options).then(function (response) {
    console.log(response.data);
    
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
  
};

const resetPassword = async (email, password) => {
  var options = {
    method: 'POST',
    url: `${API_URL}/api/forgotten/password`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {email: email, password: password}
  };

  axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
}

export default {
  login,
  logout,
  getCurrentUser,
  signup,
  resetPassword
};
