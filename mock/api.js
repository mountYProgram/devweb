const fs = require('fs');
const path = require('path');

function toJSONFile(filename) {
    return (req, res) => {
        let data;
        // let files = fs.readdirSync(filename);
        if (filename) {
        	data = fs.readFileSync(path.resolve(`mock/data/${filename}.json`)).toString();
        } else {
        	data = fs.readFileSync(path.resolve(`mock/data/${req.query.page}/${req.query.action}.json`)).toString();
        }
        return res.json(JSON.parse(data));
    }
}

const api = {
    'GET /requestapi': toJSONFile(),
    'GET /weather': toJSONFile('weather')
}

module.exports = api;