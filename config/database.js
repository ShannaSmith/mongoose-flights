const mongoose = require('mongoose');
//connect to a data base named flights
mongoose.connect('mongodb://localhost.flights', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//shortcut to mongoose.connection object
const db = mongoose.connection;
//message to let me know server is running and on which port
db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
