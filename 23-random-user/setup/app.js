//사용자정의 함수 를 
import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

//이걸 외부라이브러리 라고 하는가? 아니면 사용자 정의 함수라고 하는가?
//사용자 정의 함수라고 한다. 
//사용자 정의 함수를 사용해서 클레스가 btn인 놈을 가지고 온다. 
const btn = get('.btn');

const showUser = async () => {
  // get user from api
  //getUser라는 사용자 정의 함수를 사용한다. 
  const person = await getUser();
  //displayUser 사용자 정의 함수 가지고 옴.
  displayUser(person);

  // display user
};
// BOM객체의 이벤트리스너를 사용, DOMCOntentLoaded가 되면 showUser함수를 실행한다.
window.addEventListener('DOMContentLoaded', showUser);
// btn에 이벤트리스너를 추가한다.
btn.addEventListener('click', showUser);
