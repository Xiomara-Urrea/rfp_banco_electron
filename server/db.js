const mongoose = require('mongoose'); 

const URI1 = 'mongodb://xiomara:Asd123@ds151863.mlab.com:51863/sisbancaria';

mongoose.connect(URI1)
	.then(db => console.log(`DB is connected`))
	.catch(err => console.error(err));

module.exports = mongoose; 
