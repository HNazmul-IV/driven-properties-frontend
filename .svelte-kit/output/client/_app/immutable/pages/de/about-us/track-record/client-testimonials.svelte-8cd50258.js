import{S as te,i as se,s as ae,l as B,g as S,e as d,k as M,aa as le,t as ie,c as v,a as g,d as n,m as C,ab as ne,h as oe,T as W,b as o,G as _,j as re,w as G,x as U,y as P,Q as ce,R as me,q as R,o as Y,B as z,U as ue,v as fe,ag as _e,E as pe}from"../../../../chunks/index-f4dbb4b4.js";import{p as de}from"../../../../chunks/stores-0549e581.js";import{G as F}from"../../../../chunks/helpers-b1dcc375.js";import{B as ve}from"../../../../chunks/breadcrumb-28b17ad7.js";import{S as he}from"../../../../chunks/SEOText-52b191f6.js";import{b as X}from"../../../../chunks/base-url-ce329ce1.js";function Z(r,s,i){const l=r.slice();return l[8]=s[i],l}function x(r){let s,i,l,a,t,c,k,p,u,T,$,D,y,j=(r[8].tsjobdescription?r[8].tsjobdescription:"")+"",b,N,I,A,L,e=(r[8].clientname_ru?r[8].clientname_ru:"")+"",m,h,w;return{c(){s=d("div"),i=d("div"),l=d("div"),a=d("img"),k=M(),p=d("div"),u=d("p"),T=d("span"),$=d("i"),D=M(),y=new le(!1),b=M(),N=d("span"),I=d("i"),A=M(),L=d("h4"),m=ie(e),w=M(),this.h()},l(f){s=v(f,"DIV",{class:!0,"data-aos":!0,"data-aos-delay":!0});var E=g(s);i=v(E,"DIV",{class:!0});var O=g(i);l=v(O,"DIV",{class:!0});var q=g(l);a=v(q,"IMG",{src:!0,alt:!0,class:!0}),q.forEach(n),k=C(O),p=v(O,"DIV",{class:!0});var H=g(p);u=v(H,"P",{class:!0});var V=g(u);T=v(V,"SPAN",{});var Q=g(T);$=v(Q,"I",{class:!0}),g($).forEach(n),Q.forEach(n),D=C(V),y=ne(V,!1),b=C(V),N=v(V,"SPAN",{});var J=g(N);I=v(J,"I",{class:!0}),g(I).forEach(n),J.forEach(n),V.forEach(n),A=C(H),L=v(H,"H4",{class:!0});var K=g(L);m=oe(K,e),K.forEach(n),H.forEach(n),O.forEach(n),E.forEach(n),w=C(f),this.h()},h(){W(a.src,t=r[8].tsimgname?"https://dev.drivenproperties.ru/theme/assets/images/testimonials/"+r[8].tsimgname:"/assets/img/testimonials/gen_1067.jpg")||o(a,"src",t),o(a,"alt",c=r[8].clientname),o(a,"class","svelte-182pi3j"),o(l,"class","icon svelte-182pi3j"),o($,"class","FSbx bx bxs-quote-left svelte-182pi3j"),y.a=b,o(I,"class","FSbx bx bxs-quote-right svelte-182pi3j"),o(u,"class","svelte-182pi3j"),o(L,"class","svelte-182pi3j"),o(p,"class","icon-msg svelte-182pi3j"),o(i,"class","icon-box svelte-182pi3j"),o(s,"class","mb-5 col-lg-6 col-md-6 col-12 text-center aos-animate"),o(s,"data-aos","zoom-in"),o(s,"data-aos-delay",h=r[8].id+"00")},m(f,E){S(f,s,E),_(s,i),_(i,l),_(l,a),_(i,k),_(i,p),_(p,u),_(u,T),_(T,$),_(u,D),y.m(j,u),_(u,b),_(u,N),_(N,I),_(p,A),_(p,L),_(L,m),S(f,w,E)},p(f,E){E&2&&!W(a.src,t=f[8].tsimgname?"https://dev.drivenproperties.ru/theme/assets/images/testimonials/"+f[8].tsimgname:"/assets/img/testimonials/gen_1067.jpg")&&o(a,"src",t),E&2&&c!==(c=f[8].clientname)&&o(a,"alt",c),E&2&&j!==(j=(f[8].tsjobdescription?f[8].tsjobdescription:"")+"")&&y.p(j),E&2&&e!==(e=(f[8].clientname_ru?f[8].clientname_ru:"")+"")&&re(m,e),E&2&&h!==(h=f[8].id+"00")&&o(s,"data-aos-delay",h)},d(f){f&&n(s),f&&n(w)}}}function ee(r,s){let i,l,a=s[8].clientname_ru!==null&&x(s);return{key:r,first:null,c(){i=B(),a&&a.c(),l=B(),this.h()},l(t){i=B(),a&&a.l(t),l=B(),this.h()},h(){this.first=i},m(t,c){S(t,i,c),a&&a.m(t,c),S(t,l,c)},p(t,c){s=t,s[8].clientname_ru!==null?a?a.p(s,c):(a=x(s),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},d(t){t&&n(i),a&&a.d(t),t&&n(l)}}}function ge(r){let s,i,l,a,t,c,k,p,u,T,$,D=(r[0].name_ru?r[0].name_ru:"CLIENT TESTIMONIALS")+"",y,j,b=[],N=new Map,I;s=new he({props:{MetaTitle:r[0].name,MetaDescription:r[0].name}}),c=new ve({props:{LinkOne:r[2][2],LinkTwo:r[2][3],LinkThree:r[2][4],headings:r[0].name,Bdtype:3}});let A=r[1];const L=e=>e[8].id;for(let e=0;e<A.length;e+=1){let m=Z(r,A,e),h=L(m);N.set(h,b[e]=ee(h,m))}return{c(){G(s.$$.fragment),i=M(),l=d("section"),a=M(),t=d("section"),G(c.$$.fragment),k=M(),p=d("section"),u=d("div"),T=d("div"),$=d("h2"),y=M(),j=d("div");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){U(s.$$.fragment,e),i=C(e),l=v(e,"SECTION",{id:!0,class:!0});var m=g(l);m.forEach(n),a=C(e),t=v(e,"SECTION",{id:!0,class:!0});var h=g(t);U(c.$$.fragment,h),h.forEach(n),k=C(e),p=v(e,"SECTION",{id:!0,class:!0});var w=g(p);u=v(w,"DIV",{class:!0,"data-aos":!0});var f=g(u);T=v(f,"DIV",{class:!0});var E=g(T);$=v(E,"H2",{class:!0});var O=g($);O.forEach(n),E.forEach(n),y=C(f),j=v(f,"DIV",{class:!0});var q=g(j);for(let H=0;H<b.length;H+=1)b[H].l(q);q.forEach(n),f.forEach(n),w.forEach(n),this.h()},h(){o(l,"id","hero-noimage"),o(l,"class","d-flex align-items-center svelte-182pi3j"),o(t,"id","drv-bread"),o(t,"class","section-bg svelte-182pi3j"),o($,"class","svelte-182pi3j"),o(T,"class","section-title svelte-182pi3j"),o(j,"class","row mt-5"),o(u,"class","container aos-init aos-animate"),o(u,"data-aos","fade-up"),o(p,"id","team"),o(p,"class","team section-bg svelte-182pi3j")},m(e,m){P(s,e,m),S(e,i,m),S(e,l,m),S(e,a,m),S(e,t,m),P(c,t,null),S(e,k,m),S(e,p,m),_(p,u),_(u,T),_(T,$),$.innerHTML=D,_(u,y),_(u,j);for(let h=0;h<b.length;h+=1)b[h].m(j,null);I=!0},p(e,[m]){const h={};m&1&&(h.MetaTitle=e[0].name),m&1&&(h.MetaDescription=e[0].name),s.$set(h);const w={};m&1&&(w.headings=e[0].name),c.$set(w),(!I||m&1)&&D!==(D=(e[0].name_ru?e[0].name_ru:"CLIENT TESTIMONIALS")+"")&&($.innerHTML=D),m&2&&(A=e[1],b=ce(b,m,L,1,e,A,N,j,me,ee,null,Z))},i(e){I||(R(s.$$.fragment,e),R(c.$$.fragment,e),I=!0)},o(e){Y(s.$$.fragment,e),Y(c.$$.fragment,e),I=!1},d(e){z(s,e),e&&n(i),e&&n(l),e&&n(a),e&&n(t),z(c),e&&n(k),e&&n(p);for(let m=0;m<b.length;m+=1)b[m].d()}}}function be(r,s,i){let l;ue(r,de,p=>i(3,l=p));let a=[],t=[],c=l.url.pathname.split("/"),k=new Date;return F(5),F(k.getFullYear()),F(2013),fe(async()=>{const u=await(await fetch(`${X}/getSignleHeaderMenu/${c[3]}`)).json();i(0,a=u);const $=await(await fetch(`${X}/getAllTestimonials`)).json();i(1,t=$),console.log(t)}),[a,t,c]}class $e extends te{constructor(s){super(),se(this,s,be,ge,ae,{})}}function Ee(r){let s,i,l,a;return l=new $e({}),{c(){s=d("meta"),i=M(),G(l.$$.fragment),this.h()},l(t){const c=_e('[data-svelte="svelte-caorl6"]',document.head);s=v(c,"META",{name:!0,content:!0}),c.forEach(n),i=C(t),U(l.$$.fragment,t),this.h()},h(){document.title="About Us - Client Testimonials",o(s,"name","description"),o(s,"content","About Us Client Testimonials")},m(t,c){_(document.head,s),S(t,i,c),P(l,t,c),a=!0},p:pe,i(t){a||(R(l.$$.fragment,t),a=!0)},o(t){Y(l.$$.fragment,t),a=!1},d(t){n(s),t&&n(i),z(l,t)}}}class Me extends te{constructor(s){super(),se(this,s,null,Ee,ae,{})}}export{Me as default};