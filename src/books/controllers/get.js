const Book = require('../model')

/*
    get data from books using an object as input

    /books/get/{} 
        - will get all the documents
    /books/get/{"author":"<author name>"}
        - will get all books with the author '<author name>'
    /books/get/{"genre":"<genre>"}
        - will get all books with the genre '<genre>'
    /books/get/{"title":"<book title>"}
        - will get all books with the title '<title>'
*/
const getBooks = async (req, res) =>
{
    try 
    {
        const books = await Book.find(JSON.parse(req.params.get)).sort("title:1")
        const count = books.length
        const successResponse = 
        {
            message: 'get books successful(' + count + ' documents found)',
            books:books,
            count:count
        }

        res.status(201).json(successResponse)
    } 
    catch (error) 
    {
        console.log('Books Error: books/get: ' + error)    
    }
}

/*
    returns a list of a particular key

    /books/search/author 
        - will return a list of authors
        /books/search/genre 
        - will return a list of genres
*/
const searchBooks = async (req, res) =>
{
    try 
    {

        const search = req.params.search

        const list = await Book.distinct(search)
        
        const successResponse = 
        {
            message: 'Search of authors successful',
            list:list,
            count:list.length
        }

        res.status(201).json(successResponse)
        console.log('Search for ' + search + ' successful (' + list.length + ' entries)')
    } 
    catch (error) 
    {
        console.log('Books Error: books/search/' + search + ' - ' + error)    
    }
}


module.exports = 
{
    getBooks,
    searchBooks
}