// tslint:disable-next-line:max-line-length
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1),i=n(2),a=n(3);t.exports=function(t,e){return r(t)||i(t,e)||a()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){"use strict";n.r(e);const r=t=>{const e=new ArrayBuffer(t);return{arrayBuffer:e,dataView:new DataView(e)}},i=t=>{const e=new ArrayBuffer(t);return{arrayBuffer:e,dataView:new DataView(e)}};var a=n(0),s=n.n(a);const o=t=>{const e=t.reduce((t,e)=>t+e.byteLength,0),n=t.reduce((t,e)=>{let n=s()(t,2),r=n[0],i=n[1];return i.set(new Uint8Array(e),r),[r+e.byteLength,i]},[0,new Uint8Array(e)]);return s()(n,2)[1].buffer},f=t=>{const e=Math.max(1,Math.floor(Math.log(t)/Math.log(2)/7)+1),n=i(e),r=n.arrayBuffer,a=n.dataView,s=e-1;let o=t;for(let t=0;t<s;t+=1)a.setUint8(t,o>>7|128),o&=127;return a.setUint8(e-1,o),r},u=t=>{if((t=>void 0!==t.channelPrefix)(t)){const e=i(4),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,255),r.setUint8(1,32),r.setUint8(2,1),r.setUint8(3,t.channelPrefix),n}if((t=>void 0!==t.controlChange)(t)){const e=i(3),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,176|15&t.channel),r.setUint8(1,t.controlChange.type),r.setUint8(2,t.controlChange.value),n}if((t=>void 0!==t.endOfTrack)(t)){const t=i(3),e=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,47),n.setUint8(2,0),e}if((t=>void 0!==t.keySignature)(t)){const e=i(5),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,255),r.setUint8(1,89),r.setUint8(2,2),r.setUint8(3,t.keySignature.key),r.setUint8(4,t.keySignature.scale),n}if((t=>void 0!==t.lyric)(t)){const e=i(2),n=e.arrayBuffer,r=e.dataView;r.setUint8(0,255),r.setUint8(1,5);const a=(new TextEncoder).encode(t.lyric).buffer,s=f(a.byteLength);return o([n,s,a])}if((t=>void 0!==t.midiPort)(t)){const e=i(4),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,255),r.setUint8(1,33),r.setUint8(2,1),r.setUint8(3,t.midiPort),n}if((t=>void 0!==t.noteOff)(t)){const e=i(3),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,128|15&t.channel),r.setUint8(1,t.noteOff.noteNumber),r.setUint8(2,t.noteOff.velocity),n}if((t=>void 0!==t.noteOn)(t)){const e=i(3),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,144|15&t.channel),r.setUint8(1,t.noteOn.noteNumber),r.setUint8(2,t.noteOn.velocity),n}if((t=>void 0!==t.pitchBend)(t)){const e=i(3),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,224|15&t.channel),r.setUint8(1,127&t.pitchBend),r.setUint8(2,t.pitchBend>>7),n}if((t=>void 0!==t.programChange)(t)){const e=i(2),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,192|15&t.channel),r.setUint8(1,t.programChange.programNumber),n}if((t=>void 0!==t.setTempo)(t)){const e=i(6),n=e.arrayBuffer,r=e.dataView;return r.setUint8(0,255),r.setUint8(1,81),r.setUint8(2,3),r.setUint8(3,t.setTempo.microsecondsPerBeat>>16),r.setUint8(4,t.setTempo.microsecondsPerBeat>>8),r.setUint8(5,t.setTempo.microsecondsPerBeat),n}if((t=>void 0!==t.smpteOffset)(t)){const e=i(8),n=e.arrayBuffer,r=e.dataView;let a;if(24===t.smpteOffset.frameRate)a=0;else if(25===t.smpteOffset.frameRate)a=32;else if(29===t.smpteOffset.frameRate)a=64;else{if(30!==t.smpteOffset.frameRate)throw new Error;a=96}return r.setUint8(0,255),r.setUint8(1,84),r.setUint8(2,5),r.setUint8(3,t.smpteOffset.hour|a),r.setUint8(4,t.smpteOffset.minutes),r.setUint8(5,t.smpteOffset.seconds),r.setUint8(6,t.smpteOffset.frame),r.setUint8(7,t.smpteOffset.subFrame),n}if((t=>void 0!==t.sysex)(t)){const e=i(1),n=e.arrayBuffer;e.dataView.setUint8(0,240);const r=t.sysex.length/2,a=f(r),s=i(r),u=s.arrayBuffer,c=s.dataView;for(let e=0;e<t.sysex.length;e+=2)c.setUint8(e/2,parseInt(t.sysex.slice(e,e+2),16));return o([n,a,u])}if((t=>void 0!==t.timeSignature)(t)){const e=i(7),n=e.arrayBuffer,r=e.dataView;let a=t.timeSignature.denominator,s=0;for(;a>1;)a/=2,s+=1;return r.setUint8(0,255),r.setUint8(1,88),r.setUint8(2,4),r.setUint8(3,t.timeSignature.numerator),r.setUint8(4,s),r.setUint8(5,t.timeSignature.metronome),r.setUint8(6,t.timeSignature.thirtyseconds),n}if((t=>void 0!==t.text)(t)){const e=i(2),n=e.arrayBuffer,r=e.dataView;r.setUint8(0,255),r.setUint8(1,1);const a=(new TextEncoder).encode(t.text).buffer,s=f(a.byteLength);return o([n,s,a])}if((t=>void 0!==t.trackName)(t)){const e=i(2),n=e.arrayBuffer,r=e.dataView;r.setUint8(0,255),r.setUint8(1,3);const a=(new TextEncoder).encode(t.trackName).buffer,s=f(a.byteLength);return o([n,s,a])}throw new Error('Unencodable event with a delta of "'.concat(t.delta,'".'))},c=t=>{const e=t.reduce((t,e)=>t+e.byteLength,0);return t.reduce((t,e)=>{let n=t.offset,r=t.uint8Array;return r.set(new Uint8Array(e),n),{offset:n+e.byteLength,uint8Array:r}},{offset:0,uint8Array:new Uint8Array(e)}).uint8Array.buffer},d=t=>{const e=Math.max(1,Math.floor(Math.log(t)/Math.log(2)/7)+1),n=r(e),i=n.arrayBuffer,a=n.dataView,s=e-1;let o=t;for(let t=0;t<s;t+=1)a.setUint8(t,o>>7|128),o&=127;return a.setUint8(e-1,o),i},l=t=>{const e=r(8),n=e.arrayBuffer,i=e.dataView,a=[n];let s=0;i.setUint32(0,1297379947);for(const e of t){const n=d(e.delta);try{const r=u(e);s+=n.byteLength+r.byteLength,a.push(n,r)}catch(n){if(n.message.match(/Unencodable\\smessage\\swith\\sa\\sdelta\\sof\\s[0-9]+\\./)){const n=t.indexOf(e);throw new Error("Unencodable message at index ".concat(n,"."))}throw n}}return i.setUint32(4,s),c(a)},y=t=>{let e=t.division,n=t.format,i=t.tracks;const a=[];try{a.push(((t,e,n)=>{const i=r(14),a=i.arrayBuffer,s=i.dataView;return s.setUint32(0,1297377380),s.setUint32(4,6),s.setUint16(8,e),s.setUint16(10,n.length),s.setUint16(12,t),a})(e,n,i))}catch(t){throw new Error("The given JSON object seems to be invalid.")}for(const t of i)try{a.push(l(t))}catch(e){if(e.message.match(/Unencodable\\sevent\\sat\\sposition\\s[0-9]+\\./)){const n=i.indexOf(t);throw new Error("".concat(e.message.slice(0,-1)," of the track at index ").concat(n,"."))}throw e}return c(a)};addEventListener("message",t=>{let e=t.data;try{if("encode"!==e.method)throw new Error('The given method "'.concat(e.method,'" is not supported'));{const t=e.id,n=e.params.midiFile,r=y(n);postMessage({error:null,id:t,result:{arrayBuffer:r}},[r])}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}})}]);`;
