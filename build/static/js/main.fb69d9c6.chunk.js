(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),l=n(8),r=n.n(l),s=(n(16),n(2)),o=n(3),u=n(5),c=n(4),h=n(6),d=(n(17),n(9)),p=n(1),v=60,b=3600;function f(t){return/^[0-5]?[0-9]:[0-5][0-9]$/.test(t)}var g=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={value:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value.replace(/ /g,"").replace(/[!-\/;-z]/g,""),n=e.match(/:/g)||"",a=n&&n.length>1||!1,i=/ /.test(e)||/[!-\/;-z]/.test(e);":"===e[1]&&e.length>4||":"===e[2]&&e.length;if(a?this.setState({value:""}):":"===e[1]&&e.length>4?e=e.slice(0,4):":"===e[2]&&e.length>5?e=e.slice(0,5):4!==e.length||n?e.length>4&&!f(e)&&(this.setState({value:""}),a=!0):e=e.slice(0,2)+":"+e.slice(2),!a){if(e.length>4&&!f(e))return void this.setState({value:""});if(e>5)return void this.setState({value:e.slice(0,6)});this.setState({value:e}),i||this.props.onChange(e,this.props.index)}}},{key:"render",value:function(){return i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{className:"MinutesInput",type:"text",value:this.state.value,onChange:this.handleChange}))}}]),e}(a.Component),m=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={inputs:[0],total:0},n.addInputs=n.addInputs.bind(Object(p.a)(n)),n.updateTotal=n.updateTotal.bind(Object(p.a)(n)),n.recalculateTotal=n.recalculateTotal.bind(Object(p.a)(n)),n.resetAll=n.resetAll.bind(Object(p.a)(n)),n}return Object(h.a)(e,t),Object(o.a)(e,[{key:"addInputs",value:function(){this.setState({inputs:[].concat(Object(d.a)(this.state.inputs),[0])})}},{key:"updateTotal",value:function(t,e){var n=this,a=this.state.inputs,i=this.state.inputs[e];if(f(t=""===t?"00:00":t)){var l;if(0===(l=function(t){var e=t.split(":");return parseInt(e[0])*v+parseInt(e[1])}(t)-i))return;a[e]=i+l,this.setState({inputs:a},function(){return n.setState({total:n.recalculateTotal()})})}}},{key:"recalculateTotal",value:function(){for(var t=0,e=0;e<this.state.inputs.length;e++)t+=this.state.inputs[e];return t}},{key:"resetAll",value:function(){this.setState({inputs:[],total:0})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"MinutesInputForm"},i.a.createElement("h2",{id:"total-time-number"},"Total: ",function(t){var e,n,a,i,l;return t<v?(l=t<10?"00:0":"00:")+t:t<b?(n=Math.floor(t/v).toString())+":"+(l=(e=(t%v).toString()).length<2?"0":"")+e:(a=Math.floor(t/b).toString(),i=t%b,n=Math.floor(i/v).toString(),l=(e=(i%v).toString()).length<2?"0":"",a+":"+(n.length<2?"0":"")+n+":"+l+e)}(this.state.total)),i.a.createElement("button",{id:"remove-all-times-button",onClick:this.resetAll},"Reset"),this.state.inputs.map(function(e,n){return i.a.createElement(g,{key:n,index:n,onChange:t.updateTotal})}),i.a.createElement("button",{id:"add-times-button",onClick:this.addInputs},"+"))}}]),e}(a.Component),j=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement("h1",{id:"app-title"},"Add Minutes Together"),i.a.createElement(m,null)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.fb69d9c6.chunk.js.map