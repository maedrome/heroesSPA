import{a as x}from"./chunk-SZH72MXX.js";import"./chunk-NJ2I7JHJ.js";import{J as I,K as P,W as T,b as C,c as y,d as M,e as _,f as p,g as L,i as E,j as N,k,l as D,n as G,q as R}from"./chunk-356WMELQ.js";import"./chunk-JGYM447R.js";import{h as b,i as S,m as w}from"./chunk-U5LOJRI2.js";import{o as F}from"./chunk-FQX2LY3L.js";import{Ab as e,Bb as t,Cb as u,Hb as d,Rb as o,Va as s,Vb as h,da as l,ia as f,mb as c,rb as g,wb as v}from"./chunk-QDOQSJTN.js";function q(n,i){n&1&&(e(0,"div",1)(1,"strong",11),o(2,"User not found. "),t(),e(3,"span",12),o(4,"Email or password is invalid."),t()())}var $=(()=>{let i=class i{constructor(){this.authService=l(x),this.router=l(b),this.notFound=!1,this.loginForm=new _({email:new p(""),password:new p("")})}onLogin(){this.loginForm.valid&&this.authService.login(this.loginForm.value.email||"",this.loginForm.value.password||"").subscribe(m=>{if(!m){this.notFound=!0;return}this.notFound=!1,this.router.navigate(["/heroes/list"])})}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=f({type:i,selectors:[["app-login-page"]],standalone:!0,features:[h],decls:17,vars:2,consts:[[1,"flex","flex-col","m-auto","justify-center","items-center","w-[75vw]","md:w-96"],["role","alert",1,"bg-red-100","border","border-red-400","text-red-700","px-4","py-3","rounded","relative","mb-1"],[1,"text-2xl","self-start","mb-2"],[3,"ngsubmit","formGroup"],[1,"w-full"],["type","text","matInput","","placeholder","Username","formControlName","email","required",""],["type","password","matInput","","placeholder","Password","formControlName","password","required",""],["mat-button","","mat-flat-button","","color","primary",1,"w-full",3,"click"],[1,"flex","justify-center","items-center","p-1","py-2"],[1,"text-base"],["routerLink","/auth/new-account",1,"self-end","mt-4"],[1,"font-bold"],[1,"block","sm:inline"]],template:function(r,a){r&1&&(e(0,"div",0),c(1,q,5,0,"div",1),e(2,"span",2),o(3,"Login"),t(),e(4,"form",3),d("ngsubmit",function(){return a.onLogin()}),e(5,"mat-form-field",4),u(6,"input",5),t(),e(7,"mat-form-field",4),u(8,"input",6),t()(),e(9,"button",7),d("click",function(){return a.onLogin()}),e(10,"div",8)(11,"span",9),o(12,"Login"),t(),e(13,"mat-icon"),o(14,"login"),t()()(),e(15,"a",10),o(16,"Don't have an account?"),t()()),r&2&&(s(),v(1,a.notFound?1:-1),s(3),g("formGroup",a.loginForm))},dependencies:[F,T,R,G,I,P,w,S,D,L,C,y,M,k,E,N]});let n=i;return n})();export{$ as default};
