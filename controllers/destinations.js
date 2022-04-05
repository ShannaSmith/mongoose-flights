const Flight = require('../models/flight')



function create(req, res){
    Flight.findById(req.params.id, function(err, flightFromTheDatabase) {
        flightFromTheDatabase.destinations.push(req.body);
        flightFromTheDatabase.save(function(err){
            console.log(flightFromTheDatabase)
            res.redirect(`/flights/${flightFromTheDatabase._id}`)
        })
    })
}

module.exports = {
    create
}