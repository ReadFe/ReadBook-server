const { subject } = require('@casl/ability');
const { policyFor } = require('../../utils');
const Invoice = require('./model')

const show = async (req, res, next) => {
    try {
        let {order_id} = req.params;
        let invoice = 
        await Invoice
        .findOne({order: order_id})
        .populate('order')
        .populate('user');
        
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id});
        if(!policy.can('read', subjectInvoice)) {
            return res.json({
                error: 1,
                message: 'You are not allowed to perform this action'
            });
        }

        return res.json(invoice);
    } catch (err) {
        return res.json({
            error: 1,
            message: 'Error when getting invoice'
        })
    }
}

module.exports = {
    show
}