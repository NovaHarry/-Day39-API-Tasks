// requiring express

const express = require("express");

// requiring fs(file system access)

const fs = require("fs");

// requiring path for relative path

const path = require("path");

// initiating express function

const app = express();

// joining current file path using dirname with foldername Timestamps

const dirPath = path.join(__dirname, "Timestamps");

//using api's

app.get("/",(req, res)=>{
    let time = new Date();

    const content = `Current date and time is : ${time.toUTCString().slice(0, -4)}`;

    // creating a file with current date and time

    fs.writeFileSync(`${dirPath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File written successfully");
        }
    })

    //sending a created file

    res.sendFile(path.join(__dirname,"Timestamps/date-time.txt"))
})

// set server to listen under port : 5000

app.listen(5000, ()=>{
    console.log("working");
})