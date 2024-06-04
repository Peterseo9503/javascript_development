import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

//초기값과 다른 검색을 위한 url
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');
//keyup 뭔가 타이핑을하면 키보드가 땟따 떨어지면. 
form.addEventListener('keyup', function (e) {
  e.preventDefault();
  //벨류값을 받고 
  const value = input.value;
  //아무것도없으면 브레이크,
  if (!value) return;
  // 있으면 presentDrinks에 값을 넣어준다. baseURL+ value의 값
  presentDrinks(`${baseURL}${value}`);
});
