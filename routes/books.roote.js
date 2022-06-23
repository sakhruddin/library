const { Router } = require('express');
const { booksController } = require('../controllers/books.controller');

const router = Router();

router.post('/admin/books', booksController.postBook)
// router.post('/Books', booksController.postBook);
// router.delete('/Books/:id', booksController.deleteBook);
// router.patch('/Books/:id', booksController.patchBook);
router.get('/books/:id', booksController.getBookById);
router.get('/books', booksController.getAllBook);
router.get('/books', booksController.getBookByGenre);
router.delete('/admin/books/:id', booksController.deleteBook);
router.patch('/admin/books/:id', booksController.patchBook);
router.patch('/books/:id', booksController.addReview)

module.exports = router;