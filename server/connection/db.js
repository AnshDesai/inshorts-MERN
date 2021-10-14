import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://ansh:randomforest@inshorts-shard-00-00.3iyba.mongodb.net:27017,inshorts-shard-00-01.3iyba.mongodb.net:27017,inshorts-shard-00-02.3iyba.mongodb.net:27017/inshorts?ssl=true&replicaSet=atlas-sjaf2y-shard-0&authSource=admin&retryWrites=true&w=majority`;
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;