const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// h4인 giveaway를 선택하여 가져온다. 
const giveaway = document.querySelector('.giveaway');
// div인 deaaline를 선택하여 가져온다.
const deadline = document.querySelector('.deadline');
// 클레스가 deadline-format인 요소안에 있는 모든 <h4>요소를 선택하여 가져온다.
const items = document.querySelectorAll('.deadline-format h4');

//현재 날짜를가지고옴
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
//futureDate에 위에서 가져온 year,month,temday에 10일더한값을 넣어주고
//시간은 11시 30분 0초로 설정한다. 
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
//month숫자로 month배열에 있는 문자열을 받아온다. 
month = months[month];
// weekdays 배열에 있는 문자열을 받아온다. 
const weekday = weekdays[futureDate.getDay()];
// date를 받아옴 
const date = futureDate.getDate();
//이벤트가 종료되는 시점을 알려준다. 
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// getTime() 메서드는 1970년 1월 1일 00:00:00(UTC)를 기준으로 
// 한 현재 날짜와 시간부터 해당 Date 객체의 시간까지의 경과된 
// 밀리초를 반환합니다.
const futureTime = futureDate.getTime();
//** 그래내가 가정해보자. 그냥 미래시간까지 1000초가 걸린다고 생각.  */

function getRemaindingTime() {
  //현재의 시간을 500이라고 생각 시간이 지날수록 이값은 증가하겠지?
  const today = new Date().getTime();
  //미래 시간(1000) - 현재시간(500) = 500 대충 가정한다면 
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //console.log(`${oneDay}miliseconds는 1일 <br> ${oneHour} miliseconds는 1시간 `);
  // calculate all values
  //남은 값과 / 하루가 될 수 있는 miliseconds를 나눠준다. 
  let days = t / oneDay;
  //소수점이하 버리고 
  days = Math.floor(days);
  // 공식으로 남는 시간들을 아래에 값들에 넣어준다. 
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  // index는 해당요소의 인덱스를 나타냄 만약 첫번째 꺼면 0이겠지~~? 
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  //t가 그날이니까 만약 내가 gettime함수를 과거의 날짜를 불러온다면, -가 되겠지?
  //즉 지정한 날짜가 현재날짜를 비교했을때 지나있으면 
  if (t < 0) {
    //clearInterval: setInterval에 의해 생성된 반복 실행을 중단합니다.
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
//변수를 지정해주는 이유는 나중에 시간이 지나면 setInterval 메소드를 끝내주기 위해서
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
//1초동안 실행이 안되니까 미리 실행해주기 위해서 설정
getRemaindingTime();
