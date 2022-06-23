const User = require('../modeles/User.model');
const Book = require('../modeles/Book.model');
const { booksController } = require('./books.controller');
module.exports.usersController = {


  postUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
        isBlocked: req.body.isBlocked,
        hasBook: req.body.hasBook
      })
      res.json('added user')

    } catch (error) {
      res.json(error)
    }
  },

  loanBook: async (req, res) => {
    const { id, bookid } = req.params;
    try {
      const user = await User.findById(req.params.id)
      const book = await Book.findById(req.body.book)

      if (user.isBlocked) {
        return res.json('вы заблокированы')
      }

      if (user.hasBook.length >= 3) {
        return res.json('нельзя арендовать больше 3-х книг одновременно')
      }
      if (book.loan === null) {
        return res.json('эта книга уже арендована другим пользователем')
      }
      await user.updateOne({
        $push: {
          hasBook:
            req.body.book
        },
      })

      await book.updateOne({
        loan: id
      })
      res.json(`Книга арендована читателем ${id}`)
      res.json('asdasd')

    } catch (error) {
      res.json(error)
    }
  },

  returnBookAndBlocked: async(req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
          isBlocked: true,
          hasBook: []
        })
        await Book.findByIdAndUpdate(req.body.book, {
          loan: []
        })
        res.json(`Книга  свободна `)  
      }  catch (e) {
      res.json(e);
    }
  },

  returnBook: async (req, res) => {
    // const { id, bookid } = req.body;
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.id);
      await user.updateOne({
        $pull: {
          hasBook: req.req.params.id
        }
      });
      await book.updateOne({
        loan: null
      });
      res.json(`Книга возращена читеталем`)
    } catch (e) {
      res.json(e);
    }
  }


}