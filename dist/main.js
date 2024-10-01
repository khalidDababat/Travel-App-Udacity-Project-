/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new B(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var y="suspendedStart",d="suspendedYield",m="executing",v="completed",g={};function w(){}function b(){}function x(){}var T={};h(T,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(N([])));L&&L!==o&&a.call(L,u)&&(T=L);var k=x.prototype=w.prototype=Object.create(T);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&a.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function j(t,e,n){var o=y;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?v:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function I(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},_(O.prototype),h(O.prototype,s,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(k),h(k,l,"Generator"),h(k,u,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o=document.getElementById("er_city"),a=document.getElementById("er_date");function i(){return(i=n(e().mark((function t(r){var n,a,i,u,l,f,y,v;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=document.getElementById("date").value,t.next=4,m();case 4:if(a=t.sent,c()){t.next=7;break}return t.abrupt("return");case 7:if(a){t.next=12;break}o.innerHTML="The Location Not Exist",o.style.display="block",t.next=22;break;case 12:if(i=a.lng,u=a.lat,l=a.name,!i||!u){t.next=22;break}return f=d(n),t.next=17,p(i,u,f);case 17:return y=t.sent,t.next=20,h(l);case 20:v=t.sent,s(l,n,f,y,v);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return u.apply(this,arguments)}function u(){return(u=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.style.display="none",a.style.display="none",r=document.getElementById("city").value,n=document.getElementById("date").value,r){t.next=8;break}return o.innerHTML="Please Inter The City",o.style.display="block",t.abrupt("return");case 8:if(n){t.next=12;break}return a.innerHTML="Please Enter The  Date",a.style.display="block",t.abrupt("return");case 12:if(!(d(n)<0)){t.next=16;break}return a.innerHTML="Please Enter The Valid Date ",a.style.display="block",t.abrupt("return");case 16:return o.style.display="none",a.style.display="none",t.abrupt("return",!0);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,e,r,n,o){return l.apply(this,arguments)}function l(){return(l=n(e().mark((function t(r,n,o,a,i){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById("Rdays").innerHTML="The Reaming Days To Travel<mark> ".concat(o,"</mark>"),document.getElementById("cityname").innerHTML="\n     the Country he wents To Travell <mark>".concat(r,"</mark>\n    "),document.getElementById("travelDate").innerHTML="\n    The Travell Date is: ".concat(n,"\n    "),document.getElementById("temp").innerHTML=o>7?"The Expected temperature is:".concat(a.temp," and The Temp max:").concat(a.app_max_temp,"\n       and The temp min:").concat(a.app_min_temp):"The Temperature is:".concat(a.temp),document.getElementById("weather").innerHTML=o>7?"The Expected Weather is <mark>".concat(a.description,"</mark>"):"The weather is :".concat(a.description),document.getElementById("cityImage").innerHTML='<img src="'.concat(i.image,'" alt="The image Is Not Found">');case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/getimage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})});case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log("Error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t,e,r){return y.apply(this,arguments)}function y(){return(y=n(e().mark((function t(r,n,o){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/getweather",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lng:r,lat:n,days:o})});case 3:return a=t.sent,t.next=6,a.json();case 6:return i=t.sent,t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(0),console.log("Error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(t){var e=new Date,r=new Date(t).getTime()-e.getTime();return Math.ceil(r/864e5)}function m(){return v.apply(this,arguments)}function v(){return(v=n(e().mark((function t(){var r,n,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=document.getElementById("city").value)){t.next=17;break}return t.prev=2,t.next=5,fetch("http://localhost:4000/getcity",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:r})});case 5:return n=t.sent,t.next=8,n.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(2),console.log("Error",t.t0);case 15:t.next=19;break;case 17:o.innerHTML="This field cannot be left empty",o.style.display="block";case 19:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}document.getElementById("submentbuttn").addEventListener("click",(function(t){return i.apply(this,arguments)}))})();
//# sourceMappingURL=main.js.map