import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  console.log("너의 값은 무엇이냐?");
  console.log(!drinks);
  //section-center 요소 가지고오고
  const section = get('.section-center');
  //title 요소 가지고 오고 
  const title = get('.title');
//참인놈한테 반대로 하라고 하니 거짓이 뜨지. 
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search';
    section.innerHTML = null;
    //drinks값이 없다면 바로 아무값도 없이 리턴~
    return;
  }
  //배열메소드 map을사용해서 배열들을 파싱한다. 
  const newDrinks = drinks
    .map((drink) => { 
             //키값, 벨류 
             //그럼 자동으로 idDrink라는 키를가진놈을 찾아서 value값을 id에 넣어준다는건가?
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      //리턴은 다 지정해서 문자열로 newDrinks값에 계속 들어가지요.
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
    //로딩화면 가려주고 
  hideLoading();
  //타이틀 공백으로 해주고 
  title.textContent = '';
  //이미 섹션에 넣어줬는데? 또 뭘해? 
  section.innerHTML = newDrinks;
  // 리턴값으로 section객체를 넘겨줌.
  return section;
};

export default displayDrinks;
