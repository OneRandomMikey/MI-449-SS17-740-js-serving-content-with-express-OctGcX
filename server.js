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
  image: 'http://3.bp.blogspot.com/-9KBz_QTT3yA/U7JM2Y935gI/AAAAAAAADeE/Aj5zoSi0Fck/s1600/Dota+2+Ember+Spirit.jpg'
})

createHero({
  title: 'Riki',
  link: '/riki',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJBOe-e2oDoYcK58qiTwMvYkjDpQ5CFo9g-4GMCE25MzV7kXS0pw'
})

createHero({
  title: 'Weaver',
  link: '/weaver',
  image: 'http://dotamods.ovh/wp-content/images/weaver/master.jpg'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    heros: heros
  })
})

app.get('/ember', function (request, response) {
  response.render('pages/ember', {
    heros: heros
  })
})

app.get('/riki', function (request, response) {
  response.render('pages/riki', {
    heros: heros
  })
})

app.get('/weaver', function (request, response) {
  response.render('pages/weaver', {
    heros: heros
  })
})

app.listen(port)
