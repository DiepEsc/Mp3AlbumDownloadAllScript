// ==UserScript==
// @name         NhacVuiDownAll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /http:\/\/nhac\.vui\.vn/[^.]*\-a[a-z0-9]*.html/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var link='https://rawgit.com/DiepEsc/Mp3AlbumDownloadAllScript/master/nhacvuiall_full.js';
    var e=document.createElement('script');
    e.setAttribute('src',link);
    e.setAttribute('type','text/javascript');
    document.head.appendChild(e);
})();