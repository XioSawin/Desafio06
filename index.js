const fs = require('fs');

/*

//SINCRÓNICAMENTE

//write file
//fs.writeFileSync('text.txt', 'Hola Mundo');

//read file
//const data = fs.readFileSync('text.txt', 'utf-8');
//console.log(data);

//add info
//fs.appendFileSync('text.txt', '\n I am stupid');

//delete info
fs.unlinkSync('./text.txt');*/

/*
//ejercicio 1 ppt

const date = Date();
try {
    fs.writeFileSync('./fyh.txt', date);

} catch (err){
    console.log('No se pudo escribir el archivo');
}

try {
    const myDate = fs.readFileSync('fyh.txt', 'utf-8');
    console.log(myDate);
} catch (err){
    console.log('Archivo no encontrado');
}*/


//ASINCRÓNICAMENTE

//callbacks

/* fs.writeFile('./callbacks.txt', 'Hello there...', error => {
    if (error) {
        console.log(error);
        return;
    }

    console.log('...General Kenobi!');
}) */

/*
//append

fs.appendFile('./callbacks.txt', '\n...General Kenobi!', error => {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Grabado con éxito');
}) */

/*//read

fs.readFile('./callbacks.txt', 'utf-8', (error, data) =>{
    if(error){
        console.log(error);
        return
    }

    console.log(data);
}) */

//delete

fs.unlink('./callbacks.txt', error => {
    if(error){
        console.log(error);
        return;
    }

    console.log('Archivo eliminado con exito');
})