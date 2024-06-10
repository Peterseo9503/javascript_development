const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  //아무것도 없다면 null값 즉 false겠지 
  const value = inputDOM.value;
  // 벨류가 참이 아니면
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error"> please enter valid search term</div>';
    return;
  }
  fetchPages(value);
});

//비동기함수 
const fetchPages = async (searchValue) => {
  //비동기함수가 전부 실행되기전에 값을 넣어주고 
  resultsDOM.innerHTML = '<div class="loading"></div>';
  //
  try {
    //서치할 값을 넣어준다. 
    const response = await fetch(`${url}${searchValue}`);
    //프로미즈값을 반환받고, json() 메소드를 사용해서 파싱된 값들을 가지고 온다.
    const data = await response.json();
    //query의 search가 뭘 반환 해주는지는 모르겠는데, 
    const results = data.query.search;
    //길이가 1보다 작으면 즉, 결과값이 없으면
    if (results.length < 1) {
      //없다고 알려주고
      resultsDOM.innerHTML =
        '<div class="error">no matching results. Please try again</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
  }
};

const renderResults = (list) => {
  //카드리스트에 HTML 생성 문자열 넣어준다. 
  const cardsList = list
    .map((item) => {
      //필요한 데이터 파싱해주고 
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join('');
  resultsDOM.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
};
