(this["webpackJsonp09-react-redux-counter"]=this["webpackJsonp09-react-redux-counter"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(6),u=n.n(o),a=(n(19),n(20),n(5)),l=n(4),s=n(3),i=n(12),E="INCREMENT",p="DECREMENT",f=n(13),O=n.n(f);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={count:0,results:[],redo:""},b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(console.log(n),n.type){case E:return y({},t,{count:t.count+1});case p:return y({},t,{count:t.count-1});case"STORE_RESULTS":return y({},t,{results:t.results.concat({type:n.operation,value:t.count,key:O()(),logo:n.raw})});case"DELETE_RESULT":return y({},t,{results:t.results.filter((function(e){return e.key!==n.key}))});case"UNDO":var r=Object(s.a)(t.results).splice(Object(s.a)(t.results).length-1,1);return console.log("last action",r),y({},t,{results:Object(s.a)(t.results).filter((function(e,n){return Object(s.a)(t.results).length-1!==n})),redo:r});case"REDO":return y({},t,{results:(e=Object(s.a)(t.results)).concat.apply(e,Object(s.a)(t.redo)),redo:[]});default:return t}},m=Object(l.c)(b,Object(l.a)((function(e){return function(e){return function(t){console.log("Middleware ",t.type),t.company="Raw Engineering",e(t)}}}))),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e){case E:return{type:E};case p:return{type:p};case"STORE_RESULTS":return{type:"STORE_RESULTS",operation:t.operation};case"DELETE_RESULT":return console.log("payload in delete",t),{type:"DELETE_RESULT",key:t.key};case"UNDO":return{type:"UNDO"};case"REDO":return{type:"REDO"};default:return{type:"invalid action"}}};var R=Object(a.b)((function(e){return{countValue:e.count}}),(function(e){return{incrementCount:function(){e(S(E),m.getState())},decrementCount:function(){e(S(p),m.getState())},storeResults:function(t){e(S("STORE_RESULTS",{operation:t}),m.getState())}}}))((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null," Counter Value "),c.a.createElement("p",null," ",e.countValue),c.a.createElement("button",{onClick:function(){e.incrementCount(),console.log(m.getState()),e.storeResults(E)}}," "," + ","  "),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){e.decrementCount(),console.log(m.getState()),e.storeResults(p)}}," "," - ","  "))}));var j=Object(a.b)((function(e){return{results:e.results}}),(function(e){return{deleteResult:function(t){console.log(t.target.id),console.log("delete this result"),e(S("DELETE_RESULT",{key:t.target.id}),m.getState())}}}))((function(e){return c.a.createElement(c.a.Fragment,null,function(){var t=e.results.map((function(t,n){return c.a.createElement("p",{key:t.key,id:t.key,onDoubleClick:function(t){e.deleteResult(t)}}," Action: ",t.type," ------  Value: ",t.value,"  ")}));return c.a.createElement(c.a.Fragment,null,t)}())}));var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(a.a,{store:m},c.a.createElement(R,null),c.a.createElement(j,null))))};u.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6d9c17cd.chunk.js.map