const Ticket = require('../models/tickets');
const Flight = require('../models/flight');



function create(req, res){
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${ticket.flight}`);
    })
}
function newTicket(req, res){
    res.render('ticket/new', {
        title: 'Get Ticket',
        flight: req.params.id
    })
}





module.exports = {
    new: newTicket,
    create
    
};