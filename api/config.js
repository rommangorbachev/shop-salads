const path = require('path');
const rootPath = __dirname;
let dbUrl = 'mongodb://localhost/shop-salads';
let port = 8000;

if (process.env.NODE_ENV === 'test') {
    dbUrl = 'mongodb://localhost/shop-salads';
    port = 8010;
}

module.exports = {
    port,
    corsWhiteList: [
        'http://localhost:4200',
        'https://localhost:4200',
    ],
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    avatarAllowedTypes: ['.png', '.gif', '.jpg', '.jpeg'],
    mongo: {
        db: dbUrl,
        options: {useNewUrlParser: true},
    }
};
