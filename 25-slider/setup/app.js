//같은 영역에 있는 data.js를 가지고 온다. 
import data from './data.js'
//각 요소들 dom객체의 메소드 사용해서 불러오기 
const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
// if length is 1 hide buttons
//데이터의 길이가 1이면
if (data.length === 1) {
  //버튼들의 display를 none 으로 설정해줌
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
}
// if length is 2, add copies of slides
//데이터를 전개연산자를 사용해서 배열로 ??? 뭐지 어떻게 되는거지? 
//전개연산자(...)는 근본배열값을 복사해서 다른 변수에 넣어준다. 
//하지만 대입연산자는(=) 는 두 변수간의 참조를 공유하기 떄문에, 선언한 변수를 수정하거나 하면
//근본 배열에 영향을 미친다.

let people = [...data]

//데이터가 2개 이상이면?
if (data.length === 2) {
  //data배열값이 people변수에 두번 들어감.. 왜?
  people = [...data, ...data]
}

//그냥 컨테이너에 바로 넣어주네?
container.innerHTML = people
//첫번째 인자는 people의 객체값, 두번쨰는 index값 내가 지정해주면 됨. 
  .map((person, slideIndex) => {
    //값 const {안에 객체값의 키값 넣어줌. }
    //객체 디스트럭처링 이라고도 함 .
    //이미 존재하는 person 객체의 속성을 **개별 변수**로 추출하여 선언해 주는 것입니다
    const { img, name, job, text } = person
    let position = 'next'
    if (slideIndex === 0) {
      position = 'active'
    }
    if (slideIndex === people.length - 1) {
      position = 'last'
    }
    // 1보다 작거나 같으면 (0,1); 
    //length가 0이 나오면 그냥 없는거임. 그래서 그냥 1이 있으면 active로 설정
    if (data.length <= 1) {
      position = 'active'
    }
    return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
<div class="quote-icon">
<i class="fas fa-quote-right"></i>
</div>
 </article>`
  })
  .join('')

//타입은 next인지 prev인지 판단하는 매개변수
const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  
  //표현되고있는 다음형제요소를 받기 
  let next = active.nextElementSibling
  //next가 없다면, 널값이라면
  if (!next) {
    //첫번째 자식을 요소값으로 넣어줘라.
    next = container.firstElementChild
  }
  //엑티브꺼 지워주고 
  active.classList.remove('active')
  //라스트 값지워주고 
  last.classList.remove('last')
  //넥스트의 넥스트 지워주고 
  next.classList.remove('next')

  //뒤로 가기 버튼을 눌렀따면, 
  if (type === 'prev') {
    //액티브에 next를 넣고
    active.classList.add('next')
    //라스트에 active를한다 근데 이건 3개까지만 되는거아니가?
    last.classList.add('active')
    //
    //라스트의 전 요소를 넣는다.
    next = last.previousElementSibling
    //만약 그 전요소가 없다면
    if (!next) {
      //컨테이너에가 가진 마지막 lastElement를 next로두고
      next = container.lastElementChild
    }
    //현재 next에 next class를 지워준다.
    next.classList.remove('next')
    //그리고 라스트 클레스를 추가해주고
    next.classList.add('last')
    return //함수를끝낸다. 
  }
  //액티브의 클레스에 last를주고, 이건맞지. 
  active.classList.add('last')
  // last의 클레스 리스트에 next를 주고?? 이거 3개만 있다는거에 가정한거 아닌가?
  // last.classList.add('next')
  // next.classList에 active를 준다..
  next.classList.add('active')
}
nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')
})
