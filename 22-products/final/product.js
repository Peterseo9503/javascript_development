const productDOM = document.querySelector('.product');
const url = 'https://www.course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
     console.log(window.location.search);
     //Get방식으로 이전페이지가 보낸 params값을 받기 위해서 브라우저 객체를 사용한다.
    const params = new URLSearchParams(window.location.search);
    //id의 값을 id에 넣는다.
    const id = params.get('id');
    //fetch 함수를 이용해서 외부 API서버에 데이터를 요청한다.
    const response = await fetch(`${url}?id=${id}`);
    //받아오면 응답을 json형식으로 넣고
    const data = await response.json();
    //데이터를 리턴한다. 
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};

const displayProduct = (product) => {
  console.log(product);
  // company, colors, description, name:title, price, image(url:img)
  // 받아온 json객체를 파싱해서 값을 넣는다. 
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  //url 값 얻어오고 
  const { url: img } = image[0];
  //타이틀값을 대문자로 바꿔준다. 
  document.title = title.toUpperCase();

  // colors
  //배열메소드 map을 사용해서 colors parsing한다. 
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');


  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

//시작
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
