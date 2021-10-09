const log4js        =       require('log4js');
const userModel     =       require('../models/users.model');

const log           =       log4js.getLogger('controllers.user');

module.exports      = {
    get_all_users:    function(req, res) {
        userModel
        .find()
        .then((data) => {
            if (data) {
                log.info('Get all users information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found any users information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Get all users information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Get all users information error'
            });
        })
    },

    get_user:         function(req, res) {
        userModel
        .findById(req.params.userID)
        .then((data) => {
            if (data) {
                log.info('Get user information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found user information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Get user information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Get user information error'
            });
        })
    },

    create_user:      function(req, res) {
        let user         =       new userModel(req.body);
        user
        .save()
        .then((data) => {
            log.info('Create user successfully, id:', data._id);
            return res
            .status(200)
            .send({
                status: 'success',
                message: 'Create user successfully'
            });
        })
        .catch((error) => {
            log.error('Create user error:', error);
            log.error(error.errors);
            return res
            .status(400)
            .send({
                status: 'error',
                message: 'error'
            });
        })
    },

    modify_user:      function(req, res) {
        userModel
        .findByIdAndUpdate(req.params.userID, {
            $set: {
                user_type:      req.body.user_type,
                firstname:      req.body.firstname,
                lastname:       req.body.lastname
            }
        })
        .then((data) => {
            if (data) {
                log.info('Modify user information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found user information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Modify user information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Modify user information error'
            });
        })
    },

    delete_user:      function(req, res) {
        userModel
        .findByIdAndRemove(req.params.userID)
        .then((data) => {
            if (data) {
                log.info('Delete user information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found user information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Delete user information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Delete user information error'
            });
        })
    }
};