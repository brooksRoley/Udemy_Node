var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command('create', 'Create a User Account', function(yargs) {
      return yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Your name',
          type: 'string'
        },
        username: {
          demand: true,
          alias: 'u',
          description: 'Your username',
          type: 'string'
        },
        password: {
          demand: true,
          alias: 'p',
          description: 'Your password',
          type: 'string'
        },
        masterPassword: {
          demand: true,
          alias: 'm',
          description: 'Master Password',
          type: 'string'
        }
      })
    })
    .command('get', 'Get an Account from a Username', function(yargs) {
      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Your name',
          type: 'string'
        },
        masterPassword: {
          demand: true,
          alias: 'm',
          description: 'Master Password',
          type: 'string'
        }
      })
    })
    .help('help')
    .argv;

function getAccounts (masterPassword) {
  var encryptedAccounts = storage.getItemSync('accounts');
  var accounts = [];
  if (typeof encryptedAccounts !== 'undefined') {
    var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
  return accounts;
}

function saveAccounts (accounts, masterPassword) {
  var encrypted = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
  storage.setItemSync('accounts', encrypted.toString());
  return accounts;
}

function createAccount (account, masterPassword) {
  var accounts = getAccounts(masterPassword);
  accounts.push(account);
  saveAccounts(accounts, masterPassword);
  console.log('Account Created!');
  console.log(account);
  return account;
}

function getAccount (accountName, masterPassword) {
  var accounts = getAccounts(masterPassword)
  for (var i = accounts.length - 1; i >= 0; i--) {
    if (accounts[i].username = accountName){
      return accounts[i];
    }
  };
}


var command = argv._[0];
if (command === 'create') {
  try{
    var account = {
      name: argv.name,
      username: argv.username,
      password: argv.password
    };
    createAccount(account, argv.masterPassword);
  } catch(e){
    console.log("Unable to create account.");
  }
};
if (command === 'get') {
  try{
    var fetchedAccount = getAccount(argv.name, argv.masterPassword);
    if (typeof fetchedAccount === 'undefined'){
      console.log('Account not found.');
    } else{
      console.log('Account found.');
      console.log(fetchedAccount);
    }
  } catch(e){
    console.log("Unable to retrieve account.");
  }
};
