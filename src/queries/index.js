const {promisifedQuery} = require('../db/connection');

exports.retrieveAllProducts = async() => { //not currently used
   
    try {
        let data = await promisifedQuery('SELECT * FROM products');

        console.log(data);
        return data;

        } catch (error) {
        console.log(error);
        res.send(error);
    }
    
}

exports.retriveSelectedproducts = async (val) => {

try {
    let data = await promisifedQuery(`SELECT * FROM products WHERE category = "${val}"`);

    console.log(data);
    
    if (data.length < 1) {
        return ({
            message: "no valid data found"
        })
    }
    else {
    return data;
    }

} catch (error) {
    console.log(error);
    res.send("error!");
}

}