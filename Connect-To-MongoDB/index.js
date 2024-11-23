import dotenv from 'dotenv';
dotenv.config();
import express from "express"
// const express = require('express');
const app = express()

app.use(express.json());