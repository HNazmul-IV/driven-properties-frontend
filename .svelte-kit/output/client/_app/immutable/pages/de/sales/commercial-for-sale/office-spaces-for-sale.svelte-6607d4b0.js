import{S as y,i as U,s as j,e as h,k as w,w as S,c as v,a as b,d as m,m as N,x as T,b as l,g as F,y as B,G as E,q as O,o as R,B as k,U as D,v as G,ag as H,E as V}from"../../../../chunks/index-f4dbb4b4.js";import{p as z}from"../../../../chunks/stores-0549e581.js";import{L as J}from"../../../../chunks/LeadFormLeft-c5403af7.js";import{B as K}from"../../../../chunks/breadcrumb-9b1b0474.js";import{b as C}from"../../../../chunks/base-url-ce329ce1.js";import"../../../../chunks/helpers-b1dcc375.js";function P(o){let s,i,t,n,a,r,_,f,d,g,p,L=(o[0].description_fr?o[0].description_fr:"Content Required")+"",$;return n=new K({props:{imgbg:"/l9images/banners/"+o[0].imgname,LinkOne:o[3][1],LinkTwo:o[3][2],LinkThree:o[3][3],headings:o[0].name_fr,FstName_Fr:o[1].name_fr,LstName_Fr:o[2].name_fr}}),r=new J({}),{c(){s=h("section"),i=w(),t=h("section"),S(n.$$.fragment),a=w(),S(r.$$.fragment),_=w(),f=h("section"),d=h("div"),g=h("div"),p=h("div"),this.h()},l(e){s=v(e,"SECTION",{id:!0,class:!0});var c=b(s);c.forEach(m),i=N(e),t=v(e,"SECTION",{id:!0,class:!0});var u=b(t);T(n.$$.fragment,u),a=N(u),T(r.$$.fragment,u),u.forEach(m),_=N(e),f=v(e,"SECTION",{id:!0,class:!0});var q=b(f);d=v(q,"DIV",{class:!0,"data-aos":!0});var I=b(d);g=v(I,"DIV",{class:!0});var M=b(g);p=v(M,"DIV",{class:!0});var A=b(p);A.forEach(m),M.forEach(m),I.forEach(m),q.forEach(m),this.h()},h(){l(s,"id","hero-noimage"),l(s,"class","d-flex align-items-center"),l(t,"id","drv-bread"),l(t,"class","section-bg"),l(p,"class","col-lg-12 pt-4 pt-lg-0"),l(g,"class","row content"),l(d,"class","container aos-init aos-animate"),l(d,"data-aos","fade-up"),l(f,"id","about"),l(f,"class","about")},m(e,c){F(e,s,c),F(e,i,c),F(e,t,c),B(n,t,null),E(t,a),B(r,t,null),F(e,_,c),F(e,f,c),E(f,d),E(d,g),E(g,p),p.innerHTML=L,$=!0},p(e,[c]){const u={};c&1&&(u.imgbg="/l9images/banners/"+e[0].imgname),c&1&&(u.headings=e[0].name_fr),c&2&&(u.FstName_Fr=e[1].name_fr),c&4&&(u.LstName_Fr=e[2].name_fr),n.$set(u),(!$||c&1)&&L!==(L=(e[0].description_fr?e[0].description_fr:"Content Required")+"")&&(p.innerHTML=L)},i(e){$||(O(n.$$.fragment,e),O(r.$$.fragment,e),$=!0)},o(e){R(n.$$.fragment,e),R(r.$$.fragment,e),$=!1},d(e){e&&m(s),e&&m(i),e&&m(t),k(n),k(r),e&&m(_),e&&m(f)}}}function Q(o,s,i){let t;D(o,z,f=>i(4,t=f));let n=[],a=t.url.pathname.split("/"),r=[],_=[];return G(async()=>{const d=await(await fetch(`${C}/getSignleHeaderMenu/${a[4]}`)).json();i(0,n=d);const p=await(await fetch(`${C}/getBrdCums/${a[2]}`)).json();i(1,r=p);const $=await(await fetch(`${C}/getBrdCums/${a[3]}`)).json();i(2,_=$)}),[n,r,_,a]}class W extends y{constructor(s){super(),U(this,s,Q,P,j,{})}}function X(o){let s,i,t,n;return t=new W({}),{c(){s=h("meta"),i=w(),S(t.$$.fragment),this.h()},l(a){const r=H('[data-svelte="svelte-2qn29r"]',document.head);s=v(r,"META",{name:!0,content:!0}),r.forEach(m),i=N(a),T(t.$$.fragment,a),this.h()},h(){document.title="Reals Estate Brokage",l(s,"name","description"),l(s,"content","Reals Estate Brokage")},m(a,r){E(document.head,s),F(a,i,r),B(t,a,r),n=!0},p:V,i(a){n||(O(t.$$.fragment,a),n=!0)},o(a){R(t.$$.fragment,a),n=!1},d(a){m(s),a&&m(i),k(t,a)}}}class se extends y{constructor(s){super(),U(this,s,null,X,j,{})}}export{se as default};
