const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    //iteration은 시간이 길수록 해커가 알아내기 쉬움 
    crypto.pbkdf2('jiyea', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
        
    })
})

//실무에서는 bcrypt, scrypt 많이사용