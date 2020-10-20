const app = require('express')()
const jsonParser = require('body-parser').json()

const { signup, login } = require('./handlers/users')

app.use(jsonParser)

let port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Testing')
})

// Users routes
app.post('/signup', signup)
app.post('/login', login)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
