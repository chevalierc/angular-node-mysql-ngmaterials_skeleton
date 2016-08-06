// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var path = require( 'path' );
var mysql = require( "mysql" );
var express = require( 'express' );
var config = require( './app/config/config' );
var environment = require( './app/config/enviroment' );
var routes = require( './app/config/routes' );

//call express
app = express()

//set up configurables
environment( app );

//connect to db
var pool = mysql.createPool( config.database )

//set up routes
routes( app, express, pool );

//should show previously hidden errors
process.on( 'unhandledRejection', console.log )

// START THE SERVER
// ====================================
app.listen( config.port );
console.log( 'Magic happens on port ' + config.port );
