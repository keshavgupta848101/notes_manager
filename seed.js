const mongoose = require('mongoose')
const notesInfo = require('./models/notes');

const fakeNotes = [
    {
        heading: "Javascript",
        notes: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
        ,author: "Keshav"
    },
    {
        heading: "What is your name?",
        notes: "DUMMY DATA My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav My name is keshav  "
        ,author: "Madhav"
    },
    {
        heading: "This is Blue",
        notes: "DUMMY DATA Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue Blue "
        ,author: "Manu"
    }
]

const seedDb =  async()=>{
      await notesInfo.insertMany(fakeNotes);
      console.log("DB SEEDED"); 
}

module.exports = seedDb;