import Edital from "../models/edital.js";
import Student from "../models/student.js";

class EditalController{

    listEdital = async (req, res, next) => {
        try{
            const edital = await Edital.find();
            res.status(200).json(edital);
        }
        catch(err){
            next(err);
        }
    }

    getEditalById = async (req, res, next) => {
        try{
            const {id} = req.params;
            const edital = await Edital.findById(id);

            if(edital === null){
                return res.status(404).json({message: 'Edital not found'});
            }

            res.status(200).json(edital);
        }
        catch(err){
            next(err);
        }
    }

    insertStudent = async (req, res, next) => {
        const {name, date_of_birth, cpf, phone, cep, address, city, uf, email, schoolId, password} = req.body;

        const loginExists = await Login.findOne({username: cpf});

        if(loginExists !== null){
            return res.status(400).json({message: 'User already exists'});
        }

        const hashPassword = await createHashWithSalt(password);
        const login = new Login({
            username: cpf,
            password: hashPassword,
            accessType: 'student'
        });

        try{
            const newLogin = await login.save();
            const student = new Student({
                name: name,
                date_of_birth: date_of_birth,
                cpf: cpf,
                phone: phone,
                cep: cep,
                address: address,
                city: city,
                uf: uf,
                loginId: newLogin._id,
                email: email,
                schoolId: schoolId
            });
            const newStudent = await student.save();
            res.status(201).json(newStudent);
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    }

}

export default new EditalController;