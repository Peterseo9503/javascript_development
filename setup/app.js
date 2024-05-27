// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


// const navToggleBtn = document.querySelector('.nav-toggle');
// const ulLinks = document.querySelector('.links');
// navToggleBtn.addEventListener("click",()=>{
//     ulLinks.classList.toggle("show-links");
// })



const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  //classList는 HTML요소의 클레스를 조작하기 위해 제공하는 속성
  //classList를 사용하면 class를 추가, 제거, 토글, 확인 등 할 수 있음
  // 주요 메서드는 add, remove, toggle*** 클레스가 있으면 제거, 없으면 추가
  //              contains 클렛가 있는지 확인 불리언값반환 replace등이 있음
  //navToggle객체의 버튼을 누르면 있으면 추가, 없으면 제거 됨
  //사용자의 눈에서는 화면이 보였다가 없어졌다가 함.
  links.classList.toggle("show-links");
});
