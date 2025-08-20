import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    // res.status(200).send("You Got fetched Data");
    try{
       const note1 = await Note.find().sort({createdAt:-1});
       res.status(200).json(note1);
    }catch(err){
       console.log("Error in getAllNotes",err);
       res.status(500).json({message:"internal server error"})
    }
};

export const getNotesById = async (req, res) => {
    try{
       const note1 = await Note.findOne({_id:req.params.id})
       if(note1){
       res.status(200).json(note1);
       }else{
        res.status(404).json({message:"Not Not Found"})
       }
    }catch(err){
       console.log("Error in getAllNotes",err);
       res.status(500).json({message:"internal server error"})
    }
};


export const createNote = async (req, res) => {
    try{
    const {title,content} = req.body;
    const newNote = new Note({title,content});
   // const newNote = new Note(req.body);
    await newNote.save();
     res.status(201).json({message:"Note is created Successfully"});
    }catch(err){
       console.log("Error in createNotes",err);
       res.status(500).json({message:"internal server error"});
    }
};

export const createMultipleNotes = async (req, res) => {
    try{
    let insertedNotes = await Note.insertMany(req.body);

     res.status(201).json({message:"Notes are created Successfully"});
    }catch(err){
       console.log("Error in createNotes",err);
       res.status(500).json({message:"internal server error"});
    }
};


export const updateNotes = async (req, res) => {
    try{
    //  let updatedNote = await Note.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
    
    let updatedNote =  await Note.updateOne({_id:req.params.id},req.body);
    res.status(200).json({message:"Node is updated successfully"})
    }catch(err){
        console.log("Error in updatedNotes",err);
       res.status(500).json({message:"internal server error"});
    }
};

export const deleteNotes = async(req, res) => {
    try{
    //   let deleteNote =  await Note.deleteOne({_id:req.params.id})
      let deletedNote = await Note.findOneAndDelete({_id:req.params.id});
      res.status(200).json({message:"Node is deleted successfully"})
    }catch(err){
 console.log("Error in deletedNotes",err);
       res.status(500).json({message:"internal server error"});
    }
};
