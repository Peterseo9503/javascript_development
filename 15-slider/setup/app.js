//div 요소 가지고옴 
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
//slide 클레스를 가진 모든 요소를 가지고 와라. 
slides.forEach(function (slide, index) {
  //가지고온 개수 반큼 반복하고 그 요소의 스타일의 left를 인덱스 * 100을줘라. 
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
//만약 next버튼을 클릭하면 
nextBtn.addEventListener("click", function () {
  //숫자를 1증가해주고
  counter++;
  //carousel함수 실행
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons
// 카운트가 3보다 작으면 
  if (counter < slides.length - 1) {
    //next버튼을 보이게 
    nextBtn.style.display = "block";
  } else {
    //3보다 더 크면 next버튼을 안보이게, 
    nextBtn.style.display = "none";
  }
  //카운트가 
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    //카운트가 0이면 전 버튼이 안보이도록
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    //카운트별로 슬라이스의 translate를 수정함 
    //만약 0에서 1로 넘어 갔으면 translateX값을 그만큼 뺴줌.
    //요소의 너비만큼 index* 100% 이동 
    // 즉 next버튼을 클릭하면 왼쪽으로 100프로 이동하면서 다음 이미지가 보여지고
    // Prev버튼을 누르면 오른쪽으로 100%이동하면서 이전 그림이 보여짐
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
