(this["webpackJsonpstore-navarrete-cecilia"]=this["webpackJsonpstore-navarrete-cecilia"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(23),a=n.n(r),i=(n(29),n(30),n(21)),o=n(9),l=function(e,t){var n=Object(c.useState)(1),s=Object(o.a)(n,2),r=s[0],a=s[1],i=Math.ceil(e.length/t);return{next:function(){a((function(e){return Math.min(e+1,i)}))},prev:function(){a((function(e){return Math.max(e-1,1)}))},currentData:function(){var n=(r-1)*t,c=n+t;return e.slice(n,c)},currentPage:r,maxPage:i}},u=n(0),j=s.a.createContext();function d(e){var t=e.children,n=Object(c.useState)({}),s=Object(o.a)(n,2),r=s[0],a=s[1],d=Object(c.useState)([]),x=Object(o.a)(d,2),b=x[0],h=x[1],O=Object(c.useState)({}),m=Object(o.a)(O,2),f=m[0],p=m[1],v=Object(c.useState)(0),g=Object(o.a)(v,2),N=g[0],w=g[1],y=Object(c.useState)([]),C=Object(o.a)(y,2),k=C[0],P=C[1],S=l(b,16),L=l(k,16),D=b.length;return Object(u.jsx)(j.Provider,{value:{user:r,setUser:a,handlerAddPoint:function(e){var t=Object(i.a)({},r);t.points=r.points+e,a(t)},handlerSubtractPoint:function(e){var t=Object(i.a)({},r);t.points=r.points-e,a(t)},products:b,setProducts:h,totalProducts:D,reedemStatus:f,setReedemStatus:p,paginationList:S,points:N,setPoints:w,history:k,setHistory:P,paginationHistoryList:L},children:t})}n(32),n(33);var x=function(e){return Object(u.jsxs)("div",{className:"details flex-row ".concat(e.classContainer),children:[Object(u.jsx)("h5",{className:"normal-text center ".concat(e.classText),children:e.text}),Object(u.jsx)("img",{className:"center",src:"./images/coin.svg",alt:"icono"})]})},b=(n(34),n(10)),h=function(){return Object(u.jsxs)("ul",{className:"menu flex-row",children:[Object(u.jsx)("li",{className:"pink-line",children:Object(u.jsx)(b.b,{className:"normal-text",to:"/acamica-rewards-store/",children:"Home"})}),Object(u.jsx)("li",{className:"pink-line",children:Object(u.jsx)(b.b,{className:"normal-text",to:"/acamica-rewards-store/points",children:"Add points"})}),Object(u.jsx)("li",{className:"pink-line",children:Object(u.jsx)(b.b,{className:"normal-text",to:"/acamica-rewards-store/history",children:"History"})})]})},O=function(){var e=Object(c.useContext)(j).user;return Object(u.jsxs)("nav",{className:"nav flex-row",children:[Object(u.jsx)("div",{className:"container-logo",children:Object(u.jsx)("img",{src:"./images/aerolab-logo.svg",alt:"logo"})}),Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"container-points flex-row center",children:[Object(u.jsx)("h3",{className:"normal-text center",children:e.name}),Object(u.jsx)(x,{text:e.points})]})]})},m=(n(43),function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("img",{className:"img-portal",src:"./images/header-x2.png",alt:"auriculares-inalambricos"}),Object(u.jsx)("h1",{className:"principal-text",children:"Electronics"})]})}),f=(n(22),function(){var e=Object(c.useContext)(j),t=e.reedemStatus,n=e.setReedemStatus;return t.msg?Object(u.jsx)("div",{className:"modal center",children:Object(u.jsxs)("div",{className:"container-msj flex-column ".concat(t.status?"success":"error"),children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"image-ok-error",alt:"close",src:t.status?"./images/success.svg":"./images/error.png"})}),Object(u.jsx)("h4",{className:"text10",children:t.msg}),Object(u.jsx)("button",{className:"button-ok-error",onClick:function(){return n({})},children:t.status?"continue":"try again"})]})}):Object(u.jsx)(u.Fragment,{children:" "})}),p=n(4),v=n.n(p),g=n(8),N="https://coding-challenge-api.aerolab.co/",w={"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1Zjg4YzY3Mjk2ZTAwMTk5NjQxM2YiLCJpYXQiOjE2MjY3MzI2ODR9.8a4VIU7S_BsQjLs2qsmG5Gptn_SKHz-WLbDSQtRhpBA")},y=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N+"user/me",{headers:w});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),C=n(2),k=(n(45),n(46),function(e){return Object(u.jsx)("button",{className:"btn-filter flex-row center ".concat(e.classbutton),onClick:e.handlerOnClick,children:Object(u.jsx)("h5",{className:"normal-text center text-full ".concat(e.classtext),children:e.text})})}),P=(n(47),function(){var e=Object(c.useContext)(j).paginationList;return Object(u.jsxs)("div",{className:"flex-row btn-arrow center",children:[e.currentPage>1?Object(u.jsx)("button",{onClick:function(){return e.prev()},className:"container-arrow",children:Object(u.jsx)("img",{src:"./images/arrow-left.svg",alt:"flecha"})}):null,e.currentPage!==e.maxPage?Object(u.jsx)("button",{onClick:function(){return e.next()},className:"container-arrow",children:Object(u.jsx)("img",{src:"./images/arrow-right.svg",alt:"flecha"})}):null]})}),S=n(15),L=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N+"products",{headers:w});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.useContext)(j),t=e.totalProducts,n=e.user,s=e.setProducts,r=e.paginationList,a=e.products;return Object(u.jsxs)("aside",{className:"filter flex-row",children:[Object(u.jsx)("div",{className:"container-page center",children:Object(u.jsxs)("h3",{className:"normal-text",children:[r.currentData().length," of ",t," products"]})}),Object(u.jsx)(P,{}),Object(u.jsxs)("div",{className:"container-filter flex-row",children:[Object(u.jsx)("div",{className:"container-sort",children:Object(u.jsx)("h3",{className:"normal-text",children:"Sort by:"})}),Object(u.jsxs)("div",{className:"container-btn flex-row",children:[Object(u.jsxs)("div",{className:"flex-row container-btn-filter",children:[Object(u.jsx)(k,{text:"Lowest price",handlerOnClick:function(){var e=function(e){var t=e.sort((function(e,t){return e.cost>t.cost?1:e.cost<t.cost?-1:0}));return Object(S.a)(t)}(a);s(e)}}),Object(u.jsx)(k,{text:"Highest price",handlerOnClick:function(){var e=function(e){var t=e.sort((function(e,t){return e.cost>t.cost?-1:e.cost<t.cost?1:0}));return Object(S.a)(t)}(a);s(e)}})]}),Object(u.jsxs)("div",{className:"flex-row container-btn-filter",children:[Object(u.jsx)(k,{text:"Availability",handlerOnClick:function(){var e=function(e,t){return Object(S.a)(e).filter((function(e){return e.cost<t.points}))}(a,n);s(e)}}),Object(u.jsx)(k,{text:"Clear sort",handlerOnClick:function(){L().then((function(e){return s(e)}))},classbutton:"pink",classtext:"text-white"})]})]})]})]})},I=(n(48),n(18),function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={productId:t},e.next=4,fetch(N+"redeem",{method:"POST",headers:w,body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),M=function(e){var t=Object(c.useContext)(j),n=t.handlerSubtractPoint,s=t.setReedemStatus;return Object(u.jsxs)("div",{className:"selected-product flex-column",children:[Object(u.jsx)("div",{className:"container-buy-white",children:Object(u.jsx)("img",{src:"./images/buy-white.svg",alt:"bag"})}),Object(u.jsxs)("div",{className:"flex-row center",children:[Object(u.jsx)("h3",{className:"text-product-point",children:e.points}),Object(u.jsx)("img",{className:"white-bag",src:"./images/coin.svg",alt:"coin"})]}),Object(u.jsx)(k,{text:"Redeem now",handlerOnClick:function(){I(e.id).then((function(t){if(n(e.points),!t.ok)throw Error(t.status);return t.json()})).then((function(e){s({status:!0,msg:e.message})})).catch((function(e){s({status:!1,msg:"ups hubo un error"}),console.log(e)}))}})]})},H=function(e){var t=Object(c.useContext)(j).user,n=Object(c.useState)(!1),s=Object(o.a)(n,2),r=s[0],a=s[1],i=function(){a(!r)},l=e.points-t.points;return Object(u.jsxs)("div",{className:"product flex-column center",onMouseEnter:i,onMouseLeave:i,children:[Object(u.jsxs)("div",{className:"container-position",children:[Object(u.jsxs)("div",{className:"product-container",children:[Object(u.jsx)("img",{className:"photo",src:e.url,alt:"producto"}),t.points<e.points?Object(u.jsx)(x,{classContainer:"btn-neededPoints top-icono center",classText:"text-neededPoints",text:"You need ".concat(l)}):Object(u.jsx)("div",{className:"top-icono blue-bag",children:Object(u.jsx)("img",{src:"./images/buy-blue.svg",alt:"bag"})})]}),Object(u.jsxs)("div",{className:"container-description flex-column",children:[Object(u.jsx)("h4",{className:"product-name",children:e.name}),Object(u.jsx)("h4",{className:"product-category",children:e.category})]})]}),t.points>e.points&&r?Object(u.jsx)(M,{points:e.points,id:e.id}):null]})},J=function(){var e=Object(c.useContext)(j).paginationList;return Object(u.jsx)("main",{className:"result flex-row",children:e.currentData().length>0?e.currentData().map((function(e,t){return Object(u.jsx)(H,{id:e._id,url:e.img.hdUrl,name:e.name,category:e.category,points:e.cost},t)})):null})},T=(n(49),function(){var e=Object(c.useContext)(j),t=e.totalProducts,n=e.paginationList;return Object(u.jsxs)("footer",{className:"footer flex-row",children:[Object(u.jsxs)("h3",{className:"normal-text",children:[n.currentData().length," of ",t," products"]}),Object(u.jsx)(P,{})]})}),A=function(){var e=Object(c.useContext)(j).setProducts;return Object(c.useEffect)((function(){L().then((function(t){e(t)}))}),[e]),Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)(D,{}),Object(u.jsx)(J,{}),Object(u.jsx)(T,{})]})},E=function(e){return Object(u.jsxs)("div",{className:"flex-row small-container",children:[Object(u.jsx)("div",{className:"container-imgHistory",children:Object(u.jsx)("img",{className:"h100",src:e.url,alt:"producto"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"small-text",children:["Category: ",e.category]}),Object(u.jsxs)("h3",{className:"small-text",children:["Cost: ",e.cost]}),Object(u.jsxs)("h3",{className:"small-text",children:["Date: ",e.date]})]})]})},R=(n(50),function(e){return Object(u.jsx)("div",{className:"container-title center",children:Object(u.jsx)("h3",{className:"title",children:e.title})})}),Y=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N+"user/history",{headers:w});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.useContext)(j),t=e.paginationHistoryList,n=e.setHistory;return Object(c.useEffect)((function(){Y().then((function(e){n(e)}))}),[n]),Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)(R,{title:"Get user redeem history"}),t.currentData().map((function(e){return Object(u.jsx)(E,{url:e.img.url,category:e.category,cost:e.cost,date:e.createDate},e.createDate)})),Object(u.jsx)(T,{})]})},z=(n(51),function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={amount:t},e.prev=1,e.next=4,fetch(N+"user/points",{method:"POST",headers:w,body:JSON.stringify(n)});case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),B=function(e){var t=Object(c.useContext)(j),n=t.points,s=t.handlerAddPoint,r=t.setProducts;return Object(u.jsx)("div",{className:"container-selector flex-row center",children:Object(u.jsx)("button",{value:n,onClick:function(){return t=e.value,z(t).then((function(e){s(t),alert(e.message)})),void L().then((function(e){r(e)}));var t},className:"selector normal-text",children:e.description})})},G=function(){return Object(u.jsxs)("section",{className:"section",children:[Object(u.jsx)(R,{title:"Add points to your user"}),Object(u.jsxs)("div",{className:"center flex-column",children:[Object(u.jsx)(B,{description:"add 1000 points",value:1e3}),Object(u.jsx)(B,{description:"add 5000 points",value:5e3}),Object(u.jsx)(B,{description:"add 7500 points",value:7500})]})]})},Q=function(){return Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{exact:!0,path:"/acamica-rewards-store",children:Object(u.jsx)(A,{})}),Object(u.jsx)(C.a,{path:"/acamica-rewards-store/history",children:Object(u.jsx)(F,{})}),Object(u.jsx)(C.a,{path:"/acamica-rewards-store/points",children:Object(u.jsx)(G,{})})]})};var U=function(){var e=Object(c.useContext)(j).setUser;return Object(c.useEffect)((function(){y().then((function(t){e(t)}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(O,{}),Object(u.jsx)(m,{}),Object(u.jsx)(Q,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(U,{})})})}),document.getElementById("root")),_()}},[[52,1,2]]]);
//# sourceMappingURL=main.20ea48a0.chunk.js.map