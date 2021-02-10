const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares/middlewares');
// const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});
// app.use('/api/logs', logs);
const postapi = require("./routes/postRoute");
const getapi = require("./routes/getRoutes");

app.use("/api/post",postapi);
app.use("/api/get",getapi);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});