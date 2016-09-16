var pg = require('pg');
var connectionString = 'pg://jayunani:@localhost:5432/foodoasisla';

var client = new pg.Client(connectionString);
client.connect();