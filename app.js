const { crearArchivoTable } = require('./helpers/multiplicar');

const argv = require('./config/yargs');


console.clear();

console.log('base: yars: ', argv.b);


// const base2 = process.argv[2].split('=')[1];
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base2=5] = arg3.split('=');
// console.log(base2);

// const base2 = 5;
crearArchivoTable(argv.b, argv.l, argv.h).then(nameFile => {
    console.log(nameFile);
})