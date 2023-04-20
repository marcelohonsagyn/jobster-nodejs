require('dotenv').config()
const mockData = require('./mock-data.json')
const Job = require('./models/Job')
const connectDB = require('./db/connect')

const start = async () => {
    console.log('Starting Process');
    try {
        console.log('Connecting DB');
        await connectDB(process.env.MONGO_URI)
        console.log('Creating Jobs');
        await Job.create(mockData)
        console.log('Data Loaded!');
        console.log('Finishing Process');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()