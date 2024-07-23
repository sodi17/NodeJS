const { v4: getuuidplugin } = require('uuid');

const uuidv4  = ()=>{
    return getuuidplugin();
}

module.exports={
    uuidv4,
}