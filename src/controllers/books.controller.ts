import { Request, Response } from "express";

import { BookModel } from "@models/book.model";
import { Response as ResponseUtil } from "@utils/response.utils";
import Book from "@models/joi/book.joi";



export class BooksController {

    static async getBooks(req: Request<{}, {}, {}, {page: number, limit: number}>, res: Response): Promise<void> {
        const { page = 1, limit = 10 } = req.query;

        const books = await BookModel.find({})
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
            
        return ResponseUtil.success(res, books);
    }

    static async getBook(req: Request<{ id: string }>, res: Response): Promise<void> {
        const { id } = req.params;
        const book = await BookModel.findById(id);

        /* validating if book exits or not */
        if (!book) return ResponseUtil.error(res, `Book not found!`, 404);

        return ResponseUtil.success(res, book);
    }

    static async createBook(req: Request<{}, {}, { name: string, author: string, summary: string }>, res: Response): Promise<void> {
        
        await Book().validateAsync(req.body);

        const { name, author, summary } = req.body;
        const book = await BookModel.create({ name, author, summary });
        return ResponseUtil.success(res, book);
    }

    static async updateBook(req: Request<{ id: string }, {}, { name: string, author: string, summary: string }>, res: Response): Promise<void> {
        const { id } = req.params;
        const projection = { name: 1, author: 1, summary: 1 };

        await Book(true).validateAsync(req.body);
        
        const obook = (await BookModel.findById(id, {...projection}))?.toObject(); 

        if (!obook) {
            return ResponseUtil.error(res, `Book not found!`, 404);
        }

        const book = await BookModel.findOneAndUpdate({ _id: id }, { ...obook, ...req.body }, { new: true });
        return ResponseUtil.success(res, book);
    }

    static async deleteBook(req: Request<{ id: string }>, res: Response): Promise<void> {
        const { id } = req.params;
        await BookModel.deleteOne({ _id: id });
        return ResponseUtil.success(res, null);
    }

}