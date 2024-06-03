function getElement(selection) {
  const element = document.querySelector(selection);
  //요소를 제대로 받아왔는지 확인
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//Class Counter 생성. 
class Counter {
  //생성자는 처음 만들떄 필요한 정보를 가지고 옴. 요소와 value값. 
  constructor(element, value) {
    //this가 자신, 즉 클레스의 인스턴트를 말한다.
    //Class안에서 변수를 선언할떄는 thsi.변수명이라고 하면됨.
    //지역변수, 전역변수를 사용 할 필요가 없는 하나의 객체기 때문에.
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind this to all function
    // 다른 전역변수에 있는 함수와 햇갈리지 말라고? 
    // bind 메서드로 클레스안에 있는 메소드를 사용하겠다고 선언? 
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    //이벤트리스너 설정 
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }

  increase() {
    //클레스안에 있는 value값 ++
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
//클레스를 사용해서 인스턴트들을 만들어준다. 
//인자 값들로 element, 숫자를 넣는다.
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
