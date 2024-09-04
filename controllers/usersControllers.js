import bcrypt from 'bcrypt';
const users = [

]

export const getUser = (req, res) => {
    res.json(users);
}
export const createUser = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {name: req.body.name, password:hashedPassword}
        users.push(user);
        res.status(201).send();
    }catch{
        res.status(500).send();
    }
}
export const login = async(req, res) => {
    
    const user = users.find(user => user.name = req.body.name)
    if (user==null){
        return res.status(400).send('Cannot find user');
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('Success'); 
        } else {
            res.send('Not allowed')
        }

    } catch {
        res.status(500).send();
    }
}