const util = require('util');
const crypto = require('crypto');

//지원이 조만간 중단될 메서드임을 알려줄때 사용 
const dontuseme = util.deprecate((x, y) => {
    console.log(x+y)
})

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    crypto.pbkdf2('jiyea', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
    })
})

//randomBytes가 promise를 지원해야지만 promise 방식을 사용할수 있음
//근데 지원하지 않아서 
//promisify() 해주면 callback 방식만 지원하던데 프로미스를 지원하게됨.
const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

randomBytes(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        return pbkdf2Promise('jiyea', salt, 100000, 64, 'sha512')
    })
    .then((key) => {
        console.log('password', kㅌey.toString('base64'));
    })
    .catch((err) => {
        console.err(err);
    })