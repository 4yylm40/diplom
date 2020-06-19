(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cc7d5":"771c4684","chunk-2d0d03d6":"fe8957f4","chunk-2d0d6f51":"1d24b492","chunk-2d2252c2":"60b04329","chunk-99544b2c":"2b724210"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4360:function(t,e,r){"use strict";var n=r("2b0e"),a=r("2f62"),o=(r("b0c0"),r("c758")),s={actions:{userRegistration:function(t,e){var r=e.name,n=e.email,a=e.password;Object(o["j"])(r,n,a).then((function(e){t.commit("updateToken",e.data.token)})).catch((function(e){t.commit("getErrors",e)}))},loginUser:function(t,e){var r=e.email,n=e.password;Object(o["i"])(r,n).then((function(e){t.commit("updateToken",e.data.token)})).catch((function(e){t.commit("getErrors",e)}))},getCurrentPost:function(t,e){var r=e.slug;t.commit("getCurrentPost",r)}},mutations:{updateToken:function(t,e){t.token=e},getErrors:function(t,e){t.error=e},getCurrentPost:function(t,e){t.currentPost=e}},state:{token:"",error:"",user:{},currentPost:""},getters:{getToken:function(t){return t.token},getErrors:function(t){return t.error},getCurrentPost:function(t){return t.currentPost}}};n["a"].use(a["a"]);e["a"]=new a["a"].Store({modules:{token:s}})},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Демоэкзамен")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[r("div",{staticClass:"navbar-nav"},[r("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/theory"}},[t._v("Теория")]),r("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/practic"}},[t._v("Практика")]),t.getToken?r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.userName)+" ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[r("form",{attrs:{id:"profile",action:"profile.php",method:"post"}},[r("router-link",{staticClass:"btn btn-dark",attrs:{to:"/profile"}},[t._v("Профиль")])],1),t._m(1)])]):r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Вход ")]),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[t._v(" "+t._s(t.getErrors)+" "),r("form",{attrs:{id:"sign_in"},on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[r("h3",[t._v("Вход")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign in")]),r("router-link",{staticClass:"btn btn-link",attrs:{to:"/registration"}},[t._v("Sign up")])],1)])])],1)])],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{id:"logout",action:"logout.php",method:"post"}},[r("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("Log out")])])}],c=(r("b0c0"),r("5530")),l=r("2f62"),u=r("c758"),p={name:"Header",computed:Object(l["c"])(["getToken","getErrors"]),data:function(){return{email:"",password:"",userName:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["loginUser"])),{},{signIn:function(){this.loginUser({email:this.email,password:this.password}),this.getUser()},getUser:function(){var t=this;Object(u["d"])().then((function(e){t.userName=e.data.name})).catch((function(t){console.log(t.response.data.errors)}))}})},d=p,m=r("2877"),f=Object(m["a"])(d,s,i,!1,null,null,null),v=f.exports,g={name:"App",components:{Header:v}},h=g,b=Object(m["a"])(h,a,o,!1,null,null,null),w=b.exports,_=(r("d3b7"),r("8c4f")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"tabl"},[r("h2",[t._v("Таблица лидеров")]),r("table",{staticClass:"table table-sm table-dark table-hover"},[t._m(0),r("tbody",t._l(t.profiles,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v("1")]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.score))])])})),0)])]),t._m(1),t._m(2)])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Name")]),r("th",{attrs:{scope:"col"}},[t._v("Score")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{"data-aos":"fade-up"}},[r("h1",[t._v("WORLDSKILLS В РОССИИ")]),t._v("Союз «Молодые профессионалы (Ворлдскиллс Россия)» – официальный оператор международного некоммерческого движения WorldSkills International, миссия которого – повышение стандартов подготовки кадров. Наш девиз: «Делай мир лучше силой своего мастерства!» («Improving the world with the power of skills!»). Раз в два года одна из 80 стран-участниц движения проводит мировой чемпионат профессионального мастерства. В 2019-м он пройдет в России (WorldSkillsKazan 2019). WorldSkills Russia проводит всероссийские чемпионаты профессионального мастерства по пяти направлениям: Конкурсы профессионального мастерства между студентами колледжей и техникумов в возрасте до 22 лет. Раз в год победители региональных первенств соревнуются на Национальном финале «Молодые профессионалы» (WorldSkillsRussia). Из победителей формируется расширенный состав национальной сборной для участия в мировом чемпионате WorldSkills Competition. С 2017 года появилась отдельная возрастная линейка – юниоры WorldSkills (16 и младше лет). ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section__first",attrs:{id:"yak1"}},[r("div",{staticClass:"container",attrs:{"data-aos":"zoom-out-left"}})])}],C={name:"Index",data:function(){return{profiles:[]}},mounted:function(){var t=this;Object(u["h"])().then((function(e){t.profiles=e.data})).catch((function(t){console.log(t)}))}},j=C,P=Object(m["a"])(j,k,y,!1,null,null,null),x=P.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-bg"},[r("section",{staticClass:"container"},[t._v(" "+t._s(t.getErrors)+" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.registration(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword2"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{name:"name",type:"text",id:"exampleInputPassword2",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign up")])])])])},E=[],S={name:"Registration",computed:Object(l["c"])(["getToken","getErrors"]),data:function(){return{email:"",name:"",password:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["userRegistration"])),{},{registration:function(){this.userRegistration({name:this.name,email:this.email,password:this.password})}})},T=S,N=Object(m["a"])(T,O,E,!1,null,null,null),I=N.exports;n["a"].use(_["a"]);var $=new _["a"]({mode:"history",routes:[{path:"/",component:x},{path:"/profile",component:function(){return r.e("chunk-2d0d03d6").then(r.bind(null,"66aa"))}},{path:"/registration",component:I},{path:"/practic",component:function(){return r.e("chunk-2d0cc7d5").then(r.bind(null,"4dc2"))}},{path:"/theory",component:function(){return r.e("chunk-2d2252c2").then(r.bind(null,"e2ed"))}},{name:"lesson",path:"/theory/:lesson_id",component:function(){return r.e("chunk-2d0d6f51").then(r.bind(null,"7585"))}},{name:"practic",path:"/practic/:practic_id",component:function(){return r.e("chunk-99544b2c").then(r.bind(null,"f5c5"))}}]}),R=r("4360");n["a"].config.productionTip=!1,new n["a"]({router:$,store:R["a"],render:function(t){return t(w)}}).$mount("#app")},c758:function(t,e,r){"use strict";r.d(e,"j",(function(){return c})),r.d(e,"i",(function(){return l})),r.d(e,"d",(function(){return u})),r.d(e,"h",(function(){return p})),r.d(e,"e",(function(){return d})),r.d(e,"f",(function(){return m})),r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return g})),r.d(e,"g",(function(){return h})),r.d(e,"k",(function(){return b}));var n=r("4360"),a=r("bc3a"),o=r.n(a),s=function(t){t?o.a.defaults.headers.common["x-auth-token"]=t:delete o.a.defaults.headers.common["x-auth-token"]},i=s;o.a.defaults.baseURL="http://localhost:3000";var c=function(t,e,r){var n={headers:{"Content-Type":"application/json"}},a=JSON.stringify({name:t,email:e,password:r});try{return o.a.post("/api/users",a,n)}catch(s){return s.response.data.errors}},l=function(t,e){var r={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:t,password:e});try{return o.a.post("api/auth",n,r)}catch(a){return a.response.data.errors}},u=function(){n["a"].getters.getToken&&i(n["a"].getters.getToken);try{return o.a.get("api/auth")}catch(t){return t.response.data.errors}},p=function(){return o.a.get("/api/profile")},d=function(){return o.a.get("/api/lesson")},m=function(){return o.a.get("/api/lesson/"+n["a"].getters.getCurrentPost)},f=function(t,e,r,n){var a={headers:{"Content-Type":"application/json"}},s=JSON.stringify({title:t,video:e,theory:r,question:n});try{return o.a.post("api/lesson",s,a)}catch(i){return i.response.data.errors}},v=function(t,e){var r={headers:{"Content-Type":"application/json"}},n=JSON.stringify({title:t,question:e});try{return o.a.post("api/practic",n,r)}catch(a){return a.response.data.errors}},g=function(){return o.a.get("/api/practic")},h=function(){return o.a.get("/api/practic/"+n["a"].getters.getCurrentPost)},b=function(t){n["a"].getters.getToken&&i(n["a"].getters.getToken);var e={headers:{"Content-Type":"application/json"}},r=JSON.stringify({file:t});try{return o.a.put("api/practic/"+n["a"].getters.getCurrentPost,r,e)}catch(a){return a.response.data.errors}}}});
//# sourceMappingURL=app.d698c16f.js.map