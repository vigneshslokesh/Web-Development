const fs = require("fs");

// fs.writeFile("message.txt","Hello from NodeJS",(err) => {
//     if (err) throw err
//     console.log("The file has been saved.")
// });

// fs.readFile("./message.txt","utf-8", (err,data) =>{
//     if (err) throw err;
//     console.log(data);
// });

fs.writeFile("new_file.txt","www.google.com",(err)=>{
    if (err) throw err;
    console.log("File created.")
});

fs.readFile("./new_file.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data)
});