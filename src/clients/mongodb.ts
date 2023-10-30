import mongoose from "mongoose";

export class MongoClient {
    
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    async connect(): Promise<void> {
        try {
            await mongoose.connect(this.url);
        } catch (error) {
            throw new Error(`Error connecting to MongoDB: ${error}`);
        }
    }

}