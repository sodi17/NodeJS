//const {emailTemplate} = require('./js-foundation/01-template');
//console.log(emailTemplate);
//require('./js-foundation/02-destructuring');
//const templateExports = require('./js-foundation/01-template');


//console.log(templateExports.emailTemplate);

//const {getUserByid}=require('./js-foundation/03-callbacks');
//const {getUserByid}=require('./js-foundation/04-arrow');
/*const id=2;
getUserByid(id, (error,user)=>{
    if (error){
        throw new Error(error);
    }else{
        console.log(user);
    }
});*/

const {getAge,uuidv4}=require('./plugins'); //referencia

/*factory inicio
const {Makebuildperson} = require('./js-foundation/05-factory');
const makeperson=Makebuildperson(getAge,uuidv4);

const obj = {name:'jhon' , birthdate:'1998-02-15'};
const jhon = makeperson(obj);
console.log({jhon}); factory fin*/

//const {getPokemonbyid}=require('./js-foundation/06-promises');
/*getPokemonbyid(4)
    .then((pokemon)=>console.log(pokemon))
    .catch((err)=>console.log(err))
    .finally(()=>'Finalmente');*/
const {buildlogger}=require('./plugins');
const logger =buildlogger('app.js');
logger.log('Hola Mundo');
logger.error('Esto es algo malo');

