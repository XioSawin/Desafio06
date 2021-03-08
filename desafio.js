const { POINT_CONVERSION_COMPRESSED } = require('constants');
const fs = require('fs');

class Product {
    constructor (title, price, thumbnail){
        this.title = title, 
        this.price = price,
        this.thumbnail = thumbnail;
    }

    setId(id){
        this.id = id;
    }
}

class Archivo {
    constructor (name){
        this.name = name;
    }

    async leer(){
        let emptyArray = [];

        try {
            return (await fs.promises.readFile(this.name, 'utf-8')).split('\n');
            
        } catch (err) {
            console.log('Error de lectura. ', err);
            return emptyArray;
        }
    }

    async guardar(producto){
        try {
            const data = await this.leer();
            
            let arrayLength = data.length;

            producto.setId(arrayLength + 1);
            
            await fs.promises.appendFile(this.name, `${JSON.stringify(producto)}\n`);

        } catch (err) {
            console.log('No se pudo escribir el archivo.', err);
        }
    }

    async borrar(){
        try {
            await fs.promises.unlink(this.name);
            console.log('Archivo borrado con exito.');
        } catch (err) {
            console.log('No se pudo borrar el archivo. ', err);
        }
    }
}

let product1 = new Product('Scuderia Ferrari Sweatshirt', 104, 'https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-race-xtg-crew-sweatshirt-by-puma-black_ss4_p-12026947+u-sqzmkaobwp12wwvib45r+v-5a52b5a373364999b4d9c0dea5802cb6.jpg?_hv=1&w=900');
let product2 = new Product("McLaren G'day t-shirt", 30, 'https://www.mclarenstore.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw69c88668/images/large/701218518001_pp_01_image.jpg?sw=800&sh=800&sm=fit');
let product3 = new Product('Gasly 2020 1:2 helmet', 149.95, 'https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/SAT20009_5_1/Pierre-Gasly-2020-1-2-Helmet.jpg?c');

let productFile = new Archivo('producto.txt');

async function leerArchivo(){
    console.log(await productFile.leer());
}

async function guardarArchivo(product){
    const data = await productFile.guardar(product);
    console.log(data);
}

async function borrarArchivo(){
    console.log(await productFile.borrar());
}

guardarArchivo(product1);


