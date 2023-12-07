import Person from "../model/Person.js";
import express from "express";
import { getPerson, getAllPersons, createPerson,deletePerson,updatePerson } from "../controller/personController.js";



const router = express.Router();


// CREATE
router.post("/add", createPerson);
//UPDATE

router.put("/update/:id",  updatePerson);

//DELETE

router.delete("/delete/:id",  deletePerson);

//GET
router.get("/:id", getPerson);

//GET ALL

router.get("/", getAllPersons);


export default router