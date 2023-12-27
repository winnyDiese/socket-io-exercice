var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

io.on("connection",(socket)=>{
    console.log("a user is connected")
    socket.on("disconnect",()=>{
        console.log("A user is disconnect")   
    })

    socket.on("chat message",(msg)=>{
        console.log("message recu : "+msg)   
    })
})

http.listen(3000, function(){
    console.log("Server running on 3000 ")   
})