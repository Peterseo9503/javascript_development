
// HTML요소값들을 변수에 넣어준다. 
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//toggleBtn을 클릭했을때, sidebar의 클레스가 show-sidenar면 제거하고, 아니면 show-sidebar로 바꿔준다.

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});


//X버튼 클로즈버튼을 누르면 sidebar에 show-sidebar클레스를 제거한다.
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
