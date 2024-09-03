import bcrypt from 'bcrypt';
const users = [

]

export const getUser = (req, res) => {
    res.json(users);
}
export const createUser = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashedPassword);
        const user = {name: req.body.name, password:hashedPassword}
        users.push(user);
        res.status(201).send();
    }catch{
        res.status(500).send();
    }
}