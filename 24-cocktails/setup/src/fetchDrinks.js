import { showLoading } from './toggleLoading.js';
const fetchDrinks = async (url) => {
  //로딩을 보여주고
  showLoading();
  try {
    // response 객체를 받고 
    const response = await fetch(url);
    //.json() 메소드로 파싱된 promise 객체를 받는다. 
    const data = await response.json();
    //리턴해주고
    return data;
    //만약 오류가 캐치되면
  } catch (error) {
    //오류를 출력한다.
    console.log(error);
  }
};
// 사용자 정의 함수로 쓰겠다. 
export default fetchDrinks;
