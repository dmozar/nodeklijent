import UserModel from './../models/User';

exports.find = function(req, res) {
    var model = new UserModel();
    model.find(req).then((user)=>{ res.status(200).send( user ); })
    
};


exports.insert = function(req, res) {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully 2',
    });
};


exports.update = function(req, res) {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully 3',
    });
};


exports.delete = function(req, res) {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully 4',
    });
};