const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { string, argv } = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
        ,
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Title: ' + argv.title +' Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)

    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note removed',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function () {
        console.log('Removing the note with title: ' + argv.title)
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()
