let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {

  let catDiv = document.getElementById('cat-pic')

  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => res.json())
  .then(cats => {
    cats.forEach(cat => {
      catDiv.innerHTML = `
      <img src="${cat.url}" alt="cat" />`
    })
  })
})
