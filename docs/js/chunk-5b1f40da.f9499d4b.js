(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b1f40da"],{"3b1d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container my-5"},[n("div",{staticClass:"row gx-5"},[n("div",{staticClass:"col-10"},[e._m(0),n("div",{staticClass:"row pb-3"},[n("div",{staticClass:"col-12 rounded video-meeting-container"},[n("div",{staticClass:"video-meeting"},[n("video",{ref:"webcamVideo",attrs:{autoplay:"",playsinline:""}})]),n("div",{staticClass:"video-meeting video-meeting--guest"},[n("video",{ref:"remoteVideo",attrs:{autoplay:"",playsinline:""}})])])]),e._m(1)]),n("div",{staticClass:"col-2 bg-1 rounded"},[e._v("col-2")])]),n("button",{on:{click:function(t){return e.createOffer()}}},[e._v("Criar oferta")]),e._v(" "+e._s(e.callId)+" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.joinInCallFormSubmit(t)}}},[n("input",{attrs:{type:"text",placeholder:"ID",name:"call_id"}}),n("button",[e._v("Entrar na chamada")])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row pb-3"},[n("div",{staticClass:"col-2"},[e._v("logo")]),n("div",{staticClass:"col-10 bg-1 d-flex justify-content-between rounded"},[n("div",[n("h2",{staticClass:"h6"},[e._v("Reunião de estreia webapp Guilherme")]),n("small",{staticClass:"text-black-50"},[e._v("Produtividade")])]),n("div",{staticClass:"d-flex align-items-center justify-content-end"},[n("button",{staticClass:"btn bg-white rounded-circle shadow-sm"},[n("i",{staticClass:"material-icons"},[e._v("tune")])]),n("button",{staticClass:"btn bg-white rounded-circle shadow-sm"},[n("i",{staticClass:"material-icons"},[e._v("share")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row bg-1 rounded"},[n("div",{staticClass:"col-12"},[n("span",[e._v("Cam")]),n("span",[e._v("Mic")]),n("span",[e._v("Share")]),n("span",[e._v("Chat")]),n("span",[e._v("Leave")])])])}],c=n("1da1"),s=(n("96cf"),n("159b"),n("bf19"),n("ac80")),i={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},o=new RTCPeerConnection(i),u=null,l=null;function d(){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:return u=e.sent,console.debug(u),l=new MediaStream,u.getTracks().forEach((function(e){o.addTrack(e,u)})),o.ontrack=function(e){console.debug("pc.ontrack",e),e.streams[0].getTracks().forEach((function(e){l.addTrack(e)}))},e.abrupt("return",{localStream:u,remoteStream:l});case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].calls.createCall();case 2:return t=e.sent,console.debug("callId",t),o.onicecandidate=function(e){console.debug("Get candidates for caller, save to db"),e.candidate&&s["a"].calls.pushIceOffer(t,e.candidate.toJSON())},e.next=7,o.createOffer();case 7:return n=e.sent,console.debug({offerDescription:n}),e.next=11,o.setLocalDescription(n);case 11:return r=function(e){if(console.debug("answeredCallback"),!o.currentRemoteDescription){var t=new RTCSessionDescription(e);o.setRemoteDescription(t)}},a=function(e){console.debug("answeredICECallback");var t=new RTCIceCandidate(e);o.addIceCandidate(t)},e.next=15,s["a"].calls.createOffer(t,n.sdp,n.type,r,a);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].calls.getOffer(t);case 2:return n=e.sent,o.onicecandidate=function(e){console.debug("answerCall caller"),e.candidate&&s["a"].calls.pushIceAnswer(t,e.candidate.toJSON())},e.next=6,o.setRemoteDescription(new RTCSessionDescription(n));case 6:return e.next=8,o.createAnswer();case 8:return r=e.sent,e.next=11,o.setLocalDescription(r);case 11:return a=function(e){console.debug("offerICECallback called"),o.addIceCandidate(new RTCIceCandidate(e))},e.next=14,s["a"].calls.answerCall(t,r.type,r.sdp,a);case 14:return c=e.sent,console.debug(c),e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var g={setupMediaSources:d,createOffer:p,answerCall:v},w={name:"VideoMeeting",data:function(){return{callId:null}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs,r=n.webcamVideo,a=n.remoteVideo,console.debug({webcamVideo:r,remoteVideo:a}),t.prev=2,t.next=5,g.setupMediaSources();case 5:c=t.sent,t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](2),console.debug(t.t0),t.abrupt("return");case 12:console.debug({res:c}),s=c,i=s.localStream,o=s.remoteStream,r.srcObject=i,a.srcObject=o;case 16:case"end":return t.stop()}}),t,null,[[2,8]])})))()},createOffer:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.createOffer();case 3:n=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t["catch"](0),console.debug(t.t0),t.abrupt("return");case 10:console.debug({res:n}),e.callId=n.callId;case 12:case"end":return t.stop()}}),t,null,[[0,6]])})))()},joinInCallFormSubmit:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.target,r=n.elements.call_id.value,console.debug(r),r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,g.answerCall(r);case 8:a=t.sent,t.next=16;break;case 11:return t.prev=11,t.t0=t["catch"](5),console.debug(t.t0),alert("offer não encontrada"),t.abrupt("return");case 16:console.debug({res:a}),alert("offer encontrada");case 18:case"end":return t.stop()}}),t,null,[[5,11]])})))()}}},h=w,C=(n("a29d"),n("2877")),x=Object(C["a"])(h,r,a,!1,null,"355d1b35",null);t["default"]=x.exports},a29d:function(e,t,n){"use strict";n("be28")},be28:function(e,t,n){},bf19:function(e,t,n){"use strict";var r=n("23e7");r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}}]);