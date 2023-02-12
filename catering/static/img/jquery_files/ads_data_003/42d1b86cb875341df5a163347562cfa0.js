(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self;function p(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function q(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};function r(a){return-1!=ba.indexOf(a)};var t=class{constructor(a,b){this.g=b===ca?a:""}};t.prototype.i=!0;t.prototype.h=function(){return this.g.toString()};t.prototype.toString=function(){return this.g.toString()};function da(a){return a instanceof t&&a.constructor===t?a.g:"type_error:SafeUrl"}var ea=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ca={};function fa(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var ba;a:{var ha=n.navigator;if(ha){var ia=ha.userAgent;if(ia){ba=ia;break a}}ba=""};function ka(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function u(a,b){b instanceof t||b instanceof t||(b="object"==typeof b&&b.i?b.h():String(b),ea.test(b)||(b="about:invalid#zClosurez"),b=new t(b,ca));a.href=da(b)};function la(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function ma(){return r("iPhone")&&!r("iPod")&&!r("iPad")};function na(a){na[" "](a);return a}na[" "]=function(){};var pa=ma(),qa=r("iPad");var ra=ma()||r("iPod"),sa=r("iPad");var ta={},v=null;
function ua(a){var b;void 0===b&&(b=0);if(!v){v={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));ta[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===v[k]&&(v[k]=g)}}}b=ta[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],h=a[f+1];k=a[f+2];g=b[l>>2];l=b[(l&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[e++]=g+l+h+k}g=0;k=d;switch(a.length-f){case 2:g=
a[f+1],k=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+k+d}return c.join("")};var va="function"===typeof Uint8Array;function wa(a){return xa(a,b=>b,b=>new Uint8Array(b))}function ya(a,b,c){return"object"===typeof a?va&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):xa(a,b,c):b(a)}function xa(a,b,c){if(Array.isArray(a)){var d=Array(a.length);for(var e=0;e<a.length;e++){var f=a[e];null!=f&&(d[e]=ya(f,b,c))}Array.isArray(a)&&a[za]&&y(d);return d}d={};for(e in a)f=a[e],null!=f&&(d[e]=ya(f,b,c));return d}
function Aa(a){return xa(a,b=>"number"===typeof b?isFinite(b)?b:String(b):b,b=>ua(b))}const za=Symbol("IS_REPEATED_FIELD");function y(a){Array.isArray(a)&&!Object.isFrozen(a)&&(a[za]=!0);return a}let z;function Ba(a){if(a.i){if(a.j){var b=a.g;for(var c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var d=b[c].g;d&&d.m()}}}else{a.h.length=0;b=A(a);b.sort();for(c=0;c<b.length;c++){d=a.g[b[c]];const e=d.g;e&&e.m();a.h.push([d.key,d.value])}a.i=!0}return a.h}function A(a){a=a.g;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function B(a,b){return a.j?(b.g||(b.g=new a.j(b.value),a.isFrozen()&&null(b.g)),b.g):b.value}
function Ca(a,b){const c=A(a);c.sort();for(let d=0;d<c.length;d++){const e=a.g[c[d]];b.call(void 0,B(a,e),e.key,a)}}
class Da{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];const c=b[0];this.g[c.toString()]=new Ea(c,b[1])}this.i=!0}}isFrozen(){return!1}toJSON(){const a=Ba(this);return z?a:Aa(a)}m(){return this.toJSON()}I(){return Ba(this)}entries(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++){const d=this.g[b[c]];a.push([d.key,B(this,d)])}return new Ia(a)}keys(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.g[b[c]].key);
return new Ia(a)}values(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(B(this,this.g[b[c]]));return new Ia(a)}set(a,b){const c=new Ea(a);this.j?(c.g=b,c.value=b.I()):c.value=b;this.g[a.toString()]=c;this.i=!1;return this}get(a){if(a=this.g[a.toString()])return B(this,a)}has(a){return a.toString()in this.g}[Symbol.iterator](){return this.entries()}}class Ea{constructor(a,b){this.key=a;this.value=b;this.g=void 0}}
class Ia{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};let Ja;function E(a,b,c){var d=Ja;Ja=null;a||(a=d);d=this.constructor.O;a||(a=d?[d]:[]);this.j=d?0:-1;this.g=null;this.h=a;a:{d=this.h.length;a=d-1;if(d&&(d=this.h[a],!(null===d||"object"!=typeof d||Array.isArray(d)||va&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.h[a])?y(d):this.h[a]=Ka):(La(this),(d=this.i[a])?y(d):this.i[a]=Ka)}const Ka=Object.freeze(y([]));
function La(a){let b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}function F(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c!==Ka?c:a.h[b]=y([])}if(a.i)return c=a.i[b],c!==Ka?c:a.i[b]=y([])}function G(a,b,c){a=F(a,b);return null==a?c:a}function J(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function K(a,b,c){a.g||(a.g={});if(b in a.g)return a.g[b];let d=F(a,b);d||(d=y([]),L(a,b,d));c=new Da(d,c);return a.g[b]=c}function L(a,b,c){b<a.l?a.h[b+a.j]=c:(La(a),a.i[b]=c);return a}
function M(a,b,c){a.g||(a.g={});if(!a.g[c]){let d=F(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}function Ma(a){var b=Na;a.g||(a.g={});if(!a.g[7]){let c=F(a,7),d=[];for(let e=0;e<c.length;e++)d[e]=new b(c[e]);a.g[7]=d}return a.g[7]}function Oa(a){if(a.g)for(let b in a.g){const c=a.g[b];if(Array.isArray(c))for(let d=0;d<c.length;d++)c[d]&&c[d].m();else c&&c.m()}}E.prototype.m=function(){Oa(this);return this.h};E.prototype.toJSON=function(){const a=this.m();return z?a:Aa(a)};
E.prototype.I=function(){Oa(this);return this.h};function Pa(a){z=!0;try{return JSON.stringify(a.toJSON(),Qa)}finally{z=!1}}function Qa(a,b){switch(typeof b){case "number":return isFinite(b)?b:String(b);case "object":if(va&&null!=b&&b instanceof Uint8Array)return ua(b)}return b}E.prototype.toString=function(){return this.m().toString()};function Ra(a){var b=a.constructor;Ja=a=wa(a.m());b=new b(a);Ja=null;return b}function N(a,b){return G(a,b,"")};var Sa=class extends E{constructor(a){super(a)}};var Ta=class extends E{constructor(a){super(a)}},Ua=class extends E{constructor(a){super(a)}};var Wa=class extends E{constructor(a){super(a,-1,Va)}},Na=class extends E{constructor(a){super(a)}o(){return N(this,3)}H(a){L(this,5,a)}},Xa=class extends E{constructor(a){super(a)}o(){return N(this,1)}H(a){L(this,2,a)}},Ya=class extends E{constructor(a){super(a)}},Va=[6,7];var $a=class extends E{constructor(a){super(a,-1,Za)}},Za=[17];var ab=class extends E{constructor(a){super(a)}};var bb={};var cb=class{};class db extends cb{constructor(a){super();if(bb!==bb)throw Error("Bad secret");this.g=a}toString(){return this.g}}var eb=new db("about:invalid#zTSz");function fb(a){if(a instanceof cb)if(a instanceof db)a=a.g;else throw Error("wrong type");else a=da(a);return a};class gb{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var ib={capture:!0},jb={passive:!0},kb=ka(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function lb(a){return a?a.passive&&kb()?a:a.capture||!1:!1}function O(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,lb(d))}function nb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,lb(void 0))};var ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function qb(a,b){return b?a?a+"&"+b:b:a}function rb(a,b){if(!b)return a;a=pb(a);a[1]=qb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function tb(a){var b=[],c;for(c in a)sb(c,a[c],b);return b.join("&")}function ub(){var a=la();a=null!=a?"="+encodeURIComponent(String(a)):"";return rb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}
function vb(a,b){a=pb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=qb(d.join("&"),tb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function wb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{na(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function xb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let yb=[];const zb=()=>{const a=yb;yb=[];for(const b of a)try{b()}catch(c){}};
var Ab=a=>{yb.push(a);1==yb.length&&(window.Promise?Promise.resolve().then(zb):window.setImmediate?setImmediate(zb):setTimeout(zb,0))},Bb=a=>{var b=P;"complete"===b.readyState||"interactive"===b.readyState?Ab(a):b.addEventListener("DOMContentLoaded",a)},Cb=a=>{var b=window;"complete"===b.document.readyState?Ab(a):b.addEventListener("load",a)};function Q(a,b,c=null){Db(a,b,c)}function Db(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);nb(d,"load",e);nb(d,"error",e)};O(d,"load",e);O(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let Eb=0;function Fb(a){return(a=Gb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Gb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function Hb(a){if(!(.01<Math.random())){a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Fb(a)}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Q(b,a)}};var P=document,R=window;class Ib{constructor(a){this.N=a}}function S(a){return new Ib(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Jb=new Ib(a=>/^[^:]*([/?#]|$)/.test(a));var Kb=S("http"),Lb=S("https"),Mb=S("ftp"),Nb=S("mailto");const Sb=[S("data"),Kb,Lb,Nb,Mb,Jb];function Tb(a,b=Sb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Ib&&d.N(a))return new db(a)}}function Ub(a,b=Sb){return Tb(a,b)||eb};const Vb=[Kb,Lb,Nb,Mb,Jb,S("market"),S("itms"),S("intent"),S("itms-appss")];function Wb(a,b){if(a instanceof t)return a;const c=Ub(a,Vb);c===eb&&b(a);return new t(fb(c),ca)}var Xb=a=>{var b=`${"http:"===R.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=tb({id:"unsafeurl",ctx:a,url:c});c=rb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Yb=!!window.google_async_iframe_id;let U=Yb&&window.parent||window;var Zb=a=>{var b=P;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};const $b=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var ac=class{constructor(a,b){this.g=a;this.h=b}},bc=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function cc(a,b){const c={};c[a]=b;return[c]}function dc(a,b,c,d,e){const f=[];xb(a,function(g,k){(g=ec(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)}
function ec(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(ec(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(dc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function fc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function gc(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=fc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],k=a.h[g];for(let l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}let h=dc(k[l],a.i,",$");if(h){h=e+h;if(d>=h.length){d-=h.length;b+=h;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class hc{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function ic(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof hc?g=c:(g=new hc,xb(c,(l,h)=>{var m=g,w=m.j++;l=cc(h,l);m.g.push(w);m.h[w]=l}));const k=gc(g,a.h,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?Q(n,k,f):Q(n,k))}catch(g){}}class jc{constructor(){this.h="http:"===R.location.protocol?"http:":"https:";this.g=Math.random()}};let kc=null;var lc=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},mc=()=>{const a=n.performance;return a&&a.now?a.now():null};class nc{constructor(a,b){var c=mc()||lc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const V=n.performance,oc=!!(V&&V.mark&&V.measure&&V.clearMarks),W=ka(()=>{var a;if(a=oc){var b;if(null===kc){kc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(kc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=kc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function pc(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class qc{constructor(){var a=X;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new nc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(mc()||lc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;V&&W()&&V.mark(b);!this.g||2048<this.h.length||
this.h.push(a)}}};function rc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}
function sc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{pc(e),c=a.s(b,new gb(f,{message:rc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,k;null==(g=window.console)||null==(k=g.error)||k.call(g,f)}else throw f;}return d}function tc(a,b){var c=uc;return(...d)=>sc(c,a,()=>b.apply(void 0,d))}
class vc{constructor(){var a=wc;this.i=Y;this.h=null;this.s=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const C=new hc;var g=C;g.g.push(1);g.h[1]=cc("context",a);b.error&&b.meta&&b.id||(b=new gb(b,{message:rc(b)}));if(b.msg){g=C;var k=b.msg.substring(0,512);g.g.push(2);g.h[2]=cc("msg",k)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(H){}if(d)try{d(b)}catch(H){}d=C;l=[l];d.g.push(3);d.h[3]=l;d=n;l=[];b=null;do{var h=d;if(wb(h)){var m=
h.location.href;b=h.document&&h.document.referrer||null}else m=b,b=null;l.push(new bc(m||""));try{d=h.parent}catch(H){d=null}}while(d&&h!=d);for(let H=0,Ob=l.length-1;H<=Ob;++H)l[H].depth=Ob-H;h=n;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==l.length-1)for(m=1;m<l.length;++m){var w=l[m];w.url||(w.url=h.location.ancestorOrigins[m-1]||"",w.G=!0)}var x=l;let oa=new bc(n.location.href,!1);h=null;const Fa=x.length-1;for(w=Fa;0<=w;--w){var D=x[w];!h&&$b.test(D.url)&&(h=
D);if(D.url&&!D.G){oa=D;break}}D=null;const Nc=x.length&&x[Fa].url;0!=oa.depth&&Nc&&(D=x[Fa]);f=new ac(oa,D);if(f.h){x=C;var I=f.h.url||"";x.g.push(4);x.h[4]=cc("top",I)}var Ga={url:f.g.url||""};if(f.g.url){var Ha=f.g.url.match(ob),T=Ha[1],Pb=Ha[3],Qb=Ha[4];I="";T&&(I+=T+":");Pb&&(I+="//",I+=Pb,Qb&&(I+=":"+Qb));var Rb=I}else Rb="";T=C;Ga=[Ga,{url:Rb}];T.g.push(5);T.h[5]=Ga;ic(this.i,e,C,this.j,c)}catch(C){try{ic(this.i,e,{context:"ecmserr",rctx:a,msg:rc(C),url:f&&f.g.url},this.j,c)}catch(oa){}}return!0}}
;let Y,uc;if(Yb&&!wb(U)){let a="."+P.domain;try{for(;2<a.split(".").length&&!wb(U);)P.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}wb(U)||(U=window)}const X=U,wc=new qc;var xc=()=>{if(!X.google_measure_js_timing){var a=wc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(a.h,pc,void 0),a.h.length=0)}};Y=new jc;"number"!==typeof X.google_srt&&(X.google_srt=Math.random());var yc=Y,zc=X.google_srt;0<=zc&&1>=zc&&(yc.g=zc);uc=new vc;
uc.h=a=>{const b=Eb;0!==b&&(a.jc=String(b),a.shv=Fb(b))};uc.j=!0;"complete"==X.document.readyState?xc():wc.g&&O(X,"load",()=>{xc()});var Ac=(a,b)=>tc(a,b);var Bc=(a,b)=>{b=N(a,2)||b;if(!b)return"";if(J(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];Ca(K(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Cc=(a,b)=>{b=void 0===b?[]:b;b=0<b.length?b:Zb("data-asoch-targets");a=K(a,1,Wa);const c=[];for(let k=0;k<b.length;++k){var d=b[k].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f=
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Ra(f).toJSON();g=g.toJSON();const l=Math.max(f.length,g.length);for(let h=0;h<l;++h)null==f[h]&&(f[h]=g[h]);f=new Wa(f)}e=K(f,4,null);null!=F(f,5)&&e.set("nb",G(f,5,0).toString());c.push({element:b[k],data:f})}else ic(Y,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},Ec=(a,b,c,d)=>{c=Bc(b,c);if(0<c.length){if(null!=F(b,18)){var e=609===d;let f;f=e?1:void 0!==P.featurePolicy&&P.featurePolicy.allowsFeature("attribution-reporting")?3:2;
c=Dc(c,"nis",f.toString());if(e||!a.hasAttribute("attributionsourceeventid"))e=M(b,Sa,18),a.setAttribute("attributiondestination",N(e,2)),a.setAttribute("attributionsourceeventid",N(e,1)),a.setAttribute("attributionreportto",N(e,3)),a.setAttribute("attributionexpiry",N(e,4))}u(a,Wb(c,Xb(d)));a.target||(a.target=null!=F(b,11)?N(b,11):"_top")}},Fc=a=>{var b=void 0===b?"":b;for(const d of a){a=d.data;var c=0===b.length?!1:d.element.matches(b);"A"!=d.element.tagName||J(a,1)||c||(c=d.element,Ec(c,a,c.href,
609))}},Gc=a=>{const b=window.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=F(a,8)){const d=N(M(a,Ya,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,N(M(a,Ya,8),6));break}}},Hc=(a,b)=>{b=void 0===b?500:b;const c=[],d=[];for(var e of a)(a=e.data)&&null!=F(a,12)&&(d.push(M(a,Xa,12)),c.push(M(a,Xa,12).o()));e=(f,g)=>{if(g)for(const k of d)k.H(g[k.o()]||!1)};a=window.oneAfmaInstance;for(const f of c)a.canOpenAndroidApp(f,e,()=>{},b)},Jc=(a,b,c,d,e)=>{if(a||!b||null==F(b,12))return!1;const f=
M(b,Xa,12).o();a="";if(0<Ma(b).length)for(const g of Ma(b))a+=N(g,2)+" "+g.o()+" ";if(J(M(b,Xa,12),2))return Ic({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(vb(ub(),g))},1E3),!0;Ic({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},
Kc=(a,b,c,d,e,f)=>{if(!c||null==F(c,8))return!1;const g=M(c,Ya,8);let k=N(g,2);Ca(K(c,10,null),(l,h)=>{var m=k;h=encodeURIComponent(h);const w=encodeURIComponent(l);l=new RegExp("[?&]"+h+"=([^&]+)");const x=l.exec(m);console.log(x);h=h+"="+w;k=x?m.replace(l,x[0].charAt(0)+h):m.replace("?","?"+h+"&")});Ic({id:"gmob-apps",event:"och-try-u2-redirect",appId:N(g,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});a=l=>e.openStoreOverlay(l,void 0,N(g,6));return e.redirectForStoreU2({clickUrl:d,trackingUrl:N(g,
3),finalUrl:k,pingFunc:e.click,openFunc:(null==b?0:J(b,1))?a:e.openIntentOrNativeApp})},Lc=(a,b)=>{b=void 0===b?null:b;if(null!==b){const c=new aa({url:a});if(c.i&&c.h||c.l)return b(p(c,"&act=1&ri=1")),q(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(p(b,"&act=1&ri=1"),"")?q(b,1):q(b,2):q(b,0):a;return a},Ic=a=>{Z(vb(ub(),a))},Z=(a,b)=>{(void 0===b||b)&&R.fetch?R.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Q(R,a)}):Q(R,a)},Dc=(a,b,
c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")};var Oc=class extends E{constructor(){super(void 0,-1,Mc)}},Mc=[6];const Pc="platform platformVersion architecture model uaFullVersion bitness".split(" ");var Qc=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(Pc).then(b=>{var c=new Oc;c=L(c,1,b.platform);c=L(c,2,b.platformVersion);c=L(c,3,b.architecture);c=L(c,4,b.model);c=L(c,5,b.uaFullVersion);return L(c,9,b.bitness)}):null};function Rc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=F(c,2)||L(c,2,a.href)}}function Sc(a,b){return fa(a,c=>c.element===b)}function Tc(a){Bb(Ac(556,()=>{new Uc(a||{})}))}
function Vc(a,b,c,d){if(!J(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(u(c,Wb(e[0],Xb(557)));!c.id;)if(f="asoch-id-"+la(),!P.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,P.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?G(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.F?window.ss(f,1,a.i):window.ss(a.i,
1));0<e.length&&(a=0<a.A.length?c.href+"&uach="+encodeURIComponent(a.A)+e[1]:c.href+e[1],u(c,Wb(a,Xb(557))))}}async function Wc(a,b,c,d){let e="";if(window.oneAfmaInstance){var f=window.oneAfmaInstance;e=await f.appendClickSignalsAsync(c.href)||"";if(a.B&&(f=await f.getNativeClickMeta())){if(f.customClickGestureEligible)return;e=Dc(e,"nas",f.encodedNas)}}Xc(a,b,c,d,e)}
function Xc(a,b,c,d,e){const f=J(a.h,2),g=f&&Date.now()-a.D>a.K;if(window.oneAfmaInstance){b.preventDefault?b.preventDefault():b.returnValue=!1;var k=window.oneAfmaInstance;b=k.logScionEventAndAddParam(e);if(!Jc(a.l,d,b,k,a.s)&&!Kc(a.l,a.j,d,b,k,a.s)){c=a.L;e=a.l;var l=a.s;const h=J(d,15),m=!/[?&]dsh=1(&|$)/.test(b)&&/[?&]ae=1(&|$)/.test(b);!f||!g||h&&m||(b=Lc(b,k.click));b&&b.startsWith("intent:")?(k.openIntentOrNativeApp(b),d={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=F(d,
8)&&N(M(d,Ya,8),4)||"",isIos:e,isDeepLinkPath:!1,exptIds:l},Z(vb(ub(),d))):c?e?k.openBrowser(b):k.openChromeCustomTab(b):k.openSystemBrowser(b,{useFirstPackage:!0,useRunningProcess:!0})}}else d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=Lc(c.href),d!==c.href&&u(c,Wb(d,Xb(599))));g&&(a.D=Date.now());Hb(a.C)}
var Uc=class{constructor(a){this.l=ra||pa||sa||qa;var b=Zb("data-asoch-meta");if(1!==b.length)ic(Y,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0);else{this.C=70;this.h=new $a(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.J=a["extra-meta"]?new $a(JSON.parse(a["extra-meta"])):null;this.B=!1;this.j=a["ios-store-overlay-config"]?new ab(JSON.parse(a["ios-store-overlay-config"])):null;this.L="true"===a["use-cct-over-browser"];this.s=a["expt-ids"]||"";this.A="";b=Qc();null!=b&&b.then(d=>
{this.A=Pa(d)});this.g=Cc(this.h);this.K=Number(a["async-click-timeout"])||300;this.M=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.D=-Infinity;this.i=N(this.h,5)||"";this.F=J(this.h,11);this.J&&(this.F=J(this.J,11));this.v=this.u=null;J(this.h,3)||(Fc(this.g),L(this.h,3,!0));Rc(this.g);!this.l&&window.oneAfmaInstance&&Hc(this.g,this.M);var c;if(window.oneAfmaInstance&&(null==(c=this.j)?0:J(c,2)))switch(a=()=>{const d=G(this.j,4,0);0<d?n.setTimeout(()=>{Gc(this.g)},d):Gc(this.g)},
G(this.j,3,0)){case 1:window.oneAfmaInstance.runOnOnShowEvent(a);break;case 2:Cb(a);break;default:Gc(this.g)}O(P,"click",Ac(557,d=>{a:if(!d.defaultPrevented||this.u===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var k=g.hasAttribute("data-asoch-targets");!e&&("A"==g.tagName||k)&&(k=k&&"true"===g.getAttribute("data-asoch-is-dynamic")?Cc(this.h,[g]):this.g,k=Sc(k,g))&&(e=k.data);g=g.parentElement}if(g=e&&!J(e,1)){if(d.defaultPrevented){var l=f,h=e;if(this.u===d&&this.v){e=new Ta(this.v);
f=N(h,9);g="";switch(G(e,4,1)){case 2:if(G(e,2,0))g="blocked_fast_click";else if(N(e,1)||N(e,7))g="blocked_border_click";break;case 3:g=P,g=g.getElementById?g.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&g&&(h=Ra(h),L(h,5,12),K(h,4,null).set("nb",(12).toString()),(k=Sc(this.g,g))?k.data=h:this.g.push({element:g,data:h}),l&&(Vc(this,d,l,h),L(h,2,l.href)),window.copfcChm(d,Bc(h,g.href),null,null!=F(e,10)?Pa(M(e,Ua,10)):null)),g="onepointfiveclick_first_click"}f&&
g&&Z(f+"&label="+g,!1);Hb(this.C)}break a}k=e;for(h of F(k,6))Z(h)}if(f&&g){e=g?e:null;(h=Sc(this.g,f))?h=h.data:(h=new Wa,L(h,2,f.href),L(h,11,f.target||"_top"),this.g.push({element:f,data:h}));Ec(f,e||h,N(h,2),557);Vc(this,d,f,e);for(l of F(this.h,17)){let m;h=l;g=P.body;k={};"function"===typeof window.CustomEvent?m=new CustomEvent(h,k):(m=document.createEvent("CustomEvent"),m.initCustomEvent(h,!!k.bubbles,!!k.cancelable,k.detail));g.dispatchEvent(m)}J(this.h,16)||this.B?Wc(this,d,f,e):(l="",window.oneAfmaInstance&&
(l=window.oneAfmaInstance.appendClickSignals(f.href)),Xc(this,d,f,e,l))}}}),ib);this.i&&"function"===typeof window.ss&&O(P.body,"mouseover",Ac(626,()=>{window.ss(this.i,0)}),jb);a=window;a.googqscp&&"function"===typeof a.googqscp.registerCallback&&a.googqscp.registerCallback((d,e)=>{this.u=d;this.v=e})}}};var Yc=Ac(555,a=>Tc(a));Eb=70;const Zc=Gb(70,document.currentScript);if(null==Zc)throw Error("JSC not found 70");const $c={},ad=Zc.attributes;for(let a=ad.length-1;0<=a;a--){const b=ad[a].name;0===b.indexOf("data-jcp-")&&($c[b.substring(9)]=ad[a].value)}Yc($c);}).call(this);