(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(14),i=n.n(r),o=(n(88),n(43)),s=n(77),c=n(78),u=n(81),g=n(79),h=n(82),d=n(15),v=n.n(d),p=n(45),m=n.n(p),f=n(44),S=n.n(f),w=n(42),b=(n(90),{1:[2],2:[3],3:[4,2],4:[4,3],5:[4,3,2],6:[4,3,3],7:[4,3,3,1],8:[4,3,3,2],9:[4,3,3,3,1],10:[4,3,3,3,2],11:[4,3,3,3,2,1],12:[4,3,3,3,2,1],13:[4,3,3,3,2,1,1],14:[4,3,3,3,2,1,1],15:[4,3,3,3,2,1,1,1],16:[4,3,3,3,2,1,1,1],17:[4,3,3,3,2,1,1,1,1],18:[4,3,3,3,3,1,1,1,1],19:[4,3,3,3,3,2,1,1,1],20:[4,3,3,3,3,2,2,1,1]}),E=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(l)))).state={level:1,dice:0,casterType:1,con:0,damage:0,healing:0,tempHealth:0,healingSurges:[0],spells:[]},n.handleChange=function(e){return function(a){if(""!==a.target.value||"0"===a.target.value){if(n.setState(Object(o.a)({},e,parseInt(a.target.value,10))),"level"===e){for(var t=[0],l=parseInt(a.target.value,10)-1,r=0;r<l;r+=1)t.push(0);var i=n.state.casterType,s=n.getSpellSlots(parseInt(a.target.value,10),i);n.setState({healingSurges:t,spells:s})}else if("casterType"===e){var c=n.state.level,u=n.getSpellSlots(c,parseInt(a.target.value,10));n.setState({spells:u})}}else n.setState(Object(o.a)({},e,0))}},n.getSpellSlots=function(e,a){if(a>0){var n=Math.round(e/a),t=b[n],l=[];return t.forEach(function(e,a){l.push([]);for(var n=0;n<e;n+=1)l[a].push(0)}),l}return[]},n.toggleSurge=function(e){var a=n.state.healingSurges;a[e]=1===a[e]?0:1,n.setState({healingSurges:a})},n.toggleSpellSlot=function(e,a){var t=n.state.spells;t[e][a]=1===t[e][a]?0:1,n.setState({spells:t})},n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,n=this.state,t=n.level,r=n.dice,i=n.con,o=n.damage,s=n.healing,c=n.tempHealth,u=n.healingSurges,g=n.spells,h=n.casterType;return l.a.createElement("div",{className:a.container},l.a.createElement("div",{className:a.section},l.a.createElement(v.a,{id:"level",label:"Level",margin:"normal",variant:"outlined",onChange:this.handleChange("level"),value:t}),l.a.createElement(v.a,{id:"dice",label:"HitDice",margin:"normal",variant:"outlined",onChange:this.handleChange("dice"),value:r}),l.a.createElement(v.a,{id:"con",label:"Constitution",margin:"normal",variant:"outlined",onChange:this.handleChange("con"),value:i}),l.a.createElement(v.a,{id:"casterType",label:"Caster Type",margin:"normal",variant:"outlined",onChange:this.handleChange("casterType"),value:h})),l.a.createElement("div",{className:a.section},l.a.createElement(v.a,{id:"damage",label:"Damage",margin:"normal",variant:"outlined",onChange:this.handleChange("damage"),value:o}),l.a.createElement(v.a,{id:"health",label:"Health",margin:"normal",variant:"outlined",value:r+(t-1)*(r/2+1)+i*t+s-o}),l.a.createElement(v.a,{id:"healing",label:"Healing",margin:"normal",variant:"outlined",onChange:this.handleChange("healing"),value:s})),l.a.createElement(v.a,{id:"temporal",label:"Temp.HP",margin:"normal",variant:"outlined",onChange:this.handleChange("tempHealth"),value:c}),l.a.createElement(S.a,{variant:"subtitle1"},"Healing Surges"),l.a.createElement("div",{className:a.healingSurges},u.map(function(n,t){var r=[];return r.push(l.a.createElement("div",{className:a.chips},l.a.createElement(m.a,{key:t,label:n,variant:"outlined",onClick:function(){return e.toggleSurge(t)}}))),(t+1)%4===0&&r.push(l.a.createElement("br",null)),r})),l.a.createElement(S.a,{variant:"subtitle1"},"Spell slots"),l.a.createElement("div",null,g.map(function(a,n){var t=[];t.push(l.a.createElement("span",null,n+1,":"));var r=a.map(function(a,t){return l.a.createElement(m.a,{key:"".concat(n,"-").concat(t),label:a,variant:"outlined",onClick:function(){return e.toggleSpellSlot(n,t)}})});return t.push(r),t.push(l.a.createElement("br",null)),t})))}}]),a}(t.Component),y=Object(w.withStyles)({container:{display:"flex",flexDirection:"column"},section:{display:"flex"},healingSurges:{display:"flex",flexWrap:"wrap"},chips:{display:"flex",flex:"1 0 21%",justifyContent:"center",alignItems:"center"}})(E),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a.onSuccess&&a.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");C?(function(e,a){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(a,e)})}}()},83:function(e,a,n){e.exports=n(230)},88:function(e,a,n){},90:function(e,a,n){}},[[83,2,1]]]);
//# sourceMappingURL=main.e3168781.chunk.js.map