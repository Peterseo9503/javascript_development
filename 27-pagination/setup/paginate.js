//API결과값을 넣는다. 
const paginate = (followers) => {
  //각 페이지의 값은 10
  const itemsPerPage = 10
  //소수점이하의 숫자를 올림하여 가장 가까운 정수로 변환
  //follower들의 숫자 나누기 페이지. 
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)
  //Array라는 내장함수의 from매소드를 사용한다.
  // 첫 인자값은 길이 : 
  // 두번째 인자 값은 : _ 나눠줄 구분자?
  // 3번째 인자 값은 인덱스. 
  //**GPT 설명
  // Array.from 메소드는 유사배열 객체나 반복가능한 객체를 새로운 배열로 변환하는데 사용.
  // 첫번째 인자는 배열로 변환할 유사 배열 객체나 반복가능한 객체.
  // 두번째 인자는 배열의 각 요소를 처리할 맵핑 변수  // 아무것도 안쓸때 _언더바 넣어준대.
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      // console.log(newFollowers);
      //인덱스에 , * 처음에 지정해준 화면에 표현될 페이지 개수
      //10 , 20, 30 이런식으로 숫자가 나올듯! 
    const start = index * itemsPerPage
    //각각 나눠서 newFollowers변수에 넣어준다? 
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate
