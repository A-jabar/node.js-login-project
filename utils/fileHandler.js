const { json } = require('express');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'data.json');
exports.WriteToAfile = (task) => {
    fs.writeFileSync(filePath , JSON.stringify(task));
}

exports.ReadTaskFromFile = () => {
    if (!fs.existsSync(filePath)){
        this.WriteToAfile([]);
    }
    const data = fs.readFileSync(filePath);
    return json.parse(data);
}