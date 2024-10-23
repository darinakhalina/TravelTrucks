import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getCampersApi = async params => {
  const response = await instance.get('/campers', { params });
  return response.data;
};

export const getCamperApi = async id => {
  const response = await instance.get(`/campers/${id}`);
  return response.data;
};
