import{b as K}from"./chunk-6B63HLMN.js";import"./chunk-NJ2I7JHJ.js";import{A as G,H as N,I as W,J as $,L as q,O as z,W as J,q as T,s as F,t as R,u as A,w as B,x as L,y as O,z as j}from"./chunk-356WMELQ.js";import"./chunk-JGYM447R.js";import{f as k,i as D,m as w}from"./chunk-U5LOJRI2.js";import{l as I,o as P}from"./chunk-FQX2LY3L.js";import{Ab as r,Bb as e,Cb as l,Jb as C,Rb as i,Sb as m,Tb as M,Va as n,Vb as _,Wb as y,Yb as E,Zb as H,da as d,ia as h,mb as f,nb as x,ob as g,rb as p,xb as S,yb as v,zb as b}from"./chunk-QDOQSJTN.js";var Q=()=>[I,D,T,F,B,A,L,O,R,j,G,$,q,import("./chunk-6INZCKJA.js").then(t=>t.HeroImagePipe)],U=()=>({padding:"1rem"});function V(t,a){if(t&1&&(r(0,"mat-chip")(1,"span"),i(2),e()()),t&2){let o=a.$implicit;n(2),m(o)}}function X(t,a){if(t&1&&(r(0,"div",0)(1,"mat-card",1),l(2,"img",2),E(3,"heroImage"),e(),r(4,"mat-card",1)(5,"mat-card-header",3)(6,"mat-card-title")(7,"b",4),i(8,"Name: "),e(),r(9,"span",4),i(10),e()(),r(11,"mat-card-title")(12,"b",4),i(13,"Alter Ego: "),e(),r(14,"span",4),i(15),e()()(),r(16,"mat-card-content")(17,"span",5)(18,"b"),i(19,"First Appearance: "),e(),i(20),e(),r(21,"span",6),i(22),e(),l(23,"mat-divider",7),r(24,"span",8)(25,"b"),i(26,"Characters: "),e()(),r(27,"mat-chip-set",9),v(28,V,3,1,"mat-chip",null,S),e()(),r(30,"mat-card-actions",10)(31,"button",11)(32,"mat-icon"),i(33,"arrow_back"),e(),i(34,"Back"),e()()()()),t&2){let o=C();n(2),p("srcset",H(3,7,o.heroesService.currentHero())),n(8),m(o.heroesService.currentHero().superhero),n(5),m(o.heroesService.currentHero().alter_ego),n(5),M(" ",o.heroesService.currentHero().first_appearance,""),n(2),m(o.heroesService.currentHero().publisher),n(6),b(o.heroesService.currentHero().characters.split(",")),n(2),p("align","end")("ngStyle",y(9,U))}}function Y(t,a){t&1&&(r(0,"mat-grid-list",12)(1,"mat-grid-tile"),l(2,"mat-spinner"),e()())}var fe=(()=>{let a=class a{constructor(){this.route=d(k),this.heroesService=d(K),this.currentId="",this.characters=[],this.deepChars=[]}getRouteParams(){this.route.params.subscribe(c=>{this.heroesService.getHero(c.id),this.currentId=c.id})}ngOnInit(){this.getRouteParams()}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=h({type:a,selectors:[["app-hero-page"]],standalone:!0,features:[_],decls:4,vars:1,consts:[[1,"flex","flex-col","md:flex-row","items-center","justify-center","gap-0","md:gap-6","px-3","md:px-6","lg:px-8","xl:px-12","py-6","md:p-7"],[1,"w-4/5","md:w-2/5","max-w-lg","custom-card"],["mat-card-image","","alt","hero image",3,"srcset"],[1,"mb-2"],[1,"font-extrabold"],[1,"text-base","block"],[1,"mb-2","mt-1","text-lg","block","font-medium"],[1,"py-1"],[1,"text-lg"],["aria-label","hero characters"],[3,"align","ngStyle"],["mat-flat-button","","color","primary","routerLink","/heroes/list"],["cols","1"]],template:function(s,u){s&1&&(f(0,X,35,10)(1,Y,3,0),x(2,0,Q,null,1)),s&2&&(n(2),g(u.heroesService.currentHero().id===u.currentId))},dependencies:[P,w,J,W,N,z],styles:["[_nghost-%COMP%]     .custom-card{border:3px solid black;border-radius:0;box-shadow:10px 10px}[_nghost-%COMP%]     .mdc-button__label{padding-top:0}"]});let t=a;return t})();export{fe as default};