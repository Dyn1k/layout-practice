const chatButton = document.querySelectorAll('.button__chat');
const modalChat = document.getElementById('modalChat');
const sideBar = document.querySelector('.side-bar');

for (let i = 0; i < chatButton.length; i++) {
    chatButton[i].addEventListener('click', function () {
        if (document.documentElement.clientWidth < 1366) {
            sideBar.style.display = 'none';
        }
        modalChat.style.display = 'flex';
    })
}

const closeChatButton = document.getElementById('closeChat');

closeChatButton.addEventListener('click', function () {
    modalChat.style.display = 'none';
})

document.addEventListener('click', function (evt) {
    if (!modalChat.contains(evt.target) && !chatButton[1].contains(evt.target) && !chatButton[0].contains(evt.target)) {
        modalChat.style.display = 'none';
    }
})

const callButton = document.querySelectorAll('.button__call');
const callChat = document.getElementById('modalCall');

for (let i = 0; i < callButton.length; i++) {
    callButton[i].addEventListener('click', function () {
        if (document.documentElement.clientWidth < 1366) {
            sideBar.style.display = 'none';
        }
        callChat.style.display = 'flex';
    })
}

const closeCallButton = document.getElementById('closeCall');

closeCallButton.addEventListener('click', function () {
    callChat.style.display = 'none';
})

document.addEventListener('click', function (evt) {
    if (!callChat.contains(evt.target) && !callButton[1].contains(evt.target) && !callButton[0].contains(evt.target)) {
        callChat.style.display = 'none';
    }
})

