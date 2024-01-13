const http = require('http')

const PORT = 8900

const server = http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)

  switch (req.url) {
    case '/':
      res.write(`Welcome! I'm Douglas, and I reside here.`)
      break
    case '/about':
      res.write(
        `
        This is a simple server hosted on PORT ${PORT}.
        You have an unread message.
        [Opens message...]
        This is a message from the IMF.
        Hunt, your mission, should you choose to accept it, involves cooking Beans, Chef style.
              
        This message will self destruct in 5 seconds if left idle!
        `
      ) // I tried setting the server timeout to 5 seconds, but it doesn't seem to work. The server still responds after 5 seconds.
      //   server.timeout = 5000
      break
    // case '/hello':
    //   const userName = prompt(`What should I call you?`)
    //   alert(`Nice to meet you ${userName}! I am 🐶👓.`)
    //   break
    default:
      res.write(`Oops!!! Seems the resource you've requested does not exist.`)
      break
  }

  res.end()
})

server.listen(PORT, () => {
  console.log(`Sever connected! Listening on PORT ${PORT}.`)
})
