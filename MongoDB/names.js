const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dateObject = new Date();

let date = dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear();

const nameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: date
    }
}); 

mongoose.connect("mongodb+srv://Ramirez:tugapro1@cluster0-7joux.mongodb.net/Cluster0?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
        .then(r => console.log("Conectado a mongodb"))
        .catch(e => console.log(e));

module.exports = mongoose.model("name", nameSchema);