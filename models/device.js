var mysql = require('mysql');

exports.getAllTypeDevice = function(connection, done) {
    var query = "SELECT * FROM ?? ";
    var table = ["type"];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.createTypeDevice = function(id, name, title, description, datecreated, connection, done) {
    var query = "INSERT INTO type (id,name,title,description,datecreated\
    ,datemodified) VALUES(?,?,?,?,?,?)";
    var table = [id, name, title, description, datecreated, datecreated];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getTypeDeviceById = function(id, connection, done) {
    var query = "SELECT * FROM type where id=?";
    var table = [id];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.updateTypeDevice = function(id, name, title, description, datemodified, connection, done) {
    var query = "UPDATE ?? SET ??=?,??=?,??=?,??=? where id = ?;";
    var table = ["type", "name", name, "title", title, "description", description, 'datemodified', datemodified, id];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.deleteTypeDevice = function(id, connection, done) {
    var query = "delete from type where id=?";
    var table = [id];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getAllDevice = function(connection, done) {
    var query = "SELECT device.*,type.name as typename,status_device.name as statusname FROM ??\
           left join ?? on type.id=device.typeid\
           left join ?? on device.status = status_device.id";
    var table = ["device", "type", "status_device"];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getDeviceByType = function(typeid, connection, done) {
    var query = "SELECT device.*,type.name as typename,status_device.name as statusname FROM ??\
           left join ?? on type.id=device.typeid\
           left join ?? on status_device.id = device.status\
           where device.typeid=?";
    var table = ["device", "type", "status_device", typeid];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getDeviceById = function(deviceid, connection, done) {
    var query = "SELECT device.*,type.name as typename,status_device.name as statusname FROM ??\
           left join ?? on type.id = device.typeid\
           left join ?? on status_device.id = device.status\
           where device.id=?";
    var table = ["device", "type", "status_device", deviceid];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.createDevice = function(id, name, description, imageDevice, type, ipv6, datecreated, status, coordinates, expireddates, connection, done) {
    var query = "INSERT INTO device (id,name,description,imageDevice,typeid,ipv6,datecreated\
    ,datemodified,active,coordinates,expireddates) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
    var table = [id, name, description, imageDevice, type, ipv6, datecreated, datecreated, status, coordinates, expireddates];
    query = mysql.format(query, table);
    connection.query(query, done);
};

exports.updateDevice = function(id, name, description, imageDevice, ipv6, datemodified, status, type, coordinates, expireddates, connection, done) {
    var query = "UPDATE ?? SET ??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=? where device.id = ?;";
    var table = ["device", "name", name, "description", description, "imageDevice",
        imageDevice, "ipv6", ipv6, 'datemodified', datemodified, 'active', status, 'typeid',
        type, "coordinates", coordinates, "expireddates", expireddates, id
    ];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.deleteDevice = function(id, connection, done) {
    var query = "delete from device where id=?";
    var table = [id];
    query = mysql.format(query, table);
    connection.query(query, done);
}

exports.getAllStatusDevice = function(connection, done) {
    var query = "SELECT * FROM ?? ";
    var table = ["status_device"];
    query = mysql.format(query, table);
    connection.query(query, done);
}
