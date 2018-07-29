const express=require('express');
const path=require('path');
const http=require('http');
const socketIO=require('socket.io');
const port=process.env.PORT||3000;

const publicPath=path.join(__dirname,'../public');
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');
});
io.on('disconnect',(socket)=>{
  console.log('New user disconnected');
});


server.listen(port);
