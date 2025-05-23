import{A as P,B as L,t as R,w as A,x as H,y as V,z as x}from"./chunk-22AOEDZE.js";import{$a as p,Ac as B,Bc as q,Cc as N,Db as g,Eb as z,Fb as b,Fc as O,Hb as d,Ia as a,Jb as c,Kb as u,N as T,O as y,Ob as S,Pb as F,T as M,Wa as w,Wb as k,Xa as v,_a as $,ba as _,jb as E,kb as o,la as D,ob as Q,ub as f,vb as m,xb as C,yb as I,yc as j,zb as h}from"./chunk-BF6ZZEZH.js";var xe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=v({type:e});static \u0275inj=y({})}return e})();var K=["header"],U=["title"],W=["subtitle"],X=["content"],Y=["footer"],Z=["*",[["p-header"]],[["p-footer"]]],ee=["*","p-header","p-footer"];function te(e,l){e&1&&h(0)}function ne(e,l){if(e&1&&(f(0,"div",8),b(1,1),p(2,te,1,0,"ng-container",6),m()),e&2){let t=g();a(2),o("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ie(e,l){if(e&1&&(C(0),S(1),I()),e&2){let t=g(2);a(),F(t.header)}}function ae(e,l){e&1&&h(0)}function oe(e,l){if(e&1&&(f(0,"div",9),p(1,ie,2,1,"ng-container",10)(2,ae,1,0,"ng-container",6),m()),e&2){let t=g();a(),o("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),a(),o("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function re(e,l){if(e&1&&(C(0),S(1),I()),e&2){let t=g(2);a(),F(t.subheader)}}function le(e,l){e&1&&h(0)}function pe(e,l){if(e&1&&(f(0,"div",11),p(1,re,2,1,"ng-container",10)(2,le,1,0,"ng-container",6),m()),e&2){let t=g();a(),o("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),a(),o("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function de(e,l){e&1&&h(0)}function ce(e,l){e&1&&h(0)}function ue(e,l){if(e&1&&(f(0,"div",12),b(1,2),p(2,ce,1,0,"ng-container",6),m()),e&2){let t=g();a(2),o("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var se=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,fe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},G=(()=>{class e extends P{name="card";theme=se;classes=fe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(e)))(n||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var me=(()=>{class e extends L{header;subheader;set style(t){R(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=D(null);_componentStyle=M(G);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(e)))(n||e)}})();static \u0275cmp=w({type:e,selectors:[["p-card"]],contentQueries:function(r,n,s){if(r&1&&(d(s,A,5),d(s,H,5),d(s,K,4),d(s,U,4),d(s,W,4),d(s,X,4),d(s,Y,4),d(s,V,4)),r&2){let i;c(i=u())&&(n.headerFacet=i.first),c(i=u())&&(n.footerFacet=i.first),c(i=u())&&(n.headerTemplate=i.first),c(i=u())&&(n.titleTemplate=i.first),c(i=u())&&(n.subtitleTemplate=i.first),c(i=u())&&(n.contentTemplate=i.first),c(i=u())&&(n.footerTemplate=i.first),c(i=u())&&(n.templates=i)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[k([G]),$],ngContentSelectors:ee,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(r,n){r&1&&(z(Z),f(0,"div",0),p(1,ne,3,1,"div",1),f(2,"div",2),p(3,oe,3,2,"div",3)(4,pe,3,2,"div",4),f(5,"div",5),b(6),p(7,de,1,0,"ng-container",6),m(),p(8,ue,3,1,"div",7),m()()),r&2&&(Q(n.styleClass),o("ngClass","p-card p-component")("ngStyle",n._style()),E("data-pc-name","card"),a(),o("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),a(2),o("ngIf",n.header||n.titleTemplate||n._titleTemplate),a(),o("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),a(3),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),a(),o("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[O,j,B,N,q,x],encapsulation:2,changeDetection:0})}return e})(),Ne=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[me,x,x]})}return e})();export{xe as a,Ne as b};
