const mongoose = require('mongoose'); 

const URI1 = 'mongodb://xiomara:Asd123@ds151863.mlab.com:51863/sisbancaria';
const URI = 'mongodb://samuel:Abc123456@ds041157.mlab.com:41157/sistbanco';

mongoose.connect(URI)
	.then(db => console.log(`DB is connected`))
	.catch(err => console.error(err));

module.exports = mongoose; 
