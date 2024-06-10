import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

//setupUI라는 함수를 선언, 실행아님. 
const setupUI = () => {
  //첫번째 인덱스0인거 넣어준다. 
  displayFollowers(pages[index])
  //컨테이너 요소 넘기고 pages 객체와 인덱스 넘긴다.
  displayButtons(btnContainer, pages, index)
}

//초기 함수 
//2. 비동기 방식으로 
const init = async () => {
  //API를 이용해서 값들을 받아옴 
  const followers = await fetchFollowers()
  //타이틀에는 하드코딩
  title.textContent = 'pagination'
  //pages 매개변수에 10개 단위로 나눠진 결과값들을 넣어줌.
  pages = paginate(followers)
  console.log( paginate(followers));
}

//컨테이너에 클릭이벤트를 줄때 매개변수 e를사용하여 그 타켓에 이벤트를 주면 더 편리함.
btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    //만약 컨테이너에 있는 버튼들중 page-btn클레스를 가진 버튼을 클릭했으면 
    //그 데이터id에 있는 값을 data 인덱스 값을 넣는다. 
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})

// 1. 
//load될때 init실행. 
window.addEventListener('load', init)
