const items = [...document.querySelectorAll('.number')];


//updateCount 함수 선언
const updateCount = (el) => {
  //value값은 정수이기 때문에 parseInt로 정수형으로 바꿔줌.
  const value = parseInt(el.dataset.value);
  //value의 값을 1천으로 나누고 나온후 올림한 정수 값이 들어가게 됨.
  const increment = Math.ceil(value / 1000);
  
  console.log(increment);

  // const increment = 1;
  let initialValue = 0;
  //일정 간격마다 증가시킬 값을 계산
  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      //break문이네 
      //만약 계속 커지는 값이 기존 증가해야되는 값보다 커지면
      //el요소의 textContent를에 기존값을 대입하고 
      el.textContent = `${value}+`;
      //clearInterval로 지워준다. 
      clearInterval(increaseCount);
      return;
    }
    //실시간으로 값이 올라가는걸 보여줌.
    el.textContent = `${initialValue}+`;
  }, 1);
   console.log(increaseCount);
};

//반복해라 items 배열의 개수 만큼.
items.forEach((item) => {
  updateCount(item);
});
