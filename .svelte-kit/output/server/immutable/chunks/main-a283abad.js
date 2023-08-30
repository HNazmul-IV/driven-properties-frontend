import{c as $,a as g,f as O,v as w,b as S,e as G,d as U}from"./index-7b7abb97.js";import{p as A}from"./stores-73de46f1.js";import M from"mapbox-gl";import{c as P}from"./others-c2922311.js";import{w as k}from"./index-5fb08a48.js";/* empty css                  */import{L as C}from"./loader-8624fcbc.js";import{b as R,o as X}from"./base-url-ce329ce1.js";import T from"algoliasearch";import{B}from"./breadcrumb-3ab4b0ca.js";import{S as H}from"./SEOText-c0882b30.js";import"./navigation.min-21928df4.js";/* empty css                                             *//* empty css                                                      */let E=k({location:""}),I=k({location_coord:[],isMapMoved:!1,listByMapMove:{},location_name:""});const K={code:".myMapListing.svelte-1w7w789{position:relative;height:635px;width:100%}.loading.svelte-1w7w789{position:absolute;top:300px;z-index:111;width:98%;margin-left:18%}@media only screen and (max-width: 768px){.myMapListing.svelte-1w7w789{top:140px;position:fixed;left:0;height:350px;z-index:11}}",map:null},j=$((s,m,f,u)=>{let a,n,d,t;n=g(I,p=>a=p),t=g(E,p=>d=p),O();let{list:r=[]}=m,i=[],o=[],h,y=!1,c=25.177602,e=55.234789,v=[e,c];const _=async()=>{console.log("dataUpdate map.svelte sales-php"),o=a.location_coord;const p=d.location;if(p!==""){let b=await(await fetch(`${R}/getOffplanCoord/${p}`)).json();b[0].pclog!==null&&b[0].pclat!==null&&(v=[b[0].pclog,b[0].pclat],console.log(v))}v[1]!==25.177602&&v[0],z(h)},D=async()=>{i=r,o=i,i.length>0&&(e=Number(i[0].Longitude),c=Number(i[0].Latitude),e===0&&c===0&&(e=Number(i[1].Longitude),c=Number(i[1].Latitude)),v=[e,c]),y=!1,v[1]!==25.177602&&v[0],z(h)},N=async()=>{y=!1},z=p=>{console.log(o);for(const l of o)if(l.Price!==null&&l.Property_Title){const b=`
                    <div class="container g-0">
                        <div class="row g-0">
                            <div class="col-12 mb-2"><img  src="${X}/theme/assets/images/community/${l.Prothbimgname}" class="img-fluid myImgPopup" /></div>
                                <div class="col-sm-12 px-2 mb-2">
                                    <h6><strong>${l.Property_Title}</strong></h6>
                                    <h6>${l.Community}</h6>
                                    
                                    
                                    <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                        <div class="pt-2 bd-highlight"><strong>Price:</strong> ${P(l.Price*.25)} EUR</div>
                                    </div>
                                        
                                </div>
                        </div>
                    </div>
                `,x=document.createElement("span");x.textContent=P(l.Price*.25)+" EUR",x.className="marker1";let q=Number(l.Longitude),L=Number(l.Latitude);q&&L&&new M.Marker(x).setLngLat([q,L]).setPopup(new M.Popup({offset:25}).setHTML(b)).addTo(p)}};return m.list===void 0&&f.list&&r!==void 0&&f.list(r),s.css.add(K),D(),a.location_coord,_(),d.location,_(),a.isMapMoved,N(),n(),t(),`<div class="col-lg-6 mt-lg-5">${y?`<div class="container loading-container"><div class="loading svelte-1w7w789">${w(C,"Loader").$$render(s,{},{},{})}</div></div>`:""}
    <div class="apartment-sale-right"><div id="mapView" class="myMapListing svelte-1w7w789" allowfullscreen="true" loading="lazy"></div>
        </div>
</div>`});const Q={code:'#MyDetails.svelte-1yzwtq8.svelte-1yzwtq8{height:670px;overflow-y:scroll;margin-bottom:40px !important;background:white;position:relative}#MyDetails.svelte-1yzwtq8 .card.svelte-1yzwtq8{border:0;border-radius:0}.offplan-search-location.svelte-1yzwtq8.svelte-1yzwtq8{position:relative;margin-left:-10px}input#location-input.svelte-1yzwtq8.svelte-1yzwtq8{padding-left:40px}div#search-container.svelte-1yzwtq8.svelte-1yzwtq8{background:white;font-size:14px;padding:0 11px;position:absolute;border:1px solid #ccc;border-top:0px;z-index:11;top:38px;width:auto;left:48px;min-width:50%}div#search-container.svelte-1yzwtq8 .search-key.svelte-1yzwtq8{border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5;padding:5px;cursor:pointer}div#search-container.svelte-1yzwtq8 .search-key.svelte-1yzwtq8:hover{background-color:#f5f5f5}div#search-container.svelte-1yzwtq8.svelte-1yzwtq8{background:white;font-size:14px;padding:0 11px;position:absolute;border:1px solid #fff;border-top:0px;z-index:11;top:38px;width:auto;left:2px;min-width:48%;max-height:300px;overflow-y:auto}input#location-input.svelte-1yzwtq8.svelte-1yzwtq8{padding-left:17px}@media(max-width: 768px){div#search-container.svelte-1yzwtq8.svelte-1yzwtq8{position:absolute;top:70px !important;z-index:111;left:0 !important;right:0 !important;width:auto;max-height:342px !important}#MyDetails.svelte-1yzwtq8.svelte-1yzwtq8{top:314px !important;background:white;z-index:111;padding-top:2em;margin-bottom:18em !important;border-radius:20px}.offplan-search-location.svelte-1yzwtq8.svelte-1yzwtq8{position:relative;background:white;left:0px;right:0px;margin-top:0px;padding:0px 26px 0px 26px;z-index:1;transform:none !important;;}input#location-input.svelte-1yzwtq8.svelte-1yzwtq8{padding-left:17px;border-radius:48px}div#search-container.svelte-1yzwtq8.svelte-1yzwtq8{position:absolute !important;top:134px;left:37px;z-index:111}.line.svelte-1yzwtq8.svelte-1yzwtq8{width:50px;height:2px;background:#ccc;box-shadow:0px -3px 0px 0px #777;display:block;margin:auto;margin-top:-16px}.lens.svelte-1yzwtq8.svelte-1yzwtq8{display:block;position:absolute;right:37px;top:9px}.lens.svelte-1yzwtq8 .bi-search.svelte-1yzwtq8{font-size:18px;color:#999}.lens.svelte-1yzwtq8 .bi-search.svelte-1yzwtq8::before{content:"\\f52a";font-size:23px}.search-btn.svelte-1yzwtq8.svelte-1yzwtq8{display:none}button.search-btn.svelte-1yzwtq8.svelte-1yzwtq8{position:absolute;top:0;right:0;height:38px;width:auto}button.search-btn.svelte-1yzwtq8.svelte-1yzwtq8{position:absolute;top:13px;right:26px;height:38px;width:auto;border-radius:35px;display:none !important}}@media(min-width: 769px){.lens.svelte-1yzwtq8.svelte-1yzwtq8{display:none}button.search-btn.svelte-1yzwtq8.svelte-1yzwtq8{display:block;position:absolute;z-index:1;top:0;right:0;height:37px}}',map:null},Y="48O3SXQXMR",F="ec1af9fe04b917db992f934e4b96b695",V="tbl_Properties_offplan",W=$((s,m,f,u)=>{let a,n,d,t,r;n=g(E,e=>a=e),d=g(I,e=>e),r=g(A,e=>t=e),T(Y,F).initIndex(V);let{list:o=[]}=m;t.url.pathname.split("/");let h=[],y=[];const c=()=>{console.log("apartmentlist-listData",o),y=o,console.log(y)};return m.list===void 0&&f.list&&o!==void 0&&f.list(o),s.css.add(Q),c(),n(),d(),r(),`<div class="col-lg-6 mt-5 svelte-1yzwtq8" id="MyDetails"><div class="line-keeper"><div class="line svelte-1yzwtq8"></div></div>
    <div id="search-container" class="svelte-1yzwtq8">${S(h,e=>`<div class="search-key svelte-1yzwtq8">${G(e.pctitle)}
            </div>`)}</div>
    <form class="offplan-search-location svelte-1yzwtq8" id="myForm"><div class="form-group location-container"><input type="text" class="form-control location-input svelte-1yzwtq8" id="location-input" autocomplete="off" placeholder="Location / Property Name"${U("value",a.location,0)}></div>
        <div class="mt-md-4 mb-3"><button type="submit" id="btnSubmit" class="d-grid btn btn-primary search-btn svelte-1yzwtq8">\u041F\u041E\u0418\u0421\u041A
            </button>
            <div class="lens svelte-1yzwtq8"><i class="bi bi-search svelte-1yzwtq8"></i></div></div></form>

    <div class="row"></div>
    
</div>`});const J={code:"section.svelte-929epu{padding-top:0px;padding-bottom:0}.sale-php-section.svelte-929epu{margin-top:-30px}@media(max-width: 760px){.sales-component-container.svelte-929epu{display:flex;margin-top:-14em !important}}@media(max-width: 768px){}",map:null},Z="48O3SXQXMR",tt="ec1af9fe04b917db992f934e4b96b695",et="tbl_Properties_offplan",yt=$((s,m,f,u)=>{let a,n;n=g(A,o=>a=o),T(Z,tt).initIndex(et);let t=[],r=a.url.pathname.split("/"),i=[];return s.css.add(J),n(),`${w(H,"SEOTools").$$render(s,{MetaTitle:t.metatitle,MetaDescription:t.metadescription},{},{})}


  ${w(B,"BreadCrumb").$$render(s,{LinkOne:r[1],LinkTwo:t.name,headings:t.name?t.name:"Why Dubai?",Bdtype:2},{},{})}
  ${u.default?u.default({}):`
    <div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title"><h2 class="mb-4"><!-- HTML_TAG_START -->${t.name_ru?t.name_ru:"SALES"}<!-- HTML_TAG_END --></h2></div></div>
  `}



<section data-sveltekit-prefetch id="skills" class="skills svelte-929epu"><div class="container sale-php-section aos-init aos-animate svelte-929epu" data-aos="fade-up">${u.default?u.default({}):""}

      <div class="row mt-4 sales-component-container svelte-929epu">${w(W,"ApartmentsList").$$render(s,{list:i},{},{})}
          ${w(j,"Mapbox").$$render(s,{list:i},{},{})}</div></div></section>

`});export{yt as M};
