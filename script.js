let nickname = "";

function startChat() {
  const input = document.getElementById("nickname");
  if (input.value.trim()) {
    nickname = input.value.trim();
    document.getElementById("nickname-screen").style.display = "none";
    document.getElementById("chat-screen").style.display = "flex";
    document.getElementById("message-input").focus();
  }
}

function sendMessage(event) {
  if (event.key === "Enter") {
    const input = event.target;
    const msg = input.value.trim();
    if (msg) {
      const chatBox = document.getElementById("chat-box");
      const messageElement = document.createElement("div");
      messageElement.textContent = `<${nickname}>> ${msg}`;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";
    }
  }
}
