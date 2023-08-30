import{c as h,a as _,f as S,d as $,v as m,b as L,e as y}from"../../../../../../../../immutable/chunks/index-7b7abb97.js";import{p as T}from"../../../../../../../../immutable/chunks/stores-73de46f1.js";import{S as I}from"../../../../../../../../immutable/chunks/Select-7c592fb8.js";import{R as M,s as C}from"../../../../../../../../immutable/chunks/RangeSlider-6678e381.js";import N from"algoliasearch";import{L as U}from"../../../../../../../../immutable/chunks/listing-7b356d07.js";import{C as D}from"../../../../../../../../immutable/chunks/ContentFormMesg-392918d6.js";import j from"mapbox-gl";import{C as F,c as E}from"../../../../../../../../immutable/chunks/others-c2922311.js";import{b as O}from"../../../../../../../../immutable/chunks/base-url-ce329ce1.js";/* empty css                                                         */import{L as H}from"../../../../../../../../immutable/chunks/loader-8624fcbc.js";/* empty css                                                                                    */import"../../../../../../../../immutable/chunks/index-5fb08a48.js";import"../../../../../../../../immutable/chunks/swiper-slide-508ac6d1.js";import"../../../../../../../../immutable/chunks/navigation.min-21928df4.js";import"../../../../../../../../immutable/chunks/lazy-405eb648.js";/* empty css                                                                                             *//* empty css                                                                                    */const G={code:".price-block.svelte-11msk7o.svelte-11msk7o{position:relative;display:inline-block;width:40%;color:#999;font-weight:bold}.price-block.svelte-11msk7o .price.svelte-11msk7o{padding:13px 5px 0px 53px;width:100%;font-size:15px;color:#666}.price-block.svelte-11msk7o .price-symbol.svelte-11msk7o{position:absolute;font-size:12px;color:#666;left:4px;top:18px}.price-block.svelte-11msk7o label.svelte-11msk7o{position:absolute;font-size:13px;left:3px;font-weight:500;color:black}.dash-sign.svelte-11msk7o.svelte-11msk7o{display:inline;margin:0px 10px 10px !important;font-weight:bold;font-size:30px;color:#999}.input-group.svelte-11msk7o.svelte-11msk7o{display:flex !important}button.headerSearch-button.svelte-11msk7o.svelte-11msk7o{border:1px solid white;border-radius:none;width:100%}#DrvnSlider.svelte-11msk7o input.svelte-11msk7o{display:inline-block}.range-slider-input-container.svelte-11msk7o.svelte-11msk7o{text-align:center;display:flex;flex-flow:wrap-reverse}@media only screen and (max-width: 768px){.BxInfo-row.svelte-11msk7o.svelte-11msk7o{padding:0 10px}}",map:null};let V="";const X=h((s,r,n,x)=>{let o;o=_(T,t=>t);let{BedRoomType:l=[]}=r,{PropertyType:e=[]}=r,{status:v}=r,k=[],a="sale";console.log(V),S();let c=v,d=" ",g=[0,15e7],u=[0,3e6];const b=()=>{a=v==="Rent"?"rent":"sale"};r.BedRoomType===void 0&&n.BedRoomType&&l!==void 0&&n.BedRoomType(l),r.PropertyType===void 0&&n.PropertyType&&e!==void 0&&n.PropertyType(e),r.status===void 0&&n.status&&v!==void 0&&n.status(v),s.css.add(G);let i,p;do i=!0,b(),p=`<div class="row header-search"><div class="col-lg-12 aos-init aos-animate" data-aos="fade-up"><form><div class="row BxInfo-row svelte-11msk7o"><div class="combine-status-community row mb-2 mt-2"><div class="col-lg-2 col-md-6 status-search">
                            <select id="status" name="status" class="form-select frsone"><option value="sale" selected>Verkauf</option></select></div>
                        
                    
                    <div${$("class","col-lg-10  col-md-6 community-search",0)}><div class="input-group svelte-11msk7o" id="MyCommunityLists1">${m(I,"Select").$$render(s,{items:k,optionIdentifier:t=>t.agserach,getSelectionLabel:t=>t.agserach,getOptionLabel:t=>t.agserach,placeholder:"Suchort oder Projekt",showChevron:"true",isClearable:"true",noOptionsMessage:"We can't find your search query. Please check your spelling or try a different location."},{},{})}
                            <input type="hidden" name="protitle" id="Community"${$("value",d.agserach,0)}></div></div></div>

                
                <div class="col-lg-4 col-md-6 mt-2"><select id="protype" name="protype" class="form-select frsone"><option value="Art der Immobilie">Art der Immobilie</option>${L(e,(t,f)=>`<option${$("value",t.pttitle,0)}>${y(t.pttitle)} </option>`)}</select></div>

                <div class="col-lg-4 col-md-6 mt-2"><select id="bedrooms" name="bedrooms" class="form-select frsone"><option value="Schlafzimmertyp">Schlafzimmertyp</option>${L(l,(t,f)=>`<option${$("value",t.bdtitle,0)}>${y(t.bdtitle)}</option>`)}</select></div>
                <div class="col-lg-4 col-md-6 mt-2 svelte-11msk7o" id="DrvnSlider">${a==="rent"||c==="Rent"&&v==="rent"?`${m(M,"RangeSlider").$$render(s,{min:0,max:3e6*.27,pips:!0,values:u},{values:t=>{u=t,i=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-11msk7o"><div class="price-block svelte-11msk7o"><label class="svelte-11msk7o">Mindestpreis</label><span class="price-symbol svelte-11msk7o">\u20AC</span><input type="text" class="price minprice svelte-11msk7o" name="minPrice"${$("value",u[0],0)}></div> 
                            <div class="dash-sign svelte-11msk7o">-</div>
                            
                            <div class="price-block svelte-11msk7o"><label class="svelte-11msk7o">H\xF6chstpreis</label><span class="price-symbol svelte-11msk7o">\u20AC</span><input type="text" class="price maxprice svelte-11msk7o" name="maxPrice"${$("value",u[1],0)}></div></div>`:`${m(M,"RangeSlider").$$render(s,{min:0,max:15e7*.27,pips:!0,values:g},{values:t=>{g=t,i=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-11msk7o"><div class="price-block svelte-11msk7o"><label class="svelte-11msk7o">Mindestpreis</label><span class="price-symbol svelte-11msk7o">\u20AC</span><input type="text" class="price minprice svelte-11msk7o" name="minPrice"${$("value",g[0],0)}></div> 
                            <div class="dash-sign svelte-11msk7o">-</div>
                            
                            <div class="price-block svelte-11msk7o"><label class="svelte-11msk7o">H\xF6chstpreis</label><span class="price-symbol svelte-11msk7o">\u20AC</span><input type="text" class="price maxprice svelte-11msk7o" name="maxPrice"${$("value",g[1],0)}></div></div>`}</div>
                <div class="offcanvas-buttons"><button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="headerSearch-button btn btn-dark button-search svelte-11msk7o"><i class="bi bi-search"></i> 
                        suchen
                    </button></div></div></form></div></div>
`;while(!i);return o(),p});const q={code:"section.svelte-1fkxmbj{padding:0}#drv-bread.svelte-1fkxmbj{height:35vh;width:100%;text-align:left;padding-top:100px;color:white;overflow:hidden;background:var(--Drvn-headerColor);background:linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');background:linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');background-size:cover;background-repeat:no-repeat}#hero-noimage.svelte-1fkxmbj{height:auto;background-color:transparent;padding:0 0}h1.text-capitalize.search-page-title.svelte-1fkxmbj{font-size:36px}.dynamicList.svelte-1fkxmbj{margin-top:-88px}",map:null},K=h((s,r,n,x)=>{let o,l;return l=_(T,e=>o=e),o.url.pathname.split("/"),S(),s.css.add(q),l(),`
<section id="hero-noimage" class="d-flex align-items-center svelte-1fkxmbj"></section>

<section id="drv-bread" class="${"section-bg "+y("",!0)+" svelte-1fkxmbj"}"><div class="container mt-5"><h1 class="text-capitalize search-page-title svelte-1fkxmbj">Property for ${y("sale")}</h1></div></section>



<section id="about" class="about svelte-1fkxmbj"><div class="container aos-init aos-animate " data-aos="fade-up"><div class="row content"><div class="offcanvas-body container">${m(X,"HeaderSearchForm").$$render(s,{status:"Sale"},{},{})}</div></div></div></section>
`});const W={code:"#MyDetails.svelte-1xaxy39 .card.svelte-1xaxy39{border:0;border-radius:0}.showAfter.svelte-1xaxy39.svelte-1xaxy39{display:none}.apartment-container.svelte-1xaxy39.svelte-1xaxy39{padding-right:1em}#MyDetails.svelte-1xaxy39.svelte-1xaxy39{overflow-x:hidden;box-shadow:0px 0px 10px 0px #e1e1e1;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;margin-right:0.6em;padding:1em}",map:null},Q=h((s,r,n,x)=>{let{list:o=[]}=r,l=!0;return setTimeout(()=>{l=!1},200),r.list===void 0&&n.list&&o!==void 0&&n.list(o),s.css.add(W),`<div class="col-lg-6 apartment-container mt-5 mr-2 svelte-1xaxy39" id="MyDetails">
    <div class="row"><div class="card mb-2 svelte-1xaxy39">
            ${o.length?L(o,e=>`
                    
                    ${m(U,"ListingListItem").$$render(s,{title:e.Property_Name+`\r
 `+e.Property_Title,noOfBeds:e.Bedrooms.split("-").length?e.Bedrooms.split("-")[0]+" Beds":e.Bedrooms+" Beds",noOfBaths:e.No_of_Bathroom+" Bathroom",images:e.Images,price:e.Price,Community:e.Community+" "+e.Sub_Community,agentNumber:e.Listing_Agent_Phone,building:e.Unit_Type,objectID:e.objectID,Emirate:e.Emirate,PropertyStatus:e.Ad_Type,PropertyRefNo:e.Property_Ref_No,propertyTitle:e.Property_Name},{},{})}
                    
                `):`<div class="${["col-lg-12 col-md-12 svelte-1xaxy39",l?"showAfter":""].join(" ").trim()}">${m(D,"ContentFormMesg").$$render(s,{},{},{})}
                </div>`}</div></div>
    
    
</div>`});const Y={code:".myMapListing.svelte-1o0cmw5{position:relative;height:635px;width:100%}@media only screen and (max-width: 768px){.myMapListing.svelte-1o0cmw5{top:70px}}",map:null};let J=25.177602,Z=55.234789;const ee=h((s,r,n,x)=>{let o,l;l=_(T,b=>o=b),S();let{data:e=[]}=r,v=[],k,a=[Z,J],c="palm jumeirah";const d=async()=>{if(console.log("dataUpdate map.svelte PLR",e),c=o.url.pathname.split("/")[3].split("-").join(" "),c==="city walk"&&(c="city walk dubai"),c==="any"&&(a=[55.234789,25.177602]),v=e,e.length>0){let p=await(await fetch(`${O}/getOffplanCoord/${c}`)).json();c!=="any"&&p[0].pclog!==null&&p[0].pclat!==null&&(a=[p[0].pclog,p[0].pclat]),a[1]!==25.177602&&a[0]}g(),u(k)},g=async()=>{},u=b=>{for(const i of v){i.Price/1e6;const p=`
                <div class="container g-0">
                    <div class="row g-0">
                        <div class="col-12 mb-2"><img src="${i.Images.image[0]}" class="img-fluid myImgPopup" /></div>
                        <div class="col-sm-12 px-2 mb-2">
                                <h6><strong>${i.Property_Name}</strong></h6>
                                <h6>${i.Property_Title}</h6>

                                <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                    <div class="bd-highlight">${i.Unit_Type==="Apartment"?"Wohnung":"Villa"}</div>
                                    <div class="bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="bd-highlight">${i.Bedrooms.split("-")[0]} Betten}</div>
                                    <div class="bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="bd-highlight">${i.No_of_Bathroom} Badezimmer</div>
                                </div>

                                <div class="p-2 bd-highlight">${F(i.Price*.25)} EUR</div>
                            </div>
                    </div>
                </div>
            `,t=document.createElement("span");t.textContent=E(i.Price*.25)+" EUR",t.className="marker1",new j.Marker(t).setLngLat([i._geoloc.lng,i._geoloc.lat]).setPopup(new j.Popup({offset:25}).setHTML(p)).addTo(b)}};return r.data===void 0&&n.data&&e!==void 0&&n.data(e),s.css.add(Y),d(),l(),`<div class="col-lg-6 mt-md-5"><div class="apartment-sale-right"><div id="mapView" class="myMapListing svelte-1o0cmw5" allowfullscreen="true" loading="lazy"></div>
        </div>
</div>`});const te={code:"div#property-list-container.svelte-odm0ez{display:flex}#Pgnton.svelte-odm0ez{padding:0}.loading-container.svelte-odm0ez{position:absolute;display:block;width:100%}.loading.svelte-odm0ez{position:absolute;top:20px;z-index:111;text-align:right;display:block;width:100%;right:22%}span.page-no.svelte-odm0ez:hover{cursor:pointer;font-weight:bold}.page-active.svelte-odm0ez{font-weight:bold;background:#333;border-radius:50%;color:white;padding:10px 16px}.total-pages.svelte-odm0ez{padding-left:0;padding-right:0;justify-content:space-evenly;margin-left:10px;width:100%}.page-no.svelte-odm0ez{cursor:pointer;padding:10px 5px;font-size:14px;padding:10px 16px}.page-no.page-last.svelte-odm0ez{padding:0 15px;font-size:24px;border-radius:50%}.page-no.page-first.svelte-odm0ez{padding:0 15px;font-size:24px;border-radius:50%}.page-disabled.svelte-odm0ez{color:#ccc;font-weight:normal}.page-disabled.svelte-odm0ez:hover{cursor:none;font-weight:normal !important}@media(max-width: 768px){div#property-list-container.svelte-odm0ez{display:flex;flex-direction:column-reverse}}",map:null},se="48O3SXQXMR",ae="ec1af9fe04b917db992f934e4b96b695",oe="tbl_properties",ie=h((s,r,n,x)=>{let o,l;S();const v=N(se,ae).initIndex(oe);let k,{dynamicUrl:a}=r,c=[],d=[],g=!1,u=1,b="0 TO 150000000";const i=C();l=_(i,P=>P);let p,t,f,w,B,R;const A=P=>{g=!0,o=P,console.log(o),console.log("url after update",a),p=a.status?a.status:"sale",t=a.community?a.community:"any",f=a.property?a.property:"any",w=a.bed?a.bed+"-Beds":"any",B=a.minPrice?Number(a.minPrice):0,R=a.maxPrice?Number(a.maxPrice):15e7,d=[p],console.log(d),console.log(t),t!=="any"&&(d=[...d,t]),console.log(d),console.log(f),f!=="any"&&(d=[...d,f]),console.log(d),w!=="any"&&w!=="any-Beds"&&(d=[...d,w]),b=`Price:${B} TO ${R}`,console.log(d),v.search(d||"",{attributesToRetrieve:["*"],attributesToSnippet:["*:20"],enableABTest:!1,explain:["*"],facets:["*"],getRankingInfo:!0,hitsPerPage:20,page:u,responseFields:["*"],snippetEllipsisText:"\u2026",numericFilters:b,page:0}).then(({hits:z,nbHits:le,nbPages:re})=>{g=!1,c=z})};return r.dynamicUrl===void 0&&n.dynamicUrl&&a!==void 0&&n.dynamicUrl(a),s.css.add(te),A(),o=0,l(),`
<div id="property-list-container" class="container svelte-odm0ez">${g?`<div class="container loading-container svelte-odm0ez"><div class="loading svelte-odm0ez">${m(H,"Loader").$$render(s,{},{},{})}</div></div>`:""}
    
    ${m(Q,"ApartmentList").$$render(s,{list:c},{},{})}
    ${m(ee,"Mapbox").$$render(s,{data:c},{},{})}</div>


<div id="pagination-container" class="container"><div class="row col-sm-6 mt-2 mb-5 svelte-odm0ez" id="Pgnton"><div class="text-center total-pages d-flex svelte-odm0ez"><div class="pagination pagination-first"><span class="${"page-no page-first "+y("page-disabled",!0)+" svelte-odm0ez"}">\u2039</span></div>
            <div class="pagination pagination-middle">${L(Array(k),(P,z)=>`<span class="${"page-no "+y(u-1===z?"page-active":"",!0)+" svelte-odm0ez"}">${y(z+1)}</span>`)}</div>
            <div class="pagination pagination-last"><span class="${"page-no page-last "+y("",!0)+" svelte-odm0ez"}">\u203A</span></div></div></div> </div> `}),Le=h((s,r,n,x)=>{let o,l;return l=_(T,e=>e),o="",l(),`${s.head+=`${s.title=`<title>Property for ${y(o.status)}</title>`,""}<meta name="description" content="Properties For Rent" data-svelte="svelte-1t3wu4u">`,""}

${m(K,"PropertyListingForm").$$render(s,{},{},{})}
${m(ie,"PropertyListingResults").$$render(s,{dynamicUrl:o},{},{})}`});export{Le as default};
