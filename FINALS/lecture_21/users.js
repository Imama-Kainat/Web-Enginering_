const bcrypt = require('bcrypt');

const users = [
    { id: 1, email: 'abc@abc.com', password: bcrypt.hashSync('123456', 10), name: 'abc' },
    { id: 2, email: 'def@def.com', password: bcrypt.hashSync('123456', 10), name: 'def' },
    { id: 3, email: 'ghi@ghi.com', password: bcrypt.hashSync('123456', 10), name: 'ghi' }
];

module.exports = users;
