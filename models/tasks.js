const mongoose = require('mongoose') 


const TasksSchema = new mongoose.Schema({
     name: {
          type: String, //type of entered data
          required: [true, "you must enter value"], //must have data
          trim: true , //ignore whitespace
          maxlength: [30, "You reach maximum number of letters"],

     },
     completed: {
          type: Boolean,
          default: false,
     },
})

module.exports = mongoose.model('Task', TasksSchema) ;