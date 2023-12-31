import app from './src/app.js'
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

export default server;