var connect = require('./2-connect');
var app = connect();
app.listen(8080)
require('./middle')(app);
require('./route')(app);