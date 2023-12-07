import Person from "../model/Person.js";

//CREATE Person
export const createPerson = async(req, res,next)=>{
    
    const newPerson = new Person(req.body)
    try{
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);

    }catch(err){
        next(err);
    }
}

//UPDATE Person
export const updatePerson = async(req, res,next)=>{
    try{
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedPerson);

    }catch(err){
        next(err);
    }
}

//DELETE Person
export const deletePerson = async(req, res,next)=>{
    try{
        await Person.findByIdAndDelete(req.params.id);
        res.status(200).json("Person has been deleted");

    }catch(err){
        next(err);
    }
}

//GET Person
export const getPerson = async(req, res,next)=>{
    try{
        const person =  await Person.findById(req.params.id);
         res.status(200).json(person);
 
     }catch(err){
        next(err);
     }
}


//GET ALL Person
export const getAllPersons = async(req, res,next)=>{

    try{
        const persons =  await Person.find();
         res.status(200).json(persons);
 
     }catch(err){
         next(err);
     }
}