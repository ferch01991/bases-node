const fs = require('fs');
const colors = require('colors');

const crearArchivoTable = async (base = 5, boolPrint= false, hasta=10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            // salida += `${base} x ${i} = ${base * i}\n`;
            salida += `${base} ${'x'.green} ${i} = ${base * i}\n`;
            consola += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)
        if (boolPrint) {
            console.log('======================')
            console.log(`      Tabla del ${base}`)
            console.log('======================')

            console.log(salida)
        }
        console.log(`Tabla de ${base} guardada en tabla-${base}.txt`);

        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivoTable
}