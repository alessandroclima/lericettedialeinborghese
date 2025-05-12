import{a as ne,b as oe}from"./chunk-F2RV6YEE.js";import{b as J}from"./chunk-PMM4ZVK6.js";import{a as U}from"./chunk-DLAUTZIU.js";import{A,C as G,z as R}from"./chunk-PU5WDZF4.js";import{g as O,j as H}from"./chunk-YNLNNLDO.js";import{b as K,c as Q,d as X,e as Y,f as Z,g as ee,l as ie,m as te}from"./chunk-HZ2NMNNL.js";import"./chunk-N7HB2IBM.js";import{$ as g,Ba as u,Fb as s,Gb as d,Lb as z,Mb as k,Nb as E,O as F,Oa as h,Ob as W,P as D,Pa as x,Sa as L,Ta as v,U as c,aa as p,ca as C,cb as V,db as y,eb as j,fb as T,hb as B,ib as w,na as I,nb as r,ob as o,pb as b,sc as q,tb as N,ub as S,vb as M,wb as P,xb as $,xc as _}from"./chunk-L66XQOBG.js";var ae=["*"],se=({dt:e})=>`
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
`,me={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},ce={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},re=(()=>{class e extends A{name="divider";theme=se;classes=ce;inlineStyles=me;static \u0275fac=(()=>{let t;return function(i){return(t||(t=C(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var ue=(()=>{class e extends G{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=c(re);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=C(e)))(i||e)}})();static \u0275cmp=h({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(n,i){n&2&&(V("aria-orientation",i.layout)("data-pc-name","divider")("role","separator"),B(i.hostClass),j("justify-content",i.layout==="horizontal"?i.align==="center"||i.align===void 0?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null)("align-items",i.layout==="vertical"?i.align==="center"||i.align===void 0?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null),T("p-divider",!0)("p-component",!0)("p-divider-horizontal",i.layout==="horizontal")("p-divider-vertical",i.layout==="vertical")("p-divider-solid",i.type==="solid")("p-divider-dashed",i.type==="dashed")("p-divider-dotted",i.type==="dotted")("p-divider-left",i.layout==="horizontal"&&(!i.align||i.align==="left"))("p-divider-center",i.layout==="horizontal"&&i.align==="center"||i.layout==="vertical"&&(!i.align||i.align==="center"))("p-divider-right",i.layout==="horizontal"&&i.align==="right")("p-divider-top",i.layout==="vertical"&&i.align==="top")("p-divider-bottom",i.layout==="vertical"&&i.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[W([re]),L],ngContentSelectors:ae,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(n,i){n&1&&(P(),r(0,"div",0),$(1),o())},dependencies:[_,R],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=x({type:e});static \u0275inj=D({imports:[ue]})}return e})();function ge(e,f){e&1&&(r(0,"small",15),d(1,"Email obbligatoria"),o())}function pe(e,f){e&1&&(r(0,"small"),d(1,"Formato email non valido"),o())}function ve(e,f){if(e&1&&v(0,ge,2,0,"small",24)(1,pe,2,0,"small",25),e&2){M();let t=s(13);y("ngIf",t.errors==null?null:t.errors.required),u(),y("ngIf",t.errors==null?null:t.errors.email)}}function fe(e,f){e&1&&(r(0,"small",15),d(1,"Password obbligatoria"),o())}function he(e,f){if(e&1&&v(0,fe,2,0,"small",24),e&2){M();let t=s(19);y("ngIf",t.errors==null?null:t.errors.required)}}var Oe=(()=>{class e{constructor(){this.authService=c(U),this.router=c(O),this.cookieService=c(H),this.model=I({email:"",password:""})}OnRegister(){this.router.navigate(["/register"])}onSubmit(t){t.valid?this.loginSubscription=this.authService.loginUser(this.model()).subscribe({next:n=>{console.log(n),this.cookieService.set("Authorization",`Bearer ${n.token}`,void 0,"/",void 0,!0,"Strict");let i={email:n.email,roles:n.roles};this.authService.setUser(i),this.router.navigate(["/admin/recipes"])},error:n=>{console.error("Error logging user",n)}}):console.error("Form is invalid",t.errors)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=h({type:e,selectors:[["app-login"]],decls:32,vars:4,consts:[["loginForm","ngForm"],["email","ngModel"],["password","ngModel"],[1,"container","mt-5","mb-4"],[1,"row","justify-content-center"],[1,"col-md-8","col-sm-10"],[1,"d-flex","flex-column","flex-md-row","align-items-center","border","rounded","p-4","bg-light"],[1,"flex-fill","pe-md-4","mb-4","mb-md-0","w-100"],[1,"mb-4","text-center",2,"color","#e84919"],[3,"ngSubmit"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","required","","id","email","name","email","placeholder","Inserisci email",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],["type","password","required","","id","password","name","password","placeholder","Inserisci password",1,"form-control",3,"ngModelChange","ngModel"],[1,"text-red"],["type","submit",1,"btn","btn-light","w-100",2,"border-color","#e84919"],[1,"bi","bi-box-arrow-in-right","me-2",2,"color","#e84919"],[1,"vr","mx-4","d-none","d-md-block",2,"height","300px"],[1,"d-block","d-md-none","w-100","my-4"],[1,"text-center","ps-md-4","w-100"],[1,"mb-3",2,"color","#e84919"],[1,"btn","btn-light","w-100",2,"border-color","#e84919",3,"click"],[1,"bi","bi-person-plus","me-2",2,"color","#e84919"],["class","text-red",4,"ngIf"],[4,"ngIf"]],template:function(n,i){if(n&1){let a=N();r(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"h2",8),d(6,"Accedi"),o(),r(7,"form",9,0),S("ngSubmit",function(){g(a);let l=s(8);return p(i.onSubmit(l))}),r(9,"div",10)(10,"label",11),d(11,"Email"),o(),r(12,"input",12,1),E("ngModelChange",function(l){return g(a),k(i.model().email,l)||(i.model().email=l),p(l)}),o(),v(14,ve,2,2),o(),r(15,"div",10)(16,"label",13),d(17,"Password"),o(),r(18,"input",14,2),E("ngModelChange",function(l){return g(a),k(i.model().password,l)||(i.model().password=l),p(l)}),o(),v(20,he,1,1,"small",15),o(),r(21,"button",16),b(22,"i",17),d(23,"Login"),o()()(),b(24,"div",18)(25,"hr",19),r(26,"div",20)(27,"h5",21),d(28,"Nuovo utente?"),o(),r(29,"button",22),S("click",function(){return g(a),p(i.OnRegister())}),b(30,"i",23),d(31," Registrati"),o()()()()()()}if(n&2){let a=s(8),m=s(13),l=s(19);u(12),z("ngModel",i.model().email),u(2),w(m.invalid&&(m.touched||a.submitted)?14:-1),u(4),z("ngModel",i.model().password),u(2),w(l.invalid&&(l.touched||a.submitted)?20:-1)}},dependencies:[le,J,ne,oe,te,ee,K,Q,X,ie,Z,Y,_,q],styles:[".form-control[_ngcontent-%COMP%]:focus{border-color:#e84919;box-shadow:0 0 0 .2rem #e8491940}"]})}}return e})();export{Oe as LoginComponent};
