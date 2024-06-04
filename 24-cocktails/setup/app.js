import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

//돔객체가 다 로드 되면 
window.addEventListener('DOMContentLoaded', () => {
  //presentDrinks 사용자 정의 함수 실행 인자 값은 URL;
  presentDrinks(URL);
});

console.log(localStorage);

