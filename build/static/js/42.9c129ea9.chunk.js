(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[42],{2343:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(10),o=n.n(r),a=n(18),c=n(8),s=n(191),i=n(188),d=n(66),j=n(346),u=n(234),b=n(25),x=n(7),h=n(1),l=n.n(h),O=n(34),p=n(56),f=n(38),m=n(127),g=n(351),w=n(92),v=n(67),k=n(0);function _(){var e=Object(b.g)(),t=Object(f.c)((function(e){return e.AuthReducer})),n=l.a.useState(!1),r=Object(c.a)(n,2),u=r[0],x=r[1],h=Object(v.a)(),_=Object(O.useQuery)(["doneeDashboardApiCount",t.userInfo.access,u],Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/dashboard/donee-count/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),C=_.data,D=_.isLoading,F=_.isError,y=_.error,z=Object(O.useQuery)(["doneeDashboardEndorsed",t.userInfo.access,u],Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/dashboard/donee-list/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),A=z.data,I=z.isLoading,S=z.isError,W=z.error;return Object(k.jsx)(g.a,{children:!1===D||!1===I?Object(k.jsx)("div",{children:F||S?F?Object(k.jsx)(w.a,{error:y||new Error("Network response was not ok.")}):Object(k.jsx)(w.a,{error:W||new Error("Network response was not ok.")}):Object(k.jsxs)(s.a,{maxWidth:"xl",children:[Object(k.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[Object(k.jsx)(d.a,{sx:{fontSize:32,fontWeight:"bold",height:40,color:"#212529"},children:"Donees"}),Object(k.jsx)(E,{variant:"contained",onClick:function(){return e("../../invitedonee")},children:"Invite New Donee"})]}),null!==C&&void 0!==C&&Object(k.jsxs)(j.a,{container:!0,spacing:3,children:[Object(k.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsx)(p.h,{})}),Object(k.jsx)(j.a,{item:!0,xs:12,sm:6,md:2,children:Object(k.jsx)(p.z,{total_donee_count:C.total_donee_count})}),Object(k.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,children:Object(k.jsx)(p.a,{active:C.total_active_count,inactive:C.total_inactive_count})})]}),Object(k.jsxs)(j.a,{justifyContent:"space-between",container:!0,sx:{paddingTop:3,paddingBottom:3},children:[Object(k.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,children:Object(k.jsx)(d.a,{sx:{fontSize:32,fontWeight:"bold",height:40,color:"#212529"},children:"Endorsed Donees"})}),null!==A&&void 0!==A&&Object(k.jsx)(j.a,{sx:{marginTop:4},item:!0,xs:12,sm:12,md:12,children:Object(k.jsx)(p.l,{doneeList:A,handleRefetch:function(){return x(!u)}})})]})]})}):Object(k.jsx)(m.a,{})})}var E=Object(x.a)(u.a)((function(){return{backgroundColor:"#007AFF",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.15)",borderRadius:22,width:328,height:45,fontsize:20,fontWeight:600,color:"#F8F9FA"}}))}}]);
//# sourceMappingURL=42.9c129ea9.chunk.js.map