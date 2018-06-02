var buf = new Buffer(2);
buf[0] = -10;
buf[1] = 256;
/*
* 如果大于255，会对256取模，如果小于0，先摸256再加上256
* */
console.log(buf);