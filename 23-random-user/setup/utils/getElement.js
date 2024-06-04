//객체를 편하게 받아올 수 있는 함수 만들어놓기
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

//다른곳에서 받을 수 있게 해줌 
export default getElement;
