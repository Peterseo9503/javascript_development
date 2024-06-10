//컨테이너, 페이지객체(배열), 액티브인덱스 0
const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    console.log(pageIndex)
    return `<button class="page-btn ${
      activeIndex === pageIndex ? 'active-btn' : 'null '
    }" data-index="${pageIndex}">
${pageIndex + 1}
</button>`
  })
  btns.push(`<button class="next-btn">next</button>`)
  btns.unshift(`<button class="prev-btn">prev</button>`)
  container.innerHTML = btns.join('')
}

export default displayButtons
