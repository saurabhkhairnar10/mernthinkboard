import express from "express";
import { getAllNotes,createNote,createMultipleNotes,updateNotes,deleteNotes,getNotesById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/notes",getAllNotes);

router.get("/note/:id",getNotesById);

router.post("/note",createNote);

router.post("/multipleNotes",createMultipleNotes);

router.put("/note/:id",updateNotes);

router.delete("/note/:id",deleteNotes);

export default router;