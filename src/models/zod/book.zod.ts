import { z } from "zod";

const Book = z.object({
    name: z.string()
        .min(3, { message: `Must be 3 or more characters long` })
        .max(50, { message: `Must be 50 or less characters long` }),

    author: z.string()
        .min(3, { message: `Must be 3 or more characters long` })
        .max(50, { message: `Must be 50 or less characters long` }),

    summary: z.string()
        .min(3, { message: `Must be 3 or more characters long` })
});

export default Book;