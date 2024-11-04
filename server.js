// import express from 'express'

// const app = express()
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.post('/mail', (req, res) => {
//   const mail = req.body
//   console.log(mail)
//   // Save the data of user that was sent by the client

//   // Send a response to client that will show that the request was successfull.
//   res.status(200).json({ msg: 'success' })
// })

// app.get('/', (req, res) => {
//   res.send('new server')
// })

// const port = 3000 // or any other port number you prefer
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })

// Importing the http module
const http = require('http')
// Creating server
const server = http.createServer((req, res) => {
  // Sending the response
  res.write(
    'This is deployed by github actions and restarted by PM2 via sh-script Hurra'
  )
  res.end()
})

// Server listening to port 3000.
server.listen(3000, () => {
  console.log('Server is Running')
})
