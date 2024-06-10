const container = document.querySelector('.container')

const display = (followers) => {
  const newFollowers = followers
    .map(
      //콜백함수, person의 뜻은 현재 인자를 나타내는 인자이름
      (person) => {
      const { avatar_url, login, html_url } = person
      return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `
    })
    .join('')
    //컨테이너에 값들을 넣어준다.
  container.innerHTML = newFollowers
}

export default display
