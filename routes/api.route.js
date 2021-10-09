let express             =       require('express');
let router              =       express.Router();
let deviceControllers   =       require('../controllers/device.controller');
let userControllers     =       require('../controllers/user.controller');

//Device
router.get('/device',               deviceControllers.get_all_devices);
router.post('/device',              deviceControllers.create_device);
router.get('/device/:deviceID',     deviceControllers.get_device);
router.post('/device/:deviceID',    deviceControllers.modify_device);
router.delete('/device/:deviceID',  deviceControllers.delete_device);

//User
router.get('/user',                 userControllers.get_all_users);
router.post('/user',                userControllers.create_user);
router.get('/user/:userID',         userControllers.get_user);
router.post('/user/:userID',        userControllers.modify_user);
router.delete('/user/:userID',      userControllers.delete_user);

module.exports          =       router;