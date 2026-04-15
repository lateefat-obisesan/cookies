'use strict';

const askDialog = document.getElementById('ask-dialog');
const settingsDialog = document.getElementById('settings-dialog');
const acceptBtn = document.getElementById('accept');
const settingsBtn = document.getElementById('settings');
const saveBtn =document.getElementById('save-settings');

function setCookie(name, value, seconds = 20) {
    document.cookie = `${name}=${value}; max-age=${seconds}; path=/`;
}