import{S as O,i as j,s as B,w as z,x as T,y as D,q as y,o as v,B as E,v as C,l as L,g as m,n as F,p as H,d as c,t as V,k as S,h as G,m as I,e as x,c as w,a as k,b as $,E as q,T as R,G as U}from"./index-f4dbb4b4.js";import{$ as P,S as W,P as A,N as J,a as N}from"./navigation.min-5f06678b.js";import{L as K}from"./lazy-29125fb4.js";function Q(f){let{swiper:a,extendParams:l,on:t}=f;l({parallax:{enabled:!1}});const s=(i,r)=>{const{rtl:d}=a,p=P(i),_=d?-1:1,b=p.attr("data-swiper-parallax")||"0";let o=p.attr("data-swiper-parallax-x"),u=p.attr("data-swiper-parallax-y");const h=p.attr("data-swiper-parallax-scale"),g=p.attr("data-swiper-parallax-opacity");if(o||u?(o=o||"0",u=u||"0"):a.isHorizontal()?(o=b,u="0"):(u=b,o="0"),o.indexOf("%")>=0?o=`${parseInt(o,10)*r*_}%`:o=`${o*r*_}px`,u.indexOf("%")>=0?u=`${parseInt(u,10)*r}%`:u=`${u*r}px`,typeof g!="undefined"&&g!==null){const M=g-(g-1)*(1-Math.abs(r));p[0].style.opacity=M}if(typeof h=="undefined"||h===null)p.transform(`translate3d(${o}, ${u}, 0px)`);else{const M=h-(h-1)*(1-Math.abs(r));p.transform(`translate3d(${o}, ${u}, 0px) scale(${M})`)}},n=()=>{const{$el:i,slides:r,progress:d,snapGrid:p}=a;i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(_=>{s(_,d)}),r.each((_,b)=>{let o=_.progress;a.params.slidesPerGroup>1&&a.params.slidesPerView!=="auto"&&(o+=Math.ceil(b/2)-d*(p.length-1)),o=Math.min(Math.max(o,-1),1),P(_).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{s(u,o)})})},e=function(i){i===void 0&&(i=a.params.speed);const{$el:r}=a;r.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(d=>{const p=P(d);let _=parseInt(p.attr("data-swiper-parallax-duration"),10)||i;i===0&&(_=0),p.transition(_)})};t("beforeInit",()=>{!a.params.parallax.enabled||(a.params.watchSlidesProgress=!0,a.originalParams.watchSlidesProgress=!0)}),t("init",()=>{!a.params.parallax.enabled||n()}),t("setTranslate",()=>{!a.params.parallax.enabled||n()}),t("setTransition",(i,r)=>{!a.params.parallax.enabled||e(r)})}function X(f){let a=console.log("mobile")+"",l,t,s,n;return s=new N({props:{$$slots:{default:[Z]},$$scope:{ctx:f}}}),{c(){l=V(a),t=S(),z(s.$$.fragment)},l(e){l=G(e,a),t=I(e),T(s.$$.fragment,e)},m(e,i){m(e,l,i),m(e,t,i),D(s,e,i),n=!0},p(e,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:e}),s.$set(r)},i(e){n||(y(s.$$.fragment,e),n=!0)},o(e){v(s.$$.fragment,e),n=!1},d(e){e&&c(l),e&&c(t),E(s,e)}}}function Y(f){let a=console.log("desktop")+"",l,t,s,n;return s=new N({props:{$$slots:{default:[aa]},$$scope:{ctx:f}}}),{c(){l=V(a),t=S(),z(s.$$.fragment)},l(e){l=G(e,a),t=I(e),T(s.$$.fragment,e)},m(e,i){m(e,l,i),m(e,t,i),D(s,e,i),n=!0},p(e,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:e}),s.$set(r)},i(e){n||(y(s.$$.fragment,e),n=!0)},o(e){v(s.$$.fragment,e),n=!1},d(e){e&&c(l),e&&c(t),E(s,e)}}}function Z(f){let a,l,t;return{c(){a=x("div"),l=S(),t=x("div"),this.h()},l(s){a=w(s,"DIV",{class:!0}),k(a).forEach(c),l=I(s),t=w(s,"DIV",{class:!0});var n=k(t);n.forEach(c),this.h()},h(){$(a,"class","overlay"),$(t,"class","MySlider svelte-1pyu5mn")},m(s,n){m(s,a,n),m(s,l,n),m(s,t,n)},p:q,d(s){s&&c(a),s&&c(l),s&&c(t)}}}function aa(f){let a,l,t,s,n;return{c(){a=x("div"),l=S(),t=x("div"),s=x("img"),this.h()},l(e){a=w(e,"DIV",{class:!0}),k(a).forEach(c),l=I(e),t=w(e,"DIV",{class:!0});var i=k(t);s=w(i,"IMG",{src:!0,"data-src":!0,class:!0,alt:!0}),i.forEach(c),this.h()},h(){$(a,"class","overlay"),R(s.src,n=sa)||$(s,"src",n),$(s,"data-src","/assets/img/home/sliders/shutterstock_686604058.webp"),$(s,"class","swiper-lazy svelte-1pyu5mn"),$(s,"alt","dsf"),$(t,"class","MySlider svelte-1pyu5mn")},m(e,i){m(e,a,i),m(e,l,i),m(e,t,i),U(t,s)},p:q,d(e){e&&c(a),e&&c(l),e&&c(t)}}}function ea(f){let a,l,t,s;const n=[Y,X],e=[];function i(r,d){return r[0]?1:0}return a=i(f),l=e[a]=n[a](f),{c(){l.c(),t=L()},l(r){l.l(r),t=L()},m(r,d){e[a].m(r,d),m(r,t,d),s=!0},p(r,d){let p=a;a=i(r),a===p?e[a].p(r,d):(F(),v(e[p],1,1,()=>{e[p]=null}),H(),l=e[a],l?l.p(r,d):(l=e[a]=n[a](r),l.c()),y(l,1),l.m(t.parentNode,t))},i(r){s||(y(l),s=!0)},o(r){v(l),s=!1},d(r){e[a].d(r),r&&c(t)}}}function ta(f){let a,l;return a=new W({props:{style:"--swiper-navigation-color: #fff;--swiper-pagination-color: #fff",speed:600,parallax:!0,lazy:!0,pagination:{type:"fraction",clickable:!0},navigation:!0,modules:[K,Q,A,J],class:"mySwiper",$$slots:{default:[ea]},$$scope:{ctx:f}}}),{c(){z(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,s){D(a,t,s),l=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),a.$set(n)},i(t){l||(y(a.$$.fragment,t),l=!0)},o(t){v(a.$$.fragment,t),l=!1},d(t){E(a,t)}}}let sa="/assets/images/265x230.jpg";function la(f,a,l){let t=!1;return C(()=>{window.innerWidth<768?(console.log("desktop script"),l(0,t=!1)):(console.log("mobile script"),l(0,t=!0))}),[t]}class pa extends O{constructor(a){super(),j(this,a,la,ta,B,{})}}export{pa as S};