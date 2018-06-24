// Load Module Dependencies


module.exports = {
    // HTTP PORT
    HTTP_PORT: 3001,

    // MONGODB URL
    MONGODB_URL:process.env.MONGODB||'mongodb://localhost/visitors',

    //secret word
    secret:process.env.SECRET || 'supersecret'

};
