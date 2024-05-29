const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// 요소들 가지고온다
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// 페이지 랜더링이 다 끝난후에 실행단다.
window.addEventListener("DOMContentLoaded", function() {
  diplayMenuItems(menu);
  displayMenuButtons();
});
//배열값을 받아서 <article 요소에 넣어서 sectionCenter 요소에 innerHTML을 사용해서 
// HTML값들을 넣어준다. 
function diplayMenuItems(menuItems){
  //displayMenu 변수 값에 매개변수의 map을 사용해서 각 배열의 현재 값들을 item매개변수로 넣어서 return해준다. 
  let displayMenu = menuItems.map(function(item){
    // 배열값에 9개가 있으니까 9번 실행됨
    // console.log("몇번이나 실행되냐?");
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  //" " 로 감싸기 위해서 join을사용해서 "" 값을 넣어준다. 
  displayMenu = displayMenu.join("");

  //=들어가면 이벤트 핸들러임 그리고  "" 문자열식으로 들어가야 하기떄문에, 위에 조인써서 "넣어줌"
  sectionCenter.innerHTML = displayMenu;
}
//버튼 요소 생성 함수 
function displayMenuButtons(){
  //categories에 menu.reduce return값을 넣는다. 
  //reduce도 배열값만큼 반복하는가 ? YES 9번반복 
  // console.log("몇번이나 실행되냐?");
  const categories = menu.reduce(
    function(values,item){
      //해당요소의 category 값이 values라는 임시 변수에 없으면 push로 넣어준다. 
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      
      return values;
      //return 밑에 무슨 작업을하면 아무것도 실행안됨!!
       console.log("몇번이나 실행되냐?");
    },
    //그럼 유니크한 category들의 값과 + all을 넣어준다. 
    ["all"]
  );

  //버튼 HTML 코드 생성한다. 유니크한 카테고리 수만큼.
  const categoryBtns = categories.map(function(category) {
    return `<button type="button" class="filter-btn" data-id=${category}>
    ${category}
  </button>`;
  })
  .join("");
  //btnContainer에 값을 넣어준다. 
  btnContainer.innerHTML = categoryBtns;
  //querySelectorAll로 클레스이름이 .filter-btn인놈들을 받아온다. 
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  //받아온 요소들에 이벤트핸들러를 넣어주는데
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      //e.현재타겟의 dataset id를 category에 넣어준다.
      const category = e.currentTarget.dataset.id;

      //menucategory에 filter내장함수를 사용해서 조건에 맞는 배열값을 준다.
      const menuCategory = menu.filter(function(menuItem)
    {//만약 메뉴아이템의 카테고리값이 현재카테고리값과 같다면 
      //해당 menuItem을 리턴 해준다 즉 같은 카테고리 값들이 쌓인다. 
      if(menuItem.category === category){
        return menuItem;
      }
    });
    //만약 카테고리의 값이 all이라면 기존에 있는 값을을 menu배열의 값으로 대체한다.
    if(category === "all"){
      //모든 값들을 다시 덮친다? 
      diplayMenuItems(menu);
    }else{//아니라면 기존값 대신  menucategory값들을  대체한다.
      diplayMenuItems(menuCategory);
    }

    });
  }
  );


}