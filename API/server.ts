import express from 'express';

const app = express();

const PORT = 3001;

app.listen(3001, () => console.log(`Server running on port: ${PORT}`));