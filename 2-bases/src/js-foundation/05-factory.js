//const {getAge,uuidv4}=require('../plugins');

const Makebuildperson = (getAge,uuidv4) =>{
    return buildperson = ({name,birthdate})=>{
        return {
            id: uuidv4(),
            name: name,
            birthdate:birthdate,
            age:getAge(birthdate)
    }
    }
}



//const obj = {name:'jhon' , birthdate:'1998-02-15'};
//const jhon = Makebuildperson(obj);
//console.log(jhon);

module.exports={
    Makebuildperson,
}