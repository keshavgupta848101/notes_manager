const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed');
app.use(express.urlencoded({extended:false}));
const notesInfo = require('./models/notes');

const methodOverride = require('method-override')
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost:27017/NOTES',{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>{
    console.log("Db connected");
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render("index");
})
// seedDb()

// Show all notes on /notes
app.get('/notes', async(req,res)=>{
   const foundData = await notesInfo.find({})
   res.render('allNotes',{foundData});
})

// Show form to edit
app.get('/notes/new', (req,res)=>{
    res.render('new')
})

// Feed DB with form Data.
app.post('/notes', async(req,res)=>{
    const feedData = await notesInfo.create(req.body);
    res.redirect('/notes');
})

// Show particular NOTES on single page
app.get('/notes/:id', async(req,res)=>{
    const finddata = await notesInfo.findById(req.params.id)
    res.render('show', {finddata})
})

// Show which notes to Edit
app.get('/notes/:id/edit', async(req,res)=>{
    const finddata = await notesInfo.findById(req.params.id);
    res.render('edit',{finddata})
})

// Edit notes route
app.patch('/notes/:id',async(req,res)=>{
    const finddata = await notesInfo.findByIdAndUpdate(req.params.id,req.body)
    res.redirect(`/notes/${req.params.id}`);

})

// Delete Notes
app.delete('/notes/:id', async(req,res)=>{
    await notesInfo.findByIdAndDelete(req.params.id)
    res.redirect(`/notes`);
})

// App running on port
app.listen(3030, ()=>{
    console.log("Server is running on port 3030");
})