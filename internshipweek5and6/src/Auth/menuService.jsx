import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menu/';

const getMenuItems = () => {
  return axios.get(API_URL);
};

const placeOrder = (order) => {
  return axios.post(API_URL + 'order', order);
};

export default {
  getMenuItems,
  placeOrder,
};
