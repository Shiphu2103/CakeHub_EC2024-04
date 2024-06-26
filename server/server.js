import express, { Router } from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import userRoutes from './src/routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/',userRoutes)

mongoose.connect(process.env.DATABASE_URI_LOCAL)
.then(async () => { // Sử dụng async để có thể sử dụng await bên trong
    console.log('Connected to MongoDB');
    console.log('Current Database:', mongoose.connection.db.databaseName);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
});
