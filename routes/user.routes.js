const {Router }= require('express');
const router = Router();

const { userController } = require('../controllers/routes.controller');

router.post('/addAlumnos', userController.addAlumnos);
router.get('/alumnos', userController.userGet );
router.get('/getAlumnos', userController.getAlumnos);
router.put('/updateAlumnos', userController.updateAlumnos);
router.delete('/deleteAlumnos', userController.deleteAlumnos);

module.exports= router;