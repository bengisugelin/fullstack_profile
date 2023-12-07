import mongoose from 'mongoose';
const { Schema } = mongoose;


// create Schema Object (bookSchema)
const PersonSchema = new mongoose.Schema({
    firstname: { 
      type: String, 
      required: true 
    },
    lastname: { 
      type: String, 
      required: true 
    },
    age: { 
      type: Number,
       required: true 
      }
  });


  export default mongoose.model("Person", PersonSchema);