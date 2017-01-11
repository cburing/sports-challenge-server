var Config = require('./config/config');
var app = require('./app');

app.listen(Config.app.port);
console.log('Listening on port ' + Config.app.port);
