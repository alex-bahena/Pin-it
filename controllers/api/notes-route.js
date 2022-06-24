const express = require("express");// require express
const fs = require("fs"); // require filesystem also known as fs (part of node)

//we are defining a variable objectArray and giving it the value of the content within our json file, we then parse it so that it returns a javascript object. 
let objectArray = JSON.parse(fs.readFileSync("./Develop/db/db.json", "utf-8", (err)=> {
    if(err) throw err;
}));

app.get("/", (req, res) => {
    console.log("here")
    res.sendFile(path.join(__dirname + "/Develop/public/index.html"))
})

app.get("/notes", (req, res)  => {
    res.sendFile(path.join(__dirname + "/Develop/public/notes.html" ))
});

app.get("/notes", (req, res) => {
    return res.json(objectArray);
});

app.post("/notes", (req, res) => {
    let newNote = {title: req.body.title, text: req.body.text} //our newNote will contain an array with 2 parameters
    newNote.id = objectArray.length.toString(); //converts it to a string
  
    objectArray.push(newNote); //pushes the newNote into the objectArray 
  
    fs.writeFile("./db/db.json", JSON.stringify(objectArray), //writes in the file objectArray as a string within said array
    (err)=>{
      if(err) throw err;
    });
     res.json(objectArray)
});
  
  app.delete("/api/notes/:id",  (req, res) => {
    let idSelected = JSON.parse(req.params.id);//the selected id will depend on the note that the user clicked on
  
    objectArray = objectArray.filter((e) => { //filters out the objectArray and returns it without the id that was selected 
      return e.id != idSelected;
    });
  
    objectArray.forEach((val, index) => { //assigns each string within the array a new id
      val.id = index.toString();
    });
  
    //writes on the json file serverside the new values without the selected id that is deleted. and then turns the objectArray into a string so that it displays as one. and we can get the new values without the deleted ones.
    fs.writeFile("./db/db.json", JSON.stringify(objectArray), (err) => {
      if(err) 
      throw err;
    });
    res.end();
})