(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[31],{2042:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(9),i=n(70),c=n(6),r=n(2018),o=n(7),s=n(41),A=n(0),l=["children","sx"],b=Object(o.a)("span")((function(e){var t=e.theme;return Object(c.a)({},t.breakpoints.up("sm"),{top:-7,zIndex:1,width:12,right:20,height:12,content:"''",position:"absolute",borderRadius:"0 0 4px 0",transform:"rotate(-135deg)",background:t.palette.background.paper,borderRight:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12)),borderBottom:"solid 1px ".concat(Object(s.a)(t.palette.grey[500],.12))})}));function j(e){var t=e.children,n=e.sx,c=Object(i.a)(e,l);return Object(A.jsxs)(r.a,Object(a.a)(Object(a.a)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:Object(a.a)({mt:1.5,ml:.5,overflow:"inherit",boxShadow:function(e){return e.customShadows.z20},border:function(e){return"solid 1px ".concat(e.palette.grey[5008])},width:200},n)}},c),{},{children:[Object(A.jsx)(b,{className:"arrow"}),t]}))}},2063:function(e,t,n){"use strict";t.a=n.p+"static/media/doneelogo.c9e2e609.svg"},2114:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(9),i=n(8),c=n(10),r=n.n(c),o=n(18),s=n(1),A=n(60),l=n(33),b=n(2156),j=n.n(b),d=n(2157),u=n.n(d),h=n(2158),p=n.n(h),O=n(2159),x=n.n(O),g=n(41),f=n(2368),m=n(2369),w=n(190),v=n(2005),B=n(66),C=n(126),I=n(2025),y=n(2357),U=n(2001),R=n(2026),k=n(2370),D=n(234),E=n(69),M=n(2042),J=n(81),S=n(38),F=n(67),N=n(25),T=n(1957),Q=n(0);function G(e){var t=e.notification,n=e.handleRefetch,a=e.handleClose,i=t.id,c=t.text,s=t.type,A=t.identifier,b=t.from_user,j=(t.to_user,t.created_at),d=t.is_read,h=Object(F.a)(),O=Object(N.g)(),g=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.put("/live-notification-read-update/".concat(i,"/"),{is_read:!0}).then((function(e){switch(a(),s){case"PROFILE_FOLLOW":O("../profiledonorother",{state:{goalID:A}});break;case"DONEE_INVITATION_ACCEPT":O("../profiledetailother",{state:{goalID:parseInt(A)}});break;case"GOAL_LIKE":case"DONATION":O("../viewgoal/".concat(A))}200===e.status&&n()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(f.a,{onClick:g,disableGutters:!0,sx:{py:1.5,px:2.5,mt:"1px",backgroundColor:!1===d?"#fcfcfc":"white"},children:[Object(Q.jsx)(m.a,{children:Object(Q.jsx)(w.a,{sx:{bgcolor:"background.neutral"},src:b.image})}),Object(Q.jsx)(v.a,{primary:c,secondary:Object(Q.jsxs)(B.a,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.disabled"},children:[Object(Q.jsx)(C.a,{component:l.a,icon:u.a,sx:{mr:.5,width:16,height:16}}),Object(T.a)(new Date(j))]})}),Object(Q.jsx)(l.a,{icon:d?p.a:x.a})]},"".concat(i))}function L(e){var t=e.iconColor,n=Object(F.a)(),c=Object(s.useRef)(null),b=Object(s.useRef)(null),d=Object(s.useState)(!1),u=Object(i.a)(d,2),h=u[0],p=u[1],O=Object(s.useState)(!0),x=Object(i.a)(O,2),f=x[0],m=x[1],w=Object(s.useState)(0),v=Object(i.a)(w,2),N=(v[0],v[1],Object(s.useState)()),T=Object(i.a)(N,2),L=T[0],V=T[1],Y=Object(S.c)((function(e){return e.AuthReducer.userInfo.user_id})),X=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/live-notification-list");case 2:t=e.sent,V(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){X()}),[f]);var W=function(){return m(!f)};Object(s.useEffect)((function(){b.current=new WebSocket(J.q),b.current.onopen=function(){},b.current.onclose=function(){},b.current.onmessage=function(e){JSON.parse(e.data).to_user===Y&&W()};var e=b.current;return function(){e.close()}}),[f]);var H=function(){p(!1)};return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(I.a,{ref:c,size:"large",color:h?"primary":"default",onClick:function(){p(!0)},sx:Object(a.a)({color:t},h&&{bgcolor:function(e){return Object(g.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(Q.jsx)(y.a,{badgeContent:L?L.unread_count:0,color:"error",children:Object(Q.jsx)(l.a,{icon:j.a,width:20,height:20})})}),Object(Q.jsxs)(M.a,{open:h,onClose:H,anchorEl:c.current,sx:{width:360},children:[Object(Q.jsx)(C.a,{sx:{display:"flex",alignItems:"center",py:2,px:2.5},children:Object(Q.jsx)(C.a,{sx:{flexGrow:1},children:Object(Q.jsx)(B.a,{variant:"subtitle1",children:"Notifications"})})}),Object(Q.jsx)(U.a,{}),Object(Q.jsx)(E.a,{sx:{maxHeight:{xs:340,sm:"auto"}},children:Object(Q.jsx)(R.a,{disablePadding:!0,subheader:Object(Q.jsx)(k.a,{disableSticky:!0,sx:{py:1,px:2.5,typography:"overline"},children:"New"}),children:L&&L.list.length>20?L.list.slice(0,21).map((function(e){return Object(Q.jsx)(G,{notification:e,handleRefetch:W,handleClose:H},e.id)})):L&&L.list.map((function(e){return Object(Q.jsx)(G,{notification:e,handleRefetch:W,handleClose:H},e.id)}))})}),Object(Q.jsx)(U.a,{}),Object(Q.jsx)(C.a,{sx:{p:1},children:Object(Q.jsx)(D.a,{fullWidth:!0,disableRipple:!0,component:A.b,to:"#",children:"View All"})})]})]})}},2344:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ye}));var a=n(10),i=n.n(a),c=n(18),r=n(8),o=n(6),s=n(1),A=n(25),l=n(7),b=n(33),j=n(2309),d=n.n(j),u=n(2318),h=n(2023),p=n(126),O=n(188),x=n(2025),g=n(15),f=n.n(g),m=n(2336);function w(e){var t=e.width,n=e.children,a=t.substring(0,2),i=Object(m.a)((function(e){return e.breakpoints.up(a)})),c=Object(m.a)((function(e){return e.breakpoints.down(a)}));return t.includes("Down")?c?null:n:t.includes("Up")?i?null:n:null}w.propTypes={children:f.a.node,width:f.a.oneOf(["xsDown","smDown","mdDown","lgDown","xlDown","xsUp","smUp","mdUp","lgUp","xlUp"]).isRequired};var v=n(9),B=n(2310),C=n.n(B),I=n(2311),y=n.n(I),U=n(60),R=n(41),k=n(190),D=n(66),E=n(2001),M=n(2027),J=n(234),S=n(38),F=n(34),N=n(128),T=n(237),Q=n(238),G=n(2042),L=n(351),V=n(92),Y=n(127),X=n(67),W=n(0),H=[{label:"Home",icon:C.a,linkTo:"/"},{label:"Profile",icon:y.a,linkTo:"/profile"}];function Z(){var e=Object(A.g)(),t=Object(S.b)(),n=Object(s.useRef)(null),a=Object(s.useState)(!1),o=Object(r.a)(a,2),l=o[0],j=o[1],d=Object(S.c)((function(e){return e.AuthReducer.userInfo.access})),u=Object(X.a)(),h=Object(F.useQuery)(["userInfo",d],Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/user-detail/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),O=h.data,g=h.isLoading,f=h.isError,m=h.error,w=(h.isSuccess,function(){j(!1)});return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(L.a,{children:!1===g?Object(W.jsx)("div",{children:f?Object(W.jsx)(V.a,{error:m||new Error("Network response was not ok.")}):Object(W.jsxs)("div",{children:[Object(W.jsx)(x.a,{ref:n,onClick:function(){j(!0)},sx:Object(v.a)({padding:0,width:44,height:44},l&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return Object(R.a)(e.palette.grey[900],.72)}}}),children:Object(W.jsx)(k.a,{src:null===O||void 0===O?void 0:O.image,alt:"photoURL"})}),Object(W.jsxs)(G.a,{open:l,onClose:w,anchorEl:n.current,sx:{width:220},children:[Object(W.jsxs)(p.a,{sx:{my:1.5,px:2.5},children:[Object(W.jsx)(D.a,{variant:"subtitle1",noWrap:!0,children:null===O||void 0===O?void 0:O.full_name}),Object(W.jsxs)(D.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:["@",null===O||void 0===O?void 0:O.username]})]}),Object(W.jsx)(E.a,{sx:{my:1}}),H.map((function(e){return Object(W.jsxs)(M.a,{to:e.linkTo,component:U.b,onClick:w,sx:{color:"#6C757D",fontSize:20,typography:"body2",py:1,px:2.5},children:[Object(W.jsx)(p.a,{component:b.a,icon:e.icon,sx:{color:"#CED4DA",mr:2,width:24,height:24}}),e.label]},e.label)})),Object(W.jsx)(p.a,{sx:{p:2,pt:1.5},children:Object(W.jsx)(J.a,{onClick:function(){var n=N.f;t(Object(T.a)(!1)),t(Object(Q.a)(n)),e("../")},fullWidth:!0,color:"inherit",variant:"outlined",children:"Logout"})})]})]})}):Object(W.jsx)(Y.a,{})})})}var z=n(2114),P=n(2063),q=Object(l.a)(u.a)((function(e){e.theme;return{boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",background:"linear-gradient(90deg, #0077b6 23.6%, #32b2ed 100%)",width:"100%",height:60,justifyContent:"center"}})),K=Object(l.a)(h.a)((function(e){var t=e.theme;return Object(o.a)({minHeight:64},t.breakpoints.up("lg"),{minHeight:60,padding:t.spacing(0,3)})}));function _(e){var t=e.onOpenSidebar,n=Object(A.g)();return Object(W.jsx)(q,{children:Object(W.jsxs)(K,{children:[Object(W.jsx)("img",{style:{cursor:"pointer"},src:P.a,alt:"logo",className:"navIcons",onClick:function(){return n("../")}}),Object(W.jsx)(p.a,{sx:{flexGrow:1}}),Object(W.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1.5},children:[Object(W.jsx)(Z,{}),Object(W.jsx)(z.a,{iconColor:"white"}),Object(W.jsx)(w,{width:"lgUp",children:Object(W.jsx)(x.a,{onClick:t,sx:{mr:1,color:"white"},children:Object(W.jsx)(b.a,{icon:d.a})})})]})]})})}var $=n(2363),ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMISURBVHgB7VdBUhpBFH0NxHLJDeQGgYWaVBbiCaInEDcay0X0BOAJJIuUIRvxBPEGwioJLoIncHICZ5WyAszP+wPoTA/TIKZipZJXRUFP/+n/+vfv9z8Gc+D0m+R/9FDIGOQDgb+/Yrou+5PPUkAOBf29mEN3u2R8zAiDB+DkUspZoCqCcmxC4PHzbveFqdvvNDpyza+C5fU86ONw76Xx8LsINr5KjdZVpxGJBgHWo45POlLJMOgp9ke7q6aGxxJ0Okku2N1ZMaXoM0bxhl95TCa5SZLnSEEGM4BG1fiaaPFhhWTKHNStuWLjUqoW62bq4ganmtNp0zlMgeYdvRYiDLw3q2Y9YtLm8bfp6NOdz2GOHkVItPneQYqL/O0titBNT8DUCNLZ8+hYDBIXYXRE/v0eQod30JsOl49s3MeDCD41phKUAa6iY0b0INS1CMIbHrkEjGBMF1Uv4SaRqqNTc5CS0frYkZZgpH2GAp3BxQc+MwaeXhRbF7mJZmwc4LWkOWBO76yaNuYlqOj1cJh7hguMo0SSJFbRUEnSYZ05eTYearTvNpeEr7oJB2bKwf1XptvvhQt5TsMhucOYA8oR7EoytPV0zWnVZOZLoiSDAdYDYFvikuBx3NSjtskpmAZLuM8xP3xXUFtYQEnXxH/865ipWXjfkSLbrDX+LBrVNIlXCpUbGVaSLgJcMb9arp6v8UUOkMUS5ckbsFS6+slUglqDqWdbNNgA3EI7cWGDlgRoUkbak24qxb1K77VwQKKi9gZne8um5SQ4akqPxYrSY6C3nBXpyCbKAnCR0EgJpaw21tIYQe6qySdbDl96bJ4kS5MKt0a56GDp9fvYjEqLingmi+sU+1BTTWQ3dTp+m7QLNe980GOuTNEt7etIYo3R3xhFpmCZ+NTSUjSSE6MYIWnGC//s4caa7nKyOTDxZuEhGOVwJf6QkVm+F3Q2t8eOXnFYi9kw5hlqG0XurJ5JrfLzgdG1L5yzV/z7+8GnRnjEi4vw2VKV8QfAS/I9Nu7jLJud/H9E8QtUjEE0eu/UKwAAAABJRU5ErkJggg==",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7VhNUhNBGH09k0R3xhvEE5gsRC0XhhOAJzBsRHQhnoB4gsDCQtgkOYG5QcLCUmHBcIMcATeURZJpXw/JkBlmknT4iFDFq6Lo6f7S/abn9ffTwB2Fwg2gfqzzZz0UHIX8wwy8tZI6hTBEiX/9oYvZHGpaoxxZRKEz6GNt46XqQghixPd+61XOVmczn2Jy6g/whuQ7EIAI8d2fuuC4aLNZGOseyWP8RU5zWTyRkM5E4rtHuuwAKzQqTrLTPgmrCGlvfUmVTGP/ULc1ItLxKJ2JxH2Nrh7gyyRpZdIGuIsVRwefHhpTEH99Lhw2DcnoBEWtp0+nXFQov8r6c9VMs7kC4xXOezhG9NPbQaEV/NdYxfxIlVbijv/to+jE9MpN8mADHWq7Awuoi3ULw8f82VnQvrJ2BjNxQOv9klrDAvDtUNdJvjJ6zmbxKMluJuI2CGR2zsPo4GnQ4eOEOm1BGKLE937pTZ6NLX7vfHggVeDjuwONnQ8v1DaE4EAIJFflbDUkBSC6SpdjgY0QRIibAERyW1MNaUPbMgQgQtzJ4NP4M9XRoBt7zBD/hJJpxmxXIAAR4vHI2uthx/heE/l8H9XxMQafIgQgQlwjGsId51LnTjZGVEMkxRXxKtzFDnc9jJBMuL7TH7eCnMS/9MkGtBNxjSLEH2TRpBvcxFjEC4JIPCdhDpOWe9hCRCpGzzyIy2x2U41ImnpfhhDE/Lg5iPQkJZ/vgWhu4ZF0NZdDSbICEo2cwyyuMfy7UYgSD4tkukdqPEiOKPM/PJFd6aL52sRHVZLJu3lAC/EJg4Sf7DlmqiGPUvJYXDQ3nl2v9pybuCHsAlvxin4S9MWXKCodVDdddlXn9TLWh9PIgYs2WNa1bUhfgQrq1AbnqmEOWBNnOK9xwbfxfm0qHYVtXgKtuhkUTK7Cgln1eygpUyxzDElVlMImJVSHJaykYuTBXa4gSrjBt2+Q5EHSbz6+UiOywbjJJF2XEhurckyb/U2bOxcr4iT4Ot5nIqRZeO9w6l1AiCRLZo1m7g5m53I3cWeJW0nF7+OAn7SKG4CZ28beivjw8HRwC5BI3NXBBVAIBozy/pFuYwGYtUJKJM5LmC5DtMkrLioZBgtOWMCiwVSY9+0nSUOJh3OYX3/G/0c1LTGbfM08DBY+FrvbLPk8yrP1LiWo3eMe97jF+Af7ZUHb8GTDwQAAAABJRU5ErkJggg==",ne=[{title:"dashboard",path:"/dashboard/app",iconType:"image",icon:"data:image/png;base64,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"},{title:"wallet",path:"/dashboard/wallet",iconType:"image",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgB7Zg/ctNAGMXfZ8sZOswJ0A2AImEYGucE4QaxCwgMBc4JICcgXQgUNieAnCBOBSRFzAkwNxAdY8le3mbk4FEkS+t41/aMfo28/zTPq7ff7n5ASUnJSiJ5HTqXqv43wkO4JMLg1RMZzOqSKVwLDkO8U8AbLAOFw73Hsp/VXMlqWKpojaB9/EO9z25O4eib8itV/MIKsFHDvdYjCZL1XmpvDz4/1X8UBkrQgwM4kw0+/EmZX/4BH2fJfh4KoEW/3JIWHPDhXHUovpnXr4I1ZW2FF7LKvBxdqAZnZkcp1IuOiT2eizXhDGVdLurdWMzc8E93GeW2kxuSFascf1dtqt3FIhD41So6yWorwqW6INExjMwNvZNP11mxSsLTAa3yDIYwBLep+HrcSOGuftekbHVxxgQvtuTMdBDjeXPW2ijDYVG0V4cR3mobiGAQDrH/+qn0YYjzGR+GuKToNn/6XAsNr4ZTfaiDIU6FfzxX+kLiJ6rrjEI7MMSp8NEIQVo9LVN4Z53gVLje/RgpeonqYBzhMwxx7nHOeoviu/zZ58bSi0Js590v03AeVWKRtz7bl3F8Fvp4C0MqiuFyRrsL4T5FnMKQpOiq4M902Y5V5GrxLQxuVF+TN30rwvc25YBTZhziUtEZhjFuJIasWYVZqOanC/VlzLP0HFc3/7osaKaFS6sef74pJ3ycmIwp0xOrSiGrCI+f+hPCAbdKT9zx0Oe5efptfhHf2YBnm99p9alWuYqZgkMsG+bIsw5gmR7f8HCwVPE5if3cJJO+VjEhcx8OqdXwMy0nXlJSsgb8A+fxukR7NsQJAAAAAElFTkSuQmCC"},{title:"goals",path:"/dashboard/goals",iconType:"image",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANwSURBVHgBzVlNUhNBFP66J4nsDCdwOIGxykJdEU5AbgDZiLoBTgCeQFxYiGVV4ATqCQgLyxKqBE9gOIHjDpLMPN+bhGGm5ydgmel8Vameed3T80336+/16wAziA8ndPbxBz3IqqtghtA5o3q/jw4BDUfhT1YbjRnBu6/UGAxwBIUW33rtR8rLamd9hPdOqekQVnlU12hs4/I8r/2tCEunOkCT5+Mh99Zgk2s0kdHwlEKPRtc9uQ8IF5q41LgZLYKrgPt81eCyKfdkvpDg4V8Ih18PbBNxxyrsKA91+XE7N24M/Y2f04Q7Qek7jrA4P/vTDhPYuOO7/gsUoZtXVxFyVwOsciNv/Yk6FKM4v6xUWILv4yKvTg+GOOJZ2+WpO9g/pe3QqmAT3stnqpdXqYliI0nYHBX5UzJtFCmEQKskubpEmGCIL7AEVppuUT2rFT7HDcMhWnNz4Vd6sICiBSfQ5ONnwgC0JMqoCVMzLVSrST4mwuW1f0K/MdJSgVerYiFUDlmMJULWzotFtVzURo8bxt2ifnmJBo986X7M/jtxVq8JHyeMFayMpaWHMhGgtfeN3KImIeG5anLh8Re0wlIZ9mlDwdUaR0WkoxDBm2aJbs3re6cCd3CFBe3wls8C/ABbr56q1BqK9sNk6J9teXM03rw/oY452hFhDhYJP2a3aNqUNwG/e01cZP87rcZsNzDlbX1RzfNXbpQtb5mgUAB2koRP6VO04BiBj2XHgce+fYYZQSKnIyMssrwtPV9U1vw4BcJukrARLBSNVMMILFbArnDA+/Wt1M6X/fgXYjkbh+n5ywFa/GUd2AJhh8m+lst0mm8Ei76PlVRgKQmyt5BE9ZqsIJXTyV6Yg8Vm9BBny+3H6pADSzceWBKdyh6AfypIh3Kuq/uSKasoSXVD+6is40aV5FlvvIE/v1fFYdbZRIqwBIv+IFxk9XHHohrtMLBQRNiTBVCr4W3egce0kJm9mWFa5E1KCdMyorw420V51zSReVRlZiEib0xQRnhX9qu2yIZcsox58iayAsvITeiz5K1sf81C/umlIW9XQyxhBlBE+Dh5m5Y0G8glXHOMdDu2KbKJXMLjvXA3ZnLzjvHLROEJfFYWAssoJGxmIRr2CU88p8w6ZLEpbxP/lMk6ZIFF3IZw6pAFFjGRcO4hiyX8Bdj/VzkYak5BAAAAAElFTkSuQmCC"},{title:"donees",path:"/dashboard/donee",iconType:"image",icon:ee},{title:"donors",path:"/dashboard/donors",iconType:"image",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMDSURBVHgB7ZlPUhNBFMa/zh/c5gjjCQgLFcuF4QTKCUg2guWCcIKEExAWFhU3hBPADQgLS40L9QTmCLMGZtrvTYVUJJnJvJmeIov8qqgM6dfd3/S/1+/FICNn36xXquAQFk3+W+Ofb4ErG+D442sz/s/2p20Yiz0DvF9mmxaDDFB0s1TGyUTEPBbH+69MVx77P2yXvXRiG+OL0/YCStTCo5Eu4+9SQ4qf9NBZZhoG2OHID6GgAiUUfZ3KMIXgB8rlyHYIBSWN8ZeRrfPDg2O43hucyYamjkp4CLxFQZgyNjX2KuHGxGxGB2jbVgm3Fj4KQtu2TniAPygICvmtsVcfh9yg17KZ4BKLMc/y55oqqhEXgmByPjuE67sJJWrhkaOw6MIVbOvDS3MDJZlcvkBX3mHtLvJA0VwimWYws3Ahl/gcooVcwgWKH7CVPVUlix5FHyEHuYULGvHscMA13UJO1JtzERsbaJsU57DYuBAtOBHe2jJ+tYqdJPFSJjZwhBPhgojnGb/Lx/FcIR2MlIkNHOFkjc8yCTTkzu5FX1B0GEaBwhgOcS5cmIrn3aAI0WvWrFlh9HkVZqV4+L/jo2eQLQa1IQaaJND5L1u7vUWbXmcTAW72t00vtfCzEbNXSMheKUmbBJrzCwIvaUsTQpO37fFRdwNcAtMR0t4wySaaXYtLPB4sRkyJwuVt7+5Y0aAOxzBcS3T//e+2zZE9WVjIjECs8M9fbZ1TdGkLyFxF14AAp3HFDMh77PcwoYWBEYGVjWizzVKbSR9r8TlDg+hzAZI/eVbFxaILl8xwuYJz2jTi2ubG7h5sm9NKpcqlYB2OqmF080Ifkj1sQhunhbN0f4/dT29MdHWWpeLBIVY5CNOjzkRLY+EMy10+CCPR4+l3/RG7co8PpE6peUmFEuoxADl6vLTU+fGU1ODivJecS0wmoCjhefEpukXvehVnsHrCU0ZMzmJOF3CzDZkx2EoTMa3OiPP+caBIEq3EiNOptLWZrZI4DDwN8iPtkMddQzwhlPwDGtYb9mlMh1kAAAAASUVORK5CYII="},{title:"roles",path:"/dashboard/roles",iconType:"image",icon:te},{title:"Waiting Admin",path:"/dashboard/waitingadmin",iconType:"image",icon:ee},{title:"Waiting Ngo",path:"/dashboard/waitingngo",iconType:"image",icon:ee},{title:"notifications",path:"/dashboard/notifications",iconType:"image",icon:te}],ae=n(69),ie=n(70),ce=n(313),re=n.n(ce),oe=n(2312),se=n.n(oe),Ae=n(63),le=n(2368),be=n(2004),je=n(2005),de=n(2371),ue=n(2026),he=["navConfig"],pe=Object(l.a)((function(e){return Object(W.jsx)(le.a,Object(v.a)({disableGutters:!0},e))}))((function(e){var t=e.theme;return Object(v.a)(Object(v.a)({},t.typography.body2),{},{height:48,position:"relative",textTransform:"capitalize",paddingLeft:t.spacing(5),paddingRight:t.spacing(2.5),color:t.palette.text.secondary,"&:before":{top:0,right:0,width:3,bottom:0,content:"''",display:"none",position:"absolute",borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:"#99CAFF"}})})),Oe=Object(l.a)(be.a)({width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center"}),xe=Object(l.a)("img")({objectFit:"contain",width:23,height:23,display:"flex",alignItems:"center",justifyContent:"center",marginRight:15});function ge(e){var t=e.item,n=e.active,a=Object(Ae.a)(),i=n(t.path),c=t.title,o=t.path,A=t.icon,l=t.info,j=t.children,d=t.iconType,u=Object(s.useState)(i),h=Object(r.a)(u,2),O=h[0],x=h[1],g={fontWeight:"fontWeightMedium",bgcolor:Object(R.a)("#99CAFF",a.palette.action.selectedOpacity),"&:before":{display:"block"}},f={color:"text.primary",fontWeight:"fontWeightMedium"};return j?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(pe,{onClick:function(){x((function(e){return!e}))},sx:Object(v.a)({},i&&g),children:[Object(W.jsx)(Oe,{children:A&&A}),Object(W.jsx)(je.a,{disableTypography:!0,primary:c}),l&&l,Object(W.jsx)(p.a,{component:b.a,icon:O?se.a:re.a,sx:{width:16,height:16,ml:1}})]}),Object(W.jsx)(de.a,{in:O,timeout:"auto",unmountOnExit:!0,children:Object(W.jsx)(ue.a,{component:"div",disablePadding:!0,children:j.map((function(e){var t=e.title,a=e.path,i=n(a);return Object(W.jsxs)(pe,{component:U.c,to:a,sx:Object(v.a)({},i&&f),children:[Object(W.jsx)(Oe,{children:Object(W.jsx)(p.a,{component:"span",sx:Object(v.a)({width:4,height:4,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",bgcolor:"text.disabled",transition:function(e){return e.transitions.create("transform")}},i&&{transform:"scale(2)",bgcolor:"primary.main"})})}),Object(W.jsx)(je.a,{disableTypography:!0,primary:t})]},t)}))})})]}):Object(W.jsxs)(pe,{component:U.c,to:o,sx:Object(v.a)({},i&&g),children:["image"===d?Object(W.jsx)(xe,{src:A,alt:"dashicon"}):Object(W.jsx)(Oe,{children:A&&A}),Object(W.jsx)(je.a,{disableTypography:!0,primary:c}),l&&l]})}function fe(e){var t=e.navConfig,n=Object(ie.a)(e,he),a=Object(A.f)().pathname,i=function(e){return!!e&&!!Object(A.d)({path:e,end:!1},a)};return Object(W.jsx)(p.a,Object(v.a)(Object(v.a)({},n),{},{children:Object(W.jsxs)(ue.a,{disablePadding:!0,children:[t.slice(0,1).map((function(e){return Object(W.jsx)(ge,{item:e,active:i},e.title)})),Object(W.jsx)(p.a,{sx:{py:1,px:4},children:Object(W.jsx)(E.a,{})}),t.slice(1,5).map((function(e){return Object(W.jsx)(ge,{item:e,active:i},e.title)})),Object(W.jsx)(p.a,{sx:{py:1,px:4},children:Object(W.jsx)(E.a,{})}),t.slice(5,8).map((function(e){return Object(W.jsx)(ge,{item:e,active:i},e.title)})),Object(W.jsx)(p.a,{sx:{py:1,px:4},children:Object(W.jsx)(E.a,{})})]})}))}var me=Object(l.a)("div")((function(e){var t=e.theme;return Object(o.a)({},t.breakpoints.up("lg"),{flexShrink:0,width:280})})),we=Object(l.a)(D.a)((function(){return{color:"#6C757D",fontSize:20}})),ve=Object(l.a)(D.a)((function(){return{color:"#343A40",fontSize:24,fontWeight:600}}));function Be(e){var t=e.username,n=e.profileImage,a=e.isOpenSidebar,i=e.onCloseSidebar,c=Object(A.f)().pathname;Object(s.useEffect)((function(){a&&i()}),[c]);var r=Object(W.jsxs)(ae.a,{sx:{height:"100%","& .simplebar-content":{height:"100%",display:"flex",flexDirection:"column"}},children:[Object(W.jsxs)(O.a,{direction:"column",alignItems:"center",spacing:3,sx:{mt:2},children:[Object(W.jsx)(k.a,{src:n,alt:"photoURL",sx:{height:97,width:97}}),Object(W.jsxs)(p.a,{sx:{textAlign:"center",pb:2},children:[Object(W.jsx)(we,{children:"Welcome"}),Object(W.jsx)(ve,{children:t})]})]}),Object(W.jsx)(fe,{navConfig:ne}),Object(W.jsx)(p.a,{sx:{flexGrow:1}})]});return Object(W.jsxs)(me,{children:[Object(W.jsx)(w,{width:"lgUp",children:Object(W.jsx)($.a,{open:a,onClose:i,PaperProps:{sx:{width:280}},children:r})}),Object(W.jsx)(w,{width:"lgDown",children:Object(W.jsx)($.a,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default",top:60}},children:r})})]})}var Ce=Object(l.a)("div")({display:"flex",minHeight:"100%",overflow:"hidden",backgroundColor:"#F8F9FA"}),Ie=Object(l.a)("div")((function(e){var t=e.theme;return Object(o.a)({flexGrow:1,overflow:"auto",minHeight:"100%",paddingTop:88,paddingBottom:t.spacing(10)},t.breakpoints.up("lg"),{paddingTop:116,paddingLeft:t.spacing(2),paddingRight:t.spacing(2)})}));function ye(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(S.c)((function(e){return e.AuthReducer})),l=Object(X.a)(),b=Object(F.useQuery)(["profileDetailType",o.userInfo.access],Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/profile-detail/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),j=b.data,d=b.isLoading,u=b.isError,h=b.error;return Object(W.jsx)(L.a,{children:!1===d?Object(W.jsx)("div",{children:u?Object(W.jsx)(V.a,{error:h||new Error("Network response was not ok.")}):Object(W.jsxs)(Ce,{children:[Object(W.jsx)(_,{onOpenSidebar:function(){return a(!0)}}),Object(W.jsx)(Be,{username:j?j.full_name:"",profileImage:j?j.image:"",isOpenSidebar:n,onCloseSidebar:function(){return a(!1)}}),Object(W.jsx)(Ie,{children:Object(W.jsx)(A.b,{})})]})}):Object(W.jsx)(Y.a,{})})}}}]);
//# sourceMappingURL=31.31114eb9.chunk.js.map