const users = [
    {
        id:1,
        name:'John Doe',
},
{
        id:2,
        name:'Jane Doe',
}];

const getUserByid=(id,callback)=>{
    const user=users.find((user)=>{
        return user.id===id;
    });
    //console.log({user});
    if(!user){
        return callback(`User not found with id ${id}`);
    }
    return callback(null,user);
};

//getUserByid(1);

module.exports={
    getUserByid
}