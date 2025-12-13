import{A as q,E as H,F as U,G as O,H as I,I as X,J as G,K as L,L as v,M as C}from"./chunk-5U72W4JI.js";import{$a as N,$b as B,Eb as g,Fb as P,Gb as _,Ha as a,Hb as z,Jb as p,Kb as s,L as M,M as y,Nc as Q,O as w,Pc as $,Q as x,Qb as R,Rb as c,Sb as F,Sc as V,Tb as S,Wa as A,Xa as b,_a as D,ab as l,fa as j,ja as T,qb as i,rb as f,sb as m,xb as k,yb as E,zb as h}from"./chunk-NJUIOJGT.js";var J=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Dt=`
    ${J}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var Nt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=b({type:e});static \u0275inj=y({})}return e})();var K=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var tt=["header"],et=["title"],nt=["subtitle"],it=["content"],ot=["footer"],rt=["*",[["p-header"]],[["p-footer"]]],at=["*","p-header","p-footer"];function dt(e,d){e&1&&h(0)}function lt(e,d){if(e&1&&(f(0,"div",1),_(1,1),l(2,dt,1,0,"ng-container",2),m()),e&2){let t=g();c(t.cx("header")),i("pBind",t.ptm("header")),a(2),i("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function pt(e,d){if(e&1&&(k(0),F(1),E()),e&2){let t=g(2);a(),S(t.header)}}function st(e,d){e&1&&h(0)}function ct(e,d){if(e&1&&(f(0,"div",1),l(1,pt,2,1,"ng-container",3)(2,st,1,0,"ng-container",2),m()),e&2){let t=g();c(t.cx("title")),i("pBind",t.ptm("title")),a(),i("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),a(),i("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ut(e,d){if(e&1&&(k(0),F(1),E()),e&2){let t=g(2);a(),S(t.subheader)}}function ft(e,d){e&1&&h(0)}function mt(e,d){if(e&1&&(f(0,"div",1),l(1,ut,2,1,"ng-container",3)(2,ft,1,0,"ng-container",2),m()),e&2){let t=g();c(t.cx("subtitle")),i("pBind",t.ptm("subtitle")),a(),i("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),a(),i("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function gt(e,d){e&1&&h(0)}function ht(e,d){e&1&&h(0)}function vt(e,d){if(e&1&&(f(0,"div",1),_(1,2),l(2,ht,1,0,"ng-container",2),m()),e&2){let t=g();c(t.cx("footer")),i("pBind",t.ptm("footer")),a(2),i("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var yt=`
    ${K}

    .p-card {
        display: block;
    }
`,xt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},W=(()=>{class e extends X{name="card";style=yt;classes=xt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Y=new w("CARD_INSTANCE"),Tt=(()=>{class e extends L{$pcCard=x(Y,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=x(v,{self:!0});_componentStyle=x(W);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){q(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(o=>{this.el.nativeElement.style[o]=t[o]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=j(null);getBlockableElement(){return this.el.nativeElement.children[0]}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275cmp=A({type:e,selectors:[["p-card"]],contentQueries:function(o,n,u){if(o&1&&z(u,H,5)(u,U,5)(u,tt,4)(u,et,4)(u,nt,4)(u,it,4)(u,ot,4)(u,O,4),o&2){let r;p(r=s())&&(n.headerFacet=r.first),p(r=s())&&(n.footerFacet=r.first),p(r=s())&&(n.headerTemplate=r.first),p(r=s())&&(n.titleTemplate=r.first),p(r=s())&&(n.subtitleTemplate=r.first),p(r=s())&&(n.contentTemplate=r.first),p(r=s())&&(n.footerTemplate=r.first),p(r=s())&&(n.templates=r)}},hostVars:4,hostBindings:function(o,n){o&2&&(R(n._style()),c(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[B([W,{provide:Y,useExisting:e},{provide:G,useExisting:e}]),D([v]),N],ngContentSelectors:at,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(o,n){o&1&&(P(rt),l(0,lt,3,4,"div",0),f(1,"div",1),l(2,ct,3,5,"div",0)(3,mt,3,5,"div",0),f(4,"div",1),_(5),l(6,gt,1,0,"ng-container",2),m(),l(7,vt,3,4,"div",0),m()),o&2&&(i("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),a(),c(n.cx("body")),i("pBind",n.ptm("body")),a(),i("ngIf",n.header||n.titleTemplate||n._titleTemplate),a(),i("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),a(),c(n.cx("content")),i("pBind",n.ptm("content")),a(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),a(),i("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[V,Q,$,I,C,v],encapsulation:2,changeDetection:0})}return e})(),Lt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=b({type:e});static \u0275inj=y({imports:[Tt,I,C,I,C]})}return e})();export{Nt as a,Lt as b};
