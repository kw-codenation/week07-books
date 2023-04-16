const { Router } = require('express')
const bookRouter = Router()
const Book = require('./model')

const { getBooks } = require('./controllers/get')
bookRouter.get('/books/get/:get', getBooks)

const { searchBooks } = require('./controllers/get')
bookRouter.get('/books/search/:search', searchBooks)

const { addBook } = require('./controllers/post')
bookRouter.post('/books/add', addBook)

const { addBooks } = require('./controllers/post')
bookRouter.post('/books/add/many', addBooks)

const { updateBook } = require('./controllers/put')
bookRouter.put('/books/update', updateBook)

const { deleteBook } = require('./controllers/delete')
bookRouter.delete('/books/delete/:id', deleteBook)

module.exports = bookRouter