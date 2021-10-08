let express             =       require('express');
let router              =       express.Router();
let deviceControllers   =       require('../controllers/device.controller');

router.get('/device',               deviceControllers.get_all_devices);
router.post('/device',              deviceControllers.create_device);
router.get('/device/:deviceID',     deviceControllers.get_device);
router.post('/device/:deviceID',   deviceControllers.modify_device);
router.delete('/device/:deviceID',  deviceControllers.delete_device);

module.exports          =       router;