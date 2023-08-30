import{c as s,b as v,v as d}from"../../../immutable/chunks/index-7b7abb97.js";import u from"algoliasearch";import{S as m}from"../../../immutable/chunks/csMaps.svelte_svelte_type_style_lang-e5e89fe0.js";import"mapbox-gl";/* empty css                                          */const g=s((a,t,i,l)=>{let{data:e=[]}=t;return t.data===void 0&&i.data&&e!==void 0&&i.data(e),`<div class="container"><div class="row"><div class="" style="height:500px; overflow-y:scroll;">${v(e,o=>`<div class="listings" id="listings"></div>
                `)}</div></div>
</div>`}),f={code:".myMapListing.svelte-nhc95h{position:relative;height:635px;width:100%}@media only screen and (max-width: 768px){}",map:null},h=s((a,t,i,l)=>{let{data:e=[]}=t,{updateFunction:o}=t,{boundingBox:n={_sw:{lng:55.064511502076556,lat:25.004448664717486},_ne:{lng:55.21608849792656,lat:25.15650411973199}}}=t;return t.data===void 0&&i.data&&e!==void 0&&i.data(e),t.updateFunction===void 0&&i.updateFunction&&o!==void 0&&i.updateFunction(o),t.boundingBox===void 0&&i.boundingBox&&n!==void 0&&i.boundingBox(n),a.css.add(f),`<div class="apartment-sale-right"><a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
    <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div id="mapView" class="myMapListing svelte-nhc95h" allowfullscreen="true" loading="lazy"></div>
</div>`}),x="48O3SXQXMR",p="ec1af9fe04b917db992f934e4b96b695",b="tbl_properties",_=s((a,t,i,l)=>{u(x,p).initIndex(b);let o,n,{boundingBox:c={_sw:{lng:55.098586285398085,lat:25.00444866471817},_ne:{lng:55.18201371459705,lat:25.15650411973273}}}=t,{boundingBoxForQuery:r=[25.004448664717486,55.064511502076556,25.15650411973199,55.21608849792656]}=t;return t.boundingBox===void 0&&i.boundingBox&&c!==void 0&&i.boundingBox(c),t.boundingBoxForQuery===void 0&&i.boundingBoxForQuery&&r!==void 0&&i.boundingBoxForQuery(r),`





<section><div class="container mt-5 mb-5"><div class="row"><div class="col-sm">${d(m,"SearchForm").$$render(a,{},{},{})}</div></div></div>

    <div class="container mt-5 mb-5"><div class="row"><div class="col-sm">${d(g,"LeftListing").$$render(a,{data:o},{},{})}</div>

            <div class="col-sm">${d(h,"RightMaps").$$render(a,{boundingBox:c,data:o,updateFunction:n},{},{})}</div></div></div></section>`}),F=s((a,t,i,l)=>`


    
    
    ${a.head+=`${a.title="<title>About Us</title>",""}<meta name="description" content="About Us Page app" data-svelte="svelte-xpl071">`,""}
    
    
    
    ${d(_,"AlgoliaList").$$render(a,{},{},{})}`);export{F as default};
