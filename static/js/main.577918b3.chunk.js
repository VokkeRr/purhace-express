(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(7),o=r.n(c),u=(r(14),r(1)),s=r.n(u),l=r(3),i=Object(a.createContext)(),E=r(5),p="https://exxpress-backend.herokuapp.com/api";function d(e){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,fetch("".concat(p,"/purchases"));case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("");case 7:return e.next=9,r.json();case 9:a=e.sent,t(S(a)),e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(1),t(C(e.t0)),e.t0;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function S(e){return{type:"FETCH_PURCHASES_SUCCESS",payload:{purchase:e}}}function _(){return{type:"FETCH_PURCHASES_REQUEST",payload:{}}}function C(e){return{type:"FETCH_PURCHASES_FAILURE",payload:{error:e}}}function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(U()),e.prev=1,e.next=4,fetch("".concat(p,"/purchases/").concat(r),{method:"DELETE"});case 4:if(e.sent.ok){e.next=7;break}throw new Error("");case 7:t(R()),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),t(v(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function R(){return{type:"REMOVE_PURCHASES_SUCCESS",payload:{}}}function v(e){return{type:"REMOVE_PURCHASES_FAILURE",payload:{error:e}}}function U(){return{type:"REMOVE_PURCHASES_REQUEST",payload:{}}}function y(e,t){return A.apply(this,arguments)}function A(){return(A=Object(l.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H()),e.prev=1,e.next=4,fetch("".concat(p,"/purchases"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:if(e.sent.ok){e.next=7;break}throw new Error("");case 7:t(b()),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),t(P(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function b(){return{type:"EDIT_PURCHASE_SUCCESS",payload:{}}}function P(e){return{type:"EDIT_PURCHASE_FAILURE",payload:{error:e}}}function H(){return{type:"EDIT_PURCHASE_REQUEST",payload:{}}}function T(e){return{type:"GET_PURCHASE_BY_ID_REQUEST",payload:{id:e}}}function I(e){return{type:"GET_PURCHASE_BY_ID_FAILURE",payload:{error:e}}}function O(e,t){return{type:"GET_PURCHASE_BY_ID_SUCCSES",payload:{description:e,id:t}}}function g(e,t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(s.a.mark((function e(t,r){var a,n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(r)),e.prev=1,e.next=4,fetch("".concat(p,"/purchases/").concat(r));case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("");case 7:return e.next=9,a.json();case 9:n=e.sent,c=Object(E.a)(n,1),o=c[0].description,t(O(o,r)),e.next=18;break;case 14:throw e.prev=14,e.t0=e.catch(1),t(I(e.t0)),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var x=r(8),k=r.n(x);function D(){return n.a.createElement("img",{className:"loader",src:k.a,alt:"Loading..."})}function N(e){var t=e.purchaseItem,r=Object(a.useContext)(i),c=r.state,o=c.removedPurchase,u=c.descriptionPurchase,E=r.dispatch,p=function(e){e.preventDefault(),E({type:"REMOVE_PURCHASES_CONFIRM",payload:{id:t.id}})},m=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,f(E,t.id);case 4:return e.next=6,d(E);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E(v(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){e.preventDefault(),E({type:"EDIT_PURCHASE_EXISTING",payload:{item:t}})},_=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E({type:"REMOVE_PURCHASES_CANCEL",payload:{}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){e.preventDefault(),E({type:"GET_PURCHASE_BY_ID_CANCEL",payload:{}})},h=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,g(E,t.id);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),E(I(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,g(E,t.id);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),E(I(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",null,n.a.createElement("div",{className:"Purchase"},n.a.createElement("p",null,"Category: ",t.category),n.a.createElement("p",null,"Sum: ",t.amount)),o.id!==t.id?n.a.createElement("div",null,n.a.createElement("button",{className:"editman",onClick:S},"\u270e"),n.a.createElement("button",{className:"removemen",onClick:p},"\u2718")):o.loading?n.a.createElement(D,null):o.error?n.a.createElement("div",null,"Fatal Error. Retry?",n.a.createElement("button",{onClick:m},"Yes"),n.a.createElement("button",{onClick:_},"No")):n.a.createElement("div",{className:"ashure"},"Are you sure, want to delete purchase?",n.a.createElement("button",{className:"agry",onClick:m},"Yes"),n.a.createElement("button",{className:"disagry",onClick:_},"No")),function(){if(u.id!==t.id)return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"descbutton",onClick:R},"Open description"));if(u.loading)return n.a.createElement(D,null);if(u.error)return n.a.createElement("div",null,"Description load error, retry?",n.a.createElement("button",{onClick:h},"Yes"),n.a.createElement("button",{onClick:C},"No"));var e=u.description;return n.a.createElement("div",{className:"desctop"},"Description: ",e)}())}function j(){var e=Object(a.useContext)(i),t=e.state.editedPurchase,r=e.dispatch,c=function(){var e=Object(l.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,y(r,t.item);case 4:return e.next=6,d(r);case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),r(P(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.name,n=t.value;r(function(e,t){return{type:"EDIT_PURCHASE_FIELD_CHANGE",payload:{name:e,value:t}}}(a,n))};return n.a.createElement("form",{onSubmit:c,onReset:function(e){r({type:"EDIT_PURCHASE_CANCEL",payload:{}})},className:"neon"},n.a.createElement("div",{className:"inputForms"},n.a.createElement("select",{className:"select",onChange:o,name:"category",value:t.item.category},n.a.createElement("option",{value:"Cars"},"Cars"),n.a.createElement("option",{value:"Food"},"Food"),n.a.createElement("option",{value:"Travel"},"Travel"),n.a.createElement("option",{value:"Politics"},"Politics"),n.a.createElement("option",{value:"Programming"},"Programming"),n.a.createElement("option",{value:"Games"},"Games")),n.a.createElement("input",{className:"summma",placeholder:"Enter sum",onChange:o,type:"number",name:"amount",value:t.item.amount}),n.a.createElement("textarea",{className:"descript",placeholder:"Enter description",name:"description",onChange:o,value:t.item.description})),n.a.createElement("div",{className:"Formofbuttons"},t.loading?n.a.createElement(D,null):t.error?n.a.createElement(n.a.Fragment,null,"Fatal Error, retry?",n.a.createElement("button",null,"Yes"),n.a.createElement("button",{type:"reset"},"Cancel")):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"addbtn"},0===t.item.id?"Add":"Save"),n.a.createElement("button",{className:"cabtn",type:"reset"},"Cancel"))))}function F(){var e=Object(a.useContext)(i),t=e.state,r=e.dispatch,c=t.purchases,o=c.purchase,u=c.loading,E=c.error;Object(a.useEffect)((function(){Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),r(C(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[r]);var p=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),r(C(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),m=o.map((function(e){return e.amount})).reduce((function(e,t){return e+parseInt(t,10)}),0);return n.a.createElement("div",{className:"Purchaseslist"},n.a.createElement(j,null),E&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"FATAL ERROR!!! UNINSTAL WINDOWS!"),n.a.createElement("button",{onClick:p},"Reload!")),u&&n.a.createElement(D,null),o.map((function(e){return n.a.createElement(N,{key:e.id,purchaseItem:e})})),n.a.createElement("p",{className:"Sum"},"Total sum: ",m))}var L=r(4),G=r(2),M={purchases:{purchase:[],loading:!1,error:null},removedPurchase:{id:0,loading:!1,error:null},editedPurchase:{item:{id:0,category:"",amount:"",description:""},loading:!1,error:null},descriptionPurchase:{id:0,description:"",loading:!1,error:null,hide:!0}};function Y(e,t){switch(t.type){case"FETCH_PURCHASES_REQUEST":return Object(G.a)({},e,{loading:!0,error:null});case"FETCH_PURCHASES_SUCCESS":return Object(G.a)({},e,{purchase:t.payload.purchase,loading:!1,error:null});case"FETCH_PURCHASES_FAILURE":return Object(G.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function V(e,t){switch(t.type){case"REMOVE_PURCHASES_CONFIRM":return{id:t.payload.id,loading:!1,error:null};case"REMOVE_PURCHASES_CANCEL":return{id:0,loading:!1,error:null};case"REMOVE_PURCHASES_REQUEST":return Object(G.a)({},e,{loading:!0,error:null});case"REMOVE_PURCHASES_SUCCESS":return{id:0,loading:!1,error:null};case"REMOVE_PURCHASES_FAILURE":return Object(G.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function B(e,t){switch(t.type){case"EDIT_PURCHASE_FIELD_CHANGE":return Object(G.a)({},e,{item:Object(G.a)({},e.item,Object(L.a)({},t.payload.name,t.payload.value))});case"EDIT_PURCHASE_EXISTING":return{item:Object(G.a)({},t.payload.item),loading:!1,error:null};case"EDIT_PURCHASE_CANCEL":return{item:{id:0,category:"",amount:"",description:""},loading:!1,error:null};case"EDIT_PURCHASE_REQUEST":return Object(G.a)({},e,{loading:!0,error:null});case"EDIT_PURCHASE_SUCCESS":return{item:{id:0,category:"",amount:"",description:""},loading:!1,error:null};case"EDIT_PURCHASE_FAILURE":return Object(G.a)({},e,{loading:!1,error:t.payload.error});default:return e}}function Q(e,t){switch(t.type){case"GET_PURCHASE_BY_ID_REQUEST":return Object(G.a)({},e,{id:t.payload.id,loading:!0,error:null});case"GET_PURCHASE_BY_ID_SUCCSES":return{id:t.payload.id,description:t.payload.description,loading:!1,error:null,hide:!1};case"GET_PURCHASE_BY_ID_FAILURE":return Object(G.a)({},e,{loading:!1,error:t.payload.error,hide:!0});case"GET_PURCHASE_BY_ID_CANCEL":return Object(G.a)({},e,{loading:!1,error:null,hide:!0});default:return e}}function W(e,t){switch(t.type){case"FETCH_PURCHASES_REQUEST":case"FETCH_PURCHASES_SUCCESS":case"FETCH_PURCHASES_FAILURE":return Object(G.a)({},e,{purchases:Y(e.purchases,t)});case"REMOVE_PURCHASES_CONFIRM":case"REMOVE_PURCHASES_CANCEL":case"REMOVE_PURCHASES_REQUEST":case"REMOVE_PURCHASES_SUCCESS":case"REMOVE_PURCHASES_FAILURE":return Object(G.a)({},e,{removedPurchase:V(e.removedPurchase,t)});case"EDIT_PURCHASE_CANCEL":case"EDIT_PURCHASE_EXISTING":case"EDIT_PURCHASE_FAILURE":case"EDIT_PURCHASE_FIELD_CHANGE":case"EDIT_PURCHASE_REQUEST":case"EDIT_PURCHASE_SUCCESS":return Object(G.a)({},e,{editedPurchase:B(e.editedPurchase,t)});case"GET_PURCHASE_BY_ID_REQUEST":case"GET_PURCHASE_BY_ID_SUCCSES":case"GET_PURCHASE_BY_ID_FAILURE":case"GET_PURCHASE_BY_ID_CANCEL":return Object(G.a)({},e,{descriptionPurchase:Q(e.descriptionPurchase,t)});default:return e}}function J(e){var t=Object(a.useReducer)(W,M),r=Object(E.a)(t,2),c=r[0],o=r[1];return n.a.createElement("div",null,n.a.createElement(i.Provider,{value:{state:c,dispatch:o}},e.children))}var X=function(){return n.a.createElement("div",null,n.a.createElement(J,null,n.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,r){e.exports=r.p+"static/media/loader.29e4cf8b.gif"},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.577918b3.chunk.js.map