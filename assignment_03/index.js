const http = require('http')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  if (req.url === '/books') {
    authenticate(req, res, booksRoute)
  } else if (req.url === '/authors') {
    authenticate(req, res, authorsRoute)
  }
})

const authenticate = (req, res, next) => {
  const username = 'douglas'
  const password = '12345678'

  if (req.headers.username !== username || req.headers.password !== password) {
    res.writeHead(401)
    res.write('Incorrect username or password')
    res.end()
    return
  }

  next(req, res)
}

const booksRoute = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.write('This route returns all the books.')
      res.end()
      break

    case 'POST':
      res.write('This route adds a new book')
      res.end()
      break

    case 'PUT':
      res.write('This route replaces the existing book with a new book.')
      res.end()
      break

    case 'PATCH':
      res.write('This route partially updates the specified book.')
      res.end()
      break

    case 'DELETE':
      res.write('This route deletes a book.')
      res.end()
      break

    default:
      res.writeHead(404)
      res.write('The requested endpoint does not exist')
      res.end()
      break
  }
}

const authorsRoute = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.write('Returns the author of a particular book.')
      res.end()
      break

    case 'POST':
      res.write('Adds a new author.')
      res.end()
      break

    case 'PUT':
      res.write('Updates the details of the author completely.')
      res.end()
      break

    case 'PATCH':
      res.write('Updates certain details of the author.')
      res.end()
      break

    case 'DELETE':
      res.write('Deletes the author.')
      res.end()
      break

    default:
      res.writeHead(404)
      res.write('The requested endpoint does not exist')
      res.end()
      break
  }
}

server.listen(PORT, () => {
  console.log(`Server connected and listening on port ${PORT}`)
})
