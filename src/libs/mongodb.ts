import mongoose from 'mongoose'

const {MONGODB_URL} = process.env

if (!MONGODB_URL){
    throw new Error("MONGO NAO DEFINIDO")
}

export const connectDB = async ()  => {

    try {
        const {connection}  = await mongoose.connect(MONGODB_URL);
        if(connection.readyState === 1){
            console.log("conexao estavel")
            return Promise.resolve(true)
        }
    }catch (error){
         console.log("Conexao OFF")
         return Promise.reject(false);
    }

}