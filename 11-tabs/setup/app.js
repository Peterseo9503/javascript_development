// 컨텐츠가 와 버튼이 들어간 about클레스라고 불리는 div요소를 받아온다.
const about = document.querySelector(".about");
//버튼들을 모두 받아온다.
const btns = document.querySelectorAll(".tab-btn");
//about안에 있는 모든 컨텐츠를 받아온다.
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  //각 요소에 있는 data-id를 받아온다. 
  const id = e.target.dataset.id;
  //Id가 참이면 버튼을 클릭한거고 (ex history 값이라고 가정)
  if (id) {
    // remove selected from other buttons
    // 3개의 버튼 forEach로 돌린다
    btns.forEach(function (btn) {
      //다 classlist에 있는 active값을 제거한다. 
      btn.classList.remove("active");
    });
    //클릭된 요소(history)의 버튼만 active로 바꿔준다. 
    e.target.classList.add("active");
    // hide other articles
    //아티클요소들 역시 모두 active클레스를 제거한다.
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    //id(history로) 요소를 받아와서 
    const element = document.getElementById(id);
    //그요소만 active 클레스를 추가한다.
    element.classList.add("active");
  }
});



//data-id는 버튼들만 가지고 있다. 