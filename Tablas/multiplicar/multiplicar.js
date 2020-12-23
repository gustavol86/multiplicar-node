const { resolveTxt } = require('dns');
const fs = require('fs');


let crearArchivo = (base) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`el valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} *  ${i} = ${base * i}\n\t`;
        }

        //const data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                rejects(err);
            else
                resolve(`tabla-${base}.txt`)

        });
    });
}

module.exports = {
    crearArchivo
}