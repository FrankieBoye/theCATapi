let catButton = document.getElementById('give-cat')
let quotesDiv = document.getElementById('quotes')
let catDiv = document.getElementById('cat-pic')

catButton.addEventListener("click", evt => {

  fetch('https://meowfacts.herokuapp.com/')
  .then(res => Promise.all([res.status,res.json()]))
  .then(([status, data]) => {
    console.log(data)
    console.log(status)
    quotesDiv.innerHTML = `<P> ${data.data} </p>`
  })

  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => Promise.all([res.status,res.json()]))
  .then(([status, cats]) => {
    console.log(cats)
    console.log(status)
    cats.forEach(cat => {
      catDiv.innerHTML = `
      <img src="${cat.url}" alt="Sorry, no image" />`
    })
  })
})
