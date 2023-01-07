const fs = require("fs");

// create is_exists async function
const async_is_exists = async (path) => fs.existsSync(path);

// module export
module.exports = { async_is_exists };
