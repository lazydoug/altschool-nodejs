const PORT = 5000

//import the Http module
const http = require('http')

//creates a server
const server = http.createServer((req, res) => {
  
    //route and method handlers
  if (req.url === '/books' && req.method === 'GET') {
    res.write('This route returns all the books.')
  } else if (req.url === '/books' && req.method === 'PUT') {
    res.write(
      'This route updates the books by replacing the existing book(s) with the new book(s).'
    )
  } else if (req.url === '/books' && req.method === 'DELETE') {
    res.write('This route deletes a book.')
  } else if (req.url === '/books/author/' && req.method === 'GET') {
    res.write('Returns the author of a particular book.')
  } else if (req.url === '/books/author/' && req.method === 'POST') {
    res.write('Adds a new author.')
  } else if (req.url === '/books/author/' && req.method === 'PUT') {
    res.write(
      'Updates the details of the author, by replacing the old details with the new ones.'
    )
  } else {
    res.write(`Oops!!! Seems the resource you've requested does not exist.`)
  }

  res.end()
})

//starts a process to listen for requests on the specified PORT
server.listen(PORT, () => {
  console.log(`Sever connected and listening on PORT ${PORT}`)
})
