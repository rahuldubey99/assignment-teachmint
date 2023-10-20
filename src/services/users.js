import axios from 'axios';

// end points
const JSONPlaceholderURL = 'https://jsonplaceholder.typicode.com';
const WorldTimeAPIURL = 'http://worldtimeapi.org/api';

export const getUsers = async () => {
  const response = await axios.get(`${JSONPlaceholderURL}/users`);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`${JSONPlaceholderURL}/users/` + id);
  return response.data;
};

export const getUserPosts = async (userId) => {
  const response = await axios.get(
    `${JSONPlaceholderURL}/posts?userId=${userId}`
  );
  return response.data;
};

export const getCountryList = async () => {
  const response = await axios.get(`${WorldTimeAPIURL}/timezone`);
  return response.data;
};

export const getClockData = async (area) => {
  const response = await axios.get(`${WorldTimeAPIURL}/timezone/`+area);
  return response.data;
};