'use client';
import axios from 'axios';
import cookieServiceClient from './cookieServiceClient';

const baseUrl = 'http://localhost:8000/api/';

class userService {
  Login = async (user: any) => {
    await axios.post(`${baseUrl}login`, user).then((data) => {
      console.log('Data ', data.data);
      const result = data.data;

      const userData = { token: result.token, username: result.user.username };

      console.log(userData);

      cookieServiceClient.setCookie(userData);
    });
  };

  createUser = async (user: any) => {
    return await axios.post(`${baseUrl}register`, user);
  };
}

export default new userService();
