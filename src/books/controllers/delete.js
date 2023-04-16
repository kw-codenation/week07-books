const Book = require('../model')

/*
    Delete from the book database according to 
    the paramter id

    id = 'all' - delete the entire database
    id = <id>  - delete a single book with a particular <id>
*/
const deleteBook = async (req, res) =>
{
    const id = req.params.id

    try 
    {
        if (id === 'all')
        {
            const count = await Book.count()
            await Book.deleteMany({})
            const message = 'All documents (' + count + ') have been deleted'
            console.log(message)
            res.status(203).json({message:message})
        }
        else
        {
            await Book.deleteOne({id: parseInt(id)})
            const message = 'Book Id: ' + id + ' has been successfully deleted'
            console.log(message)
            res.status(203).json({message:message})
        }
    } 
    catch (error) 
    {
        if (id === 'all')
        {
            console.log('Books error (/books/delete/all): ' + error)
            res.status(203).json({message:'Delete of all books has failed: ' + error})
        }
        else
        {
            console.log('Books error (/books/delete/' + id + '): ' + error)
            res.status(203).json({message:'Delete of Book Id: ' + id + ' has failed: ' + error})
        }
    }
}

module.exports = 
{
    deleteBook
}