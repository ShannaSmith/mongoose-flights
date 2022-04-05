//create a Flight model
const res = require('express/lib/response');
const Flight = require('../models/flight');

function show(req, res) {
    Flight.findById(req.params.id, function ( err, flightFromTheDatabase){
        res.render("flights/show", {title: "Flight Detail", flight: flightFromTheDatabase});
    })
}

function newClientFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;  
    const departsDate = dt.toISOString().slice(0, 16);
    console.log(departsDate)
    res.render("flights/new", {departsDate, title: "Add Flight"});
}



function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render("flights/index", {
            flights, 
            title: "Flight Log",
        });
    });
}
function create(req, res){
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function (err) {
        console.log(err);
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });   
};

module.exports = {
    new: newClientFlight,
    create,
    index,
    show
};