const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.naver.com?page=1&limit=3');
const query = querystring.parse(parsedUrl.query);

console.log('queryString.parse() : ', query);

//파싱된 파일을 다시 합쳐줌 
console.log('queryString.parse() : ', querystring.stringify(query));