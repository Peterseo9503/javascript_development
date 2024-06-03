//요소 가져올때 에러 체크
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  //하나의 엘리먼트, 즉 세션을 넣어주겠지?
  constructor(element) {
    this.container = element;
    //... 전개연산자를 사용해서 클레스이름이 img인 모든얘들을 list 변수에 배열객체로 대입.
    this.list = [...element.querySelectorAll('.img')];
    // target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');
    // self ref
    // let self = this;
    // bind functions
    // 현재 클레스에 생성자에서 메소드를 사용하기 위해 변수에 현재클레스 생성자 밖에있는
    // closemodal에 bind를써서 this에넣어준다.
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    // container event
    //컨테이너 클릭 이벤트 리스너
    this.container.addEventListener(
      'click',
      function (e) {
        //만약 컨테이너에 있는 img를 클릭하면 
        if (e.target.classList.contains('img')) {
          //openModal 메소드를 사용한다. 그떄 인자값으론 target값과 list를 보낸다.
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  //모달오픈 
  openModal(selectedImage, list) {
    //e.target에서 선택된 img를 setMainImage를 사용해서 설정해줌. 
    //클릭된 이미지를 메인 이미지 설정해주고
    this.setMainImage(selectedImage);
    //map메소드를 이용해서 list 배열을 parsing해줌. 
    //modalImages에 list에 있는 img값들을 넣어줌. 
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
      })
      .join('');
    //modal을 보이기 해주고 
    this.modal.classList.add('open');
    // close버튼에 이벤트리스너를 준다.
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.modalImages.addEventListener('click', this.chooseImage);
  }

  setMainImage(selectedImage) {
    //메인이미지를 인자값으로 해주고
    this.modalImg.src = selectedImage.src;
    //텍스트도 인자값의 타이틀로 변경.
    this.imageName.textContent = selectedImage.title;
  }

  closeModal() {
    //open 클레스를 제거해주고 
    this.modal.classList.remove('open');
    //이벤트 리스너들을 모두 제거해준다.
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.modalImages.removeEventListener('click', this.chooseImage);
  }

  nextImage() {
    //선택되어 있는 요소값을 가져오고. 
    const selected = this.modalImages.querySelector('.selected');
    const next =
    //선택된 그담의 요소 형재자매, 그리고 modalImages의 첫번째 요소 자식?
    //오케이, || 는 OR임, 만약 왼쪽 값이 참이라면 왼쪽값 반환
    //nextElementSibiling 선택된 다음 요소값 이 있으면 반환, 
    //없으면 modalImages에 첫번째 자식요소를 반환.
      selected.nextElementSibling || this.modalImages.firstElementChild;
      //선택됐었던 요소에 selected를 제거
    selected.classList.remove('selected');
    // next요소에 selected 클레스 추가
    next.classList.add('selected');
    //메인이미지를 next로 
    this.setMainImage(next);
  }
  prevImage() {

    const selected = this.modalImages.querySelector('.selected');
    const prev =
    //nextImage랑 동일한데, 속성값을 previous를 사용했음.
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }
  //이벤트 매개변수를 가지고왔다. 
  chooseImage(e) {
    //만약 컨테이너안에 있는 modal-img를 클릭했으면
    if (e.target.classList.contains('modal-img')) {
      //생성된 인스턴트의 modalImages의 클레스값이 .selected된 얘를 받아와서
      const selected = this.modalImages.querySelector('.selected');
      //그 얘의 클레스값을 제거
      selected.classList.remove('selected');

      //선택된 타겟을 setMainImage를 사용해서 메인 img에 보이게하고
      this.setMainImage(e.target);
      //class에 selected를 추가
      e.target.classList.add('selected');
    }
  }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
