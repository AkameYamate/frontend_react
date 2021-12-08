(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[172],{3097:function(e,a,t){"use strict";t.r(a);var n=t(89),l=t(109),r=t(1558),s=t(1583),m=t(1584),c=t(1564),o=t(812),i=t(1557),d=t(1552),u=t(203),p=t(1562),f=t(245),E=t(2),b=t(0),g=t.n(b),h=t(26),w=Object(d.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(u.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=w(),a=Object(l.c)({name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1}),t=a.form,d=a.handleChange,u=a.resetForm;return g.a.createElement("div",{className:Object(E.default)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},g.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},g.a.createElement(n.a,{animation:"transition.expandIn"},g.a.createElement(s.a,{className:"w-full max-w-384"},g.a.createElement(m.a,{className:"flex flex-col items-center justify-center p-32"},g.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/logo.svg",alt:"logo"}),g.a.createElement(f.a,{variant:"h6",className:"mt-16 mb-32"},"CREATE AN ACCOUNT"),g.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),u()}},g.a.createElement(p.a,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t.name,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),g.a.createElement(p.a,{className:"mb-16",label:"Email",type:"email",name:"email",value:t.email,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),g.a.createElement(p.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),g.a.createElement(p.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),g.a.createElement(o.a,{className:"items-center"},g.a.createElement(i.a,{control:g.a.createElement(c.a,{name:"acceptTermsConditions",checked:t.acceptTermsConditions,onChange:d}),label:"I read and accept terms and conditions"})),g.a.createElement(r.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Register",disabled:!(t.email.length>0&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm&&t.acceptTermsConditions),type:"submit"},"CREATE AN ACCOUNT")),g.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},g.a.createElement("span",{className:"font-medium"},"Already have an account?"),g.a.createElement(h.a,{className:"font-medium",to:"/pages/auth/login"},"Login")))))))}}}]);