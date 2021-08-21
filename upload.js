var ftpClient = require('./lib/client.js'),
    config = {
        host: 'ftpupload.net',
        port: 21,
        user: 'epiz_27353217',
        password: 'x8jfDmlArGm'
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);

client.connect(function () {

    client.upload(['logs/**'], '/loggingderpystown.epizy.com/htdocs', {
        baseDir: 'logs',
        overwrite: 'all'
    }, function (result) {
        console.log(result);
    });


});