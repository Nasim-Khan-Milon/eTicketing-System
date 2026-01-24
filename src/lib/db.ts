import { connect } from "mongoose";

const mongodbUrl = process.env.MONGODB_URL!;
if (!mongodbUrl) {
    throw new Error("MONGODB_URL must be defined");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectToDb = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = connect(mongodbUrl).then((c) => {
            return c.connection;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
}

export default connectToDb;