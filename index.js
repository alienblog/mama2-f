var koa = require('koa'),
    serve = require('koa-static')
    path = require('path');
    
var app = koa();

var distPath = path.join(__dirname,'wwwroot');

app.use(serve(distPath));


app.listen(3000);
console.log('listening on port 3000');