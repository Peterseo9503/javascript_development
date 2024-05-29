// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// 요소값들을 받아온다.
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");


btn.addEventListener("click", function(){
    //만약 btn.classList안에 slide라는 클레스가 포함되어 있지 않다면
    //slide 클레스를 추가하고 left 50%를 준다. 
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        //그리고 비디오를 멈춘다.
        video.pause();
    }else{
        //아니라면 slide클레스를 제거하고, 
        btn.classList.remove("slide");
        //비디오를 실행한다.
        video.play();
    }
});

const preloader= document.querySelector(".preloader");
//브라우저에 랜더링이 모든 파일이 랜더링 되면
window.addEventListener("load",function(){
    //class에 hide-preloader를 추가한다. 그럼 가려지겠찌.
    preloader.classList.add("hide-preloader");
});