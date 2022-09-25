const fs = require('fs')

let p = fs.readFile("/Users/LaZitouna/Desktop/Omrane formation/checkpointNode/welcome.txt","utf-8",(err,data)=>{
    if (err) throw err
    else console.log(data)
})