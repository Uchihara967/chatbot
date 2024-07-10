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
        '乃木坂': '弓木奈於',
        '櫻坂': '井上梨名',
        '日向坂': '宮地すみれ',        
    }

    const userElment = document.createElement('div');
    userElment.classList.add('userMessage', 'userRight');
    userElment.innerText = textArea.value;
    chatbox.appendChild(userElment);

    let respones = '坂道グループを入力して下さい';

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
