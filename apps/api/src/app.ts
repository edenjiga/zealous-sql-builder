import express from 'express';
import technologyRoutes from './routes/technologyRoutes';
import queryRoutes from './routes/queryRoutes';

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/technologies', technologyRoutes);
app.use('/query', queryRoutes);

// app.use('/users', userRoutes);

export default app;
