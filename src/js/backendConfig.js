/**
 * backend 접속 정보를 가지고 있는 js
 */
 let backendConfig = {
  url: process.env.BASE_API,
};

backendConfig.getHttpAddress = () => {
  return backendConfig.url;
};

backendConfig.getUrl = _pageUrl => {
  if (!_pageUrl || typeof _pageUrl !== 'string') {
    window.alert('[개발자용 메시지]: 유효한 주소가 아닙니다.');
    return '';
  }
  var pageUrl = _pageUrl.charAt(0) === '/' ? _pageUrl : '/' + _pageUrl;
  return backendConfig.getHttpAddress() + pageUrl;
};

export default backendConfig;
