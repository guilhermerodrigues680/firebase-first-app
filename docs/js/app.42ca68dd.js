(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({"cat-vs-dog-board-game":"cat-vs-dog-board-game",chat:"chat",phaser:"phaser"}[e]||e)+"."+{"cat-vs-dog-board-game":"a6f84610",chat:"83574939","chunk-2d0a4097":"951fad3d","chunk-2d0ac0a7":"5f4c25e6","chunk-2d0e4a3c":"dc7ab938","chunk-2d210c28":"b94824d0","chunk-2d213eba":"6854082f","chunk-2d225f4d":"0fd25002","chunk-2d22d072":"96171b87","chunk-5b1f40da":"f9499d4b",phaser:"a0c31b42"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"cat-vs-dog-board-game":1,"chunk-5b1f40da":1,phaser:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"cat-vs-dog-board-game":"cat-vs-dog-board-game",chat:"chat",phaser:"phaser"}[e]||e)+"."+{"cat-vs-dog-board-game":"3bb3f5aa",chat:"31d6cfe0","chunk-2d0a4097":"31d6cfe0","chunk-2d0ac0a7":"31d6cfe0","chunk-2d0e4a3c":"31d6cfe0","chunk-2d210c28":"31d6cfe0","chunk-2d213eba":"31d6cfe0","chunk-2d225f4d":"31d6cfe0","chunk-2d22d072":"31d6cfe0","chunk-5b1f40da":"3e755cc9",phaser:"4ed4f94d"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],o=n("2877"),u={},s=Object(o["a"])(u,a,c,!1,null,null,null),i=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("section",[n("div",{staticClass:"container"},[n("h1",[e._v("Home")]),n("form",{class:{"was-validated":e.formWasValidated},attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submitFormAccess(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.formUsername,expression:"formUsername"}],ref:"formUsername",staticClass:"form-control",attrs:{type:"text",placeholder:"Ex: meuNick98",name:"username",required:""},domProps:{value:e.formUsername},on:{input:function(t){t.target.composing||(e.formUsername=t.target.value)}}}),n("button",[e._v("Entrar")])])])])])},p=[],f=n("1da1"),h=(n("96cf"),n("ac80")),b={name:"Home",data:function(){return{formUsername:"",formWasValidated:!1}},watch:{formUsername:function(){var e=/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(this.formUsername);return e?this.$refs.formUsername.setCustomValidity(""):this.$refs.formUsername.setCustomValidity("Preencha um username válido."),console.debug("formUsername",e),e}},created:function(){},methods:{submitFormAccess:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.formWasValidated=!0,r=e.target,a=r.checkValidity(),console.debug(a),a){n.next=7;break}return r.reportValidity(),n.abrupt("return");case 7:return c=r.elements["username"].value,console.debug(c),n.prev=9,n.next=12,h["a"].user.readUserDataByUsername(c);case 12:if(o=n.sent,!o){n.next=16;break}return console.debug("Existe um usuario u",o),n.abrupt("return");case 16:n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](9),console.debug(n.t0);case 21:return n.prev=21,n.next=24,h["a"].user.writeUserData(c,"".concat(c,"@email.com"));case 24:n.next=29;break;case 26:n.prev=26,n.t1=n["catch"](21),console.debug(n.t1);case 29:case"end":return n.stop()}}),n,null,[[9,18],[21,26]])})))()}}},m=b,g=Object(o["a"])(m,l,p,!1,null,null,null),v=g.exports,w=[{path:"",name:"SiteModuleHome",component:function(){return n.e("chunk-2d0e4a3c").then(n.bind(null,"90a0"))}},{path:"about",component:function(){return n.e("chunk-2d210c28").then(n.bind(null,"b8ea"))}}],O=w,j={routes:O},y=[{path:"",component:function(){return n.e("chunk-2d22d072").then(n.bind(null,"f66b"))}},{path:"meeting",component:function(){return n.e("chunk-5b1f40da").then(n.bind(null,"3b1d"))}}],k=y,x={routes:k},D=[{path:"",component:function(){return n.e("chunk-2d213eba").then(n.bind(null,"af76"))}},{path:"cat-vs-dog-board-game",component:function(){return n.e("cat-vs-dog-board-game").then(n.bind(null,"a280"))}},{path:"phaser",component:function(){return n.e("phaser").then(n.bind(null,"6838"))}}],R=D,U={routes:R};r["a"].use(d["a"]);var C=[{path:"/",redirect:"/site"},{path:"/home",name:"Home",component:v},{path:"/chat",name:"Chat",component:function(){return n.e("chat").then(n.bind(null,"ca20"))}},{path:"/site",component:function(){return n.e("chunk-2d225f4d").then(n.bind(null,"e738"))},children:j.routes},{path:"/video",component:function(){return n.e("chunk-2d0ac0a7").then(n.bind(null,"189c"))},children:x.routes},{path:"/games",component:function(){return n.e("chunk-2d0a4097").then(n.bind(null,"0573"))},children:U.routes}],E=new d["a"]({routes:C}),_=E,S=n("d093");n("ab8b"),n("b7e3");console.debug("webrtc-adapter, browser and version",S["a"].browserDetails.browser,S["a"].browserDetails.version),r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(i)}}).$mount("#app")},ac80:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("260b"));console.debug("app:firebase");var c={apiKey:"AIzaSyDhGCNmt7bI44RHoVHTlrrKtX55wyohfOY",authDomain:"tis1puc.firebaseapp.com",projectId:"tis1puc",databaseURL:"https://tis1puc-default-rtdb.firebaseio.com",storageBucket:"tis1puc.appspot.com",messagingSenderId:"259785152988",appId:"1:259785152988:web:42475483c13a738aaad719"},o=Object(a["a"])(c);console.debug(o);var u=o,s=n("66ce"),i=n("e71f"),d=Object(i["f"])(),l=Object(s["a"])(u),p="chat/messages/";function f(e,t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(s["d"])(l,p),a=Object(s["c"])(r),e.next=4,Object(s["e"])(a,{userId:t,message:n});case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t){var n=Object(s["d"])(l,p),r=Object(s["b"])(n,(function(t){var n=t.val();console.debug(n),console.debug("call callback"),e(n)}),(function(e){console.debug(e),console.debug("call cancelCallback"),t(e)}));return r}var m={sendMessage:f,onMessage:b},g=n("5530"),v=(n("159b"),"users");function w(e,t){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(i["b"])(d,v),e.next=3,Object(i["a"])(r,{username:t,email:n});case 3:return a=e.sent,c=a.id,console.log("Document written with ID: ",c),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(i["c"])(d,v,t),e.next=3,Object(i["d"])(n);case 3:if(r=e.sent,!r.exists()){e.next=10;break}return a=r.data(),console.log("Document data:",a),e.abrupt("return",a);case 10:return console.log("No such document!"),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(i["b"])(d,v),r=Object(i["h"])(n,Object(i["j"])("email","==",t)),e.next=4,Object(i["e"])(r);case 4:a=e.sent,0!==a.size?a.forEach((function(e){console.log("Document id: ",e.id," => ",e.data())})):console.log("No such document!");case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function D(e){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(i["b"])(d,v),r=Object(i["h"])(n,Object(i["j"])("username","==",t)),e.next=4,Object(i["e"])(r);case 4:if(a=e.sent,0===a.size){e.next=14;break}return 1!==a.size&&console.debug(1!==a.size,{username:t}),c=a.docs[0],o=c.id,u=c.data(),console.log("Document id: ",o," => ",u),e.abrupt("return",Object(g["a"])({_id:o},u));case 14:return console.log("No such document!"),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var U={writeUserData:w,readUserData:j,readUserDataByEmail:k,readUserDataByUsername:D};console.debug({writeUserData:w,readUserData:j,readUserDataByEmail:k,readUserDataByUsername:D});var C="calls",E="offerCandidates",_="answerCandidates";function S(){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(i["b"])(d,C),e.next=3,Object(i["a"])(t,{});case 3:return n=e.sent,r=n.id,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function N(e,t,n,r,a){return P.apply(this,arguments)}function P(){return P=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r,a,c){var o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=Object(i["c"])(d,C,t),u={sdp:n,type:r},e.next=4,Object(i["i"])(o,{offer:u});case 4:return Object(i["g"])(o,(function(e){console.debug("onSnapshot");var t=e.metadata.hasPendingWrites?"Local":"Server",n=e.data();console.log(t," data: ",n,e),null!==n&&void 0!==n&&n.answer&&a&&a(n.answer)})),s=Object(i["b"])(o,_),Object(i["g"])(s,(function(e){console.debug(e),e.empty||e.docChanges().forEach((function(e){if("added"===e.type){var t=e.doc.data();console.debug("onSnapshot answerDocSubRef",t),c&&c(t)}}))})),e.abrupt("return",{callId:t});case 10:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function A(e){return B.apply(this,arguments)}function B(){return B=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(i["c"])(d,C,t),e.next=3,Object(i["d"])(n);case 3:if(r=e.sent,r.exists()){e.next=7;break}throw console.log("No such document!"),new Error("No such document!");case 7:return a=r.data(),console.log("Document data:",a),e.abrupt("return",a.offer);case 10:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function T(e,t,n,r){return V.apply(this,arguments)}function V(){return V=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var c,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=Object(i["c"])(d,C,t),o={type:n,sdp:r},e.next=4,Object(i["i"])(c,{answer:o});case 4:return u=Object(i["b"])(c,E),Object(i["g"])(u,(function(e){e.docChanges().forEach((function(e){if(console.debug("offerDocSubRef.onSnapshot",e),"added"===e.type){var t=e.doc.data();a&&a(t)}}))})),e.abrupt("return");case 7:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function H(e,t){return L.apply(this,arguments)}function L(){return L=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(i["c"])(d,C,t),a=Object(i["b"])(r,E),e.next=4,Object(i["a"])(a,n);case 4:c=e.sent,o=c.id,console.log("Document written with ID (iceOfferId): ",o);case 7:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function M(e,t){return $.apply(this,arguments)}function $(){return $=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(i["c"])(d,C,t),a=Object(i["b"])(r,_),e.next=4,Object(i["a"])(a,n);case 4:c=e.sent,o=c.id,console.log("Document written with ID (iceAnswerId): ",o);case 7:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}var z={createCall:S,createOffer:N,getOffer:A,answerCall:T,pushIceOffer:H,pushIceAnswer:M};t["a"]={chat:m,user:U,calls:z}},b7e3:function(e,t,n){}});