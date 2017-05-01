var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var heros = {}

function createHero (hero) {
  var id = Object.keys(heros).length
  hero.createdAt = new Date()
  heros[id] = hero
}
createHero({
  title: 'Ember',
  link: '/ember',
  image: 'http://3.bp.blogspot.com/-9KBz_QTT3yA/U7JM2Y935gI/AAAAAAAADeE/Aj5zoSi0Fck/s1600/Dota+2+Ember+Spirit.jpg',
  pages: 'pages/ember'
})

createHero({
  title: 'Riki',
  link: '/riki',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJBOe-e2oDoYcK58qiTwMvYkjDpQ5CFo9g-4GMCE25MzV7kXS0pw',
  pages: 'pages/riki'
})

createHero({
  title: 'Weaver',
  link: '/weaver',
  image: 'http://dotamods.ovh/wp-content/images/weaver/master.jpg',
  pages: 'pages/weaver'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    heros: heros
  })
})

Object.keys(heros).forEach(function (id) {
  var hero = heros[id]
  app.get(hero.link, function (request, response) {
    response.render(hero.pages, {
      hero: hero
    })
  })
})

app.listen(port)
