const crypto = require("crypto");

function generate() {
    return crypto.randomInt(0, 100000)
}

module.exports = generate;



