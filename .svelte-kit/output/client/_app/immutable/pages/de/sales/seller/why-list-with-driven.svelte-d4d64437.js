import{S,i as T,s as W,e as h,k as w,w as D,c as g,a as v,d as m,m as N,x as I,b as c,g as $,y as k,G as L,q,o as B,B as M,U,v as j,ag as A,E as O}from"../../../../chunks/index-f4dbb4b4.js";import{p as G}from"../../../../chunks/stores-0549e581.js";import{B as H}from"../../../../chunks/breadcrumb-9b1b0474.js";import{b as F}from"../../../../chunks/base-url-ce329ce1.js";import"../../../../chunks/helpers-b1dcc375.js";function V(o){let s,l,a,r,t,n,u,f,d,b=(o[0].description_fr?o[0].description_fr:"Content Required")+"",p;return r=new H({props:{imgbg:"/l9images/banners/"+o[0].imgname,LinkOne:o[3][1],LinkTwo:o[3][2],LinkThree:o[3][3],headings:o[0].name_fr,FstName_Fr:o[1].name_fr,LstName_Fr:o[2].name_fr}}),{c(){s=h("section"),l=w(),a=h("section"),D(r.$$.fragment),t=w(),n=h("section"),u=h("div"),f=h("div"),d=h("div"),this.h()},l(e){s=g(e,"SECTION",{id:!0,class:!0});var i=v(s);i.forEach(m),l=N(e),a=g(e,"SECTION",{id:!0,class:!0});var _=v(a);I(r.$$.fragment,_),_.forEach(m),t=N(e),n=g(e,"SECTION",{id:!0,class:!0});var E=v(n);u=g(E,"DIV",{class:!0,"data-aos":!0});var y=v(u);f=g(y,"DIV",{class:!0});var C=v(f);d=g(C,"DIV",{class:!0});var R=v(d);R.forEach(m),C.forEach(m),y.forEach(m),E.forEach(m),this.h()},h(){c(s,"id","hero-noimage"),c(s,"class","d-flex align-items-center"),c(a,"id","drv-bread"),c(a,"class","section-bg"),c(d,"class","col-lg-12 pt-4 pt-lg-0"),c(f,"class","row content"),c(u,"class","container aos-init aos-animate"),c(u,"data-aos","fade-up"),c(n,"id","about"),c(n,"class","about")},m(e,i){$(e,s,i),$(e,l,i),$(e,a,i),k(r,a,null),$(e,t,i),$(e,n,i),L(n,u),L(u,f),L(f,d),d.innerHTML=b,p=!0},p(e,[i]){const _={};i&1&&(_.imgbg="/l9images/banners/"+e[0].imgname),i&1&&(_.headings=e[0].name_fr),i&2&&(_.FstName_Fr=e[1].name_fr),i&4&&(_.LstName_Fr=e[2].name_fr),r.$set(_),(!p||i&1)&&b!==(b=(e[0].description_fr?e[0].description_fr:"Content Required")+"")&&(d.innerHTML=b)},i(e){p||(q(r.$$.fragment,e),p=!0)},o(e){B(r.$$.fragment,e),p=!1},d(e){e&&m(s),e&&m(l),e&&m(a),M(r),e&&m(t),e&&m(n)}}}function P(o,s,l){let a;U(o,G,f=>l(4,a=f));let r=[],t=a.url.pathname.split("/"),n=[],u=[];return j(async()=>{const d=await(await fetch(`${F}/getSignleHeaderMenu/${t[4]}`)).json();l(0,r=d);const p=await(await fetch(`${F}/getBrdCums/${t[2]}`)).json();l(1,n=p);const i=await(await fetch(`${F}/getBrdCums/${t[3]}`)).json();l(2,u=i)}),[r,n,u,t]}class z extends S{constructor(s){super(),T(this,s,P,V,W,{})}}function J(o){let s,l,a,r;return a=new z({}),{c(){s=h("meta"),l=w(),D(a.$$.fragment),this.h()},l(t){const n=A('[data-svelte="svelte-pkbju"]',document.head);s=g(n,"META",{name:!0,content:!0}),n.forEach(m),l=N(t),I(a.$$.fragment,t),this.h()},h(){document.title="Seller - Why List With Driven",c(s,"name","description"),c(s,"content","About Us Page app")},m(t,n){L(document.head,s),$(t,l,n),k(a,t,n),r=!0},p:O,i(t){r||(q(a.$$.fragment,t),r=!0)},o(t){B(a.$$.fragment,t),r=!1},d(t){m(s),t&&m(l),M(a,t)}}}class x extends S{constructor(s){super(),T(this,s,null,J,W,{})}}export{x as default};
