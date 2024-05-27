let count = 0;

const value = document.querySelector("#value");
// document 요소에 속한 모든 버튼 객체들을 가지고온다. .btn은 앞자리가 btn인거 라는뜻인가?
//  querySelectorAll()  안에 .btn를 써준 이유는 클레스이름이 btn이 포함된 모든 객체를 btns에 넣으려고
const btns = document.querySelectorAll(".btn");

//여기서 forEach는 객체의 모든것들을 다 불러올때까지 반복한다는 뜻이고, btn은 각 객체들을 말한다.
btns.forEach(function(btn){
    //e는 클릭 이벤트 객체를 나타냅니다.
    btn.addEventListener("click", function(e){
        //e.currentTarget: 이벤트 리스너가 부착된 요소를 나타냅니다.
    const styles = e.currentTarget.classList;
    console.log(styles);
    
    
    //styles 요소에 decrease가 포함(contains)되어 있으면

    if(styles.contains("decrease"))
        {
            count--;
        }else if(styles.contains("increase")){
            count++;
        } else{
            count=0;
        }
    //카운트가 0보다 크면 그린 
    if(count >0){
        value.style.color = "green";
    }
    if(count < 0){
        value.style.color = "red";
    }
    if(count==0){
        value.style.color="#222";
    }
    //span에 있는 value값을 바꿔준다. 
    value.textContent=count;
    }
)
})