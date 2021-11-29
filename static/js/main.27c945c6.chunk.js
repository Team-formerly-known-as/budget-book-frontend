(this["webpackJsonpbudget-book-frontend"]=this["webpackJsonpbudget-book-frontend"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(23),r=n.n(c),a=(n(145),n(13)),i=(n(146),n(147),n(148),n(3)),u=n(34),o=n(2);var l=function(){return Object(o.jsx)("div",{className:"headBackground",children:Object(o.jsx)(u.b,{className:"headLink",to:"/",children:Object(o.jsx)("h1",{className:"constHeader",children:"budgetbook"})})})};n(150);var j=function(e){var t=Object(s.useState)({userName:"",income:0,remainder:0,expenses:[]}),n=Object(a.a)(t,2),c=n[0],r=n[1],l=function(e){var t=e.target.value,n=e.target.name,s=Object.assign({},c);s[n]=t,r(s)},j=function(t){t.preventDefault(),fetch("http://localhost:4000/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){t.user?(console.log(t.user),e.setUser(t.user)):alert(t.message)})).catch((function(e){return console.log(e)}))};return e.user&&e.user.userName?Object(o.jsx)(i.a,{to:"/create"}):Object(o.jsxs)("div",{className:"intro-box",children:[Object(o.jsx)("h2",{className:"intro-header",children:"welcome to budgetbook"}),Object(o.jsxs)("p",{className:"intro-text",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare, fringilla dui posuere, aliquet nisi."," "]}),Object(o.jsxs)("form",{onSubmit:j,children:[Object(o.jsx)("input",{className:"userInput",onChange:l,type:"text",name:"userName",value:c.userName,placeholder:"enter username"}),Object(o.jsx)("input",{className:"userInput",onChange:l,type:"number",name:"income",placeholder:"enter income"}),Object(o.jsx)(u.b,{to:"/create",children:Object(o.jsx)("button",{className:"primaryButton",onClick:j,children:"Create Budget"})})]})]})};var d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"primaryButton",children:"Submit"})})};var b=function(e){var t=Object(s.useState)(""),n=Object(a.a)(t,2),c=n[0],r=n[1],i=Object(s.useState)(""),u=Object(a.a)(i,2),l=u[0],j=u[1],d=Object(s.useState)(0),b=Object(a.a)(d,2),h=b[0],p=b[1];function m(e){var t=e.target.value;r(t)}function x(e){var t=e.target.value;j(t)}function O(t){t.preventDefault(),fetch("http://localhost:4000/expense/".concat(e.user._id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({detail:c,amount:l,user:e.user._id})}).then((function(e){return e.json()})).then((function(t){return e.setUser(t)})).then((function(e){r(""),j("")}))}var f=e.user.expenses.map((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"itemExpense",children:[t.detail,": $",t.amount]},t._id),Object(o.jsx)("button",{onClick:function(){var e;r((e=t).detail),j(e.amount),p(e._id)},children:"Edit"}),Object(o.jsx)("button",{onClick:function(){var n;n=t._id,fetch("http://localhost:4000/expense/".concat(n,"/").concat(e.user._id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){return e.setUser(t.user)}))},children:"Delete"})]})}));return console.log(e.user),Object(o.jsxs)("div",{className:"expense-box",children:[Object(o.jsxs)("p",{children:["Income: $",e.user.income," "]}),f,Object(o.jsxs)("p",{className:"balRemainder",children:[" Remaining Balance: $",e.user.remainder]}),Object(o.jsxs)("div",{id:"edit-field",children:[Object(o.jsx)("h2",{children:"Edit Field"}),Object(o.jsx)("input",{value:c,type:"text",onChange:m}),Object(o.jsx)("input",{value:l,type:"number",onChange:x}),Object(o.jsx)("button",{onClick:function(){fetch("http://localhost:4000/user/".concat(h,"/").concat(e.user._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({detail:c,amount:l})}).then((function(e){return e.json()})).then((function(t){return e.setUser(t.user)}))},type:"submit",children:"Submit"})]}),Object(o.jsxs)("div",{className:"expense-input-box",children:[Object(o.jsx)("h2",{children:"Expense Input Box"}),Object(o.jsx)("input",{className:"userExpense",onChange:m,type:"text",placeholder:"enter an expense",value:c}),Object(o.jsx)("input",{className:"userAmount",onChange:x,type:"number",placeholder:"enter the amount",value:l}),Object(o.jsx)("button",{className:"primaryButton",onClick:O,type:"submit",children:"Add Expense"})]}),Object(o.jsxs)("div",{className:"expense-input-box",children:[Object(o.jsx)("input",{className:"userExpense",onChange:m,type:"text",placeholder:"enter an expense",value:c}),Object(o.jsx)("input",{className:"userAmount",onChange:x,type:"number",placeholder:"enter the amount",value:l}),Object(o.jsx)("button",{className:"primaryButton",onClick:O,type:"submit",children:"Add Expense"})]})]})};var h=function(e){return Object(o.jsxs)("div",{className:"expense-box",children:[Object(o.jsx)("h2",{children:"Budget"}),Object(o.jsxs)("p",{className:"userName",children:["User: ",e.user.userName]}),Object(o.jsx)(b,{user:e.user,setUser:e.setUser}),Object(o.jsx)(d,{})]})};var p=function(){var e=Object(s.useState)({userName:"",expenses:[]}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",element:Object(o.jsx)(j,{user:n,setUser:c})}),Object(o.jsx)(i.b,{path:"/create",element:Object(o.jsx)(h,{user:n,setUser:c})})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,455)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};r.a.render(Object(o.jsx)(u.a,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),m()}},[[453,1,2]]]);
//# sourceMappingURL=main.27c945c6.chunk.js.map