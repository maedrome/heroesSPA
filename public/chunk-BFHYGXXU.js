import{b as L}from"./chunk-6B63HLMN.js";import"./chunk-NJ2I7JHJ.js";import{H as C,I as b,O as M,W as D}from"./chunk-356WMELQ.js";import"./chunk-JGYM447R.js";import"./chunk-U5LOJRI2.js";import{l as y,o as w}from"./chunk-FQX2LY3L.js";import{Ab as i,Bb as r,Cb as a,Jb as u,Rb as v,Va as o,Vb as S,Wb as _,da as m,ia as s,mb as d,nb as c,ob as f,rb as p,xb as x,yb as g,zb as h}from"./chunk-QDOQSJTN.js";var E=()=>[y,import("./chunk-C4BZEXXG.js").then(e=>e.HeroCardComponent)],F=()=>({"font-family":"Bangers, system-ui",color:"#000000","box-shadow":"8px 8px rgb(0 0 0 / 80%)",border:"3px solid black"});function k(e,t){if(e&1&&(i(0,"div",4),a(1,"app-hero-card",5),r()),e&2){let l=t.$implicit;o(),p("hero",l)}}function H(e,t){if(e&1&&(i(0,"p",1),v(1,"List of Heroes"),r(),a(2,"div",2),i(3,"div",3),g(4,k,2,1,"div",4,x),r()),e&2){let l=u();p("ngStyle",_(1,F)),o(4),h(l.heroesService.heroes())}}function j(e,t){e&1&&(i(0,"mat-grid-list",6)(1,"mat-grid-tile"),a(2,"mat-spinner"),r()())}var A=(()=>{let t=class t{constructor(){this.heroesService=m(L)}ngOnInit(){this.heroesService.getHeroes()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-list-page"]],standalone:!0,features:[S],decls:5,vars:1,consts:[[1,"px-3","md:px-6","lg:px-8","xl:px-12","pb-5","pt-4"],[1,"p-3","md:p-4","bg-white","w-fit","text-2xl","md:text-3xl","border-y-2","border-x-2","border-black","tracking-wider",3,"ngStyle"],[1,"w-full","h-2"],[1,"flex","flex-wrap","justify-center","gap-6"],[1,"w-3/5","md:w-1/3","lg:w-1/4","xl:w-1/5"],[3,"hero"],["cols","1"]],template:function(n,T){n&1&&(i(0,"div",0),d(1,H,6,2)(2,j,3,0),c(3,1,E,null,2),r()),n&2&&(o(3),f(T.heroesService.heroes().length>0))},dependencies:[w,D,b,C,M]});let e=t;return e})();export{A as default};
