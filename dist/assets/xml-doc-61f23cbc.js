import{g as f}from"./index-e35db4f2.js";function g(r,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var c,i;function p(){if(i)return c;i=1,c=r,r.displayName="xmlDoc",r.aliases=[];function r(n){(function(o){function e(s,u){o.languages[s]&&o.languages.insertBefore(s,"comment",{"doc-comment":u})}var t=o.languages.markup.tag,a={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:t}},l={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:t}};e("csharp",a),e("fsharp",a),e("vbnet",l)})(n)}return c}var m=p();const d=f(m),x=g({__proto__:null,default:d},[m]);export{x};
