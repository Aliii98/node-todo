const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');


 var id= '5b3e02722b9636f90aed24e21';
if (!ObjectID.isValid(id)){
    console.log('id not valid');
}
// Todo.find({
// _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// }) ;

// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return console.log('id not found');
//     }
//     console.log('Todo: ', todo);
// }).catch((e)=>{
//     console.log(e);
// }) ;

User.findById(id).then((user)=>{
    if (!user){
        return console.log('Cant find user');
    }
    console.log('user: ',user);
}).catch((e)=>{ console.log(e,'Invalid ID!!!!');})