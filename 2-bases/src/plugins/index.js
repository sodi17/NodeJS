const { uuidv4 } = require('../plugins/get-id.plugin');
const {getAge} = require('../plugins/get-age.plugin');
const {httpClientPlugin} = require('../plugins/http-client.plugin');

module.exports={
    uuidv4,
    getAge,
}