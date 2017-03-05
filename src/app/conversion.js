var mapper = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var base = 62;

module.exports.encode = function encode(num){
  var encoded = '';
  while (num){
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = mapper[remainder].toString() + encoded;
  }
  return encoded;
}

module.exports.decode = function decode(str){
  var decoded = 0;
  while (str){
    var index = mapper.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}