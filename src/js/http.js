/**
 * backend와 통신하기 위한 axios 설정
 */
 import axios from 'axios';
 // import { cacheAdapterEnhancer } from 'axios-extensions';
 import backendConfig from '@/js/backendConfig.js';
 import queryString from 'qs';
 import { getToken } from '@/utils/auth';
 import request from '@/utils/request';
 import {
   getAccessToken,
   getNewToken,
   setAccessToken,
   setRefreshToken,
   getAccessExpiredCode,
   getRefreshExpiredCode,
   getWrongPasswordCode,
   getConcurrentExpiredCode,
   getRefreshToken,
 } from '../utils/auth';
 import common from './common';
 import store from '@/store';
 import router from '@/router';
 
 // axios 공통함수
 var http = {
   url: null,
   param: null,
   type: 'GET',
   async: true,
   isSetHeader: true,
   isAuthCheck: false,
   processData: true,
   dataType: 'json',
   // contentType: 'application/json;charset=utf-8',
   ajaxPid: null, // ajax 요청의 key값 millisecond 데이터
   // isRetry:  false,  // network 커넥션 오류로 인해 재전송 처리 요청 여부(true: 재전송 중, false: 일반 요청)
   accept: null,
   request: null,
   requestGet: null,
   requestPost: null,
   requestPut: null,
   requestFile: null,
   defaultErrorHandler: null,
   getErrorMessage: null,
   isLogin: null,
   isFileRequestPost: false,
   isLoading: true,
 };
 
 var orgHttp = {
   url: null,
   param: null,
   type: 'GET',
   async: true,
   // isRetry:  false,
   isSetHeader: true,
   isAuthCheck: false,
   processData: true,
   dataType: 'json',
   // contentType: 'application/json;charset=utf-8',
   ajaxPid: null,
   isLoading: true,
 };
 
 // 기본 axios
 http.request = function(_callbackSuccess, _callbackFail) {
   // 현재 프로토콜, 호스트를 조합하여 url 설정 (내/외부 접속)
   // BACKEND 직접 호출 시, 주석처리
   if (!http.url) return null;
   // http.url = http.url.charAt(0) === '/' ? http.url.substring(1, http.url.length) : http.url;
   var url = backendConfig.getUrl(http.url); // ajax.isAuthCheck ? config.protocol + config.backEndAuthFullUrl + ajax.url : config.protocol + config.backEndFullUrl + ajax.url
   var key = '';
   var method = http.type.toLowerCase();
   // console.log("url : " + url);
   // console.log("type : " + method);
   // console.log("param : ");
   // console.log(JSON.stringify(http.url));
   // console.log(JSON.stringify(http.param));
 
   var param = {};
   var query = '';
   var paramKey = '';
   // var form_data = new FormData();
   if (method === 'get') {
     let tempParam = http.param;
     if (!tempParam) {
       tempParam = {
         lang: common.getLang()
       }
     } else {
       tempParam.lang = common.getLang()
     }
     query = queryString.stringify(tempParam);
     param = {
       params: tempParam,
       paramsSerializer: () => {
         return query;
       },
     };
   } else {
     if (http.isFileRequestPost) {
       param = new FormData();
 
       for (paramKey in http.param) {
         if (http.param.hasOwnProperty(paramKey)) {
           if (paramKey !== 'files') {
             param.append(paramKey, http.param[paramKey]);
           }
         }
         if (http.param.hasOwnProperty('files') && paramKey === 'files') {
           if (http.param.files && http.param.files.length > 0) {
             // eslint-disable-next-line max-depth
             for (let i = 0; i < http.param.files.length; i++) {
               param.append('files', http.param.files[i], http.param.files[i].name);
               param.append('tempId', http.param.files[i].tempId);
             }
           } else {
             param.append('tempId', '');
           }
         }
       }
     } else {
       param = http.param;
     }
   }
 
   var errorMessage = '';
   /**
    * 서버통시시 공용 로딩바 사용
    */
   if (http.isLoading) window.getApp.$emit('LOADING_SHOW');
 
   // 19.08.30 axios 인증토큰 헤더 추가
   axios.defaults.headers.common['X-Authorization'] = getAccessToken();
 
   let configHeader = {
     headers: {
       // Pragma: 'no-cache'
       'Cache-Control': 'no-cache',
     },
   };
   setTimeout(() => {
     axios[method](url, param, configHeader)
       .then(_result => {
         for (key in orgHttp) {
           if (http.hasOwnProperty(key)) http[key] = orgHttp[key];
         }
         if (typeof _callbackSuccess === 'function') {
           _callbackSuccess(_result);
         }
         if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
         http.isLoading = true;
 
         let deleteUrl = backendConfig.getHttpAddress();
         let impoQuery = queryString.stringify({
           servletPath: url,
           crudCd: method,
           deleteUrl: deleteUrl,
           // data: param,
           data: '',
           userId: getToken(),
         });
         // data에 parameter를 받아서 로그에 자세한 내용을 담을 수 있으나
         // 길이가 길면 담지 못함ㅠ
         let impoParams = {
           params: {
             servletPath: url,
             crudCd: method,
             deleteUrl: deleteUrl,
             // data: param,
             data: '',
             userId: getToken(),
           },
           paramsSerializer: () => {
             return impoQuery;
           },
         };
         let returnVal = [];
 
         // crud log 제외 ServletPath
         let ignoreServletPaths = ['api/manage/user/favorite',
           'api/manage/codemaster/getselect',
           'api/manage/codemaster/getselectattr',
           'api/manage/treedepts',
           'api/main/portlet'];
         var isIgnore = false;
         ignoreServletPaths.forEach(function(item) {
           if (impoParams.params.servletPath.indexOf(item) > -1) {
             isIgnore = true;
             return;
           }
         });
         if (!isIgnore) {
           axios
             .get(deleteUrl + '/api/manage/log/crudlog', impoParams)
             .then(_result => {});
         }
       })
 
       .catch(_error => {
         try {
           errorMessage = _error.response.data;
         } catch (e) {
           // errorMessage = '원인을 알 수 없는 에러가 발생하였습니다.';
           errorMessage = _error;
         }
 
         const status = _error.response ? _error.response.status : null;
         const returnCode = _error.response
           ? _error.response.data.returnCode
           : null;
 
         if (status === 401) {
           if (returnCode === getAccessExpiredCode()) {
             // Access Token 만료 : Refresh Token으로 재인증 요청
             // console.log('-------------- 2-1. Access Token 만료')
             // 1. Refresh Token 확인 요청
             return getNewToken()
               .then(_res => {
                 // 2. 새로 발급된 Access Token 으로 재요청
                 // console.log('-------------- 2-3. 새로 발급된 Access Token 으로 재요청')
                 let token = getAccessToken();
                 // console.log('------- new token : ' + token);
                 axios.defaults.headers.common['X-Authorization'] = token;
 
                 if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
                 http.isLoading = true;
                 // 이전요청을 다시 수행하도록 url및 parameter등을 다시 호출.
                 return request(_error.config);
                 // if (typeof _callbackSuccess === 'function') _callbackSuccess({});
                 // if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
                 // http.isLoading = true;
               })
               .catch(_error => {
                 // console.log('::: 만료토큰으로 처리되었음. 재로그인 필요.');
                 if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
                 http.isLoading = true;
                 if (store.getters.isSso === '1') {
                   common.goLogin();
                 } else {
                   // 초기화 후 sso 처리가 끝났다는 창 open
                   store
                     .dispatch('LogOut')
                     .then(() => {
                       common.movePage(router, '/sessionTimeOut');
                     })
                     .catch(() => {
                       common.movePage(router, '/sessionTimeOut');
                     });
                 }
               });
           } else if (returnCode === getRefreshExpiredCode()) {
             // Refresh Token 만료
             // 1. 비밀번호 확인 팝업 띄우기
             if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
             http.isLoading = true;
             for (key in orgHttp) {
               if (http.hasOwnProperty(key)) http[key] = orgHttp[key];
             }
             if (store.getters.isSso === '1') {
               common.goLogin();
             } else {
               // 초기화 후 sso 처리가 끝났다는 창 open
               store
                 .dispatch('LogOut')
                 .then(() => {
                   common.movePage(router, '/sessionTimeOut');
                 })
                 .catch(() => {
                   common.movePage(router, '/sessionTimeOut');
                 });
             }
           } else if (returnCode === getWrongPasswordCode()) {
             // 비밀번호가 맞지 않을 때만 진입
             if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
             http.isLoading = true;
             return Promise.reject(_error);
           } else if (returnCode === getConcurrentExpiredCode()) {
             // 새로운 IP로 로그인 했을 때만 진입
             if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
             http.isLoading = true;
             // common.openCheckLoginPopup();
             return;
           } else {
             if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
             http.isLoading = true;
             if (store.getters.isSso === '1') {
               common.goLogin();
             } else {
               // 초기화 후 sso 처리가 끝났다는 창 open
               store
                 .dispatch('LogOut')
                 .then(() => {
                   common.movePage(router, '/sessionTimeOut');
                 })
                 .catch(() => {
                   common.movePage(router, '/sessionTimeOut');
                 });
             }
           }
         } else {
           // 개발자 에러 메시지
           if (process.env.NODE_ENV === 'development') {
             window.getApp.$emit('NOTIFY_EXCEPTION', {
               title: 'L0000003598', // [개발자 안내]
               message: errorMessage,
               type: 'error',
               case: 'development',
               duration: 0, // 자동으로 닫히지 않음
             });
           }
 
           for (key in orgHttp) {
             if (http.hasOwnProperty(key)) http[key] = orgHttp[key];
           }
           if (typeof _callbackFail === 'function') _callbackFail(errorMessage);
           if (http.isLoading) window.getApp.$emit('LOADING_HIDE');
           http.isLoading = true;
         }
       });
     // }
   }, 200);
 };
 
 http.requestGet = function(_callbackSuccess, _callbackFail) {
   http.type = 'GET';
   return http.request(_callbackSuccess, _callbackFail);
 };
 
 http.requestPost = function(_callbackSuccess, _callbackFail) {
   http.type = 'POST';
   return http.request(_callbackSuccess, _callbackFail);
 };
 
 http.requestPut = function(_callbackSuccess, _callbackFail) {
   http.type = 'PUT';
   return http.request(_callbackSuccess, _callbackFail);
 };
 
 http.requestDelete = function(_callbackSuccess, _callbackFail) {
   http.type = 'DELETE';
   return http.request(_callbackSuccess, _callbackFail);
 };
 
 http.getErrorMessage = function(_error) {
   if (_error.status === 400) {
     return '[400오류]필수 입력값이 입력되지 않았습니다.';
   }
 };
 
 export default http;
 