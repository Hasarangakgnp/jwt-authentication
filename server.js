import express from 'express';
import postsRouter from './routers/postsRouter.js';
import usersRouter from './routers/usersRouter.js'

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use((err, req, res, next) => {
    return res.status(500).json(err.message);
})