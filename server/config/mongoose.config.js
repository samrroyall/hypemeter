const mongoose = require('mongoose');
const DBNAME = 'hypemeter-db';
mongoose.connect(`mongodb://localhost/${DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log(`Established connection with ${DBNAME}`) )
    .catch( err => console.log(`Something went wrong conneting to ${DBNAME}`, err) );