"use strict";

var winston = require('winston');
var path = require('path');

var logPath = path.join(process.cwd(), 'noserv.log');

var logger = new winston.Logger({

    transports: [
        new winston.transports.Console({
            level : 'debug'
        }),
        new winston.transports.File({
            json       : false,
            maxsize : 100000000,
            filename   : logPath,
            timestamp : true,
            level : 'debug'
        })
    ]
});

exports.container = null;

exports.init = function(container, callback) {

    exports.container = container;

    container.addListener('log', log);

    callback(null);
};

exports.close = function(callback) {

    callback(null);
};

exports.log = log;

function log(req, res, next) {

    logger.info(req.data);

    next();
}