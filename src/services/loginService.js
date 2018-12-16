import request from '../utils/request';

export const login = (data) => {
  return request({
    url: '/index/login',
    method: 'POST',
    data: data
  })
};