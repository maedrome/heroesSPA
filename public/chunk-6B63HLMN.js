import{a as u}from"./chunk-NJ2I7JHJ.js";import{a as l,h as m}from"./chunk-U5LOJRI2.js";import{C as i,Z as p,da as h,gb as a,n as o,r as c}from"./chunk-QDOQSJTN.js";var n=function(e){return e.DCComics="DC Comics",e.MarvelComics="Marvel Comics",e.ONE="ONE Comics",e}(n||{});var j=(()=>{let s=class s{constructor(){this.router=h(m),this.http=h(l),this.heroes=a([]),this.currentHero=a({id:"",superhero:"",publisher:n.DCComics,alter_ego:"",first_appearance:"",characters:"",alt_img:""}),this.baseUrl=u.baseUrl}getHeroes(){this.http.get(`${this.baseUrl}/heroes`).subscribe(t=>this.heroes.set(t))}getHero(t){this.http.get(`${this.baseUrl}/heroes/${t}`).pipe(i(r=>(console.log(r),this.router.navigate(["/heroes/list"]),o(void 0)))).subscribe(r=>r?this.currentHero.set(r):console.log("Hero not found"))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHero(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe(i(r=>o(!1)),c(r=>!0))}};s.\u0275fac=function(r){return new(r||s)},s.\u0275prov=p({token:s,factory:s.\u0275fac,providedIn:"root"});let e=s;return e})();export{n as a,j as b};
