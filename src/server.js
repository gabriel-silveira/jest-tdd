const app = require('./app')

const port = 3000
app.listen(process.env.PORT || port, () => {
  console.log('Running on ${port}')
})