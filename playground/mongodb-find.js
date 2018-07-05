
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
if (err) {
   return console.log('Unable to connect to db server');
}
console.log('Connected to MongoDB server');
var findUser= 'Ali';
db.collection('Users').find({name: findUser}).toArray().then((docs)=>{
console.log(`User records found with the name ${findUser} :`);
console.log(JSON.stringify(docs,undefined,2));
}, (err)=>{
    if (err){
        console.log('unable to fetch docs',err);
    }
});

db.collection('Users').find({name: findUser}).count().then((count)=>{
    console.log(`Matches count: ${count}`);
    }, (err)=>{
        if (err){
            console.log('unable to fetch docs',err);
        }
    });
//db.close();
});