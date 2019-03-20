// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var n=r(1),i=r(2),a=r(3);e.exports=function(e,t){return n(e)||i(e,t)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){"use strict";r.r(t);const n=e=>{const t=new ArrayBuffer(e);return{arrayBuffer:t,dataView:new DataView(t)}},i=e=>{const t=new ArrayBuffer(e);return{arrayBuffer:t,dataView:new DataView(t)}};var a=r(0),s=r.n(a);const o=e=>{const t=e.reduce((e,t)=>e+t.byteLength,0),r=e.reduce((e,t)=>{let r=s()(e,2),n=r[0],i=r[1];return i.set(new Uint8Array(t),n),[n+t.byteLength,i]},[0,new Uint8Array(t)]);return s()(r,2)[1].buffer},f=(e=>t=>{const r=Math.max(1,Math.floor(Math.log(t)/Math.log(2)/7)+1),n=e(r),i=n.arrayBuffer,a=n.dataView;for(let e=1;e<r;e+=1)a.setUint8(r-1-e,t>>7*e&127|128);return a.setUint8(r-1,127&t),i})(i),u=((e,t,r,n)=>i=>{if((e=>void 0!==e.channelPrefix)(i)){const t=e(4),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,32),n.setUint8(2,1),n.setUint8(3,i.channelPrefix),r}if((e=>void 0!==e.controlChange)(i)){const t=e(3),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,176|15&i.channel),n.setUint8(1,i.controlChange.type),n.setUint8(2,i.controlChange.value),r}if((e=>void 0!==e.copyrightNotice)(i))return t(i,2,"copyrightNotice");if((e=>void 0!==e.endOfTrack)(i)){const t=e(3),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,47),n.setUint8(2,0),r}if((e=>void 0!==e.instrumentName)(i))return t(i,4,"instrumentName");if((e=>void 0!==e.keySignature)(i)){const t=e(5),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,89),n.setUint8(2,2),n.setUint8(3,i.keySignature.key),n.setUint8(4,i.keySignature.scale),r}if((e=>void 0!==e.lyric)(i))return t(i,5,"lyric");if((e=>void 0!==e.marker)(i))return t(i,6,"marker");if((e=>void 0!==e.midiPort)(i)){const t=e(4),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,33),n.setUint8(2,1),n.setUint8(3,i.midiPort),r}if((e=>void 0!==e.noteOff)(i)){const t=e(3),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,128|15&i.channel),n.setUint8(1,i.noteOff.noteNumber),n.setUint8(2,i.noteOff.velocity),r}if((e=>void 0!==e.noteOn)(i)){const t=e(3),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,144|15&i.channel),n.setUint8(1,i.noteOn.noteNumber),n.setUint8(2,i.noteOn.velocity),r}if((e=>void 0!==e.pitchBend)(i)){const t=e(3),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,224|15&i.channel),n.setUint8(1,127&i.pitchBend),n.setUint8(2,i.pitchBend>>7),r}if((e=>void 0!==e.programChange)(i)){const t=e(2),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,192|15&i.channel),n.setUint8(1,i.programChange.programNumber),r}if((e=>void 0!==e.programName)(i))return t(i,8,"programName");if((e=>void 0!==e.sequencerSpecificData)(i)){const t=e(2),a=t.arrayBuffer,s=t.dataView;s.setUint8(0,255),s.setUint8(1,127);const o=i.sequencerSpecificData.length/2,f=n(o),u=e(o),c=u.arrayBuffer,d=u.dataView;for(let e=0;e<i.sequencerSpecificData.length;e+=2)d.setUint8(e/2,parseInt(i.sequencerSpecificData.slice(e,e+2),16));return r([a,f,c])}if((e=>void 0!==e.setTempo)(i)){const t=e(6),r=t.arrayBuffer,n=t.dataView;return n.setUint8(0,255),n.setUint8(1,81),n.setUint8(2,3),n.setUint8(3,i.setTempo.microsecondsPerBeat>>16),n.setUint8(4,i.setTempo.microsecondsPerBeat>>8),n.setUint8(5,i.setTempo.microsecondsPerBeat),r}if((e=>void 0!==e.smpteOffset)(i)){const t=e(8),r=t.arrayBuffer,n=t.dataView;let a;if(24===i.smpteOffset.frameRate)a=0;else if(25===i.smpteOffset.frameRate)a=32;else if(29===i.smpteOffset.frameRate)a=64;else{if(30!==i.smpteOffset.frameRate)throw new Error;a=96}return n.setUint8(0,255),n.setUint8(1,84),n.setUint8(2,5),n.setUint8(3,i.smpteOffset.hour|a),n.setUint8(4,i.smpteOffset.minutes),n.setUint8(5,i.smpteOffset.seconds),n.setUint8(6,i.smpteOffset.frame),n.setUint8(7,i.smpteOffset.subFrame),r}if((e=>void 0!==e.sysex)(i)){const t=e(1),a=t.arrayBuffer;t.dataView.setUint8(0,240);const s=i.sysex.length/2,o=n(s),f=e(s),u=f.arrayBuffer,c=f.dataView;for(let e=0;e<i.sysex.length;e+=2)c.setUint8(e/2,parseInt(i.sysex.slice(e,e+2),16));return r([a,o,u])}if((e=>void 0!==e.timeSignature)(i)){const t=e(7),r=t.arrayBuffer,n=t.dataView;let a=i.timeSignature.denominator,s=0;for(;a>1;)a/=2,s+=1;return n.setUint8(0,255),n.setUint8(1,88),n.setUint8(2,4),n.setUint8(3,i.timeSignature.numerator),n.setUint8(4,s),n.setUint8(5,i.timeSignature.metronome),n.setUint8(6,i.timeSignature.thirtyseconds),r}if((e=>void 0!==e.metaTypeByte)(i))return t(i,parseInt(i.metaTypeByte,16),"text");if((e=>void 0!==e.text&&void 0===e.metaTypeByte)(i))return t(i,1,"text");if((e=>void 0!==e.trackName)(i))return t(i,3,"trackName");throw new Error('Unencodable event with a delta of "'.concat(i.delta,'".'))})(i,((e,t,r)=>(n,i,a)=>{const s=e(2),o=s.arrayBuffer,f=s.dataView;f.setUint8(0,255),f.setUint8(1,i);const u=(new TextEncoder).encode(n[a]).buffer,c=r(u.byteLength);return t([o,c,u])})(i,o,f),o,f),c=e=>{const t=e.reduce((e,t)=>e+t.byteLength,0);return e.reduce((e,t)=>{let r=e.offset,n=e.uint8Array;return n.set(new Uint8Array(t),r),{offset:r+t.byteLength,uint8Array:n}},{offset:0,uint8Array:new Uint8Array(t)}).uint8Array.buffer},d=e=>{const t=n(8),r=t.arrayBuffer,i=t.dataView,a=[r];let s=0;i.setUint32(0,1297379947);for(const t of e){const r=f(t.delta);try{const n=u(t);s+=r.byteLength+n.byteLength,a.push(r,n)}catch(r){if(r.message.match(/Unencodable\\smessage\\swith\\sa\\sdelta\\sof\\s[0-9]+\\./)){const r=e.indexOf(t);throw new Error("Unencodable message at index ".concat(r,"."))}throw r}}return i.setUint32(4,s),c(a)},l=e=>{let t=e.division,r=e.format,i=e.tracks;const a=[];try{a.push(((e,t,r)=>{const i=n(14),a=i.arrayBuffer,s=i.dataView;return s.setUint32(0,1297377380),s.setUint32(4,6),s.setUint16(8,t),s.setUint16(10,r.length),s.setUint16(12,e),a})(t,r,i))}catch(e){throw new Error("The given JSON object seems to be invalid.")}for(const e of i)try{a.push(d(e))}catch(t){if(t.message.match(/Unencodable\\sevent\\sat\\sposition\\s[0-9]+\\./)){const r=i.indexOf(e);throw new Error("".concat(t.message.slice(0,-1)," of the track at index ").concat(r,"."))}throw t}return c(a)};addEventListener("message",e=>{let t=e.data;try{if("encode"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));{const e=t.id,r=t.params.midiFile,n=l(r);postMessage({error:null,id:e,result:{arrayBuffer:n}},[n])}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}]);`;
