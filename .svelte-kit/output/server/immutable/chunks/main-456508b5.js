import{c as q,a as P,f as z,v as n,d as h,b as _,e as m}from"./index-7b7abb97.js";import{p as B}from"./stores-73de46f1.js";import M from"algoliasearch";import"mapbox-gl";/* empty css                  */import"./navigation.min-21928df4.js";import{L as A}from"./listing-7b356d07.js";/* empty css                                             *//* empty css                                                      *//* empty css                                             *//* empty css                                                   */import{B as F}from"./breadcrumb-3ab4b0ca.js";import{S as I}from"./Select-7c592fb8.js";import{R as T}from"./RangeSlider-6678e381.js";/* empty css                                             */import{c as k}from"./helpers-b1dcc375.js";import{C as O}from"./ContentFormMesg-392918d6.js";import{L as S}from"./loader-8624fcbc.js";const R={code:`.price-block.svelte-w4q7oc.svelte-w4q7oc{position:relative;display:inline-block;width:40%;color:#999;font-weight:bold}.price-block.svelte-w4q7oc .price.svelte-w4q7oc{padding:13px 5px 0px 53px;width:100%;font-size:15px;color:#666}.price-block.svelte-w4q7oc .price-symbol.svelte-w4q7oc{position:absolute;font-size:12px;color:#666;left:4px;top:18px}.price-block.svelte-w4q7oc label.svelte-w4q7oc{position:absolute;font-size:13px;left:3px;font-weight:500;color:black}.dash-sign.svelte-w4q7oc.svelte-w4q7oc{display:inline;margin:0px 10px 10px !important;font-weight:bold;font-size:30px;color:#999}.input-group.svelte-w4q7oc.svelte-w4q7oc{display:flex !important}#DrvnSlider.svelte-w4q7oc input.svelte-w4q7oc{display:inline-block}.range-slider-input-container.svelte-w4q7oc.svelte-w4q7oc{text-align:center;display:flex;flex-flow:wrap-reverse}.btnfrm.svelte-w4q7oc.svelte-w4q7oc{line-height:40px;border:none;border-radius:0;width:15%;background-color:#A8A8A8;color:#fff;font-size:0.9rem;font-weight:600;text-transform:uppercase;letter-spacing:3px;height:52px}.btnfrm.svelte-w4q7oc.svelte-w4q7oc:hover{background-color:black}.input-group.svelte-w4q7oc:not(.has-validation)>.svelte-w4q7oc:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-color:none !important;border-radius:1px}#FSR.svelte-w4q7oc.svelte-w4q7oc{background-color:black;color:#fff;height:52px;width:90%;padding:10px 30px;border-radius:0;background-position:right 1.13rem center;background-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>") !important}#FSRONE.svelte-w4q7oc.svelte-w4q7oc{height:48px;width:100%;padding:10px 20px;border-radius:0;background-position:right 1.13rem center}.input-group.svelte-w4q7oc.svelte-w4q7oc{display:flex !important}@media only screen and (max-width: 768px){#mySearch.svelte-w4q7oc.svelte-w4q7oc{width:100% !important;margin-top:6px;position:absolute;top:260px}.btnfrm.svelte-w4q7oc.svelte-w4q7oc{width:auto !important}.BxInfo-row.svelte-w4q7oc.svelte-w4q7oc{padding:0 10px}#FSR.svelte-w4q7oc.svelte-w4q7oc{width:100%}}`,map:null},C=q((l,e,t,$)=>{let i,s;s=P(B,a=>i=a);let{BedRoomType:c=[]}=e,{PropertyType:o=[]}=e,{PropertyStatus:p=[]}=e,{pgname:g}=e,x=i.url.pathname.split("/"),b=[],r=g||x[4];r=r.replaceAll("-"," ").split(" "),console.log(r),z(),`${r[0]?k(r[0]):"Sale"}`;let u="";`${r[1]?k(r[1]):"Art der Immobilie"}`;let v=[0,15e7];e.BedRoomType===void 0&&t.BedRoomType&&c!==void 0&&t.BedRoomType(c),e.PropertyType===void 0&&t.PropertyType&&o!==void 0&&t.PropertyType(o),e.PropertyStatus===void 0&&t.PropertyStatus&&p!==void 0&&t.PropertyStatus(p),e.pgname===void 0&&t.pgname&&g!==void 0&&t.pgname(g),l.css.add(R);let w,f;do w=!0,f=`<div class="row"><div class="col-lg-12 aos-init aos-animate" data-aos="fade-up"><form><div class="row BxInfo-row svelte-w4q7oc"><div class="col-lg-2 mb-2 col-md-6"><div class="input-group svelte-w4q7oc"><select id="FSR" name="prostatus" class="form-select fsr svelte-w4q7oc"><option selected value=" Verkauf">Verkauf</option></select></div></div>
                <div class="col-lg-10 col-md-6"><div class="input-group svelte-w4q7oc" id="MyCommunityLists">${n(I,"Select").$$render(l,{items:b,optionIdentifier:a=>a.agserach,getSelectionLabel:a=>a.agserach,getOptionLabel:a=>a.agserach,placeholder:"Suchort oder Projekt",showIndicator:"true",isClearable:"true",noOptionsMessage:"We can't find your search query. Please check your spelling or try a different location."},{},{})}
                        <input type="hidden" name="Sprotitle" id="SCommunity" class="svelte-w4q7oc"${h("value",u,0)}>
                        <button class="btn btn-primary btnfrm svelte-w4q7oc" id="mySearch">suchen</button></div></div>
                
                
                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="protype" class="form-select frsone svelte-w4q7oc"><option value="Art der Immobilie">Art der Immobilie</option>${_(o,(a,d)=>`<option${h("value",a.pttitle,0)}>${m(a.pttitle)} </option>`)}</select></div>

                
                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="bedrooms" class="form-select frsone svelte-w4q7oc"><option value="Schlafzimmertyp">Schlafzimmertyp</option>${_(c,(a,d)=>`<option${h("value",a.bdtitle,0)}>${m(a.bdtitle)}</option>`)}</select></div>

                <div class="col-lg-4 col-md-6 mt-2 svelte-w4q7oc" id="DrvnSlider">${`${n(T,"RangeSlider").$$render(l,{min:0,max:15e7*.27,pips:!0,values:v},{values:a=>{v=a,w=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-w4q7oc"><div class="price-block svelte-w4q7oc"><label class="svelte-w4q7oc">Mindestpreis</label><span class="price-symbol svelte-w4q7oc">\u20AC</span><input type="text" class="price minprice svelte-w4q7oc" name="minPrice"${h("value",v[0],0)}></div> 
                            <div class="dash-sign svelte-w4q7oc">-</div>
                            
                            <div class="price-block svelte-w4q7oc"><label class="svelte-w4q7oc">H\xF6chstpreis</label><span class="price-symbol svelte-w4q7oc">\u20AC</span><input type="text" class="price maxprice svelte-w4q7oc" name="maxPrice"${h("value",v[1],0)}></div></div>`}</div>
                </div></form>
        
        </div></div>
`;while(!w);return s(),f});const D={code:".myMapListing.svelte-u5fr6x{position:relative;height:635px;width:100%}@media only screen and (max-width: 768px){.myMapListing.svelte-u5fr6x{top:70px}}",map:null},N=q((l,e,t,$)=>{let{data:i=[]}=e,{updateFunction:s}=e,{boundingBox:c={_sw:{lng:55.064511502076556,lat:25.004448664717486},_ne:{lng:55.21608849792656,lat:25.15650411973199}}}=e;return e.data===void 0&&t.data&&i!==void 0&&t.data(i),e.updateFunction===void 0&&t.updateFunction&&s!==void 0&&t.updateFunction(s),e.boundingBox===void 0&&t.boundingBox&&c!==void 0&&t.boundingBox(c),l.css.add(D),`<div class="col-lg-6 mt-5"><div class="apartment-sale-right"><a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
        <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <div id="mapView" class="myMapListing svelte-u5fr6x" allowfullscreen="true" loading="lazy"></div></div>    
  </div>`});const E={code:"#MyDetails.svelte-1ob2f1z.svelte-1ob2f1z{height:670px;overflow-y:scroll;margin-bottom:40px !important}#MyDetails.svelte-1ob2f1z .card.svelte-1ob2f1z{border:0;border-radius:0}.loader.svelte-1ob2f1z.svelte-1ob2f1z{text-align:center}",map:null},j=q((l,e,t,$)=>{let{list:i=[]}=e,s=!1;const c=()=>{i.length&&(s=!0)};return setTimeout(()=>{},200),e.list===void 0&&t.list&&i!==void 0&&t.list(i),l.css.add(E),c(),`<div class="col-lg-6 mt-5 svelte-1ob2f1z" id="MyDetails"><div class="row">${s?`<div class="card mb-2 svelte-1ob2f1z">
                ${i.length?_(i,o=>`                    
                        ${n(A,"ListingListItem").$$render(l,{title:o.Property_Name+`\r
 `+o.Property_Title,noOfBeds:o.Bedrooms.split("-")[0]+" Beds",noOfBaths:o.No_of_Bathroom+" Bathroom",images:o.Images,price:o.Price,Community:o.Community+" "+o.Sub_Community,agentNumber:o.Listing_Agent_Phone,building:o.Unit_Type,objectID:o.objectID,Emirate:o.Emirate,PropertyStatus:o.Ad_Type,propertyTitle:o.Property_Name,published:o.Published},{},{})}                    
                    `):`<div class="col-lg-12 col-md-12">${s?`${n(O,"ContentFormMesg").$$render(l,{},{},{})}`:`${n(S,"Loader").$$render(l,{},{},{})}`}
                    </div>`}</div>`:`<div class="loader svelte-1ob2f1z">${n(S,"Loader").$$render(l,{},{},{})}</div>`}</div>
    
</div>`});const Q={code:"#Pgnton.svelte-cwrr50{position:relative;padding:0px 0px 60px 0px}@media only screen and (max-width: 768px){#skills.svelte-cwrr50{padding:0}#Pgnton.svelte-cwrr50{padding:30px 0px 10px 0}}section.svelte-cwrr50{padding:60px 0 0;overflow:hidden}.page-active.svelte-cwrr50{font-weight:bold;background:#333;border-radius:50%;color:white;padding:10px 16px}.total-pages.svelte-cwrr50{padding-left:0;padding-right:0;justify-content:space-evenly;margin-left:10px;width:100%;padding:1em}.page-no.svelte-cwrr50{cursor:pointer;padding:10px 5px;font-size:14px;padding:10px 16px}.page-no.page-last.svelte-cwrr50{padding:0 15px;font-size:24px;border-radius:50%}.page-no.page-first.svelte-cwrr50{padding:0 15px;font-size:24px;border-radius:50%}.page-disabled.svelte-cwrr50{color:#ccc;font-weight:normal}.page-disabled.svelte-cwrr50:hover{cursor:none;font-weight:normal !important}span.page-no.svelte-cwrr50:hover{cursor:pointer;font-weight:bold}",map:null},G="48O3SXQXMR",K="ec1af9fe04b917db992f934e4b96b695",V="tbl_properties";let X="/assets/images/gen_2869.jpg";const ve=q((l,e,t,$)=>{let i,s;s=P(B,d=>i=d);const o=M(G,K).initIndex(V);let p=[],g,{pgname:x}=e,b,r,u=i.url.pathname.split("/"),v=1,w,{boundingBox:f={_sw:{lng:55.098586285398085,lat:25.00444866471817},_ne:{lng:55.18201371459705,lat:25.15650411973273}}}=e,{boundingBoxForQuery:a=[25.004448664717486,55.064511502076556,25.15650411973199,55.21608849792656]}=e;return r=(d=null,y=1)=>{w||(a=[d._sw.lat,d._sw.lng,d._ne.lat,d._ne.lng]),o.search("",{insideBoundingBox:[a],length:40,hitsPerPage:40,page:y-1}).then(L=>{p=L,p.nbHits,b=p.nbPages,w=!1})},e.pgname===void 0&&t.pgname&&x!==void 0&&t.pgname(x),e.boundingBox===void 0&&t.boundingBox&&f!==void 0&&t.boundingBox(f),e.boundingBoxForQuery===void 0&&t.boundingBoxForQuery&&a!==void 0&&t.boundingBoxForQuery(a),l.css.add(Q),s(),`

${n(F,"BreadCrumb").$$render(l,{imgbg:X,LinkOne:u[1],LinkTwo:u[2],LinkThree:u[3],headings:u[3],Bdtype:4},{},{})}



<section data-sveltekit-prefetch id="skills" class="skills mt-2 svelte-cwrr50"><div class="container aos-init aos-animate" data-aos="fade-up">${n(C,"Search").$$render(l,{pgname:g},{},{})}
      
      <div class="${"row mt-"+m("2",!0)}">${`${n(N,"MOBMapbox").$$render(l,{boundingBox:f,data:p.hits,updateFunction:r},{},{})}
            ${n(j,"MOBApartmentsList").$$render(l,{list:p.hits},{},{})}`}</div></div></section>


<div id="pagination-container" class="container"><div class="row col-sm-12 mb-5 svelte-cwrr50" id="Pgnton"><div class="text-center total-pages d-flex svelte-cwrr50"><div class="pagination pagination-first"><span class="${"page-no page-first "+m("page-disabled",!0)+" svelte-cwrr50"}">\u2039</span></div>
        <div class="pagination pagination-middle">${_(Array(b),(d,y)=>`<span class="${"page-no "+m(v-1===y?" page-active":"",!0)+" svelte-cwrr50"}">${m(y+1)}</span>`)}</div>
        <div class="pagination pagination-last"><span class="${"page-no page-last "+m(v!==b?"":"page-disabled",!0)+" svelte-cwrr50"}">\u203A</span></div></div></div></div>



`});export{ve as M};