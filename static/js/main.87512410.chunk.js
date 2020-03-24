(this.webpackJsonpcryptoquote=this.webpackJsonpcryptoquote||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(4),o=n.n(l),u=(n(10),n(2),n(1));function i(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],l=n[1];return c.a.createElement("div",{className:"NoPuzzle"},c.a.createElement("div",null,"Enter the cypher:"),c.a.createElement("div",null,c.a.createElement("textarea",{rows:10,cols:80,value:a,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{style:{fontSize:"24pt"},onClick:function(){return e.setCypher(a)}},"Play")))}function s(e){var t=e.isSelectedKey?"key selected":"key";return c.a.createElement("div",{style:{width:"42px",height:"100px",border:"solid 1px black",borderRadius:"5px"}},c.a.createElement("div",{style:{height:"30px"}},c.a.createElement("span",{className:t},e.fromKey)),c.a.createElement("div",{style:{height:"30px",marginTop:"10px"}},c.a.createElement("span",{className:"value"},e.toKey)))}function m(e){return c.a.createElement("div",null,function(e,t){var n=Array.from(e.keys()).map((function(n){return c.a.createElement("td",{key:n},c.a.createElement(s,{fromKey:n,toKey:e.get(n)||"",isSelectedKey:n===t}))}));return c.a.createElement("div",null,c.a.createElement("table",{id:"keymap"},c.a.createElement("tbody",null,c.a.createElement("tr",null,n))))}(e.keymap,e.selectedKey))}function p(e){var t=e.isSelectedKey?"key selected":"key";return c.a.createElement("div",{style:{width:"42px",height:"100px",fontSize:"18pt"}},c.a.createElement("div",{style:{height:"30px"}},c.a.createElement("span",{className:t},e.fromKey)),c.a.createElement("div",{style:{height:"30px",marginTop:"5px"}},c.a.createElement("span",{className:"value"},e.toKey)))}function y(e){return c.a.createElement("div",null,function(e,a,r){var l=function(e,t){var a=[],r=n(e,t),c=Object(u.a)(r,2),l=c[0],o=c[1];for(;l.length>0;){a.push(l);var i=n(o,t),s=Object(u.a)(i,2);l=s[0],o=s[1]}return a}(r,35).map((function(n,r){return function(e,n,a,r){var l=a.split("").map((function(a){return c.a.createElement(p,{isSelectedKey:a===n,fromKey:a,toKey:t(e,a)})})).map((function(e,t){return c.a.createElement("div",{style:{float:"left"},key:r.toString()+"_"+t},e)}));return c.a.createElement("div",{key:r},l,c.a.createElement("div",{style:{clear:"both"}}))}(e,a,n,r)}));return c.a.createElement("div",null,l)}(e.keymap,e.selectedKey,e.cypher));function t(e,t){return e.has(t.toUpperCase())?e.get(t.toUpperCase()):t}function n(e,t){if(e.length<=t)return[e,""];for(var n=t+1;n>0&&" "!==e.charAt(n);)--n;return n>1?[e.substring(0,n),e.substring(n)]:[e,""]}}function f(){return c.a.createElement("div",null,c.a.createElement("p",{style:{fontWeight:"bold"}},"To unset a letter, press the SPACEBAR after pressing the letter. To invoke UNDO, use the BACKSPACE key."))}function d(e){var t=Object(r.useRef)(null);Object(r.useEffect)((function(){t&&t.current&&t.current.focus()}),[]);var n=Object(r.useState)(""),a=Object(u.a)(n,2),l=a[0],o=a[1];return c.a.createElement("div",{ref:t,tabIndex:0,className:"Playing",onKeyDown:function(t){return function(t){console.log("Just got an [".concat(t.key,"]"));var n=t.key.toUpperCase();1===n.length&&n>="A"&&n<="Z"?""!==l?(function(t){return void 0===Array.from(e.keymap.values()).find((function(e){return t===e}))}(n)&&s(l,n),o("")):o(n):" "===n?""!==l&&(s(l,""),i()):"BACKSPACE"===n&&(i(),e.invokeUndo())}(t)}},c.a.createElement(m,{keymap:e.keymap,selectedKey:l}),c.a.createElement(f,null),c.a.createElement(y,{cypher:e.cypher,keymap:e.keymap,selectedKey:l}));function i(){o("")}function s(t,n){e.mapKey(t,n)}}function v(){var e=Object(r.useState)(a.NO_PUZZLE),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)(""),s=Object(u.a)(o,2),m=s[0],p=s[1],y=Object(r.useState)(function(){for(var e=new Map,t=0;t<26;++t){var n=String.fromCharCode(65+t);e.set(n,"")}return e}()),f=Object(u.a)(y,2),v=f[0],E=f[1],h=Object(r.useState)([]),b=Object(u.a)(h,2),g=b[0];b[1];function k(e){p(e.toUpperCase()),l(a.PLAYING)}function K(){var e=g.pop();void 0!==e&&E(e)}function O(e,t){!function(e,t){var n=new Map(v);n.set(e,t),E(n)}(e,t),g.push(v)}return c.a.createElement("div",{className:"Game"},function(){switch(n){case a.NO_PUZZLE:return c.a.createElement(i,{setCypher:k});case a.PLAYING:return c.a.createElement(d,{cypher:m,keymap:v,mapKey:O,invokeUndo:K})}}())}!function(e){e.NO_PUZZLE="NO_PUZZLE",e.PLAYING="PLAYING"}(a||(a={}));var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.87512410.chunk.js.map