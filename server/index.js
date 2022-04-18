import express from 'express';
// import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';

// dotenv.config()


const PORT=8000;

// const username=process.env.DB_SERNAME;
// const password=process.env.DB_PASSWORD;

const app=express();

Connection();
app.listen(PORT,()=>console.log(`Server is successfully running on PORT ${PORT}`));
DefaultData();