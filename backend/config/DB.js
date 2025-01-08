const mongoose = require('mongoose');

const uri = 'mongodb+srv://sg2017goyal2018:m0hdUS2fmQoFuBNL@cluster0.szcym8s.mongodb.net/uberclone';

const connection = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connection Establish Sucessfully');
    } catch (error) {
        console.log(error)
    }


};

module.exports = connection;