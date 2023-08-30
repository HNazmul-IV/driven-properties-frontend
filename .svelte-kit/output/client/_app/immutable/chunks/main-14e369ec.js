import{S as ve,i as be,s as ye,e as g,w as W,c as v,a as y,x as Y,d as m,b as f,g as H,G as h,y as J,q as z,o as N,B as Q,k as O,m as j,n as ue,p as de,U as oe,O as tt,v as we,aj as ne,t as Z,h as $,f as lt,j as De,T as st,E as Ye,K as ce,l as ze,L as Je,_ as Ve,P as at,M as nt,F as qe,H as Oe,I as je,J as Ne}from"./index-f4dbb4b4.js";import{p as Qe}from"./stores-0549e581.js";import{a as ae}from"./mapbox-gl-bd635c75.js";import{c as _e,C as ge}from"./others-c2922311.js";import{w as Ze}from"./index-84df3c90.js";/* empty css                  */import{L as it}from"./loader-517b8e48.js";import{b as Le,o as ot}from"./base-url-ce329ce1.js";import{a as $e}from"./algoliasearch.umd-a2db95c4.js";import{B as rt}from"./breadcrumb-43243e07.js";import{S as ct}from"./SEOText-52b191f6.js";import{S as ft,P as ut,N as dt,a as mt}from"./navigation.min-5f06678b.js";import{L as ht}from"./lazy-29125fb4.js";import{C as pt}from"./ContentFormMesg-6e82d3ee.js";let ie=Ze({location:""}),fe=Ze({location_coord:[],isMapMoved:!1,listByMapMove:{},location_name:""});function He(a){let e,s,t,l;return t=new it({}),{c(){e=g("div"),s=g("div"),W(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var i=y(e);s=v(i,"DIV",{class:!0});var o=y(s);Y(t.$$.fragment,o),o.forEach(m),i.forEach(m),this.h()},h(){f(s,"class","loading svelte-1w7w789"),f(e,"class","container loading-container")},m(n,i){H(n,e,i),h(e,s),J(t,s,null),l=!0},i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){N(t.$$.fragment,n),l=!1},d(n){n&&m(e),Q(t)}}}function _t(a){let e,s,t,l,n,i=a[0]&&He();return{c(){e=g("div"),i&&i.c(),s=O(),t=g("div"),l=g("div"),this.h()},l(o){e=v(o,"DIV",{class:!0});var u=y(e);i&&i.l(u),s=j(u),t=v(u,"DIV",{class:!0});var r=y(t);l=v(r,"DIV",{id:!0,class:!0,allowfullscreen:!0,loading:!0}),y(l).forEach(m),r.forEach(m),u.forEach(m),this.h()},h(){f(l,"id","mapView"),f(l,"class","myMapListing svelte-1w7w789"),f(l,"allowfullscreen","true"),f(l,"loading","lazy"),f(t,"class","apartment-sale-right"),f(e,"class","col-lg-6 mt-lg-5")},m(o,u){H(o,e,u),i&&i.m(e,null),h(e,s),h(e,t),h(t,l),n=!0},p(o,[u]){o[0]?i?u&1&&z(i,1):(i=He(),i.c(),z(i,1),i.m(e,s)):i&&(ue(),N(i,1,1,()=>{i=null}),de())},i(o){n||(z(i),n=!0)},o(o){N(i),n=!1},d(o){o&&m(e),i&&i.d()}}}const gt="pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";function vt(a,e,s){let t,l;oe(a,fe,p=>s(2,t=p)),oe(a,ie,p=>s(3,l=p));const n=tt();let{list:i=[]}=e,o=[],u=[],r,P,B=!1,w=!1,L=!1,A=25.177602,C=55.234789,c=[C,A];const V=async()=>{console.log("dataUpdate map.svelte sales-php"),u=t.location_coord;const p=l.location;if(p!==""){let E=await(await fetch(`${Le}/getOffplanCoord/${p}`)).json();E[0].pclog!==null&&E[0].pclat!==null&&(c=[E[0].pclog,E[0].pclat],console.log(c))}c[1]!==25.177602&&c[0]!==55.234789&&(w=!0),_(r),L&&d()},k=async()=>{o=i,u=o,o.length>0&&(C=Number(o[0].Longitude),A=Number(o[0].Latitude),C===0&&A===0&&(C=Number(o[1].Longitude),A=Number(o[1].Latitude)),c=[C,A]),s(0,B=!1),c[1]!==25.177602&&c[0]!==55.234789&&(w=!0),_(r)},d=async()=>{r&&b(r),s(0,B=!1)},b=p=>{p.flyTo({center:c,zoom:w?13:10})},_=p=>{console.log(u);for(const I of u)if(I.Price!==null&&I.Property_Title){const E=`
                    <div class="container g-0">
                        <div class="row g-0">
                            <div class="col-12 mb-2"><img  src="${ot}/theme/assets/images/community/${I.Prothbimgname}" class="img-fluid myImgPopup" /></div>
                                <div class="col-sm-12 px-2 mb-2">
                                    <h6><strong>${I.Property_Title}</strong></h6>
                                    <h6>${I.Community}</h6>
                                    
                                    
                                    <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                        <div class="pt-2 bd-highlight"><strong>Price:</strong> ${_e(I.Price*.25)} EUR</div>
                                    </div>
                                        
                                </div>
                        </div>
                    </div>
                `,D=document.createElement("span");D.textContent=_e(I.Price*.25)+" EUR",D.className="marker1";let S=Number(I.Longitude),T=Number(I.Latitude);S&&T&&new ae.Marker(D).setLngLat([S,T]).setPopup(new ae.Popup({offset:25}).setHTML(E)).addTo(p)}};return we(async()=>{ne(ie,l.location="",l),ne(fe,t.location_coord="",t),ae.accessToken=gt,window.screen.width<800&&(L=!0),r=new ae.Map({container:"mapView",style:"mapbox://styles/mapbox/streets-v11",center:c,zoom:10}),r.on("idle",p=>{P=r.getBounds(),console.log("idle",P),n("coord",{boundingBox:P}),s(0,B=!0),_(r)}),r.on("movestart",p=>{_(r)}),r.on("load",()=>{_(r),r.addControl(new ae.NavigationControl),r.addControl(new ae.FullscreenControl)})}),a.$$set=p=>{"list"in p&&s(1,i=p.list)},a.$$.update=()=>{a.$$.dirty&2&&k(),a.$$.dirty&4&&(t.location_coord,V()),a.$$.dirty&8&&(l.location,V()),a.$$.dirty&4&&(t.isMapMoved,d())},[B,i,t,l]}class bt extends ve{constructor(e){super(),be(this,e,vt,_t,ye,{list:1})}}function yt(a){let e,s,t;return{c(){e=g("img"),this.h()},l(l){e=v(l,"IMG",{"data-src":!0,src:!0,class:!0,alt:!0}),this.h()},h(){f(e,"data-src",s="https://dev.drivenproperties.ru/theme/assets/images/community/"+a[6]),st(e.src,t=Dt)||f(e,"src",t),f(e,"class","swiper-lazy svelte-10zp9yq"),f(e,"alt",a[1])},m(l,n){H(l,e,n)},p(l,n){n&64&&s!==(s="https://dev.drivenproperties.ru/theme/assets/images/community/"+l[6])&&f(e,"data-src",s),n&2&&f(e,"alt",l[1])},d(l){l&&m(e)}}}function wt(a){let e,s;return e=new mt({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,l){J(e,t,l),s=!0},p(t,l){const n={};l&16450&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function Et(a){let e,s;return{c(){e=g("h5"),s=Z("Preis auf Anfrage"),this.h()},l(t){e=v(t,"H5",{class:!0});var l=y(e);s=$(l,"Preis auf Anfrage"),l.forEach(m),this.h()},h(){f(e,"class","mt-1 mb-4")},m(t,l){H(t,e,l),h(e,s)},p:Ye,d(t){t&&m(e)}}}function It(a){let e,s=ge(parseInt(a[4]*.25))+"",t,l;return{c(){e=g("h3"),t=Z(s),l=Z(" EUR"),this.h()},l(n){e=v(n,"H3",{class:!0});var i=y(e);t=$(i,s),l=$(i," EUR"),i.forEach(m),this.h()},h(){f(e,"class","HPrice svelte-10zp9yq")},m(n,i){H(n,e,i),h(e,t),h(e,l)},p(n,i){i&16&&s!==(s=ge(parseInt(n[4]*.25))+"")&&De(t,s)},d(n){n&&m(e)}}}function Pt(a){let e,s,t,l,n,i,o,u,r,P,B,w,L,A,C,c,V,k,d,b,_,p,I,E,D,S,T,R,K,le,X,te,U,se,x,F;l=new ft({props:{lazy:!0,rewind:!0,navigation:!0,pagination:{dynamicBullets:!0},modules:[ht,ut,dt],class:"mySwiper",$$slots:{default:[wt]},$$scope:{ctx:a}}});function ke(M,q){return M[3]?It:Et}let me=ke(a),G=me(a);return{c(){e=g("div"),s=g("div"),t=g("a"),W(l.$$.fragment),i=O(),o=g("div"),u=g("div"),r=g("h5"),P=g("a"),w=O(),L=g("div"),A=g("i"),C=O(),c=g("span"),V=O(),k=g("div"),G.c(),d=O(),b=g("div"),_=g("div"),p=g("a"),I=g("i"),E=Z(" Jetzt anrufen"),S=O(),T=g("div"),R=g("a"),K=g("i"),le=Z(` 
                        WhatsApp`),te=O(),U=g("span"),se=Z("PropertyID: "),x=Z(a[7]),this.h()},l(M){e=v(M,"DIV",{class:!0,id:!0});var q=y(e);s=v(q,"DIV",{class:!0});var re=y(s);t=v(re,"A",{href:!0,target:!0,class:!0});var Be=y(t);Y(l.$$.fragment,Be),Be.forEach(m),re.forEach(m),i=j(q),o=v(q,"DIV",{class:!0});var Me=y(o);u=v(Me,"DIV",{class:!0});var ee=y(u);r=v(ee,"H5",{class:!0});var Te=y(r);P=v(Te,"A",{href:!0,target:!0,class:!0});var xe=y(P);xe.forEach(m),Te.forEach(m),w=j(ee),L=v(ee,"DIV",{class:!0});var he=y(L);A=v(he,"I",{class:!0}),y(A).forEach(m),C=j(he),c=v(he,"SPAN",{class:!0});var et=y(c);et.forEach(m),he.forEach(m),V=j(ee),k=v(ee,"DIV",{class:!0});var Ce=y(k);G.l(Ce),Ce.forEach(m),d=j(ee),b=v(ee,"DIV",{class:!0});var pe=y(b);_=v(pe,"DIV",{class:!0});var Ae=y(_);p=v(Ae,"A",{href:!0,class:!0});var Ee=y(p);I=v(Ee,"I",{class:!0}),y(I).forEach(m),E=$(Ee," Jetzt anrufen"),Ee.forEach(m),Ae.forEach(m),S=j(pe),T=v(pe,"DIV",{class:!0});var Se=y(T);R=v(Se,"A",{href:!0,class:!0});var Ie=y(R);K=v(Ie,"I",{class:!0}),y(K).forEach(m),le=$(Ie,` 
                        WhatsApp`),Ie.forEach(m),Se.forEach(m),pe.forEach(m),ee.forEach(m),Me.forEach(m),q.forEach(m),te=j(M),U=v(M,"SPAN",{style:!0});var Pe=y(U);se=$(Pe,"PropertyID: "),x=$(Pe,a[7]),Pe.forEach(m),this.h()},h(){f(t,"href",n=a[8]+"/de/dubai/off-plan-projects/"+a[0]),f(t,"target","_blank"),f(t,"class","svelte-10zp9yq"),f(s,"class","col-lg-5 col-md-6 DetailsBox svelte-10zp9yq"),f(P,"href",B=a[8]+"/de/dubai/off-plan-projects/"+a[0]),f(P,"target","_blank"),f(P,"class","svelte-10zp9yq"),f(r,"class","card-title HPrice svelte-10zp9yq"),f(A,"class","bx bxs-map-pin MyPin svelte-10zp9yq"),f(c,"class","DTxtlm svelte-10zp9yq"),f(L,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-10zp9yq"),f(k,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-10zp9yq"),f(I,"class","bx bi-telephone"),f(p,"href",D="tel:"+a[5]),f(p,"class","telephone svelte-10zp9yq"),f(_,"class","p-0 bd-highlight"),f(K,"class","bx bi-whatsapp"),f(R,"href",X="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+a[1]+"."),f(R,"class","whatsapp svelte-10zp9yq"),f(T,"class","p-0 bd-highlight"),f(b,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-10zp9yq"),f(u,"class","card-body svelte-10zp9yq"),f(o,"class","col-lg-7 col-md-6 "),f(e,"class","row no-gutters svelte-10zp9yq"),f(e,"id","MyDetails"),lt(U,"display","none")},m(M,q){H(M,e,q),h(e,s),h(s,t),J(l,t,null),h(e,i),h(e,o),h(o,u),h(u,r),h(r,P),P.innerHTML=a[1],h(u,w),h(u,L),h(L,A),h(L,C),h(L,c),c.innerHTML=a[2],h(u,V),h(u,k),G.m(k,null),h(u,d),h(u,b),h(b,_),h(_,p),h(p,I),h(p,E),h(b,S),h(b,T),h(T,R),h(R,K),h(R,le),H(M,te,q),H(M,U,q),h(U,se),h(U,x),F=!0},p(M,[q]){const re={};q&16450&&(re.$$scope={dirty:q,ctx:M}),l.$set(re),(!F||q&257&&n!==(n=M[8]+"/de/dubai/off-plan-projects/"+M[0]))&&f(t,"href",n),(!F||q&2)&&(P.innerHTML=M[1]),(!F||q&257&&B!==(B=M[8]+"/de/dubai/off-plan-projects/"+M[0]))&&f(P,"href",B),(!F||q&4)&&(c.innerHTML=M[2]),me===(me=ke(M))&&G?G.p(M,q):(G.d(1),G=me(M),G&&(G.c(),G.m(k,null))),(!F||q&32&&D!==(D="tel:"+M[5]))&&f(p,"href",D),(!F||q&2&&X!==(X="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+M[1]+"."))&&f(R,"href",X),(!F||q&128)&&De(x,M[7])},i(M){F||(z(l.$$.fragment,M),F=!0)},o(M){N(l.$$.fragment,M),F=!1},d(M){M&&m(e),Q(l),G.d(),M&&m(te),M&&m(U)}}}let Dt="/assets/images/265x230.jpg";function Lt(a,e,s){let{title:t="Exclusive | All-New | The Best Deal | City Walk"}=e,{slug:l}=e,{Community:n="Building 10 - City Walk"}=e,{building:i="Full Building"}=e,{noOfBeds:o="4 Bedroom"}=e,{noOfBaths:u="3 Bath"}=e,{price:r="AED 4,300,000"}=e,{CsPrice:P="AED 430K"}=e,{agentNumber:B=null}=e,{images:w=[]}=e,{objectID:L}=e,A="";const C=()=>{console.log(w)};return we(()=>{s(8,A=window.location.origin),l===null&&s(0,l="demo")}),a.$$set=c=>{"title"in c&&s(1,t=c.title),"slug"in c&&s(0,l=c.slug),"Community"in c&&s(2,n=c.Community),"building"in c&&s(9,i=c.building),"noOfBeds"in c&&s(10,o=c.noOfBeds),"noOfBaths"in c&&s(11,u=c.noOfBaths),"price"in c&&s(3,r=c.price),"CsPrice"in c&&s(4,P=c.CsPrice),"agentNumber"in c&&s(5,B=c.agentNumber),"images"in c&&s(6,w=c.images),"objectID"in c&&s(7,L=c.objectID)},a.$$.update=()=>{a.$$.dirty&64&&C()},[l,t,n,r,P,B,w,L,A,i,o,u]}class kt extends ve{constructor(e){super(),be(this,e,Lt,Pt,ye,{title:1,slug:0,Community:2,building:9,noOfBeds:10,noOfBaths:11,price:3,CsPrice:4,agentNumber:5,images:6,objectID:7})}}function Re(a,e,s){const t=a.slice();return t[19]=e[s],t[21]=s,t}function Ue(a,e,s){const t=a.slice();return t[22]=e[s],t}function Fe(a){let e,s=a[22].pctitle+"",t,l,n,i;return{c(){e=g("div"),t=Z(s),l=O(),this.h()},l(o){e=v(o,"DIV",{class:!0});var u=y(e);t=$(u,s),l=j(u),u.forEach(m),this.h()},h(){f(e,"class","search-key svelte-1yzwtq8")},m(o,u){H(o,e,u),h(e,t),h(e,l),n||(i=ce(e,"click",a[6]),n=!0)},p(o,u){u&1&&s!==(s=o[22].pctitle+"")&&De(t,s)},d(o){o&&m(e),n=!1,i()}}}function Ge(a){let e,s,t=a[1],l=[];for(let o=0;o<t.length;o+=1)l[o]=We(Re(a,t,o));const n=o=>N(l[o],1,1,()=>{l[o]=null});let i=null;return t.length||(i=Ke()),{c(){e=g("div");for(let o=0;o<l.length;o+=1)l[o].c();i&&i.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var u=y(e);for(let r=0;r<l.length;r+=1)l[r].l(u);i&&i.l(u),u.forEach(m),this.h()},h(){f(e,"class","card mb-2 svelte-1yzwtq8")},m(o,u){H(o,e,u);for(let r=0;r<l.length;r+=1)l[r].m(e,null);i&&i.m(e,null),s=!0},p(o,u){if(u&2){t=o[1];let r;for(r=0;r<t.length;r+=1){const P=Re(o,t,r);l[r]?(l[r].p(P,u),z(l[r],1)):(l[r]=We(P),l[r].c(),z(l[r],1),l[r].m(e,null))}for(ue(),r=t.length;r<l.length;r+=1)n(r);de(),!t.length&&i?i.p(o,u):t.length?i&&(ue(),N(i,1,1,()=>{i=null}),de()):(i=Ke(),i.c(),z(i,1),i.m(e,null))}},i(o){if(!s){for(let u=0;u<t.length;u+=1)z(l[u]);s=!0}},o(o){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)N(l[u]);s=!1},d(o){o&&m(e),Je(l,o),i&&i.d()}}}function Ke(a){let e,s,t,l;return s=new pt({}),{c(){e=g("div"),W(s.$$.fragment),t=O(),this.h()},l(n){e=v(n,"DIV",{class:!0});var i=y(e);Y(s.$$.fragment,i),t=j(i),i.forEach(m),this.h()},h(){f(e,"class","col-lg-12 col-md-12")},m(n,i){H(n,e,i),J(s,e,null),h(e,t),l=!0},p:Ye,i(n){l||(z(s.$$.fragment,n),l=!0)},o(n){N(s.$$.fragment,n),l=!1},d(n){n&&m(e),Q(s)}}}function Xe(a){let e,s;return e=new kt({props:{title:a[19].Property_Title_ru,Community:a[19].Community_ru,noOfBeds:a[19].Bedrooms,noOfBaths:a[19].No_of_Bathroom,images:a[19].Prothbimgname,price:a[19].Price?_e(a[19].Price):"",CsPrice:a[19].Price?ge(a[19].Price):"",agentNumber:a[19].Property_Name_ru,building:a[19].Property_Title_ru,objectID:a[19].id,slug:a[19].Property_Slug}}),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,l){J(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.title=t[19].Property_Title_ru),l&2&&(n.Community=t[19].Community_ru),l&2&&(n.noOfBeds=t[19].Bedrooms),l&2&&(n.noOfBaths=t[19].No_of_Bathroom),l&2&&(n.images=t[19].Prothbimgname),l&2&&(n.price=t[19].Price?_e(t[19].Price):""),l&2&&(n.CsPrice=t[19].Price?ge(t[19].Price):""),l&2&&(n.agentNumber=t[19].Property_Name_ru),l&2&&(n.building=t[19].Property_Title_ru),l&2&&(n.objectID=t[19].id),l&2&&(n.slug=t[19].Property_Slug),e.$set(n)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function We(a){let e,s,t=a[19].Published==="Yes"&&a[19].Property_Title_ru&&Xe(a);return{c(){t&&t.c(),e=ze()},l(l){t&&t.l(l),e=ze()},m(l,n){t&&t.m(l,n),H(l,e,n),s=!0},p(l,n){l[19].Published==="Yes"&&l[19].Property_Title_ru?t?(t.p(l,n),n&2&&z(t,1)):(t=Xe(l),t.c(),z(t,1),t.m(e.parentNode,e)):t&&(ue(),N(t,1,1,()=>{t=null}),de())},i(l){s||(z(t),s=!0)},o(l){N(t),s=!1},d(l){t&&t.d(l),l&&m(e)}}}function Bt(a){let e,s,t,l,n,i,o,u,r,P,B,w,L,A,C,c,V,k,d,b,_,p=a[0],I=[];for(let D=0;D<p.length;D+=1)I[D]=Fe(Ue(a,p,D));let E=a[2]&&Ge(a);return{c(){e=g("div"),s=g("div"),t=g("div"),l=O(),n=g("div");for(let D=0;D<I.length;D+=1)I[D].c();i=O(),o=g("form"),u=g("div"),r=g("input"),P=O(),B=g("div"),w=g("button"),L=Z("\u041F\u041E\u0418\u0421\u041A"),A=O(),C=g("div"),c=g("i"),V=O(),k=g("div"),E&&E.c(),this.h()},l(D){e=v(D,"DIV",{class:!0,id:!0});var S=y(e);s=v(S,"DIV",{class:!0});var T=y(s);t=v(T,"DIV",{class:!0}),y(t).forEach(m),T.forEach(m),l=j(S),n=v(S,"DIV",{id:!0,class:!0});var R=y(n);for(let x=0;x<I.length;x+=1)I[x].l(R);R.forEach(m),i=j(S),o=v(S,"FORM",{class:!0,id:!0});var K=y(o);u=v(K,"DIV",{class:!0});var le=y(u);r=v(le,"INPUT",{type:!0,class:!0,id:!0,autocomplete:!0,placeholder:!0}),le.forEach(m),P=j(K),B=v(K,"DIV",{class:!0});var X=y(B);w=v(X,"BUTTON",{type:!0,id:!0,class:!0});var te=y(w);L=$(te,"\u041F\u041E\u0418\u0421\u041A"),te.forEach(m),A=j(X),C=v(X,"DIV",{class:!0});var U=y(C);c=v(U,"I",{class:!0}),y(c).forEach(m),U.forEach(m),X.forEach(m),K.forEach(m),V=j(S),k=v(S,"DIV",{class:!0});var se=y(k);E&&E.l(se),se.forEach(m),S.forEach(m),this.h()},h(){f(t,"class","line svelte-1yzwtq8"),f(s,"class","line-keeper"),f(n,"id","search-container"),f(n,"class","svelte-1yzwtq8"),f(r,"type","text"),f(r,"class","form-control location-input svelte-1yzwtq8"),f(r,"id","location-input"),f(r,"autocomplete","off"),f(r,"placeholder","Location / Property Name"),f(u,"class","form-group location-container"),f(w,"type","submit"),f(w,"id","btnSubmit"),f(w,"class","d-grid btn btn-primary search-btn svelte-1yzwtq8"),f(c,"class","bi bi-search svelte-1yzwtq8"),f(C,"class","lens svelte-1yzwtq8"),f(B,"class","mt-md-4 mb-3"),f(o,"class","offplan-search-location svelte-1yzwtq8"),f(o,"id","myForm"),f(k,"class","row"),f(e,"class","col-lg-6 mt-5 svelte-1yzwtq8"),f(e,"id","MyDetails")},m(D,S){H(D,e,S),h(e,s),h(s,t),h(e,l),h(e,n);for(let T=0;T<I.length;T+=1)I[T].m(n,null);h(e,i),h(e,o),h(o,u),h(u,r),Ve(r,a[3].location),h(o,P),h(o,B),h(B,w),h(w,L),h(B,A),h(B,C),h(C,c),h(e,V),h(e,k),E&&E.m(k,null),d=!0,b||(_=[ce(r,"input",a[9]),ce(r,"focus",a[4]),ce(r,"keyup",a[5]),ce(o,"submit",at(a[7]))],b=!0)},p(D,[S]){if(S&65){p=D[0];let T;for(T=0;T<p.length;T+=1){const R=Ue(D,p,T);I[T]?I[T].p(R,S):(I[T]=Fe(R),I[T].c(),I[T].m(n,null))}for(;T<I.length;T+=1)I[T].d(1);I.length=p.length}S&8&&r.value!==D[3].location&&Ve(r,D[3].location),D[2]?E?(E.p(D,S),S&4&&z(E,1)):(E=Ge(D),E.c(),z(E,1),E.m(k,null)):E&&(ue(),N(E,1,1,()=>{E=null}),de())},i(D){d||(z(E),d=!0)},o(D){N(E),d=!1},d(D){D&&m(e),Je(I,D),E&&E.d(),b=!1,nt(_)}}}const Mt="48O3SXQXMR",Tt="ec1af9fe04b917db992f934e4b96b695",Ct="tbl_Properties_offplan";function At(a,e,s){let t,l,n;oe(a,ie,_=>s(3,t=_)),oe(a,fe,_=>s(12,l=_)),oe(a,Qe,_=>s(13,n=_));const o=$e(Mt,Tt).initIndex(Ct);let{list:u=[]}=e,r=n.url.pathname.split("/"),P=[],B=[],w=[],L=!1;const A=_=>{if(_==="exclusive-projects")return"Exclusive Projects";if(_==="ready-projects")return"Ready Projects";if(_==="new-development-dubai")return"New Development";if(_==="offplan-apartments")return"Apartments";if(_==="offplan-villas")return"Villas";if(_==="offplan-townhouses")return"Townhouses"},C=()=>{console.log("apartmentlist-listData",u),s(1,w=u),console.log(w)},c=async()=>{console.log("getCommunity fn");let p=await(await fetch(`${Le}/searchCommunityOffPlan`)).json();P=p,s(0,B=p),document.getElementById("search-container").style.display="block"},V=async _=>{console.log("handleKeywordSearch fn"),document.onclick=function(){document.getElementById("search-container").style.display="none"};let p=String(_.target.value);var I=`.*${p}.*`,E=new RegExp(I,"gi");console.log(p);let D=P.filter(S=>{if(E.test(S.pctitle))return S.pctitle});console.log(D),s(0,B=D),p!==""?document.getElementById("search-container").style.display="block":c()},k=async _=>{console.log("handleSEarcheClicked fn");const p=_.target.innerText;document.getElementById("location-input").value=p,ne(ie,t.location=p,t),document.getElementById("search-container").style.display="none"},d=async()=>{ne(fe,l.isMapMoved=!l.isMapMoved,l);let _=t.location.split("-"),p=r[r.length-1],I=A(p),E=[];_.length?E=[_[0],I]:E=[I],console.log(E),o.search(E||"",{hitsPerPage:50,length:50}).then(D=>{s(1,w=D.hits),w.length&&s(2,L=!0),ne(fe,l.location_coord=w,l),console.log(w)})};we(()=>{let _=localStorage.getItem("community");d(),_!=="null"&&(setTimeout(()=>{ne(ie,t.location=_,t)},2e3),setTimeout(()=>{document.getElementById("btnSubmit").click(),localStorage.setItem("community",null)},5e3)),document.onclick=function(){document.getElementById("search-container").style.display="none"}});function b(){t.location=this.value,ie.set(t)}return a.$$set=_=>{"list"in _&&s(8,u=_.list)},a.$$.update=()=>{a.$$.dirty&256&&C()},[B,w,L,t,c,V,k,d,u,b]}class St extends ve{constructor(e){super(),be(this,e,At,Bt,ye,{list:8})}}function zt(a){let e,s,t,l=(a[0].name_ru?a[0].name_ru:"SALES")+"";return{c(){e=g("div"),s=g("div"),t=g("h2"),this.h()},l(n){e=v(n,"DIV",{class:!0,"data-aos":!0});var i=y(e);s=v(i,"DIV",{class:!0});var o=y(s);t=v(o,"H2",{class:!0});var u=y(t);u.forEach(m),o.forEach(m),i.forEach(m),this.h()},h(){f(t,"class","mb-4"),f(s,"class","section-title"),f(e,"class","container aos-init aos-animate"),f(e,"data-aos","fade-up")},m(n,i){H(n,e,i),h(e,s),h(s,t),t.innerHTML=l},p(n,i){i&1&&l!==(l=(n[0].name_ru?n[0].name_ru:"SALES")+"")&&(t.innerHTML=l)},d(n){n&&m(e)}}}function Vt(a){let e,s,t,l,n,i,o,u,r,P,B,w,L;e=new ct({props:{MetaTitle:a[0].metatitle,MetaDescription:a[0].metadescription}}),t=new rt({props:{LinkOne:a[2][1],LinkTwo:a[0].name,headings:a[0].name?a[0].name:"Why Dubai?",Bdtype:2}});const A=a[5].default,C=qe(A,a,a[4],null),c=C||zt(a),V=a[5].default,k=qe(V,a,a[4],null);return P=new St({props:{list:a[1]}}),w=new bt({props:{list:a[1]}}),w.$on("coord",a[3]),{c(){W(e.$$.fragment),s=O(),W(t.$$.fragment),l=O(),c&&c.c(),n=O(),i=g("section"),o=g("div"),k&&k.c(),u=O(),r=g("div"),W(P.$$.fragment),B=O(),W(w.$$.fragment),this.h()},l(d){Y(e.$$.fragment,d),s=j(d),Y(t.$$.fragment,d),l=j(d),c&&c.l(d),n=j(d),i=v(d,"SECTION",{"data-sveltekit-prefetch":!0,id:!0,class:!0});var b=y(i);o=v(b,"DIV",{class:!0,"data-aos":!0});var _=y(o);k&&k.l(_),u=j(_),r=v(_,"DIV",{class:!0});var p=y(r);Y(P.$$.fragment,p),B=j(p),Y(w.$$.fragment,p),p.forEach(m),_.forEach(m),b.forEach(m),this.h()},h(){f(r,"class","row mt-4 sales-component-container svelte-929epu"),f(o,"class","container sale-php-section aos-init aos-animate svelte-929epu"),f(o,"data-aos","fade-up"),f(i,"data-sveltekit-prefetch",""),f(i,"id","skills"),f(i,"class","skills svelte-929epu")},m(d,b){J(e,d,b),H(d,s,b),J(t,d,b),H(d,l,b),c&&c.m(d,b),H(d,n,b),H(d,i,b),h(i,o),k&&k.m(o,null),h(o,u),h(o,r),J(P,r,null),h(r,B),J(w,r,null),L=!0},p(d,[b]){const _={};b&1&&(_.MetaTitle=d[0].metatitle),b&1&&(_.MetaDescription=d[0].metadescription),e.$set(_);const p={};b&1&&(p.LinkTwo=d[0].name),b&1&&(p.headings=d[0].name?d[0].name:"Why Dubai?"),t.$set(p),C?C.p&&(!L||b&16)&&Oe(C,A,d,d[4],L?Ne(A,d[4],b,null):je(d[4]),null):c&&c.p&&(!L||b&1)&&c.p(d,L?b:-1),k&&k.p&&(!L||b&16)&&Oe(k,V,d,d[4],L?Ne(V,d[4],b,null):je(d[4]),null);const I={};b&2&&(I.list=d[1]),P.$set(I);const E={};b&2&&(E.list=d[1]),w.$set(E)},i(d){L||(z(e.$$.fragment,d),z(t.$$.fragment,d),z(c,d),z(k,d),z(P.$$.fragment,d),z(w.$$.fragment,d),L=!0)},o(d){N(e.$$.fragment,d),N(t.$$.fragment,d),N(c,d),N(k,d),N(P.$$.fragment,d),N(w.$$.fragment,d),L=!1},d(d){Q(e,d),d&&m(s),Q(t,d),d&&m(l),c&&c.d(d),d&&m(n),d&&m(i),k&&k.d(d),Q(P),Q(w)}}}const qt="48O3SXQXMR",Ot="ec1af9fe04b917db992f934e4b96b695",jt="tbl_Properties_offplan";function Nt(a,e,s){let t;oe(a,Qe,c=>s(11,t=c));let{$$slots:l={},$$scope:n}=e;const o=$e(qt,Ot).initIndex(jt);let u=[],r=t.url.pathname.split("/"),P=[],B=[],w,L;const A=c=>{if(c==="exclusive-projects")return"Exclusive Projects";if(c==="ready-projects")return"Ready Projects";if(c==="new-development-dubai")return"New Development";if(c==="offplan-apartments")return"Apartments";if(c==="offplan-villas")return"Villas";if(c==="offplan-townhouses")return"Townhouses"},C=async(c,V=1)=>{let k=r[r.length-1],d=A(k);L||(P=[c.detail.boundingBox._sw.lat,c.detail.boundingBox._sw.lng,c.detail.boundingBox._ne.lat,c.detail.boundingBox._ne.lng]),console.log(d,P,V),o.search(d||"",{insideBoundingBox:[P],hitsPerPage:50,page:V-1}).then(b=>{console.log(b),b.hits,s(1,B=b.hits),console.log(B),b.nbHits,w=b.nbPages,w=w<0?0:w,console.log(w),L=!1})};return we(async()=>{const V=await(await fetch(`${Le}/getSignleHeaderMenu/${r[2]}`)).json();s(0,u=V)}),a.$$set=c=>{"$$scope"in c&&s(4,n=c.$$scope)},[u,B,r,C,n,l]}class el extends ve{constructor(e){super(),be(this,e,Nt,Vt,ye,{})}}export{el as M};
