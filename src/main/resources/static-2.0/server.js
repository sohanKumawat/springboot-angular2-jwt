var livereload = require('livereload');
var server = livereload.createServer({
    originalPath: "http://localhost:9966/"
});
server.watch('/static/app');
