const bcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user=[{
    id:1,
    email:'abc@gmail.com',
    password: bcypt.hashSync('123456',10),

}];
module.exports=users;