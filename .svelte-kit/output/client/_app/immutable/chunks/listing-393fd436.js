import{S as ta,i as sa,s as ra,e as u,w as Ye,k as L,aa as Ge,t as k,c,a as h,x as Ze,d as o,m as C,ab as qe,h as N,b as r,f as ia,g as V,G as s,y as xe,j as Je,q as pe,o as we,B as $e,U as oa,l as be,n as na,p as fa,E as Re,T as Ke}from"./index-f4dbb4b4.js";import{S as ua,P as ca,N as da,a as ha}from"./navigation.min-5f06678b.js";import{L as ma}from"./lazy-29125fb4.js";import{C as Qe}from"./others-c2922311.js";import{p as _a}from"./stores-0549e581.js";function va(t){let a,e=t[12]==="No"&&Xe();return{c(){e&&e.c(),a=be()},l(l){e&&e.l(l),a=be()},m(l,n){e&&e.m(l,n),V(l,a,n)},p(l,n){l[12]==="No"?e||(e=Xe(),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&o(a)}}}function Xe(t){let a,e;return{c(){a=u("div"),e=k("SOLD"),this.h()},l(l){a=c(l,"DIV",{class:!0});var n=h(a);e=N(n,"SOLD"),n.forEach(o),this.h()},h(){r(a,"class","published svelte-1x7394f")},m(l,n){V(l,a,n),s(a,e)},d(l){l&&o(a)}}}function ga(t){let a,e,l,n,g,i;return{c(){a=u("div"),e=u("a"),l=u("div"),n=u("em"),g=k("NO IMAGE FOUND!"),this.h()},l(d){a=c(d,"DIV",{});var v=h(a);e=c(v,"A",{href:!0,id:!0,class:!0});var E=h(e);l=c(E,"DIV",{class:!0});var f=h(l);n=c(f,"EM",{});var p=h(n);g=N(p,"NO IMAGE FOUND!"),p.forEach(o),f.forEach(o),E.forEach(o),v.forEach(o),this.h()},h(){r(l,"class","no-image svelte-1x7394f"),r(e,"href",i="/ru/"+t[9].toLowerCase()+"/"+t[2].toLowerCase()+"-for-"+t[10].toLowerCase()+"/"+t[1].toLowerCase().replaceAll(" ","-")+"/"+t[11].toLowerCase().replaceAll(" ","-")+"/"+t[8].toLowerCase()),r(e,"id","MyLksImg"),r(e,"class","svelte-1x7394f")},m(d,v){V(d,a,v),s(a,e),s(e,l),s(l,n),s(n,g)},p(d,v){v&3846&&i!==(i="/ru/"+d[9].toLowerCase()+"/"+d[2].toLowerCase()+"-for-"+d[10].toLowerCase()+"/"+d[1].toLowerCase().replaceAll(" ","-")+"/"+d[11].toLowerCase().replaceAll(" ","-")+"/"+d[8].toLowerCase())&&r(e,"href",i)},i:Re,o:Re,d(d){d&&o(a)}}}function pa(t){let a,e;return a=new ha({props:{$$slots:{default:[wa]},$$scope:{ctx:t}}}),{c(){Ye(a.$$.fragment)},l(l){Ze(a.$$.fragment,l)},m(l,n){xe(a,l,n),e=!0},p(l,n){const g={};n&266119&&(g.$$scope={dirty:n,ctx:l}),a.$set(g)},i(l){e||(pe(a.$$.fragment,l),e=!0)},o(l){we(a.$$.fragment,l),e=!1},d(l){$e(a,l)}}}function wa(t){let a,e,l,n,g;return{c(){a=u("a"),e=u("img"),this.h()},l(i){a=c(i,"A",{href:!0,id:!0,class:!0});var d=h(a);e=c(d,"IMG",{"data-src":!0,src:!0,class:!0,alt:!0}),d.forEach(o),this.h()},h(){r(e,"data-src",l=t[7].image[0]),Ke(e.src,n=t[7].image[0])||r(e,"src",n),r(e,"class","swiper-lazy img-fluid svelte-1x7394f"),r(e,"alt",t[0]),r(a,"href",g="/ru/"+t[9].toLowerCase()+"/"+t[2].toLowerCase()+"-for-"+t[10].toLowerCase()+"/"+t[1].toLowerCase().replaceAll(" ","-")+"/"+t[11].toLowerCase().replaceAll(" ","-")+"/"+t[8].toLowerCase()),r(a,"id","MyLksImg"),r(a,"class","svelte-1x7394f")},m(i,d){V(i,a,d),s(a,e)},p(i,d){d&128&&l!==(l=i[7].image[0])&&r(e,"data-src",l),d&128&&!Ke(e.src,n=i[7].image[0])&&r(e,"src",n),d&1&&r(e,"alt",i[0]),d&3846&&g!==(g="/ru/"+i[9].toLowerCase()+"/"+i[2].toLowerCase()+"-for-"+i[10].toLowerCase()+"/"+i[1].toLowerCase().replaceAll(" ","-")+"/"+i[11].toLowerCase().replaceAll(" ","-")+"/"+i[8].toLowerCase())&&r(a,"href",g)},d(i){i&&o(a)}}}function ba(t){let a,e,l,n,g,i=(t[13][3]==="sale-commercial"||t[13][3]==="sale-industrial"||t[13][3]==="commerial-for-rent"||t[13][3]==="industrial-for-rent")&&va(t);const d=[pa,ga],v=[];function E(f,p){return f[7].image?0:1}return e=E(t),l=v[e]=d[e](t),{c(){i&&i.c(),a=L(),l.c(),n=be()},l(f){i&&i.l(f),a=C(f),l.l(f),n=be()},m(f,p){i&&i.m(f,p),V(f,a,p),v[e].m(f,p),V(f,n,p),g=!0},p(f,p){(f[13][3]==="sale-commercial"||f[13][3]==="sale-industrial"||f[13][3]==="commerial-for-rent"||f[13][3]==="industrial-for-rent")&&i.p(f,p);let D=e;e=E(f),e===D?v[e].p(f,p):(na(),we(v[D],1,1,()=>{v[D]=null}),fa(),l=v[e],l?l.p(f,p):(l=v[e]=d[e](f),l.c()),pe(l,1),l.m(n.parentNode,n))},i(f){g||(pe(l),g=!0)},o(f){we(l),g=!1},d(f){i&&i.d(f),f&&o(a),v[e].d(f),f&&o(n)}}}function La(t){let a,e,l,n,g,i,d,v,E,f,p,D,G,y,q,I,A,z,m,W,te=t[2]==="Apartment"?"Wohnung":"Villa",Le,O,X,Ce,F,Y,se=t[3].split(" ")[0]+"",re,Ee,T,Z,Ie,j,x,ie=t[4].split(" ")[0]+"",oe,De,J,U,$=Qe(parseInt(t[5]*.25))+"",ne,Ae,ye,P,R,S,ee,Be,fe,ke,K,M,ae,Ne,ue,ce,H,Se,de,b;return l=new ua({props:{lazy:!0,rewind:!0,navigation:!0,pagination:{dynamicBullets:!0},modules:[ma,ca,da],class:"mySwiper",$$slots:{default:[ba]},$$scope:{ctx:t}}}),{c(){a=u("div"),e=u("div"),Ye(l.$$.fragment),n=L(),g=u("div"),i=u("div"),d=u("h5"),v=u("a"),f=L(),p=u("div"),D=u("i"),G=L(),y=u("span"),q=L(),I=u("div"),A=u("div"),z=u("i"),m=L(),W=u("span"),Le=L(),O=u("div"),X=u("i"),Ce=L(),F=u("span"),Y=new Ge(!1),re=k(" Betten"),Ee=L(),T=u("div"),Z=u("i"),Ie=L(),j=u("span"),x=new Ge(!1),oe=k(" Badezimmer"),De=L(),J=u("div"),U=u("h3"),ne=k($),Ae=k(" EUR"),ye=L(),P=u("div"),R=u("div"),S=u("a"),ee=u("i"),Be=k(" Jetzt anrufen"),ke=L(),K=u("div"),M=u("a"),ae=u("i"),Ne=k(` 
                        WhatsApp`),ce=L(),H=u("span"),Se=k("PropertyID: "),de=k(t[8]),this.h()},l(_){a=c(_,"DIV",{class:!0,id:!0});var w=h(a);e=c(w,"DIV",{class:!0});var le=h(e);Ze(l.$$.fragment,le),le.forEach(o),n=C(w),g=c(w,"DIV",{class:!0});var ze=h(g);i=c(ze,"DIV",{class:!0});var B=h(i);d=c(B,"H5",{class:!0});var We=h(d);v=c(We,"A",{href:!0,class:!0});var ea=h(v);ea.forEach(o),We.forEach(o),f=C(B),p=c(B,"DIV",{class:!0});var he=h(p);D=c(he,"I",{class:!0}),h(D).forEach(o),G=C(he),y=c(he,"SPAN",{class:!0});var aa=h(y);aa.forEach(o),he.forEach(o),q=C(B),I=c(B,"DIV",{class:!0});var Q=h(I);A=c(Q,"DIV",{class:!0});var me=h(A);z=c(me,"I",{class:!0}),h(z).forEach(o),m=C(me),W=c(me,"SPAN",{class:!0});var la=h(W);la.forEach(o),me.forEach(o),Le=C(Q),O=c(Q,"DIV",{class:!0});var _e=h(O);X=c(_e,"I",{class:!0}),h(X).forEach(o),Ce=C(_e),F=c(_e,"SPAN",{class:!0});var Me=h(F);Y=qe(Me,!1),re=N(Me," Betten"),Me.forEach(o),_e.forEach(o),Ee=C(Q),T=c(Q,"DIV",{class:!0});var ve=h(T);Z=c(ve,"I",{class:!0}),h(Z).forEach(o),Ie=C(ve),j=c(ve,"SPAN",{class:!0});var Ve=h(j);x=qe(Ve,!1),oe=N(Ve," Badezimmer"),Ve.forEach(o),ve.forEach(o),Q.forEach(o),De=C(B),J=c(B,"DIV",{class:!0});var Fe=h(J);U=c(Fe,"H3",{class:!0});var Oe=h(U);ne=N(Oe,$),Ae=N(Oe," EUR"),Oe.forEach(o),Fe.forEach(o),ye=C(B),P=c(B,"DIV",{class:!0});var ge=h(P);R=c(ge,"DIV",{class:!0});var je=h(R);S=c(je,"A",{href:!0,class:!0});var Te=h(S);ee=c(Te,"I",{class:!0}),h(ee).forEach(o),Be=N(Te," Jetzt anrufen"),Te.forEach(o),je.forEach(o),ke=C(ge),K=c(ge,"DIV",{class:!0});var Ue=h(K);M=c(Ue,"A",{href:!0,class:!0});var Pe=h(M);ae=c(Pe,"I",{class:!0}),h(ae).forEach(o),Ne=N(Pe,` 
                        WhatsApp`),Pe.forEach(o),Ue.forEach(o),ge.forEach(o),B.forEach(o),ze.forEach(o),w.forEach(o),ce=C(_),H=c(_,"SPAN",{style:!0});var He=h(H);Se=N(He,"PropertyID: "),de=N(He,t[8]),He.forEach(o),this.h()},h(){r(e,"class","col-lg-5 col-md-6 DetailsBox svelte-1x7394f"),r(v,"href",E="/ru/"+t[9].toLowerCase()+"/"+t[2].toLowerCase()+"-for-"+t[10].toLowerCase()+"/"+t[1].toLowerCase().replaceAll(" ","-")+"/"+t[11].toLowerCase().replaceAll(" ","-")+"/"+t[8].toLowerCase()),r(v,"class","MyLkstxt svelte-1x7394f"),r(d,"class","card-title HPrice svelte-1x7394f"),r(D,"class","bx bxs-map-pin MyPin svelte-1x7394f"),r(y,"class","DTxtlm svelte-1x7394f"),r(p,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-1x7394f"),r(z,"class","bx bx-building-house svelte-1x7394f"),r(W,"class","DTxtSm svelte-1x7394f"),r(A,"class","p-0 bd-highlight BDINFO svelte-1x7394f"),r(X,"class","bx bx-building-house svelte-1x7394f"),Y.a=re,r(F,"class","DTxtSm svelte-1x7394f"),r(O,"class","p-0 bd-highlight BDINFO svelte-1x7394f"),r(Z,"class","bx bx-building-house svelte-1x7394f"),x.a=oe,r(j,"class","DTxtSm svelte-1x7394f"),r(T,"class","p-0 bd-highlight BDINFO svelte-1x7394f"),r(I,"class","card-text d-flex flex-row bd-highlight"),r(U,"class","HPrice svelte-1x7394f"),r(J,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-1x7394f"),r(ee,"class","bx bi-telephone"),r(S,"href",fe="tel:"+t[6]),r(S,"class","telephone svelte-1x7394f"),r(R,"class","p-0 bd-highlight"),r(ae,"class","bx bi-whatsapp"),r(M,"href",ue="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+t[0]+"."),r(M,"class","whatsapp svelte-1x7394f"),r(K,"class","p-0 bd-highlight"),r(P,"class","card-text d-flex flex-row bd-highlight Bxinfo svelte-1x7394f"),r(i,"class","card-body svelte-1x7394f"),r(g,"class","col-lg-7 col-md-6"),r(a,"class","row no-gutters svelte-1x7394f"),r(a,"id","InnerMyDetails"),ia(H,"display","none")},m(_,w){V(_,a,w),s(a,e),xe(l,e,null),s(a,n),s(a,g),s(g,i),s(i,d),s(d,v),v.innerHTML=t[0],s(i,f),s(i,p),s(p,D),s(p,G),s(p,y),y.innerHTML=t[1],s(i,q),s(i,I),s(I,A),s(A,z),s(A,m),s(A,W),W.innerHTML=te,s(I,Le),s(I,O),s(O,X),s(O,Ce),s(O,F),Y.m(se,F),s(F,re),s(I,Ee),s(I,T),s(T,Z),s(T,Ie),s(T,j),x.m(ie,j),s(j,oe),s(i,De),s(i,J),s(J,U),s(U,ne),s(U,Ae),s(i,ye),s(i,P),s(P,R),s(R,S),s(S,ee),s(S,Be),s(P,ke),s(P,K),s(K,M),s(M,ae),s(M,Ne),V(_,ce,w),V(_,H,w),s(H,Se),s(H,de),b=!0},p(_,[w]){const le={};w&270215&&(le.$$scope={dirty:w,ctx:_}),l.$set(le),(!b||w&1)&&(v.innerHTML=_[0]),(!b||w&3846&&E!==(E="/ru/"+_[9].toLowerCase()+"/"+_[2].toLowerCase()+"-for-"+_[10].toLowerCase()+"/"+_[1].toLowerCase().replaceAll(" ","-")+"/"+_[11].toLowerCase().replaceAll(" ","-")+"/"+_[8].toLowerCase()))&&r(v,"href",E),(!b||w&2)&&(y.innerHTML=_[1]),(!b||w&4)&&te!==(te=_[2]==="Apartment"?"Wohnung":"Villa")&&(W.innerHTML=te),(!b||w&8)&&se!==(se=_[3].split(" ")[0]+"")&&Y.p(se),(!b||w&16)&&ie!==(ie=_[4].split(" ")[0]+"")&&x.p(ie),(!b||w&32)&&$!==($=Qe(parseInt(_[5]*.25))+"")&&Je(ne,$),(!b||w&64&&fe!==(fe="tel:"+_[6]))&&r(S,"href",fe),(!b||w&1&&ue!==(ue="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+_[0]+"."))&&r(M,"href",ue),(!b||w&256)&&Je(de,_[8])},i(_){b||(pe(l.$$.fragment,_),b=!0)},o(_){we(l.$$.fragment,_),b=!1},d(_){_&&o(a),$e(l),_&&o(ce),_&&o(H)}}}function Ca(t,a,e){let l;oa(t,_a,m=>e(15,l=m));let{title:n="Exclusive | All-New | The Best Deal | City Walk"}=a,{mapMarker:g="Building 10 - City Walk"}=a,{Community:i="Building 10 - City Walk"}=a,{building:d="Full Building"}=a,{noOfBeds:v="4 Bedroom"}=a,{noOfBaths:E="3 Bath"}=a,{price:f="AED 4,300,000"}=a,{agentNumber:p=null}=a,{images:D=[]}=a,{objectID:G}=a,{Emirate:y="dubai"}=a,{PropertyStatus:q="sale"}=a,{propertyTitle:I=""}=a,{published:A=""}=a,z=l.url.pathname.split("/");return t.$$set=m=>{"title"in m&&e(0,n=m.title),"mapMarker"in m&&e(14,g=m.mapMarker),"Community"in m&&e(1,i=m.Community),"building"in m&&e(2,d=m.building),"noOfBeds"in m&&e(3,v=m.noOfBeds),"noOfBaths"in m&&e(4,E=m.noOfBaths),"price"in m&&e(5,f=m.price),"agentNumber"in m&&e(6,p=m.agentNumber),"images"in m&&e(7,D=m.images),"objectID"in m&&e(8,G=m.objectID),"Emirate"in m&&e(9,y=m.Emirate),"PropertyStatus"in m&&e(10,q=m.PropertyStatus),"propertyTitle"in m&&e(11,I=m.propertyTitle),"published"in m&&e(12,A=m.published)},t.$$.update=()=>{t.$$.dirty&128},[n,i,d,v,E,f,p,D,G,y,q,I,A,z,g]}class Ba extends ta{constructor(a){super(),sa(this,a,Ca,La,ra,{title:0,mapMarker:14,Community:1,building:2,noOfBeds:3,noOfBaths:4,price:5,agentNumber:6,images:7,objectID:8,Emirate:9,PropertyStatus:10,propertyTitle:11,published:12})}}export{Ba as L};