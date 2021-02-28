const { retriveSelectedproducts, search } = require('../queries');

exports.retrieveProducts = async (req, res) => {
    try {

        const data = await retriveSelectedproducts(req.body.query);
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.searchProducts = async (req, res) => {

    try{
        const data = await search(req.body.query);
        console.log(data);
        res.send(data);
    } catch(error) {
        console.log(error);
        res.send(error);
    }

}