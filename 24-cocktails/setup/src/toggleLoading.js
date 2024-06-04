import get from './getElement.js';
//get 사용자정의 함수로 .loading 요소를 가지고옴.
const loading = get('.loading');

//loading 객체의 classlist에 hide-loading 부분을 지워서 화면에 보이게함.
export const showLoading = () => {
  loading.classList.remove('hide-loading');
};
//반대로 숨기기 위해서
export const hideLoading = () => {
  loading.classList.add('hide-loading');
};
