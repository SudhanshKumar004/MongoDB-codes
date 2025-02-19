const express = require("express")
const app = express();
const routes = require("./routes/routes")
const cors = require("cors")


app.use(cors());
app.use("/employee" , routes)

app.listen(8080,()=>{
    console.log("Server running on 8080 port");
})