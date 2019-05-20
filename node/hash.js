const crypto = require('crypto');
const pw = crypto.createHash('sha512').update('비밀번호').digest('base64');
//비밀번호를 sha512로 암호화해서 base64로 출력해라
//hash로 암호화하면 복화하가 불가능함
//단방향암호화

crypto.createHash('sha512')
console.log(pw);
