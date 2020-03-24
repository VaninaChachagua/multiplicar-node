const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let rta = '';
        console.log('******************************');
        console.log(`******** Tabla del ${ base } *********`.green);
        console.log('******************************');
        for (let i = 0; i <= limite; i++) {
            rta += `${ base } * ${ i } = ${ base * i }\n`;

        }
        resolve(console.log(rta));
    });

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i}\n`;

        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`.cyan);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};