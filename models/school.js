var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({    
    Name: { type: 'String', required: true },
    Adress: { type: 'String', },
    Contacts: { type: 'String' }
});

var School = mongoose.model('School', SchoolSchema);
module.exports = School;