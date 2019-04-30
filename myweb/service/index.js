const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve('../')+ '/dist'))

app.listen(8000,()=>{
    console.log("服务已启动~")
});