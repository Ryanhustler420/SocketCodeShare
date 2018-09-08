var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
//task id will be automatically added so no need for make structure for that
// since we only need only __id
});

module.exports = mongoose.model('Task',taskSchema);
