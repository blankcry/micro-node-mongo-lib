# micro-node-mongo-lib
An utility library that helps to manage Mongo database connections.

# What is this?
Developing a NodeJs Microservices Architecture, most of the time, you need to do some tedious operations.
<br/>
This library will help you with the MongDB connection setup, for instance to use it for logging or to setup a service registry.
<br/>
# How to install
The library is depending of mongose lib, so it is required to setup throught npm:
<br>
<b>sudo npm install</b>

# How to use

Very easy to use!
```javascript
  var db = require ('micro-node-mongo-lib').mongodb({
    name:"my_db_name",
    user:"my_db_user",
    password:"my_db_password",
    host:"mongo_db_host",
    port:27018,
    connectionPool:1000
});
```
