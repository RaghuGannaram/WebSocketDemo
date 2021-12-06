const socket = new WebSocket('ws://localhost:8080');


socket.onopen = ()=>{
    console.log("Socket opened");
}

socket.onmessage = ('message', ({data}) => {
    document.getElementById("client-chat").innerHTML += `<p>${data}</p>`;
    console.log(data);
})


document.querySelector('button').onclick = () => {
    socket.send(document.getElementById('userInput').value);
    document.getElementById('userInput').value ="";
}
