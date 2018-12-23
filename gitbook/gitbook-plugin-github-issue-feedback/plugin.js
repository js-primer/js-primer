!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=40)}([function(e,t,r){"use strict";function n(e){return i.test("number"==typeof e?o(e):e.charAt(0))}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-whitespace-character
 * @fileoverview Check if a character is a whitespace character.
 */
e.exports=n;var o=String.fromCharCode,i=/\s/},function(e,t,r){"use strict";function n(e,t){if("string"!=typeof e)throw new TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var r=e.length*t;if(o!==e||void 0===o)o=e,i="";else if(i.length>=r)return i.substr(0,r);for(;r>i.length&&t>1;)1&t&&(i+=e),t>>=1,e+=e;return i+=e,i=i.substr(0,r)}/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var o,i="";e.exports=n},function(e,t){function r(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)n.call(r,o)&&(e[o]=r[o])}return e}e.exports=r;var n=Object.prototype.hasOwnProperty},function(e,t,r){var n=r(52);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},function(e,t){function r(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=r,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t,r){"use strict";function n(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=48&&t<=57}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-decimal
 * @fileoverview Check if a character is decimal.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r,n={};t||(t={});for(r in T)n[r]=null==t[r]?T[r]:t[r];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),o(e,n)}function o(e,t){function r(){return{line:ye,column:be,offset:me+(he.offset||0)}}function n(e,t){var n=r();n.column+=t,n.offset+=t,ue.call(pe,G[e],n,e)}function o(t){return e.charAt(t)}function f(){xe&&(we.push(xe),se&&se.call(le,xe,{start:te,end:r()}),xe=O)}var p,T,H,F,M,$,Z,J,Y,Q,K,W,X,ee,te,re,ne,oe,ie=t.additional,ae=t.nonTerminated,se=t.text,ce=t.reference,ue=t.warning,le=t.textContext,fe=t.referenceContext,pe=t.warningContext,he=t.position,de=t.indent||[],ge=e.length,me=0,ve=-1,be=he.column||1,ye=he.line||1,xe=O,we=[];for(te=r(),Z=ue?n:g,me--,ge++;++me<ge;)if(F===w&&(be=de[ve]||1),(F=o(me))!==b)F===w&&(ye++,ve++,be=0),F?(xe+=F,be++):f();else{if(($=o(me+1))===S||$===w||$===v||$===q||$===E||$===b||$===O||ie&&$===ie){xe+=F,be++;continue}for(W=K=oe=me+1,$!==y?X=j:(oe=++K,$=o(oe),$===A||$===k?(X=R,oe=++K):X=C),p=Q=H=O,ee=D[X],oe--;++oe<ge&&($=o(oe),ee($));)H+=$,X===j&&s(u,H)&&(p=H,Q=u[H]);T=o(oe)===x,T&&(oe++,X===j&&s(c,H)&&(p=H,Q=c[H])),ne=1+oe-W,(T||ae)&&(H?X===j?(T&&!Q?Z(z,1):(p!==H&&(oe=K+p.length,ne=1+oe-K,T=!1),T||(J=p?N:P,t.attribute?($=o(oe),$===L?(Z(J,ne),Q=null):h($)?Q=null:Z(J,ne)):Z(J,ne))),M=Q):(T||Z(B,ne),M=parseInt(H,I[X]),i(M)?(Z(V,ne),M=m):M in l?(Z(_,ne),M=l[M]):(Y=O,a(M)&&Z(_,ne),M>65535&&(M-=65536,Y+=d(M>>>10|55296),M=56320|1023&M),M=Y+d(M))):X!==j&&Z(U,ne)),M?(f(),te=r(),me=oe-1,be+=oe-W+1,we.push(M),re=r(),re.offset++,ce&&ce.call(fe,M,{start:te,end:re},e.slice(W-1,oe)),te=re):(H=e.slice(W-1,oe),xe+=H,be+=H.length,me=oe-1)}return we.join(O)}function i(e){return e>=55296&&e<=57343||e>1114111}function a(e){return e>=1&&e<=8||11===e||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module parse-entities
 * @fileoverview Parse HTML character references: fast, spec-compliant,
 *   positional information.
 */
var s=r(3),c=r(45),u=r(16),l=r(46),f=r(5),p=r(19),h=r(18);e.exports=n;var d=String.fromCharCode,g=Function.prototype,m="�",v="\f",b="&",y="#",x=";",w="\n",A="x",k="X",q=" ",E="<",L="=",O="",S="\t",T={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},j="named",R="hexadecimal",C="decimal",I={};I[R]=16,I[C]=10;var D={};D[j]=h,D[C]=f,D[R]=p;var N=1,B=2,P=3,U=4,z=5,_=6,V=7,H="Numeric character references",F=" must be terminated by a semicolon",M=" cannot be empty",G={};G[N]="Named character references"+F,G[B]=H+F,G[P]="Named character references"+M,G[U]=H+M,G[z]="Named character references must be known",G[_]=H+" cannot be disallowed",G[V]=H+" cannot be outside the permissible Unicode range"},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}for(var u=[],c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=i(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(8))},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){g&&h&&(g=!1,h.length?d=h.concat(d):m=-1,d.length&&s())}function s(){if(!g){var e=o(a);g=!0;for(var t=d.length;t;){for(h=d,d=[];++m<t;)h&&h[m].run();m=-1,t=d.length}h=null,g=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(e){f=n}}();var h,d=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new c(e,t)),1!==d.length||g||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,r){"use strict";function n(e,t,r,n){for(var o,i,a,s,c,u,l=["pedantic","commonmark"],f=l.length,p=e.length,h=-1;++h<p;){for(o=e[h],i=o[1]||{},a=o[0],s=-1,u=!1;++s<f;)if(c=l[s],void 0!==i[c]&&i[c]!==r.options[c]){u=!0;break}if(!u&&t[a].apply(r,n))return!0}return!1}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return o(e).toLowerCase()}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:normalize
 * @fileoverview Normalize an identifier.
 */
