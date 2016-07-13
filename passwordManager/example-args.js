var argv = require('yargs')
    .command('hello', 'Greets the user', function(yargs) {
      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Your first name',
          type: 'string'
        },
        lastname: {
          demand: true,
          alias: 'l',
          description: 'Your last name',
          type: 'string'
        }
      }).help('help');
    })
    .help('help')
    .argv;



if (typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
  console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if(typeof argv.name !== 'undefined') {
  console.log('Hello ' + argv.name + '!');
} else{
  console.log('Hello World');
};