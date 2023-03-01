/**
 * Created by domenicovacchiano on 07/07/16.
 */

var mongoose = require('mongoose');

/*
 config={
     "name":"db_name",
     "user":"db_user",
     "password":"db_password",
     "host":"db_server_host",
     "port":db_server_port,
     "connectionPool":connection pool number
 }
 */

function MongoDb(config){
    
    var isPool=false;
    var uri = 'mongodb+srv://' + config.host + ':' + config.port + '/' + config.name;
    var options = {
        user: config.user,
        pass: config.password
    }

    if (config.connectionPool && config.connectionPool>0){
        isPool=true;
        options.server= { poolSize: config.connectionPool };
    }

    var db=null;

    if (isPool){
        db=mongoose.connect(uri, options);
    }else {
        db=mongoose.createConnection(uri, options);
    }

    return db;
}

module.exports=MongoDb;