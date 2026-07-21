function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    // زێدەکرنا پەیاما بکارئینەری بۆ چاتی
    const userMsgDiv = document.createElement('div');
    userMsgDiv.classList.add('message', 'user-message');
    userMsgDiv.textContent = messageText;
    chatBox.appendChild(userMsgDiv);

    // پاوژەکردنا جهێ نڤیسینێ
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // بەرسڤا دەمەکی یا بۆتی (ل ڤێرە تو دشێی AI API یا خۆ ببەستی)
    setTimeout(() => {
        const botMsgDiv = document.createElement('div');
        botMsgDiv.classList.add('message', 'bot-message');
        botMsgDiv.textContent = "مە پەیاما تە وەرگرت: " + messageText;
        chatBox.appendChild(botMsgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// رێگەدان ب دوگمەیا Enter
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
