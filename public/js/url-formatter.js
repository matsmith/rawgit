/*global cdnDomain, devDomain*/
(function (doc) {

"use strict";

var protocol = 'http';

var REGEX_REPO_URL = /^(https?):\/\/gitlist\.healthmedia\.com\/(.+?)\/(?:(?:blob|raw)\/)?(.+?\/.+)/i;

var devEl  = doc.getElementById('url-dev');
var urlEl  = doc.getElementById('url');

urlEl.addEventListener('input', function () {
    var url = urlEl.value.trim();

    if (REGEX_REPO_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = encodeURI(url.replace(REGEX_REPO_URL, protocol+'://' + devDomain + '/$2/raw/$3'));

        devEl.classList.add('valid');
    } else {
        console.log('invalid url');
        urlEl.classList.remove('valid');

        if (url.length) {
            urlEl.classList.add('invalid');
        } else {
            urlEl.classList.remove('invalid');
        }

        devEl.value  = '';

        devEl.classList.remove('valid');
    }
}, false);

devEl.addEventListener('focus', onFocus);

function onFocus(e) {
    setTimeout(function () {
        e.target.select();
    }, 1);
}

}(document));
