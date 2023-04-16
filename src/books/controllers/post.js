const Book = require('../model')

const addBook = async (req, res) =>
{
    try 
    {
       const newBook = await Book.create
       (
            {id:req.body.id
            ,title:req.body.title
            ,genre:req.body.genre
            ,author:req.body.author
            }
        )

        const successResponse = 
        {
            message:'Book with id: ' + req.body.id + ' (' + req.body.title + ') successfully',
            newBook: newBook
        }

        res.status(202).json(successResponse)
    } 
    catch (error) 
    {
        console.log('Books Error: books/add - ' + error)
    }
}

const addBooks = async (req, res) =>
{
    try 
    {
        Book.insertMany(
            [{
              "id":1,
              "title":"Evil Under The Sun",
              "author":"Agatha Christie",
              "genre":"murder mystery"
            }
            ,{
              "id":2,
              "title":"Great Expectrations",
              "author":"Charles Dickens",
              "genre":"drama"
            }
            ,{
              "id":3,
              "title":"The Searchers",
              "author":"Alan Le May",
              "genre":"western"
            }
            ,{
              "id":4,
              "title":"To Kill A Mockingbird",
              "author":"Harper Lee",
              "genre":"drama"
            }
            ,{
              "id":5,
              "title":"Les Misérables",
              "author":"Victor Hugo",
              "genre":"drama"
            }
            ,{
              "id":6,
              "title":"Wuthering Heights",
              "author":"Emily Brontë",
              "genre":"drama"
            }
            ,{
              "id":7,
              "title":"Around The World In Eighty Days",
              "author":"Jules Verne",
              "genre":"adventure"
            }
            ,{
              "id":8,
              "title":"The Nine Tailors",
              "author":"Dorothy L. Sayers ",
              "genre":"murder mystery"
            }
            ,{
              "id":9,
              "title":"The Three Musketeers",
              "author":"Alexandre Dumas",
              "genre":"adventure"
            }
            ,{
              "id":10,
              "title":"Death On The Nile",
              "author":"Hucule Poirot",
              "genre":"murder mystery"
            }
            ,{
                "id":11,
                "title":"Oliver Twist",
                "author":"Charles Dickens",
                "genre":"drama"
            }
            ,{
                "id":12,
                "title":"Murder On The Orient Express",
                "author":"Agatha Christie",
                "genre":"murder mystery"
            }
            ,{
                "id":13,
                "title":"War of the Worlds",
                "author":"HG Wells",
                "genre":"science fiction"
            }
            ,{
                "id":14,
                "title":"Western Union",
                "author":"Zane Grey",
                "genre":"western"
            }
            ,{
                "id":15,
                "title":"The Time Machine",
                "author":"HG Wells",
                "genre":"science fiction"
            }
            ,{
                "id":16,
                "title":"Tale of Two Cities",
                "author":"Charles Dickens",
                "genre":"drama"
            }
            ])

            const count = await Book.count()
            const message = count + ' books have been added to the database'
            console.log(message)                
            res.status(201).json({message:message})
    } 
    catch (error) 
    {
        const message = 'Books error (/books/add/many) - ' + error
        console.log(message)
        res.status(201).json({message:message})            
    }
}

module.exports = 
{
    addBook,
    addBooks
}