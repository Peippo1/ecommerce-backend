const {promisifedQuery} = require('../db/connection');

exports.createUser = async (req, res) => {

    try {
        let data = await promisifedQuery(`INSERT INTO USERS SET ?`, {
            first_name: req.body.first_name,
            surname: req.body.surname,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            email: req.body.email,
            pass: req.body.pass  
    });
        console.log(data);
        res.send("successfully received data!")

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.login = async (req, res) => {

    try {
        let data = promisifedQuery(`SELECT * FROM USERS WHERE email =${req.body.email};`)
        
    } catch (error) {
        
    }
}