const app = require('express')()
const jsonParser = require('body-parser').json()
const cors = require('cors')()

const FBAuth = require('./util/fbAuth')
const {
  signup,
  login,
  getUserDetails,
  getAuthenticatedUser,
  uploadImage,
  addUserDetails,
} = require('./handlers/users')
const {
  addBlog,
  getAllBlogs,
  getBlog,
  deleteBlog,
  likeBlog,
  unlikeBlog,
  commentOnBlog,
} = require('./handlers/blogs')

app.use(cors, jsonParser)
// app.use(jsonParser)

let port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('OK')
})

// Users routes
app.post('/signup', signup)
app.post('/login', login)
// app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user/me', FBAuth, getAuthenticatedUser)
app.get('/user/:handle', getUserDetails)
// app.post('/notifications', FBAuth, markNotificationsRead)

// Blogs routes
app.get('/blogs', getAllBlogs)
app.post('/blog', FBAuth, addBlog)
app.get('/blog/:blogId', getBlog)
app.get('/blog/:blogId/like', FBAuth, likeBlog)
app.get('/blog/:blogId/unlike', FBAuth, unlikeBlog)
app.post('/blog/:blogId/comment', FBAuth, commentOnBlog)
app.delete('/blog/:blogId', FBAuth, deleteBlog)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
