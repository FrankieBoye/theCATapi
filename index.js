let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {

  let catDiv = document.getElementById('cat-pic')

  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => res.json())
  .then(cats => {
    console.log(cats)
    cats.forEach(cat => {
      catDiv.innerHTML = `<h3>Have a catastic day! 😸</h3>
      <img src="${cat.url}" alt="Sorry, no image" />`
    })
  })
})
