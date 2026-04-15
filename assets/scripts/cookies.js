'use strict';

const askDialog = document.getElementById('ask-dialog');
const settingsDialog = document.getElementById('settings-dialog');
const acceptBtn = document.getElementById('accept');
const settingsBtn = document.getElementById('settings');
const saveBtn =document.getElementById('save-settings');

function setCookie(name, value, seconds = 20) {
    document.cookie = `${name}=${value}; max-age=${seconds}; path=/`;
};

const getCookie = (name) => {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
};