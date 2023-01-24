const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const { NotBeforeError } = require("jsonwebtoken");

//Routr 1 : get all  the notes using GET "/api/notes/getnotes". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});
//Route 2 : add a new notes using post "/api/notes/addnote". login required
router.post(
  "/addnote",
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description  length must be >5").isLength({ min: 5 }),
  ],
  fetchuser,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal error occured");
    }
  }
);
//Route no-3  updating an existing note using put
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() != req.user.id) {
      return res.status(401).send("not allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});
//Route no-4  deleting an existing note using delete
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    //allow deltiion only if user is authorized
    if (note.user.toString() != req.user.id) {
      return res.status(401).send("not allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

module.exports = router;
