const mongoose = require('mongoose');
const Schema =  mongoose.Schema({
    name: {type: String,required: true},
    description: {type:String},
    price: {type:Number , required: true}

})
const user = mongoose.model("praveen",Schema);
module.exports=user;