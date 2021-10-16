(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),s=n("5c6c"),o=n("fc6a"),a=n("a04b"),c=n("1a2d"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=o(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return s(!i.f.call(t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ho})),n.d(e,"b",(function(){return Ks})),n.d(e,"c",(function(){return Ys})),n.d(e,"d",(function(){return qo})),n.d(e,"e",(function(){return Bo})),n.d(e,"f",(function(){return Js})),n.d(e,"g",(function(){return Po})),n.d(e,"h",(function(){return Lo}));var r=n("5606"),i=n("ffa6"),s=n("4fc1"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new C;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new C,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new C)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new E(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.T=-1;class O{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=A(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function N(t,e){return t<e?-1:t>e?1:0}function R(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new P(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function j(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends F{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends F{construct(t,e,n){return new q(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(e)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.fields=t,t.sort(q.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return R(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new B(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new B(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}B.EMPTY_BYTE_STRING=new B("");const H=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function z(t){if(v(!!t),"string"==typeof t){let e=0;const n=H.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?B.fromBase64String(t):B.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Y(t){const e=t.mapValue.fields.__previous_value__;return K(e)?Y(e):e}function Q(t){const e=z(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return null==t}function J(t){return 0===t&&1/t==-1/0}function Z(t){return"number"==typeof t&&Number.isInteger(t)&&!J(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(U.fromString(t))}static fromName(t){return new tt(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:y()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Q(t).isEqual(Q(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=z(t.timestampValue),r=z(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return R(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(L(n)!==L(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!nt(n[i],r[i])))return!1;return!0}(t,e);default:return y()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function it(t,e){const n=et(t),r=et(e);if(n!==r)return N(n,r);switch(n){case 0:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return st(t.timestampValue,e.timestampValue);case 4:return st(Q(t),Q(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),r=W(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=N(n[i],r[i]);if(0!==t)return t}return N(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=N(G(t.latitude),G(e.latitude));return 0!==n?n:N(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=it(n[i],r[i]);if(t)return t}return N(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=N(r[o],s[o]);if(0!==t)return t;const e=it(n[r[o]],i[s[o]]);if(0!==e)return e}return N(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function st(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return N(t,e);const n=z(t),r=z(e),i=N(n.seconds,r.seconds);return 0!==i?i:N(n.nanos,r.nanos)}function ot(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=z(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=at(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${at(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function ct(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ut(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function ht(t){return!!t&&"nullValue"in t}function dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ft(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return j(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pt(e)}setAll(t){let e=q.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=pt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ft(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){j(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new gt(pt(this.value))}}function mt(t){const e=[];return j(t.fields,(t,n)=>{const r=new q([t]);if(ft(n)){const t=mt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new $(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new yt(t,0,D.min(),gt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,gt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,gt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function _t(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vt(t,e,n,r,i,s,o)}function bt(t){const e=_(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>It(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Lt(e.startAt)),e.endAt&&(t+="|ub:",t+=Lt(e.endAt)),e.A=t}return e.A}function wt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Lt(t.startAt)),t.endAt&&(e+=", endAt: "+Lt(t.endAt)),`Target(${e})`}function Ct(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Mt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function Et(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Tt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new St(t,e,n):"array-contains"===e?new Ot(t,n):"in"===e?new Nt(t,n):"not-in"===e?new Rt(t,n):"array-contains-any"===e?new Pt(t,n):new Tt(t,e,n)}static R(t,e,n){return"in"===e?new kt(t,n):new xt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(it(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(it(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function It(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class St extends Tt{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class kt extends Tt{constructor(t,e){super(t,"in",e),this.keys=At("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xt extends Tt{constructor(t,e){super(t,"not-in",e),this.keys=At("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function At(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class Ot extends Tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&rt(e.arrayValue,this.value)}}class Nt extends Tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Rt extends Tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Pt extends Tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Dt{constructor(t,e){this.position=t,this.before=e}}function Lt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ft(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):it(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function qt(t,e,n,r,i,s,o,a){return new Vt(t,e,n,r,i,s,o,a)}function $t(t){return new Vt(t)}function Bt(t){return!X(t.limit)&&"F"===t.limitType}function Ht(t){return!X(t.limit)&&"L"===t.limitType}function zt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Wt(t){return null!==t.collectionGroup}function Kt(t){const e=_(t);if(null===e.V){e.V=[];const t=Gt(e),n=zt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new jt(t)),e.V.push(new jt(q.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new jt(q.keyField(),t))}}}return e.V}function Yt(t){const e=_(t);if(!e.S)if("F"===e.limitType)e.S=_t(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new jt(i.field,e))}const n=e.endAt?new Dt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Dt(e.startAt.position,!e.startAt.before):null;e.S=_t(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Qt(t,e,n){return new Vt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xt(t,e){return Ct(Yt(t),Yt(e))&&t.limitType===e.limitType}function Jt(t){return`${bt(Yt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${wt(Yt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ft(t.startAt,Kt(t),e))&&(!t.endAt||!Ft(t.endAt,Kt(t),e))}(t,e)}function ee(t){return(e,n)=>{let r=!1;for(const i of Kt(t)){const t=ne(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ne(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?it(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}function ie(t){return{integerValue:""+t}}function se(t,e){return Z(e)?ie(e):re(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof le?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof he?de(t,e):t instanceof fe?pe(t,e):function(t,e){const n=ue(t,e),r=me(n)+me(t.C);return ut(n)&&ut(t.C)?ie(r):re(t.N,r)}(t,e)}function ce(t,e,n){return t instanceof he?de(t,e):t instanceof fe?pe(t,e):n}function ue(t,e){return t instanceof ge?ut(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class le extends oe{}class he extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const r of t.elements)n.some(t=>nt(t,r))||n.push(r);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=ye(e);for(const r of t.elements)n=n.filter(t=>!nt(t,r));return{arrayValue:{values:n}}}class ge extends oe{constructor(t,e){super(),this.N=t,this.C=e}}function me(t){return G(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof he&&e instanceof he||t instanceof fe&&e instanceof fe?R(t.elements,e.elements,nt):t instanceof ge&&e instanceof ge?nt(t.C,e.C):t instanceof le&&e instanceof le}(t.transform,e.transform)}class _e{constructor(t,e){this.version=t,this.transformResults=e}}class be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new be}static exists(t){return new be(void 0,t)}static updateTime(t){return new be(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function we(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ce{}function Ee(t,e,n){t instanceof xe?function(t,e,n){const r=t.value.clone(),i=Ne(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!we(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ne(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof xe?function(t,e,n){if(!we(t.precondition,e))return;const r=t.value.clone(),i=Re(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ke(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!we(t.precondition,e))return;const r=Re(t.fieldTransforms,n,e),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(ke(e),i).setHasLocalMutations()}(t,e,n):function(t,e){we(t.precondition,e)&&e.convertToNoDocument(D.min())}(t,e)}function Ie(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ue(r.transform,t||null);null!=i&&(null==n&&(n=gt.empty()),n.set(r.field,i))}return n||null}function Se(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&R(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ke(t){return t.isFoundDocument()?t.version:D.min()}class xe extends Ce{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ae extends Ce{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Oe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ne(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ce(o,a,n[i]))}return r}function Re(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ae(t,s,e))}return r}class Pe extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class De extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Me;function Fe(t){switch(t){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ue(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case je.OK:return b.OK;case je.CANCELLED:return b.CANCELLED;case je.UNKNOWN:return b.UNKNOWN;case je.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case je.INTERNAL:return b.INTERNAL;case je.UNAVAILABLE:return b.UNAVAILABLE;case je.UNAUTHENTICATED:return b.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case je.NOT_FOUND:return b.NOT_FOUND;case je.ALREADY_EXISTS:return b.ALREADY_EXISTS;case je.PERMISSION_DENIED:return b.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case je.ABORTED:return b.ABORTED;case je.OUT_OF_RANGE:return b.OUT_OF_RANGE;case je.UNIMPLEMENTED:return b.UNIMPLEMENTED;case je.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(Me=je||(je={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(t,e){this.comparator=t,this.root=e||$e.EMPTY}insert(t,e){return new Ve(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(t){return new Ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$e.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qe(this.root,t,this.comparator,!0)}}class qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $e{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$e.RED,this.left=null!=r?r:$e.EMPTY,this.right=null!=i?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new $e(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return $e.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1,$e.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(t){this.comparator=t,this.data=new Ve(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new He(this.data.getIterator())}getIteratorFrom(t){return new He(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Be))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Be(this.comparator);return e.data=t,e}}class He{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Ve(tt.comparator);function Ge(){return ze}const We=new Ve(tt.comparator);function Ke(){return We}const Ye=new Ve(tt.comparator);function Qe(){return Ye}const Xe=new Be(tt.comparator);function Je(...t){let e=Xe;for(const n of t)e=e.add(n);return e}const Ze=new Be(N);function tn(){return Ze}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,e)),new en(D.min(),n,tn(),Ge(),Je())}}class nn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new nn(B.EMPTY_BYTE_STRING,e,Je(),Je(),Je())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class sn{constructor(t,e){this.targetId=t,this.O=e}}class on{constructor(t,e,n=B.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class an{constructor(){this.F=0,this.M=ln(),this.L=B.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Je(),e=Je(),n=Je();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new nn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=ln()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cn{constructor(t){this.tt=t,this.et=new Map,this.nt=Ge(),this.st=un(),this.it=new Be(N)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Et(t))if(0===n){const n=new tt(t.path);this.at(e,n,yt.newNoDocument(n,D.min()))}else v(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Et(i.target)){const e=new tt(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,yt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Je();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new en(t,e,this.it,this.nt,n);return this.nt=Ge(),this.st=un(),this.it=new Be(N),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new an,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Be(N),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new an),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function un(){return new Ve(tt.comparator)}function ln(){return new Ve(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),dn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class fn{constructor(t,e){this.databaseId=t,this.D=e}}function pn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gn(t,e){return t.D?e.toBase64():e.toUint8Array()}function mn(t,e){return pn(t,e.toTimestamp())}function yn(t){return v(!!t),D.fromTimestamp(function(t){const e=z(t);return new P(e.seconds,e.nanos)}(t))}function vn(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function _n(t){const e=U.fromString(t);return v(Hn(e)),e}function bn(t,e){return vn(t.databaseId,e.path)}function wn(t,e){const n=_n(e);if(n.get(1)!==t.databaseId.projectId)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(In(n))}function Cn(t,e){return vn(t.databaseId,e)}function En(t){const e=_n(t);return 4===e.length?U.emptyPath():In(e)}function Tn(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function In(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Sn(t,e,n){return{name:bn(t,e),fields:n.value.mapValue.fields}}function kn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(v(void 0===e||"string"==typeof e),B.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),B.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:Ue(t.code);return new w(e,t.message||"")}(o);n=new on(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wn(t,r.document.name),s=yn(r.document.updateTime),o=new gt({mapValue:{fields:r.document.fields}}),a=yt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new rn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wn(t,r.document),s=r.readTime?yn(r.readTime):D.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wn(t,r.document),s=r.removedTargetIds||[];n=new rn([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Le(r),s=t.targetId;n=new sn(s,i)}}return n}function xn(t,e){let n;if(e instanceof xe)n={update:Sn(t,e.key,e.value)};else if(e instanceof Pe)n={delete:bn(t,e.key)};else if(e instanceof Ae)n={update:Sn(t,e.key,e.data),updateMask:Bn(e.fieldMask)};else{if(!(e instanceof De))return y();n={verify:bn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof le)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof he)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:mn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function An(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?yn(t.updateTime):yn(e);return n.isEqual(D.min())&&(n=yn(e)),new _e(n,t.transformResults||[])}(t,e))):[]}function On(t,e){return{documents:[Cn(t,e.path)]}}function Nn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Cn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(dt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(dt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:Fn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Un(t.field),direction:Mn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||X(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ln(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ln(e.endAt)),n}function Rn(t){let e=En(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Dn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new jt(Vn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(n.limit));let c=null;n.startAt&&(c=jn(n.startAt));let u=null;return n.endAt&&(u=jn(n.endAt)),qt(e,i,o,s,a,"F",c,u)}function Pn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Dn(t){return t?void 0!==t.unaryFilter?[$n(t)]:void 0!==t.fieldFilter?[qn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Dn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Ln(t){return{before:t.before,values:t.position}}function jn(t){const e=!!t.before,n=t.values||[];return new Dt(n,e)}function Mn(t){return hn[t]}function Fn(t){return dn[t]}function Un(t){return{fieldPath:t.canonicalString()}}function Vn(t){return q.fromServerFormat(t.fieldPath)}function qn(t){return Tt.create(Vn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function $n(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vn(t.unaryFilter.field);return Tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vn(t.unaryFilter.field);return Tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vn(t.unaryFilter.field);return Tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vn(t.unaryFilter.field);return Tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Bn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wn(e)),e=Gn(t.get(n),e);return Wn(e)}function Gn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Wn(t){return t+""}class Kn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Kn.store="owner",Kn.key="owner";class Yn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Yn.store="mutationQueues",Yn.keyPath="userId";class Qn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Qn.store="mutations",Qn.keyPath="batchId",Qn.userMutationsIndex="userMutationsIndex",Qn.userMutationsKeyPath=["userId","batchId"];class Xn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,zn(e)]}static key(t,e,n){return[t,zn(e),n]}}Xn.store="documentMutations",Xn.PLACEHOLDER=new Xn;class Jn{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Jn.store="remoteDocuments",Jn.readTimeIndex="readTimeIndex",Jn.readTimeIndexPath="readTime",Jn.collectionReadTimeIndex="collectionReadTimeIndex",Jn.collectionReadTimeIndexPath=["parentPath","readTime"];class Zn{constructor(t){this.byteSize=t}}Zn.store="remoteDocumentGlobal",Zn.key="remoteDocumentGlobalKey";class tr{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class er{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}er.store="targetDocuments",er.keyPath=["targetId","path"],er.documentTargetsIndex="documentTargetsIndex",er.documentTargetsKeyPath=["path","targetId"];class nr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}nr.key="targetGlobalKey",nr.store="targetGlobal";class rr{constructor(t,e){this.collectionId=t,this.parent=e}}rr.store="collectionParents",rr.keyPath=["collectionId","parent"];class ir{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}ir.store="clientMetadata",ir.keyPath="clientId";class sr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}sr.store="bundles",sr.keyPath="bundleId";class or{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}or.store="namedQueries",or.keyPath="name";Yn.store,Qn.store,Xn.store,Jn.store,tr.store,Kn.store,nr.store,er.store,ir.store,Zn.store,rr.store,sr.store,or.store;const ar="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ur((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ur?e:ur.resolve(e)}catch(t){return ur.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ur.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ur.reject(e)}static resolve(t){return new ur((e,n)=>{e(t)})}static reject(t){return new ur((e,n)=>{n(t)})}static waitFor(t){return new ur((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=ur.resolve(!1);for(const n of t)e=e.next(t=>t?ur.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ee(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(D.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Je())}isEqual(t){return this.batchId===t.batchId&&R(this.mutations,t.mutations,(t,e)=>Se(t,e))&&R(this.baseMutations,t.baseMutations,(t,e)=>Se(t,e))}}class dr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=Qe();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new dr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n,r,i=D.min(),s=D.min(),o=B.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new fr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.Wt=t}}function gr(t){const e=Rn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Qt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.Gt=new yr}addToCollectionParentIndex(t,e){return this.Gt.add(e),ur.resolve()}getCollectionParents(t,e){return ur.resolve(this.Gt.getEntries(e))}}class yr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Be(U.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Be(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new vr(t,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr.DEFAULT_COLLECTION_PERCENTILE=10,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vr.DEFAULT=new vr(41943040,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vr.DISABLED=new vr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new _r(0)}static ie(){return new _r(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function br(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==ar)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){j(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return M(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.changes=new wr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:D.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ur.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Wt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new tt(e)).next(t=>{let e=Ke();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Ke();return this.Ht.getCollectionParents(t,r).next(s=>ur.forEach(s,s=>{const o=function(t,e){return new Vt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=yt.newInvalidDocument(n),r=r.insert(n,i)),Te(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{te(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Je();for(const s of e)for(const t of s.mutations)t instanceof Ae&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Je(),r=Je();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(D.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const o=this.Mn(e,i);return(Bt(e)||Ht(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Be(ee(t));return e.forEach((e,r)=>{te(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,D.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ve(N),this.qn=new wr(t=>bt(t),Ct),this.Kn=D.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Er(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function kr(t,e,n,r){return new Sr(t,e,n,r)}async function xr(t,e){const n=_(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Er(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Je();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Ar(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ur.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Or(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Nr(t,e){const n=_(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Ge();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Rr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(D.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return ur.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Rr(t,e,n,r,i){let s=Je();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Ge();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(D.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Pr(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Dr(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,ur.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new fr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Lr(t,e,n){const r=_(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!lr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function jr(t,e,n){const r=_(t);let i=D.min(),s=Je();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=_(t),i=r.qn.get(n);return void 0!==i?ur.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Yt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:D.min(),n?s:Je())).next(t=>({documents:t,Gn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ur.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:yn(n.createTime)}),ur.resolve()}getNamedQuery(t,e){return ur.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:gr(t.bundledQuery),readTime:yn(t.readTime)}}(e)),ur.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.Zn=new Be(Ur.ts),this.es=new Be(Ur.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Ur(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Ur(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new tt(new U([])),n=new Ur(e,t),r=new Ur(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new U([])),n=new Ur(e,t),r=new Ur(e,t+1);let i=Je();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Ur(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ur{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||N(t.ls,e.ls)}static ns(t,e){return N(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Be(Ur.ts)}checkEmpty(t){return ur.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new hr(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Ur(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return ur.resolve(s)}lookupMutationBatch(t,e){return ur.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return ur.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ur.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ur.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ur(e,0),r=new Ur(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),ur.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Be(N);return e.forEach(t=>{const e=new Ur(t,0),r=new Ur(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),ur.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;tt.isDocumentKey(i)||(i=i.child(""));const s=new Ur(new tt(i),0);let o=new Be(N);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),ur.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ur.forEach(e.mutations,r=>{const i=new Ur(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Ur(e,0),r=this.ds.firstAfterOrEqual(n);return ur.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,ur.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ve(tt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ur.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=Ge();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),ur.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ge();const i=new tt(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,i)&&(r=r.insert(i.key,i.clone()))}return ur.resolve(r)}Ts(t,e){return ur.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new $r(this)}getSize(t){return ur.resolve(this.size)}}class $r extends Cr{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ur.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.persistence=t,this.Es=new wr(t=>bt(t),Ct),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Is=0,this.As=new Fr,this.targetCount=0,this.Rs=_r.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),ur.resolve()}getLastRemoteSnapshotVersion(t){return ur.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ur.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ur.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ur.resolve()}ae(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new _r(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ur.resolve()}updateTargetData(t,e){return this.ae(e),ur.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ur.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),ur.waitFor(i).next(()=>r)}getTargetCount(t){return ur.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return ur.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ur.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ur.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ur.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ur.resolve(n)}containsKey(t,e){return ur.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e){this.bs={},this.Le=new x(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Br(this),this.Ht=new mr,this.He=function(t,e){return new qr(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new pr(e),this.Je=new Mr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Vr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new zr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return ur.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class zr extends cr{constructor(t){super(),this.currentSequenceNumber=t}}class Gr{constructor(t){this.persistence=t,this.Ds=new Fr,this.Cs=null}static Ns(t){return new Gr(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ur.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ur.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ur.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ur.forEach(this.xs,n=>{const r=tt.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return ur.or([()=>ur.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.activeTargetIds=tn()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kr{constructor(){this.yi=new Wr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Wr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Xr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);s(new w(e,t.message))}else s(new w(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new w(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["u"])()||Object(o["w"])()||Object(o["q"])()||Object(o["s"])()||Object(o["y"])()||Object(o["p"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new Jr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),p(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),p(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=je[t];if(void 0!==e)return Ue(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),p(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){return new fn(t,!0)}class ni{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ni(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Tr(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ii extends ri{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Tr(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=kn(this.N,t),n=function(t){if(!("targetChange"in t))return D.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?D.min():e.readTime?yn(e.readTime):D.min()}(t);return this.listener.Er(e,n)}Ir(t){const e={};e.database=Tn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Et(r)?{documents:On(t,r)}:{query:Nn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=gn(t,e.resumeToken):e.snapshotVersion.compareTo(D.min())>0&&(n.readTime=pn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Pn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=Tn(this.N),e.removeTarget=t,this.wr(e)}}class si extends ri{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(t){return this.nr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=An(t.writeResults,t.commitTime),n=yn(t.commitTime);return this.listener.vr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=Tn(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>xn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class ai{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(p(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ti(t=>{n.enqueueAndForget(async()=>{yi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Kr.add(4),await li(e),e.Wr.set("Unknown"),e.Kr.delete(4),await ui(e)}(this))})}),this.Wr=new ai(n,r)}}async function ui(t){if(yi(t))for(const e of t.jr)await e(!0)}async function li(t){for(const e of t.jr)await e(!1)}function hi(t,e){const n=_(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),mi(n)?gi(n):Di(n).cr()&&fi(n,e))}function di(t,e){const n=_(t),r=Di(n);n.qr.delete(e),r.cr()&&pi(n,e),0===n.qr.size&&(r.cr()?r.lr():yi(n)&&n.Wr.set("Unknown"))}function fi(t,e){t.Gr.Y(e.targetId),Di(t).Ir(e)}function pi(t,e){t.Gr.Y(e),Di(t).Ar(e)}function gi(t){t.Gr=new cn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Di(t).start(),t.Wr.Or()}function mi(t){return yi(t)&&!Di(t).ar()&&t.qr.size>0}function yi(t){return 0===_(t).Kr.size}function vi(t){t.Gr=void 0}async function _i(t){t.qr.forEach((e,n)=>{fi(t,e)})}async function bi(t,e){vi(t),mi(t)?(t.Wr.Lr(e),gi(t)):t.Wr.set("Unknown")}async function wi(t,e,n){if(t.Wr.set("Online"),e instanceof on&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ci(t,n)}else if(e instanceof rn?t.Gr.rt(e):e instanceof sn?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(D.min()))try{const e=await Or(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(B.EMPTY_BYTE_STRING,n.snapshotVersion)),pi(t,e);const r=new fr(n.target,e,1,n.sequenceNumber);fi(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Ci(t,e)}}async function Ci(t,e,n){if(!lr(e))throw e;t.Kr.add(1),await li(t),t.Wr.set("Offline"),n||(n=()=>Or(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await ui(t)})}function Ei(t,e){return e().catch(n=>Ci(t,n,e))}async function Ti(t){const e=_(t),n=Li(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Ii(e);)try{const t=await Pr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Si(e,t)}catch(t){await Ci(e,t)}ki(e)&&xi(e)}function Ii(t){return yi(t)&&t.Ur.length<10}function Si(t,e){t.Ur.push(e);const n=Li(t);n.cr()&&n.br&&n.Pr(e.mutations)}function ki(t){return yi(t)&&!Li(t).ar()&&t.Ur.length>0}function xi(t){Li(t).start()}async function Ai(t){Li(t).Sr()}async function Oi(t){const e=Li(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Ni(t,e,n){const r=t.Ur.shift(),i=dr.from(r,e,n);await Ei(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ti(t)}async function Ri(t,e){e&&Li(t).br&&await async function(t,e){if(n=e.code,Fe(n)&&n!==b.ABORTED){const n=t.Ur.shift();Li(t).hr(),await Ei(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ti(t)}var n}(t,e),ki(t)&&xi(t)}async function Pi(t,e){const n=_(t);e?(n.Kr.delete(2),await ui(n)):e||(n.Kr.add(2),await li(n),n.Wr.set("Unknown"))}function Di(t){return t.zr||(t.zr=function(t,e,n){const r=_(t);return r.Cr(),new ii(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:_i.bind(null,t),Ci:bi.bind(null,t),Er:wi.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),mi(t)?gi(t):t.Wr.set("Unknown")):(await t.zr.stop(),vi(t))})),t.zr}function Li(t){return t.Hr||(t.Hr=function(t,e,n){const r=_(t);return r.Cr(),new si(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Ai.bind(null,t),Ci:Ri.bind(null,t),Vr:Oi.bind(null,t),vr:Ni.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ti(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ji(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mi(t,e){if(p("AsyncQueue",`${e}: ${t}`),lr(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ke(),this.sortedSet=new Ve(this.comparator)}static emptySet(t){return new Fi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Fi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.Jr=new Ve(tt.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):y():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Vi{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Vi(t,e,Fi.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.Xr=void 0,this.listeners=[]}}class $i{constructor(){this.queries=new wr(t=>Jt(t),Xt),this.onlineState="Unknown",this.Zr=new Set}}async function Bi(t,e){const n=_(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qi),i)try{s.Xr=await n.onListen(r)}catch(t){const n=Mi(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Wi(n)}async function Hi(t,e){const n=_(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zi(t,e){const n=_(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&Wi(n)}function Gi(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Wi(t){t.Zr.forEach(t=>{t.next()})}class Ki{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Vi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Vi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.key=t}}class Qi{constructor(t){this.key=t}}class Xi{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Je(),this.mutatedKeys=Je(),this.po=ee(t),this.To=new Fi(this.po)}get Eo(){return this._o}Io(t,e){const n=e?e.Ao:new Ui,r=e?e.To:this.To;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Bt(this.query)&&r.size===this.query.limit?r.last():null,c=Ht(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=te(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Bt(this.query)||Ht(this.query))for(;s.size>this.query.limit;){const t=Bt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{To:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.To;this.To=t.To,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Vi(this.query,t.To,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({To:this.To,Ao:new Ui,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.To.has(t)&&!this.To.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Je(),this.To.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Qi(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Yi(n))}),e}So(t){this._o=t.Gn,this.yo=Je();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Vi.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class Ji{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zi{constructor(t){this.key=t,this.Co=!1}}class ts{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new wr(t=>Jt(t),Xt),this.ko=new Map,this.$o=new Set,this.Oo=new Ve(tt.comparator),this.Fo=new Map,this.Mo=new Fr,this.Lo={},this.Bo=new Map,this.Uo=_r.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function es(t,e){const n=bs(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await Dr(n.localStore,Yt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ns(n,e,r,"current"===s),n.isPrimaryClient&&hi(n.remoteStore,t)}return i}async function ns(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await jr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return ps(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await jr(t.localStore,e,!0),s=new Xi(e,i.Gn),o=s.Io(i.documents),a=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);ps(t,n,c.vo);const u=new Ji(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function rs(t,e){const n=_(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!Xt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),di(n.remoteStore,r.targetId),ds(n,r.targetId)}).catch(br)):(ds(n,r.targetId),await Lr(n.localStore,r.targetId,!0))}async function is(t,e,n){const r=ws(t);try{const t=await function(t,e){const n=_(t),r=P.now(),i=e.reduce((t,e)=>t.add(e.key),Je());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ie(t,s.get(t.key));null!=e&&o.push(new Ae(t.key,e,mt(e.value.mapValue),be.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ve(N)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await ys(r,t.changes),await Ti(r.remoteStore)}catch(t){const e=Mi(t,"Failed to persist write");n.reject(e)}}async function ss(t,e){const n=_(t);try{const t=await Nr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?v(r.Co):t.removedDocuments.size>0&&(v(r.Co),r.Co=!1))}),await ys(n,t,e)}catch(t){await br(t)}}function os(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&Wi(n)}(r.eventManager,e),t.length&&r.No.Er(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function as(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new Ve(tt.comparator);t=t.insert(s,yt.newNoDocument(s,D.min()));const n=Je().add(s),i=new en(D.min(),new Map,new Be(N),t,n);await ss(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),ms(r)}else await Lr(r.localStore,e,!1).then(()=>ds(r,e,n)).catch(br)}async function cs(t,e){const n=_(t),r=e.batch.batchId;try{const t=await Ar(n.localStore,e);hs(n,r,null),ls(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ys(n,t)}catch(t){await br(t)}}async function us(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);hs(r,e,n),ls(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ys(r,t)}catch(n){await br(n)}}function ls(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function hs(t,e,n){const r=_(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function ds(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||fs(t,e)})}function fs(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(di(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),ms(t))}function ps(t,e,n){for(const r of n)r instanceof Yi?(t.Mo.addReference(r.key,e),gs(t,r)):r instanceof Qi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||fs(t,r.key)):y()}function gs(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),ms(t))}function ms(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new tt(U.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Zi(n)),t.Oo=t.Oo.insert(n,r),hi(t.remoteStore,new fr(Yt($t(n.path)),r,2,x.T))}}async function ys(t,e,n){const r=_(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{o.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Tr.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.No.Er(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ur.forEach(e,e=>ur.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ur.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!lr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function vs(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await xr(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ys(n,t.Wn)}}function _s(t,e){const n=_(t),r=n.Fo.get(e);if(r&&r.Co)return Je().add(r.key);{let t=Je();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.Eo)}return t}}function bs(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ss.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_s.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=as.bind(null,e),e.No.Er=zi.bind(null,e.eventManager),e.No.jo=Gi.bind(null,e.eventManager),e}function ws(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=us.bind(null,e),e}class Cs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ei(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return kr(this.persistence,new Ir,t.initialUser,this.N)}Go(t){return new Hr(Gr.Ns,this.N)}Wo(t){return new Kr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Es{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>os(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vs.bind(null,this.syncEngine),await Pi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $i}createDatastore(t){const e=ei(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Zr(r));var r;return function(t,e,n){return new oi(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>os(this.syncEngine,t,0),s=Qr.bt()?new Qr:new Yr,new ci(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ts(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await li(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=O.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Mi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ss(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await xr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ks(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xs(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.Kr.add(3),await li(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await ui(n)}(e.remoteStore,t)),t.onlineComponents=e}async function xs(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ss(t,new Cs)),t.offlineComponents}async function As(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ks(t,new Es)),t.onlineComponents}function Os(t){return As(t).then(t=>t.syncEngine)}async function Ns(t){const e=await As(t),n=e.eventManager;return n.onListen=es.bind(null,e.syncEngine),n.onUnlisten=rs.bind(null,e.syncEngine),n}function Rs(t,e,n={}){const r=new C;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ts({next:s=>{e.enqueueAndForget(()=>Hi(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new w(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ki($t(n.path),s,{includeMetadataChanges:!0,uo:!0});return Bi(t,o)}(await Ns(t),t.asyncQueue,e,n,r)),r.promise}function Ps(t,e,n={}){const r=new C;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ts({next:n=>{e.enqueueAndForget(()=>Hi(t,o)),n.fromCache&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ki(n,s,{includeMetadataChanges:!0,uo:!0});return Bi(t,o)}(await Ns(t),t.asyncQueue,e,n,r)),r.promise}class Ds{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ls&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fs(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Us(t){if(!tt.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vs(t){if(tt.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function $s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qs(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Fs("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bs({}),this._settingsFrozen=!1,t instanceof Ls?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bs(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=js.get(t);e&&(f("ComponentProvider","Removing Datastore"),js.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zs(this.firestore,t,this._key)}}class Gs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gs(this.firestore,t,this._query)}}class Ws extends Gs{constructor(t,e,n){super(t,e,$t(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zs(this.firestore,null,new tt(t))}withConverter(t){return new Ws(this.firestore,t,this._path)}}function Ks(t,e,...n){if(t=Object(o["m"])(t),Ms("collection","path",e),t instanceof Hs){const r=U.fromString(e,...n);return Vs(r),new Ws(t,null,r)}{if(!(t instanceof zs||t instanceof Ws))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Vs(r),new Ws(t.firestore,null,r)}}function Ys(t,e,...n){if(t=Object(o["m"])(t),1===arguments.length&&(e=O.I()),Ms("doc","path",e),t instanceof Hs){const r=U.fromString(e,...n);return Us(r),new zs(t,null,new tt(r))}{if(!(t instanceof zs||t instanceof Ws))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Us(r),new zs(t.firestore,t instanceof Ws?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ni(this,"async_queue_retry"),this.Ta=()=>{const t=ti();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=ti();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ea(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=ti();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ta)}}enqueue(t){if(this.Ea(),this.wa)return new Promise(()=>{});const e=new C;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!lr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{this.ma=t,this.ga=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ea(),this.pa.indexOf(t)>-1&&(e=0);const r=ji.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ea(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Xs extends Hs{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Qs,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||to(this),this._firestoreClient.terminate()}}function Js(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Zs(t){return t._firestoreClient||to(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function to(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ds(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Is(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t){this._byteString=t}static fromBase64String(t){try{return new no(B.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new no(B.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=/^__.*__$/;class oo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new xe(t,this.data,e,this.fieldTransforms)}}function ao(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class co{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new co(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return wo(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(ao(this.Da)&&so.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class uo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ei(t)}Ba(t,e,n,r=!1){return new co({Da:t,methodName:e,La:n,path:q.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function lo(t){const e=t._freezeSettings(),n=ei(t._databaseId);return new uo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ho(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);yo("Data must be an object, but it was:",o,r);const a=go(r,o);let c,u;if(s.merge)c=new $(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=vo(e,r,n);if(!o.contains(i))throw new w(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Co(t,i)||t.push(i)}c=new $(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new oo(new gt(a),c,u)}function fo(t,e,n,r=!1){return po(n,t.Ba(r?4:3,e))}function po(t,e){if(mo(t=Object(o["m"])(t)))return yo("Unsupported field value:",e,t),go(t,e);if(t instanceof ro)return function(t,e){if(!ao(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=po(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["m"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:pn(e.N,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pn(e.N,n)}}if(t instanceof io)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof no)return{bytesValue:gn(e.N,t._byteString)};if(t instanceof zs){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+qs(t))}(t,e)}function go(t,e){const n={};return M(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):j(t,(t,r)=>{const i=po(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function mo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof io||t instanceof no||t instanceof zs||t instanceof ro)}function yo(t,e,n){if(!mo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=qs(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function vo(t,e,n){if((e=Object(o["m"])(e))instanceof eo)return e._internalPath;if("string"==typeof e)return bo(t,e);throw wo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const _o=new RegExp("[~\\*/\\[\\]]");function bo(t,e,n){if(e.search(_o)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eo(...e.split("."))._internalPath}catch(r){throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}function Co(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new To(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class To extends Eo{data(){return super.data()}}function Io(t,e){return"string"==typeof e?bo(t,e):e instanceof eo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ko extends Eo{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class xo extends ko{data(t={}){return super.data(t)}}class Ao{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new So(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new xo(this._firestore,this._userDataWriter,n.key,n,new So(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new xo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new So(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new xo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new So(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Oo(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Oo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(t){if(Ht(t)&&0===t.explicitOrderBy.length)throw new w(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ro{}function Po(t,...e){for(const n of e)t=n._apply(t);return t}class Do extends Ro{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=lo(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new w(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Mo(o,s);const e=[];for(const n of o)e.push(jo(r,t,n));a={arrayValue:{values:e}}}else a=jo(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Mo(o,s),a=fo(n,e,o,"in"===s||"not-in"===s);const c=Tt.create(i,s,a);return function(t,e){if(e.v()){const n=Gt(t);if(null!==n&&!n.isEqual(e.field))throw new w(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=zt(t);null!==r&&Fo(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new w(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Gs(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Vt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Lo(t,e,n){const r=e,i=Io("where",t);return new Do(i,r,n)}function jo(t,e,n){if("string"==typeof(n=Object(o["m"])(n))){if(""===n)throw new w(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wt(e)&&-1!==n.indexOf("/"))throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(U.fromString(n));if(!tt.isDocumentKey(r))throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ct(t,new tt(r))}if(n instanceof zs)return ct(t,n._key);throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${qs(n)}.`)}function Mo(t,e){if(!Array.isArray(t)||0===t.length)throw new w(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new w(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Fo(t,e,n){if(!n.isEqual(e))throw new w(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return j(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new io(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Y(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Q(t));default:return null}}convertTimestamp(t){const e=z(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);v(Hn(n));const r=new Ls(n.get(1),n.get(3)),i=new tt(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qo(t){t=$s(t,zs);const e=$s(t.firestore,Xs);return Rs(Zs(e),t._key).then(n=>Go(e,t,n))}class $o extends Uo{constructor(t){super(),this.firestore=t}convertBytes(t){return new no(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zs(this.firestore,null,e)}}function Bo(t){t=$s(t,Gs);const e=$s(t.firestore,Xs),n=Zs(e),r=new $o(e);return No(t._query),Ps(n,t._query).then(n=>new Ao(e,r,t,n))}function Ho(t,e){const n=$s(t.firestore,Xs),r=Ys(t),i=Vo(t.converter,e);return zo(n,[ho(lo(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function zo(t,e){return function(t,e){const n=new C;return t.asyncQueue.enqueueAndForget(async()=>is(await Os(t),e,n)),n.promise}(Zs(t),e)}function Go(t,e,n){const r=n.docs.get(e._key),i=new $o(t);return new ko(t,i,e._key,r,new So(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo;!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Xs(n,new I(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])(c,"3.1.1",Wo),Object(r["g"])(c,"3.1.1","esm2017")}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),s=n("861d"),o=n("b622"),a=o("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===Array||r(e.prototype))?e=void 0:s(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return z})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return F})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return $})),n.d(e,"l",(function(){return G})),n.d(e,"m",(function(){return Y})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return M})),n.d(e,"p",(function(){return b})),n.d(e,"q",(function(){return C})),n.d(e,"r",(function(){return V})),n.d(e,"s",(function(){return E})),n.d(e,"t",(function(){return k})),n.d(e,"u",(function(){return v})),n.d(e,"v",(function(){return I})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return S})),n.d(e,"y",(function(){return T})),n.d(e,"z",(function(){return j})),n.d(e,"A",(function(){return P})),n.d(e,"B",(function(){return q})),n.d(e,"C",(function(){return H})),n.d(e,"D",(function(){return U})),n.d(e,"E",(function(){return K})),n.d(e,"F",(function(){return W})),n.d(e,"G",(function(){return D}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){const e=o(t);return c.encodeByteArray(e,!0)},l=function(t){return u(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function _(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function b(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){return y().indexOf("Electron/")>=0}function E(){const t=y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T(){return y().indexOf("MSAppHost/")>=0}function I(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function S(){return!_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=x,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}function N(t,e){return t.replace(R,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return JSON.parse(t)}function D(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=P(h(s[0])||""),n=P(h(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:e,claims:n,data:r,signature:i}},j=function(t){const e=L(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},M=function(t){const e=L(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function U(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function q(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(B(n)&&B(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let l=0;l<16;l++)n[l]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let l=0;l<16;l++)n[l]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let l=16;l<80;l++){const t=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):l<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<e){if(0===s)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<e)if(i[s]=t[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function G(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const e=s-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;s=65536+(e<<10)+n}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},K=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),s=n("07fa"),o=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,g,m,y,v=n&&n.that,_=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),C=o(e,v,1+_+w),E=function(t){return h&&u(h,"normal",t),new l(!0,t)},T=function(t){return _?(r(t),w?C(t[0],t[1],E):C(t[0],t[1])):w?C(t,E):C(t)};if(b)h=t;else{if(d=c(t),!d)throw TypeError(String(t)+" is not iterable");if(i(d)){for(f=0,p=s(t);p>f;f++)if(g=T(t[f]),g&&g instanceof l)return g;return new l(!1)}h=a(t,d)}m=h.next;while(!(y=m.call(h)).done){try{g=T(y.value)}catch(I){u(h,"throw",I)}if("object"==typeof g&&g&&g instanceof l)return g}return new l(!1)}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("825a"),i=n("dc4a");t.exports=function(t,e,n){var s,o;r(t);try{if(s=i(t,"return"),!s){if("throw"===e)throw n;return n}s=s.call(t)}catch(a){o=!0,s=a}if("throw"===e)throw n;if(o)throw s;return r(s),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var y=m("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,E=w((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),T=w((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),I=/\B([A-Z])/g,S=w((function(t){return t.replace(I,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var A=Function.prototype.bind?x:k;function O(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function P(t,e,n){}var D=function(t,e,n){return!1},L=function(t){return t};function j(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return j(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return j(t[n],e[n])}))}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U="data-server-rendered",V=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:P,parsePlatformTagName:L,mustUseProp:D,async:!0,_lifecycleHooks:q},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function z(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+B.source+".$_\\d]");function W(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},Q="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(Q)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(To){}var ct=function(){return void 0===K&&(K=!Q&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ut=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=P,pt=0,gt=function(){this.id=pt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){v(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var mt=[];function yt(t){mt.push(t),gt.target=t}function vt(){mt.pop(),gt.target=mt[mt.length-1]}var _t=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},bt={child:{configurable:!0}};bt.child.get=function(){return this.componentInstance},Object.defineProperties(_t.prototype,bt);var wt=function(t){void 0===t&&(t="");var e=new _t;return e.text=t,e.isComment=!0,e};function Ct(t){return new _t(void 0,void 0,void 0,String(t))}function Et(t){var e=new _t(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Tt=Array.prototype,It=Object.create(Tt),St=["push","pop","shift","unshift","splice","sort","reverse"];St.forEach((function(t){var e=Tt[t];z(It,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var kt=Object.getOwnPropertyNames(It),xt=!0;function At(t){xt=t}var Ot=function(t){this.value=t,this.dep=new gt,this.vmCount=0,z(t,"__ob__",this),Array.isArray(t)?(Y?Nt(t,It):Rt(t,It,kt),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function Rt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];z(t,s,e[s])}}function Pt(t,e){var n;if(c(t)&&!(t instanceof _t))return b(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:xt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Pt(e),s.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function jt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var Ft=$.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Ut(r,i):Lt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ut(r,i):i}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function qt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$t(n):n}function $t(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Ft.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},q.forEach((function(t){Ft[t]=qt})),V.forEach((function(t){Ft[t+"s"]=Bt})),Ft.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in N(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Ft.provide=Vt;var Ht=function(t,e){return void 0===e?t:e};function zt(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=E(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=E(a),o[s]=l(i)?i:{type:i};else 0;t.props=o}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?N({from:s},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),zt(e,n),Gt(e,n),Wt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Kt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)b(t,s)||a(s);function a(r){var i=Ft[r]||Ht;o[r]=i(t[r],e[r],n,r)}return o}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var s=E(n);if(b(i,s))return i[s];var o=T(s);if(b(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Qt(t,e,n,r){var i=e[t],s=!b(n,t),o=n[t],a=ee(Boolean,i.type);if(a>-1)if(s&&!b(i,"default"))o=!1;else if(""===o||o===S(t)){var c=ee(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Xt(r,i,t);var u=xt;At(!0),Pt(o),At(u)}return o}function Xt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(To){ie(To,r,"errorCaptured hook")}}}ie(t,e,n)}finally{vt()}}function re(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(To){ne(To,r,i)}return s}function ie(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(To){To!==t&&se(To,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!Q&&!X||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),rt&&setTimeout(P)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function ge(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(To){ne(To,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function ye(t){ve(t,me),me.clear()}function ve(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof _t)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ve(t[r[n]],e)}}}var _e=w((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function be(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)re(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=_e(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=be(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=_e(c),i(h.name,e[c],h.capture))}function Ce(t,e,n){var o;t instanceof _t&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),v(o.fns,c)}r(a)?o=be([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=be([a,c]),o.merged=!0,t[e]=o}function Ee(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=S(u);Te(o,c,u,l,!0)||Te(o,a,u,l,!1)}return o}}function Te(t,e,n,r,s){if(i(e)){if(b(e,n))return t[n]=e[n],s||delete e[n],!0;if(b(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function Ie(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Se(t){return a(t)?[Ct(t)]:Array.isArray(t)?xe(t):void 0}function ke(t){return i(t)&&i(t.text)&&o(t.isComment)}function xe(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=xe(o,(e||"")+"_"+n),ke(o[0])&&ke(u)&&(l[c]=Ct(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?ke(u)?l[c]=Ct(u.text+o):""!==o&&l.push(Ct(o)):ke(o)&&ke(u)?l[c]=Ct(u.text+o.text):(s(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Ne(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach((function(n){Dt(t,n,e[n])})),At(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&b(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function Re(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Pe)&&delete n[u];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function De(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=je(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),z(i,"$stable",o),z(i,"$key",a),z(i,"$hasNormal",s),i}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Se(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!De(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,s=t.length;r<s;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ue(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Ve(t){return Yt(this.$options,"filters",t,!0)||L}function qe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,r,i){var s=$.keyCodes[e]||n;return i&&r&&!$.keyCodes[e]?qe(i,r):s?qe(s,t):r?S(r)!==e:void 0===t}function Be(t,e,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||$.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=E(o),u=S(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function ze(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(l(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Xe(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=ze,t._n=g,t._s=p,t._l=Fe,t._t=Ue,t._q=j,t._i=M,t._m=He,t._f=Ve,t._k=$e,t._b=Be,t._v=Ct,t._e=wt,t._u=Ye,t._g=Ke,t._d=Qe,t._p=Xe}function Ze(t,e,r,i,o){var a,c=this,u=o.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Re(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=fn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,s,o){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Qt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof _t)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Se(d)||[],p=new Array(f.length),g=0;g<f.length;g++)p[g]=en(f[g],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var s=Et(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[E(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Un(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=En(l,u),void 0===t))return Cn(l,e,n,o,a);e=e||{},Cr(t),i(e.model)&&ln(t.options,e);var h=Ee(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,g=new _t("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return g}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=e[r],s=rn[r];i===s||i&&i._merged||(e[r]=i?un(s,i):s)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[r],a=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,s){if(i(n)&&i(n.__ob__))return wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return wt();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=Se(r):s===hn&&(r=Ie(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),o=$.isReservedTag(e)?new _t($.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Yt(t.$options,"components",e))?new _t(e,n,r,void 0,void 0,t):on(c,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(a)&&gn(o,a),i(n)&&mn(n),o):wt()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function mn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Re(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var s=r&&r.data;Dt(t,"$attrs",s&&s.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var vn,_n=null;function bn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{_n=e,t=r.call(e._renderProxy,e.$createElement)}catch(To){ne(To,e,"render"),t=e._vnode}finally{_n=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof _t||(t=wt()),t.parent=i,t}}function wn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Cn(t,e,n,r,i){var s=wt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function En(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=_n;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return v(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=wn(n,e),a?o.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),g=t(d,p);return c(g)&&(f(g)?r(t.resolved)&&g.then(d,p):f(g.component)&&(g.component.then(d,p),i(g.error)&&(t.errorComp=wn(g.error,e)),i(g.loading)&&(t.loadingComp=wn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),g.delay||200)),i(g.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Tn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||De(n)))return n}}function In(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function Sn(t,e){vn.$on(t,e)}function kn(t,e){vn.$off(t,e)}function xn(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function An(t,e,n){vn=t,we(e,n||{},Sn,kn,xn,t),vn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,r,e,i)}return e}}var Nn=null;function Rn(t){var e=Nn;return Nn=t,function(){Nn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Dn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Rn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=wt),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function jn(t,e,r,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Qt(f,p,e,t)}At(!0),t.$options.propsData=e}r=r||n;var g=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,g),u&&(t.$slots=Re(s,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Vn(t,"activated")}}function Un(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),vt()}var qn=[],$n=[],Bn={},Hn=!1,zn=!1,Gn=0;function Wn(){Gn=qn.length=$n.length=0,Bn={},Hn=zn=!1}var Kn=0,Yn=Date.now;if(Q&&!tt){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Xn(){var t,e;for(Kn=Yn(),zn=!0,qn.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<qn.length;Gn++)t=qn[Gn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=$n.slice(),r=qn.slice();Wn(),tr(n),Jn(r),ut&&$.devtools&&ut.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function Zn(t){t._inactive=!1,$n.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,zn){var n=qn.length-1;while(n>Gn&&qn[n].id>t.id)n--;qn.splice(n+1,0,t)}else qn.push(t);Hn||(Hn=!0,ge(Xn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(To){if(!this.user)throw To;ne(To,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),vt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:P,set:P};function sr(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function or(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&gr(t,e.methods),e.data?cr(t):Pt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==st&&mr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||At(!1);var o=function(s){i.push(s);var o=Qt(s,e,n,t);Dt(r,s,o),s in t||sr(t,"_props",s)};for(var a in e)o(a);At(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&b(r,s)||H(s)||sr(t,"_data",s)}Pt(e,!0)}function ur(t,e){yt();try{return t.call(e,e)}catch(To){return ne(To,e,"data()"),{}}finally{vt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(t,o||P,P,lr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=P):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):P,ir.set=n.set||P),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:A(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function vr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';yt(),re(e,r,[i.value],r,s),vt()}return function(){i.teardown()}}}var _r=0;function br(t){t.prototype._init=function(t){var e=this;e._uid=_r++,e._isVue=!0,t&&t._isComponent?wr(e,t):e.$options=Kt(Cr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),In(e),yn(e),Vn(e,"beforeCreate"),Oe(e),or(e),Ae(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Cr(t){var e=t.options;if(t.super){var n=Cr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Er(t);i&&N(t.extendOptions,i),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Er(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Tr(t){this._init(t)}function Ir(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Sr(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function kr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&xr(o),o.options.computed&&Ar(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,V.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=N({},o.options),i[r]=o,o}}function xr(t){var e=t.options.props;for(var n in e)sr(t.prototype,"_props",n)}function Ar(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Or(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Rr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Pr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Dr(n,s,r,i)}}}function Dr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,v(n,e)}br(Tr),vr(Tr),On(Tr),Dn(Tr),bn(Tr);var Lr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Dr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Dr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Pr(t,(function(t){return Rr(e,t)}))})),this.$watch("exclude",(function(e){Pr(t,(function(t){return!Rr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Tn(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Rr(s,r))||o&&r&&Rr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,v(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:jr};function Fr(t){var e={get:function(){return $}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:N,mergeOptions:Kt,defineReactive:Dt},t.set=Lt,t.delete=jt,t.nextTick=ge,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,Mr),Ir(t),Sr(t),kr(t),Or(t)}Fr(Tr),Object.defineProperty(Tr.prototype,"$isServer",{get:ct}),Object.defineProperty(Tr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Tr,"FunctionalRenderContext",{value:Ze}),Tr.version="2.6.14";var Ur=m("style,class"),Vr=m("input,textarea,option,select,progress"),qr=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},$r=m("contenteditable,draggable,spellcheck"),Br=m("events,caret,typing,plaintext-only"),Hr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&Br(e)?e:"true"},zr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return Wr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Qr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Xr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Xr(e,n.data));return Jr(e.staticClass,e.class)}function Xr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Jr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(t){return ii(t)||si(t)};function ai(t){return si(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!Q)return!0;if(oi(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=m("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function mi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function vi(t,e){t.appendChild(e)}function _i(t){return t.parentNode}function bi(t){return t.nextSibling}function wi(t){return t.tagName}function Ci(t,e){t.textContent=e}function Ei(t,e){t.setAttribute(e,"")}var Ti=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:gi,insertBefore:mi,removeChild:yi,appendChild:vi,parentNode:_i,nextSibling:bi,tagName:wi,setTextContent:Ci,setStyleScope:Ei}),Ii={create:function(t,e){Si(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Si(t,!0),Si(e))},destroy:function(t){Si(t,!0)}};function Si(t,e){var n=t.data.ref;if(i(n)){var r=t.context,s=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?v(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var ki=new _t("",{},[]),xi=["create","activate","update","remove","destroy"];function Ai(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Oi(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Oi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Ni(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function Ri(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<xi.length;++e)for(o[xi[e]]=[],n=0;n<c.length;++n)i(c[n][xi[e]])&&o[xi[e]].push(c[n][xi[e]]);function l(t){return new _t(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function f(t,e,n,r,o,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Et(t)),t.isRootInsert=!o,!p(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),C(t),_(t,h,e),i(l)&&w(t,e),v(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),v(n,t.elm,r)):(t.elm=u.createTextNode(t.text),v(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(i(o)){var a=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return g(t,e),v(n,t.elm,r),s(a)&&y(t,e,n,r),!0}}function g(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),C(t)):(Si(t),e.push(t))}function y(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](ki,a);e.push(a);break}v(n,t.elm,r)}function v(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<o.create.length;++r)o.create[r](ki,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(ki,t),i(e.insert)&&n.push(t))}function C(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Nn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function E(t,e,n,r,i,s){for(;r<=i;++r)f(n[r],s,t,e,!1,n,r)}function T(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function I(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(S(r),T(r)):d(r.elm))}}function S(t,e){if(i(e)||i(t.data)){var n,r=o.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function k(t,e,n,s,o){var a,c,l,h,d=0,p=0,g=e.length-1,m=e[0],y=e[g],v=n.length-1,_=n[0],b=n[v],w=!o;while(d<=g&&p<=v)r(m)?m=e[++d]:r(y)?y=e[--g]:Ai(m,_)?(A(m,_,s,n,p),m=e[++d],_=n[++p]):Ai(y,b)?(A(y,b,s,n,v),y=e[--g],b=n[--v]):Ai(m,b)?(A(m,b,s,n,v),w&&u.insertBefore(t,m.elm,u.nextSibling(y.elm)),m=e[++d],b=n[--v]):Ai(y,_)?(A(y,_,s,n,p),w&&u.insertBefore(t,y.elm,m.elm),y=e[--g],_=n[++p]):(r(a)&&(a=Ni(e,d,g)),c=i(_.key)?a[_.key]:x(_,e,d,g),r(c)?f(_,s,t,m.elm,!1,n,p):(l=e[c],Ai(l,_)?(A(l,_,s,n,p),e[c]=void 0,w&&u.insertBefore(t,l.elm,m.elm)):f(_,s,t,m.elm,!1,n,p)),_=n[++p]);d>g?(h=r(n[v+1])?null:n[v+1].elm,E(t,h,n,p,v,s)):p>v&&I(e,d,g)}function x(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&Ai(t,o))return s}}function A(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Et(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,g=e.children;if(i(f)&&b(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(g)?p!==g&&k(h,p,g,n,l):i(g)?(i(t.text)&&u.setTextContent(h,""),E(h,null,g,0,g.length-1,n)):i(p)?I(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=m("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return g(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,w(e,n);break}!f&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Ai(t,e))A(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),s(n)&&R(t,e,h))return O(e,h,!0),t;t=l(t)}var p=t.elm,g=u.parentNode(p);if(f(e,h,p._leaveCb?null:g,u.nextSibling(p)),i(e.parent)){var m=e.parent,y=b(e);while(m){for(var v=0;v<o.destroy.length;++v)o.destroy[v](m);if(m.elm=e.elm,y){for(var _=0;_<o.create.length;++_)o.create[_](ki,m);var w=m.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Si(m);m=m.parent}}i(g)?I([t],0,0):i(t.tag)&&T(t)}}return O(e,h,c),e.elm}i(t)&&T(t)}}var Pi={create:Di,update:Di,destroy:function(t){Di(t,ki)}};function Di(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,s=t===ki,o=e===ki,a=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",e,t)};s?Ce(e,"insert",h):h()}if(l.length&&Ce(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Ui(a[n],"unbind",t,t,o)}var ji=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=ji),i[Fi(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ui(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(To){ne(To,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Ii,Pi];function qi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in i(l.__ob__)&&(l=e.data.attrs=N({},l)),l)o=l[s],a=u[s],a!==o&&$i(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&$i(c,"value",l.value),u)r(l[s])&&(Wr(s)?c.removeAttributeNS(Gr,Kr(s)):$r(s)||c.removeAttribute(s))}}function $i(t,e,n,r){r||t.tagName.indexOf("-")>-1?Bi(t,e,n):zr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):$r(e)?t.setAttribute(e,Hr(e,n)):Wr(e)?Yr(n)?t.removeAttributeNS(Gr,Kr(e)):t.setAttributeNS(Gr,e,n):Bi(t,e,n)}function Bi(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Hi={create:qi,update:qi};function zi(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Qr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Gi,Wi={create:zi,update:zi},Ki="__r",Yi="__c";function Qi(t){if(i(t[Ki])){var e=tt?"change":"input";t[e]=[].concat(t[Ki],t[e]||[]),delete t[Ki]}i(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Xi(t,e,n){var r=Gi;return function i(){var s=e.apply(null,arguments);null!==s&&ts(t,i,n,r)}}var Ji=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Ji){var i=Kn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Gi.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ts(t,e,n,r){(r||Gi).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Gi=e.elm,Qi(n),we(n,i,Zi,ts,Xi,e.context),Gi=void 0}}var ns,rs={create:es,update:es};function is(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(To){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(To){}return n&&t.value!==e}function as(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:is,update:is},us=w((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?N(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?R(t):"string"===typeof t?us(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&N(r,n)}(n=ls(t.data))&&N(r,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&N(r,n);return r}var fs,ps=/^--/,gs=/\s*!important$/,ms=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(S(e),n.replace(gs,""),"important");else{var r=vs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},ys=["Webkit","Moz","ms"],vs=w((function(t){if(fs=fs||document.createElement("div").style,t=E(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var r=ys[n]+e;if(r in fs)return r}}));function _s(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=ds(e,!0);for(a in h)r(f[a])&&ms(c,a,"");for(a in f)o=f[a],o!==h[a]&&ms(c,a,null==o?"":o)}}var bs={create:_s,update:_s},ws=/\s+/;function Cs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ws).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Es(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ws).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ts(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,Is(t.name||"v")),N(e,t),e}return"string"===typeof t?Is(t):void 0}}var Is=w((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ss=Q&&!et,ks="transition",xs="animation",As="transition",Os="transitionend",Ns="animation",Rs="animationend";Ss&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(As="WebkitTransition",Os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Rs="webkitAnimationEnd"));var Ps=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ds(t){Ps((function(){Ps(t)}))}function Ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Cs(t,e))}function js(t,e){t._transitionClasses&&v(t._transitionClasses,e),Es(t,e)}function Ms(t,e,n){var r=Us(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===ks?Os:Rs,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Us(t,e){var n,r=window.getComputedStyle(t),i=(r[As+"Delay"]||"").split(", "),s=(r[As+"Duration"]||"").split(", "),o=Vs(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=Vs(a,c),l=0,h=0;e===ks?o>0&&(n=ks,l=o,h=s.length):e===xs?u>0&&(n=xs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?ks:xs:null,h=n?n===ks?s.length:c.length:0);var d=n===ks&&Fs.test(r[As+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qs(e)+qs(t[n])})))}function qs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function $s(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Ts(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,m=s.beforeEnter,y=s.enter,v=s.afterEnter,_=s.enterCancelled,b=s.beforeAppear,w=s.appear,C=s.afterAppear,E=s.appearCancelled,T=s.duration,I=Nn,S=Nn.$vnode;while(S&&S.parent)I=S.context,S=S.parent;var k=!I._isMounted||!t.isRootInsert;if(!k||w||""===w){var x=k&&d?d:u,A=k&&p?p:h,O=k&&f?f:l,N=k&&b||m,R=k&&"function"===typeof w?w:y,P=k&&C||v,D=k&&E||_,L=g(c(T)?T.enter:T);0;var j=!1!==o&&!et,M=zs(R),U=n._enterCb=F((function(){j&&(js(n,O),js(n,A)),U.cancelled?(j&&js(n,x),D&&D(n)):P&&P(n),n._enterCb=null}));t.data.show||Ce(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,U)})),N&&N(n),j&&(Ls(n,x),Ls(n,A),Ds((function(){js(n,x),U.cancelled||(Ls(n,O),M||(Hs(L)?setTimeout(U,L):Ms(n,a,U)))}))),t.data.show&&(e&&e(),R&&R(n,U)),j||M||U()}}}function Bs(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Ts(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,m=s.leaveCancelled,y=s.delayLeave,v=s.duration,_=!1!==o&&!et,b=zs(f),w=g(c(v)?v.leave:v);0;var C=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(js(n,l),js(n,h)),C.cancelled?(_&&js(n,u),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(E):E()}function E(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),_&&(Ls(n,u),Ls(n,h),Ds((function(){js(n,u),C.cancelled||(Ls(n,l),b||(Hs(w)?setTimeout(C,w):Ms(n,a,C)))}))),f&&f(n,C),_||b||C())}}function Hs(t){return"number"===typeof t&&!isNaN(t)}function zs(t){if(r(t))return!1;var e=t.fns;return i(e)?zs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Gs(t,e){!0!==e.data.show&&$s(e)}var Ws=Q?{create:Gs,activate:Gs,remove:function(t,e){!0!==t.data.show?Bs(t,e):e()}}:{},Ks=[Hi,Wi,rs,cs,bs,Ws],Ys=Ks.concat(Vi),Qs=Ri({nodeOps:Ti,modules:Ys});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Xs={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ce(n,"postpatch",(function(){Xs.componentUpdated(t,e,n)})):Js(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Js(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,eo);if(i.some((function(t,e){return!j(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,i)})):e.value!==e.oldValue&&to(e.value,i);s&&io(t,"change")}}}};function Js(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=M(r,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(j(eo(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!j(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=so(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,$s(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?$s(n,(function(){t.style.display=t.__vOriginalDisplay})):Bs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ao={model:Xs,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Tn(e.children)):t}function lo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[E(s)]=i[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||De(t)},mo=function(t){return"show"===t.name},yo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(mo)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!De(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,Ce(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,i);if("in-out"===r){if(De(s))return u;var d,f=function(){d()};Ce(c,"afterEnter",f),Ce(c,"enterCancelled",f),Ce(h,"delayLeave",(function(t){d=t}))}}return i}}},vo=N({tag:String,moveClass:String},co);delete vo.mode;var _o={props:vo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Rn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(bo),t.forEach(wo),t.forEach(Co),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Os,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Os,t),n._moveCb=null,js(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ss)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Es(n,t)})),Cs(n,e),n.style.display="none",this.$el.appendChild(n);var r=Us(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function wo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Co(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var Eo={Transition:yo,TransitionGroup:_o};Tr.config.mustUseProp=qr,Tr.config.isReservedTag=oi,Tr.config.isReservedAttr=Ur,Tr.config.getTagNamespace=ai,Tr.config.isUnknownElement=ui,N(Tr.options.directives,ao),N(Tr.options.components,Eo),Tr.prototype.__patch__=Q?Qs:P,Tr.prototype.$mount=function(t,e){return t=t&&Q?hi(t):void 0,Ln(this,t,e)},Q&&setTimeout((function(){$.devtools&&ut&&ut.emit("init",Tr)}),0),e["a"]=Tr}).call(this,n("c8ba"))},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),g=a.setImmediate,m=a.clearImmediate,y=a.process,v=a.MessageChannel,_=a.Dispatch,b=0,w={},C="onreadystatechange";try{r=a.location}catch(k){}var E=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},T=function(t){return function(){E(t)}},I=function(t){E(t.data)},S=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};g&&m||(g=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return w[++b]=function(){(c(t)?t:Function(t)).apply(void 0,e)},i(b),b},m=function(t){delete w[t]},p?i=function(t){y.nextTick(T(t))}:_&&_.now?i=function(t){_.now(T(t))}:v&&!f?(s=new v,o=s.port2,s.port1.onmessage=I,i=l(o.postMessage,o,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(S)?(i=S,a.addEventListener("message",I,!1)):i=C in d("script")?function(t){h.appendChild(d("script"))[C]=function(){h.removeChild(this),E(t)}}:function(t){setTimeout(T(t),0)}),t.exports={set:g,clear:m}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),s="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("1626"),i=n("861d");t.exports=function(t,e){var n,s;if("string"===e&&r(n=t.toString)&&!i(s=n.call(t)))return s;if(r(n=t.valueOf)&&!i(s=n.call(t)))return s;if("string"!==e&&r(n=t.toString)&&!i(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},5087:function(t,e,n){var r=n("68ee"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ta})),n.d(e,"b",(function(){return Go})),n.d(e,"c",(function(){return qo})),n.d(e,"d",(function(){return Uo})),n.d(e,"e",(function(){return $o}));var r=n("5606"),i=n("ffa6"),s=n("1fd5"),o=n("4fc1");const a="@firebase/database",c="0.12.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(t){u=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(s["G"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(s["A"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(s["h"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new o["b"]("@firebase/database"),y=function(){let t=1;return function(){return t++}}(),v=function(t){const e=Object(s["F"])(t),n=new s["c"];n.update(e);const r=n.digest();return s["f"].encodeByteArray(r)},_=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=_.apply(null,r):e+="object"===typeof r?Object(s["G"])(r):r,e+=" "}return e};let b=null,w=!0;const C=function(t,e){Object(s["d"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=o["a"].VERBOSE,b=m.log.bind(m),e&&g.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,g.remove("logging_enabled"))},E=function(...t){if(!0===w&&(w=!1,null===b&&!0===g.get("logging_enabled")&&C(!0)),b){const e=_.apply(null,t);b(e)}},T=function(t){return function(...e){E(t,...e)}},I=function(...t){const e="FIREBASE INTERNAL ERROR: "+_(...t);m.error(e)},S=function(...t){const e="FIREBASE FATAL ERROR: "+_(...t);throw m.error(e),new Error(e)},k=function(...t){const e="FIREBASE WARNING: "+_(...t);m.warn(e)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O=function(t){if(Object(s["v"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",R="[MAX_NAME]",P=function(t,e){if(t===e)return 0;if(t===N||e===R)return-1;if(e===N||t===R)return 1;{const n=G(t),r=G(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},D=function(t,e){return t===e?0:t<e?-1:1},L=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(s["G"])(e))},j=function(t){if("object"!==typeof t||null===t)return Object(s["G"])(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=Object(s["G"])(e[r]),n+=":",n+=j(t[e[r]]);return n+="}",n},M=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function F(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const U=function(t){Object(s["d"])(!A(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,a,c,u;0===t?(o=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let t=parseInt(h.substr(u,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},V=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function $(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const B=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,z=2147483647,G=function(t){if(B.test(t)){const e=Number(t);if(e>=H&&e<=z)return e}return null},W=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e},Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",tt="v",et="s",nt="r",rt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,st="ls",ot="p",at="ac",ct="websocket",ut="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(t,e,n,r,i=!1,s="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if(Object(s["d"])("string"===typeof e,"typeof type must == string"),Object(s["d"])("object"===typeof n,"typeof params must == object"),e===ct)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ut)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const i=[];return F(n,(t,e)=>{i.push(t+"="+e)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(s["h"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(s["j"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},gt={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function yt(t,e){const n=t.toString();return gt[n]||(gt[n]=e()),gt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&W(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="start",bt="close",wt="pLPCommand",Ct="pRTLPCB",Et="id",Tt="pw",It="ser",St="cb",kt="seg",xt="ts",At="d",Ot="dframe",Nt=1870,Rt=30,Pt=Nt-Rt,Dt=25e3,Lt=3e4;class jt{constructor(t,e,n,r,i,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,ut,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new vt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lt)),O(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mt((...t)=>{const[e,n,r,i,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===_t)this.id=n,this.password=r;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[_t]="t",t[It]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[St]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[st]=this.lastSessionId),this.applicationId&&(t[ot]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jt.forceAllow_=!0}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){return!Object(s["v"])()&&(!!jt.forceAllow_||!jt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!V()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(s["G"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(s["g"])(e),r=M(n,Pt);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(s["v"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ot]="t",n[Et]=t,n[Tt]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(s["G"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Mt{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["v"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=y(),window[wt+this.uniqueCallbackIdentifier]=t,window[Ct+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||E("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Et]=this.myID,t[Tt]=this.myPW,t[It]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Rt+n.length<=Nt))break;{const t=this.pendingSegs.shift();n=n+"&"+kt+r+"="+t.seg+"&"+xt+r+"="+t.ts+"&"+At+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Dt)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){Object(s["v"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{E("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=16384,Ut=45e3;let Vt=null;"undefined"!==typeof MozWebSocket?Vt=MozWebSocket:"undefined"!==typeof WebSocket&&(Vt=WebSocket);class qt{constructor(t,e,n,r,i,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=mt(e),this.connURL=qt.connectionURL_(e,s,o,r),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r){const i={};return i[tt]=Z,!Object(s["v"])()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(i[nt]=rt),e&&(i[et]=e),n&&(i[st]=n),r&&(i[at]=r),dt(t,ct,i)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s["v"])()){const e=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${u}/${t.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:""}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new Vt(this.connURL,[],n)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Vt(this.connURL,[],t)}}catch(r){this.log_("Error instantiating WebSocket.");const t=r.message||r.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Vt&&!qt.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(s["A"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(s["d"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(s["G"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=M(e,Ft);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ut))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2,qt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[jt,qt]}initTransports_(t){const e=qt&&qt["isAvailable"]();let n=e&&!qt.previouslyFailed();if(t.webSocketOnly&&(e||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qt];else{const t=this.transports_=[];for(const e of $t.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=6e4,Ht=5e3,zt=10240,Gt=102400,Wt="t",Kt="d",Yt="s",Qt="r",Xt="e",Jt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,i,s,o,a,c,u){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new $t(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Wt in t){const e=t[Wt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Qt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=L("t",t),n=L("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=L("t",t),n=L("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=L(Wt,t);if(Kt in t){const n=t[Kt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Qt?this.onReset_(n):e===Xt?I("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(s["d"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){Object(s["d"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends se{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["u"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oe}getInitialEvent(t){return Object(s["d"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=32,ce=768;class ue{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function le(){return new ue("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ge(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ye(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ue(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return be(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ce(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ee{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["E"])(this.parts_[n]);Se(this)}}function Te(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(s["E"])(e),Se(t)}function Ie(t){const e=t.parts_.pop();t.byteLength_-=Object(s["E"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function Se(t){if(t.byteLength_>ce)throw new Error(t.errorPrefix_+"has a key path longer than "+ce+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+ke(t))}function ke(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends se{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new xe}getInitialEvent(t){return Object(s["d"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1e3,Oe=3e5,Ne=3e3,Re=3e4,Pe=1.3,De=3e4,Le="server_kill",je=3;class Me extends ie{constructor(t,e,n,r,i,o,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Me.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ae,this.maxReconnectDelay_=Oe,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["v"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_(Object(s["G"])(i)),Object(s["d"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new s["a"],n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const r=t["d"];"ok"===t["s"]?(this.onDataUpdate_(n["p"],r,!1,null),e.resolve(r)):e.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const t=this.outstandingGets_[i];void 0!==t&&r===t&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),e.reject(new Error("Client is offline.")))},Ne),this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Object(s["d"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["d"])(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(s,i,i=>{const s=i["d"],o=i["s"];Me.warnOnListenWarnings_(s,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),t.onComplete&&t.onComplete(o,s))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(s["h"])(t,"w")){const n=Object(s["D"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(s["o"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Re)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(s["z"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(s["d"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,t=>{r&&setTimeout(()=>{r(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const s={p:e,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:t,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(s["G"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):I("Unrecognized action received from server: "+Object(s["G"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(s["d"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>De&&(this.reconnectDelay_=Ae),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pe)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Me.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},u=function(t){Object(s["d"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{k(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Le)},i))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(s["r"])(this.interruptReasons_)&&(this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>j(t)).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new ue(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=je&&(this.reconnectDelay_=Re,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){E("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=je&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(s["v"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+u.replace(/\./g,"-")]=1,Object(s["u"])()?t["framework.cordova"]=1:Object(s["w"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oe.getInstance().currentlyOnline();return Object(s["r"])(this.interruptReasons_)&&t}}Me.nextPersistentConnectionId_=0,Me.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Fe(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Fe(N,t),r=new Fe(N,e);return 0!==this.compare(n,r)}minPost(){return Fe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;class qe extends Ue{static get __EMPTY_NODE(){return Ve}static set __EMPTY_NODE(t){Ve=t}compare(t,e){return P(t.name,e.name)}isDefinedOn(t){throw Object(s["e"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(R,Ve)}makePost(t,e){return Object(s["d"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new Fe(t,Ve)}toString(){return".key"}}const $e=new qe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!t.isEmpty())if(t=t,s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class He{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:He.RED,this.left=null!=r?r:Ge.EMPTY_NODE,this.right=null!=i?i:Ge.EMPTY_NODE}copy(t,e,n,r,i){return new He(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Ge.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}He.RED=!0,He.BLACK=!1;class ze{copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(t,e=Ge.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Ge(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(t){return new Ge(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,He.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Be(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Be(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Be(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Be(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(t,e){return P(t.name,e.name)}function Ke(t,e){return P(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye;function Qe(t){Ye=t}Ge.EMPTY_NODE=new ze;const Xe=function(t){return"number"===typeof t?"number:"+U(t):"string:"+t},Je=function(t){if(t.isLeafNode()){const e=t.val();Object(s["d"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(s["h"])(e,".sv"),"Priority must be a string or number.")}else Object(s["d"])(t===Ye||t.isEmpty(),"priority of unexpected type.");Object(s["d"])(t===Ye||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ze,tn,en;class nn{constructor(t,e=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(s["d"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Je(this.priorityNode_)}static set __childrenNodeConstructor(t){Ze=t}static get __childrenNodeConstructor(){return Ze}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return _e(t)?this:".priority"===he(t)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(s["d"])(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Xe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?U(this.value_):this.value_,this.lazyHash_=v(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nn.__childrenNodeConstructor?-1:(Object(s["d"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(e),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["d"])(r>=0,"Unknown leaf type: "+e),Object(s["d"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function rn(t){tn=t}function sn(t){en=t}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Ue{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?P(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(R,new nn("[PRIORITY-POST]",en))}makePost(t,e){const n=tn(t);return new Fe(e,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){const e=t=>parseInt(Math.log(t)/cn,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ln=function(t,e,n,r){t.sort(e);const i=function(e,r){const s=r-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new He(a,o.node,He.BLACK,null,null);{const c=parseInt(s/2,10)+e,u=i(e,c),l=i(c+1,r);return o=t[c],a=n?n(o):o,new He(a,o.node,He.BLACK,u,l)}},s=function(e){let r=null,s=null,o=t.length;const a=function(e,r){const s=o-e,a=o;o-=e;const u=i(s+1,a),l=t[s],h=n?n(l):l;c(new He(h,l.node,r,null,u))},c=function(t){r?(r.left=t,r=t):(s=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,He.BLACK):(a(r,He.BLACK),a(r,He.RED))}return s},o=new un(t.length),a=s(o);return new Ge(r||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(s["d"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(t){const e=Object(s["D"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ge?e:null}hasIndex(t){return Object(s["h"])(this.indexSet_,t.toString())}addIndex(t,e){Object(s["d"])(t!==$e,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(Fe.Wrap);let o,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?ln(n,t.getCompare()):dn;const c=t.toString(),u=Object.assign({},this.indexSet_);u[c]=t;const l=Object.assign({},this.indexes_);return l[c]=o,new fn(l,u)}addToIndexes(t,e){const n=Object(s["B"])(this.indexes_,(n,r)=>{const i=Object(s["D"])(this.indexSet_,r);if(Object(s["d"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(Fe.Wrap);let s=r.getNext();while(s)s.name!==t.name&&n.push(s),s=r.getNext();return n.push(t),ln(n,i.getCompare())}return dn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new Fe(t.name,r))),i.insert(t,t.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(s["B"])(this.indexes_,n=>{if(n===dn)return n;{const r=e.get(t.name);return r?n.remove(new Fe(t.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class gn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Je(this.priorityNode_),this.children_.isEmpty()&&Object(s["d"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new gn(new Ge(Ke),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(t){return this.children_.isEmpty()?this:new gn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?pn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(s["d"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Fe(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?pn:this.priorityNode_;return new gn(r,s,i)}}updateChild(t,e){const n=he(t);if(null===n)return e;{Object(s["d"])(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(an,(s,o)=>{e[s]=o.val(t),n++,i&&gn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Xe(this.getPriority().val())+":"),this.forEachChild(an,(e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":v(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Fe(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Fe(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Fe(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===yn?-1:0}withIndex(t){if(t===$e||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new gn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===$e||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(an),n=e.getIterator(an);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===$e?null:this.indexMap_.get(t.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends gn{constructor(){super(new Ge(Ke),gn.EMPTY_NODE,fn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return gn.EMPTY_NODE}isEmpty(){return!1}}const yn=new mn;Object.defineProperties(Fe,{MIN:{value:new Fe(N,gn.EMPTY_NODE)},MAX:{value:new Fe(R,yn)}}),qe.__EMPTY_NODE=gn.EMPTY_NODE,nn.__childrenNodeConstructor=gn,Qe(yn),sn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function _n(t,e=null){if(null===t)return gn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(s["d"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new nn(n,_n(e))}if(t instanceof Array||!vn){let n=gn.EMPTY_NODE;return F(t,(e,r)=>{if(Object(s["h"])(t,e)&&"."!==e.substring(0,1)){const t=_n(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(_n(e))}{const n=[];let r=!1;const i=t;if(F(i,(t,e)=>{if("."!==t.substring(0,1)){const i=_n(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Fe(t,i)))}}),0===n.length)return gn.EMPTY_NODE;const s=ln(n,We,t=>t.name,Ke);if(r){const t=ln(n,an.getCompare());return new gn(s,_n(e),new fn({".priority":t},{".priority":an}))}return new gn(s,_n(e),fn.Default)}}rn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends Ue{constructor(t){super(),this.indexPath_=t,Object(s["d"])(!_e(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?P(t.name,e.name):i}makePost(t,e){const n=_n(t),r=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Fe(e,r)}maxPost(){const t=gn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new Fe(R,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ue{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?P(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(t,e){const n=_n(t);return new Fe(e,n)}toString(){return".value"}}const Cn=new wn,En="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tn=function(){let t=0;const e=[];return function(n){const r=n===t;let i;t=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=En.charAt(n%64),n=Math.floor(n/64);Object(s["d"])(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===e[i];i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=En.charAt(e[i]);return Object(s["d"])(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(t){return{type:"value",snapshotNode:t}}function Sn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function An(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.index_=t}updateChild(t,e,n,r,i,o){Object(s["d"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(kn(e,a)):Object(s["d"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Sn(e,n)):o.trackChildChange(xn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(an,(t,r)=>{e.hasChild(t)||n.trackChildChange(kn(t,r))}),e.isLeafNode()||e.forEachChild(an,(e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(xn(e,r,i))}else n.trackChildChange(Sn(e,r))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?gn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.indexedFilter_=new On(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Nn.getStartPost_(t),this.endPost_=Nn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,r,i,s){return this.matches(new Fe(e,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,s)}updateFullNode(t,e,n){e.isLeafNode()&&(e=gn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(gn.EMPTY_NODE);const i=this;return e.forEachChild(an,(t,e)=>{i.matches(new Fe(t,e))||(r=r.updateImmediateChild(t,gn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.rangedFilter_=new Nn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,r,i,s){return this.rangedFilter_.matches(new Fe(e,n))||(n=gn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,s):this.fullLimitUpdateChild_(t,e,n,i,s)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=gn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(e.name,e.node),n++}}else{let t,n,i,s;if(r=e.withIndex(this.index_),r=r.updatePriority(gn.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else s=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const e=s.getNext();!a&&i(t,e)<=0&&(a=!0);const c=a&&o<this.limit_&&i(e,n)<=0;c?o++:r=r.updateImmediateChild(e.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const a=t;Object(s["d"])(a.numChildren()===this.limit_,"");const c=new Fe(e,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let s=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=s&&(s.name===e||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(xn(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(kn(e,t));const n=a.updateImmediateChild(e,gn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Sn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?t:l&&o(u,c)>=0?(null!=i&&(i.trackChildChange(kn(u.name,u.node)),i.trackChildChange(Sn(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(u.name,gn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["d"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["d"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["d"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["d"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["d"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const t=new Pn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Dn(t){return t.loadsAllData()?new On(t.getIndex()):t.hasLimit()?new Rn(t):new Nn(t)}function Ln(t){const e={};if(t.isDefault())return e;let n;return t.index_===an?n="$priority":t.index_===Cn?n="$value":t.index_===$e?n="$key":(Object(s["d"])(t.index_ instanceof bn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(s["G"])(n),t.startSet_&&(e["startAt"]=Object(s["G"])(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+Object(s["G"])(t.indexStartName_))),t.endSet_&&(e["endAt"]=Object(s["G"])(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+Object(s["G"])(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function jn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==an&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ie{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=T("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(s["d"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const o=Mn.getListenId_(t,n),a={};this.listens_[o]=a;const c=Ln(t._queryParams);this.restRequest_(i+".json",c,(t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),Object(s["D"])(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(t,e){const n=Mn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Ln(t._queryParams),n=t._path.toString(),r=new s["a"];return this.restRequest_(n+".json",e,(t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(s["C"])(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(s["A"])(a.responseText)}catch(t){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return{value:null,children:new Map}}function Vn(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,Un());const i=t.children.get(r);e=fe(e),Vn(i,e,n)}}function qn(t,e,n){null!==t.value?n(e,t.value):$n(t,(t,r)=>{const i=new ue(e.toString()+"/"+t);qn(r,i,n)})}function $n(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&F(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e4,zn=3e4,Gn=3e5;class Wn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Bn(t);const n=Hn+(zn-Hn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;F(t,(t,r)=>{r>0&&Object(s["h"])(this.statsToReport_,t)&&(e[t]=r,n=!0)}),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;function Yn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Kn||(Kn={}));class Jn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Kn.ACK_USER_WRITE,this.source=Yn()}operationForChild(t){if(_e(this.path)){if(null!=this.affectedTree.value)return Object(s["d"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ue(t));return new Jn(le(),e,this.revert)}}return Object(s["d"])(he(this.path)===t,"operationForChild called for unrelated child."),new Jn(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.source=t,this.path=e,this.type=Kn.LISTEN_COMPLETE}operationForChild(t){return _e(this.path)?new Zn(this.source,le()):new Zn(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Kn.OVERWRITE}operationForChild(t){return _e(this.path)?new tr(this.source,le(),this.snap.getImmediateChild(t)):new tr(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Kn.MERGE}operationForChild(t){if(_e(this.path)){const e=this.children.subtree(new ue(t));return e.isEmpty()?null:e.value?new tr(this.source,le(),e.value):new er(this.source,le(),e)}return Object(s["d"])(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new er(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(_e(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function ir(t,e,n,r){const i=[],s=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push(An(e.childName,e.snapshotNode))}),sr(t,i,"child_removed",e,r,n),sr(t,i,"child_added",e,r,n),sr(t,i,"child_moved",s,r,n),sr(t,i,"child_changed",e,r,n),sr(t,i,"value",e,r,n),i}function sr(t,e,n,r,i,s){const o=r.filter(t=>t.type===n);o.sort((e,n)=>ar(t,e,n)),o.forEach(n=>{const r=or(t,n,s);i.forEach(i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))})})}function or(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ar(t,e,n){if(null==e.childName||null==n.childName)throw Object(s["e"])("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),i=new Fe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){return{eventCache:t,serverCache:e}}function ur(t,e,n,r){return cr(new nr(e,n,r),t.serverCache)}function lr(t,e,n,r){return cr(t.eventCache,new nr(e,n,r))}function hr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const pr=()=>(fr||(fr=new Ge(D)),fr);class gr{constructor(t,e=pr()){this.value=t,this.children=e}static fromObject(t){let e=new gr(null);return F(t,(t,n)=>{e=e.set(new ue(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:le(),value:this.value};if(_e(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=i){const t=ve(new ue(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(_e(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new gr(null)}}set(t,e){if(_e(t))return new gr(e,this.children);{const n=he(t),r=this.children.get(n)||new gr(null),i=r.set(fe(t),e),s=this.children.insert(n,i);return new gr(this.value,s)}}remove(t){if(_e(t))return this.children.isEmpty()?new gr(null):new gr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new gr(null):new gr(this.value,i)}return this}}get(t){if(_e(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(_e(t))return e;{const n=he(t),r=this.children.get(n)||new gr(null),i=r.setTree(fe(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new gr(this.value,s)}}fold(t){return this.fold_(le(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ve(t,r),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,le(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(_e(t))return null;{const r=he(t),i=this.children.get(r);return i?i.findOnPath_(fe(t),ve(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,le(),e)}foreachOnPath_(t,e,n){if(_e(t))return this;{this.value&&n(e,this.value);const r=he(t),i=this.children.get(r);return i?i.foreachOnPath_(fe(t),ve(e,r),n):new gr(null)}}foreach(t){this.foreach_(le(),t)}foreach_(t,e){this.children.inorderTraversal((n,r)=>{r.foreach_(ve(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.writeTree_=t}static empty(){return new mr(new gr(null))}}function yr(t,e,n){if(_e(e))return new mr(new gr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new mr(t.writeTree_.set(i,s))}{const r=new gr(n),i=t.writeTree_.setTree(e,r);return new mr(i)}}}function vr(t,e,n){let r=t;return F(n,(t,n)=>{r=yr(r,ve(e,t),n)}),r}function _r(t,e){if(_e(e))return mr.empty();{const n=t.writeTree_.setTree(e,new gr(null));return new mr(n)}}function br(t,e){return null!=wr(t,e)}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function Cr(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(t,n)=>{e.push(new Fe(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new Fe(t,n.value))}),e}function Er(t,e){if(_e(e))return t;{const n=wr(t,e);return new mr(null!=n?new gr(n):t.writeTree_.subtree(e))}}function Tr(t){return t.writeTree_.isEmpty()}function Ir(t,e){return Sr(le(),t.writeTree_,e)}function Sr(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((e,i)=>{".priority"===e?(Object(s["d"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Sr(ve(t,e),i,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ve(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){return Yr(e,t)}function xr(t,e,n,r,i){Object(s["d"])(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yr(t.visibleWrites,e,n)),t.lastWriteId=r}function Ar(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Or(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(s["d"])(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Nr(e,r.path)?i=!1:Ce(r.path,e.path)&&(o=!0)),a--}if(i){if(o)return Rr(t),!0;if(r.snap)t.visibleWrites=_r(t.visibleWrites,r.path);else{const e=r.children;F(e,e=>{t.visibleWrites=_r(t.visibleWrites,ve(r.path,e))})}return!0}return!1}function Nr(t,e){if(t.snap)return Ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ce(ve(t.path,n),e))return!0;return!1}function Rr(t){t.visibleWrites=Dr(t.allWrites,Pr,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pr(t){return t.visible}function Dr(t,e,n){let r=mr.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const t=o.path;let e;if(o.snap)Ce(n,t)?(e=be(n,t),r=yr(r,e,o.snap)):Ce(t,n)&&(e=be(t,n),r=yr(r,le(),o.snap.getChild(e)));else{if(!o.children)throw Object(s["e"])("WriteRecord should have .snap or .children");if(Ce(n,t))e=be(n,t),r=vr(r,e,o.children);else if(Ce(t,n))if(e=be(t,n),_e(e))r=vr(r,le(),o.children);else{const t=Object(s["D"])(o.children,he(e));if(t){const n=t.getChild(fe(e));r=yr(r,le(),n)}}}}}return r}function Lr(t,e,n,r,i){if(r||i){const s=Er(t.visibleWrites,e);if(!i&&Tr(s))return n;if(i||null!=n||br(s,le())){const s=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(Ce(t.path,e)||Ce(e,t.path))},o=Dr(t.allWrites,s,e),a=n||gn.EMPTY_NODE;return Ir(o,a)}return null}{const r=wr(t.visibleWrites,e);if(null!=r)return r;{const r=Er(t.visibleWrites,e);if(Tr(r))return n;if(null!=n||br(r,le())){const t=n||gn.EMPTY_NODE;return Ir(r,t)}return null}}}function jr(t,e,n){let r=gn.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(an,(t,e)=>{r=r.updateImmediateChild(t,e)}),r;if(n){const i=Er(t.visibleWrites,e);return n.forEachChild(an,(t,e)=>{const n=Ir(Er(i,new ue(t)),e);r=r.updateImmediateChild(t,n)}),Cr(i).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}{const n=Er(t.visibleWrites,e);return Cr(n).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}}function Mr(t,e,n,r,i){Object(s["d"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ve(e,n);if(br(t.visibleWrites,o))return null;{const e=Er(t.visibleWrites,o);return Tr(e)?i.getChild(n):Ir(e,i.getChild(n))}}function Fr(t,e,n,r){const i=ve(e,n),s=wr(t.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const e=Er(t.visibleWrites,i);return Ir(e,r.getNode().getImmediateChild(n))}return null}function Ur(t,e){return wr(t.visibleWrites,e)}function Vr(t,e,n,r,i,s,o){let a;const c=Er(t.visibleWrites,e),u=wr(c,le());if(null!=u)a=u;else{if(null==n)return[];a=Ir(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function qr(){return{visibleWrites:mr.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,r){return Lr(t.writeTree,t.treePath,e,n,r)}function Br(t,e){return jr(t.writeTree,t.treePath,e)}function Hr(t,e,n,r){return Mr(t.writeTree,t.treePath,e,n,r)}function zr(t,e){return Ur(t.writeTree,ve(t.treePath,e))}function Gr(t,e,n,r,i,s){return Vr(t.writeTree,t.treePath,e,n,r,i,s)}function Wr(t,e,n){return Fr(t.writeTree,t.treePath,e,n)}function Kr(t,e){return Yr(ve(t.treePath,e),t.writeTree)}function Yr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(s["d"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(s["d"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,xn(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,kn(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,Sn(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw Object(s["e"])("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,xn(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Jr=new Xr;class Zr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:dr(this.viewCache_),i=Gr(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return{filter:t}}function ei(t,e){Object(s["d"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(s["d"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ni(t,e,n,r,i){const o=new Qr;let a,c;if(n.type===Kn.OVERWRITE){const u=n;u.source.fromUser?a=oi(t,e,u.path,u.snap,r,i,o):(Object(s["d"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),a=si(t,e,u.path,u.snap,r,i,c,o))}else if(n.type===Kn.MERGE){const u=n;u.source.fromUser?a=ci(t,e,u.path,u.children,r,i,o):(Object(s["d"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),a=li(t,e,u.path,u.children,r,i,c,o))}else if(n.type===Kn.ACK_USER_WRITE){const s=n;a=s.revert?fi(t,e,s.path,r,i,o):hi(t,e,s.path,s.affectedTree,r,i,o)}else{if(n.type!==Kn.LISTEN_COMPLETE)throw Object(s["e"])("Unknown operation type: "+n.type);a=di(t,e,n.path,r,o)}const u=o.getChanges();return ri(e,a,u),{viewCache:a,changes:u}}function ri(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(In(hr(e)))}}function ii(t,e,n,r,i,o){const a=e.eventCache;if(null!=zr(r,n))return e;{let c,u;if(_e(n))if(Object(s["d"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=dr(e),i=n instanceof gn?n:gn.EMPTY_NODE,s=Br(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),s,o)}else{const n=$r(r,dr(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const l=he(n);if(".priority"===l){Object(s["d"])(1===de(n),"Can't have a priority with additional path components");const i=a.getNode();u=e.serverCache.getNode();const o=Hr(r,n,i,u);c=null!=o?t.filter.updatePriority(i,o):a.getNode()}else{const s=fe(n);let h;if(a.isCompleteForChild(l)){u=e.serverCache.getNode();const t=Hr(r,n,a.getNode(),u);h=null!=t?a.getNode().getImmediateChild(l).updateChild(s,t):a.getNode().getImmediateChild(l)}else h=Wr(r,l,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),l,h,s,i,o):a.getNode()}}return ur(e,c,a.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function si(t,e,n,r,i,s,o,a){const c=e.serverCache;let u;const l=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),t,null)}else{const t=he(n);if(!c.isCompleteForPath(n)&&de(n)>1)return e;const i=fe(n),s=c.getNode().getImmediateChild(t),o=s.updateChild(i,r);u=".priority"===t?l.updatePriority(c.getNode(),o):l.updateChild(c.getNode(),t,o,i,Jr,null)}const h=lr(e,u,c.isFullyInitialized()||_e(n),l.filtersNodes()),d=new Zr(i,h,s);return ii(t,h,n,i,d,a)}function oi(t,e,n,r,i,s,o){const a=e.eventCache;let c,u;const l=new Zr(i,e,s);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=ur(e,u,!0,t.filter.filtersNodes());else{const i=he(n);if(".priority"===i)u=t.filter.updatePriority(e.eventCache.getNode(),r),c=ur(e,u,a.isFullyInitialized(),a.isFiltered());else{const s=fe(n),u=a.getNode().getImmediateChild(i);let h;if(_e(s))h=r;else{const t=l.getCompleteChild(i);h=null!=t?".priority"===pe(s)&&t.getChild(ye(s)).isEmpty()?t:t.updateChild(s,r):gn.EMPTY_NODE}if(u.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,s,l,o);c=ur(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ai(t,e){return t.eventCache.isCompleteForChild(e)}function ci(t,e,n,r,i,s,o){let a=e;return r.foreach((r,c)=>{const u=ve(n,r);ai(e,he(u))&&(a=oi(t,a,u,c,i,s,o))}),r.foreach((r,c)=>{const u=ve(n,r);ai(e,he(u))||(a=oi(t,a,u,c,i,s,o))}),a}function ui(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function li(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,u=e;c=_e(n)?r:new gr(null).setTree(n,r);const l=e.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),l=ui(t,c,r);u=si(t,u,new ue(n),l,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),l=ui(t,c,r);u=si(t,u,new ue(n),l,i,s,o,a)}}),u}function hi(t,e,n,r,i,s,o){if(null!=zr(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(_e(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return si(t,e,n,c.getNode().getChild(n),i,s,a,o);if(_e(n)){let r=new gr(null);return c.getNode().forEachChild($e,(t,e)=>{r=r.set(new ue(t),e)}),li(t,e,n,r,i,s,a,o)}return e}{let u=new gr(null);return r.foreach((t,e)=>{const r=ve(n,t);c.isCompleteForPath(r)&&(u=u.set(t,c.getNode().getChild(r)))}),li(t,e,n,u,i,s,a,o)}}function di(t,e,n,r,i){const s=e.serverCache,o=lr(e,s.getNode(),s.isFullyInitialized()||_e(n),s.isFiltered());return ii(t,o,n,r,Jr,i)}function fi(t,e,n,r,i,o){let a;if(null!=zr(r,n))return e;{const c=new Zr(r,e,i),u=e.eventCache.getNode();let l;if(_e(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=$r(r,dr(e));else{const t=e.serverCache.getNode();Object(s["d"])(t instanceof gn,"serverChildren would be complete if leaf node"),n=Br(r,t)}n=n,l=t.filter.updateFullNode(u,n,o)}else{const i=he(n);let s=Wr(r,i,e.serverCache);null==s&&e.serverCache.isCompleteForChild(i)&&(s=u.getImmediateChild(i)),l=null!=s?t.filter.updateChild(u,i,s,fe(n),c,o):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(u,i,gn.EMPTY_NODE,fe(n),c,o):u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=$r(r,dr(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=zr(r,le()),ur(e,l,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new On(n.getIndex()),i=Dn(n);this.processor_=ti(i);const s=e.serverCache,o=e.eventCache,a=r.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),u=new nr(a,s.isFullyInitialized(),r.filtersNodes()),l=new nr(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=cr(l,u),this.eventGenerator_=new rr(this.query_)}get query(){return this.query_}}function gi(t){return t.viewCache_.serverCache.getNode()}function mi(t,e){const n=dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function yi(t){return 0===t.eventRegistrations_.length}function vi(t,e){t.eventRegistrations_.push(e)}function _i(t,e,n){const r=[];if(n){Object(s["d"])(null==e,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(t=>{const e=t.createCancelEvent(n,i);e&&r.push(e)})}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const i=t.eventRegistrations_[r];if(i.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(i)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function bi(t,e,n,r){e.type===Kn.MERGE&&null!==e.source.queryId&&(Object(s["d"])(dr(t.viewCache_),"We should always have a full cache before handling merges"),Object(s["d"])(hr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=ni(t.processor_,i,e,n,r);return ei(t.processor_,o.viewCache),Object(s["d"])(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Ci(t,o.changes,o.viewCache.eventCache.getNode(),null)}function wi(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(an,(t,e)=>{r.push(Sn(t,e))})}return n.isFullyInitialized()&&r.push(In(n.getNode())),Ci(t,r,n.getNode(),e)}function Ci(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ir(t.eventGenerator_,e,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei,Ti;class Ii{constructor(){this.views=new Map}}function Si(t){Object(s["d"])(!Ei,"__referenceConstructor has already been defined"),Ei=t}function ki(){return Object(s["d"])(Ei,"Reference.ts has not been loaded"),Ei}function xi(t){return 0===t.views.size}function Ai(t,e,n,r){const i=e.source.queryId;if(null!==i){const o=t.views.get(i);return Object(s["d"])(null!=o,"SyncTree gave us an op for an invalid query."),bi(o,e,n,r)}{let i=[];for(const s of t.views.values())i=i.concat(bi(s,e,n,r));return i}}function Oi(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=$r(n,i?r:null),s=!1;t?s=!0:r instanceof gn?(t=Br(n,r),s=!1):(t=gn.EMPTY_NODE,s=!1);const o=cr(new nr(t,s,!1),new nr(r,i,!1));return new pi(e,o)}return o}function Ni(t,e,n,r,i,s){const o=Oi(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vi(o,n),wi(o,n)}function Ri(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mi(t);if("default"===i)for(const[c,u]of t.views.entries())o=o.concat(_i(u,n,r)),yi(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||s.push(u.query));else{const e=t.views.get(i);e&&(o=o.concat(_i(e,n,r)),yi(e)&&(t.views.delete(i),e.query._queryParams.loadsAllData()||s.push(e.query)))}return a&&!Mi(t)&&s.push(new(ki())(e._repo,e._path)),{removed:s,events:o}}function Pi(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Di(t,e){let n=null;for(const r of t.views.values())n=n||mi(r,e);return n}function Li(t,e){const n=e._queryParams;if(n.loadsAllData())return Fi(t);{const n=e._queryIdentifier;return t.views.get(n)}}function ji(t,e){return null!=Li(t,e)}function Mi(t){return null!=Fi(t)}function Fi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){Object(s["d"])(!Ti,"__referenceConstructor has already been defined"),Ti=t}function Vi(){return Object(s["d"])(Ti,"Reference.ts has not been loaded"),Ti}let qi=1;class $i{constructor(t){this.listenProvider_=t,this.syncPointTree_=new gr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bi(t,e,n,r,i){return xr(t.pendingWriteTree_,e,n,r,i),i?ts(t,new tr(Yn(),e,n)):[]}function Hi(t,e,n=!1){const r=Ar(t.pendingWriteTree_,e),i=Or(t.pendingWriteTree_,e);if(i){let e=new gr(null);return null!=r.snap?e=e.set(le(),!0):F(r.children,t=>{e=e.set(new ue(t),!0)}),ts(t,new Jn(r.path,e,n))}return[]}function zi(t,e,n){return ts(t,new tr(Qn(),e,n))}function Gi(t,e,n){const r=gr.fromObject(n);return ts(t,new er(Qn(),e,r))}function Wi(t,e){return ts(t,new Zn(Qn(),e))}function Ki(t,e,n){const r=os(t,n);if(r){const n=as(r),i=n.path,s=n.queryId,o=be(i,e),a=new Zn(Xn(s),o);return cs(t,i,a)}return[]}function Yi(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&("default"===e._queryIdentifier||ji(s,e))){const a=Ri(s,e,n,r);xi(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;o=a.events;const u=-1!==c.findIndex(t=>t._queryParams.loadsAllData()),l=t.syncPointTree_.findOnPath(i,(t,e)=>Mi(e));if(u&&!l){const e=t.syncPointTree_.subtree(i);if(!e.isEmpty()){const n=us(e);for(let e=0;e<n.length;++e){const r=n[e],i=r.query,s=rs(t,r);t.listenProvider_.startListening(ls(i),is(t,i),s.hashFn,s.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;t.listenProvider_.stopListening(ls(e),n)}else c.forEach(e=>{const n=t.queryToTagMap.get(ss(e));t.listenProvider_.stopListening(ls(e),n)});hs(t,c)}return o}function Qi(t,e,n,r){const i=os(t,r);if(null!=i){const r=as(i),s=r.path,o=r.queryId,a=be(s,e),c=new tr(Xn(o),a,n);return cs(t,s,c)}return[]}function Xi(t,e,n,r){const i=os(t,r);if(i){const r=as(i),s=r.path,o=r.queryId,a=be(s,e),c=gr.fromObject(n),u=new er(Xn(o),a,c);return cs(t,s,u)}return[]}function Ji(t,e,n){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(t,e)=>{const n=be(t,r);i=i||Di(e,n),o=o||Mi(e)});let a,c=t.syncPointTree_.get(r);if(c?(o=o||Mi(c),i=i||Di(c,le())):(c=new Ii,t.syncPointTree_=t.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=gn.EMPTY_NODE;const e=t.syncPointTree_.subtree(r);e.foreachChild((t,e)=>{const n=Di(e,le());n&&(i=i.updateImmediateChild(t,n))})}const u=ji(c,e);if(!u&&!e._queryParams.loadsAllData()){const n=ss(e);Object(s["d"])(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ds();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const l=kr(t.pendingWriteTree_,r);let h=Ni(c,e,n,l,i,a);if(!u&&!o){const n=Li(c,e);h=h.concat(fs(t,e,n))}return h}function Zi(t,e,n){const r=!0,i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(t,n)=>{const r=be(t,e),i=Di(n,r);if(i)return i});return Lr(i,e,s,n,r)}function ts(t,e){return es(e,t.syncPointTree_,null,kr(t.pendingWriteTree_,le()))}function es(t,e,n,r){if(_e(t.path))return ns(t,e,n,r);{const i=e.get(le());null==n&&null!=i&&(n=Di(i,le()));let s=[];const o=he(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=Kr(r,o);s=s.concat(es(a,c,t,e))}return i&&(s=s.concat(Ai(i,t,r,n))),s}}function ns(t,e,n,r){const i=e.get(le());null==n&&null!=i&&(n=Di(i,le()));let s=[];return e.children.inorderTraversal((e,i)=>{const o=n?n.getImmediateChild(e):null,a=Kr(r,e),c=t.operationForChild(e);c&&(s=s.concat(ns(c,i,o,a)))}),i&&(s=s.concat(Ai(i,t,r,n))),s}function rs(t,e){const n=e.query,r=is(t,n);return{hashFn:()=>{const t=gi(e)||gn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Ki(t,n._path,r):Wi(t,n._path);{const r=$(e,n);return Yi(t,n,null,r)}}}}function is(t,e){const n=ss(e);return t.queryToTagMap.get(n)}function ss(t){return t._path.toString()+"$"+t._queryIdentifier}function os(t,e){return t.tagToQueryMap.get(e)}function as(t){const e=t.indexOf("$");return Object(s["d"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function cs(t,e,n){const r=t.syncPointTree_.get(e);Object(s["d"])(r,"Missing sync point for query tag that we're tracking");const i=kr(t.pendingWriteTree_,e);return Ai(r,n,i,null)}function us(t){return t.fold((t,e,n)=>{if(e&&Mi(e)){const t=Fi(e);return[t]}{let t=[];return e&&(t=Pi(e)),F(n,(e,n)=>{t=t.concat(n)}),t}})}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Vi())(t._repo,t._path):t}function hs(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=ss(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function ds(){return qi++}function fs(t,e,n){const r=e._path,i=is(t,e),o=rs(t,n),a=t.listenProvider_.startListening(ls(e),i,o.hashFn,o.onComplete),c=t.syncPointTree_.subtree(r);if(i)Object(s["d"])(!Mi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold((t,e,n)=>{if(!_e(t)&&e&&Mi(e))return[Fi(e).query];{let t=[];return e&&(t=t.concat(Pi(e).map(t=>t.query))),F(n,(e,n)=>{t=t.concat(n)}),t}});for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(ls(r),is(t,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new ps(e)}node(){return this.node_}}class gs{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ve(this.path_,t);return new gs(this.syncTree_,e)}node(){return Zi(this.syncTree_,this.path_)}}const ms=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},ys=function(t,e,n){return t&&"object"===typeof t?(Object(s["d"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?vs(t[".sv"],e,n):"object"===typeof t[".sv"]?_s(t[".sv"],e):void Object(s["d"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},vs=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(s["d"])(!1,"Unexpected server value: "+t)}},_s=function(t,e,n){t.hasOwnProperty("increment")||Object(s["d"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&Object(s["d"])(!1,"Unexpected increment value: "+r);const i=e.node();if(Object(s["d"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},bs=function(t,e,n,r){return Cs(e,new gs(n,t),r)},ws=function(t,e,n){return Cs(t,new ps(e),n)};function Cs(t,e,n){const r=t.getPriority().val(),i=ys(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const r=t,s=ys(r.getValue(),e,n);return s!==r.getValue()||i!==r.getPriority().val()?new nn(s,_n(i)):t}{const r=t;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new nn(i))),r.forEachChild(an,(t,r)=>{const i=Cs(r,e.getImmediateChild(t),n);i!==r&&(s=s.updateImmediateChild(t,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Ts(t,e){let n=e instanceof ue?e:new ue(e),r=t,i=he(n);while(null!==i){const t=Object(s["D"])(r.node.children,i)||{children:{},childCount:0};r=new Es(i,r,t),n=fe(n),i=he(n)}return r}function Is(t){return t.node.value}function Ss(t,e){t.node.value=e,Ps(t)}function ks(t){return t.node.childCount>0}function xs(t){return void 0===Is(t)&&!ks(t)}function As(t,e){F(t.node.children,(n,r)=>{e(new Es(n,t,r))})}function Os(t,e,n,r){n&&!r&&e(t),As(t,t=>{Os(t,e,!0,r)}),n&&r&&e(t)}function Ns(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function Rs(t){return new ue(null===t.parent?t.name:Rs(t.parent)+"/"+t.name)}function Ps(t){null!==t.parent&&Ds(t.parent,t.name,t)}function Ds(t,e,n){const r=xs(n),i=Object(s["h"])(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ps(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,Ps(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=/[\[\].#$\/\u0000-\u001F\u007F]/,js=/[\[\].#$\u0000-\u001F\u007F]/,Ms=10485760,Fs=function(t){return"string"===typeof t&&0!==t.length&&!Ls.test(t)},Us=function(t){return"string"===typeof t&&0!==t.length&&!js.test(t)},Vs=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Us(t)},qs=function(t,e,n,r){r&&void 0===e||$s(Object(s["l"])(t,"value"),e,n)},$s=function(t,e,n){const r=n instanceof ue?new Ee(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+ke(r));if("function"===typeof e)throw new Error(t+"contains a function "+ke(r)+" with contents = "+e.toString());if(A(e))throw new Error(t+"contains "+e.toString()+" "+ke(r));if("string"===typeof e&&e.length>Ms/3&&Object(s["E"])(e)>Ms)throw new Error(t+"contains a string greater than "+Ms+" utf8 bytes "+ke(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if(F(e,(e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!Fs(e)))throw new Error(t+" contains an invalid key ("+e+") "+ke(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Te(r,e),$s(t,s,r),Ie(r)}),n&&i)throw new Error(t+' contains ".value" child '+ke(r)+" in addition to actual children.")}},Bs=function(t,e,n,r){if((!r||void 0!==n)&&!Us(n))throw new Error(Object(s["l"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Hs=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bs(t,e,n,r)},zs=function(t,e){if(".info"===he(e))throw new Error(t+" failed = Can't modify data under /.info/")},Gs=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Fs(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Vs(n))throw new Error(Object(s["l"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ks(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();null===n||we(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ys(t,e,n){Ks(t,n),Xs(t,t=>we(t,e))}function Qs(t,e,n){Ks(t,n),Xs(t,t=>Ce(t,e)||Ce(e,t))}function Xs(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Js(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Js(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();b&&E("event: "+n.toString()),W(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="repo_interrupt",to=25;class eo{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ws,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new Es,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function no(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||K())t.server_=new Mn(t.repoInfo_,(e,n,r,i)=>{so(t,e,n,r,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oo(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["G"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Me(t.repoInfo_,e,(e,n,r,i)=>{so(t,e,n,r,i)},e=>{oo(t,e)},e=>{ao(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=yt(t.repoInfo_,()=>new Wn(t.stats_,t.server_)),t.infoData_=new Fn,t.infoSyncTree_=new $i({startListening:(e,n,r,i)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=zi(t.infoSyncTree_,e._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),co(t,"connected",!1),t.serverSyncTree_=new $i({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,(n,r)=>{const s=i(n,r);Qs(t.eventQueue_,e._path,s)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function ro(t){const e=t.infoData_.getNode(new ue(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function io(t){return ms({timestamp:ro(t)})}function so(t,e,n,r,i){t.dataUpdateCount++;const o=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=Object(s["B"])(n,t=>_n(t));a=Xi(t.serverSyncTree_,o,e,i)}else{const e=_n(n);a=Qi(t.serverSyncTree_,o,e,i)}else if(r){const e=Object(s["B"])(n,t=>_n(t));a=Gi(t.serverSyncTree_,o,e)}else{const e=_n(n);a=zi(t.serverSyncTree_,o,e)}let c=o;a.length>0&&(c=wo(t,o)),Qs(t.eventQueue_,c,a)}function oo(t,e){co(t,"connected",e),!1===e&&ho(t)}function ao(t,e){F(e,(e,n)=>{co(t,e,n)})}function co(t,e,n){const r=new ue("/.info/"+e),i=_n(n);t.infoData_.updateSnapshot(r,i);const s=zi(t.infoSyncTree_,r,i);Qs(t.eventQueue_,r,s)}function uo(t){return t.nextWriteId_++}function lo(t,e,n,r,i){mo(t,"set",{path:e.toString(),value:n,priority:r});const s=io(t),o=_n(n,r),a=Zi(t.serverSyncTree_,e),c=ws(o,a,s),u=uo(t),l=Bi(t.serverSyncTree_,e,c,u,!0);Ks(t.eventQueue_,l),t.server_.put(e.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||k("set at "+e+" failed: "+n);const o=Hi(t.serverSyncTree_,u,!s);Qs(t.eventQueue_,e,o),yo(t,i,n,r)});const h=ko(t,e);wo(t,h),Qs(t.eventQueue_,h,[])}function ho(t){mo(t,"onDisconnectEvents");const e=io(t),n=Un();qn(t.onDisconnect_,le(),(r,i)=>{const s=bs(r,i,t.serverSyncTree_,e);Vn(n,r,s)});let r=[];qn(n,le(),(e,n)=>{r=r.concat(zi(t.serverSyncTree_,e,n));const i=ko(t,e);wo(t,i)}),t.onDisconnect_=Un(),Qs(t.eventQueue_,le(),r)}function fo(t,e,n){let r;r=".info"===he(e._path)?Ji(t.infoSyncTree_,e,n):Ji(t.serverSyncTree_,e,n),Ys(t.eventQueue_,e._path,r)}function po(t,e,n){let r;r=".info"===he(e._path)?Yi(t.infoSyncTree_,e,n):Yi(t.serverSyncTree_,e,n),Ys(t.eventQueue_,e._path,r)}function go(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zs)}function mo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),E(n,...e)}function yo(t,e,n,r){e&&W(()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let i=t;r&&(i+=": "+r);const s=new Error(i);s.code=t,e(s)}})}function vo(t,e,n){return Zi(t.serverSyncTree_,e,n)||gn.EMPTY_NODE}function _o(t,e=t.transactionQueueTree_){if(e||So(t,e),Is(e)){const n=To(t,e);Object(s["d"])(n.length>0,"Sending zero length transaction queue");const r=n.every(t=>0===t.status);r&&bo(t,Rs(e),n)}else ks(e)&&As(e,e=>{_o(t,e)})}function bo(t,e,n){const r=n.map(t=>t.currentWriteId),i=vo(t,e,r);let o=i;const a=i.hash();for(let l=0;l<n.length;l++){const t=n[l];Object(s["d"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=be(e,t.path);o=o.updateChild(r,t.currentOutputSnapshotRaw)}const c=o.val(!0),u=e;t.server_.put(u.toString(),c,r=>{mo(t,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(Hi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();So(t,Ts(t.transactionQueueTree_,e)),_o(t,t.transactionQueueTree_),Qs(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)W(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{k("transaction at "+u.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}wo(t,e)}},a)}function wo(t,e){const n=Eo(t,e),r=Rs(n),i=To(t,n);return Co(t,i,r),r}function Co(t,e,n){if(0===e.length)return;const r=[];let i=[];const o=e.filter(t=>0===t.status),a=o.map(t=>t.currentWriteId);for(let c=0;c<e.length;c++){const o=e[c],u=be(n,o.path);let l,h=!1;if(Object(s["d"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,l=o.abortReason,i=i.concat(Hi(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=to)h=!0,l="maxretry",i=i.concat(Hi(t.serverSyncTree_,o.currentWriteId,!0));else{const n=vo(t,o.path,a);o.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){$s("transaction failed: Data returned ",r,o.path);let e=_n(r);const c="object"===typeof r&&null!=r&&Object(s["h"])(r,".priority");c||(e=e.updatePriority(n.getPriority()));const u=o.currentWriteId,l=io(t),h=ws(e,n,l);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=h,o.currentWriteId=uo(t),a.splice(a.indexOf(u),1),i=i.concat(Bi(t.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(Hi(t.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Hi(t.serverSyncTree_,o.currentWriteId,!0))}Qs(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===l?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(l),!1,null))))}So(t,t.transactionQueueTree_);for(let s=0;s<r.length;s++)W(r[s]);_o(t,t.transactionQueueTree_)}function Eo(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===Is(r))r=Ts(r,n),e=fe(e),n=he(e);return r}function To(t,e){const n=[];return Io(t,e,n),n.sort((t,e)=>t.order-e.order),n}function Io(t,e,n){const r=Is(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);As(e,e=>{Io(t,e,n)})}function So(t,e){const n=Is(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Ss(e,n.length>0?n:void 0)}As(e,e=>{So(t,e)})}function ko(t,e){const n=Rs(Eo(t,e)),r=Ts(t.transactionQueueTree_,e);return Ns(r,e=>{xo(t,e)}),xo(t,r),Os(r,e=>{xo(t,e)}),n}function xo(t,e){const n=Is(e);if(n){const r=[];let i=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(s["d"])(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):(Object(s["d"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(Hi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ss(e,void 0):n.length=o+1,Qs(t.eventQueue_,Rs(e),i);for(let t=0;t<r.length;t++)W(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function Oo(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${t}'`)}return e}const No=function(t,e){const n=Ro(t),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new lt(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new ue(n.pathString)}},Ro=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof t){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let l=t.indexOf("/");-1===l&&(l=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(l,h)),l<h&&(i=Ao(t.substring(l,h)));const d=Oo(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=r}"ns"in d&&(s=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["G"])(this.snapshot.exportVal())}}class Do{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return Object(s["d"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return _e(this._path)?null:pe(this._path)}get ref(){return new Mo(this._repo,this._path)}get _queryIdentifier(){const t=jn(this._queryParams),e=j(t);return"{}"===e?"default":e}get _queryObject(){return jn(this._queryParams)}isEqual(t){if(t=Object(s["m"])(t),!(t instanceof jo))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ge(this._path)}}class Mo extends jo{constructor(t,e){super(t,e,new Pn,!1)}get parent(){const t=ye(this._path);return null===t?null:new Mo(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class Fo{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new ue(t),n=Vo(this.ref,t);return new Fo(this._node.getChild(e),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new Fo(n,Vo(this.ref,e),an)))}hasChild(t){const e=new ue(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uo(t,e){return t=Object(s["m"])(t),t._checkNotDeleted("ref"),void 0!==e?Vo(t._root,e):t._root}function Vo(t,e){return t=Object(s["m"])(t),null===he(t._path)?Hs("child","path",e,!1):Bs("child","path",e,!1),new Mo(t._repo,ve(t._path,e))}function qo(t,e){t=Object(s["m"])(t),zs("push",t._path),qs("push",e,t._path,!0);const n=ro(t._repo),r=Tn(n),i=Vo(t,r),o=Vo(t,r);let a;return a=null!=e?$o(o,e).then(()=>o):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function $o(t,e){t=Object(s["m"])(t),zs("set",t._path),qs("set",e,t._path,!1);const n=new s["a"];return lo(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Bo{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new Po("value",this,new Fo(t.snapshotNode,new Mo(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Do(this,t,e):null}matches(t){return t instanceof Bo&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ho{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Do(this,t,e):null}createEvent(t,e){Object(s["d"])(null!=t.childName,"Child events should have a childName.");const n=Vo(new Mo(e._repo,e._path),t.childName),r=e._queryParams.getIndex();return new Po(t.type,this,new Fo(t.snapshotNode,n,r),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Ho&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function zo(t,e,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const e=n,r=(n,r)=>{po(t._repo,t,a),e(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Lo(n,s||void 0),a="value"===e?new Bo(o):new Ho(e,o);return fo(t._repo,t,a),()=>po(t._repo,t,a)}function Go(t,e,n,r){return zo(t,"value",e,n,r)}Si(Mo),Ui(Mo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wo="FIREBASE_DATABASE_EMULATOR_HOST",Ko={};let Yo=!1;function Qo(e,n,r,i,s){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");let a,c=No(o,s),u=c.repoInfo,l=void 0;"undefined"!==typeof t&&(l=Object({NODE_ENV:"production",BASE_URL:""})[Wo]),l?(a=!0,o=`http://${l}?ns=${u.namespace}`,c=No(o,s),u=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new J(J.OWNER):new X(e.name,e.options,n);Gs("Invalid Firebase Database URL",c),_e(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Jo(u,e,h,new Q(e.name,r));return new Zo(d,e)}function Xo(t,e){const n=Ko[e];n&&n[t.key]===t||S(`Database ${e}(${t.repoInfo_}) has already been deleted.`),go(t),delete n[t.key]}function Jo(t,e,n,r){let i=Ko[e.name];i||(i={},Ko[e.name]=i);let s=i[t.toURLString()];return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eo(t,Yo,n,r),i[t.toURLString()]=s,s}class Zo{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(no(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mo(this._repo,le())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Xo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&S("Cannot call "+t+" on a deleted database.")}}function ta(t=Object(r["e"])(),e){return Object(r["b"])(t,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ea(t){l(r["a"]),Object(r["c"])(new i["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return Qo(n,r,i,e)},"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(a,c,t),Object(r["g"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ea()}).call(this,n("4362"))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return $})),n.d(e,"c",(function(){return q})),n.d(e,"d",(function(){return B})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return Q}));var r=n("ffa6"),i=n("4fc1"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.4",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",_="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",k="@firebase/performance-compat",x="@firebase/remote-config",A="@firebase/remote-config-compat",O="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",D="firebase",L="9.1.3",j="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[_]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[k]:"fire-perf-compat",[x]:"fire-rc",[A]:"fire-rc-compat",[O]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function B(t,e,n=j){$(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new s["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=L;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["k"])(t,o.options)&&Object(s["k"])(n,o.config))return o;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new G(t,n,a);return F.set(i,c),c}function Y(t=j){const e=F.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function Q(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}q(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){q(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),Q(c,u,t),Q(c,u,"esm2017"),Q("fire-js","")}X("")},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),s=n("7418"),o=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(o(t)),n=s.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("f5df");t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),s=n("df75"),o=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||s(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=o.f,d=a.f;while(i>l){var f,p=u(arguments[l++]),g=h?s(p).concat(h(p)):s(p),m=g.length,y=0;while(m>y)f=g[y++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:l},6547:function(t,e,n){var r=n("5926"),i=n("577e"),s=n("1d80"),o=function(t){return function(e,n){var o,a,c=i(s(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"66ce":function(t,e,n){"use strict";var r=n("51b0");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]}))},"68ee":function(t,e,n){var r=n("d039"),i=n("1626"),s=n("f5df"),o=n("d066"),a=n("8925"),c=[],u=o("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,d=!l.exec((function(){})),f=function(t){if(!i(t))return!1;try{return u(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!i(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(l,a(t))};t.exports=!u||r((function(){var t;return f(f.call)||!f(Object)||!f((function(){t=!0}))||t}))?p:f},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("1a2d"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var v=h.state||(h.state=new g),_=v.get,b=v.has,w=v.set;r=function(t,e){if(b.call(v,t))throw new TypeError(p);return e.facade=t,w.call(v,t,e),e},i=function(t){return _.call(v,t)||{}},s=function(t){return b.call(v,t)}}else{var C=d("state");f[C]=!0,r=function(t,e){if(l(t,C))throw new TypeError(p);return e.facade=t,u(t,C,e),e},i=function(t){return l(t,C)?t[C]:{}},s=function(t){return l(t,C)}}t.exports={set:r,get:i,has:s,enforce:m,getterFor:y}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):_():v(r);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=b(),void 0===e?n:s(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("5e77"),o=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),g=n("ae93"),m=s.PROPER,y=s.CONFIGURABLE,v=g.IteratorPrototype,_=g.BUGGY_SAFARI_ITERATORS,b=f("iterator"),w="keys",C="values",E="entries",T=function(){return this};t.exports=function(t,e,n,s,f,g,I){a(n,e,s);var S,k,x,A=function(t){if(t===f&&D)return D;if(!_&&t in R)return R[t];switch(t){case w:return function(){return new n(this,t)};case C:return function(){return new n(this,t)};case E:return function(){return new n(this,t)}}return function(){return new n(this)}},O=e+" Iterator",N=!1,R=t.prototype,P=R[b]||R["@@iterator"]||f&&R[f],D=!_&&P||A(f),L="Array"==e&&R.entries||P;if(L&&(S=c(L.call(new t)),S!==Object.prototype&&S.next&&(i||c(S)===v||(u?u(S,v):o(S[b])||d(S,b,T)),l(S,O,!0,!0),i&&(p[O]=T))),m&&f==C&&P&&P.name!==C&&(!i&&y?h(R,"name",C):(N=!0,D=function(){return P.call(this)})),f)if(k={values:A(C),keys:g?D:A(w),entries:A(E)},I)for(x in k)(_||N||!(x in R))&&d(R,x,k[x]);else r({target:e,proto:!0,forced:_||N},k);return i&&!I||R[b]===D||d(R,b,D,{name:f}),p[e]=D,k}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),i=n("c6cd"),s=Function.toString;r(i.inspectSource)||(i.inspectSource=function(t){return s.call(t)}),t.exports=i.inspectSource},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function i(t,e){for(var n in e)t[n]=e[n];return t}var s=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,c=function(t){return encodeURIComponent(t).replace(s,o).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var r,i=n||d;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function g(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:_(e,i),matched:t?v(t):[]};return n&&(o.redirectedFrom=_(n,i)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var y=g(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function _(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||f;return(n||"/")+s(r)+i}function b(t,e,n){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function C(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var I={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],g=p&&p.component;return g?(p.configProps&&S(g,o,p.route,p.configProps),a(g,o,r)):a()}var m=u.matched[h],y=m&&m.components[c];if(!m||!y)return l[c]=null,a();l[c]={component:y},o.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),T(u)};var v=m.props&&m.props[c];return v&&(i(l[c],{route:u,configProps:v}),S(y,o,u,v)),a(y,o,r)}};function S(t,e,n,r){var s=e.props=k(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function k(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function x(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/\//g,"/")}var N=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=X,P=F,D=U,L=$,j=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],g=n[5],m=n[6],y=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=h&&h!==d,_="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||a,C=p||g;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:v,asterisk:!!y,pattern:C?H(C):y?".*":"[^"+B(w)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function U(t,e){return $(F(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",G(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?q(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function G(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function K(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",G(n));return z(s,e)}function Y(t,e,n){return Q(F(t,n),e,n)}function Q(t,e,n){N(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+s,G(n)),e)}function X(t,e,n){return N(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):N(t)?K(t,e,n):Y(t,e,n)}R.parse=P,R.compile=D,R.tokensToFunction=L,R.tokensToRegExp=j;var J=Object.create(null);function Z(t,e,n){e=e||{};try{var r=J[t]||(J[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function tt(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Z(c,a,"path "+e.path)}else 0;return s}var u=A(s.path||""),h=e&&e.path||"/",d=u.path?x(u.path,h,n||s.append):h,f=l(u.query,s.query,r&&r.options.parseQuery),p=s.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var et,nt=[String,Object],rt=[String,Array],it=function(){},st={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,y=a.redirectedFrom?g(null,tt(a.redirectedFrom),null,n):a;u[m]=b(r,y,this.exactPath),u[p]=this.exact||this.exactPath?u[m]:C(r,y);var v=u[m]?this.ariaCurrentValue:null,_=function(t){ot(t)&&(e.replace?n.replace(o,it):n.push(o,it))},w={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){w[t]=_})):w[this.event]=_;var E={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[p],isExactActive:u[m]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)E.on=w,E.attrs={href:c,"aria-current":v};else{var I=at(this.$slots.default);if(I){I.isStatic=!1;var S=I.data=i({},I.data);for(var k in S.on=S.on||{},S.on){var x=S.on[k];k in w&&(S.on[k]=Array.isArray(x)?x:[x])}for(var A in w)A in S.on?S.on[A].push(w[A]):S.on[A]=_;var O=I.data.attrs=i({},I.data.attrs);O.href=c,O["aria-current"]=v}else E.on=w}return t(this.tag,E,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",I),t.component("RouterLink",st);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function lt(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ht(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ht(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:dt(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?O(s+"/"+r.path):void 0;ht(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ht(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function dt(t,e){var n=R(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function pt(t,e){var n=lt(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){lt(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],r,i,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=tt(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],g=i[p];if(gt(g.regex,a.path,a.params))return d(g,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(g(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var p=mt(c,t),m=Z(p,f,'redirect route with path "'+p+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):g(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function gt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function mt(t,e){return x(t,e.parent?e.parent.path:"/",!0)}var yt=ut&&window.performance&&window.performance.now?window.performance:Date;function vt(){return yt.now().toFixed(3)}var _t=vt();function bt(){return _t}function wt(t){return _t=t}var Ct=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=kt(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,s)})).catch((function(t){0})):Dt(o,s))}))}}function It(){var t=bt();t&&(Ct[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){It(),t.state&&t.state.key&&wt(t.state.key)}function kt(){var t=bt();if(t)return Ct[t]}function xt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function At(t){return Rt(t.x)||Rt(t.y)}function Ot(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function Nt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Pt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Nt(i),e=xt(r,i)}else At(t)&&(e=Ot(t))}else n&&At(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function jt(t,e){It();var n=window.history;try{if(e){var r=i({},n.state);r.key=bt(),n.replaceState(r,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Mt(t){jt(t,!0)}function Ft(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return Ht(t,e,Ut.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Gt(e)+'" via a navigation guard.')}function qt(t,e){var n=Ht(t,e,Ut.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function $t(t,e){return Ht(t,e,Ut.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Bt(t,e){return Ht(t,e,Ut.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ht(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var zt=["params","query","hash"];function Gt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Wt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Wt(t)&&t._isRouter&&(null==e||t.type===e)}function Yt(t){return function(e,n,r){var i=!1,s=0,o=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=te((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Wt(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,r){var i=Qt(t,(function(t,r,i,s){var o=se(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Xt(r?i.reverse():i)}function se(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function oe(t){return ie(t,"beforeRouteLeave",ce,!0)}function ae(t){return ie(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return ie(t,"beforeRouteEnter",(function(t,e,n,r){return le(t,n,r)}))}function le(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,Ut.redirected)&&s===y||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var i=this,s=this.current;this.pending=t;var o=function(t){!Kt(t)&&Wt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},a=t.matched.length-1,c=s.matched.length-1;if(b(t,s)&&a===c&&t.matched[a]===s.matched[c])return this.ensureURL(),o(qt(s,t));var u=re(this.current.matched,t.matched),l=u.updated,h=u.deactivated,d=u.activated,f=[].concat(oe(h),this.router.beforeHooks,ae(l),d.map((function(t){return t.beforeEnter})),Yt(d)),p=function(e,n){if(i.pending!==t)return o($t(s,t));try{e(t,s,(function(e){!1===e?(i.ensureURL(!0),o(Bt(s,t))):Wt(e)?(i.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Vt(s,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(r){o(r)}};Ft(f,p,(function(){var n=ue(d),r=n.concat(i.router.resolveHooks);Ft(r,p,(function(){if(i.pending!==t)return o($t(s,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){T(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=de(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=de(t.base);t.current===y&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){jt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(de(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?jt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return de(this.base)},e}(ee);function de(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||ge()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;ge()&&t.transitionTo(me(),(function(n){r&&Tt(t.router,n,e,!0),Lt||_e(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){_e(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):_e(e))},e.prototype.getCurrentLocation=function(){return me()},e}(ee);function pe(t){var e=de(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function ge(){var t=me();return"/"===t.charAt(0)||(_e("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?jt(ye(t)):window.location.hash=t}function _e(t){Lt?Mt(ye(t)):window.location.replace(ye(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Ut.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},Ce={currentRoute:{configurable:!0}};function Ee(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ce.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Lt&&i;s&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return Ee(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return Ee(this.resolveHooks,t)},we.prototype.afterEach=function(t){return Ee(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Te(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,Ce),we.install=ct,we.version="3.5.2",we.isNavigationFailure=Kt,we.NavigationFailureType=Ut,we.START_LOCATION=y,ut&&window.Vue&&window.Vue.use(we),e["a"]=we},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return xr})),n.d(e,"b",(function(){return Or})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return Rr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Pr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function _(){this.s=this.s,this.o=this.o}var b=0,w={};_.prototype.s=!1,_.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var t=h(this);delete w[t]}},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},E=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function T(t){t:{var e=$n;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function I(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var x,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var P=R.userAgent;if(P){x=P;break t}}x=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,q=O(x,"Opera"),$=O(x,"Trident")||O(x,"MSIE"),B=O(x,"Edge"),H=B||$,z=O(x,"Gecko")&&!(O(x.toLowerCase(),"webkit")&&!O(x,"Edge"))&&!(O(x,"Trident")||O(x,"MSIE"))&&!O(x,"Edge"),G=O(x.toLowerCase(),"webkit")&&!O(x,"Edge");function W(){var t=a.document;return t?t.documentMode:void 0}t:{var K="",Y=function(){var t=x;return z?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):G?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(K=Y?Y[1]:""),$){var Q=W();if(null!=Q&&Q>parseFloat(K)){V=String(Q);break t}}V=K}var X,J={};function Z(){return U((function(){let t=0;const e=A(String(V)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&$){var tt=W();X=tt||(parseInt(V,10)||void 0)}else X=void 0;var et=X,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=C(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Et(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Ct;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function _t(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=It(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function wt(t){return t in pt?pt[t]:pt[t]="on"+t}function Ct(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&bt(t),t=n.call(r,e)}return t}function Et(t){return t=t[ft],t instanceof lt?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function St(){_.call(this),this.i=new lt(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xt(o,r,!0,e)&&i}if(o=e.g=t,i=xt(o,r,!0,e)&&i,i=xt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xt(o,r,!1,e)&&i}function xt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(St,_),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,r){_t(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function Ot(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Pt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function jt(t,e){Rt||Mt(),Ft||(Rt(),Ft=!0),Ut.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Vt)}}var Ft=!1,Ut=new Nt;function Vt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function qt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function $t(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ht(t){t.g=Bt(()=>{t.g=null,t.i&&(t.i=!1,Ht(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,St),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&($t(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),$t(this),delete this.g};class zt extends _{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){_.call(this),this.h=t,this.g={}}v(Gt,_);var Wt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Yt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Qt(){this.g=!0}function Xt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.Z.M.call(this),Yt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();kt(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();kt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function _e(){rt.call(this,"c")}function be(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Gt(this),this.P=Ee,t=H?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ce}function Ce(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(_e,rt),v(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Ee=45e3,Te={},Ie={};function Se(t,e,n){t.K=1,t.v=Xe(ze(e)),t.s=n,t.U=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),Ne(t),t.A=ze(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ce,t.g=_r(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(m(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Xt(t.j,t.u,t.A,t.m,t.X,t.s)}function xe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==Ie){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),je(t,r)}xe(t)&&r!=Ie&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),De(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function Pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$t(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||wn(n.i,t)))if(n.I=t.N,!t.J&&wn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!k(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(O(t,"spdy")||O(t,"quic")||O(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Cn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Qe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){En(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Pe(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)E(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=we.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Kn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Kn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Pe(this);var n=this.g.ba();this.N=n;e:if(xe(this)){var r=Yn(this.g);t="";var i=r.length,s=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),De(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Ae(this,h,o),H&&this.i&&3==h&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),je(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),De(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(Pe(this),Ae(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,De(this)):Re(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var $e=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function He(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof He){this.g=void 0!==e?e:t.g,Ge(this,t.j),this.s=t.s,We(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match($e))?(this.g=!!e,Ge(this,n[1]||"",!0),this.s=tn(n[2]||""),We(this,n[3]||"",!0),Ke(this,n[4]),this.l=tn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function ze(t){return new He(t)}function Ge(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e,n){t.i=n?tn(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Qe(t,e,n){t.h.set(e,n)}function Xe(t){return Qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof He?ze(t):new He(t,void 0)}function Ze(t,e,n,r){var i=new He(null,void 0);return t&&Ge(i,t),e&&We(i,e),n&&Ke(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}He.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return ln(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){E(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=I(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=I(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function _n(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bn(t){return t.h?1:t.g?t.g.size:0}function wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cn(t,e){t.g?t.g.add(e):t.h=e}function En(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function In(){}function Sn(){this.g=new In}function kn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(t,e){const n=new Qt;if(a.Image){const r=new Image;r.onload=y(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(An,n,r,"TestLoadImage: error",!1,e),r.onabort=y(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},In.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},In.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(On,fe),On.prototype.g=function(){return new Nn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),v(Nn,St);var Rn=0;function Pn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Rn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Ln(this),3==this.readyState&&Pn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Mn,St);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function qn(t){return $&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function $n(t){return"content-type"==t.toLowerCase()}function Bn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hn(t),Gn(t)}function Hn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function zn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Kn(t)||2!=t.ba()))if(t.v&&4==Kn(t))Bt(t.Fa,0,t);else if(kt(t,"readystatechange"),4==Kn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match($e)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var c=2<Kn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Hn(t)}}finally{Gn(t)}}}function Gn(t,e){if(t.g){Wn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Xn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Qt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=ze(t.F);Qe(n,"SID",t.J),Qe(n,"RID",e),Qe(n,"TYPE","terminate"),ar(t,n),e=new we(t,t.h,e,void 0),e.K=2,e.v=Xe(ze(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=_r(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){_n(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function sr(t,e){return!(bn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=ze(t.F);Qe(r,"SID",t.J),Qe(r,"RID",n),Qe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Xn(r,t.o,t.s),n=new we(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cn(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Qe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{kn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new we(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ze(t.oa);Qe(e,"RID","rpc"),Qe(e,"SID",t.J),Qe(e,"CI",t.N?"0":"1"),Qe(e,"AID",t.U),ar(t,e),Qe(e,"TYPE","xmlhttp"),t.o&&t.s&&Xn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xe(ze(e)),n.s=null,n.U=!0,ke(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!wn(t.i,e))return;n=e.D,En(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),kt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new He("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ge(n,"https"),Xe(n)),xn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==Tn(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&We(r,e+"."+r.i),Ke(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Qe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Qe(r,e,n),Qe(r,"VER",t.ma),ar(t,r),r}function _r(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new On({ib:!0})):new Mn(t.qa),e.L=t.H,e}function br(){}function wr(){if($&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Cr(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ir(this)}function Er(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Tr(){_e.call(this),this.status=1}function Ir(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Bn(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=T(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=C(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Bt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Bn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new we(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=ze(this.F),Qe(n,"RID",t),Qe(n,"CVER",22),this.D&&Qe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Xn(n,this.o,s),Cn(this.i,i),this.Ra&&Qe(n,"TYPE","init"),this.ja?(Qe(n,"$req",e),Qe(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||_n(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=br.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},wr.prototype.g=function(t,e){return new Cr(t,e)},v(Cr,St),Cr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Cr.prototype.close=function(){tr(this.g)},Cr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},Cr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Cr.Z.M.call(this)},v(Er,ve),v(Tr,_e),v(Ir,br),Ir.prototype.xa=function(){kt(this.g,"a")},Ir.prototype.wa=function(t){kt(this.g,new Er(t))},Ir.prototype.va=function(t){kt(this.g,new Tr(t))},Ir.prototype.ua=function(){kt(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Cr.prototype.send=Cr.prototype.u,Cr.prototype.open=Cr.prototype.m,Cr.prototype.close=Cr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new wr},kr=s.getStatEventTarget=function(){return ie()},xr=s.ErrorCode=he,Ar=s.EventType=de,Or=s.Event=ne,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=s.FetchXmlHttpFactory=On,Pr=s.WebChannel=ge,Dr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,s=Object.create(i.prototype),o=new A(r||[]);return s._invoke=I(t,n,o),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function y(){}function v(){}var _={};c(_,s,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&r.call(w,s)&&(_=w);var C=v.prototype=m.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,s,o,a){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function I(t,e,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=v,c(C,"constructor",v),c(v,"constructor",y),y.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},E(T.prototype),c(T.prototype,o,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new T(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(C),c(C,a,"Generator"),c(C,s,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("59ed"),i=n("825a"),s=n("35a1");t.exports=function(t,e){var n=arguments.length<2?s(t):e;if(r(n))return i(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),s=n("825a"),o=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(s(t),e=o(e),s(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:s(1,n)}),o(t,u,!1,!0),a[u]=c,t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("1a2d"),h=n("e8b5"),d=n("1626"),f=n("861d"),p=n("d9b5"),g=n("825a"),m=n("7b0b"),y=n("fc6a"),v=n("a04b"),_=n("577e"),b=n("5c6c"),w=n("7c73"),C=n("df75"),E=n("241c"),T=n("057f"),I=n("7418"),S=n("06cf"),k=n("9bf2"),x=n("d1e7"),A=n("6eeb"),O=n("5692"),N=n("f772"),R=n("d012"),P=n("90e3"),D=n("b622"),L=n("e538"),j=n("746f"),M=n("d44e"),F=n("69f3"),U=n("b727").forEach,V=N("hidden"),q="Symbol",$="prototype",B=D("toPrimitive"),H=F.set,z=F.getterFor(q),G=Object[$],W=i.Symbol,K=s("JSON","stringify"),Y=S.f,Q=k.f,X=T.f,J=x.f,Z=O("symbols"),tt=O("op-symbols"),et=O("string-to-symbol-registry"),nt=O("symbol-to-string-registry"),rt=O("wks"),it=i.QObject,st=!it||!it[$]||!it[$].findChild,ot=a&&u((function(){return 7!=w(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(G,e);r&&delete G[e],Q(t,e,n),r&&t!==G&&Q(G,e,r)}:Q,at=function(t,e){var n=Z[t]=w(W[$]);return H(n,{type:q,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===G&&ct(tt,e,n),g(t);var r=v(e);return g(n),l(Z,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=w(n,{enumerable:b(0,!1)})):(l(t,V)||Q(t,V,b(1,{})),t[V][r]=!0),ot(t,r,n)):Q(t,r,n)},ut=function(t,e){g(t);var n=y(e),r=C(n).concat(pt(n));return U(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?w(t):ut(w(t),e)},ht=function(t){var e=v(t),n=J.call(this,e);return!(this===G&&l(Z,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,V)&&this[V][e])||n)},dt=function(t,e){var n=y(t),r=v(e);if(n!==G||!l(Z,r)||l(tt,r)){var i=Y(n,r);return!i||!l(Z,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},ft=function(t){var e=X(y(t)),n=[];return U(e,(function(t){l(Z,t)||l(R,t)||n.push(t)})),n},pt=function(t){var e=t===G,n=X(e?tt:y(t)),r=[];return U(n,(function(t){!l(Z,t)||e&&!l(G,t)||r.push(Z[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?_(arguments[0]):void 0,e=P(t),n=function(t){this===G&&n.call(tt,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,b(1,t))};return a&&st&&ot(G,e,{configurable:!0,set:n}),at(e,t)},A(W[$],"toString",(function(){return z(this).tag})),A(W,"withoutSetter",(function(t){return at(P(t),t)})),x.f=ht,k.f=ct,S.f=dt,E.f=T.f=ft,I.f=pt,L.f=function(t){return at(D(t),t)},a&&(Q(W[$],"description",{configurable:!0,get:function(){return z(this).description}}),o||A(G,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),U(C(rt),(function(t){j(t)})),r({target:q,stat:!0,forced:!c},{for:function(t){var e=_(t);if(l(et,e))return et[e];var n=W(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(m(t))}}),K){var gt=!c||u((function(){var t=W();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=e,(f(e)||void 0!==t)&&!p(t))return h(e)||(e=function(t,e){if(d(r)&&(e=r.call(this,t,e)),!p(e))return e}),i[1]=e,K.apply(null,i)}})}if(!W[$][B]){var mt=W[$].valueOf;A(W[$],B,(function(){return mt.apply(this,arguments)}))}M(W,q),R[V]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},ab8b:function(t,e,n){},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),g=n("d4c3"),m=n("a4b4"),y=n("605d"),v=h.MutationObserver||h.WebKitMutationObserver,_=h.document,b=h.process,w=h.Promise,C=d(h,"queueMicrotask"),E=C&&C.value;E||(r=function(){var t,e;y&&(t=b.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},p||y||m||!v||!_?!g&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=u.then,o=function(){l.call(u,r)}):o=y?function(){b.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=_.createTextNode(""),new v(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=E||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)&&(a||"string"==typeof u[t])||(a&&s(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),o=n("07fa"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,g,m,y){for(var v,_,b=s(p),w=i(b),C=r(g,m,3),E=o(w),T=0,I=y||a,S=e?I(p,E):n||d?I(p,0):void 0;E>T;T++)if((f||T in w)&&(v=w[T],_=C(v,T,b),t))if(e)S[T]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return T;case 2:c.call(S,v)}else switch(t){case 4:return!1;case 7:c.call(S,v)}return h?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),s=n("dc4a"),o=n("485a"),a=n("b622"),c=a("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,a=s(t,c);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,o=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(o,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~s(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(s){}return function(n,s){return r(n),i(s),e?t.call(n,s):n.__proto__=s,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(t,e,n){var r=n("1626"),i=n("d066"),s=n("fdbf");t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("1a2d"),i=n("1626"),s=n("7b0b"),o=n("f772"),a=n("e177"),c=o("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof Object?u:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),g=n("d44e"),m=n("2626"),y=n("59ed"),v=n("1626"),_=n("861d"),b=n("19aa"),w=n("8925"),C=n("2266"),E=n("1c7e"),T=n("4840"),I=n("2cf4").set,S=n("b575"),k=n("cdf9"),x=n("44de"),A=n("f069"),O=n("e667"),N=n("69f3"),R=n("94ca"),P=n("b622"),D=n("6069"),L=n("605d"),j=n("2d00"),M=P("species"),F="Promise",U=N.get,V=N.set,q=N.getterFor(F),$=h&&h.prototype,B=h,H=$,z=u.TypeError,G=u.document,W=u.process,K=A.f,Y=K,Q=!!(G&&G.createEvent&&u.dispatchEvent),X=v(u.PromiseRejectionEvent),J="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,it=2,st=!1,ot=R(F,(function(){var t=w(B),e=t!==String(B);if(!e&&66===j)return!0;if(c&&!H["finally"])return!0;if(j>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,st=n.then((function(){}))instanceof r,!st||!e&&D&&!X})),at=ot||!E((function(t){B.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!_(t)||!v(e=t.then))&&e},ut=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==et,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,h=u.resolve,d=u.reject,f=u.domain;try{l?(i||(t.rejection===it&&ft(t),t.rejection=rt),!0===l?o=r:(f&&f.enter(),o=l(r),f&&(f.exit(),c=!0)),o===u.promise?d(z("Promise-chain cycle")):(a=ct(o))?a.call(o,h,d):h(o)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ht(t)}))}},lt=function(t,e,n){var r,i;Q?(r=G.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=u["on"+t])?i(r):t===J&&x("Unhandled promise rejection",n)},ht=function(t){I.call(u,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=O((function(){L?W.emit("unhandledRejection",r,n):lt(J,n,r)})),t.rejection=L||dt(t)?it:rt,e.error))throw e.value}))},dt=function(t){return t.rejection!==rt&&!t.parent},ft=function(t){I.call(u,(function(){var e=t.facade;L?W.emit("rejectionHandled",e):lt(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},gt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,ut(t,!0))},mt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw z("Promise can't be resolved itself");var r=ct(e);r?S((function(){var n={done:!1};try{r.call(e,pt(mt,n,t),pt(gt,n,t))}catch(i){gt(n,i,t)}})):(t.value=e,t.state=et,ut(t,!1))}catch(i){gt({done:!1},i,t)}}};if(ot&&(B=function(t){b(this,B,F),y(t),r.call(this);var e=U(this);try{t(pt(mt,e),pt(gt,e))}catch(n){gt(e,n)}},H=B.prototype,r=function(t){V(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=f(H,{then:function(t,e){var n=q(this),r=K(T(this,B));return r.ok=!v(t)||t,r.fail=v(e)&&e,r.domain=L?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&ut(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=U(t);this.promise=t,this.resolve=pt(mt,e),this.reject=pt(gt,e)},A.f=K=function(t){return t===B||t===s?new i(t):Y(t)},!c&&v(h)&&$!==Object.prototype)){o=$.then,st||(d($,"then",(function(t,e){var n=this;return new B((function(t,e){o.call(n,t,e)})).then(t,e)}),{unsafe:!0}),d($,"catch",H["catch"],{unsafe:!0}));try{delete $.constructor}catch(yt){}p&&p($,H)}a({global:!0,wrap:!0,forced:ot},{Promise:B}),g(B,F,!1,!0),m(F),s=l(F),a({target:F,stat:!0,forced:ot},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),a({target:F,stat:!0,forced:c||ot},{resolve:function(t){return k(c&&this===s?B:this,t)}}),a({target:F,stat:!0,forced:at},{all:function(t){var e=this,n=K(e),r=n.resolve,i=n.reject,s=O((function(){var n=y(e.resolve),s=[],o=0,a=1;C(t,(function(t){var c=o++,u=!1;s.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,i=O((function(){var i=y(e.resolve);C(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),s=n("c6b6"),o=n("b622"),a=o("toStringTag"),c="Arguments"==s(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),a))?n:c?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));function r(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r["throw"](t))}catch(e){s(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function a(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;var c=n("1fd5"),u=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),l="[DEFAULT]",h=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new c["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(f(t))try{this.getOrInitializeService({instanceIdentifier:l})}catch(p){}try{for(var r=s(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=o(i.value,2),c=a[0],u=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});u.resolve(d)}catch(p){}}}catch(g){e={error:g}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=l),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(a(a([],o(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),o(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=l),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=l),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var u=s(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=o(l.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);a===p&&f.resolve(c)}}catch(g){e={error:g}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:d(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(s){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=l),this.component?this.component.multipleInstances?t:l:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function d(t){return t===l?void 0:t}function f(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);