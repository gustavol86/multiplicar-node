//const { resolveTxt } = require('dns');
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==========================='.green)
    console.log(`tabla de  ${ base }`.green)
    console.log('==========================='.green)


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} *  ${i} = ${base * i}\n`)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejects) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} *  ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                rejects(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}