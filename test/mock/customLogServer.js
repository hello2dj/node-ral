/**
 * @file node-ral
 * @author hefangshi@baidu.com
 * http://fis.baidu.com/
 * 2016/11/17
 */

var http = require('http');

module.exports.createCustomLogServier = function (port) {
    return http.createServer(function (request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'tracecode': ['1', '2']
        });
        response.write('0');
        response.end();
    }).listen(port);
}