
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
if (err) {
   return console.log('Unable to connect to db server');
}
console.log('Connected to MongoDB server');
//delete many
// db.collection('Todos').deleteMany({text:'Walk the dog'}).then((result)=>{
//     console.log(result);
// });
//delet one
db.collection('Todos').deleteOne({text: 'Fortnite'}).then((result)=>{
    console.log(result);
})
//db.close();
});