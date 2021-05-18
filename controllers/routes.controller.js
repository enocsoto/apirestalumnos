let db = require('../db/dbalumnos');
class userController {
    static userGet = (req, res) => {
        if(db.length>0){
            if (!req.query.id) 
                res.status(200).json({ msg: 'ok', data: db });
            else{
                let resultado = db.filter(x=> x.id == req.query.id)
                res.status(200).json({msg: 'ok', data: resultado});
            }    
        }else
            res.status(200).json({msg: 'Base de datos vacia', data: null});
    }
    static getAlumnos = (req, res) => {
        res.json({ msg: 'ok', })
    }
    static updateAlumnos = (req, res) => {
        res.json({ msg: 'ok', })
    }
    static addAlumnos = (req, res) => {
        let user=req.body
        db.push(user)
        res.status(200).json({ mensaje: 'ok',newuser:user, data: db })
    }
    static deleteAlumnos = (req, res) => {
        res.json({ msg: 'ok', })
    }
}
module.exports = {
    userController
};