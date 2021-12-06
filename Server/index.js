const {WebSocketServer} = require('ws');
const server = new WebSocketServer({port : 8080});


server.on('listening',()=>{
    console.log("Server is listening"); 
})

server.on('connection', (socket, req) => {
    console.log("Connection established with ", req.headers['sec-websocket-key'])
    socket.on('message', message =>{
            server.clients.forEach(client=>{
                client.send(String(message));
            })
        })
})

server.on('Close', ()=>{
    console.log("Server is closed");
})

server.on('error', (err)=>{
    console.log("Server is facing an error : ", err);
})