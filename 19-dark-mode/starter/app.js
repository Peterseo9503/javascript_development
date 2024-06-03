const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
//data.js에 있는 articles의 데이터를 가지고 온다. 
//그냥 문자열이네? 
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    //html에서 js로 불러온 moment를 사용함. 
    //moment는 데이터를 꾸며? 주는 자바스크립트 함수들을 제공한다. 
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');
   console.log(typeof articlesData);
articlesContainer.innerHTML = articlesData;
