//using selectors inside the element

//요소 클레스 이름이 question인 요소를 가지고온다(배열방식으로) 아티클3개겠지?
const questions = document.querySelectorAll(".question");


//forEach문을 써서 요소 개수만큼 반복한다 안에 매개변수는 해당 요소이다.
questions.forEach(function (question) {
  //해당 question 요소안에 있는 버튼 클레스를 받아온다. 
  const btn = question.querySelector(".question-btn");
  //버튼에 이벤트 리스너를 넣어준다.
  btn.addEventListener("click", function () {
  //한번더 forEach하면 다시 3개의 아티클을 체크하는데
    questions.forEach(function (item) {
      //만약 현재 아티클과 비교하는 3개중 1개의 아티클이 다르면
      if (item !== question) {
        //그 아티클의 classList에 있는 show-text를 삭제한다.
        item.classList.remove("show-text");
      }
    });
//3번종료
//이건 무조건 실행 버튼 누르면 toggle기능써서 show-text있으면 삭제, 없으면 넣어주고
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });
