(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{336:function(e,t,n){e.exports=n.p+"static/media/404Error.45daaab7.jpg"},460:function(e,t,n){e.exports=n(882)},476:function(e,t){},478:function(e,t){},512:function(e,t){},513:function(e,t){},881:function(e,t,n){},882:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(44),o=n.n(c),i=n(41),s=n(64),l=n(110),u=n(31),m=n(19),f=n.n(m),p=n(21),d=n(333),h=n.n(d),E="RECOVER_SERIALIZED_STATE",b="APPLY_SERIALIZED_STATE",k="CONTROL_TASKS_FLOW",T="SET_TASK_START_TIME",v="ADD_TASK",O="TASK_NAME_CHANGE",g="SET_TASK_NAME",j="SET_TASK_END_TIME",y="DELETE_TASK",w="DELETE_ALL_TASKS",x="GENERATE_TASKS",S={STORAGE_STATE_KEY:"TIMER_SERIALIZED_STATE"},A={set:function(e,t){return localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},N="#5148c7",D="#20c1d8",_="#bf2b5c",C="#00bcd5",I="/",L="chart",R="tasks",K={TABLE_DATE_FORMAT:"HH:mm:ss"},z={from:10,to:15},M={from:10,to:90},W={from:0,to:10},B=new Array(100).fill(null).map(function(){return h()()}),F=b,P=k,G=T,H=v,Y=O,J=g,X=j,Z=y,q=w,U=x,V=E,$=function(e){return le(F,e)},Q=function(){return le(P)},ee=function(e){return le(G,e)},te=function(e){return le(H,e)},ne=function(e){return le(Y,e)},ae=function(e){return le(J,e)},re=function(e){return le(X,e)},ce=function(e){return le(Z,e)},oe=function(){return le(q)},ie=function(){return le(U)},se=function(){return le(V)};function le(e,t){return{type:e,payload:t}}var ue=f.a.mark(pe),me=f.a.mark(de),fe=E;function pe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)(fe,de);case 2:case"end":return e.stop()}},ue)}function de(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e=A.get(S.STORAGE_STATE_KEY))){t.next=5;break}return t.next=5,Object(p.c)($(JSON.parse(e)));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to recover state from storage, ".concat(t.t0));case 10:case"end":return t.stop()}},me,null,[[0,7]])}var he=f.a.mark(Oe),Ee=f.a.mark(ge),be=v,ke=T,Te=y,ve=g;function Oe(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.b)(300);case 2:return t.next=4,Object(p.d)();case 4:e=t.sent,A.set(S.STORAGE_STATE_KEY,JSON.stringify(e));case 6:case"end":return t.stop()}},he)}function ge(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)([be,ke,Te,ve],Oe);case 2:case"end":return e.stop()}},Ee)}var je=f.a.mark(ye);function ye(){var e,t,n,a,r,c,o;return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(p.c)(re());case 2:return i.next=4,Object(p.d)();case 4:return e=i.sent,t=e.currentTask,n=e.tasksList,a=n.tasks,r=t.startTime,c=t.endTime,o=t.taskName,i.next=11,Object(p.c)(te({id:(s=a,0===s.length?1:Math.max.apply(null,s.map(function(e){return e.id}))+1),startTime:r,endTime:c,taskName:o}));case 11:case"end":return i.stop()}var s},je)}var we=f.a.mark(Ae),xe=f.a.mark(Ne),Se=k;function Ae(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)(Se,Ne);case 2:case"end":return e.stop()}},we)}function Ne(){var e,t;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.d)();case 2:if(e=n.sent,t=e.currentTask,t.startTime){n.next=10;break}return n.next=8,Object(p.c)(ee());case 8:n.next=12;break;case 10:return n.next=12,Object(p.a)(ye);case 12:case"end":return n.stop()}},xe)}var De=n(51),_e=n.n(De),Ce=n(334),Ie=n.n(Ce);function Le(e,t){return Math.floor(Math.random()*(t-e+1))+e}var Re=f.a.mark(Fe),Ke=f.a.mark(Pe),ze=z,Me=M,We=W,Be=x;function Fe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)(Be,Pe);case 2:case"end":return e.stop()}},Re)}function Pe(){var e,t,n,a,r,c;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(p.c)(oe());case 2:e=Le(ze.from,ze.to),t=_e()().startOf("day"),n=1,a=0;case 6:if(!(a<e)){o.next=15;break}return r=Le(Me.from,Me.to),c=Le(We.from,We.to),o.next=11,Object(p.c)(te({id:n++,startTime:t.toString(),endTime:t.add(r,"minutes").toString(),taskName:Ie.a.generate(10)}));case 11:t.add(c,"minutes");case 12:a++,o.next=6;break;case 15:case"end":return o.stop()}},Ke)}var Ge=f.a.mark(Je),He=f.a.mark(Xe),Ye=O;function Je(e){var t;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(p.b)(700);case 3:return n.next=5,Object(p.c)(ae(t));case 5:case"end":return n.stop()}},Ge)}function Xe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(Ye,Je);case 2:case"end":return e.stop()}},He)}var Ze,qe=n(59),Ue=T,Ve=g,$e=j,Qe=v,et=b,tt={startTime:null,endTime:null,taskName:""},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case et:return Object(qe.a)({},a.currentTask);case Qe:return tt;case Ve:return Object(qe.a)({},e,{taskName:a});case Ue:return Object(qe.a)({},e,{startTime:a||_e()()});case $e:return Object(qe.a)({},e,{endTime:a||_e()()});default:return e}},at=n(350),rt=v,ct=y,ot=w,it=b,st={tasks:[]},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case it:return Object(qe.a)({},a.tasksList);case rt:return{tasks:[].concat(Object(at.a)(e.tasks),[a])};case ct:return{tasks:e.tasks.filter(function(e){return e.id!==a})};case ot:return{tasks:[]};default:return e}},ut=n(351),mt=n(48),ft=n(248),pt=Object(mt.a)(),dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,ht=Object(ut.a)(),Et=Object(u.e)((Ze=pt,Object(u.c)({router:Object(l.b)(Ze),currentTask:nt,tasksList:lt})),dt(Object(u.a)(function(e){return function(e){return function(t){var n=t.type,a=t.payload;e({type:n,payload:a})}}},ht,Object(ft.a)(pt))));[pe,ge,Ae,Fe,Xe].forEach(function(e){return ht.run(e)});var bt=n(35),kt=n(36),Tt=n(38),vt=n(37),Ot=n(39),gt=n(52),jt=n(46),yt=n(47),wt=n(45),xt=n(141),St=n.n(xt),At=n(143),Nt=n.n(At),Dt=n(142),_t=n.n(Dt),Ct=n(88),It=n.n(Ct),Lt=n(58),Rt=n.n(Lt);function Kt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_e()();return[_e()(t).diff(e,"hours"),_e()(t).diff(e,"minutes")%60,_e()(t).diff(e,"seconds")%60].map(function(e){return function(e){return"".concat(e).length<2?"0".concat(e):e}(e)}).join(":")}function zt(e){return _e()(e).format(K.TABLE_DATE_FORMAT)}var Mt=I;var Wt=Object(wt.withStyles)({card:{minWidth:275,maxWidth:600},bullet:{display:"inline-block",margin:"0 4px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(function(e){var t=e.classes,n=e.requestedTask,a=t.card,c=t.title,o=n.endTime,i=n.id,l=n.startTime,u=n.taskName;return r.a.createElement(St.a,{className:a},r.a.createElement(_t.a,null,r.a.createElement(Rt.a,{className:c,color:"textSecondary",gutterBottom:!0},"TASK # ","".concat(i)),r.a.createElement(Rt.a,{variant:"h5",component:"h2"},"Task name : ",u),r.a.createElement(Rt.a,{variant:"h5",component:"h2"},"Start time : ",zt(l)),r.a.createElement(Rt.a,{variant:"h5",component:"h2"},"End time : ",zt(o)),r.a.createElement(Rt.a,{variant:"h5",component:"h2"},"Spent time : ",Kt(l,o))),r.a.createElement(Nt.a,null,r.a.createElement(s.b,{to:Mt},r.a.createElement(It.a,{size:"small"},"Back to task list"))))}),Bt=n(336),Ft=n.n(Bt),Pt=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"task cannot be found",style:Gt,src:Ft.a}))},Gt={width:"800px",marginLeft:"50%",transform:"translateX(-50%)"};function Ht(){var e=Object(jt.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ht=function(){return e},e}var Yt=function(e){function t(){return Object(bt.a)(this,t),Object(Tt.a)(this,Object(vt.a)(t).apply(this,arguments))}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.tasks.find(function(e){return e.id===t});return r.a.createElement(Jt,null,n?r.a.createElement(Wt,{requestedTask:n}):r.a.createElement(Pt,null))}}]),t}(a.Component),Jt=yt.a.div(Ht()),Xt=function(e){function t(){return Object(bt.a)(this,t),Object(Tt.a)(this,Object(vt.a)(t).apply(this,arguments))}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.tasks;return r.a.createElement(Yt,{id:t,tasks:n})}}]),t}(a.Component),Zt=Object(i.c)(function(e){return{tasks:e.tasksList.tasks}})(Xt),qt=n(20);function Ut(){var e=Object(jt.a)(["\n  font-size: 36px;\n"]);return Ut=function(){return e},e}function Vt(){var e=Object(jt.a)(["\n  height: 200px;\n  width: 200px;\n  border: 1px solid lightgray;\n  margin: 30px;\n  border-radius: 50%;\n  box-shadow: 0 2px 3px 1px lightgrey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Vt=function(){return e},e}var $t="00:00:00",Qt=function(e){function t(){var e,n;Object(bt.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Tt.a)(this,(e=Object(vt.a)(t)).call.apply(e,[this].concat(r)))).state={timeToDisplay:$t},n.launchTimer=function(){n.timer=setInterval(n.updateStateTime,1e3)},n.destroyTimer=function(){n.setState({timeToDisplay:$t},function(){clearInterval(n.timer)})},n.updateStateTime=function(){var e=n.props;n.setState({timeToDisplay:e?Kt(e):$t})},n}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var n=this.props.startTime;e.startTime?this.launchTimer():n&&!e.startTime?this.destroyTimer():e.startTime&&this.launchTimer()}},{key:"componentWillUnmount",value:function(){this.destroyTimer()}},{key:"render",value:function(){var e=this.state.timeToDisplay;return r.a.createElement(en,null,r.a.createElement(tn,null,e))}}]),t}(a.PureComponent),en=yt.a.div(Vt()),tn=yt.a.span(Ut()),nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,n=void 0===t?{}:t,a=Object(wt.withStyles)({root:{borderRadius:3,border:0,color:n.color||N,height:48,padding:"0 30px",margin:"20px 0",boxShadow:"0 3px 5px 2px lightgray",fontSize:"20px",size:"medium"},label:{textTransform:"capitalize"},sizeSmall:{height:"auto",padding:"1px 1px",margin:"3px",fontSize:"14px",textDecoration:"none"}})(qt.a);return r.a.createElement(a,e)},an=function(e){var t=e.data,n=Object(wt.withStyles)({root:{color:t.color,fontWeight:"bold"}})(qt.a);return r.a.createElement(n,e)};function rn(){var e=Object(jt.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 24px;\n"]);return rn=function(){return e},e}var cn=D,on=_,sn=function(e){var t=e.open;return r.a.createElement(qt.b,{open:t},r.a.createElement(qt.f,null,r.a.createElement(ln,null,"Empty task name")),r.a.createElement(qt.d,null,r.a.createElement(qt.e,null,"You are trying close task without name, enter the title and try again")),r.a.createElement(qt.c,null,r.a.createElement(an,{data:{color:cn},onClick:e.closeAlert},"Close")))},ln=yt.a.p(rn(),on);function un(){var e=Object(jt.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: space-between;\n  align-items: center;\n  color: ",";\n  padding-top: 30px;\n"]);return un=function(){return e},e}var mn=N,fn=function(e){function t(){var e,n;Object(bt.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Tt.a)(this,(e=Object(vt.a)(t)).call.apply(e,[this].concat(r)))).state={showEmptyTaskAlert:!1,localTaskName:""},n.openAlert=function(){n.setState({showEmptyTaskAlert:!0})},n.closeAlert=function(){n.setState({showEmptyTaskAlert:!1})},n.handleTimerButtonClick=function(){var e=n.props,t=e.startTime,a=e.taskName,r=e.controlTasksFlow;t&&!a?n.openAlert():r()},n.handleInputChange=function(e){n.setState({localTaskName:e.target.value}),n.props.handleTaskNameChange(n.state.localTaskName)},n}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"componentDidMount",value:function(){this.setState({localTaskName:this.props.taskName})}},{key:"componentWillReceiveProps",value:function(e){var t=e.taskName;this.setState({localTaskName:t})}},{key:"render",value:function(){var e=this.props,t=this.state,n=this.handleTimerButtonClick,a=this.handleInputChange,c=this.closeAlert,o=e.startTime,i=t.localTaskName,s=t.showEmptyTaskAlert;return r.a.createElement(dn,null,r.a.createElement(hn,{onChange:a,placeholder:"Name of your task",value:i,inputProps:{style:{textAlign:"center"}}}),r.a.createElement(sn,{open:s,closeAlert:c}),r.a.createElement(Qt,{startTime:o}),r.a.createElement(nn,{onClick:n},o?"STOP":"START"))}}]),t}(a.Component),pn=Object(i.c)(function(e){var t=e.currentTask;return{startTime:t.startTime,taskName:t.taskName}},function(e){return Object(u.b)({controlTasksFlow:Q,handleTaskNameChange:ne},e)})(fn),dn=yt.a.div(un(),mn),hn=Object(wt.withStyles)({root:{width:"450px",fontSize:"20px",color:"".concat(mn)}})(qt.g),En=n(113),bn=n(349),kn=n(144),Tn=n.n(kn),vn=n(145),On=n.n(vn),gn=n(109),jn=n.n(gn),yn=n(146),wn=n.n(yn),xn=n(67),Sn=n(148),An=n(51);function Nn(){var e,t=function(e){return e.reduce(function(e,t){var n=t.startTime,a=t.endTime,r=An(n).hour(),c=An(a).hour();if(r===c)_n(e,r,t);else for(;r<=c;)_n(e,r,t),r++;return e},{})}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]);return e=t,Object.entries(e).map(function(e){var t=Object(En.a)(e,2),n=t[0],a=t[1];return[n,a.map(function(e){return function(e,t){var n=e.id,a=e.startTime,r=e.endTime,c=e.taskName,o=Dn(a,+t),i=Dn(r,+t).diff(o,"minutes");return{id:n,startTime:a,endTime:r,taskName:c,timeSpent:i}}(e,n)})]})}function Dn(e,t){var n=An(e);return n.get("hour")===t?n:n.get("hour")<t?n.set("hour",t).minutes(0).second(0):n.set("hour",t).add(1,"hours").minutes(0).second(0)}function _n(e,t,n){Array.isArray(e[t])?e[t].push(n):e[t]=[n]}function Cn(){var e=Object(jt.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Cn=function(){return e},e}var In=function(e){function t(){var e,n;Object(bt.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(Tt.a)(this,(e=Object(vt.a)(t)).call.apply(e,[this].concat(c)))).formBarsArray=function(e){for(var t=[],n=0;n<=e;n++)t.push(r.a.createElement(xn.a,{key:n,dataKey:n,stackId:"a",fill:B[n]}));return t},n}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,n=e.generateTasks,a=Math.max.apply(null,t.map(function(e){return e.id})),c=this.formBarsArray(a),o=Nn(t),i=o.map(function(e){var t=Object(En.a)(e,2),n=t[0],a=t[1],r=void 0===a?[]:a;return Object(qe.a)({name:An().set("hour",n).minutes(0).second(0).format("HH:mm")},r.reduce(function(e,t){var n=t.id,a=t.timeSpent;return Object(qe.a)({},e,Object(Sn.a)({},n,a))},{}))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(xn.e,{width:"100%",height:400},r.a.createElement(xn.b,{align:"center",data:i,margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(xn.c,{strokeDasharray:"3 3"}),r.a.createElement(xn.g,{dataKey:"name"}),r.a.createElement(xn.h,{type:"number",domain:[60,60]}),r.a.createElement(xn.f,null),r.a.createElement(xn.d,null),c)),r.a.createElement(Rn,null,r.a.createElement(nn,{style:{align:"center"},onClick:n},"Generate tasks")))}}]),t}(a.PureComponent),Ln=Object(i.c)(function(e){return{tasks:e.tasksList.tasks}},function(e){return Object(u.b)({generateTasks:ie},e)})(In),Rn=yt.a.div(Cn()),Kn=R;var zn=Object(wt.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.white,color:e.palette.common.gray},body:{fontSize:14,textDecoration:"none"}}})(qt.k),Mn=Object(wt.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.classes,n=e.items,a=e.showAlert,c=e.transferTaskIdToDelete,o=t.root,i=t.table;return r.a.createElement(qt.h,{className:o},r.a.createElement(qt.i,{className:i},r.a.createElement(qt.l,null,r.a.createElement(qt.m,null,r.a.createElement(zn,null,"\u2116"),r.a.createElement(zn,{align:"right"},"Task"),r.a.createElement(zn,{align:"right"},"Time start"),r.a.createElement(zn,{align:"right"},"Time end"),r.a.createElement(zn,{align:"right"},"Time spend"),r.a.createElement(zn,{align:"center"},"Info"),r.a.createElement(zn,{align:"center"},"Delete"))),r.a.createElement(qt.j,null,n.map(function(e,n){var o=e.taskName,i=e.startTime,l=e.endTime,u=e.id;return r.a.createElement(qt.m,{className:t.row,key:u},r.a.createElement(zn,{component:"th",scope:"row"},n+1),r.a.createElement(zn,{align:"right"},o),r.a.createElement(zn,{align:"right"},zt(i)),r.a.createElement(zn,{align:"right"},zt(l)),r.a.createElement(zn,{align:"right"},Kt(i,l)),r.a.createElement(zn,{align:"center"},r.a.createElement(s.b,{to:"".concat(Kn,"/").concat(u)},r.a.createElement(nn,{size:"small"},"INFO"))),r.a.createElement(zn,{align:"center"},r.a.createElement(nn,{size:"small",onClick:function(){a(),c(u)}},"DELETE")))}))))});function Wn(){var e=Object(jt.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 24px;\n"]);return Wn=function(){return e},e}var Bn=D,Fn=_,Pn=function(e){var t=e.hideAlert,n=e.confirmDeletion,a=e.open;return r.a.createElement(qt.b,{open:a},r.a.createElement(qt.f,null,r.a.createElement(Gn,null,"Delete task")),r.a.createElement(qt.d,null,r.a.createElement(qt.e,null,"Are you sure to delete this task ?")),r.a.createElement(qt.c,null,r.a.createElement(an,{data:{color:Bn},onClick:function(){t(),n()}},"Yes"),r.a.createElement(an,{data:{color:Bn},onClick:t},"No")))},Gn=yt.a.p(Wn(),Fn),Hn=function(e){function t(){var e,n;Object(bt.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Tt.a)(this,(e=Object(vt.a)(t)).call.apply(e,[this].concat(r)))).state={showDeleteTaskAlert:!1,taskToDeleteId:null},n.showAlert=function(){n.setState({showDeleteTaskAlert:!0})},n.hideAlert=function(){n.setState({showDeleteTaskAlert:!1})},n.transferTaskIdToDelete=function(e){n.setState({taskToDeleteId:e})},n.confirmDeletion=function(){n.props.deleteTask(n.state.taskToDeleteId)},n}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=this.hideAlert,a=this.confirmDeletion,c=this.transferTaskIdToDelete,o=this.showAlert,i=e.showDeleteTaskAlert,s=t.deleteTask,l=t.tasks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pn,{open:i,hideAlert:n,deleteTask:s,confirmDeletion:a}),r.a.createElement(Mn,{items:l,transferTaskIdToDelete:c,showAlert:o}))}}]),t}(a.Component),Yn=Object(i.c)(function(e){return{tasks:e.tasksList.tasks}},function(e){return Object(u.b)({deleteTask:ce},e)})(Hn),Jn=L,Xn=I,Zn=C;function qn(){var e=Vn().root,t=r.a.useState(window.location.hash.endsWith(Jn)?1:0),n=Object(En.a)(t,2),a=n[0],c=n[1];return r.a.createElement(gt.a,null,r.a.createElement(jn.a,null,r.a.createElement("div",{className:e},r.a.createElement(Tn.a,{position:"static"},r.a.createElement(On.a,{style:{background:Zn},variant:"fullWidth",value:a,onChange:function(e,t){c(t)}},r.a.createElement(Un,{label:"TASKS LOG",to:Xn}),r.a.createElement(Un,{label:"TASKS CHART",to:"/".concat(Jn),replace:!0}))),0===a&&r.a.createElement(Yn,null),1===a&&r.a.createElement(Ln,null))))}function Un(e){return r.a.createElement(wn.a,Object.assign({component:s.b},e))}var Vn=Object(bn.a)(function(){return{root:{flexGrow:1}}}),$n=function(e){function t(){return Object(bt.a)(this,t),Object(Tt.a)(this,Object(vt.a)(t).apply(this,arguments))}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(pn,null),r.a.createElement(qn,{url:e}))}}]),t}(a.Component),Qn=(n(881),I),ea=R,ta=L,na=function(e){function t(){var e,n;Object(bt.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Tt.a)(this,(e=Object(vt.a)(t)).call.apply(e,[this].concat(r)))).state={showDeleteTaskAlert:!1},n}return Object(Ot.a)(t,e),Object(kt.a)(t,[{key:"componentDidMount",value:function(){this.props.checkSerializedState()}},{key:"render",value:function(){var e=this.props.tasks;return r.a.createElement("div",null,r.a.createElement(gt.c,null,r.a.createElement(gt.a,{exact:!0,path:"/".concat(ea,"/:id"),render:function(t){return r.a.createElement(Zt,{id:+t.match.params.id,tasks:e})}}),r.a.createElement(gt.a,{path:["/".concat(ta),Qn],render:function(e){return r.a.createElement($n,e)}})))}}]),t}(r.a.Component),aa=Object(i.c)(function(e){return{tasks:e.tasksList.tasks}},function(e){return Object(u.b)({checkSerializedState:se},e)})(na);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:Et},r.a.createElement(l.a,{history:pt},r.a.createElement(s.a,null,r.a.createElement(aa,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[460,1,2]]]);
//# sourceMappingURL=main.ff189fc7.chunk.js.map