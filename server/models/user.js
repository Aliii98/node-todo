var mongoose= require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

// var newUser= new User({
//     email: 'alii_khalid@outlook.com'});
// newUser.save().then((doc)=>{
// console.log('Saved User' ,doc);
// }, (e) =>{
//     console.log('unable to save user info',e);
// });

module.exports= {
    User
};