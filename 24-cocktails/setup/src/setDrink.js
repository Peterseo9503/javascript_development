const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    //타깃이되는 엘리먼트의 데이터아이디값을 id에 넣고 
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify JSON.parse
    
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
