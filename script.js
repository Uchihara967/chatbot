'use strict';

const textArea = document.querySelector('#textArea');
const btn = document.querySelector('#btn');
const chatbox = document.querySelector('#chatbox');
const textInput = textArea.value.includes;

btn.addEventListener('click', () => {

    if(textArea.value === '') {
        return;
    }

    const botRespones = {
        'おはよう': 'おはよう',
        'こんにちは': 'こんにちは',
        'こんばんは': 'こんばんは',        
    }

    const userElment = document.createElement('div');
    userElment.classList.add('userMessage', 'userRight');
    userElment.innerText = textArea.value;
    chatbox.appendChild(userElment);

    let respones = 'おはよう、こんにちは、こんばんはのいずれかを入力してください';

    for(let key in botRespones) {
        if(textArea.value.includes(key)) {
            respones = botRespones[key];
            break;
        }
    }

    const botElment = document.createElement('div');
    botElment.classList.add('botMessage');
    botElment.innerText = respones;
    chatbox.appendChild(botElment);

    const keyframes = {
        opacity: [0, 1],
    };

    botElment.animate(keyframes, 2000);

    textArea.value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
});
