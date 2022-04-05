
const Ticket = require('../models/ticket');


function create(req, res){
    console.log(req.params.id);
   let flightId = req.params.id;
   console.log(req.body)
    req.body.flight = flightId
    console.log(req.body.flight);
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${flightId}`);
    })
}
function newTicket(req, res){
    res.render('tickets/new', {
        title: 'Get Ticket',
        flightId: req.params.id,
    })
}





module.exports = {
    new: newTicket,
    create
    
};