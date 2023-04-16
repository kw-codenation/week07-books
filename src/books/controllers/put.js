const Book = require('../model')

const updateBook = async (req, res) =>
{
    const book = req.body

    try
    {
        await Book.updateOne({id:book['id']}, {[book['key']]:book['value']})

        const successResponse = {message:'Book Id: ' + book['id'] + ' has been successfully updated', book:book}
        res.status(202).json(successResponse)
        console.log('update successful')
    } 
    catch (error) 
    {
        console.log('Books error (update of ' + book['key'] + ' of book id: ' + book['id'] + '): /books/update ' + error)  
    }
}


module.exports = 
{
    updateBook,
}