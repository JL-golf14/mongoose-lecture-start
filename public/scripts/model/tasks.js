var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/phi');

mongoose.model(
  'Task',
  new Schema({
    "name": String,
    "status": {type: Boolean, default: false},
    "description": String
  },
{collection:'tasks'}
));

module.exports = mongoose.model('Task');
