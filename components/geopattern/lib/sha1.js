/*
https://github.com/creationix/git-sha1/blob/master/git-sha1.js

The MIT License (MIT)

Copyright (c) 2013 Tim Caswell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";function create(){function r(){for(var r=16;80>r;r++){var t=d[r-3]^d[r-8]^d[r-14]^d[r-16];d[r]=t<<1|t>>>31}var f,n,e=a,o=u,s=i,p=c,h=v;for(r=0;80>r;r++){20>r?(f=p^o&(s^p),n=1518500249):40>r?(f=o^s^p,n=1859775393):60>r?(f=o&s|p&(o|s),n=2400959708):(f=o^s^p,n=3395469782);var l=(e<<5|e>>>27)+f+h+n+(0|d[r]);h=p,p=s,s=o<<30|o>>>2,o=e,e=l}for(a=a+e|0,u=u+o|0,i=i+s|0,c=c+p|0,v=v+h|0,g=0,r=0;16>r;r++)d[r]=0}function t(t){d[g]|=(255&t)<<s,s?s-=8:(g++,s=24),16===g&&r()}function f(r){var f=r.length;p+=8*f;for(var n=0;f>n;n++)t(r.charCodeAt(n))}function n(r){if("string"==typeof r)return f(r);var n=r.length;p+=8*n;for(var e=0;n>e;e++)t(r[e])}function e(r){for(var t="",f=28;f>=0;f-=4)t+=(r>>f&15).toString(16);return t}function o(){t(128),(g>14||14===g&&24>s)&&r(),g=14,s=24,t(0),t(0),t(p>0xffffffffff?p/1099511627776:0),t(p>4294967295?p/4294967296:0);for(var f=24;f>=0;f-=8)t(p>>f);return e(a)+e(u)+e(i)+e(c)+e(v)}var a=1732584193,u=4023233417,i=2562383102,c=271733878,v=3285377520,d=new Uint32Array(80),g=0,s=24,p=0;return{update:n,digest:o}}module.exports=function(r){if(void 0===r)return create();var t=create();return t.update(r),t.digest()};