var o=r(47);e.exports=n},function(e,t,r){"use strict";function n(e){var t=-1===e.indexOf('"')?'"':"'";return t+e+t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enclose-title
 * @fileoverview Quote a `title` the best way possible.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return t||0===e.length||i.test(e)||o(e,"(")!==o(e,")")?"<"+e+">":e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enclose-uri
 * @fileoverview Wrap `url` in angle brackets when needed.
 */
var o=r(43);e.exports=n;var i=/\s/},function(e,t,r){"use strict";var n=r(148).default;e.exports=n},function(e,t,r){"use strict";function n(e){for(var t=String(e),r=t.length;t.charAt(--r)===o;);return t.slice(0,r+1)}e.exports=n;var o="\n"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ASTNodeTypes={Document:"Document",Paragraph:"Paragraph",BlockQuote:"BlockQuote",ListItem:"ListItem",List:"List",Header:"Header",CodeBlock:"CodeBlock",HtmlBlock:"HtmlBlock",ReferenceDef:"ReferenceDef",HorizontalRule:"HorizontalRule",Comment:"Comment",Str:"Str",Break:"Break",Emphasis:"Emphasis",Strong:"Strong",Html:"Html",Link:"Link",Image:"Image",Code:"Code"}},function(e,t){e.exports={AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"}},function(e,t,r){"use strict";function n(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphabetical
 * @fileoverview Check if a character is alphabetical.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return o(e)||i(e)}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphanumerical
 * @fileoverview Check if a character is alphanumerical.
 */
var o=r(17),i=r(5);e.exports=n},function(e,t,r){"use strict";function n(e){var t="string"==typeof e?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-hexadecimal
 * @fileoverview Check if a character is hexadecimal.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r,n,o=0,i=0;if("string"!=typeof t||1!==t.length)throw new Error("Expected character");for(e=String(e),r=n=e.indexOf(t);-1!==n;)o++,n===r?o>i&&(i=o):o=1,r=n+1,n=e.indexOf(t,r);return i}e.exports=n},function(e,t,r){"use strict";function n(e){var t=e||{};return t.commonmark?a:t.gfm?i:o}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module markdown-escapes
 * @fileoverview List of escapable characters in markdown.
 */
e.exports=n;var o=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=o.concat(["~","|"]),a=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);n.default=o,n.gfm=i,n.commonmark=a},function(e,t,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:defaults
 * @fileoverview Default options for `parse`.
 */
e.exports={position:!0,gfm:!0,yaml:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:r(65),breaks:!1}},function(e,t,r){"use strict";function n(e,t){var r=e.indexOf("[",t),n=e.indexOf("![",t);return-1===n?r:r<n?r:n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:link
 * @fileoverview Locate a link.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return e.indexOf("<",t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:tag
 * @fileoverview Locate a tag.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){for(var t,r=0,n=0,i=e.charAt(r),a={};i in o;)t=o[i],n+=t,t>1&&(n=Math.floor(n/t)*t),a[n]=r,i=e.charAt(++r);return{indent:n,stops:a}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */
e.exports=n;var o={" ":1,"\t":4}},function(e,t,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:html
 * @fileoverview HTML regexes.
 */
var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",o="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";t.openCloseTag=new RegExp("^(?:"+n+"|"+o+")"),t.tag=new RegExp("^(?:"+n+"|"+o+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},function(e,t,r){"use strict";/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:defaults
 * @fileoverview Default options for `stringify`.
 */
e.exports={gfm:!0,commonmark:!1,pedantic:!1,entities:"false",setext:!1,closeAtx:!1,looseTable:!1,spacedTable:!0,paddedTable:!0,incrementListMarker:!0,fences:!1,fence:"`",bullet:"-",listItemIndent:"tab",rule:"*",ruleSpaces:!0,ruleRepetition:3,strong:"*",emphasis:"_"}},function(e,t,r){"use strict";function n(e){var t;return"&"!==e.charAt(0)?0:(t=e.split("&",2).join("&"),t.length-o(t).length)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:entity-prefix-length
 * @fileoverview Encode based on the identifier.
 */
var o=r(6);e.exports=n},function(e,t,r){"use strict";function n(e){var t=e.referenceType,r="full"===t?e.identifier:"";return"shortcut"===t?r:"["+r+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:label
 * @fileoverview Stringify a reference label.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r,n;for(e=e.split("\n"),r=e.length,n=o(" ",t*i);r--;)0!==e[r].length&&(e[r]=n+e[r]);return e.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:pad
 * @fileoverview Pad a given value.
 */
var o=r(1);e.exports=n;var i=4},function(e,t,r){"use strict";function n(e){return e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:returner
 * @fileoverview Return the given value.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t,r){return function(){var n=r||this,o=n[e];return n[e]=!t,function(){n[e]=o}}}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module state-toggle
 * @fileoverview Enter/exit a state.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){function t(t){return e.apply(this,t)}function r(){return this instanceof r?e.apply(this,arguments):new t(arguments)}var n,a,s;i(r,e),i(t,r),n=r.prototype;for(a in n)(s=n[a])&&"object"==typeof s&&(n[a]="concat"in s?s.concat():o(s));return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unherit
 * @fileoverview Create a custom constructor which can be modified
 *   without affecting the original class.
 */
var o=r(2),i=r(53);e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n){function o(e,n,o){var a;return n=n||(o?0:null),t&&e.type!==t||(a=r(e,n,o||null)),e.children&&!1!==a?i(e.children,e):a}function i(e,t){for(var r,i=n?-1:1,a=e.length,s=(n?a:-1)+i;s>-1&&s<a;){if((r=e[s])&&!1===o(r,s,t))return!1;s+=i}return!0}"function"==typeof t&&(n=r,r=t,t=null),o(e)}e.exports=n},function(e,t){function r(e){return"[object String]"===n.call(e)}var n=Object.prototype.toString;e.exports=r},function(e,t,r){"use strict";function n(e){this.github_issue_point=e,this.github_issue_title="",this.github_issue_body="",this.github_issue_labels="BugReport"}n.prototype.getSelectedText=function(){var e,t="";return window.getSelection?t=""+window.getSelection():(e=document.selection)&&"Text"===e.type&&(t=e.createRange().text),t},n.prototype.setTitle=function(e){this.github_issue_title=e},n.prototype.setBody=function(e){this.github_issue_body=e},n.prototype.report=function(){var e=this.github_issue_point+"?title="+encodeURIComponent(this.github_issue_title)+"&body="+encodeURIComponent(this.github_issue_body);location.href=e},e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var r=[],n=-1;-1!==(n=t.indexOf(e,n+1));)r.push(n);return r}function i(e){var t=e.text,r=e.markdown,n=(0,a.parse)(r),i=new l.default(r),s=new c.default(n),u=s.toString(),f=o(t,u);if(0===f.length)return[];var p=function(e,t){var n=s.originalIndexFromIndex(e),o=s.originalIndexFromIndex(e+t,!0),a=i.indexToPosition(n),c=i.indexToPosition(o);return{markdown:r.slice(n,o),range:[n,o],loc:{start:a,end:c}}};return f.map(function(e){return p(e,t.length)})}Object.defineProperty(t,"__esModule",{value:!0}),t.findAllPositions=i;var a=r(60),s=r(150),c=n(s),u=r(13),l=n(u)},function(e,t,r){var n,o;!function(i,a,s){void 0!==e&&e.exports?e.exports=s():(n=s,void 0!==(o="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=o))}(0,0,function(){function e(e,t){return e.substr(0,t.length)===t}function t(t,r){return e(t,"file://")?t=t.replace(/(\/{0,3})\/*/g,"$1"):(t=t.replace(/:\//g,"://"),t=t.replace(/([^:\s\%\3\A])\/+/g,"$1/")),t=t.replace(/\/(\?|&|#[^!])/g,"$1"),t=t.replace(/(\?.+)\?/g,"$1&")}return function(){var e=arguments,r={};return"object"==typeof arguments[0]&&(e=arguments[0],r=arguments[1]||{}),t([].slice.call(e,0).join("/"),r)}})},function(e,t,r){"use strict";function n(e,t,r){var n,i=-1;if(!e)throw new Error("Iterate requires that |this| not be "+e);if(!o(e,"length"))throw new Error("Iterate requires that |this| has a `length`");if("function"!=typeof t)throw new Error("`callback` must be a function");for(;++i<e.length;)i in e&&"number"==typeof(n=t.call(r,e[i],i,e))&&(n<0&&(i=0),i=n-1)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module array-iterate
 * @fileoverview `forEach` with the possibility to change the
 *   next position.
 */
var o=r(3);e.exports=n},function(e,t,r){"use strict";function n(e){return e.split("\n").map(function(e){return"> "+e}).join("\n")}function o(e){return/^https:\/\/api.github.com\/repos/.test(e)?fetch(e).then(function(e){return e.json()}).then(function(e){return decodeURIComponent(escape(atob(e.content)))}):fetch(e,{credentials:"same-origin"}).then(function(e){return e.text()})}function i(e,t,r){return e.markdownBaseURL?l(e.markdownBaseURL,t):l("https://github.com/",e.repo,"blob",r,t)}function a(e,t,r){return l("https://github.com/",e.repo,"edit",r,t)}function s(e,t){return e.private?l(location.origin,"gitbook/gitbook-plugin-github-issue-feedback/contents",t):e.githubAPIBaseURL?l(e.githubAPIBaseURL,t):l("https://api.github.com/repos/",e.repo,"contents",t)}function c(e){return e.newIssueURL?e.newIssueURL:l("https://github.com/",e.repo,"/issues/new")}var u=r(7),l=r(38),f=r(36),p=r(37).findAllPositions;window.require(["gitbook"],function(e){e.events.bind("start",function(t,r){var l=r["github-issue-feedback"],h=document.createElement("button");h.textContent="Bug Report",h.className="gitbook-plugin-github-issue-feedback",h.setAttribute("style","position:fixed; right:0;bottom:0;");var d="ontouchstart"in window?"touchend":"click";h.addEventListener(d,function(t){var r=u.join(e.state.config.root||"./",e.state.filepath),h=s(l,r),d=i(l,r,"master"),g=a(l,r,"master"),m=e.state.chapterTitle,v=new f(c(l)),b=v.getSelectedText().trim();v.setTitle(m),o(h).then(function(e){var t="URL : "+d+"\n\n";if(b&&b.length>0){var r=p({text:b,markdown:e});console.log(r),r.forEach(function(e){var r="[:memo:]("+g+"#L"+e.loc.start.line+' "Edit")';t+=n(e.markdown+"\n"+r+" <"+d+"#L"+e.loc.start.line+">")+"\n\n"})}v.setBody(t),v.report()})}),document.body.appendChild(h)})})},function(e,t,r){"use strict";function n(e){if(e)throw e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module bail
 * @fileoverview Throw a given error.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return e<t}function o(e,t,r){return void 0===r&&(r=n),function(){for(var n=e.length,o=0;n;){var i=n>>>1,a=o+i;r(t,e[a])?n=i:(o=a+1,n-=i+1)}return o}()}function i(e,t,r){return void 0===r&&(r=n),function(){for(var n=e.length,o=0;n;){var i=n>>>1,a=o+i;r(e[a],t)?(o=a+1,n-=i+1):n=i}return o}()}function a(e,t,r){return void 0===r&&(r=n),function(){var n=i(e,t,r);return n!==e.length&&!r(t,e[n])}()}t.compare=n,t.lowerBound=i,t.upperBound=o,t.binarySearch=a},function(e,t,r){"use strict";function n(e,t){var r,n=0;if(e=String(e),"string"!=typeof t||1!==t.length)throw new Error("Expected character");for(r=e.indexOf(t);-1!==r;)n++,r=e.indexOf(t,r+1);return n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module ccount
 * @fileoverview Count characters.
 */
e.exports=n},function(e,t){e.exports={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"}},function(e,t){e.exports={AEli:"Æ",AElig:"Æ",AM:"&",AMP:"&",Aacut:"Á",Aacute:"Á",Abreve:"Ă",Acir:"Â",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrav:"À",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Arin:"Å",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atild:"Ã",Atilde:"Ã",Aum:"Ä",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COP:"©",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedi:"Ç",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ET:"Ð",ETH:"Ð",Eacut:"É",Eacute:"É",Ecaron:"Ě",Ecir:"Ê",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrav:"È",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Eum:"Ë",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",G:">",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacut:"Í",Iacute:"Í",Icir:"Î",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrav:"Ì",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Ium:"Ï",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",L:"<",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntild:"Ñ",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacut:"Ó",Oacute:"Ó",Ocir:"Ô",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograv:"Ò",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslas:"Ø",Oslash:"Ø",Otild:"Õ",Otilde:"Õ",Otimes:"⨷",Oum:"Ö",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUO:'"',QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",RE:"®",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THOR:"Þ",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"\t",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacut:"Ú",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucir:"Û",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrav:"Ù",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uum:"Ü",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacut:"Ý",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacut:"á",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acir:"â",acirc:"â",acut:"´",acute:"´",acy:"а",aeli:"æ",aelig:"æ",af:"⁡",afr:"𝔞",agrav:"à",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",am:"&",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",arin:"å",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atild:"ã",atilde:"ã",aum:"ä",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvba:"¦",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedi:"ç",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedi:"¸",cedil:"¸",cemptyv:"⦲",cen:"¢",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",cop:"©",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curre:"¤",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",de:"°",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divid:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacut:"é",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"ê",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrav:"è",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",et:"ð",eth:"ð",eum:"ë",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac1:"¼",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac3:"¾",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",g:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacut:"í",iacute:"í",ic:"⁣",icir:"î",icirc:"î",icy:"и",iecy:"е",iexc:"¡",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrav:"ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iques:"¿",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",ium:"ï",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laqu:"«",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",l:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",mac:"¯",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micr:"µ",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middo:"·",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbs:" ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",no:"¬",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntild:"ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacut:"ó",oacute:"ó",oast:"⊛",ocir:"ô",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograv:"ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"º",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslas:"ø",oslash:"ø",osol:"⊘",otild:"õ",otilde:"õ",otimes:"⊗",otimesas:"⨶",oum:"ö",ouml:"ö",ovbar:"⌽",par:"¶",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusm:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",poun:"£",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quo:'"',quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raqu:"»",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",re:"®",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sec:"§",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",sh:"­",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szli:"ß",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thor:"þ",thorn:"þ",tilde:"˜",time:"×",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacut:"ú",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucir:"û",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrav:"ù",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",um:"¨",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uum:"ü",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacut:"ý",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",ye:"¥",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yum:"ÿ",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},function(e,t){e.exports={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"}},function(e,t,r){"use strict";function n(e){return String(e).replace(/\s+/g," ")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module collapse-white-space
 * @fileoverview Replace multiple white-space characters
 *   with a single space.
 */
e.exports=n},function(e,t,r){(function(n){function o(){return!("undefined"==typeof window||!window||void 0===window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),r){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,n)}}function a(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function c(){try{return t.storage.debug}catch(e){}if(void 0!==n&&"env"in n)return n.env.DEBUG}t=e.exports=r(49),t.log=a,t.formatArgs=i,t.save=s,t.load=c,t.useColors=o,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(c())}).call(t,r(8))},function(e,t,r){function n(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}function o(e){function r(){if(r.enabled){var e=r,n=+new Date,o=n-(u||n);e.diff=o,e.prev=u,e.curr=n,u=n;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;s++;var o=t.formatters[n];if("function"==typeof o){var a=i[s];r=o.call(e,a),i.splice(s,1),s--}return r}),t.formatArgs.call(e,i);(r.log||t.log||console.log.bind(console)).apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=n(e),"function"==typeof t.init&&t.init(r),r}function i(e){t.save(e);for(var r=(e||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(e=r[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function a(){t.enable("")}function s(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=c,t.disable=a,t.enable=i,t.enabled=s,t.humanize=r(62),t.names=[],t.skips=[],t.formatters={};var u},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===o.call(e)},a=function(e){if(!e||"[object Object]"!==o.call(e))return!1;var t=n.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return void 0===i||n.call(e,i)};e.exports=function e(){var t,r,n,o,s,c,u=arguments[0],l=1,f=arguments.length,p=!1;for("boolean"==typeof u&&(p=u,u=arguments[1]||{},l=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});l<f;++l)if(null!=(t=arguments[l]))for(r in t)n=u[r],o=t[r],u!==o&&(p&&o&&(a(o)||(s=i(o)))?(s?(s=!1,c=n&&i(n)?n:[]):c=n&&a(n)?n:{},u[r]=e(p,c,o)):void 0!==o&&(u[r]=o));return u}},function(e,t){var r=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==n.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var o,i=r.call(arguments,1),a=function(){if(this instanceof o){var n=t.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}return t.apply(e,i.concat(r.call(arguments)))},s=Math.max(0,t.length-i.length),c=[],u=0;u<s;u++)c.push("$"+u);if(o=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var l=function(){};l.prototype=t.prototype,o.prototype=new l,l.prototype=null}return o}},function(e,t,r){var n=r(51);e.exports=Function.prototype.bind||n},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return!/[^0-9a-z\xDF-\xFF]/.test(e.toLowerCase())}},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t;return"[object Object]"===n.call(e)&&(null===(t=Object.getPrototypeOf(e))||t===Object.getPrototypeOf({}))}},function(e,t,r){"use strict";function n(e){return i.test("number"==typeof e?o(e):e.charAt(0))}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-word-character
 * @fileoverview Check if a character is a word character.
 */
e.exports=n;var o=String.fromCharCode,i=/\w/},function(e,t,r){"use strict";function n(e,t){var r,n,u,A,k,q,E,L,O,S,T,j,R=t||{},C=R.delimiter,I=R.start,D=R.end,N=R.align,B=R.stringLength||i,P=0,U=-1,z=e.length,_=[];for(N=N?N.concat():[],null!==C&&void 0!==C||(C=x+y+x),null!==I&&void 0!==I||(I=y+x),null!==D&&void 0!==D||(D=x+y);++U<z;)for(A=e[U],q=-1,A.length>P&&(P=A.length);++q<P;)E=A[q]?s(A[q]):null,_[q]||(_[q]=m),E>_[q]&&(_[q]=E);for("string"==typeof N&&(N=a(P,N).split("")),q=-1;++q<P;)r=N[q],"string"==typeof r&&(r=r.charAt(0).toLowerCase()),-1===g.indexOf(r)&&(r=d),N[q]=r;for(U=-1,u=[];++U<z;){for(A=e[U],q=-1,k=[];++q<P;)O=A[q],O=o(O),N[q]===h?(E=s(O),L=_[q]+(c.test(O)?0:1)-(B(O)-E),k[q]=O+a(L-1)):k[q]=O;u[U]=k}for(_=[],U=-1;++U<z;)for(k=u[U],q=-1;++q<P;)O=k[q],_[q]||(_[q]=m),(L=B(O))>_[q]&&(_[q]=L);for(U=-1;++U<z;){if(k=u[U],q=-1,!1!==R.pad)for(;++q<P;)O=k[q],E=_[q]-(B(O)||0),S=a(E),N[q]===f||N[q]===h?O=S+O:N[q]===p?(E/=2,E%1==0?(T=E,j=E):(T=E+.5,j=E-.5),O=a(T)+O+a(j)):O+=S,k[q]=O;u[U]=k.join(C)}if(!1!==R.rule){for(q=-1,n=[];++q<P;)!1===R.pad?(O=e[0][q],S=B(o(O)),S=S>m?S:m):S=_[q],r=N[q],O=r===f||r===d?b:v,O+=a(S-2,b),O+=r!==l&&r!==d?v:b,n[q]=O;u.splice(1,0,n.join(C))}return I+u.join(D+w+I)+D}function o(e){return null===e||void 0===e?"":String(e)}function i(e){return String(e).length}function a(e,t){return Array(e+1).join(t||x)}function s(e){var t=u.exec(e);return t?t.index+1:e.length}e.exports=n;var c=/\./,u=/\.[^.]*$/,l="l",f="r",p="c",h=".",d="",g=[l,f,p,h,d],m=3,v=":",b="-",y="|",x=" ",w="\n"},function(e,t,r){"use strict";var n=r(15),o=n.ASTNodeTypes,i={root:o.Document,paragraph:o.Paragraph,blockquote:o.BlockQuote,listItem:o.ListItem,list:o.List,Bullet:"Bullet",heading:o.Header,code:o.CodeBlock,HtmlBlock:o.HtmlBlock,ReferenceDef:o.ReferenceDef,thematicBreak:o.HorizontalRule,text:o.Str,break:o.Break,emphasis:o.Emphasis,strong:o.Strong,html:o.Html,link:o.Link,image:o.Image,inlineCode:o.Code,delete:o.Delete,yaml:"Yaml",table:"Table",tableRow:"TableRow",tableCell:"TableCell",linkReference:"LinkReference",imageReference:"imageReference",definition:"Definition"};e.exports=i},function(e,t,r){"use strict";function n(e){var t=f.parse(e),r=new s(e);return o(t).forEach(function(t){if(this.notLeaf){if(t.type){var n=u[t.type];n?t.type=n:c("replacedType : "+n+" , node.type: "+t.type)}if(t.position){var o=t.position,i={start:{line:o.start.line,column:o.start.column-1},end:{line:o.end.line,column:o.end.column-1}},a=r.locationToRange(i);t.loc=i,t.range=a,t.raw=e.slice(a[0],a[1]),Object.defineProperty(t,"position",{enumerable:!1,configurable:!1,writable:!1,value:o})}}}),t}var o=r(151),i=r(15),a=i.ASTNodeTypes,s=r(13),c=r(48)("markdown-to-ast"),u=r(59),l=r(144),f=l();e.exports={parse:n,Syntax:a}},function(e,t,r){"use strict";function n(e,t){function r(e){e.children&&s(e)}function n(e,r,n){var i=n.children,a=r&&i[r-1];if(a&&e.type===a.type&&o(a,t)&&o(e,t))return e.value&&(a.value+=e.value),e.children&&(a.children=a.children.concat(e.children)),i.splice(r,1),a.position&&e.position&&(a.position.end=e.position.end),r}var s=a(n);return i(e,r),e}function o(e,t){var r,n;return"text"===e.type?!e.position||(r=e.position.start,n=e.position.end,r.line!==n.line||n.column-r.column===e.value.length):t&&"blockquote"===e.type}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module mdast:util:compact
 * @fileoverview Make an MDAST tree compact.
 */
var i=r(34),a=r(154);e.exports=n},function(e,t){function r(e){if(e=String(e),!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*l;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*s;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(e){return e>=u?Math.round(e/u)+"d":e>=c?Math.round(e/c)+"h":e>=s?Math.round(e/s)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function o(e){return i(e,u,"day")||i(e,c,"hour")||i(e,s,"minute")||i(e,a,"second")||e+" ms"}function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,s=60*a,c=60*s,u=24*c,l=365.25*u;e.exports=function(e,t){t=t||{};var i=typeof e;if("string"===i&&e.length>0)return r(e);if("number"===i&&!1===isNaN(e))return t.long?o(e):n(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,s,c=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)i.call(r,l)&&(c[l]=r[l]);if(o){s=o(r);for(var f=0;f<s.length;f++)a.call(r,s[f])&&(c[s[f]]=r[s[f]])}}return c}},function(e,t,r){"use strict";function n(e){var t=o(a);t.prototype.options=i(t.prototype.options,this.data("settings"),e),this.Parser=t}var o=r(33),i=r(2),a=r(75);e.exports=n,n.Parser=a},function(e,t){e.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(e,t,r){"use strict";function n(e){function t(t){for(var r=e.offset,n=t.line,o=[];++n&&n in r;)o.push((r[n]||0)+1);return{start:t,indent:o}}function r(t,r,n){3!==n&&e.file.message(t,r)}function n(n,i,a){o(n,{position:t(i),warning:r,text:a,reference:a,textContext:e,referenceContext:e})}function i(e,n){return o(e,{position:t(n),warning:r})}return n.raw=i,n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:decode
 * @fileoverview Decode entities.
 */
var o=r(6);e.exports=n},function(e,t,r){"use strict";function n(e,t){for(var r=e.indexOf("\n",t);r>t&&" "===e.charAt(r-1);)r--;return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:break
 * @fileoverview Locate a break.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return e.indexOf("`",t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:code-inline
 * @fileoverview Locate inline code.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return e.indexOf("~~",t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:delete
 * @fileoverview Locate strikethrough.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r=e.indexOf("*",t),n=e.indexOf("_",t);return-1===n?r:-1===r?n:n<r?n:r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:emphasis
 * @fileoverview Locate italics / emphasis.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){return e.indexOf("\\",t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:escape
 * @fileoverview Locate an escape.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r=e.indexOf("**",t),n=e.indexOf("__",t);return-1===n?r:-1===r?n:n<r?n:r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:strong
 * @fileoverview Locate bold / strong / importance.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r,n=o.length,i=-1,a=-1;if(!this.options.gfm)return-1;for(;++i<n;)-1!==(r=e.indexOf(o[i],t))&&(r<a||-1===a)&&(a=r);return a}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:url
 * @fileoverview Locate a URL.
 */
e.exports=n;var o=["https://","http://","mailto:"]},function(e,t,r){"use strict";function n(){var e,t=this,r=String(t.file),n={line:1,column:1,offset:0},c=o(n);return r=r.replace(s,a),65279===r.charCodeAt(0)&&(r=r.slice(1),c.column++,c.offset++),e={type:"root",children:t.tokenizeBlock(r,c),position:{start:n,end:t.eof||o(n)}},t.options.position||i(e,!0),e}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:parse
 * @fileoverview Parse the document
 */
var o=r(2),i=r(155);e.exports=n;var a="\n",s=/\r\n|\r/g},function(e,t,r){"use strict";function n(e,t){this.file=t,this.offset={},this.options=i(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=s(t).toOffset,this.unescape=c(this,"escape"),this.decode=u(this)}function o(e){var t,r=[];for(t in e)r.push(t);return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */
var i=r(2),a=r(32),s=r(157),c=r(104),u=r(66),l=r(103);e.exports=n;var f=n.prototype;f.setOptions=r(76),f.parse=r(74),f.options=r(22),f.exitStart=a("atStart",!0),f.enterList=a("inList",!1),f.enterLink=a("inLink",!1),f.enterBlock=a("inBlock",!1),f.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.interruptList=[["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],f.blockTokenizers={yamlFrontMatter:r(102),newline:r(94),indentedCode:r(81),fencedCode:r(80),blockquote:r(78),atxHeading:r(88),thematicBreak:r(100),list:r(93),setextHeading:r(89),html:r(90),footnote:r(87),definition:r(83),table:r(98),paragraph:r(95)},f.inlineTokenizers={escape:r(86),autoLink:r(77),url:r(101),html:r(91),link:r(92),reference:r(96),strong:r(97),emphasis:r(85),deletion:r(84),code:r(82),break:r(79),text:r(99)},f.blockMethods=o(f.blockTokenizers),f.inlineMethods=o(f.inlineTokenizers),f.tokenizeBlock=l("block"),f.tokenizeInline=l("inline"),f.tokenizeFactory=l},function(e,t,r){"use strict";function n(e){var t,r,n=this,s=n.options;if(null==e)e={};else{if("object"!=typeof e)throw new Error("Invalid value `"+e+"` for setting `options`");e=o(e)}for(t in a){if(r=e[t],null==r&&(r=s[t]),"blocks"!==t&&"boolean"!=typeof r||"blocks"===t&&"object"!=typeof r)throw new Error("Invalid value `"+r+"` for setting `options."+t+"`");e[t]=r}return n.options=e,n.escape=i(e),n}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */
var o=r(2),i=r(21),a=r(22);e.exports=n},function(e,t,r){"use strict";function n(e,t,r){var n,i,p,h,d,g,m,v,b,y,x,w;if(t.charAt(0)===a){for(n=this,i="",p=t.length,h=0,d="",m=!1,v="",h++,i=a;h<p&&" "!==(g=t.charAt(h))&&g!==s&&g!==c&&(":"!==g||t.charAt(h+1)!==u);)d+=g,h++;if(d){if(v+=d,d="",g=t.charAt(h),v+=g,h++,g===c)m=!0;else{if(":"!==g||t.charAt(h+1)!==u)return;v+=u,h++}for(;h<p&&" "!==(g=t.charAt(h))&&g!==s;)d+=g,h++;if(g=t.charAt(h),d&&g===s)return!!r||(v+=d,y=v,i+=v+g,b=e.now(),b.column++,b.offset++,m&&(v.slice(0,f).toLowerCase()===l?(y=y.substr(f),b.column+=f,b.offset+=f):v=l+v),x=n.inlineTokenizers.escape,n.inlineTokenizers.escape=null,w=n.enterLink(),y=n.tokenizeInline(y,b),n.inlineTokenizers.escape=x,w(),e(i)({type:"link",title:null,url:o(v),children:y}))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:auto-link
 * @fileoverview Tokenise an auto-link.
 */
var o=r(6),i=r(24);e.exports=n,n.locator=i,n.notInLink=!0;var a="<",s=">",c="@",u="/",l="mailto:",f=l.length},function(e,t,r){"use strict";function n(e,t,r){for(var n,l,f,p,h,d,g,m,v,b=this,y=b.offset,x=b.blockTokenizers,w=b.interruptBlockquote,A=e.now(),k=A.line,q=t.length,E=[],L=[],O=[],S=0;S<q&&((l=t.charAt(S))===c||l===s);)S++;if(t.charAt(S)===u){if(r)return!0;for(S=0;S<q;){for(p=t.indexOf(a,S),g=S,m=!1,-1===p&&(p=q);S<q&&((l=t.charAt(S))===c||l===s);)S++;if(t.charAt(S)===u?(S++,m=!0,t.charAt(S)===c&&S++):S=g,h=t.slice(S,p),!m&&!o(h)){S=g;break}if(!m&&(f=t.slice(S),i(w,x,b,[e,f,!0])))break;d=g===S?h:t.slice(g,p),O.push(S-g),E.push(d),L.push(h),S=p+1}for(S=-1,q=O.length,n=e(E.join(a));++S<q;)y[k]=(y[k]||0)+O[S],k++;return v=b.enterBlock(),L=b.tokenizeBlock(L.join(a),A),v(),n({type:"blockquote",children:L})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:blockquote
 * @fileoverview Tokenise blockquote.
 */
var o=r(4),i=r(9);e.exports=n;var a="\n",s="\t",c=" ",u=">"},function(e,t,r){"use strict";function n(e,t,r){for(var n,o=this,a=o.options.breaks,s=t.length,c=-1,u="";++c<s;){if("\n"===(n=t.charAt(c))){if(!a&&c<i)return;return!!r||(u+=n,e(u)({type:"break"}))}if(" "!==n)return;u+=n}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:break
 * @fileoverview Tokenise a break.
 */
var o=r(67);e.exports=n,n.locator=o;var i=2},function(e,t,r){"use strict";function n(e,t,r){var n,p,h,d,g,m,v,b,y,x,w,A=this,k=A.options,q=t.length+1,E=0,L="";if(k.gfm){for(;E<q&&((h=t.charAt(E))===s||h===a);)L+=h,E++;if(x=E,(h=t.charAt(E))===c||h===u){for(E++,p=h,n=1,L+=h;E<q&&(h=t.charAt(E))===p;)L+=h,n++,E++;if(!(n<l)){for(;E<q&&((h=t.charAt(E))===s||h===a);)L+=h,E++;for(d="",g="";E<q&&(h=t.charAt(E))!==i&&h!==c&&h!==u;)h===s||h===a?g+=h:(d+=g+h,g=""),E++;if(!(h=t.charAt(E))||h===i){if(r)return!0;for(w=e.now(),w.column+=L.length,w.offset+=L.length,L+=d,d=A.decode.raw(A.unescape(d),w),g&&(L+=g),g="",b="",y="",m="",v="";E<q;)if(h=t.charAt(E),m+=b,v+=y,b="",y="",h===i){for(m?(b+=h,y+=h):L+=h,g="",E++;E<q&&(h=t.charAt(E))===s;)g+=h,E++;if(b+=g,y+=g.slice(x),!(g.length>=f)){for(g="";E<q&&(h=t.charAt(E))===p;)g+=h,E++;if(b+=g,y+=g,!(g.length<n)){for(g="";E<q&&((h=t.charAt(E))===s||h===a);)b+=h,y+=h,E++;if(!h||h===i)break}}}else m+=h,y+=h,E++;return L+=m+b,e(L)({type:"code",lang:d||null,value:o(v)})}}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-fenced
 * @fileoverview Tokenise fenced code.
 */
var o=r(14);e.exports=n;var i="\n",a="\t",s=" ",c="~",u="`",l=3,f=4},function(e,t,r){"use strict";function n(e,t,r){for(var n,o,l,f=-1,p=t.length,h="",d="",g="",m="";++f<p;)if(n=t.charAt(f),l)if(l=!1,h+=g,d+=m,g="",m="",n===a)g=n,m=n;else for(h+=n,d+=n;++f<p;){if(!(n=t.charAt(f))||n===a){m=n,g=n;break}h+=n,d+=n}else if(n===c&&t.charAt(f+1)===n&&t.charAt(f+2)===n&&t.charAt(f+3)===n)g+=u,f+=3,l=!0;else if(n===s)g+=n,l=!0;else{for(o="";n===s||n===c;)o+=n,n=t.charAt(++f);if(n!==a)break;g+=o+n,m+=n}if(d)return!!r||e(h)({type:"code",lang:null,value:i(d)})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-indented
 * @fileoverview Tokenise indented code.
 */
var o=r(1),i=r(14);e.exports=n;var a="\n",s="\t",c=" ",u=o(c,4)},function(e,t,r){"use strict";function n(e,t,r){for(var n,i,s,c,u,l,f,p,h=t.length,d=0,g="",m="";d<h&&t.charAt(d)===a;)g+=a,d++;if(g){for(u=g,c=d,g="",p=t.charAt(d),s=0;d<h;){if(l=p,p=t.charAt(d+1),l===a?(s++,m+=l):(s=0,g+=l),s&&p!==a){if(s===c){u+=g+m,f=!0;break}g+=m,m=""}d++}if(!f){if(c%2!=0)return;g=""}if(r)return!0;for(n="",i="",h=g.length,d=-1;++d<h;)l=g.charAt(d),o(l)?i+=l:(i&&(n&&(n+=i),i=""),n+=l);return e(u)({type:"inlineCode",value:n})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-inline
 * @fileoverview Tokenise inline code.
 */
var o=r(0),i=r(68);e.exports=n,n.locator=i;var a="`"},function(e,t,r){"use strict";function n(e,t,r){for(var n,a,x,w,A,k,q,E,L=this,O=L.options.commonmark,S=0,T=t.length,j="";S<T&&((w=t.charAt(S))===h||w===p);)j+=w,S++;if((w=t.charAt(S))===d){for(S++,j+=w,x="";S<T&&(w=t.charAt(S))!==g;)w===l&&(x+=w,S++,w=t.charAt(S)),x+=w,S++;if(x&&t.charAt(S)===g&&t.charAt(S+1)===b){for(k=x,j+=x+g+b,S=j.length,x="";S<T&&((w=t.charAt(S))===p||w===h||w===f);)j+=w,S++;if(w=t.charAt(S),x="",n=j,w===y){for(S++;S<T&&(w=t.charAt(S),o(w));)x+=w,S++;if((w=t.charAt(S))===o.delimiter)j+=y+x+w,S++;else{if(O)return;S-=x.length+1,x=""}}if(!x){for(;S<T&&(w=t.charAt(S),i(w));)x+=w,S++;j+=x}if(x){for(q=x,x="";S<T&&((w=t.charAt(S))===p||w===h||w===f);)x+=w,S++;if(w=t.charAt(S),A=null,w===c?A=c:w===u?A=u:w===m&&(A=v),A){if(!x)return;for(j+=x+w,S=j.length,x="";S<T&&(w=t.charAt(S))!==A;){if(w===f){if(S++,(w=t.charAt(S))===f||w===A)return;x+=f}x+=w,S++}if((w=t.charAt(S))!==A)return;a=j,j+=x+w,S++,E=x,x=""}else x="",S=j.length;for(;S<T&&((w=t.charAt(S))===p||w===h);)j+=w,S++;return w=t.charAt(S),w&&w!==f?void 0:!!r||(n=e(n).test().end,q=L.decode.raw(L.unescape(q),n),E&&(a=e(a).test().end,E=L.decode.raw(L.unescape(E),a)),e(j)({type:"definition",identifier:s(k),title:E||null,url:q}))}}}}function o(e){return e!==x&&e!==d&&e!==g}function i(e){return e!==d&&e!==g&&!a(e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:definition
 * @fileoverview Tokenise a definition.
 */
var a=r(0),s=r(10);e.exports=n,n.notInList=!0,n.notInBlock=!0;var c='"',u="'",l="\\",f="\n",p="\t",h=" ",d="[",g="]",m="(",v=")",b=":",y="<",x=">";o.delimiter=x},function(e,t,r){"use strict";function n(e,t,r){var n,i,c,u=this,l="",f="",p="",h="";if(u.options.gfm&&t.charAt(0)===a&&t.charAt(1)===a&&!o(t.charAt(2)))for(n=1,i=t.length,c=e.now(),c.column+=2,c.offset+=2;++n<i;){if(!((l=t.charAt(n))!==a||f!==a||p&&o(p)))return!!r||e(s+h+s)({type:"delete",children:u.tokenizeInline(h,c)});h+=f,p=f,f=l}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:delete
 * @fileoverview Tokenise strikethrough.
 */
var o=r(0),i=r(69);e.exports=n,n.locator=i;var a="~",s="~~"},function(e,t,r){"use strict";function n(e,t,r){var n,s,l,f,p,h,d,g=this,m=0,v=t.charAt(m);if(!(v!==c&&v!==u||(s=g.options.pedantic,p=v,l=v,h=t.length,m++,f="",v="",s&&a(t.charAt(m)))))for(;m<h;){if(d=v,!((v=t.charAt(m))!==l||s&&a(d))){if((v=t.charAt(++m))!==l){if(!o(f)||d===l)return;if(!s&&l===u&&i(v)){f+=l;continue}return!!r||(n=e.now(),n.column++,n.offset++,e(p+f+l)({type:"emphasis",children:g.tokenizeInline(f,n)}))}f+=l}s||"\\"!==v||(f+=v,v=t.charAt(++m)),f+=v,m++}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:emphasis
 * @fileoverview Tokenise emphasis.
 */
var o=r(4),i=r(57),a=r(0),s=r(70);e.exports=n,n.locator=s;var c="*",u="_"},function(e,t,r){"use strict";function n(e,t,r){var n,o,i=this;if("\\"===t.charAt(0)&&(n=t.charAt(1),-1!==i.escape.indexOf(n)))return!!r||(o="\n"===n?{type:"break"}:{type:"text",value:n},e("\\"+n)(o))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:escape
 * @fileoverview Tokenise an escape.
 */
var o=r(71);e.exports=n,n.locator=o},function(e,t,r){"use strict";function n(e,t,r){var n,g,m,v,b,y,x,w,A,k,q,E,L=this,O=L.offset;if(L.options.footnotes){for(n=0,g=t.length,m="",v=e.now(),b=v.line;n<g&&(A=t.charAt(n),o(A));)m+=A,n++;if(t.charAt(n)===l&&t.charAt(n+1)===p){for(m+=l+p,n=m.length,x="";n<g&&(A=t.charAt(n))!==f;)A===a&&(x+=A,n++,A=t.charAt(n)),x+=A,n++;if(x&&t.charAt(n)===f&&t.charAt(n+1)===h){if(r)return!0;for(k=i(x),m+=x+f+h,n=m.length;n<g&&((A=t.charAt(n))===c||A===u);)m+=A,n++;for(v.column+=m.length,v.offset+=m.length,x="",y="",w="";n<g;){if((A=t.charAt(n))===s){for(w=A,n++;n<g&&(A=t.charAt(n))===s;)w+=A,n++;for(x+=w,w="";n<g&&(A=t.charAt(n))===u;)w+=A,n++;if(0===w.length)break;x+=w}x&&(y+=x,x=""),y+=A,n++}return m+=y,y=y.replace(d,function(e){return O[b]=(O[b]||0)+e.length,b++,""}),q=e(m),E=L.enterBlock(),y=L.tokenizeBlock(y,v),E(),q({type:"footnoteDefinition",identifier:k,children:y})}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:footnote-definition
 * @fileoverview Tokenise footnote definition.
 */
var o=r(0),i=r(10);e.exports=n,n.notInList=!0,n.notInBlock=!0;var a="\\",s="\n",c="\t",u=" ",l="[",f="]",p="^",h=":",d=/^( {4}|\t)?/gm},function(e,t,r){"use strict";function n(e,t,r){for(var n,u,l,f=this,p=f.options,h=t.length+1,d=-1,g=e.now(),m="",v="";++d<h;){if((n=t.charAt(d))!==a&&n!==i){d--;break}m+=n}for(l=0;++d<=h;){if((n=t.charAt(d))!==s){d--;break}m+=n,l++}if(!(l>c)&&l&&(p.pedantic||t.charAt(d+1)!==s)){for(h=t.length+1,u="";++d<h;){if((n=t.charAt(d))!==a&&n!==i){d--;break}u+=n}if(p.pedantic||0!==u.length||!n||n===o){if(r)return!0;for(m+=u,u="",v="";++d<h&&(n=t.charAt(d))&&n!==o;)if(n===a||n===i||n===s){for(;n===a||n===i;)u+=n,n=t.charAt(++d);for(;n===s;)u+=n,n=t.charAt(++d);for(;n===a||n===i;)u+=n,n=t.charAt(++d);d--}else v+=u+n,u="";return g.column+=m.length,g.offset+=m.length,m+=v+u,e(m)({type:"heading",depth:l,children:f.tokenizeInline(v,g)})}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-atx
 * @fileoverview Tokenise an ATX-style heading.
 */
e.exports=n;var o="\n",i="\t",a=" ",s="#",c=6},function(e,t,r){"use strict";function n(e,t,r){for(var n,u,l,f,p,h=this,d=e.now(),g=t.length,m=-1,v="";++m<g;){if((l=t.charAt(m))!==a||m>=s){m--;break}v+=l}for(n="",u="";++m<g;){if((l=t.charAt(m))===o){m--;break}l===a||l===i?u+=l:(n+=u+l,u="")}if(d.column+=v.length,d.offset+=v.length,v+=n+u,l=t.charAt(++m),f=t.charAt(++m),l===o&&c[f]){for(v+=l,u=f,p=c[f];++m<g;){if((l=t.charAt(m))!==f){if(l!==o)return;m--;break}u+=l}return!!r||e(v+u)({type:"heading",depth:p,children:h.tokenizeInline(n,d)})}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-setext
 * @fileoverview Tokenise an setext-style heading.
 */
e.exports=n;var o="\n",i="\t",a=" ",s=3,c={};c["="]=1,c["-"]=2},function(e,t,r){"use strict";function n(e,t,r){for(var n,u,l,f,p,h,d,g=this,m=g.options.blocks,v=t.length,b=0,y=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+m.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(o.source+"\\s*$"),/^$/,!1]];b<v&&((f=t.charAt(b))===i||f===a);)b++;if(t.charAt(b)===c){for(n=t.indexOf(s,b+1),n=-1===n?v:n,u=t.slice(b,n),l=-1,p=y.length;++l<p;)if(y[l][0].test(u)){h=y[l];break}if(h){if(r)return h[2];if(b=n,!h[1].test(u))for(;b<v;){if(n=t.indexOf(s,b+1),n=-1===n?v:n,u=t.slice(b+1,n),h[1].test(u)){u&&(b=n);break}b=n}return d=t.slice(0,b),e(d)({type:"html",value:d})}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-block
 * @fileoverview Tokenise block HTML.
 */
var o=r(26).openCloseTag;e.exports=n;var i="\t",a=" ",s="\n",c="<"},function(e,t,r){"use strict";function n(e,t,r){var n,i,u=this,l=t.length;if(!("<"!==t.charAt(0)||l<3)&&(n=t.charAt(1),(o(n)||"?"===n||"!"===n||"/"===n)&&(i=t.match(a))))return!!r||(i=i[0],!u.inLink&&s.test(i)?u.inLink=!0:u.inLink&&c.test(i)&&(u.inLink=!1),e(i)({type:"html",value:i}))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-inline
 * @fileoverview Tokenise inline HTML.
 */
var o=r(17),i=r(24),a=r(26).tag;e.exports=n,n.locator=i;var s=/^<a /i,c=/^<\/a>/i},function(e,t,r){"use strict";function n(e,t,r){var n,a,v,b,y,x,w,A,k,q,E,L,O,S,T,j,R,C,I,D=this,N="",B=0,P=t.charAt(0),U=D.options.commonmark,z=D.options.gfm;if("!"===P&&(k=!0,N=P,P=t.charAt(++B)),P===c&&(k||!D.inLink)){for(N+=P,T="",B++,L=t.length,R=e.now(),S=0,R.column+=B,R.offset+=B;B<L;){if(P=t.charAt(B),x=P,P===d){for(a=1;t.charAt(B+1)===d;)x+=P,B++,a++;v?a>=v&&(v=0):v=a}else if(P===s)B++,x+=t.charAt(B);else if(v&&!z||P!==c){if((!v||z)&&P===u){if(!S){if(z)for(;B<L&&(P=t.charAt(B+1),i(P));)x+=P,B++;if(t.charAt(B+1)!==l)return;x+=l,n=!0,B++;break}S--}}else S++;T+=x,x="",B++}if(n){for(q=T,N+=T+x,B++;B<L&&(P=t.charAt(B),i(P));)N+=P,B++;if(P=t.charAt(B),A=U?m:g,T="",b=N,P===p){for(B++,b+=p;B<L&&(P=t.charAt(B))!==h;){if(U&&"\n"===P)return;T+=P,B++}if(t.charAt(B)!==h)return;N+=p+T+h,j=T,B++}else{for(P=null,x="";B<L&&(P=t.charAt(B),!x||!o(A,P));){if(i(P)){if(U)break;x+=P}else{if(P===l)S++;else if(P===f){if(0===S)break;S--}T+=x,x="",P===s&&(T+=s,P=t.charAt(++B)),T+=P}B++}N+=T,j=T,B=N.length}for(T="";B<L&&(P=t.charAt(B),i(P));)T+=P,B++;if(P=t.charAt(B),N+=T,T&&o(A,P))if(B++,N+=P,T="",E=A[P],y=N,U){for(;B<L&&(P=t.charAt(B))!==E;)P===s&&(T+=s,P=t.charAt(++B)),B++,T+=P;if((P=t.charAt(B))!==E)return;for(O=T,N+=T+P,B++;B<L&&(P=t.charAt(B),i(P));)N+=P,B++}else for(x="";B<L;){if((P=t.charAt(B))===E)w&&(T+=E+x,x=""),w=!0;else if(w){if(P===f){N+=T+E+x,O=T;break}i(P)?x+=P:(T+=E+x+P,x="",w=!1)}else T+=P;B++}if(t.charAt(B)===f)return!!r||(N+=f,j=D.decode.raw(D.unescape(j),e(b).test().end),O&&(y=e(y).test().end,O=D.decode.raw(D.unescape(O),y)),I={type:k?"image":"link",title:O||null,url:j},k?I.alt=D.decode.raw(D.unescape(q),R)||null:(C=D.enterLink(),I.children=D.tokenizeInline(q,R),C()),e(N)(I))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:link
 * @fileoverview Tokenise a link.
 */
var o=r(3),i=r(0),a=r(23);e.exports=n,n.locator=a;var s="\\",c="[",u="]",l="(",f=")",p="<",h=">",d="`",g={};g['"']='"',g["'"]="'";var m={};m['"']='"',m["'"]="'",m[l]=f},function(e,t,r){"use strict";function n(e,t,r){for(var n,i,a,c,l,f,y,w,A,k,q,E,T,j,R,C,I,D,N,B,P,U,z,_,V=this,H=V.options.commonmark,F=V.options.pedantic,M=V.blockTokenizers,G=V.interruptList,$=0,Z=t.length,J=null,Y=0;$<Z;){if((c=t.charAt($))===b)Y+=x-Y%x;else{if(c!==m)break;Y++}$++}if(!(Y>=x)){if(c=t.charAt($),n=H?S:O,!0===L[c])l=c,a=!1;else{for(a=!0,i="";$<Z&&(c=t.charAt($),u(c));)i+=c,$++;if(c=t.charAt($),!i||!0!==n[c])return;J=parseInt(i,10),l=c}if((c=t.charAt(++$))===m||c===b){if(r)return!0;for($=0,j=[],R=[],C=[];$<Z;){for(f=t.indexOf(v,$),y=$,w=!1,_=!1,-1===f&&(f=Z),z=$+x,Y=0;$<Z;){if((c=t.charAt($))===b)Y+=x-Y%x;else{if(c!==m)break;Y++}$++}if(Y>=x&&(_=!0),I&&Y>=I.indent&&(_=!0),c=t.charAt($),A=null,!_){if(!0===L[c])A=c,$++,Y++;else{for(i="";$<Z&&(c=t.charAt($),u(c));)i+=c,$++;c=t.charAt($),$++,i&&!0===n[c]&&(A=c,Y+=i.length+1)}if(A)if((c=t.charAt($))===b)Y+=x-Y%x,$++;else if(c===m){for(z=$+x;$<z&&t.charAt($)===m;)$++,Y++;$===z&&t.charAt($)===m&&($-=x-1,Y-=x-1)}else c!==v&&""!==c&&(A=null)}if(A){if(!F&&l!==A)break;w=!0}else H||_||t.charAt(y)!==m?H&&I&&(_=Y>=I.indent||Y>x):_=!0,w=!1,$=y;if(q=t.slice(y,f),k=y===$?q:t.slice($,f),(A===h||A===d||A===g)&&M.thematicBreak.call(V,e,q,!0))break;if(E=T,T=!s(k).length,_&&I)I.value=I.value.concat(C,q),R=R.concat(C,q),C=[];else if(w)0!==C.length&&(I.value.push(""),I.trail=C.concat()),I={value:[q],indent:Y,trail:[]},j.push(I),R=R.concat(C,q),C=[];else if(T){if(E)break;C.push(q)}else{if(E)break;if(p(G,M,V,[e,q,!0]))break;I.value=I.value.concat(C,q),R=R.concat(C,q),C=[]}$=f+1}for(P=e(R.join(v)).reset({type:"list",ordered:a,start:J,loose:null,children:[]}),D=V.enterList(),N=V.enterBlock(),B=!1,$=-1,Z=j.length;++$<Z;)I=j[$].value.join(v),U=e.now(),I=e(I)(o(V,I,U),P),I.loose&&(B=!0),I=j[$].trail.join(v),$!==Z-1&&(I+=v),e(I);return D(),N(),P.loose=B,P}}}function o(e,t,r){var n,o,s=e.offset,c=e.options.pedantic?i:a,u=null;return t=c.apply(null,arguments),e.options.gfm&&(n=t.match(A))&&(o=n[0].length,u=n[1].toLowerCase()===y,s[r.line]+=o,t=t.slice(o)),{type:"listItem",loose:w.test(t)||t.charAt(t.length-1)===v,checked:u,children:e.tokenizeBlock(t,r)}}function i(e,t,r){function n(e){return o[i]=(o[i]||0)+e.length,i++,""}var o=e.offset,i=r.line;return t=t.replace(q,n),i=r.line,t.replace(E,n)}function a(e,t,r){function n(e,t,r,n,s){return i=t+r+n,a=s,Number(r)<10&&i.length%2==1&&(r=m+r),(o=t+c(m,r.length)+n)+a}var o,i,a,s,u,p,h,d=e.offset,g=r.line;for(t=t.replace(k,n),s=t.split(v),u=f(t,l(o).indent).split(v),u[0]=a,d[g]=(d[g]||0)+i.length,g++,p=0,h=s.length;++p<h;)d[g]=(d[g]||0)+s[p].length-u[p].length,g++;return u.join(v)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:list
 * @fileoverview Tokenise a list.
 */
var s=r(4),c=r(1),u=r(5),l=r(25),f=r(105),p=r(9);e.exports=n;var h="*",d="_",g="-",m=" ",v="\n",b="\t",y="x",x=4,w=/\n\n(?!\s*$)/,A=/^\[([ \t]|x|X)][ \t]/,k=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,q=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,E=/^( {1,4}|\t)?/gm,L={};L[h]=!0,L["+"]=!0,L[g]=!0;var O={};O["."]=!0;var S={};S["."]=!0,S[")"]=!0},function(e,t,r){"use strict";function n(e,t,r){var n,i,a,s,c=t.charAt(0);if("\n"===c){if(r)return!0;for(s=1,n=t.length,i=c,a="";s<n&&(c=t.charAt(s),o(c));)a+=c,"\n"===c&&(i+=a,a=""),s++;e(i)}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:newline
 * @fileoverview Tokenise a newline.
 */
var o=r(0);e.exports=n},function(e,t,r){"use strict";function n(e,t,r){for(var n,p,h,d,g,m=this,v=m.options,b=v.commonmark,y=v.gfm,x=m.blockTokenizers,w=m.interruptParagraph,A=t.indexOf(c),k=t.length;A<k;){if(-1===A){A=k;break}if(t.charAt(A+1)===c)break;if(b){for(d=0,n=A+1;n<k;){if((h=t.charAt(n))===u){d=f;break}if(h!==l)break;d++,n++}if(d>=f){A=t.indexOf(c,A+1);continue}}if(p=t.slice(A+1),s(w,x,m,[e,p,!0]))break;if(x.list.call(m,e,p,!0)&&(m.inList||b||y&&!i(o.left(p).charAt(0))))break;if(n=A,-1!==(A=t.indexOf(c,A+1))&&""===o(t.slice(n,A))){A=n;break}}return p=t.slice(0,A),""===o(p)?(e(p),null):!!r||(g=e.now(),p=a(p),e(p)({type:"paragraph",children:m.tokenizeInline(p,g)}))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:paragraph
 * @fileoverview Tokenise a paragraph.
 */
var o=r(4),i=r(5),a=r(14),s=r(9);e.exports=n;var c="\n",u="\t",l=" ",f=4},function(e,t,r){"use strict";function n(e,t,r){var n,i,v,b,y,x,w,A,k=this,q=t.charAt(0),E=0,L=t.length,O="",S="",T=s,j=l;if("!"===q&&(T=c,S=q,q=t.charAt(++E)),q===g){for(E++,S+=q,x="",k.options.footnotes&&T===s&&t.charAt(E)===h&&(S+=h,E++,T=u),A=0;E<L;){if((q=t.charAt(E))===g)w=!0,A++;else if(q===m){if(!A)break;A--}q===d&&(x+=d,q=t.charAt(++E)),x+=q,E++}if(O=x,n=x,(q=t.charAt(E))===m){for(E++,O+=q,x="";E<L&&(q=t.charAt(E),o(q));)x+=q,E++;if((q=t.charAt(E))===g){for(i="",x+=q,E++;E<L&&(q=t.charAt(E))!==g&&q!==m;)q===d&&(i+=d,q=t.charAt(++E)),i+=q,E++;q=t.charAt(E),q===m?(j=i?p:f,x+=i+q,E++):i="",O+=x,x=""}else{if(!n)return;i=n}if(j===p||!w)return T===u&&j!==l&&(T=s,S=g+h,n=h+n),O=S+O,T===s&&k.inLink?null:!!r||(T===u&&-1!==n.indexOf(" ")?e(O)({type:"footnote",children:this.tokenizeInline(n,e.now())}):(v=e.now(),v.column+=S.length,v.offset+=S.length,i=j===p?i:n,b={type:T+"Reference",identifier:a(i)},T!==s&&T!==c||(b.referenceType=j),T===s?(y=k.enterLink(),b.children=k.tokenizeInline(n,v),y()):T===c&&(b.alt=k.decode.raw(k.unescape(n),v)||null),e(O)(b)))}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:reference
 * @fileoverview Tokenise a reference.
 */
var o=r(0),i=r(23),a=r(10);e.exports=n,n.locator=i;var s="link",c="image",u="footnote",l="shortcut",f="collapsed",p="full",h="^",d="\\",g="[",m="]"},function(e,t,r){"use strict";function n(e,t,r){var n,a,u,l,f,p,h,d=this,g=0,m=t.charAt(g);if(!(m!==s&&m!==c||t.charAt(++g)!==m||(a=d.options.pedantic,u=m,f=u+u,p=t.length,g++,l="",m="",a&&i(t.charAt(g)))))for(;g<p;){if(h=m,!((m=t.charAt(g))!==u||t.charAt(g+1)!==u||a&&i(h))&&(m=t.charAt(g+2))!==u){if(!o(l))return;return!!r||(n=e.now(),n.column+=2,n.offset+=2,e(f+l+f)({type:"strong",children:d.tokenizeInline(l,n)}))}a||"\\"!==m||(l+=m,m=t.charAt(++g)),l+=m,g++}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:strong
 * @fileoverview Tokenise strong.
 */
var o=r(4),i=r(0),a=r(72);e.exports=n,n.locator=a;var s="*",c="_"},function(e,t,r){"use strict";function n(e,t,r){var n,y,x,w,A,k,q,E,L,O,S,T,j,R,C,I,D,N,B,P,U,z,_,V,H=this;if(H.options.gfm){for(n=0,N=0,k=t.length+1,q=[];n<k;){if(z=t.indexOf(f,n),_=t.indexOf(c,n+1),-1===z&&(z=t.length),-1===_||_>z){if(N<d)return;break}q.push(t.slice(n,z)),N++,n=z+1}for(w=q.join(f),y=q.splice(1,1)[0]||[],n=0,k=y.length,N--,x=!1,S=[];n<k;){if((L=y.charAt(n))===c){if(O=null,!1===x){if(!1===V)return}else S.push(x),x=!1;V=!1}else if(L===s)O=!0,x=x||b;else if(L===u)x=x===g?m:O&&x===b?v:g;else if(!o(L))return;n++}if(!1!==x&&S.push(x),!(S.length<h)){if(r)return!0;for(D=-1,P=[],U=e(w).reset({type:"table",align:S,children:P});++D<N;){for(B=q[D],A={type:"tableRow",children:[]},D&&e(f),e(B).reset(A,U),k=B.length+1,n=0,E="",T="",j=!0,R=null,C=null;n<k;)if((L=B.charAt(n))!==p&&L!==l){if(""===L||L===c)if(j)e(L);else{if(L&&C){E+=L,n++;continue}!T&&!L||j||(w=T,E.length>1&&(L?(w+=E.slice(0,E.length-1),E=E.charAt(E.length-1)):(w+=E,E="")),I=e.now(),e(w)({type:"tableCell",children:H.tokenizeInline(T,I)},A)),e(E+L),E="",T=""}else if(E&&(T+=E,E=""),T+=L,L===i&&n!==k-2&&(T+=B.charAt(n+1),n++),L===a){for(R=1;B.charAt(n+1)===L;)T+=L,n++,R++;C?R>=C&&(C=0):C=R}j=!1,n++}else T?E+=L:e(L),n++;D||e(f+y)}return U}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:table
 * @fileoverview Tokenise a table.
 */
var o=r(0);e.exports=n,n.notInList=!0;var i="\\",a="`",s="-",c="|",u=":",l=" ",f="\n",p="\t",h=1,d=2,g="left",m="center",v="right",b=null},function(e,t,r){"use strict";function n(e,t,r){var n,o,i,a,s,c,u,l,f,p,h=this;if(r)return!0;for(n=h.inlineMethods,a=n.length,o=h.inlineTokenizers,i=-1,f=t.length;++i<a;)"text"!==(l=n[i])&&o[l]&&(u=o[l].locator,u||e.file.fail("Missing locator: `"+l+"`"),-1!==(c=u.call(h,t,1))&&c<f&&(f=c));s=t.slice(0,f),p=e.now(),h.decode(s,p,function(t,r,n){e(n||t)({type:"text",value:t})})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:text
 * @fileoverview Tokenise text.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t,r){for(var n,f,p,h,d=-1,g=t.length+1,m="";++d<g&&((n=t.charAt(d))===i||n===a);)m+=n;if(n===s||n===u||n===c)for(f=n,m+=n,p=1,h="";++d<g;)if((n=t.charAt(d))===f)p++,m+=h+f,h="";else{if(n!==a)return p>=l&&(!n||n===o)?(m+=h,!!r||e(m)({type:"thematicBreak"})):void 0;h+=n}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:thematic-break
 * @fileoverview Tokenise a thematic break.
 */
e.exports=n;var o="\n",i="\t",a=" ",s="*",c="_",u="-",l=3},function(e,t,r){"use strict";function n(e,t,r){var n,a,m,v,b,y,x,w,A,k,q,E,L=this;if(L.options.gfm){for(n="",v=-1,w=g;++v<w;)if(y=d[v],x=t.slice(0,y.length),x.toLowerCase()===y){n=x;break}if(n){for(v=n.length,w=t.length,A="",k=0;v<w&&(m=t.charAt(v),!i(m)&&m!==f)&&("."!==m&&","!==m&&":"!==m&&";"!==m&&'"'!==m&&"'"!==m&&")"!==m&&"]"!==m||(q=t.charAt(v+1))&&!i(q))&&(m!==u&&m!==s||k++,m!==l&&m!==c||!(--k<0));)A+=m,v++;if(A){if(n+=A,a=n,y===h){if(-1===(b=A.indexOf(p))||b===w-1)return;a=a.substr(h.length)}return!!r||(E=L.enterLink(),a=L.tokenizeInline(a,e.now()),E(),e(n)({type:"link",title:null,url:o(n),children:a}))}}}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:url
 * @fileoverview Tokenise a URL.
 */
var o=r(6),i=r(0),a=r(73);e.exports=n,n.locator=a,n.notInLink=!0;var s="[",c="]",u="(",l=")",f="<",p="@",h="mailto:",d=["http://","https://",h],g=d.length},function(e,t,r){"use strict";function n(e,t,r){var n,s,c,u,l,f,p=this;if(p.options.yaml&&t.charAt(0)===i&&t.charAt(1)===i&&t.charAt(2)===i&&t.charAt(3)===a)for(n=o+a,s="",f="",c=3,u=t.length;++c<u;){if((l=t.charAt(c))===i&&(f||!s)&&t.charAt(c+1)===i&&t.charAt(c+2)===i)return!!r||(n+=f+o,e(n)({type:"yaml",value:s}));l===a?f+=l:(n+=f+l,s+=f+l,f="")}}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:yaml
 * @fileoverview Tokenise YAML.
 */
e.exports=n,n.onlyAtStart=!0;var o="---",i="-",a="\n"},function(e,t,r){"use strict";function n(e){var t,r;return"text"!==e.type||!e.position||(t=e.position.start,r=e.position.end,t.line!==r.line||r.column-t.column===e.value.length)}function o(e,t){return e.value+=t.value,e}function i(e,t){return this.options.commonmark?t:(e.children=e.children.concat(t.children),e)}function a(e){function t(t,r){function o(e){for(var t=-1,r=e.indexOf("\n");-1!==r;)q++,t=r,r=e.indexOf("\n",r+1);-1===t?E+=e.length:E=e.length-t,q in x&&(-1!==t?E+=x[q]:E<=x[q]&&(E=x[q]+1))}function i(){var e=[],t=q+1;return function(){for(var r=q+1;t<r;)e.push((x[t]||0)+1),t++;return e}}function a(){var e={line:q,column:E};return e.offset=y.toOffset(e),e}function c(e){this.start=e,this.end=a()}function u(e){t.substring(0,e.length)!==e&&y.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),a())}function l(){function e(e,r){var n=e.position,o=n?n.start:t,i=[],a=n&&n.end.line,s=t.line;if(e.position=new c(o),n&&r&&n.indent){if(i=n.indent,a<s){for(;++a<s;)i.push((x[a]||0)+1);i.push(t.column)}r=i.concat(r)}return e.position.indent=r||[],e}var t=a();return e}function f(e,t){var r=t?t.children:w,o=r[r.length-1];return o&&e.type===o.type&&e.type in s&&n(o)&&n(e)&&(e=s[e.type].call(y,o,e)),e!==o&&r.push(e),y.atStart&&0!==w.length&&y.exitStart(),e}function p(e){function r(e,t){return p(f(p(e),t),c)}function n(){var n=r.apply(null,arguments);return q=h.line,E=h.column,t=e+t,n}function s(){var r=p({});return q=h.line,E=h.column,t=e+t,r.position}var c=i(),p=l(),h=a();return u(e),r.reset=n,n.test=s,r.test=s,t=t.substring(e.length),o(e),c=c(),r}var h,d,g,m,v,b,y=this,x=y.offset,w=[],A=y[e+"Methods"],k=y[e+"Tokenizers"],q=r.line,E=r.column;if(!t)return w;for(p.now=a,p.file=y.file,o("");t;){for(h=-1,d=A.length,v=!1;++h<d&&(m=A[h],!(g=k[m])||g.onlyAtStart&&!y.atStart||g.notInList&&y.inList||g.notInBlock&&y.inBlock||g.notInLink&&y.inLink||(b=t.length,g.apply(y,[p,t]),!(v=b!==t.length))););v||y.file.fail(new Error("Infinite loop"),p.now())}return y.eof=a(),w}return t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenizer
 * @fileoverview Markdown tokenizer.
 */
e.exports=a;var s={text:o,blockquote:i}},function(e,t,r){"use strict";function n(e,t){function r(r){for(var n,o=0,i=r.indexOf("\\"),a=e[t],s=[];-1!==i;)s.push(r.slice(o,i)),o=i+1,n=r.charAt(o),n&&-1!==a.indexOf(n)||s.push("\\"),i=r.indexOf("\\",o);return s.push(r.slice(o)),s.join("")}return r}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:unescape
 * @fileoverview Unescape escapes.
 */
e.exports=n},function(e,t,r){"use strict";function n(e,t){var r,n,l,f,p=e.split(c),h=p.length+1,d=1/0,g=[];for(p.unshift(i(s,t)+"!");h--;)if(n=a(p[h]),g[h]=n.stops,0!==o(p[h]).length){if(!n.indent){d=1/0;break}n.indent>0&&n.indent<d&&(d=n.indent)}if(d!==1/0)for(h=p.length;h--;){for(l=g[h],r=d;r&&!(r in l);)r--;f=0!==o(p[h]).length&&d&&r!==d?u:"",p[h]=f+p[h].slice(r in l?l[r]+1:0)}return p.shift(),p.join(c)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:remove-indentation
 * @fileoverview Remove indentation.
 */
var o=r(4),i=r(1),a=r(25);e.exports=n;var s=" ",c="\n",u="\t"},function(e,t,r){"use strict";function n(e){var t=o(a);t.prototype.options=i(t.prototype.options,this.data("settings"),e),this.Compiler=t}var o=r(33),i=r(2),a=r(107);e.exports=n,n.Compiler=a},function(e,t,r){"use strict";function n(e,t){this.inLink=!1,this.inTable=!1,this.tree=e,this.file=t,this.options=o(this.options),this.setOptions({})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify
 * @fileoverview Markdown compiler
 */
var o=r(2),i=r(32);e.exports=n;var a=n.prototype;a.enterLink=i("inLink",!1),a.enterTable=i("inTable",!1),a.enterLinkReference=r(117),a.options=r(27),a.setOptions=r(115),a.compile=r(111),a.visit=r(112),a.all=r(109),a.block=r(110),a.visitOrderedItems=r(113),a.visitUnorderedItems=r(114),a.visitors={root:r(137),text:r(141),heading:r(127),paragraph:r(136),blockquote:r(118),list:r(135),listItem:r(134),inlineCode:r(131),yaml:r(143),code:r(120),html:r(128),thematicBreak:r(142),strong:r(138),emphasis:r(123),break:r(119),delete:r(122),link:r(133),linkReference:r(132),imageReference:r(129),definition:r(121),image:r(130),footnote:r(126),footnoteReference:r(125),footnoteDefinition:r(124),table:r(140),tableCell:r(139)}},function(e,t,r){"use strict";function n(e){function t(t,r,n){function d(e){return-1===C.indexOf(e)?g[e]:p+e}var m,v,b,y,x,w,A=this,k=e.gfm,q=e.commonmark,E=e.pedantic,L=q?[".",")"]:["."],O=n&&n.children,S=O&&O.indexOf(r),T=O&&O[S-1],j=O&&O[S+1],R=t.length,C=l(e),I=-1,D=[],N=D;for(m=T?i(T)&&/\n\s*$/.test(T.value):!n||"root"===n.type||"paragraph"===n.type;++I<R;){if(v=t.charAt(I),w=!1,"\n"===v)m=!0;else if(v===p||"`"===v||"*"===v||"["===v||"<"===v||"&"===v&&f(t.slice(I))>0||"]"===v&&A.inLink||k&&"~"===v&&"~"===t.charAt(I+1)||k&&"|"===v&&(A.inTable||o(t,I))||"_"===v&&I>0&&I<R-1&&(E||!c(t.charAt(I-1))||!c(t.charAt(I+1)))||k&&!A.inLink&&":"===v&&a(D.join("")))w=!0;else if(m)if(">"===v||"#"===v||-1!==h.indexOf(v))w=!0;else if(s(v)){for(x=I+1;x<R&&s(t.charAt(x));)x++;-1!==L.indexOf(t.charAt(x))&&((j=t.charAt(x+1))&&" "!==j&&"\t"!==j&&"\n"!==j||(D.push(t.slice(I,x)),I=x,v=t.charAt(I),w=!0))}m&&!u(v)&&(m=!1),D.push(w?d(v):v)}if(O&&i(r)){if(T&&"shortcut"===T.referenceType){for(I=-1,R=N.length;++I<R;)if(" "!==(v=N[I])&&"\t"!==v){"("!==v&&":"!==v||(N[I]=d(v));break}i(j)&&I===R&&"("===j.value.charAt(0)&&N.push(p)}k&&!A.inLink&&i(T)&&":"===t.charAt(0)&&a(T.value.slice(-6))&&(N[0]=d(":")),i(j)&&"&"===t.charAt(R-1)&&0!==f("&"+j.value)&&(N[N.length-1]=d("&")),k&&i(j)&&"~"===t.charAt(R-1)&&"~"===j.value.charAt(0)&&N.splice(N.length-1,0,p),b=i(T)&&c(T.value.slice(-1)),y=i(j)&&c(j.value.charAt(0)),1===R?"_"!==t||!E&&b&&y||N.unshift(p):("_"!==t.charAt(0)||!E&&b&&c(t.charAt(1))||N.unshift(p),"_"!==t.charAt(R-1)||!E&&y&&c(t.charAt(R-2))||N.splice(N.length-1,0,p))}return N.join("")}return t}function o(e,t){var r=e.lastIndexOf("\n",t),n=e.indexOf("\n",t);for(r=-1===r?-1:r,n=-1===n?e.length:n;++r<n;)if(-1===d.indexOf(e.charAt(r)))return!1;return!0}function i(e){return e&&"text"===e.type}function a(e){var t=e.slice(-6).toLowerCase();return"mailto"===t||"https"===t.slice(-5)||"http"===t.slice(-4)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:escape
 * @fileoverview Escape text to prevent it turning
 *   into markdown syntax.
 */
var s=r(5),c=r(54),u=r(0),l=r(21),f=r(28);e.exports=n;var p="\\",h=["*","-","+"],d=[":","-"," ","|"],g={"<":"&lt;",":":"&#x3A;","&":"&amp;","|":"&#x7C;","~":"&#x7E;"}},function(e,t,r){"use strict";function n(e){for(var t=this,r=e.children,n=r.length,o=[],i=-1;++i<n;)o[i]=t.visit(r[i],e);return o}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:all
 * @fileoverview Stringify children in a node.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){for(var t,r,n=this,o=[],i=e.children,a=i.length,s=-1;++s<a;)t=i[s],r&&(t.type===r.type&&"list"===r.type?o.push(r.ordered===t.ordered?"\n\n\n":"\n\n"):"list"!==r.type||"code"!==t.type||t.lang?o.push("\n\n"):o.push("\n\n\n")),o.push(n.visit(t,e)),r=t;return o.join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:block
 * @fileoverview Stringify a block.
 */
e.exports=n},function(e,t,r){"use strict";function n(){return this.visit(o(this.tree,this.options.commonmark))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:compile
 * @fileoverview Compile the given node.
 */
var o=r(61);e.exports=n},function(e,t,r){"use strict";function n(e,t){var r=this,n=r.visitors;return"function"!=typeof n[e.type]&&r.file.fail(new Error("Missing compiler for node of type `"+e.type+"`: `"+e+"`"),e),n[e.type].call(r,e,t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:one
 * @fileoverview Stringify a node.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){for(var t,r=this,n=r.visitors.listItem,o=r.options.incrementListMarker,i=[],a=e.start,s=e.children,c=s.length,u=-1;++u<c;)t=(o?a+u:a)+".",i[u]=n.call(r,s[u],e,u,t);return i.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:ordered-items
 * @fileoverview Stringify ordered list items.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){for(var t=this,r=t.options.bullet,n=t.visitors.listItem,o=e.children,i=o.length,a=-1,s=[];++a<i;)s[a]=n.call(t,o[a],e,a,r);return s.join("\n")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:macro:unordered-items
 * @fileoverview Stringify unordered list items.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){var t,r,n=this,i=n.options;if(null==e)e={};else{if("object"!=typeof e)throw new Error("Invalid value `"+e+"` for setting `options`");e=u(e)}for(r in f)g[typeof f[r]](e,r,i[r],d[r]);return t=e.ruleRepetition,t&&t<3&&o(t,"options.ruleRepetition"),n.encode=c(String(e.entities)),n.escape=p(e),n.options=e,n}function o(e,t){throw new Error("Invalid value `"+e+"` for setting `"+t+"`")}function i(e,t,r){var n=e[t];null==n&&(n=r),"boolean"!=typeof n&&o(n,"options."+t),e[t]=n}function a(e,t,r){var n=e[t];null==n&&(n=r),isNaN(n)&&o(n,"options."+t),e[t]=n}function s(e,t,r,n){var i=e[t];null==i&&(i=r),i=String(i),i in n||o(i,"options."+t),e[t]=i}function c(e){function t(e){return l(e,r)}var r={};return"false"===e?h:("true"===e&&(r.useNamedReferences=!0),"escape"===e&&(r.escapeOnly=!0,r.useNamedReferences=!0),t)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:set-options
 * @fileoverview Set configuration.
 */
var u=r(2),l=r(147),f=r(27),p=r(108),h=r(31);e.exports=n;var d={entities:{true:!0,false:!0,numbers:!0,escape:!0},bullet:{"*":!0,"-":!0,"+":!0},rule:{"-":!0,_:!0,"*":!0},listItemIndent:{tab:!0,mixed:!0,1:!0},emphasis:{_:!0,"*":!0},strong:{_:!0,"*":!0},fence:{"`":!0,"~":!0}},g={boolean:i,string:s,number:a}},function(e,t,r){"use strict";function n(e,t){for(var r,n=e.length,a=t.length,s=[],c=0,u=0;u<n;){for(r=u;u<n&&!i.test(e.charAt(u));)u+=1;for(s.push(e.slice(r,u));c<a&&!i.test(t.charAt(c));)c+=1;for(r=c;c<a&&i.test(t.charAt(c));)"&"===t.charAt(c)&&(c+=o(t.slice(c))),c+=1;for(s.push(t.slice(r,c));u<n&&i.test(e.charAt(u));)u+=1}return s.join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:copy-identifier-encoding
 * @fileoverview Encode based on the identifier.
 */
var o=r(28);e.exports=n;var i=/[-!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~_]/},function(e,t,r){"use strict";function n(e,t){var r=e.encode,n=e.escape,i=e.enterLink();return"shortcut"!==t.referenceType&&"collapsed"!==t.referenceType?i:(e.escape=o,e.encode=o,function(){e.encode=r,e.escape=n,i()})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:util:enter-link-reference
 * @fileoverview Enter a reference.
 */
var o=r(31);e.exports=n},function(e,t,r){"use strict";function n(e){for(var t,r=this.block(e).split("\n"),n=[],o=r.length,i=-1;++i<o;)t=r[i],n[i]=(t?" ":"")+t;return">"+n.join("\n>")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:blockquote
 * @fileoverview Stringify a blockquote.
 */
e.exports=n},function(e,t,r){"use strict";function n(){return o[this.options.commonmark]}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:break
 * @fileoverview Stringify a break.
 */
e.exports=n;var o={true:"\\\n",false:"  \n"}},function(e,t,r){"use strict";function n(e,t){var r,n=this,c=e.value,u=n.options,l=u.fence,f=n.encode(e.lang||"",e);return f||u.fences||!c?(r=o(c,l)+1,s.test(c)&&(c=a(c,1)),(r=i(l,Math.max(r,3)))+f+"\n"+c+"\n"+r):(t&&"listItem"===t.type&&"tab"!==u.listItemIndent&&u.pedantic&&n.file.fail("Cannot indent code properly. See http://git.io/vgFvT",e.position),a(c,1))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:code
 * @fileoverview Stringify code.
 */
var o=r(20),i=r(1),a=r(30);e.exports=n;var s=/([`~])\1{2}/},function(e,t,r){"use strict";function n(e){var t=o(e.url);return e.title&&(t+=" "+i(e.title)),"["+e.identifier+"]: "+t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:definition
 * @fileoverview Stringify a definition.
 */
var o=r(12),i=r(11);e.exports=n},function(e,t,r){"use strict";function n(e){return"~~"+this.all(e).join("")+"~~"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:delete
 * @fileoverview Stringify a delete.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){var t=this.options.emphasis;return t+this.all(e).join("")+t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:emphasis
 * @fileoverview Stringify a emphasis.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return"[^"+e.identifier.toLowerCase()+"]: "+this.all(e).join("\n\n"+o(" ",4))}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote-definition
 * @fileoverview Stringify a footnote-definition.
 */
var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e){return"[^"+e.identifier+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote-reference
 * @fileoverview Stringify a footnote reference.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return"[^"+this.all(e).join("")+"]"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:footnote
 * @fileoverview Stringify a footnote.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){var t,r=this,n=e.depth,i=r.options.setext,a=r.options.closeAtx,s=r.all(e).join("");return i&&n<3?s+"\n"+o(1===n?"=":"-",s.length):(t=o("#",e.depth))+" "+s+(a?" "+t:"")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:heading
 * @fileoverview Stringify a heading.
 */
var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e){return e.value}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:html
 * @fileoverview Stringify html.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return"!["+(this.encode(e.alt,e)||"")+"]"+o(e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:image-reference
 * @fileoverview Stringify an image reference.
 */
var o=r(29);e.exports=n},function(e,t,r){"use strict";function n(e){var t=this,r=o(t.encode(e.url||"",e)),n=t.enterLink(),a=t.encode(t.escape(e.alt||"",e));return n(),e.title&&(r+=" "+i(t.encode(e.title,e))),"!["+a+"]("+r+")"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:image
 * @fileoverview Stringify an image.
 */
var o=r(12),i=r(11);e.exports=n},function(e,t,r){"use strict";function n(e){var t=e.value,r=i("`",o(t,"`")+1),n=r,a=r;return"`"===t.charAt(0)&&(n+=" "),"`"===t.charAt(t.length-1)&&(a=" "+a),n+t+a}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:inline-code
 * @fileoverview Stringify inline code.
 */
var o=r(20),i=r(1);e.exports=n},function(e,t,r){"use strict";function n(e){var t=this,r=e.referenceType,n=t.enterLinkReference(t,e),a=t.all(e).join("");return n(),"shortcut"!==r&&"collapsed"!==r||(a=o(a,e.identifier)),"["+a+"]"+i(e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:link-reference
 * @fileoverview Stringify a link reference.
 */
var o=r(116),i=r(29);e.exports=n},function(e,t,r){"use strict";function n(e){var t=this,r=t.encode(e.url||"",e),n=t.enterLink(),s=t.encode(t.escape(e.url||"",e)),c=t.all(e).join("");return n(),null!=e.title||!a.test(r)||s!==c&&s!=="mailto:"+c?(r=o(r),e.title&&(r+=" "+i(t.encode(t.escape(e.title,e),e))),"["+c+"]("+r+")"):o(t.encode(e.url),!0)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:link
 * @fileoverview Stringify a link.
 */
var o=r(12),i=r(11);e.exports=n;var a=/^[a-z][a-z+.-]+:\/?/i},function(e,t,r){"use strict";function n(e,t,r,n){for(var s,c,u,l=this,f=l.options.listItemIndent,p=e.loose,h=e.children,d=h.length,g=[],m=-1;++m<d;)g[m]=l.visit(h[m],e);return s=a[e.checked]+g.join(p?"\n\n":"\n"),"1"===f||"mixed"===f&&-1===s.indexOf("\n")?(c=n.length+1,u=" "):(c=4*Math.ceil((n.length+1)/4),u=o(" ",c-n.length)),s=n+u+i(s,c/4).slice(c),p&&t.children.length-1!==r&&(s+="\n"),s}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:list-item
 * @fileoverview Stringify a list item.
 */
var o=r(1),i=r(30);e.exports=n;var a={undefined:"",null:"",true:"[x] ",false:"[ ] "}},function(e,t,r){"use strict";function n(e){return this[o[e.ordered]](e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:list
 * @fileoverview Stringify a list.
 */
e.exports=n;var o={true:"visitOrderedItems",false:"visitUnorderedItems"}},function(e,t,r){"use strict";function n(e){return this.all(e).join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:paragraph
 * @fileoverview Stringify a paragraph.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){return this.block(e)+"\n"}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:root
 * @fileoverview Stringify a root.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){var t=o(this.options.strong,2);return t+this.all(e).join("")+t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:strong
 * @fileoverview Stringify a strong.
 */
var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e){return this.all(e).join("")}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:table-cell
 * @fileoverview Stringify a table-cell.
 */
e.exports=n},function(e,t,r){"use strict";function n(e){for(var t,r,n=this,i=n.options.looseTable,a=n.options.spacedTable,s=n.options.paddedTable,c=e.children,u=c.length,l=n.enterTable(),f=[];u--;)f[u]=n.all(c[u]);return l(),i?(t="",r=""):a?(t="| ",r=" |"):(t="|",r="|"),o(f,{align:e.align,pad:s,start:t,end:r,delimiter:a?" | ":"|"})}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:table
 * @fileoverview Stringify a table.
 */
var o=r(58);e.exports=n},function(e,t,r){"use strict";function n(e,t){return this.encode(this.escape(e.value,e,t),e)}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:text
 * @fileoverview Stringify a text.
 */
e.exports=n},function(e,t,r){"use strict";function n(){var e=this.options,t=o(e.rule,e.ruleRepetition);return e.ruleSpaces?t.split("").join(" "):t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:thematic-break
 * @fileoverview Stringify a thematic-break.
 */
var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e){var t=o("-",3);return t+(e.value?"\n"+e.value:"")+"\n"+t}/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:stringify:visitors:yaml
 * @fileoverview Stringify yaml.
 */
var o=r(1);e.exports=n},function(e,t,r){"use strict";var n=r(153),o=r(64),i=r(106);e.exports=n().use(o).use(i).freeze()},function(e,t,r){"use strict";function n(e,t){if("string"!=typeof e)return e;if(0===e.length)return e;var r=o.basename(e,o.extname(e))+t;return o.join(o.dirname(e),r)}var o=r(7);e.exports=n},function(e,t){e.exports=["cent","copy","divide","gt","lt","not","para","times"]},function(e,t,r){"use strict";function n(e,t){var r=t||{},n=r.subset,o=n?c(n):v,a=r.escapeOnly,u=r.omitOptionalSemicolons;return e=e.replace(o,function(e,t,n){return i(e,n.charAt(t+1),r)}),n||a?e:e.replace(b,function(e,t,r){return s(1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536,r.charAt(t+2),u)}).replace(y,function(e,t,n){return i(e,n.charAt(t+1),r)})}function o(e){return n(e,{escapeOnly:!0,useNamedReferences:!0})}function i(e,t,r){var n,o,i=r.useShortestReferences,c=r.omitOptionalSemicolons;return(i||r.useNamedReferences)&&f(m,e)&&(n=a(m[e],t,c,r.attribute)),!i&&n||(o=s(e.charCodeAt(0),t,c)),n&&(!i||n.length<o.length)?n:o}function a(e,t,r,n){var o="&"+e;return r&&f(l,e)&&-1===d.indexOf(e)&&(!n||t&&"="!==t&&!h(t))?o:o+";"}function s(e,t,r){var n="&#x"+e.toString(16).toUpperCase();return r&&t&&!p(t)?n:n+";"}function c(e){return new RegExp("["+e.join("")+"]","g")}var u=r(44),l=r(16),f=r(3),p=r(19),h=r(18),d=r(146);e.exports=n,n.escape=o;var g=['"',"'","<",">","&","`"],m=function(){var e,t={};for(e in u)t[u[e]]=e;return t}(),v=c(g),b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,y=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g},function(e,t,r){"use strict";var n=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},o=r(42).upperBound,i=function(e,t){this.line=e,this.column=t};t.Position=i;var a=function(e,t){this.start=e,this.end=t};t.SourceLocation=a;var s=function(){var e=function(e){this.indice=[0];var t=/[\r\n\u2028\u2029]/g,r=e.length;for(t.lastIndex=0;;){var n=t.exec(e);if(!n)break;var o=n.index;13===e.charCodeAt(o)&&10===e.charCodeAt(o+1)&&(o+=1);var i=o+1;if(r<i)break;this.indice.push(i),t.lastIndex=i}};return e.prototype.locationToRange=function(e){return[this.positionToIndex(e.start),this.positionToIndex(e.end)]},e.prototype.rangeToLocation=function(e){return new a(this.indexToPosition(e[0]),this.indexToPosition(e[1]))},e.prototype.positionToIndex=function(e){return this.indice[e.line-1]+e.column},e.prototype.indexToPosition=function(e){var t=o(this.indice,e);return new i(t,e-this.indice[t-1])},n(e,null,{line:{get:function(){return this.indice.length}}}),e}();t.default=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(63),s=n(a),c=r(13),u=n(c),l=function(){function e(t){o(this,e),this.rootNode=t,this.tokenMaps=[],this.generatedString="",this._stringify(this.rootNode),this.originalSource=new u.default(this.rootNode.raw),this.generatedSource=new u.default(this.generatedString)}return i(e,[{key:"toString",value:function(){return this.generatedString}},{key:"originalIndexFor",value:function(e){return this.originalIndexFromIndex(e)}},{key:"originalPositionFor",value:function(e,t){return this.originalPositionFromPosition(e,t)}},{key:"originalIndexFromIndex",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.tokenMaps.filter(function(r,n){var o=r.generated,i=t.tokenMaps[n+1],a=i?i.generated:null;if(a){if(o[0]<=e&&e<=a[0])return!0}else if(o[0]<=e&&e<=o[1])return!0});if(0!==n.length){var o=r?n[0]:n[n.length-1];return e-o.generated[0]+(o.intermediate[0]-o.original[0])+o.original[0]}}},{key:"originalPositionFromPosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===e.line||void 0===e.column)throw new Error("position.{line, column} should not undefined: "+JSON.stringify(e));var r=this.generatedSource.positionToIndex(e);if(!isNaN(r)){var n=this.originalIndexFromIndex(r,t);return this.originalSource.indexToPosition(n,t)}}},{key:"originalIndexFromPosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.originalPositionFromPosition(e);return this.originalSource.positionToIndex(r,t)}},{key:"originalPositionFromIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.originalIndexFromIndex(e);return this.originalSource.indexToPosition(r,t)}},{key:"isParagraphNode",value:function(e){return"Paragraph"===e.type}},{key:"isStringNode",value:function(e){return"Str"===e.type}},{key:"_getValue",value:function(e){return e.value?e.value:e.alt?e.alt:e.title?e.title:void 0}},{key:"_nodeRangeAsRelative",value:function(e){return[e.range[0]-this.rootNode.range[0],e.range[1]-this.rootNode.range[0]]}},{key:"_valueOf",value:function(e,t){if(e){var r=this._getValue(e);if(r&&null!=t){if(this.isParagraphNode(t)&&this.isStringNode(e))return{original:this._nodeRangeAsRelative(e),intermediate:this._nodeRangeAsRelative(e),value:r};var n=this.isParagraphNode(t)?e:t,o=n.raw,i=-1===o.indexOf(r,1)?0:o.indexOf(r,1),a=o.length-(i+r.length),s=this._nodeRangeAsRelative(n);return{original:s,intermediate:[s[0]+i,s[1]-a],value:r}}}}},{key:"_addTokenMap",value:function(e){if(null!=e){var t=(0,s.default)({},e);if(0===this.tokenMaps.length){var r=t.intermediate[1]-t.intermediate[0];t.generated=[0,r]}else{var n=t.intermediate[1]-t.intermediate[0];t.generated=[this.generatedString.length,this.generatedString.length+n]}this.generatedString+=e.value,this.tokenMaps.push(t)}}},{key:"_stringify",value:function(e,t){var r=this,n=this._valueOf(e,t);if(n)return n;e.children&&e.children.forEach(function(t){var n=r._stringify(t,e);n&&r._addTokenMap(n)})}}]),e}();t.default=l},function(e,t,r){"use strict";var n=r(149),o=function(e){return e&&e.__esModule?e:{default:e}}(n);e.exports=o.default},function(e,t){function r(e){this.value=e}function n(e,t,r){var n=[],i=[],a=!0;return function e(s){function c(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=h(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<i.length;e++)if(i[e].node_===s){p.circular=i[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}var u=r?o(s):s,l={},f=!0,p={node:u,node_:s,path:[].concat(n),parent:i[i.length-1],parents:i,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(f=!1)},delete:function(e){delete p.parent.node[p.key],e&&(f=!1)},remove:function(e){d(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(f=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){a=!1},block:function(){f=!1}};if(!a)return p;c();var v=t.call(p,p.node);return void 0!==v&&p.update&&p.update(v),l.before&&l.before.call(p,p.node),f?("object"!=typeof p.node||null===p.node||p.circular||(i.push(p),c(),g(p.keys,function(t,o){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var i=e(p.node[t]);r&&m.call(p.node,t)&&(p.node[t]=i.node),i.isLast=o==p.keys.length-1,i.isFirst=0==o,l.post&&l.post.call(p,i),n.pop()}),i.pop()),l.after&&l.after.call(p,p.node),p):p}(e).node}function o(e){if("object"==typeof e&&null!==e){var t;if(d(e))t=[];else if(a(e))t=new Date(e.getTime?e.getTime():e);else if(s(e))t=new RegExp(e);else if(c(e))t={message:e.message};else if(u(e))t=new Boolean(e);else if(l(e))t=new Number(e);else if(f(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return g(h(e),function(r){t[r]=e[r]}),t}return e}function i(e){return Object.prototype.toString.call(e)}function a(e){return"[object Date]"===i(e)}function s(e){return"[object RegExp]"===i(e)}function c(e){return"[object Error]"===i(e)}function u(e){return"[object Boolean]"===i(e)}function l(e){return"[object Number]"===i(e)}function f(e){return"[object String]"===i(e)}var p=e.exports=function(e){return new r(e)};r.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!m.call(t,n)){t=void 0;break}t=t[n]}return t},r.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!m.call(t,n))return!1;t=t[n]}return!0},r.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var o=e[n];m.call(r,o)||(r[o]={}),r=r[o]}return r[e[n]]=t,t},r.prototype.map=function(e){return n(this.value,e,!0)},r.prototype.forEach=function(e){return this.value=n(this.value,e,!1),this.value},r.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach(function(t){this.isRoot&&r||(n=e.call(this,n,t))}),n},r.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},r.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},r.prototype.clone=function(){var e=[],t=[];return function r(n){for(var i=0;i<e.length;i++)if(e[i]===n)return t[i];if("object"==typeof n&&null!==n){var a=o(n);return e.push(n),t.push(a),g(h(n),function(e){a[e]=r(n[e])}),e.pop(),t.pop(),a}return n}(this.value)};var h=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},g=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};g(h(r.prototype),function(e){p[e]=function(t){var n=[].slice.call(arguments,1),o=new r(t);return o[e].apply(o,n)}});var m=Object.hasOwnProperty||function(e,t){return t in e}},function(e,t,r){"use strict";function n(){function e(){function e(s){var c=r[++t],u=i.call(arguments,0),l=u.slice(1),f=n.length,p=-1;if(s)return void a(s);for(;++p<f;)null!==l[p]&&void 0!==l[p]||(l[p]=n[p]);n=l,c?o(c,e).apply(null,n):a.apply(null,[null].concat(n))}var t=-1,n=i.call(arguments,0,-1),a=arguments[arguments.length-1];if("function"!=typeof a)throw new Error("Expected function as last argument, not "+a);e.apply(null,[null].concat(n))}function t(e){if("function"!=typeof e)throw new Error("Expected `fn` to be a function, not "+e);return r.push(e),n}var r=[],n={};return n.run=e,n.use=t,n}function o(e,t){function r(){var t,r=i.call(arguments,0),s=e.length>r.length;s&&r.push(n);try{t=e.apply(null,r)}catch(e){if(s&&a)throw e;return n(e)}s||(t&&"function"==typeof t.then?t.then(o,n):t instanceof Error?n(t):o(t))}function n(){a||(a=!0,t.apply(null,arguments))}function o(e){n(null,e)}var a;return r}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module trough
 * @fileoverview Middleware.  Inspired by `segmentio/ware`,
 *   but able to change the values from transformer to
 *   transformer.
 */
e.exports=n;var i=[].slice},function(e,t,r){"use strict";function n(e,t){t.tree=e.parse(t.file)}function o(e,t,r){function n(e,n,o){e?r(e):(t.tree=n,t.file=o,r())}e.run(t.tree,t.file,n)}function i(e,t){t.file.contents=e.stringify(t.tree,t.file)}function a(){function e(){for(var e=a(),t=S.length,r=-1;++r<t;)e.use.apply(null,S[r]);return e.data(g(!0,{},j)),e}function t(){var t,r,n,o;if(R)return e;for(;++C<S.length;)t=S[C],r=t[0],n=t[1],o=null,!1!==n&&(!0===n&&(t[1]=void 0),o=r.apply(e,t.slice(1)),x(o)&&T.use(o));return R=!0,C=1/0,e}function r(t,r){return y(t)?2===arguments.length?(f("data",R),j[t]=r,e):d(j,t)&&j[t]||null:t?(f("data",R),j=t,e):j}function n(t){function r(e){i(e.plugins),e.settings&&(s=g(s||{},e.settings))}function n(e){if(x(e))a(e);else{if("object"!=typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?a.apply(null,e):r(e)}}function i(e){var t,r;if(null===e||void 0===e);else{if(!("object"==typeof e&&"length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(t=e.length,r=-1;++r<t;)n(e[r])}}function a(e,t){var r=o(e);r?(w(r[1])&&w(t)&&(t=g(r[1],t)),r[1]=t):S.push(A.call(arguments))}var s;if(f("use",R),null===t||void 0===t);else if(x(t))a.apply(null,arguments);else{if("object"!=typeof t)throw new Error("Expected usable value, not `"+t+"`");"length"in t?i(t):r(t)}return s&&(j.settings=g(j.settings||{},s)),e}function o(e){for(var t,r=S.length,n=-1;++n<r;)if(t=S[n],t[0]===e)return t}function i(r){var n,o=v(r);return t(),n=e.Parser,u("parse",n),s(n)?new n(String(o),o).parse():n(String(o),o)}function c(e,r,n){function o(t,o){function i(r,i,a){i=i||e,r?o(r):t?t(i):n(null,i,a)}T.run(e,v(r),i)}if(p(e),t(),!n&&x(r)&&(n=r,r=null),!n)return new Promise(o);o(null,n)}function q(e,t){function r(e,t){o=!0,m(e),n=t}var n,o=!1;return c(e,t,r),h("runSync","run",o),n}function E(r,n){var o,i=v(n);return t(),o=e.Compiler,l("stringify",o),p(r),s(o)?new o(r,i).compile():o(r,i)}function L(r,n){function o(t,o){function i(e){e?o(e):t?t(a):n(null,a)}var a=v(r);k.run(e,{file:a},i)}if(t(),u("process",e.Parser),l("process",e.Compiler),!n)return new Promise(o);o(null,n)}function O(r){function n(e){i=!0,m(e)}var o,i=!1;return t(),u("processSync",e.Parser),l("processSync",e.Compiler),o=v(r),L(o,n),h("processSync","process",i),o}var S=[],T=b(),j={},R=!1,C=-1;return e.data=r,e.freeze=t,e.attachers=S,e.use=n,e.parse=i,e.stringify=E,e.run=c,e.runSync=q,e.process=L,e.processSync=O,e}function s(e){return x(e)&&c(e.prototype)}function c(e){var t;for(t in e)return!0;return!1}function u(e,t){if(!x(t))throw new Error("Cannot `"+e+"` without `Parser`")}function l(e,t){if(!x(t))throw new Error("Cannot `"+e+"` without `Compiler`")}function f(e,t){if(t)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function p(e){if(!e||!y(e.type))throw new Error("Expected node, got `"+e+"`")}function h(e,t,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}var d=r(3),g=r(50),m=r(41),v=r(158),b=r(152),y=r(35),x=r(159),w=r(56);e.exports=a().freeze();var A=[].slice,k=b().use(n).use(o).use(i)},function(e,t,r){"use strict";function n(e){return o(i(e))}function o(e){function t(t){var r=t&&t.children;if(!r)throw new Error("Missing children in `parent` for `modifier`");return a(r,e,t)}return t}function i(e){function t(t,r){return e(t,r,this)}return t}var a=r(39);e.exports=n},function(e,t,r){"use strict";function n(e,t){return a(e,t?o:i),e}function o(e){delete e.position}function i(e){e.position=void 0}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module unist:util:remove-position
 * @fileoverview Remove `position`s from a unist tree.
 */
var a=r(34);e.exports=n},function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e?s(e,"position")||s(e,"type")?i(e.position):s(e,"start")||s(e,"end")?i(e):s(e,"line")||s(e,"column")?o(e):null:null}function o(e){return e&&"object"==typeof e||(e={}),a(e.line)+":"+a(e.column)}function i(e){return e&&"object"==typeof e||(e={}),o(e.start)+"-"+o(e.end)}function a(e){return e&&"number"==typeof e?e:1}var s=r(3);e.exports=n},function(e,t,r){"use strict";function n(e){var t=a(String(e));return{toPosition:o(t),toOffset:i(t)}}function o(e){function t(t){var r=-1,n=e.length;if(t<0)return{};for(;++r<n;)if(e[r]>t)return{line:r+1,column:t-(e[r-1]||0)+1,offset:t};return{}}return t}function i(e){function t(t){var r=t&&t.line,n=t&&t.column;return!isNaN(r)&&!isNaN(n)&&r-1 in e?(e[r-2]||0)+n-1||0:-1}return t}function a(e){for(var t=[],r=e.indexOf("\n");-1!==r;)t.push(r+1),r=e.indexOf("\n",r+1);return t.push(e.length+1),t}/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module vfile-location
 * @fileoverview Convert between positions (line and column-based)
 *   and offsets (range-based) locations in a virtual file.
 */
e.exports=n},function(e,t,r){"use strict";(function(t){function n(e){var r,o,i;if(e){if(v(e)||m(e))e={contents:e};else if("message"in e&&"messages"in e)return e}else e={};if(!(this instanceof n))return new n(e);for(this.data={},this.messages=[],this.history=[],this.cwd=t.cwd(),o=-1,i=y.length;++o<i;)r=y[o],h(e,r)&&(this[r]=e[r]);for(r in e)-1===y.indexOf(r)&&(this[r]=e[r])}function o(e){var t=this.contents||"";return m(t)?t.toString(e):String(t)}function i(e,t,r){var n,o,i=this.path,a=g(t)||"1:1";return n={start:{line:null,column:null},end:{line:null,column:null}},t&&t.position&&(t=t.position),t&&(t.start?(n=t,t=t.start):n.start=t),o=new c(e.message||e),o.name=(i?i+":":"")+a,o.file=i||"",o.reason=e.message||e,o.line=t?t.line:null,o.column=t?t.column:null,o.location=n,o.ruleId=r||null,o.source=null,o.fatal=!1,e.stack&&(o.stack=e.stack),this.messages.push(o),o}function a(){var e=this.message.apply(this,arguments);throw e.fatal=!0,e}function s(){}function c(e){this.message=e}function u(e,t){if(-1!==e.indexOf(p.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+p.sep+"`")}function l(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function f(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}var p=r(7),h=r(3),d=r(145),g=r(156),m=r(55),v=r(35);e.exports=n;var b=n.prototype;b.toString=o,b.message=i,b.fail=a,b.warn=i;var y=["history","path","basename","stem","extname","dirname"];Object.defineProperty(b,"path",{get:function(){return this.history[this.history.length-1]},set:function(e){l(e,"path"),e!==this.path&&this.history.push(e)}}),Object.defineProperty(b,"dirname",{get:function(){return v(this.path)?p.dirname(this.path):void 0},set:function(e){f(this.path,"dirname"),this.path=p.join(e||"",this.basename)}}),Object.defineProperty(b,"basename",{get:function(){return v(this.path)?p.basename(this.path):void 0},set:function(e){l(e,"basename"),u(e,"basename"),this.path=p.join(this.dirname||"",e)}}),Object.defineProperty(b,"extname",{get:function(){return v(this.path)?p.extname(this.path):void 0},set:function(e){var t=e||"";if(u(t,"extname"),f(this.path,"extname"),t){if("."!==t.charAt(0))throw new Error("`extname` must start with `.`");if(-1!==t.indexOf(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=d(this.path,t)}}),Object.defineProperty(b,"stem",{get:function(){return v(this.path)?p.basename(this.path,this.extname):void 0},set:function(e){l(e,"stem"),u(e,"stem"),this.path=p.join(this.dirname||"",e+(this.extname||""))}}),s.prototype=Error.prototype,c.prototype=new s,b=c.prototype,b.file=b.name=b.reason=b.message=b.stack="",b.fatal=b.column=b.line=null}).call(t,r(8))},function(e,t){e.exports=function(e){return"[object Function]"===Object.prototype.toString.call(e)}}]);