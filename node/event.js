const EventEmitter = require('events');

const myEvent = new EventEmitter();

//== myEvent.on()
myEvent.addListener('방문', () => {
    console.log('방문해주셔서 감사합니당');
})

const callback = () => {
    console.log('잘가라고');
}

myEvent.on('종료', () => {
    console.log('잘가');
})

myEvent.on('종료', callback);

//한번만 실행되고 두번째할때에는 실행이안됨.
myEvent.once('특별이벤트', () => {
    console.log('한 번만 실행됨 ');
})

myEvent.emit('방문');
myEvent.emit('종료');

myEvent.removeListener('종료', callback);