const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});
//비동기 방식으로 함수를 만들겠다. 
const fetchDadJoke = async () => {
  //초기값 Loading 넣고 
  result.textContent = 'Loading...';
  // 왜? try를 써주지? 꼭 써줘야 하는가? 
  try {
    // fetch함수를 사용하여 API에 대한 GET요청을 보낸다. 이떄, 사용자에이전트를 명시하는 헤더도 함께 전송
    // 내가 지금 모르는건, 어떻게 내가 필요한 API사이트에 헤더를 어떻게 보내는가? 임.
    const response = await fetch(url, 
      { headers: 
        {Accept: 'application/json','User-Agent': 'learning app',},
    });
    //서버로부터 응답을 받으면 성공적인지 확인하고 
    if (!response.ok) {
      throw new Error(' error');
    }
    //response.ok 형식으로 변환하여 데이터 추출?
    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();
