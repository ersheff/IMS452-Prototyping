// create socket object
const socket = io();


// handle outgoing chat
const chatInput = document.getElementById("chat-input");

chatInput.addEventListener("change", event => {
  let message = event.target.value;
  event.target.value = "";
  socket.emit("chat-to-server", message);
});

// handle incoming chat
socket.on("chat-from-server", message => {
  let newMessageElement = document.createElement("p");
  newMessageElement.innerText = message; 
  document.body.appendChild(newMessageElement);
});


// handle outgoing like
const likeButton = document.getElementById("like-button");

likeButton.addEventListener("click", () => {
  socket.emit("like");
});

// handle incoming like tally
socket.on("like-tally", likes => {
  let likeOutput = document.getElementById("like-output");
  likeOutput.innerText = likes; 
});