import{c as r,a as $,v as i,e as g}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as v}from"../../../../immutable/chunks/stores-73de46f1.js";import{L as b}from"../../../../immutable/chunks/LeadFormLeft-23e146c1.js";import{B as u}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";/* empty css                                                                        *//* empty css                                                                               */import"../../../../immutable/chunks/helpers-b1dcc375.js";const _=r((t,d,o,l)=>{let a,s;s=$(v,p=>a=p);let e=[],n=a.url.pathname.split("/"),c=[],m=[];return s(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${i(u,"BreadCrumb").$$render(t,{imgbg:e.imgname?"/l9images/banners/"+e.imgname:"/assets/images/gen_3917.jpg",LinkOne:n[1],LinkTwo:n[2],headings:e.name_de,FstName_Fr:c.name_de,LstName_Fr:m.name_de,Bdtype:1},{},{})}
    ${i(b,"LeadFormLeft").$$render(t,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">${e.videoid!==null&&e.titlename!==null?`<div class="section-title"><h2><!-- HTML_TAG_START -->${e.titlename_de?e.titlename_de:""}<!-- HTML_TAG_END --></h2></div>

            <div><div class="col-12 pt-4 pt-lg-0"><p><iframe width="100%" height="500" src="${"https://www.youtube.com/embed/"+g(e.Ytvideoid_de?e.Ytvideoid_de:e.Ytvideoid,!0)+"?rel=0"}" title="#AskDriven: Why invest in Dubai?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p></div></div>`:""}

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_de?e.description_de:""}<!-- HTML_TAG_END --></div></div></div></section>
`}),D=r((t,d,o,l)=>`${t.head+=`${t.title="<title>The Best Real Estate Agents in Dubai - Driven Properties</title>",""}<meta name="description" content="Driven Properties was established in 2012 and has emerged as the leading real estate company in Dubai. With a team of experienced and dedicated real estate agents we strive to provide you with the best property services in UAE" data-svelte="svelte-15zekcj">`,""}
    
    ${i(_,"WhyDubai").$$render(t,{},{},{})}`);export{D as default};
