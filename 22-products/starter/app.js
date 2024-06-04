const url = 'https://www.course-api.com/javascript-store-products';
//div 객체 받아온다. 
const productsDOM = document.querySelector('.products-center');

//값을 받아오기위한 비동기 함수 생성 
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  //예외처리문
  try {
    //response 를 fetch함수를 이용해서 url에 대한 응답을 저장
    const resp = await fetch(url);
    //resp의 객체 
    console.log(typeof resp); 
    console.log(resp); 
    //data에 response json()로 promise 값을 반환 
    const data = await resp.json();
    console.log(typeof data); 
    console.log(data); 
    return data;
  } catch (error) {
    //에러가 났을경우 메시지 출력
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

//displayProducts 함수 생성 매개변수는 list 
const displayProducts = (list) => {
  //productList값에 
  const productList = list
  //배열메소드 map를 사용해서 인자값에 product 배열들의 값을 넣고 
    .map((product) => {
      //파싱하는부분이네  
      const { id } = product;
      //오브젝트 name : title, price 두개 넣고 
      const { name: title, price } = product.fields;
      //
      const { url: img } = product.fields.image[0];
      //
      const formatPrice = price / 100;
      // id,name,price,img
      //너는 배열값이니? 스트링값이니? 
      
      //리턴을 문자열로 해주는거보니, 문자열 값이겠구만.. 
      //a태그로 묶어서 넣고, href에 다른 html 파일 알려줌 
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
    // console.log(productList);
    //돔에 넣어준다. 
  productsDOM.innerHTML = ` <div class="products-container">
         ${productList}
          
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
