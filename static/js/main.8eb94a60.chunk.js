(this["webpackJsonpshulte-tables"]=this["webpackJsonpshulte-tables"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(7),a=n.n(c),s=(n(13),n(4)),o=n(2),u=n(8);n(14);var l=n(0);var d=function(e){var t=e.size,n=void 0===t?3:t,r=e.width,c=void 0===r?100:r,a=e.onComplete,s=void 0===a?function(){}:a,d=function(){return function(e){for(var t=Object(u.a)(e),n=t.length-1;n>0;n--){var i=Math.floor(Math.random()*n),r=t[n];t[n]=t[i],t[i]=r}return t}(Array.from(Array(n*n).keys())).reduce((function(e,t,i){return i%n===0&&e.push([]),e[e.length-1].push(t),e}),[])},f=function(){var e=document.querySelector(".shulte-table");if(e){var t=e.offsetHeight/n;C(.3*t)}},h=function(){O(0),w(d)},j=Object(i.useState)(0),b=Object(o.a)(j,2),v=b[0],O=b[1],g=Object(i.useState)([]),m=Object(o.a)(g,2),p=m[0],w=m[1],x=Object(i.useState)(12),S=Object(o.a)(x,2),z=S[0],C=S[1];return Object(i.useEffect)((function(){return h(),f(),window.addEventListener("load",f),window.addEventListener("resize",f),function(){window.removeEventListener("load",f),window.removeEventListener("resize",f)}}),[n]),Object(i.useEffect)((function(){v===n*n&&(s(),h())}),[v]),Object(i.useEffect)((function(){f()}),[c]),Object(l.jsx)("div",{className:"shulte-table",style:{width:c+"%"},role:"grid",children:p.map((function(e,t){return Object(l.jsx)("div",{className:"shulte-table__row",role:"row",children:e.map((function(e,t){return Object(l.jsx)("div",{className:"shulte-table__cell",onClick:function(){e===v&&O(v+1)},role:"cell",style:{fontSize:z},children:Object(l.jsx)("div",{className:"shulte-table__cell-text",children:e+1})},t)}))},t)}))})};n(16);var f=function(e){var t=e.size,n=void 0===t?3:t,i=e.onSizeChange,r=void 0===i?function(){}:i,c=e.gridWidth,a=void 0===c?100:c,s=e.onGridWidthChange,o=void 0===s?function(){}:s;return Object(l.jsxs)("div",{className:"settings",children:[Object(l.jsxs)("label",{children:["Grid Size",Object(l.jsx)("input",{value:n,onChange:function(e){return r(parseInt(e.target.value))},min:"2",max:"10",type:"range"})]}),Object(l.jsxs)("label",{children:["Grid Width",Object(l.jsx)("input",{value:a,onChange:function(e){return o(parseInt(e.target.value))},type:"range"})]})]})};n(17);var h=function(){var e=function(e){localStorage.setItem("settings",JSON.stringify(e)),c(e)},t=Object(i.useState)((function(){return JSON.parse(localStorage.getItem("settings"))||{}})),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(f,{size:r.size,onSizeChange:function(t){return e(Object(s.a)(Object(s.a)({},r),{},{size:t}))},gridWidth:r.width,onGridWidthChange:function(t){return e(Object(s.a)(Object(s.a)({},r),{},{width:t}))}}),Object(l.jsx)(d,{size:r.size,width:r.width})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()}],[[18,1,2]]]);
//# sourceMappingURL=main.8eb94a60.chunk.js.map