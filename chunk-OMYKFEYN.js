import{a as de,b as se}from"./chunk-JFJ2YSLI.js";import{b as $}from"./chunk-KVDHV743.js";import{H as Q,I as X,J as Y,K as Z,L as x,M as k}from"./chunk-5U72W4JI.js";import{a as K}from"./chunk-MW3LATQC.js";import{h as G,k as J}from"./chunk-JNLZWUGK.js";import{b as ee,c as te,d as ie,e as oe,f as ne,g as re,l as le,m as ae}from"./chunk-M5CNCOWI.js";import{$a as A,$b as H,Ab as T,Db as w,Eb as h,Fb as W,Gb as R,Ha as s,L as V,M as N,Nb as m,Nc as U,O as B,Q as u,Qb as O,Rb as C,Sb as l,Sc as D,W as g,Wa as E,X as f,Xa as z,Xb as F,Yb as I,Zb as P,_a as j,ab as M,fa as S,ja as L,jb as q,kb as _,lb as y,qb as p,rb as r,sb as n,tb as b}from"./chunk-NJUIOJGT.js";var me=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
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
`;var fe=["*"],ve={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},be={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},ce=(()=>{class e extends X{name="divider";style=me;classes=be;inlineStyles=ve;static \u0275fac=(()=>{let i;return function(t){return(i||(i=L(e)))(t||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var pe=new B("DIVIDER_INSTANCE"),he=(()=>{class e extends Z{$pcDivider=u(pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=u(ce);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let i;return function(t){return(i||(i=L(e)))(t||e)}})();static \u0275cmp=E({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(o,t){o&2&&(q("aria-orientation",t.layout)("data-p",t.dataP),O(t.sx("root")),C(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[H([ce,{provide:pe,useExisting:e},{provide:Y,useExisting:e}]),j([x]),A],ngContentSelectors:fe,decls:2,vars:3,consts:[[3,"pBind"]],template:function(o,t){o&1&&(W(),r(0,"div",0),R(1),n()),o&2&&(C(t.cx("content")),p("pBind",t.ptm("content")))},dependencies:[D,Q,k,x],encapsulation:2,changeDetection:0})}return e})(),ue=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=z({type:e});static \u0275inj=N({imports:[he,k,k]})}return e})();function _e(e,c){e&1&&(r(0,"small",19),l(1,"Email obbligatoria"),n())}function ye(e,c){e&1&&(r(0,"small"),l(1,"Formato email non valido"),n())}function we(e,c){if(e&1&&M(0,_e,2,0,"small",37)(1,ye,2,0,"small",38),e&2){h();let i=m(13);p("ngIf",i.errors==null?null:i.errors.required),s(),p("ngIf",i.errors==null?null:i.errors.email)}}function Ce(e,c){e&1&&(r(0,"small",19),l(1,"Password obbligatoria"),n())}function xe(e,c){if(e&1&&M(0,Ce,2,0,"small",37),e&2){h();let i=m(20);p("ngIf",i.errors==null?null:i.errors.required)}}function Se(e,c){e&1&&(r(0,"small",19),l(1,"Email obbligatoria"),n())}function Ee(e,c){e&1&&(r(0,"small"),l(1,"Formato email non valido"),n())}function Me(e,c){if(e&1&&M(0,Se,2,0,"small",37)(1,Ee,2,0,"small",38),e&2){h(2);let i=m(13);p("ngIf",i.errors==null?null:i.errors.required),s(),p("ngIf",i.errors==null?null:i.errors.email)}}function Fe(e,c){if(e&1){let i=T();r(0,"form",11,3),w("ngSubmit",function(){g(i);let t=m(1),a=h();return f(a.OnForgotPassword(t))}),r(2,"div",12)(3,"label",39),l(4,"Email"),n(),r(5,"input",40,4),P("ngModelChange",function(t){g(i);let a=h();return I(a.modelForgotPassword().Email,t)||(a.modelForgotPassword().Email=t),f(t)}),n(),_(7,Me,2,2),n(),r(8,"button",29),b(9,"i",30),l(10,"Invia link per reset password"),n()()}if(e&2){let i=m(1),o=h(),t=m(13);s(5),F("ngModel",o.modelForgotPassword().Email),s(2),y(t.invalid&&(t.touched||i.submitted)?7:-1)}}function Ie(e,c){e&1&&(r(0,"div",28),l(1," \u2705 Email per il reset inviata con successo! "),n())}var nt=(()=>{class e{constructor(){this.authService=u(K),this.router=u(G),this.cookieService=u(J),this.model=S({email:"",password:""}),this.modelForgotPassword=S({Email:""}),this.showPassword=S(!1),this.success=!1}OnRegister(){this.router.navigate(["/register"])}OnForgotPassword(i){if(i.value.emailforreset==null||i.value.emailforreset==""){i.controls.emailforreset.setErrors({required:!0}),console.error("Email is required");return}if(!i.controls.emailforreset.valid){console.error("Email is not valid");return}this.success=!0,i.controls.emailforreset.setErrors(null),console.log("Email is valid"),this.forgotPasswordSubscription=this.authService.forgotPassword(this.modelForgotPassword()).subscribe({next:o=>{console.log("Email sent",o)},error:o=>{console.error("Error sending email",o)}})}onSubmit(i){i.valid?this.loginSubscription=this.authService.loginUser(this.model()).subscribe({next:o=>{console.log(o);let t={username:o.username,email:o.email,roles:o.roles};this.authService.setUser(t),this.router.navigate(["/admin/recipes"])},error:o=>{console.error("Error logging user",o)}}):console.error("Form is invalid",i.errors)}onShowPassword(){this.showPassword.set(!this.showPassword())}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=E({type:e,selectors:[["app-login"]],decls:47,vars:9,consts:[["loginForm","ngForm"],["email","ngModel"],["password","ngModel"],["forgotForm","ngForm"],["emailforreset","ngModel"],[1,"container","mt-5","mb-4"],[1,"row","justify-content-center"],[1,"col-md-8","col-sm-10"],[1,"d-flex","flex-column","flex-md-row","align-items-center","border","rounded","p-4","bg-light"],[1,"flex-fill","pe-md-4","mb-4","mb-md-0","w-100"],[1,"mb-4","text-center",2,"color","#e84919"],[3,"ngSubmit"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","required","","id","email","name","email","placeholder","Inserisci email",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],[1,"input-group","mb-3"],["required","","id","password","name","password","placeholder","Inserisci password",1,"form-control",3,"ngModelChange","type","ngModel"],["type","button","id","button-addon2",1,"btn","btn-outline-secondary",3,"click"],[1,"text-red"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-light","w-100","mb-3",2,"border-color","#e84919"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"alert","alert-success"],["type","submit",1,"btn","btn-light","w-100",2,"border-color","#e84919"],[1,"bi","bi-box-arrow-in-right","me-2",2,"color","#e84919"],[1,"vr","mx-4","d-none","d-md-block",2,"height","300px"],[1,"d-block","d-md-none","w-100","my-4"],[1,"text-center","ps-md-4","w-100"],[1,"mb-3",2,"color","#e84919"],[1,"btn","btn-light","w-100",2,"border-color","#e84919",3,"click"],[1,"bi","bi-person-plus","me-2",2,"color","#e84919"],["class","text-red",4,"ngIf"],[4,"ngIf"],["for","emailforreset",1,"form-label"],["type","email","required","","id","emailforreset","name","emailforreset","placeholder","Inserisci la tua email",1,"form-control",3,"ngModelChange","ngModel"]],template:function(o,t){if(o&1){let a=T();r(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9)(5,"h2",10),l(6,"Accedi"),n(),r(7,"form",11,0),w("ngSubmit",function(){g(a);let d=m(8);return f(t.onSubmit(d))}),r(9,"div",12)(10,"label",13),l(11,"Email"),n(),r(12,"input",14,1),P("ngModelChange",function(d){return g(a),I(t.model().email,d)||(t.model().email=d),f(d)}),n(),_(14,we,2,2),n(),r(15,"div",12)(16,"label",15),l(17,"Password"),n(),r(18,"div",16)(19,"input",17,2),P("ngModelChange",function(d){return g(a),I(t.model().password,d)||(t.model().password=d),f(d)}),n(),r(21,"button",18),w("click",function(){return g(a),f(t.onShowPassword())}),b(22,"i"),n()(),_(23,xe,1,1,"small",19),n(),r(24,"button",20),l(25," Password dimenticata? "),n(),r(26,"div",21)(27,"div",22)(28,"div",23)(29,"div",24)(30,"h1",25),l(31,"Password dimenticata"),n(),b(32,"button",26),n(),r(33,"div",27),_(34,Fe,11,2,"form"),_(35,Ie,2,0,"div",28),n()()()(),r(36,"button",29),b(37,"i",30),l(38,"Login"),n()()(),b(39,"div",31)(40,"hr",32),r(41,"div",33)(42,"h5",34),l(43,"Nuovo utente?"),n(),r(44,"button",35),w("click",function(){return g(a),f(t.OnRegister())}),b(45,"i",36),l(46," Registrati"),n()()()()()()}if(o&2){let a=m(8),v=m(13),d=m(20);s(12),F("ngModel",t.model().email),s(2),y(v.invalid&&(v.touched||a.submitted)?14:-1),s(5),p("type",t.showPassword()?"text":"password"),F("ngModel",t.model().password),s(3),C(t.showPassword()?"bi bi-eye-slash-fill":"bi bi-eye-fill"),s(),y(d.invalid&&(d.touched||a.submitted)?23:-1),s(11),y(t.success?-1:34),s(),y(t.success?35:-1)}},dependencies:[ue,$,de,se,ae,re,ee,te,ie,le,ne,oe,D,U],styles:[".form-control[_ngcontent-%COMP%]:focus{border-color:#e84919;box-shadow:0 0 0 .2rem #e8491940}"]})}}return e})();export{nt as LoginComponent};
