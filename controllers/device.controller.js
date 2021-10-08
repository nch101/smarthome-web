const log4js        =       require('log4js');
const deviceModel   =       require('../models/devices.model');

const log           =       log4js.getLogger('controllers.device');

module.exports      = {
    get_all_devices:    function(req, res) {
        deviceModel
        .find()
        .then((data) => {
            if (data) {
                log.info('Get all devices information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found any devices information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Get all devices information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Get all devices information error'
            });
        })
    },

    get_device:         function(req, res) {
        deviceModel
        .findById(req.params.deviceID)
        .then((data) => {
            if (data) {
                log.info('Get device information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found device information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Get device information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Get device information error'
            });
        })
    },

    create_device:      function(req, res) {
        let device         =       new deviceModel(req.body);
        device
        .save()
        .then((data) => {
            log.info('Create device successfully, id:', data._id);
            return res
            .status(200)
            .send({
                status: 'success',
                message: 'Create device successfully'
            });
        })
        .catch((error) => {
            log.error('Create device error:', error);
            log.error(error.errors);
            return res
            .status(400)
            .send({
                status: 'error',
                message: 'error'
            });
        })
    },

    modify_device:      function(req, res) {
        deviceModel
        .findByIdAndUpdate(req.params.deviceID, {
            $set: {
                device_type:    req.body.device_type,
                device_name:    req.body.device_name,
                location:       req.body.location,
                ip_address:     req.body.ip_address
            }
        })
        .then((data) => {
            if (data) {
                log.info('Modify device information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found device information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Modify device information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Modify device information error'
            });
        })
    },

    delete_device:      function(req, res) {
        deviceModel
        .findByIdAndRemove(req.params.deviceID)
        .then((data) => {
            if (data) {
                log.info('Delete device information successfully');
                return res
                .status(200)
                .send(data);
            }
            else {
                log.info('Not found device information');
                return res
                .status(404)
                .send({
                    status: 'error',
                    message: 'Not found'
                })
            }
        })
        .catch((error) => {
            log.error('Delete device information error:', error);
            return res
            .status(501)
            .send({
                status: 'error',
                message: 'Delete device information error'
            });
        })
    }
};