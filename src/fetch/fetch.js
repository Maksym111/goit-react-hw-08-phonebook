import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const register = async dataUser => {
  try {
    const res = await instance.post('/users/signup', dataUser);
    token.set(res.data.token);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const logInUser = async credentials => {
  try {
    const res = await instance.post('/users/login', credentials);
    token.set(res.data.token);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const logOutUser = async () => {
  try {
    const res = await instance.post('/users/logout');
    token.unset();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const postContact = async ({ name, number }) => {
  const { data } = await instance.post('/contacts', {
    name,
    number,
  });
  return data;
};

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
