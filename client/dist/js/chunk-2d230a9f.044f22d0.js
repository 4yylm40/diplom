(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230a9f"],{ecf1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HeaderMin"),a("section",{staticClass:"container task"},[t._l(t.getErrors,(function(e){return a("div",{key:e.id,staticClass:"errors"},[t._v(t._s(e.msg))])})),a("form",{on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Пароль")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"Пароль",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Войти")]),a("router-link",{staticClass:"btn",attrs:{to:"/registration"}},[t._v("Зарегистрироваться")])],1)],2)],1)},r=[],o=a("5530"),i=a("b650"),n=a("2f62"),l={name:"Auth",components:{HeaderMin:i["a"]},computed:Object(n["c"])(["getToken","getErrors"]),mounted:function(){this.$store.commit("updateError")},data:function(){return{email:"",password:""}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["loginUser"])),{},{signIn:function(){this.loginUser({email:this.email,password:this.password}),this.$router.push("/")}})},m=l,u=a("2877"),p=Object(u["a"])(m,s,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d230a9f.044f22d0.js.map