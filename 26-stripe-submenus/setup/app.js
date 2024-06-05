//데이터
import sublinks from './data.js';

//버튼들 요소 가져오기 
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
//사이드바 랩펄 div가져오기
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
//사이드바 랩퍼 안에 div
const sidebar = document.querySelector('.sidebar-links');
//링크버튼~!
const linkBtns = [...document.querySelectorAll('.link-btn')];
//서브메뉴  aside 객체 가지고온다.
const submenu = document.querySelector('.submenu');
//전체화면? section
const hero = document.querySelector('.hero');
//네비게이션 바 nav가져오기 
const nav = document.querySelector('.nav');

// hide/show sideabar
//클레스추가 기능으로 메뉴화면 보이게
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
//클레스추가 기능으로 메뉴화면 안보이게
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
//데이터값 파싱해서 sidebar요소에 문자열을 대입한다.
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join('')}
</div>
</article>`;
  })
  .join('');

  //링크버튼들을 가지고온다. 
linkBtns.forEach((btn) => {
  //마우스를 올릴때 각 버튼에 이벤트들 추가 
  btn.addEventListener('mouseover', function (e) {
    //타겟의 텍스트값을 가지고 오고,
    const text = e.currentTarget.textContent;
    //tempBtn에 타겟의 좌표값을 넣는다. 
    const tempBtn = e.currentTarget.getBoundingClientRect();
    //버튼의 좌표 중간값을 정하고 
    const center = (tempBtn.left + tempBtn.right) / 2;
    //bottom은 해당요소의 하단이 뷰포트의 상단으로부터 64.5픽셀 떨어졌다는 의미인데..
    //여기서 -3을해주면 상단하고 더 붙지않니.. ?
    //ㅇㅇ 더 붙는다 근데 사용자의 의도를 모르니. 그냥 고 
    const bottom = tempBtn.bottom - 3;

    //마우스가 올라간 버튼의 텍스트와 같은 배열의 값을 찾아서 대입?복사한다.
    const tempPage = sublinks.find((link) => link.page === text);
    //만약 있으면
    if (tempPage) {
      //디스트럭쳐링해서 각각의 변수에 값들을 넣어주고 
      const { page, links } = tempPage;
      //서브메뉴를 보여지게 
      submenu.classList.add('show');

      //센터값을 left에 넣어주고
      submenu.style.left = `${center}px`;
      //아 전에 구했던 바텀의 값을 top에 넣어주는구나..
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      //스타일적용을 위한 
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join('')}
      </div>
      </section>
      `;
    }

  });
});

//다른지역에 마우스가 올라갈경우 서브메뉴의 show 클레스를 제거
hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});

//다른지역에 마우스가 올라갈경우 서브메뉴의 show 클레스를 제거
nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
