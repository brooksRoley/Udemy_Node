var crypto = require('crypto-js');

var secretMessage = {
  name: 'Brooks',
  secretname: 'Wick'
};
var secretKey = "123";

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log(encryptedMessage);


var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decrypt.secretname);
