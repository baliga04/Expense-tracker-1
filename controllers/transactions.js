//@desc     Get all the transactions
//@route    GET /api/v1/transactions
//@access   public

exports.getTransactions = (req, res, next ) => {
    res.send('GET transactions')
}

//@desc     add one transaction
//@route    POST /api/v1/transactions
//@access   public

exports.addTransactions = (req, res, next ) => {
    res.send('POST transaction')
}

//@desc     delete transactions
//@route    DELETE /api/v1/transactions/:id
//@access   public

exports.deleteTransactions = (req, res, next ) => {
    res.send('DELETE transactions')
}