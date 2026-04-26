<!DOCTYPE html>
<html>
<head>
  <title>AI Chatbot</title>
</head>
<body style="background:black; color:white; text-align:center;">

  <h1>🤖 My AI Chatbot</h1>

  <div id="chat" style="height:300px; overflow:auto; border:1px solid white; padding:10px;"></div>

  <input id="userInput" type="text" placeholder="Type message..." />
  <button onclick="sendMessage()">Send</button>

  <script>
    function sendMessage() {
      let input = document.getElementById("userInput").value;
      let chat = document.getElementById("chat");

      chat.innerHTML += "<p>You: " + input + "</p>";

      let reply = "I don't understand";

      if (input.toLowerCase().includes("hello")) {
        reply = "Hi 👋";
      } else if (input.toLowerCase().includes("name")) {
        reply = "I am your AI bot";
      } else if (input.toLowerCase().includes("how are you")) {
        reply = "I'm fine 😊";
      }

      chat.innerHTML += "<p>Bot: " + reply + "</p>";
    }
  </script>

</body>
</html>
