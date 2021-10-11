(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(21),o=n.n(a),s=(n(31),n(15)),i=n(26),u=n(8),l=n.n(u),d=n(12),j=n(11),b=n(9),h=n(3),p=n(2),x=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};x.defaultProps={color:"steelblue"};var f=x,O=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:t}),"/"===c.pathname&&Object(p.jsx)(f,{color:r?"red":"green",text:r?"Done":"Add",onClick:n})]})};O.defaultProps={title:"Activity Tracker"};var v=O,m=n(24),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(p.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(p.jsxs)("h3",{children:[t.text,Object(p.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(p.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)(k,{task:e,onDelete:n,onToggle:r},e.id)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],d=Object(r.useState)(!1),b=Object(j.a)(d,2),h=b[0],x=b[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),o(""),l(""),x(!1)):alert("Please add a Task")},children:[Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Task"}),Object(p.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Day & Time"}),Object(p.jsx)("input",{type:"Date&Time",placeholder:"Add Day",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control form-control-check",children:[Object(p.jsx)("label",{children:"Set Reminder"}),Object(p.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(p.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("p",{children:"Copyright \xa9 2021"}),Object(p.jsx)(b.b,{to:"/about",style:{textDecoration:"none",color:"white",backgroundColor:"GrayText",width:"100%",padding:"3px"},children:"About"})]})},C=n(25),T=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Version 1.0.0"}),Object(p.jsxs)(b.b,{to:"/",style:{textDecoration:"none",backgroundColor:"black",color:"gold"},children:[" ",Object(p.jsx)(C.a,{style:{verticalAlign:"center"}})," Back"]})]})};var A=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(j.a)(a,2),u=o[0],x=o[1];Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var f=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,x([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){x(u.filter((function(t){return t.id!==e})))},C=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(s.a)(Object(s.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,x(u.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(v,{showAdd:n,onAdd:function(){return c(!n)}}),Object(p.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(y,{onAdd:m}),u.length>0?Object(p.jsx)(g,{tasks:u,onDelete:k,onToggle:C}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"No Activity to show"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{style:{color:"red",backgroundColor:"black",borderRadius:"5px",width:"40%"},children:'Tap the "Add" button above to add'})]})]})}}),Object(p.jsx)(h.a,{path:"/about",component:T}),Object(p.jsx)(w,{})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),D()}},[[39,1,2]]]);
//# sourceMappingURL=main.2ff15dcc.chunk.js.map