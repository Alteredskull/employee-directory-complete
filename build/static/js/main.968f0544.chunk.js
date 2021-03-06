(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{16:function(e,a,t){e.exports=t(47)},2:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(21),t(13)),i=t(15),s=(t(22),t(2),r.a.createContext({})),d=function(){var e=Object(n.useContext)(s);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,o=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle sign"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle sign"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle sign"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle email sign"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(o.date)))})):r.a.createElement(r.a.Fragment,null))},m=(t(23),function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t)}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(d,null)))}),u=(t(24),function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"searchbox"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:""},"Search")),r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}})))});t(25);var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarNav"},r.a.createElement("div",{className:"search-area col-2"},r.a.createElement(u,null))))},p=t(14),v=t.n(p),g=function(){return v.a.get("https://randomuser.me/api/?results=20&nat=us")};t(43);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(t,!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b=function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"Name",width:"10%",order:"descend"},{name:"Phone",width:"20%",order:"descend"},{name:"Email",width:"20%",order:"descend"},{name:"Date of Birth",width:"10%",order:"descend"}]}),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){g().then((function(e){console.log(e.data.results),l(E({},t,{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(s.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){var t=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(a,t),-1!==t.indexOf(a.toLowerCase()))return e}));l(E({},t,{filteredUsers:n}))},handleSort:function(e){var a=t.headings.filter((function(a){return a.name===e})).map((function(e){return e.order})).toString();a="descend"===a?"ascend":"descend";var n=t.filteredUsers.sort((function(t,n){return"ascend"===a?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):"dob"===e?t[e].age-n[e].age:t[e].localeCompare(n[e]):void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):"dob"===e?n[e].age-t[e].age:n[e].localeCompare(t[e])})),r=t.headings.map((function(t){return t.order=t.name===e?a:t.order,t}));l(E({},t,{filteredUsers:n,headings:r}))}}},r.a.createElement(f,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(m,null):r.a.createElement("div",null)))};t(44);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null))};var y=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};t(45);var w=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"sign"},"Not Your Typical Employee Directory :P"),r.a.createElement("p",null,"Find them here, quick and easy!"))};t(46);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement(w,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.968f0544.chunk.js.map