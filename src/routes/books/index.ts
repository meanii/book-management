import { BooksController } from '@controllers/books.controller';
import { error as wrap } from '@utils/error-handler.utils';
import express from 'express';
import { Router } from 'express';

const router: Router = express.Router();

router.get(`/`, wrap(BooksController.getBooks));
router.get(`/:id`, wrap(BooksController.getBook));

router.post(`/`, wrap(BooksController.createBook));

router.put(`/:id`, wrap(BooksController.updateBook));

router.delete(`/:id`, wrap(BooksController.deleteBook));

export default router;