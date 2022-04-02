//create a Flight model
const res = require('express/lib/response');
const Flight = require('../models/flight');

function newClientFlight(req, res){
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toIsOString().slice(0, 16);
    res.render("flights/new", {departsDate});
}
function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render("flights/index", {
            flights, title: "Flight Log"
        });
    });
}

    function create(req, res){
Flight.create(req.body, function(err, flightDatabase){
    if(err)return res.redirect("/flights/new");
    console.log(flightDatabase);
    res.redirect("/flights");
    });
    }
module.exports = {
    new: newClientFlight,
    index,
    create
}