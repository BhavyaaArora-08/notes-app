const yargs = require("yargs");
const notes = require("./notes");
const chalk = require("chalk");

yargs.version("1.1.0");

//add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    //title and body
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    //title and body
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//read
yargs.command({
  command: "read",
  describe: "reads note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

//list
yargs.command({
  command: "list",
  describe: "lists notes",

  handler: function () {
    console.log(chalk.bgRed.black("YOUR NOTES"));
    notes.listNotes();
    console.log("hey");
  },
});

yargs.parse();
// console.log(yargs.argv);
