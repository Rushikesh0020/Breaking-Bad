(this["webpackJsonpbreaking-bad-cast"]=this["webpackJsonpbreaking-bad-cast"]||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(14),s=c.n(a),i=c(5),j=c.n(i),d=c(15),o=c(3),b=(c(22),c(16)),l=c.n(b),u=c.p+"static/media/logo.e6ecab44.png",O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:u,alt:"logo"})})},x=function(e){var t=e.item;return Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:"character img"})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Occupation: "})," ",t.occupation[0]]})]})]})]})})},m=c.p+"static/media/spinner.11d9cde8.gif",g=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},p=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(g,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return Object(O.jsx)(x,{item:e},e.char_id)}))})},f=function(e){var t=e.getQuery,c=Object(n.useState)(""),r=Object(o.a)(c,2),a=r[0],s=r[1];return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:a,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})},v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(o.a)(a,2),i=s[0],b=s[1],u=Object(n.useState)(""),x=Object(o.a)(u,2),m=x[0],g=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,r(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(f,{getQuery:function(e){return g(e)}}),Object(O.jsx)(p,{items:c,isLoading:i})]})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.29cb45ef.chunk.js.map