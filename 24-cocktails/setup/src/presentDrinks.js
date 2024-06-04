import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  // fetch drinks
  // 패치 함수 간략화 fetchDrinks의 리턴값은 promise 객체이다. 

  //만약 form Eventlisterner에서 왔으면 url input 태그에 입력한 값이 추가되서 들어가겠지. 
  const data = await fetchDrinks(url);


  // display drinks
  //promise 객체를 displayDrinks 에 인자값으로 넣는다. 
  console.log("너의 값은 무엇이냐?");
  console.log(data);
  const section = await displayDrinks(data);
  //값이 아무것도 없으면 그냥 넘어가겠지만, 
  //section 값이 return 됐다면, 
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
