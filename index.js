const app = require('express')()
const jsonParser = require('body-parser').json()

const { signup, login } = require('./handlers/users')
const { postBlog } = require('./handlers/blogs')
const FBAuth = require('./util/fbAuth')

app.use(jsonParser)

let port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('OK')
})

// Users routes
app.post('/signup', signup)
app.post('/login', login)

// Blogs routes
app.post('/blog', FBAuth, postBlog)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
