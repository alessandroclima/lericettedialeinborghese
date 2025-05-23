import{a as oe,b as ne}from"./chunk-LQE3VH5F.js";import{b as J}from"./chunk-LCXDAU7F.js";import{A as U,B as G,z as H}from"./chunk-22AOEDZE.js";import{a as A}from"./chunk-735NRJNZ.js";import{h as R,k as $}from"./chunk-2TPUGOKS.js";import{b as K,c as Q,d as X,e as Y,f as Z,g as ee,l as ie,m as te}from"./chunk-Y4UBL3LJ.js";import{$ as g,$a as p,Ab as k,Ac as O,Cb as w,Db as h,Eb as N,Fb as q,Fc as P,Ia as s,N as z,Nb as m,O as I,Ob as l,T as y,Tb as E,Ub as x,Vb as F,Wa as S,Wb as W,Xa as V,_ as u,_a as T,ba as L,jb as D,kb as v,la as C,lb as j,mb as B,ob as M,pb as _,ub as r,vb as n,wb as b}from"./chunk-BF6ZZEZH.js";var de=["*"],se=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,me={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},ce={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},re=(()=>{class e extends U{name="divider";theme=se;classes=ce;inlineStyles=me;static \u0275fac=(()=>{let t;return function(i){return(t||(t=L(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var ue=(()=>{class e extends G{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=y(re);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=L(e)))(i||e)}})();static \u0275cmp=S({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,i){o&2&&(D("aria-orientation",i.layout)("data-pc-name","divider")("role","separator"),M(i.hostClass),j("justify-content",i.layout==="horizontal"?i.align==="center"||i.align===void 0?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null)("align-items",i.layout==="vertical"?i.align==="center"||i.align===void 0?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null),B("p-divider",!0)("p-component",!0)("p-divider-horizontal",i.layout==="horizontal")("p-divider-vertical",i.layout==="vertical")("p-divider-solid",i.type==="solid")("p-divider-dashed",i.type==="dashed")("p-divider-dotted",i.type==="dotted")("p-divider-left",i.layout==="horizontal"&&(!i.align||i.align==="left"))("p-divider-center",i.layout==="horizontal"&&i.align==="center"||i.layout==="vertical"&&(!i.align||i.align==="center"))("p-divider-right",i.layout==="horizontal"&&i.align==="right")("p-divider-top",i.layout==="vertical"&&i.align==="top")("p-divider-bottom",i.layout==="vertical"&&i.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[W([re]),T],ngContentSelectors:de,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,i){o&1&&(N(),r(0,"div",0),q(1),n())},dependencies:[P,H],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=V({type:e});static \u0275inj=I({imports:[ue]})}return e})();function ge(e,c){e&1&&(r(0,"small",19),l(1,"Email obbligatoria"),n())}function pe(e,c){e&1&&(r(0,"small"),l(1,"Formato email non valido"),n())}function fe(e,c){if(e&1&&p(0,ge,2,0,"small",37)(1,pe,2,0,"small",38),e&2){h();let t=m(13);v("ngIf",t.errors==null?null:t.errors.required),s(),v("ngIf",t.errors==null?null:t.errors.email)}}function ve(e,c){e&1&&(r(0,"small",19),l(1,"Password obbligatoria"),n())}function be(e,c){if(e&1&&p(0,ve,2,0,"small",37),e&2){h();let t=m(20);v("ngIf",t.errors==null?null:t.errors.required)}}function he(e,c){e&1&&(r(0,"small",19),l(1,"Email obbligatoria"),n())}function ye(e,c){e&1&&(r(0,"small"),l(1,"Formato email non valido"),n())}function _e(e,c){if(e&1&&p(0,he,2,0,"small",37)(1,ye,2,0,"small",38),e&2){h(2);let t=m(13);v("ngIf",t.errors==null?null:t.errors.required),s(),v("ngIf",t.errors==null?null:t.errors.email)}}function we(e,c){if(e&1){let t=k();r(0,"form",11,3),w("ngSubmit",function(){u(t);let i=m(1),a=h();return g(a.OnForgotPassword(i))}),r(2,"div",12)(3,"label",39),l(4,"Email"),n(),r(5,"input",40,4),F("ngModelChange",function(i){u(t);let a=h();return x(a.modelForgotPassword().Email,i)||(a.modelForgotPassword().Email=i),g(i)}),n(),p(7,_e,2,2),n(),r(8,"button",29),b(9,"i",30),l(10,"Invia link per reset password"),n()()}if(e&2){let t=m(1),o=h(),i=m(13);s(5),E("ngModel",o.modelForgotPassword().Email),s(2),_(i.invalid&&(i.touched||t.submitted)?7:-1)}}function Ce(e,c){e&1&&(r(0,"div",28),l(1," \u2705 Email per il reset inviata con successo! "),n())}var Ke=(()=>{class e{constructor(){this.authService=y(A),this.router=y(R),this.cookieService=y($),this.model=C({email:"",password:""}),this.modelForgotPassword=C({Email:""}),this.showPassword=C(!1),this.success=!1}OnRegister(){this.router.navigate(["/register"])}OnForgotPassword(t){if(t.value.emailforreset==null||t.value.emailforreset==""){t.controls.emailforreset.setErrors({required:!0}),console.error("Email is required");return}if(!t.controls.emailforreset.valid){console.error("Email is not valid");return}this.success=!0,t.controls.emailforreset.setErrors(null),console.log("Email is valid"),this.forgotPasswordSubscription=this.authService.forgotPassword(this.modelForgotPassword()).subscribe({next:o=>{console.log("Email sent",o)},error:o=>{console.error("Error sending email",o)}})}onSubmit(t){t.valid?this.loginSubscription=this.authService.loginUser(this.model()).subscribe({next:o=>{console.log(o),this.cookieService.set("Authorization",`Bearer ${o.token}`,void 0,"/",void 0,!0,"Strict");let i={username:o.username,email:o.email,roles:o.roles};this.authService.setUser(i),this.router.navigate(["/admin/recipes"])},error:o=>{console.error("Error logging user",o)}}):console.error("Form is invalid",t.errors)}onShowPassword(){this.showPassword.set(!this.showPassword())}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-login"]],decls:47,vars:9,consts:[["loginForm","ngForm"],["email","ngModel"],["password","ngModel"],["forgotForm","ngForm"],["emailforreset","ngModel"],[1,"container","mt-5","mb-4"],[1,"row","justify-content-center"],[1,"col-md-8","col-sm-10"],[1,"d-flex","flex-column","flex-md-row","align-items-center","border","rounded","p-4","bg-light"],[1,"flex-fill","pe-md-4","mb-4","mb-md-0","w-100"],[1,"mb-4","text-center",2,"color","#e84919"],[3,"ngSubmit"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","required","","id","email","name","email","placeholder","Inserisci email",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],[1,"input-group","mb-3"],["required","","id","password","name","password","placeholder","Inserisci password",1,"form-control",3,"ngModelChange","type","ngModel"],["type","button","id","button-addon2",1,"btn","btn-outline-secondary",3,"click"],[1,"text-red"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-light","w-100","mb-3",2,"border-color","#e84919"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"alert","alert-success"],["type","submit",1,"btn","btn-light","w-100",2,"border-color","#e84919"],[1,"bi","bi-box-arrow-in-right","me-2",2,"color","#e84919"],[1,"vr","mx-4","d-none","d-md-block",2,"height","300px"],[1,"d-block","d-md-none","w-100","my-4"],[1,"text-center","ps-md-4","w-100"],[1,"mb-3",2,"color","#e84919"],[1,"btn","btn-light","w-100",2,"border-color","#e84919",3,"click"],[1,"bi","bi-person-plus","me-2",2,"color","#e84919"],["class","text-red",4,"ngIf"],[4,"ngIf"],["for","emailforreset",1,"form-label"],["type","email","required","","id","emailforreset","name","emailforreset","placeholder","Inserisci la tua email",1,"form-control",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let a=k();r(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9)(5,"h2",10),l(6,"Accedi"),n(),r(7,"form",11,0),w("ngSubmit",function(){u(a);let d=m(8);return g(i.onSubmit(d))}),r(9,"div",12)(10,"label",13),l(11,"Email"),n(),r(12,"input",14,1),F("ngModelChange",function(d){return u(a),x(i.model().email,d)||(i.model().email=d),g(d)}),n(),p(14,fe,2,2),n(),r(15,"div",12)(16,"label",15),l(17,"Password"),n(),r(18,"div",16)(19,"input",17,2),F("ngModelChange",function(d){return u(a),x(i.model().password,d)||(i.model().password=d),g(d)}),n(),r(21,"button",18),w("click",function(){return u(a),g(i.onShowPassword())}),b(22,"i"),n()(),p(23,be,1,1,"small",19),n(),r(24,"button",20),l(25," Password dimenticata? "),n(),r(26,"div",21)(27,"div",22)(28,"div",23)(29,"div",24)(30,"h1",25),l(31,"Password dimenticata"),n(),b(32,"button",26),n(),r(33,"div",27),p(34,we,11,2,"form")(35,Ce,2,0,"div",28),n()()()(),r(36,"button",29),b(37,"i",30),l(38,"Login"),n()()(),b(39,"div",31)(40,"hr",32),r(41,"div",33)(42,"h5",34),l(43,"Nuovo utente?"),n(),r(44,"button",35),w("click",function(){return u(a),g(i.OnRegister())}),b(45,"i",36),l(46," Registrati"),n()()()()()()}if(o&2){let a=m(8),f=m(13),d=m(20);s(12),E("ngModel",i.model().email),s(2),_(f.invalid&&(f.touched||a.submitted)?14:-1),s(5),v("type",i.showPassword()?"text":"password"),E("ngModel",i.model().password),s(3),M(i.showPassword()?"bi bi-eye-slash-fill":"bi bi-eye-fill"),s(),_(d.invalid&&(d.touched||a.submitted)?23:-1),s(11),_(i.success?-1:34),s(),_(i.success?35:-1)}},dependencies:[le,J,oe,ne,te,ee,K,Q,X,ie,Z,Y,P,O],styles:[".form-control[_ngcontent-%COMP%]:focus{border-color:#e84919;box-shadow:0 0 0 .2rem #e8491940}"]})}}return e})();export{Ke as LoginComponent};
