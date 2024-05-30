// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


//너비가 800이하일때 토글버튼이 생성되어있다. 
//그 토글버튼을 클릭하면
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

 
  // getBoundingClientRect()는 DomRect 객체를 반환한다  */
  // Domrect값에는 x,y width height 값이 있다.
  // li 의 link height 값을 가지고 온다.
  const linksHeight = links.getBoundingClientRect().height;
  //link container의 height값을 가지고 온다. 
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //container의 height가 0이면
  if (containerHeight === 0) {
    //링크의 hegiht값을 넣어준다. 
    linksContainer.style.height = `${linksHeight}px`;
  } else {//아니면 그대로 두고 
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************
//네이게이션을 고정시키기 및 toplink버튼 활성화를 위한 버튼
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

//브라우저객체에서 scroll 이벤트가 발생했을때
window.addEventListener("scroll", function () {
  // pageYOffest은 현재 창의 수직 스크롤 위치를 반환하는 속성입니다. 
  // 페이지가 맨 위에 있을 때 이 값은 0이고, 사용자가 페이지를 아래로 스크롤하면 이 값이 증가합니다.
  const scrollHeight = window.pageYOffset;
  //nav의 height크기를 받아온다
  const navHeight = navbar.getBoundingClientRect().height;
  //스크롤의 height즉 위치 가 nav크기보다 더 크면 
  if (scrollHeight > navHeight) {
    //navbar에 fixed-nav클레스를 추가해준다.
    navbar.classList.add("fixed-nav");
  } else { //아니면 제거 
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    //스크롤의 위치가 500이상이면 toplink에 show-link클레스를 추가해준다.
    topLink.classList.add("show-link");
  } else {//아니면 제거
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
// a 태그중 클레스가  .scroll-link인 값들을 전부가지고온다
const scrollLinks = document.querySelectorAll(".scroll-link");
// 가져온값들을 forEach를 사용해서 반복한다
scrollLinks.forEach((link) => {
  //링크를 클릭했을때,
  link.addEventListener("click", (e) => {
    // prevent default
    //e.preventDefault();를 사용하면 링크를 클릭해도 페이지가 이동하지 않도록 할 수 있습니다.
    e.preventDefault();
    // navigate to specific spot
    //링크의 속성중 첫글자를 slice 해서 id로 받아온다.
    const id = e.currentTarget.getAttribute("href").slice(1);

    
    //받아온 id값의 요소를 받아온다 like home, body ,etc
    const element = document.getElementById(id);
    //네비게이션 바의 height값을 받아온다.
    const navHeight = navbar.getBoundingClientRect().height;
    //링크컨테이너의 hegiht값도 받아온다.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //nav가 픽스 되어있다면,
    const fixedNav = navbar.classList.contains("fixed-nav");
    //엘리먼트 즉 body나 home 초기값에서 nav의 높이갚을 뺀다. 
    let position = element.offsetTop - navHeight;
//만약 고정되어있지 않다면
    if (!fixedNav) { 
      //다시한번 더 nav컨테이너의 높이값을 뺴준다
      //왜냐면, 
      position = position - navHeight;
    }
//fix된 nav바의 값은 81.98 
//아 이게 토글바가 눌려진 상태면 navheight가 커짐. 
//토글바가 눌린 상태라면
//position에서 containerHeight값을 더해줌. 
    if (navHeight > 82) {
      position = position + containerHeight;
    }
//스크롤한다 그 정해진 포지션으로 
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    //토글을 다시 초기화 작게 만들어준다.
     linksContainer.style.height = 0;
  });
});
// calculate heights
