let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  //filteredProducts에 값이 하나도 없으면
  if (filteredProducts.length < 1) {
    //컨테이너에 아래의 문자열을 출력한다. 
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    //그리고 아무런값도 없이 return 말그대로 함수를 종료한다. 
    return;
  }
  //innerHTML로 컨테이너에 값을 넣는다. 역시 배열메소드인 map를 사용한다. 
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      //자동으로 알아서 찾아서 대입됨. 배열값을 파싱한다. 순서가 아니였네 ㄷㄷ
      const { id, image ,title,  price } = product; 
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};

//메소드 실행 아마 처음 무조건 실행되게 만들었음. 
displayProducts();

// Text Filter
//필터컨테이너 안에 있는 input form을 가지고 온다. 
const form = document.querySelector('.input-form');
//그리고 폼안에 있는 serach-input input태그도 가지고 온다. 
const searchInput = document.querySelector('.search-input');

// 키보드를 누르고 뗄때 발생하는 이벤트  Keyup
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  //filterProducts 배열에 = products.filter값을 대입하는데, 
  //product의 값은 data배열에 있다. 
  filteredProducts = products.filter((product) => {
    // console.log(product.title.toLowerCase().includes(inputValue));
    // console.log("몇번?");
    // true or false를 리턴해주는데, 만약 참이면 그 해당 배열값을 filterProducts에 넣어준다.
    //product의 타이틀을 소문자로 바꾸고 input text에 넣은 알파벳을 포함하면 참 아니면 false를 리턴
    //그리고 아무 값이 없어지면 그냥 전부 다 보여줌 왜 그러는지는 모르겠다; 
    //아 그냥 공백값은 스트링이니까, 스트링이면 다 출력해주나보다.
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log(typeof filteredProducts);
  console.log(filteredProducts);
  //뿌려줌 
  displayProducts();
});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    //전개연산자 하여 반복작업 줄이고 ,내장클레스인 Set을 사용해서 중복값을 제거한다.
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};


displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  //클레스 company-btn을 포함하고 있고, 
  if (el.classList.contains('company-btn')) {
    //data-id 가 all 이면
    if (el.dataset.id === 'all') {
      //filterProducts배열에 기존 값 모두를 넣는다. 
      filteredProducts = [...products];
      //아니라면
    } else {
      //filterdProducts값에 products배열을 filter메소드를 사용해서 
      //참거짓 반환해서 클릭한 이벤트 요소에 data-id의 값과 같은 배열 값들을 넣는다.
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    //검색값 초기화 
    searchInput.value = '';
    displayProducts();
  }
});
