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

function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';

    return 'Unknown';
}

function getOSName() {
    const platform = navigator.platform;
    if (platform.includes('Win')) return 'Windows';
    if (platform.includes('Mac')) return 'MacOS';
    if (platform.includes('Linux')) return 'Linux';

    return 'Unknown';
}

function acceptAllCookies() {
    setCookie('browser', getBrowserName());
    setCookie('os', getOSName());
    setCookie('screenWidth', screen.width);
    setCookie('screenHeight', screen.height); 
    setCookie('cookieConsent', 'true');

    askDialog.close();
}

function savePreferences() {
    if (document.getElementById('browser-cookie').checked)
        setCookie('browser', getBrowserName());

    if (document.getElementById('os-cookie').checked)
        setCookie('os', getOSName());

    if (document.getElementById('screen-width-cookie').checked)
        setCookie('screenWidth', screen.width);

    if (document.getElementById('screen-height-cookie').checked)
        setCookie('screenHeight', screen.height);

    setCookie('cookieConsent', 'true');

    settingsDialog.close();
}

acceptBtn.addEventListener('click', acceptAllCookies);

settingsBtn.addEventListener('click', () => {
    askDialog.close();
    settingsDialog.showModal();
});

saveBtn.addEventListener('click', savePreferences);

window.addEventListener('load', () => {
    if (!navigator.cookieEnabled) return;

    if (!getCookie('cookieConsent')) {
        setTimeout(() => {
            askDialog.showModal();
        }, 1200);
    }
});