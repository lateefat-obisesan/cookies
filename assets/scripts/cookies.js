'use strict';

const askDialog = document.getElementById('ask-dialog');
const settingsDialog = document.getElementById('settings-dialog');
const acceptBtn = document.getElementById('accept');
const settingsBtn = document.getElementById('settings');
const saveBtn =document.getElementById('save-settings');

const LIFETIME = 20;

function setCookie(name, value, seconds = 20) {
    document.cookie = `${name}=${value}; max-age=${seconds}; path=/`;
};

const getCookie = (name) => {
    if (!document.cookie) return null;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        const [key, value] = trimmedCookie.split('=');
        if (decodeURIComponent(key) === name) {
                return decodeURIComponent(value);
        }
    }
    return null;
};