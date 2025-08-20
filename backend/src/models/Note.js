import mongoose from "mongoose";

const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},
    {
        timestamps: true
    }
);

const Note= mongoose.model("Note1",noteSchema);

export default Note;