import joi from "joi";

const Book = (optional: Boolean = false) => {
        const name = joi.string()
                        .min(3)
                        .max(30)
        optional ? name.optional() : name.required();

        const author = joi.string()
                        .min(3)
                        .max(30)
        optional ? author.optional() : author.required();

        const summary = joi.string()
                        .min(3)
        optional ? summary.optional() : summary.required();

        return joi.object({
            name,
            author,
            summary
        });
}

export default Book;