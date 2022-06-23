const books = require('../modeles/Book.model')
module.exports.booksController = {

  postBook: async (req, res) => {
    try {
      await books.create({
        name: req.body.name,
        genre: req.body.genre})
        res.json('admin added book ')

    } catch (error) {
      res.json(error)
    }
  },

  deleteBook: async(req, res) => {
    try {
      books.findByIdAndRemove(req.params.id)
      res.json("deleted book")
    } catch (error) {
      res.json(error)
    }
  },

  patchBook: async(req, res) => {
    try {   
     await books.findByIdAndUpdate(req.params.id, {genre: req.body.genre})
        res.json('update book')
    } catch (error) {
      res.json(error)
     } 
 },

 
 addReview: async (req, res) => {
  try {
      await books.findByIdAndUpdate(req.params.id, {
          $push: {
              review: req.body.review
          },
      })
      res.json('added review')
  } catch (e) {
      res.json(e)
  }
},

getAllBook: (req, res) => {
  books.find()
  .then((data) => {
    res.json(data)
  })
},

getBookByGenre: (req, res) => {
  books.find({genre: req.body.genre})
.then((data) => {
  res.json(data)
})
},

getBookById: (req, res) => {
  books.findById(req.params.id)
  .then((data) =>{
    res.json(data)
  })
}

}
