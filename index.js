const app = require('express')()
const jsonParser = require('body-parser').json()

const { signup, login } = require('./handlers/users')

app.use(jsonParser)

// Users routes
app.post('/signup', signup)
app.post('/login', login)

app.listen(3000, () => {
  console.log('Running on 3000')
})
