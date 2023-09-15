import express from 'express';
import authenticateTokenJwt from '../middleware/authMiddleware.js';
import DrawController from '../controllers/DrawController.js';
import upload from '../config/multer.js';

const drawRoute = express.Router();
drawRoute.use(authenticateTokenJwt);

drawRoute.get('/draw/all', DrawController.listAllDraws)
        .get('/draw/allClassified', DrawController.listClassifiedDraws)
        .get('/draw/:id', DrawController.getDrawById)
        .get('/draw/student/:id', DrawController.getDrawByStudent)
        .get('/draw/allDesclassified', DrawController.listDesclassifiedDraws)
        .post('/draw/category', DrawController.getDrawByCategory)
        .post('/draw/score/:id', DrawController.insertScoreDraw)
        .post('/draw/desclassified/:id', DrawController.desclassifiedDraw)
        
        //.post("/src", PictureController.create)
        .post('/draw', upload.single("file"),  DrawController.insertDraw);
        

export default drawRoute;