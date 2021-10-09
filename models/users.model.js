let mongoose            =       require('mongoose');
let Schema              =       mongoose.Schema;

let device_schema       =       new Schema({
    deviceID: {
        type:       String,
        ref:        'Device'
    }
})

let user_schema         =       new Schema({
    username: {
        type:       String,
        required:   true
    },
    password: {
        type:       String,
        required:   true
    },
    admin: {
        type:       Boolean,
        default:    false,
        required:   true
    },
    user_type: {
        type:       String,
        enum:       ['host', 'guest'],
        default:    'guest',
        required:   true
    },
    access_token: {
        type:       String
    },
    refresh_token: {
        type:       String
    },
    firstname: {
        type:       String,
        required:   true
    },
    lastname: {
        type:       String
    },
    device_owner: [{
        type:       device_schema
    }]
});

module.exports          =       mongoose.model('User', user_schema);