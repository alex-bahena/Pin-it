const connection = require('./config/connection2');
console.log('Aqui')
class Database {
    static async pagesName() {
        const [rows, fields] = await connection.promise().query(` SELECT name FROM pin_it.pages;`
        );
        console.log('aqui2')
        
        return rows;

    };

    static async pagesArray() {
        console.log('aqui3')
        // === Call the table Department as an Object ===
        const pagesArr = await this.pagesName();
        // === Renders the object into an array to be able to use the information as list choices. ===
        const pagesIndex = pagesArr.map(pagesName => pagesName.name);


        console.log(pagesIndex);
    }
};




module.exports = Database;