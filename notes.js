const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}
 const addNote = (title, body) => {
     const notes = loadNotes()
     const duplicateNote = notes.find( (note) =>{
         return note.title === title
     })

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body}
            )
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added'))
     } else {
         console.log(chalk.red.inverse('Note title taken!'))
     }
    

 }

 const saveNotes = (notes)=>{
     fs.writeFileSync("notes.json", JSON.stringify(notes) )
 }

 const loadNotes = () =>{
     try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
     } catch (error) {
         return []     
     }
 }

 const removeNote = function(title){
    const notes = loadNotes()
    const restNotes = notes.filter( (note) =>{
        return note.title !== title
    })
    if(notes.length === restNotes.length) {
        console.log(chalk.red.inverse('Note not found'))
        
    } else {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(restNotes)
    }

    
 }

 const listNotes = function(){
    console.log(chalk.inverse('Listing your notes'))

    loadNotes().forEach(element => console.log(element));


 }

 const readNote = function(title){
    const notes = loadNotes()
    const foundNote = notes.find( (note) =>{
        if (note.title === title) return note
    })
    
    if(foundNote) {
        console.log(chalk.green.inverse('Note found:'))
        console.log(chalk.inverse(foundNote.title))
        console.log(foundNote.body)


        
    } else {
        console.log(chalk.red.inverse('Note not found'))

    }


 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}