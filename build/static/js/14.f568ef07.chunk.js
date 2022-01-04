(this.webpackJsonpdonee=this.webpackJsonpdonee||[]).push([[14],{2045:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={formId:"createGoalForm",formField:{goalname:{name:"goalname",label:"Goal Name",requiredErrorMsg:"Goal Name is required",minError:"Too Short, 10 character minimum",maxError:"Too long, 25 character max"},file:{name:"file",label:"Image File*",requiredErrorMsg:"File is Required",fileFormatError:"Unsupported Format",fileMaxError:"File too large"},shortGoal:{name:"shortGoal",label:"Short Goal*",requiredErrorMsg:"Short Goal is required",minError:"Too Short, 30 character minimum",maxError:"Too long, 150 character max"},topics:{name:"topic",label:"Choose topic of your goal*",requiredErrorMsg:"Topic is required",minError:"1 Topic is required minimum"},product:{name:"product",label:"What are you buying?",requiredErrorMsg:"Product Name is required"},productlink:{name:"productlink",label:"Where do you get it? Paste a link",requiredErrorMsg:"Product Link is required"},productunitcost:{name:"unitcost",label:"Unit Cost in Dollar",requiredErrorMsg:"Unit cost is required",minError:"Unit cost must be greater than 0"},productunitnumber:{name:"unitnumber",label:"How many units?",requiredErrorMsg:"Unit is required",minError:"Unit must be greater than 0"},productsubtotal:{name:"productsubtotal",label:"Sub Total",requiredErrorMsg:"Sub Total is required"},productpgwfee:{name:"productpgwfee",label:"PGW fee",requiredErrorMsg:"product pgw fee is required"},productngofee:{name:"productngofee",label:"NGO fee",requiredErrorMsg:"product ngo fee is required"},productplatformfee:{name:"productplatformfee",label:"Platform fee",requiredErrorMsg:"product platform fee is required"},productgoaltotal:{name:"productgoaltotal",label:"Total Goal Cost",requiredErrorMsg:"Total Goal is required"},videofile:{name:"videofile",label:"Video",requiredErrorMsg:"Video is Required",fileFormatError:"'Unsupported Format'",fileMaxError:"Video too large,less than 100 MB"},full_description:{name:"full_description",label:"Full Description",requiredErrorMsg:"Full description is required",minError:"100 character minimum"}}}},2047:function(e,r,t){"use strict";t.d(r,"e",(function(){return d})),t.d(r,"d",(function(){return m})),t.d(r,"b",(function(){return b})),t.d(r,"c",(function(){return f})),t.d(r,"a",(function(){return p})),t.d(r,"f",(function(){return P}));var n,i,a,o=t(6),c=t(2064),u=t(2045),l=5e6,s=["image/jpg","image/jpeg","image/gif","image/png","image/PNG","image/webp","image/svg"],d=c.e().shape({email:c.g().email().required("Email is required"),password:c.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:c.g().not([c.f("email")],"Password can not be email")}),confirmPassword:c.g().when("password",{is:function(e){return!!(e&&e.length>0)},then:c.g().oneOf([c.f("password")],"Both password need to be the same")})}),m=c.e().shape({email:c.g().email().required("Email is required"),password:c.g().required("Password is required").min(6,"Minimum 6 Characters").when("email",{is:function(e){return!!(e&&e.length>6)},then:c.g().not([c.f("email")],"Password can not be email")})}),b=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),country:c.d().required("Country is required"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Bio name can not be username")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")})],f=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),email:c.g().email().required("Email is required"),country:c.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("email")],"Bio name can not be email")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),sdgs:c.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")}),,c.e().shape({certification_incorporation:c.a(c.c().required("Certification incorporation Images is required").test("fileSize","Maximum Size 5MB",(function(e){return e.map((function(e){return e&&e.size<=l}))})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))).min(1,"1 file is minimum")})],p=[c.e().shape({username:c.g().matches(/^(\S+$)/,"This field cannot contain  blankspaces").required("Field is required").min(6,"Minimum 6 Charachters"),full_name:c.g().required("Field is required").when("username",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("username")],"Full name can not be username")}),email:c.g().email().required("Email is required"),country:c.d().required("Country is required").min(1,"Minimum 1 Charachters"),phone_number:c.g().matches(/^(\+)[0-9]{7,16}$/,"Enter correct number!").required("Phone number is required"),bio:c.g().required("Bio is required").max(100,"Maximum 100 Charachters").when("email",{is:function(e){return!!(e&&e.length>1)},then:c.g().not([c.f("email")],"Bio name can not be email")}),image:c.c().required("Profile Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),sdgs:c.a().required("SDGS is Required").min(1,"Minimum 1 is Required")}),c.e().shape({donee_notification:c.b().required("donee_notification is required"),account_activity:c.b().required("account_activity is required"),donee_activity:c.b().required("donee_activity is required"),achieved_goals:c.b().required("achieved_goals is required"),new_followers:c.b().required("new_followers is required"),NGO_role_assign:c.b().required("user_notification is required")}),c.e().shape({id_front:c.c().required("ID front Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)})),id_back:c.c().required("ID back Image is required").test("fileSize","Maximum Size 5MB",(function(e){return e&&e.size<=l})).test("fileFormat","Invalid Image",(function(e){return e&&s.includes(e.type)}))})],h=u.a.formField,j=h.file,g=h.goalname,O=h.shortGoal,y=h.topics,v=h.product,x=h.productlink,q=h.productunitcost,E=h.productunitnumber,w=h.productsubtotal,M=h.productpgwfee,S=h.productngofee,_=h.productplatformfee,C=h.productgoaltotal,I=h.videofile,F=h.full_description,A=["video/mp4","video/mov"],P=[c.e().shape((n={},Object(o.a)(n,j.name,c.c().required(j.requiredErrorMsg).test("fileSize",j.fileMaxError,(function(e){return e&&e.size<=l})).test("fileFormat",j.fileFormatError,(function(e){return e&&s.includes(e.type)}))),Object(o.a)(n,g.name,c.g().required(g.requiredErrorMsg).min(10,g.minError).max(25,g.maxError)),Object(o.a)(n,O.name,c.g().required(O.requiredErrorMsg)),Object(o.a)(n,y.name,c.a().required(y.requiredErrorMsg).min(1,y.minError)),n)),c.e().shape((i={},Object(o.a)(i,v.name,c.g().required(v.requiredErrorMsg)),Object(o.a)(i,x.name,c.g().matches(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/,"Enter correct url!")),Object(o.a)(i,q.name,c.d().min(1,q.minError).required(q.requiredErrorMsg)),Object(o.a)(i,E.name,c.d().min(1,E.minError).required(E.requiredErrorMsg)),Object(o.a)(i,w.name,c.d().required(w.requiredErrorMsg)),Object(o.a)(i,M.name,c.d().required(M.requiredErrorMsg)),Object(o.a)(i,S.name,c.d().required(S.requiredErrorMsg)),Object(o.a)(i,_.name,c.d().required(_.requiredErrorMsg)),Object(o.a)(i,C.name,c.d().required(C.requiredErrorMsg)),i)),c.e().shape((a={},Object(o.a)(a,I.name,c.a(c.c().required(I.requiredErrorMsg).test("fileSize",I.fileMaxError,(function(e){return e&&e.size<=25e7})).test("fileFormat",I.fileFormatError,(function(e){return e&&A.includes(e.type)}))).min(1,"1 video is minimum")),Object(o.a)(a,F.name,c.g().required(F.requiredErrorMsg)),a))]},2054:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t(83),i=function(e){return function(r){r({type:n.b,payload:e})}}},2057:function(e,r,t){"use strict";var n=t(9),i=(t(1),t(2012)),a=t(0);r.a=function(e){var r=e.field,t=e.form,o=e.label,c=e.type,u=e.placeholder,l=t.touched,s=t.errors;return Object(a.jsx)(i.a,Object(n.a)({id:"outlined-full-width Bio",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},placeholder:u,type:c,helperText:function(){if(l[r.name]&&s[r.name])return s[r.name]}(),error:Boolean(l[r.name]&&s[r.name]),label:o},r))}},2069:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"c",(function(){return i})),t.d(r,"b",(function(){return a}));var n=[{name:"username",label:" Donee Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"Donee  Name",placeholder:"Enter  Name",typeInputType:"text"},{name:"email",label:"E-Mail",placeholder:"Enter Your Email",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}],i=[{name:"username",label:" NGO Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"NGO Commercial Name",placeholder:"Enter Commercial Name",typeInputType:"text"},{name:"email",label:"E-Mail",placeholder:"Enter Your Email",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}],a=[{name:"username",label:"Username ",placeholder:"Enter Your Unique username",typeInputType:"text"},{name:"full_name",label:"Donor Name",placeholder:"Enter Your Full Name",typeInputType:"text"},{name:"country",label:"Location",placeholder:"Enter Your Location",typeInputType:"text"},{name:"phone_number",label:"Phone Number",placeholder:"Enter Phone Number with Country Code",typeInputType:"number"}]},2070:function(e,r,t){"use strict";var n=t(9),i=(t(1),t(2012)),a=t(0);r.a=function(e){var r=e.field,t=e.form,o=e.label,c=e.type,u=e.placeholder,l=t.touched,s=t.errors;return Object(a.jsx)(i.a,Object(n.a)({id:"outlined-full-width ".concat(r.name),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",placeholder:u,type:c,helperText:function(){if(l[r.name]&&s[r.name])return s[r.name]}(),error:Boolean(l[r.name]&&s[r.name]),label:o},r))}},2071:function(e,r,t){"use strict";var n=t(9),i=t(2013),a=t(2014),o=t(2011),c=t(2027),u=t(1),l=t(67),s=t(68),d=t(0);r.a=function(e){var r=e.field,t=e.options,m=e.form,b=Object(u.useRef)(null),f=Object(l.a)();return Object(u.useEffect)((function(){f.get("country-code/".concat(r.value)).then((function(e){200===e.status?m.setFieldValue("phone_number","+".concat(e.data.country_code)):function(e){var r;null===(r=b.current)||void 0===r||r.call(b,e)}("Api Status not ok!")}))}),[r.value]),Object(d.jsxs)(i.a,{fullWidth:!0,children:[Object(d.jsx)(s.a,{children:function(e){b.current=e}}),Object(d.jsx)(a.a,{id:"demo-simple-select-label",children:"Where are you from?"}),null!==t&&Object(d.jsx)(o.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-label",label:"Select Your Country",id:"demo-simple-select"},r),{},{fullWidth:!0,children:t.map((function(e){return Object(d.jsx)(c.a,{value:e.id,children:e.name})}))}))]})}},2072:function(e,r,t){"use strict";t(1);var n=t(188),i=t(66),a=t(344),o=t(2116),c=t(0);r.a=function(e){var r=e.placeholder,t=e.field,i=e.form,a=e.options,l=e.isMulti,s=void 0!==l&&l,d=i.touched,m=i.errors;return Object(c.jsxs)(n.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(c.jsx)(o.a,{name:t.name,value:a?s?a.filter((function(e){return t.value.indexOf(e.value)>=0})):a.find((function(e){return e.value===t.value})):s?[]:"",onChange:function(e){i.setFieldValue(t.name,s?e.map((function(e){return e.value})):e.value),i.setFieldValue("topic",s?e.map((function(e){return e.label})):e.value)},placeholder:r,options:a,isMulti:s,closeMenuOnSelect:!1}),d[t.name]&&m[t.name]&&Object(c.jsx)(u,{variant:"body1",children:m[t.name]})]})};var u=Object(a.a)(i.a)({color:"red",fontSize:12})},2075:function(e,r,t){"use strict";t.d(r,"b",(function(){return C})),t.d(r,"a",(function(){return I}));var n=t(1),i=t(191),a=t(346),o=t(66),c=t(126),u=t(5),l=t(2),s=(t(15),t(11)),d=t(187),m=t(7),b=t(12),f=t(149),p=t(186);function h(e){return Object(f.a)("MuiFormGroup",e)}Object(p.a)("MuiFormGroup",["root","row"]);var j=t(0),g=["className","row"],O=Object(m.a)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.row&&r.row]}})((function(e){var r=e.ownerState;return Object(l.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),y=n.forwardRef((function(e,r){var t=Object(b.a)({props:e,name:"MuiFormGroup"}),n=t.className,i=t.row,a=void 0!==i&&i,o=Object(u.a)(t,g),c=Object(l.a)({},t,{row:a}),m=function(e){var r=e.classes,t={root:["root",e.row&&"row"]};return Object(d.a)(t,h,r)}(c);return Object(j.jsx)(O,Object(l.a)({className:Object(s.a)(m.root,n),ownerState:c,ref:r},o))})),v=t(1956),x=t(2e3),q=t(2035),E=t(9),w=t(2119),M=t(2010),S=t(2006),_=function(e){var r=e.field,t=(e.form,e.label),n=e.sub,i=C();return Object(j.jsxs)(S.a,{className:i.boxPaddingAlert,children:[Object(j.jsx)(w.a,{control:Object(j.jsx)(M.a,Object(E.a)(Object(E.a)({},r),{},{color:"primary",checked:r.value})),label:t}),Object(j.jsx)(o.a,{className:i.pTagStlAlert,align:"left",gutterBottom:!0,children:n})]})},C=Object(v.a)((function(e){return Object(x.a)({boxPaddingAlert:{paddingTop:8,paddingBottom:8},saveButtonAlert:{borderRadius:20,marginTop:20,paddingTop:10,paddingLeft:25,paddingRight:25,paddingBottom:10},tagTitle:{paddingTop:25,paddingBottom:20},pTagStlAlert:{fontSize:14,color:"grey"}})}));function I(){var e=C();return Object(j.jsx)(i.a,{children:Object(j.jsx)(a.a,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:Object(j.jsxs)(a.a,{item:!0,children:[Object(j.jsx)(o.a,{className:e.tagTitle,variant:"h4",align:"left",gutterBottom:!0,children:"Alert and Notification"}),Object(j.jsxs)(c.a,{children:[Object(j.jsx)(o.a,{variant:"h5",align:"left",gutterBottom:!0,children:"Send me:"}),Object(j.jsxs)(y,{children:[Object(j.jsx)(q.a,{component:_,label:"Donee notifications",name:"account_activity",sub:"Get Donee news, everything about our new goals, donees and NGO's"}),Object(j.jsx)(q.a,{component:_,label:"Account activity",name:"donee_notification",sub:"Get notifications about your activity or activities you\xb4ve missed"}),Object(j.jsx)(q.a,{component:_,label:"Activity of your endorsed Donee\xb4s",name:"donee_activity",sub:" Get notifications about your sponsored Donee\xb4s and everything about their goals progress"}),Object(j.jsx)(q.a,{component:_,label:"Goals achieved that you support",name:"achieved_goals",sub:""}),Object(j.jsx)(q.a,{component:_,label:"Goals achieved that you endorsed",name:"new_followers",sub:""}),Object(j.jsx)(q.a,{component:_,label:"Someone gave you a role in their NGO",name:"NGO_role_assign",sub:""})]})]})]})})})}},2077:function(e,r,t){"use strict";var n=t(8),i=t(1),a=t.n(i),o=t(344),c=t(188),u=t(346),l=t(126),s=t(66),d=t.p+"static/media/imageadd.336df693.svg",m=t(38),b=t(0),f=(r.a=function(e){var r=e.field,t=e.form,o=e.profile_type,p=t.errors,h=Object(m.c)((function(e){return e.AuthReducer.ngo_profile_id})),j=a.a.useState(null),g=Object(n.a)(j,2),O=g[0],y=g[1];return Object(i.useEffect)((function(){r.value&&y(URL.createObjectURL(r.value))}),[r.value]),Object(b.jsxs)(c.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(b.jsxs)(u.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(u.a,{item:!0,xs:6,children:Object(b.jsx)(l.a,{component:"span",m:1,className:"ovalImage",children:null!==O?Object(b.jsx)("img",{className:"ovalImage",src:O,alt:"logoaddimage"}):Object(b.jsx)("img",{className:"addimageicon",src:d,alt:"logoaddimage"})})}),Object(b.jsxs)(u.a,{item:!0,direction:"row",justifyContent:"center",alignItems:"center",xs:6,children:[Object(b.jsx)("input",{id:"file",name:"file",type:"file",onChange:function(e){t.setFieldValue("image",e.currentTarget.files[0]),t.setFieldValue("profile_type",o),null!==h&&t.setFieldValue("ngo_profile_id",h.toString())}}),Object(b.jsx)(s.a,{variant:"subtitle1",className:"filesizelabel",children:"JPG, GIF or PNG."})]})]}),p[r.name]&&Object(b.jsx)(f,{variant:"body1",children:p[r.name]})]})},Object(o.a)(l.a)({backgroundColor:"#CED4DA",width:150,height:150,borderRadius:11,justifyContent:"center",alignItems:"center",display:"flex"}),Object(o.a)(s.a)({color:"red",fontSize:12}));Object(o.a)("img")({height:120,width:80})},2099:function(e,r,t){"use strict";var n=t(8),i=t(10),a=t.n(i),o=t(18),c=t(191),u=t(66),l=t(2035),s=t(1),d=t(34),m=t(38),b=t(2072),f=t(2057),p=t(2077),h=t(2070),j=t(2071),g=t(67),O=t(127),y=t(351),v=t(92),x=t(0);r.a=function(e){var r=e.label,t=e.textInputsInfo,i=e.profile_type,q=Object(m.c)((function(e){return e.AuthReducer.userInfo.access})),E=Object(g.a)(),w=Object(d.useQuery)(["getCountries",q],Object(o.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/country-list/");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))),M=w.data,S=w.isLoading,_=w.isError,C=w.error,I=Object(d.useQuery)(["getSdgs",q],Object(o.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/sdgs-list/");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))),F=I.data,A=I.isLoading,P=I.isError,G=(I.error,Object(s.useState)([])),N=Object(n.a)(G,2),T=N[0],B=N[1];return Object(s.useEffect)((function(){if(F&&(null===F||void 0===F?void 0:F.length)>1){var e=F.map((function(e){return{value:e.id,label:e.title}}));B(e)}}),[F]),Object(x.jsx)(y.a,{children:!1===S||!1===A?Object(x.jsx)("div",{children:_||P?Object(x.jsx)(v.a,{error:C||new Error("Network response was not ok.")}):Object(x.jsxs)(c.a,{maxWidth:"sm",children:[Object(x.jsx)(u.a,{variant:"h4",gutterBottom:!0,children:r}),Object(x.jsx)(l.a,{name:"image",component:p.a,type:"input",profile_type:i}),t.map((function(e){return"Location"===e.label?Object(x.jsx)("div",{style:{margin:5},children:M&&Object(x.jsx)(l.a,{name:e.name,options:M,component:j.a,placeholder:"Select your country",isMulti:!1})},e.name):Object(x.jsx)("div",{style:{margin:5},children:Object(x.jsx)(l.a,{name:e.name,component:h.a,label:e.label,placeholder:e.placeholder,type:e.placeholder})},e.name)})),Object(x.jsx)("div",{style:{margin:5},children:Object(x.jsx)(l.a,{name:"bio",component:f.a,label:"Bio",placeholder:"Enter Your Info"})}),Object(x.jsx)("div",{style:{margin:10},children:Object(x.jsx)(l.a,{name:"sdgs",options:T,component:b.a,placeholder:"Select SDGS",isMulti:!0})})]})}):Object(x.jsx)(O.a,{})})}},2100:function(e,r,t){"use strict";r.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABUCAYAAAA7xZEpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgB7dzPcdNAFMfx3wqGKynBlEAHSQWEDkwHcDPmgHwg9o2kAkIFhA7SAaECQgfmxgGy7JMibK+sSLLeW/1738x48kcZ25+R5LW1kkFRM3sMgxeIcIQuZHGDM3MB4UzuN2/tqfvtR/fdBN0rdigLCBbt/DS37x3GF3QTg4qTxyjYZg1J7yhGPxJbU1KQmZ24deUH+pUISnR/K7oaCiWy+WT7kCn6GTtKlLy89jtWlMeVljK4RPhO3dij6hiIUMCxT6kG8sG8QujmyZpbZ1DIghJhWDXefIYGQjVCGSIIdTDKUEGog1CGDELVRhk6CFULZQwgVGWUsYBQlVDGBEKVoowNhHoQZYwgVCHKWEGovShjBqFyKGMHoXZQFCTtP0q1z0PGUeyOSX3XNWQ7gyMF8VIQr+7uQywuaBUGb6XvZboLsjTn4E7f3NVPQbwUxEtBvBTES0G8FMSrGyA0PpjbT+hA7YNs5rZNu4DSLkh+ol/rKO2BFM96bBWlHZDyKaCtoYQHqT4fthWUyH1NEKr6k4ODo4RbQw6fKR0UJQxI82njwVDkQfjm0AdBkQXhP6FAHEUORO7sClEUGRD5U03EUPhBwp13I4LCCxL+JCR2FD6Qehhr8MWKwgNCJy7WwbAoP5nA4qU7UFUVboqZnYIhHpCluXJP4HOFJekJniSnnJYV4Ztb7qQSCt33ylyCIb5NZmmmJSgpxpkpx8iiZctQ6D7pvpni3akWo9THyHoIhRmD4n/ZzaMcjpG1D0UAg5IZmG1QmmNkbaMIYVByQ3d6wHd4zoKRlaEIYVCyb+5W5hbccQLvSQ9UeSmIl4J4KYiXgngpiJeCeCmIl4J4tTNxl0awM/usZJmfaKH2ZjJLDOsZ0k3GS0G8qm0y77oxIa5xtuTvf7AmkPK307a3V7GqV4R1hCe4hZb2GzcRYkMfyV1j7N3hK87NOt2pWohegbInvaabFGRlrt3tmFEW2bho93qqcxsDvbwuYpMW7nPaOPshf4FZOkZqQNdVnWDI2eTF5E1yGHYrU/gPdADb4hiP8BRD6i9+udur+91Ern94KCCEgz3GmgAAAABJRU5ErkJggg=="},2119:function(e,r,t){"use strict";var n=t(6),i=t(5),a=t(2),o=t(1),c=(t(15),t(11)),u=t(187),l=t(58),s=t(66),d=t(14),m=t(7),b=t(12),f=t(149),p=t(186);function h(e){return Object(f.a)("MuiFormControlLabel",e)}var j=Object(p.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),g=t(0),O=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],y=Object(m.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[Object(n.a)({},"& .".concat(j.label),r.label),r.root,r["labelPlacement".concat(Object(d.a)(t.labelPlacement))]]}})((function(e){var r=e.theme,t=e.ownerState;return Object(a.a)(Object(n.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(j.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},Object(n.a)({},"& .".concat(j.label),Object(n.a)({},"&.".concat(j.disabled),{color:r.palette.text.disabled})))})),v=o.forwardRef((function(e,r){var t=Object(b.a)({props:e,name:"MuiFormControlLabel"}),n=t.className,m=t.componentsProps,f=void 0===m?{}:m,p=t.control,j=t.disabled,v=t.disableTypography,x=t.label,q=t.labelPlacement,E=void 0===q?"end":q,w=Object(i.a)(t,O),M=Object(l.a)(),S=j;"undefined"===typeof S&&"undefined"!==typeof p.props.disabled&&(S=p.props.disabled),"undefined"===typeof S&&M&&(S=M.disabled);var _={disabled:S};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof p.props[e]&&"undefined"!==typeof t[e]&&(_[e]=t[e])}));var C=Object(a.a)({},t,{disabled:S,label:x,labelPlacement:E}),I=function(e){var r=e.classes,t=e.disabled,n=e.labelPlacement,i={root:["root",t&&"disabled","labelPlacement".concat(Object(d.a)(n))],label:["label",t&&"disabled"]};return Object(u.a)(i,h,r)}(C);return Object(g.jsxs)(y,Object(a.a)({className:Object(c.a)(I.root,n),ownerState:C,ref:r},w,{children:[o.cloneElement(p,_),x.type===s.a||v?x:Object(g.jsx)(s.a,Object(a.a)({component:"span",className:I.label},f.typography,{children:x}))]}))}));r.a=v},2358:function(e,r,t){"use strict";t.r(r),t.d(r,"renderStepContent",(function(){return H}));var n=t(10),i=t.n(n),a=t(18),o=t(9),c=t(8),u=t(1),l=t(2355),s=t(2366),d=t(2353),m=t(188),b=t(234),f=t(2007),p=t(344),h=t(25),j=t(38),g=t(2035),O=t(2006),y=t(34),v=t(2047),x=t(81),q=t(236),E=t(235),w=t(2099),M=t(2069),S=t(2075),_=t(191),C=t(66),I=t(346),F=t(22),A=t(2065),P=t(2100),G=t(0),N=function(e){var r=e.label,t=e.form,n=e.field,i=Object(g.e)().setFieldValue,a=Object(A.a)(),l=a.acceptedFiles,s=a.getRootProps,d=a.getInputProps,b=t.errors,f=t.isValid,p=Object(u.useState)(null),h=Object(c.a)(p,2),j=h[0],O=h[1];return Object(u.useEffect)((function(){0!==l.length&&i(n.name,l)}),[l,f]),Object(u.useEffect)((function(){if(n.value&&null!==j)for(var e=0;e<n.value.length;e++)O([].concat(Object(F.a)(j),[URL.createObjectURL(n.value[e])]));else if(null===j&&n.value){var r=n.value.map((function(e){return URL.createObjectURL(e)}));O(r)}}),[n.value]),Object(G.jsxs)("div",{children:[Object(G.jsx)("input",Object(o.a)({},d())),Object(G.jsxs)(m.a,Object(o.a)(Object(o.a)({direction:"column",justifyContent:"center",alignItems:"center",spacing:3},s({className:"dropzone"})),{},{sx:{minHeight:300,minWidth:350,backgroundColor:"#EEF8FF",border:"1px solid #6C757D",borderRadius:2},children:[Object(G.jsx)(T,{variant:"body1",gutterBottom:!0,children:r}),null===j?Object(G.jsx)("img",{src:P.a,alt:"shareicon",style:{height:40,width:30}}):j.length>0&&j.map((function(e){return Object(G.jsx)("img",{src:e,alt:"shareicon",style:{height:100,width:100,objectFit:"contain"}})})),Object(G.jsx)(B,{variant:"body1",gutterBottom:!0,children:"Drag & drop your files here"}),b[n.name]&&Object(G.jsx)(k,{variant:"body1",children:b[n.name]}),Object(G.jsx)("div",{style:{margin:5},children:Object(G.jsx)(R,{children:"Browse File"})})]}))]})},T=Object(p.a)(C.a)({color:"#007AFF",fontSize:20}),B=Object(p.a)(C.a)({color:"#6C757D",fontSize:14}),R=Object(p.a)(b.a)({color:"white",backgroundColor:"#007AFF","&:hover":{backgroundColor:"#197be6"},width:120}),k=Object(p.a)(C.a)({color:"red",fontSize:12}),U=function(){return Object(G.jsxs)(_.a,{maxWidth:"md",children:[Object(G.jsx)(C.a,{variant:"body1",gutterBottom:!0,children:"To confirm your ngo account, please upload digital photos of the following documents"}),Object(G.jsx)(I.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{paddingTop:3,paddingBottom:2},children:Object(G.jsx)(I.a,{item:!0,xs:12,sm:6,md:6,children:Object(G.jsx)(g.a,{component:N,name:"certification_incorporation",label:"Certification of incorporation"})})})]})},D=t(128),z=t(127),L=t(68),W=t(82),Q=t(238),V=t(237),Y=t(2054),H=(r.default=function(){var e=Object(u.useRef)(null),r=Object(u.useRef)(null),t=Object(j.c)((function(e){return e.AuthReducer.userInfo})),n=Object(y.useMutation)((function(e){return Object(x.i)(e,t.access)})),p=Object(h.f)(),w=Object(h.g)(),M=Object(j.b)(),S=n.isError,_=n.isLoading,C=n.isSuccess,I=n.data,F=(p.state&&p.state,Object(u.useState)(0)),A=Object(c.a)(F,2),P=A[0],N=A[1],T=Object(u.useState)(!1),B=Object(c.a)(T,2),R=B[0],k=B[1],U=["Basic Info","Notifications","Info Validation"],J=Object(u.useState)(Object(o.a)({},D.d)),K=Object(c.a)(J,2),X=K[0],$=K[1],ee=v.c[P],re=P===U.length-1,te=function(e){return new Promise((function(r){return setTimeout(r,e)}))},ne=function(){var e=Object(a.a)(i.a.mark((function e(r,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(200);case 2:$(r),n.mutate(r),t.setSubmitting(!1);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ie=function(r){var t;null===(t=e.current)||void 0===t||t.call(e,r)};return console.log(X),Object(u.useEffect)((function(){if(C&&void 0!==I)if(void 0!==I.email){if("profile with this email already exists."===I.email[0])ie("Profile with this email already exists.");else if("string"===typeof I.username&&"string"===typeof I.email){var e={refresh:t.refresh,access:t.access,is_account_created:!0,user_id:t.user_id,user_profile:{id:I.id,profile_username:I.username,profile_image:I.image,profile_type:I.profile_type,user_username:"",ngo_username:""}};!function(e){var t;null===(t=r.current)||void 0===t||t.call(r,e)}("Success Profile Has been Created.\n We will take you to HomePage now."),setTimeout((function(){M(Object(Y.a)("")),M(Object(Q.a)(e)),M(Object(V.a)(!0)),w("../",{replace:!0})}),7e3)}}else void 0!==I.username?"profile with this username already exists."===I.username[0]&&ie("Profile with this username already exists."):void 0!==I.phone_number&&"The phone number entered is not valid."===I.phone_number[0]&&ie("The phone number entered is not valid.");return function(){!0}}),[S,C]),_?Object(G.jsx)(z.a,{}):Object(G.jsx)(q.ErrorBoundary,{fallbackRender:function(e){var r=e.error,t=e.resetErrorBoundary;return Object(G.jsx)(E.a,{error:r,resetErrorBoundary:t})},onReset:function(){return k(!1)},resetKeys:[R],children:Object(G.jsxs)(Z,{children:[Object(G.jsx)(L.a,{children:function(r){e.current=r}}),Object(G.jsx)(W.a,{children:function(e){r.current=e}}),Object(G.jsx)(l.a,{activeStep:P,children:U.map((function(e,r){return Object(G.jsx)(s.a,{children:Object(G.jsx)(d.a,{children:e})},e)}))}),Object(G.jsx)(g.c,{enableReinitialize:!0,initialValues:X,validationSchema:ee,onSubmit:function(e,r){re?ne(e,r):(N((function(e){return e+1})),r.setTouched({}),r.setSubmitting(!1))},children:function(e){return Object(G.jsx)(g.b,{children:Object(G.jsxs)(m.a,{spacing:2,children:[H(P,"Create Profile NGO"),Object(G.jsxs)(O.a,{sx:{display:"flex",justifyContent:"flex-end"},children:[P>0&&Object(G.jsx)(b.a,{onClick:function(){return N((function(e){return e-1}))},children:"Back"}),Object(G.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",disabled:e.isSubmitting,children:re?"Create Profile":"Next"}),e.isSubmitting&&Object(G.jsx)(f.a,{})]})]})})}})]})})},function(e,r){switch(e){case 0:return Object(G.jsx)(w.a,{label:r,textInputsInfo:M.c,profile_type:"NGO"});case 1:return Object(G.jsx)(S.a,{});case 2:return Object(G.jsx)(U,{})}}),Z=Object(p.a)("div")({padding:10})}}]);
//# sourceMappingURL=14.f568ef07.chunk.js.map