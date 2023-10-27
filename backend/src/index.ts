import express from 'express';
import  router  from './routes/courseRoutes';
import cors from 'cors';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3001', 'http://example.com'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 204,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));


app.use('/api', router);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


