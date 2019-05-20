const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.naver.com');

console.log('new Url()' + myURL);
//url.parse -> 기존방식 
//url.URL -> WHATWG 방식 search 처리가 편함