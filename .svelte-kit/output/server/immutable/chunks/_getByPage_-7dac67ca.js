import{c as r,a as u,v as n,e as l}from"./index-7b7abb97.js";import{p as $}from"./stores-73de46f1.js";import{L as g}from"./LeadFormLeft-23e146c1.js";import{B as b}from"./breadcrumb-3ab4b0ca.js";import"algoliasearch/lite";import"mapbox-gl";/* empty css                  */import{o as y}from"./base-url-ce329ce1.js";const h={code:"#Map.svelte-15fbqbv{position:relative;height:550px;margin-bottom:5em}#map.svelte-15fbqbv{position:relative;width:100%}.myMapListing.svelte-15fbqbv{position:relative;height:450px;width:100%}",map:null},_=r((t,a,o,m)=>{let{MyCommunity:s="Al Furjan"}=a;return s.replace("-"," "),a.MyCommunity===void 0&&o.MyCommunity&&s!==void 0&&o.MyCommunity(s),t.css.add(h),`<section id="Map" class="svelte-15fbqbv"><script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"><\/script>

    <div class="container"><div class="row"><div class="col-12"><h4 class="text-uppercase">Map</h4>
                <div class="col-lg-12 "><div class="apartment-sale-right"><div id="map" class="myMapListing svelte-15fbqbv" allowfullscreen="true" loading="lazy"></div></div></div></div></div></div>
</section>`});const x={code:"#about.svelte-u3omky{padding:60px 0 0 0}#ytube.svelte-u3omky{padding:0px 0 60px 0}.showHeight.svelte-u3omky{height:320px}.btn-learn-more-two.svelte-u3omky{margin-top:15px;box-shadow:0px 0px 4px 1px #ccc;border:none}span.d-flex.flex-row-reverse.svelte-u3omky{margin:auto;background:white;display:flex !important;justify-content:center;padding:1em}@media(max-width: 768px){span.d-flex.flex-row-reverse.svelte-u3omky{width:100%;padding:.5em}}",map:null},B=r((t,a,o,m)=>{let s,d;d=u($,v=>s=v);let e=[],i=s.url.pathname.split("/"),p=[],c=[];return t.css.add(x),d(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${n(b,"BreadCrumb").$$render(t,{imgbg:y+"/theme/assets/images/community/"+e.pcbgimg,LinkOne:i[2],LinkTwo:i[3],LinkThree:i[4],headings:e.pctitle_de?e.pctitle_de:i[4],Bdtype:5,FstName_Fr:p.name_de,LstName_Fr:c.name_de},{},{})}
    ${n(g,"LeadFormLeft").$$render(t,{},{},{})}</section>


<section id="about" class="about svelte-u3omky"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="${["col-lg-12 pt-4 pt-lg-0 svelte-u3omky","showHeight"].join(" ").trim()}"><!-- HTML_TAG_START -->${e.pcdescription_de?e.pcdescription_de:"Content Required"}<!-- HTML_TAG_END --></div>

            <div id="read-more-container"><span class="d-flex flex-row-reverse svelte-u3omky"><button class="btn-learn-more-two svelte-u3omky">${l("Read More")}</button></span></div></div></div></section>





${e.pcvideoid!==""?`<section id="ytube" class="svelte-u3omky"><div class="container"><div class="row"><div class="col-12"><h4 class="text-uppercase mb-5 mt-5">Video</h4>
                <iframe width="100%" height="450" src="${"https://www.youtube.com/embed/"+l(e.pcvideoid,!0)+"?rel=0"}" allowfullscreen></iframe></div></div></div></section>`:""}

${n(_,"Maps").$$render(t,{MyCommunity:e.pctitle?e.pctitle:i[4],Unit_Type:"Apartments"},{},{})}`});export{B as U};
