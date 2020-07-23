// const express = require('express');

import express from 'express';
 
import { users } from './users/users';

const app = express();

app.get('/', (req, res) => res.send('Server works'));

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.write(JSON.stringify(users))
    res.end();
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// To start server:
// 1. npm install
// 2. node --experimental-modules index.mjs