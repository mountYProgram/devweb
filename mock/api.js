const fs = require('fs');
const path = require('path');

function toJSONFile(filename) {
    return (req, res) => {
        let data;
        
        data = fs.readFileSync(path.resolve(`mock/data/${filename}.json`)).toString();
        return res.json(JSON.parse(data));
    }
}

const api = {
    'GET /manage': toJSONFile('manage')
}

module.exports = api;