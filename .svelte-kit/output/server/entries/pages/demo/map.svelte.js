import{c as d,b as p,e as a,d as v,v as l}from"../../../immutable/chunks/index-7b7abb97.js";import m from"algoliasearch";import{S as h}from"../../../immutable/chunks/csMaps.svelte_svelte_type_style_lang-e5e89fe0.js";import"mapbox-gl";/* empty css                                          */import{c as b}from"../../../immutable/chunks/others-c2922311.js";const f={code:".MyClas.svelte-10uk9hs{padding:60px 0 60px 0 }#mapView.svelte-10uk9hs{position:relative;width:100%;height:550px}#features.svelte-10uk9hs{width:100%;margin-left:0%;font-family:sans-serif;overflow-y:scroll;height:550px}.MyMpasContent.svelte-10uk9hs{padding:60px 40px 60px 40px;line-height:25px;border-bottom:1px solid #ddd;opacity:0.75;font-size:13px}.MyMpasContent.active.svelte-10uk9hs{opacity:1}.MyMpasContent.svelte-10uk9hs:last-child{border-bottom:none;margin-bottom:200px}",map:null},x=d((s,t,o,c)=>{let{data:i=[]}=t,{boundingBox:n={_sw:{lng:55.064511502076556,lat:25.004448664717486},_ne:{lng:55.21608849792656,lat:25.15650411973199}}}=t,r;return t.data===void 0&&o.data&&i!==void 0&&o.data(i),t.boundingBox===void 0&&o.boundingBox&&n!==void 0&&o.boundingBox(n),s.css.add(f),`<div class="MyClas svelte-10uk9hs"><div class="container"><div class="row"><div class="col-sm"><div id="mapView" class="svelte-10uk9hs"></div></div>

            <div class="col-sm"><div id="features" class="svelte-10uk9hs">${p(i,e=>`ID: ${a(e.objectID)} / Price: ${a(b(e.Price))}
                        <section${v("id",e.objectID,0)} class="${a("",!0)+" MyMpasContent MyID-"+a(e.objectID,!0)+" svelte-10uk9hs"}"${v("this",r,0)}><h5><!-- HTML_TAG_START -->${e.Property_Title+" | "+e.Property_Name}<!-- HTML_TAG_END -->
                                <span><!-- HTML_TAG_START -->${e.Community}<!-- HTML_TAG_END --></span></h5>
                            <p>November 1895. London is shrouded in fog and Sherlock Holmes and Watson pass time restlessly awaiting a new case. &quot;The London criminal is certainly a dull fellow,&quot; Sherlock bemoans. &quot;There have been numerous petty thefts,&quot; Watson offers in response. Just then a telegram arrives from Sherlock&#39;s brother Mycroft with a mysterious case. </p>
                        </section>`)}</div></div></div></div>
</div>`}),_="48O3SXQXMR",g="ec1af9fe04b917db992f934e4b96b695",y="tbl_properties",A=d((s,t,o,c)=>{m(_,g).initIndex(y);let n,r,{boundingBox:e={_sw:{lng:55.098586285398085,lat:25.00444866471817},_ne:{lng:55.18201371459705,lat:25.15650411973273}}}=t,{boundingBoxForQuery:u=[25.004448664717486,55.064511502076556,25.15650411973199,55.21608849792656]}=t;return t.boundingBox===void 0&&o.boundingBox&&e!==void 0&&o.boundingBox(e),t.boundingBoxForQuery===void 0&&o.boundingBoxForQuery&&u!==void 0&&o.boundingBoxForQuery(u),`

<section></section>

${l(h,"SearchForm").$$render(s,{},{},{})}

${l(x,"CSMAP").$$render(s,{boundingBox:e,data:n,updateFunction:r},{},{})}`}),B=d((s,t,o,c)=>`${s.head+=`${s.title="<title>About Us</title>",""}<meta name="description" content="About Us Page app" data-svelte="svelte-1p4q799">`,""}


${l(A,"MyListing").$$render(s,{},{},{})}
`);export{B as default};
