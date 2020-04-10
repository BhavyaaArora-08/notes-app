const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const dupNote = notes.filter(function (note) {
    return note.title == title;
  });

  if (dupNote.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("note added successfully"));
  } else {
    console.log(chalk.red.inverse("note title taken"));
  }
};

const readNotes = function () {};

const removeNote = function (title) {
  let notes = loadNotes();
  const l1 = notes.length;
  notes = notes.filter(function (note) {
    return note.title != title;
  });
  const l2 = notes.length;
  if (l1 == l2) {
    console.log(chalk.bgRed.black("No such note was found!"));
  } else {
    console.log(chalk.bgGreen.black("note was deleted"));
    saveNotes(notes);
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.JSON", dataJSON);
};

const listNotes = function () {
  console.log("i am callled");

  const notes = loadNotes();
  console.log("title: " + " body: ");
  notes.forEach((note) => {
    console.log("title: " + note.title + " body: " + note.body);
  });
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
