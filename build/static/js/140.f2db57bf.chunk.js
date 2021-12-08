(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[140],{3142:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(1574),c=a(1588),l=a(1558),o=a(1547),s=a(1565),i=a(1553),u=a(811),m=a(243),d=a(1552),p=a(203),f=a(1560),b=a(245),h=a(296),g=a(2),E=a(0),v=a.n(E),x=a(6),O=a(21),j=a(42),y=a(1562),N=a(144),C=a.n(N),w=a(532),k=a(62),A=a.n(k);function T(e){var t=A.a.post("/api/chat/user/data",e);return function(e){return t.then((function(t){return e({type:"[CHAT APP] UPDATE USER DATA",payload:t.data})}))}}var P="[CHAT APP] GET CHAT",S="[CHAT APP] REMOVE CHAT",D="[CHAT APP] SEND MESSAGE";function I(e){return function(t,a){var n=a().chatPanel.user.id;return A.a.get("/api/chat/get-chat",{params:{contactId:e,userId:n}}).then((function(a){return t(function(e){return{type:"[CHAT APP] SET SELECTED CONTACT ID",payload:e}}(e)),t(Object(w.h)()),t({type:P,chat:a.data.chat,userChatData:a.data.userChatData})}))}}var R=Object(d.a)((function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}}));var L=function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.chatApp.contacts.entities})),n=Object(x.d)((function(e){return e.chatApp.contacts.selectedContactId})),r=Object(x.d)((function(e){return e.chatApp.chat})),l=Object(x.d)((function(e){return e.chatApp.user})),o=R(e),s=Object(E.useRef)(null),d=Object(E.useState)(""),p=Object(O.a)(d,2),f=p[0],h=p[1];function N(e,t){return 0===t||r.dialog[t-1]&&r.dialog[t-1].who!==e.who}function w(e,t){return t===r.dialog.length-1||r.dialog[t+1]&&r.dialog[t+1].who!==e.who}return Object(E.useEffect)((function(){r&&(s.current.scrollTop=s.current.scrollHeight)}),[r]),v.a.createElement("div",{className:Object(g.default)("flex flex-col relative",e.className)},v.a.createElement(j.a,{ref:s,className:"flex flex-1 flex-col overflow-y-auto"},r&&r.dialog.length>0?v.a.createElement("div",{className:"flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40"},r.dialog.map((function(e,t){var s=e.who===l.id?l:a.find((function(t){return t.id===e.who}));return v.a.createElement("div",{key:e.time,className:Object(g.default)(o.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4",{me:e.who===l.id},{contact:e.who!==l.id},{"first-of-group":N(e,t)},{"last-of-group":w(e,t)},t+1===r.dialog.length&&"pb-96")},function(e,t){return e.who===n&&(r.dialog[t+1]&&r.dialog[t+1].who!==n||!r.dialog[t+1])}(e,t)&&v.a.createElement(c.a,{className:"avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32",src:s.avatar}),v.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full"},v.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},e.message),v.a.createElement(b.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},C()(e.time).format("MMMM Do YYYY, h:mm:ss a"))))}))):v.a.createElement("div",{className:"flex flex-col flex-1"},v.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},v.a.createElement(i.a,{className:"text-128",color:"disabled"},"chat")),v.a.createElement(b.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),r&&v.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==f&&t(function(e,t,a){var n={who:a,message:e,time:new Date},r=A.a.post("/api/chat/send-message",{chatId:t,message:n});return function(e){return r.then((function(t){return e({type:D,message:t.data.message,userChatData:t.data.userChatData})}))}}(f,r.id,l.id)).then((function(){h("")}))},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},v.a.createElement(m.a,{className:"flex items-center relative rounded-24",elevation:1},v.a.createElement(y.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:o.bootstrapFormLabel},onChange:function(e){h(e.target.value)},value:f}),v.a.createElement(u.a,{className:"absolute ltr:right-0 rtl:left-0 top-0",type:"submit"},v.a.createElement(i.a,{className:"text-24",color:"action"},"send")))))},B=a(11),H=a(5),M=a(204),z=a(25),U=a(751),W=a(1515),G=a(1581),_=a(1561),F=a(536),Y=a(1555),K=a(1516);var J=function(e){switch(e.status){case"online":return v.a.createElement(i.a,{className:"block text-16 text-green bg-white rounded-full"},"check_circle");case"away":return v.a.createElement(i.a,{className:"block text-16 text-white bg-yellow-700 rounded-full"},"access_time");case"do-not-disturb":return v.a.createElement(i.a,{className:"block text-16 text-red bg-white rounded-full"},"remove_circle_outline");case"offline":return v.a.createElement(i.a,{className:"block text-16 text-grey-700 bg-white rounded-full"},"not_interested");default:return null}},V=Object(d.a)((function(e){return{contactListItem:{borderBottom:"1px solid ".concat(e.palette.divider),"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));var q=function(e){var t=V(e);return v.a.createElement(K.a,{button:!0,className:Object(g.default)(t.contactListItem,"px-16 py-12 min-h-92",{active:e.selectedContactId===e.contact.id}),onClick:function(){return e.onContactClick(e.contact.id)}},v.a.createElement("div",{className:"relative"},v.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},v.a.createElement(J,{status:e.contact.status})),v.a.createElement(c.a,{src:e.contact.avatar,alt:e.contact.name},e.contact.avatar&&""!==e.contact.avatar?"":e.contact.name[0])),v.a.createElement(_.a,{classes:{root:"min-w-px px-16",secondary:"truncate"},primary:e.contact.name,secondary:e.contact.mood}),e.contact.chatId&&v.a.createElement("div",{className:"flex flex-col justify-center items-end"},e.contact.lastMessageTime&&v.a.createElement(b.a,{className:"whitespace-no-wrap mb-8"},C()(e.contact.lastMessageTime).format("ll")),e.contact.unread&&v.a.createElement("div",{className:Object(g.default)(t.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center")},e.contact.unread)))},Q=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var X=function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.chatApp.contacts.entities})),n=Object(x.d)((function(e){return e.chatApp.user})),l=Object(E.useState)(""),o=Object(O.a)(l,2),s=o[0],d=o[1],p=Object(E.useState)(null),h=Object(O.a)(p,2),g=h[0],y=h[1],N=Object(E.useState)(null),C=Object(O.a)(N,2),k=C[0],A=C[1];function P(e){A(null)}function S(e){e.preventDefault(),e.stopPropagation(),y(e.currentTarget)}function D(e){d(e.target.value)}return v.a.createElement("div",{className:"flex flex-col flex-auto h-full"},v.a.createElement(r.a,{position:"static",color:"default",elevation:1,className:""},v.a.createElement(f.a,{className:"flex justify-between items-center px-4"},n&&v.a.createElement("div",{className:"relative w-40 h-40 p-0 mx-12 cursor-pointer",onClick:function(){return t(w.l())},onKeyDown:function(){return t(w.l())},role:"button",tabIndex:0},v.a.createElement(c.a,{src:n.avatar,alt:n.name,className:"w-40 h-40"},n.avatar&&""!==n.avatar?"":n.name[0]),v.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10 cursor-pointer","aria-owns":g?"switch-menu":null,"aria-haspopup":"true",onClick:S,onKeyDown:S,role:"button",tabIndex:0},v.a.createElement(J,{status:n.status})),v.a.createElement(F.a,{id:"status-switch",anchorEl:g,open:Boolean(g),onClose:function(e){e.preventDefault(),e.stopPropagation(),y(null)}},Q.map((function(e){return v.a.createElement(Y.a,{onClick:function(a){return function(e,a){e.preventDefault(),e.stopPropagation(),t(T(Object(H.a)(Object(H.a)({},n),{},{status:a}))),y(null)}(a,e.value)},key:e.value},v.a.createElement(G.a,{className:"min-w-40"},v.a.createElement(J,{status:e.value})),v.a.createElement(_.a,{primary:e.title}))})))),v.a.createElement("div",null,v.a.createElement(u.a,{"aria-owns":k?"chats-more-menu":null,"aria-haspopup":"true",onClick:function(e){A(e.currentTarget)}},v.a.createElement(i.a,null,"more_vert")),v.a.createElement(F.a,{id:"chats-more-menu",anchorEl:k,open:Boolean(k),onClose:P},v.a.createElement(Y.a,{onClick:P},"Profile"),v.a.createElement(Y.a,{onClick:P},"Logout")))),Object(E.useMemo)((function(){return v.a.createElement(f.a,{className:"px-16"},v.a.createElement(m.a,{className:"flex p-4 items-center w-full px-8 py-4 rounded-8",elevation:1},v.a.createElement(i.a,{color:"action"},"search"),v.a.createElement(U.a,{placeholder:"Search or start new chat",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:s,inputProps:{"aria-label":"Search"},onChange:D})))}),[s])),v.a.createElement(j.a,{className:"overflow-y-auto flex-1"},v.a.createElement(W.a,{className:"w-full"},Object(E.useMemo)((function(){function e(e,t){return 0===t.length?e:z.a.filterArrayByString(e,t)}var r=a.length>0&&n&&n.chatList?n.chatList.map((function(e){return Object(H.a)(Object(H.a)({},e),a.find((function(t){return t.id===e.contactId})))})):[],c=e(Object(B.a)(a),s),l=e(Object(B.a)(r),s);return v.a.createElement(v.a.Fragment,null,v.a.createElement(M.a,{enter:{animation:"transition.expandIn"},className:"flex flex-col flex-shrink-0"},l.length>0&&v.a.createElement(b.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Chats"),l.map((function(e){return v.a.createElement(q,{key:e.id,contact:e,onContactClick:function(e){return t(I(e))}})})),c.length>0&&v.a.createElement(b.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Contacts"),c.map((function(e){return v.a.createElement(q,{key:e.id,contact:e,onContactClick:function(e){return t(I(e))}})}))))}),[a,n,s,t]))))};var Z=function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.chatApp.contacts.entities})),n=Object(x.d)((function(e){return e.chatApp.contacts.selectedContactId})),l=a.find((function(e){return e.id===n}));return l?v.a.createElement("div",{className:"flex flex-col flex-auto h-full"},v.a.createElement(r.a,{position:"static",color:"primary",elevation:1},v.a.createElement(f.a,{className:"flex justify-between items-center px-4"},v.a.createElement(b.a,{className:"px-12",color:"inherit",variant:"subtitle1"},"Contact Info"),v.a.createElement(u.a,{onClick:function(){return t(w.g())},color:"inherit"},v.a.createElement(i.a,null,"close"))),v.a.createElement(f.a,{className:"flex flex-col justify-center items-center p-24"},v.a.createElement(c.a,{src:l.avatar,alt:l.name,className:"w-96 h-96"},l.avatar&&""!==l.avatar?"":l.name[0]),v.a.createElement(b.a,{color:"inherit",className:"mt-16",variant:"h6"},l.name))),v.a.createElement(j.a,{className:"overflow-y-auto flex-1 p-24"},v.a.createElement(y.a,{label:"Mood",className:"w-full",value:l.mood,margin:"normal",disabled:!0,multiline:!0}))):null},$=a(73),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(H.a)({},t.chat);case S:return null;case D:return Object(H.a)(Object(H.a)({},e),{},{dialog:[].concat(Object(B.a)(e.dialog),[t.message])});default:return e}},te={entities:[],selectedContactId:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CHAT APP] GET CONTACTS":return Object(H.a)(Object(H.a)({},e),{},{entities:Object(B.a)(t.payload)});case"[CHAT APP] SET SELECTED CONTACT ID":return Object(H.a)(Object(H.a)({},e),{},{selectedContactId:t.payload});case"[CHAT APP] REMOVE SELECTED CONTACT ID":return Object(H.a)(Object(H.a)({},e),{},{selectedContactId:null});default:return e}},ne={mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.e:return Object(H.a)(Object(H.a)({},e),{},{mobileChatsSidebarOpen:!0});case w.b:return Object(H.a)(Object(H.a)({},e),{},{mobileChatsSidebarOpen:!1});case w.f:return Object(H.a)(Object(H.a)({},e),{},{userSidebarOpen:!0});case w.c:return Object(H.a)(Object(H.a)({},e),{},{userSidebarOpen:!1});case w.d:return Object(H.a)(Object(H.a)({},e),{},{contactSidebarOpen:!0});case w.a:return Object(H.a)(Object(H.a)({},e),{},{contactSidebarOpen:!1});default:return e}},ce=a(623),le=a.n(ce);function oe(e,t){var a=le.a.merge({},e),n=a.chatList.find((function(e){return e.contactId===t.userChatData.contactId}));return a.chatList=n?a.chatList.map((function(e){return e.contactId===t.userChatData.contactId?t.userChatData:e})):[t.userChatData].concat(Object(B.a)(a.chatList)),a}var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CHAT APP] GET USER DATA":case"[CHAT APP] UPDATE USER DATA":return Object(H.a)({},t.payload);case P:case D:return oe(e,t);default:return e}},ie=Object($.d)({sidebars:re,user:se,contacts:ae,chat:ee}),ue=a(109),me=a(812),de=a(1557),pe=a(1517),fe=a(1585),be=a(1556),he=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var ge=function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.chatApp.user})),n=Object(ue.c)(!!a&&Object(H.a)({},a)),l=n.form,o=n.handleChange,s=Object(ue.a)((function(e){t(T(e))}),500);return Object(ue.e)((function(){s(l)}),[l,s]),l?v.a.createElement("div",{className:"flex flex-col flex-auto h-full"},v.a.createElement(r.a,{position:"static",color:"primary",elevation:1},v.a.createElement(f.a,{className:"flex justify-between items-center px-4"},v.a.createElement(b.a,{className:"px-12",color:"inherit",variant:"subtitle1"},"User Info"),v.a.createElement(u.a,{onClick:function(){return t(w.i())},color:"inherit"},v.a.createElement(i.a,null,"close"))),v.a.createElement(f.a,{className:"flex flex-col justify-center items-center p-24"},v.a.createElement(c.a,{src:a.avatar,alt:a.name,className:"w-96 h-96"},a.avatar&&""!==a.avatar?"":a.name[0]),v.a.createElement(b.a,{color:"inherit",className:"mt-16",variant:"h6"},a.name))),v.a.createElement(j.a,{className:"overflow-y-auto flex-1 p-24"},v.a.createElement("form",null,v.a.createElement(me.a,{component:"fieldset",className:"w-full mb-16"},v.a.createElement(y.a,{label:"Mood",name:"mood",className:"w-full",value:l.mood,margin:"normal",multiline:!0,onChange:o})),v.a.createElement(me.a,{component:"fieldset",className:"w-full mb-16"},v.a.createElement(pe.a,{component:"legend"},"Status"),v.a.createElement(be.a,{"aria-label":"Status",name:"status",className:"",value:l.status,onChange:o},he.map((function(e){return v.a.createElement(de.a,{key:e.value,value:e.value,control:v.a.createElement(fe.a,null),label:v.a.createElement("div",{className:"flex items-center"},v.a.createElement(J,{status:e.value}),v.a.createElement("span",{className:"mx-8"},e.title))})}))))))):null},Ee=Object(d.a)((function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(n.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(n.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,minHeight:0,overflow:"hidden"},drawerPaper:Object(n.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(p.fade)(e.palette.background.paper,.8)," 0,").concat(Object(p.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(p.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}}));t.default=Object(h.a)("chatApp",ie)((function(e){var t=Object(x.c)(),a=Object(x.d)((function(e){return e.chatApp.chat})),n=Object(x.d)((function(e){return e.chatApp.contacts.entities})),d=Object(x.d)((function(e){return e.chatApp.contacts.selectedContactId})),p=Object(x.d)((function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen})),h=Object(x.d)((function(e){return e.chatApp.sidebars.userSidebarOpen})),O=Object(x.d)((function(e){return e.chatApp.sidebars.contactSidebarOpen})),j=Ee(e),y=n.find((function(e){return e.id===d}));return Object(E.useEffect)((function(){t(function(){var e=A.a.get("/api/chat/user");return function(t){return e.then((function(e){return t({type:"[CHAT APP] GET USER DATA",payload:e.data})}))}}()),t(function(){var e=A.a.get("/api/chat/contacts");return function(t){return e.then((function(e){return t({type:"[CHAT APP] GET CONTACTS",payload:e.data})}))}}())}),[t]),v.a.createElement("div",{className:Object(g.default)(j.root)},v.a.createElement("div",{className:j.topBg}),v.a.createElement("div",{className:Object(g.default)(j.contentCardWrapper,"container")},v.a.createElement("div",{className:j.contentCard},v.a.createElement(s.a,{mdUp:!0},v.a.createElement(o.a,{className:"h-full absolute z-20",variant:"temporary",anchor:"left",open:p,onClose:function(){return t(w.h())},classes:{paper:Object(g.default)(j.drawerPaper,"absolute ltr:left-0 rtl:right-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},v.a.createElement(X,null))),v.a.createElement(s.a,{smDown:!0},v.a.createElement(o.a,{className:"h-full z-20",variant:"permanent",open:!0,classes:{paper:j.drawerPaper}},v.a.createElement(X,null))),v.a.createElement(o.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:h,onClose:function(){return t(w.i())},classes:{paper:Object(g.default)(j.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!1,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},v.a.createElement(ge,null)),v.a.createElement("main",{className:Object(g.default)(j.contentWrapper,"z-10")},a?v.a.createElement(v.a.Fragment,null,v.a.createElement(r.a,{className:"w-full",position:"static",elevation:1},v.a.createElement(f.a,{className:"px-16"},v.a.createElement(u.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return t(w.k())},className:"flex md:hidden"},v.a.createElement(i.a,null,"chat")),v.a.createElement("div",{className:"flex items-center cursor-pointer",onClick:function(){return t(w.j())},onKeyDown:function(){return t(w.j())},role:"button",tabIndex:0},v.a.createElement("div",{className:"relative mx-8"},v.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},v.a.createElement(J,{status:y.status})),v.a.createElement(c.a,{src:y.avatar,alt:y.name},y.avatar&&""!==y.avatar?"":y.name[0])),v.a.createElement(b.a,{color:"inherit",className:"text-18 font-600 px-4"},y.name)))),v.a.createElement("div",{className:j.content},v.a.createElement(L,{className:"flex flex-1 z-10"}))):v.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center p-24"},v.a.createElement(m.a,{className:"rounded-full p-48"},v.a.createElement(i.a,{className:"block text-64",color:"secondary"},"chat")),v.a.createElement(b.a,{variant:"h6",className:"my-24"},"Chat App"),v.a.createElement(b.a,{className:"hidden md:flex px-16 pb-24 mt-24 text-center",color:"textSecondary"},"Select a contact to start a conversation!.."),v.a.createElement(l.a,{variant:"outlined",color:"primary",className:"flex md:hidden normal-case",onClick:function(){return t(w.k())}},"Select a contact to start a conversation!.."))),v.a.createElement(o.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"right",open:O,onClose:function(){return t(w.g())},classes:{paper:Object(g.default)(j.drawerPaper,"absolute ltr:right-0 rtl:left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},v.a.createElement(Z,null)))))}))}}]);