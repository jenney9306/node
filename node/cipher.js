const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-ccm', '열쇠');
let result = cipher.update('jiyea', 'utf8', 'base64');
result += cipher.final('base64'); //암호화 마무리 
console.log('암호' + result);

const decipher = crypto.createDecipher('aes-256-ccm', '열쇠');
let result2 = cipher.update(result, 'base64',' utf8');
result2 += cipher.final('utf8'); //복호화 마무리 
console.log('평문' + result2);

//열쇠가 매우 중요함 !!!!! 