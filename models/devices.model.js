let mongoose            =       require('mongoose');
let Schema              =       mongoose.Schema;

let device_schema       =       new Schema({
    device_type: {
        type:       String,
        enum:       ['water-switch', 'door-switch', 'alarm'],
        required:   true
    },
    device_name: {
        type:       String,
        required:   true
    },
    location: {
        type:       String
    },
    ip_address: {
        type:       String
    },
    connection_status: {
        type:       String,
        enum:       ['online', 'offline'],
        default:    'offline',
        required:   true
    },
    last_time_online: {
        type:       Number
    },
    battery_level: {
        type:       Number
    }
});

module.exports          =       mongoose.model('Device', device_schema);