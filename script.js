const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

let isAnimating = true;

animatedBox.addEventListener('click', () => {
    if (isAnimating) {
        animatedBox.style.animation = 'none';
    } else {
        animatedBox.style.animation = 'pulse 2s infinite';
    }
    isAnimating = !isAnimating;
});

function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    
    chatContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function typeMessage(message, element) {
    let index = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
        if (index < message.length) {
            element.textContent += message[index];
            index++;
        } else {
            clearInterval(typing);
        }
    }, 30);
}
