(this["webpackJsonptask-scrile"]=this["webpackJsonptask-scrile"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(5),r=n.n(s),c=n(2),a=n(1),o=n(4),u=n.n(o),i=n(6);function l(){return(l=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e,t){fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return e(t)})).catch((function(){return t("Users load error")}))})),n=new Promise((function(e,t){fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return e(t)})).catch((function(){return t("Photos load error")}))})),e.abrupt("return",Promise.all([t,n]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=n(0);function h(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",className:"searchIcon",children:Object(j.jsx)("path",{fill:"#656667",d:"M12.5 11h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34A6.505 6.505 0 00.05 7.32c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L12.5 11zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"})})}function p(e){var t=e.value,n=e.setValue;return Object(j.jsxs)("div",{className:"customInputContainer",children:[Object(j.jsx)(h,{}),Object(j.jsx)("input",{className:"customInput",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Search"})]})}function d(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.username.toLowerCase().includes(t.toLowerCase())}))}function f(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"76",height:"76",fill:"none",viewBox:"0 0 76 76",className:"loadIndicator",children:[Object(j.jsx)("path",{stroke:"url(#paint0_linear)",strokeWidth:"3",d:"M38 74C18.118 74 2 57.882 2 38S18.118 2 38 2s36 16.118 36 36c0 7.4-2.233 14.28-6.062 20"}),Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"paint0_linear",x1:"2",x2:"74",y1:"38",y2:"38",gradientUnits:"userSpaceOnUse",children:[Object(j.jsx)("stop",{stopColor:"#FF6647"}),Object(j.jsx)("stop",{offset:"1",stopColor:"#D6008F"})]})})]})}function b(e){var t=e.user,n=(e.photo,e.setInputValue);e.index;return Object(j.jsxs)("div",{className:"userContainer",onClick:function(){n(t.username)},children:[Object(j.jsx)("img",{src:"images/user".concat(t.id,".jpg"),className:"userImage",alt:"user"}),Object(j.jsxs)("div",{className:"userInfo",children:[Object(j.jsx)("a",{href:"##",children:t.name}),Object(j.jsxs)("p",{children:["@",t.username]})]})]})}function O(e){var t=e.allUsers,n=(e.photos,e.isLoad),s=e.searchText,r=e.setInputValue,o=Object(a.useState)(d(t,s)),u=Object(c.a)(o,2),i=u[0],l=u[1];return Object(a.useEffect)((function(){l(d(t,s))}),[s,n,t]),Object(j.jsx)("div",{className:"hintContainer",children:n?i.map((function(e,t){return Object(j.jsx)(b,{user:e,setInputValue:r,index:t},t)})):Object(j.jsx)(f,{})})}function m(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),o=Object(c.a)(r,2),u=o[0],i=o[1],h=Object(a.useState)([]),d=Object(c.a)(h,2),f=d[0],b=d[1],m=Object(a.useState)([]),x=Object(c.a)(m,2),v=x[0],w=x[1];return Object(a.useEffect)((function(){""!==n.replace(/\s/g,"")&&(u||function(){return l.apply(this,arguments)}().then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){setTimeout((function(){b(e[0]),w(e[1]),i(!0)}),150)})))}),[n,u]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{value:n,setValue:s}),""===n.replace(/\s/g,"")?null:Object(j.jsx)(O,{allUsers:f,photos:v,isLoad:u,searchText:n.replace(/\s/g,""),setInputValue:s})]})}n(13);r.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.944797a4.chunk.js.map