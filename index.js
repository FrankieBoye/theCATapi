let catButton = document.getElementById('give-cat')
let quotesDiv = document.getElementById('quotes')
let catDiv = document.getElementById('cat-pic')

catButton.addEventListener("click", evt => {

  fetch('https://meowfacts.herokuapp.com/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    quotesDiv.innerHTML = `<P> ${data.data} </p>`
  })

  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => res.json())
  .then(cats => {
    console.log(cats)
    cats.forEach(cat => {
      catDiv.innerHTML = `
      <img src="${cat.url}" alt="Sorry, no image" />`
    })
  })
})
