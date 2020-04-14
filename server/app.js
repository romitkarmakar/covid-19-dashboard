require('dotenv').config()

var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get('/', function(req, res) {
  res.send("Hello world")
})
io.on("connection", function (socket) {
  console.log("a user connected");

  socket.on('message', function(msg){
    console.log('message: ' + msg);
    socket.emit('reply', "Event from server");
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT, function () {
  console.log(`listening on *:${process.env.PORT}`);
});
