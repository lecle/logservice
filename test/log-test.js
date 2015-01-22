var log = require('../lib/log');

describe('server', function() {
    describe('#init()', function() {
        it('should initialize without error', function(done) {

            // manager service load
            var dummyContainer = {addListener:function(){}};

            log.init(dummyContainer, function(err) {

                log.close(done);
            });
        });
    });

});