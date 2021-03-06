// set up ========================
    // var express  = require('express');
    // var app      = express();                               // create our app w/ express
    // var morgan = require('morgan');             // log requests to the console (express4)
    // var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    // var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // // configuration =================

    // app.use(express.static(__dirname + '/public'));  
    // app.use(express.static(__dirname + '/views'));                 // set the static files location /public/img will be /img for users
    // app.use(morgan('dev'));                                         // log every request to the console
    // app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    // app.use(bodyParser.json());                                     // parse application/json
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    // app.use(methodOverride());


    // app.get('*', function(req, res) {
    	
    //     res.sendFile('index.html',{
    //         root: '.'
    //     }); // load the single view file (angular will handle the page changes on the front-end)
    // });

    // module.exports = app;

    // // listen (start app with node server.js) ======================================
    // app.listen(3000);
    // console.log("CuteGallery listening on port 3000");
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(3000);

var express  = require('express');
var app      = express();  
app.use(express.static(__dirname)); 
app.listen(process.env.PORT || 4000);

