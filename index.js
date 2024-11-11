const express = require("express");
const cors = require("cors");
const fs = require("fs");


const app = express();
app.use(cors());


app.get("/find", (req, res) =>{

let num = req.query.number;
let n = parseFloat(num);
let r = n**0.5;
let ans = "square root =" +r.toFixed(2);
let log ="request for" +num+""+new Date().toString() + "\n";
fs.appendFile("result.txt", log, () => {}); 


res.json({"msg": ans});
});

app.listen(9000, ()=>{console.log("ready @ 9000")});