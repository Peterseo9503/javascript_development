
//배열 선언 배열안에 오브젝트를 넣을 수 있다. [{},{} 이런식으로 ]
const reviews = [
  {
    id:1,
    name:'Seo Dong Hyun',
    job:'Home protector' ,
    img:'https://www.course-api.com/images/people/person-1.jpeg',
    text:"Hi I only found out about I'm 30 now.. I'm too old f"
  },
  {
    id:2,
    name:'Dong gu',
    job:'web desiner' ,
    img:'https://www.course-api.com/images/people/person-2.jpeg',
    text:"Actually I don't know what to do haha just enjoy the show"
  },
  {
    id:3,
    name:'peter Seo',
    job:'intern' ,
    img:'https://www.course-api.com/images/people/person-4.jpeg',
    text:"I lived in Austrailia about 3months ago, It was great experience haha"
  },
  {
    id:4,
    name:'Gu Gu',
    job:'The boss' ,
    img:'https://www.course-api.com/images/people/person-3.jpeg',
    text:"There is a boardgame called I'm the boss when Scott came to Korea,jungmin and I and he played that game, It was quite funny haha even that was my first time"
  }
];

//HTML요소들의 값들을 가지고 온다. 값을 가지고 올때 getElementById('') 안에는 아이디값을 넣어주고
//querySeletor('.') 안에는 . 쓰고 클레스 이름 값을 가지고 온다.

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//window객체에서 addEventListener 메소드를 실행해서 DOMContentLoaded는 HTML요소들이 다 로드됐을때라는뜻이고
//함수를 실행해라 이런느끼밍다. like 생성자 constructor??

//load initial item
window.addEventListener('DOMContentLoaded',()=>{
  const item  = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  //console.log("너실행되는거맞니?");
});


//배열에 들어가있는 값들도 요소값들의 textcontent를 바꿔주는 함수이다.
//show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//nextBtn의 요소에서 click이벤트가 발생하면, 증감연산자를 사용해서 currentItem값을 1씩증가해주고
//만약 currentItem의값이 가지고있는 배열값보다 크면 다시 0으로 초기화 해준다.
//show next person
nextBtn.addEventListener('click',()=>{
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  //currentItem값으로 화면에 출력
  showPerson(currentItem);
});

//위의 함수의 기능을 반대로 구현해놨다. 
// 이전 버튼을 클릭하면 currentItem의 값이 줄어들고 0보다 작으면 가장 배열에 넣을 수 있는 가장 큰값을 넣어준다.
//show prev person
prevBtn.addEventListener('click', ()=> {
  currentItem--;
  if(currentItem <0){
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
});


//난수 내장함수를 사용해서 currentItem값에 넣어준다. 
//show random person
randomBtn.addEventListener('click',()=>{
  currentItem = Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
})