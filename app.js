require('dotenv').config();

const express = require('express');
const cors = require('cors');

const Server = require('./models/server');

const server = new Server();

server.listen();