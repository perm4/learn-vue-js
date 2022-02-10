/**
 * backend와 통신하기 위한 axios 설정
 */
import axios from 'axios';
import backendConfig from '@/js/backendConfig.js';
import queryString from 'qs';

// axios 공통함수
let http = {
  url: null,
  param: null,
  type: 'GET',
  async: true,
  dataType: 'json',
  request: null,
};

// 기본 axios
http.request = function(_callbackSuccess, _callbackFail) {
  if (!http.url) return null;
  let url = backendConfig.getUrl(http.url);
  let key = '';
  let method = http.type.toLowerCase();
};

export default http;