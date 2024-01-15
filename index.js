const http = require('http')

const PORT = 8900

const server = http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)

  switch (req.url) {
    case '/':
      res.write(`My name is Douglas Idumwonyi.`)
      break
    default:
      res.write(`Oops!!! Seems the resource you've requested does not exist.`)
      break
  }

  res.end()
})

server.listen(PORT, () => {
  console.log(`Sever connected! Listening on PORT ${PORT}.`)
})
