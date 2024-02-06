const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res)=> {
 return res.send("Hello World!");
})

app.listen(PORT, ()=>{
 console.log(`Server Running On Port ${PORT}`);
})
