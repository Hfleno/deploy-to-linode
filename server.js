import express from 'express'

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/mail', (req, res) => {
  const mail = req.body
  console.log(mail)
  // Save the data of user that was sent by the client

  // Send a response to client that will show that the request was successfull.
  res.status(200).json({ msg: 'success' })
})

app.get('/', (req, res) => {
  res.send('new server')
})

const port = 3000 // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
