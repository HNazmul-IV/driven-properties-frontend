import{c as n,a as $,v as i,e as u}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as g}from"../../../../immutable/chunks/stores-73de46f1.js";import{L as v}from"../../../../immutable/chunks/LeadFormLeft-23e146c1.js";import{B as _}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";/* empty css                                                                        *//* empty css                                                                               */import"../../../../immutable/chunks/helpers-b1dcc375.js";const b=n((t,o,d,c)=>{let a,r;r=$(g,m=>a=m);let e=[],s=a.url.pathname.split("/"),l=[],p=[];return r(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${i(_,"BreadCrumb").$$render(t,{imgbg:e.imgname?"/l9images/banners/"+e.imgname:"/assets/images/gen_3917.jpg",LinkOne:s[1],LinkTwo:s[2],headings:e.name_ru,FstName_Fr:l.name_ru,LstName_Fr:p.name_ru,Bdtype:1},{},{})}
    ${i(v,"LeadFormLeft").$$render(t,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">${e.videoid!==null&&e.titlename!==null?`<div class="section-title"><h2><!-- HTML_TAG_START -->${e.titlename_ru?e.titlename_ru:""}<!-- HTML_TAG_END --></h2></div>

            <div><div class="col-12 pt-4 pt-lg-0"><p><iframe width="100%" height="500" src="${"https://www.youtube.com/embed/"+u(e.Ytvideoid_ru?e.Ytvideoid_ru:e.Ytvideoid,!0)+"?rel=0"}" title="#AskDriven: Why invest in Dubai?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p></div></div>`:""}

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_ru?e.description_ru:""}<!-- HTML_TAG_END --></div></div></div></section>
`}),R=n((t,o,d,c)=>`${t.head+=`${t.title="<title>Ready Projects - Driven Properties</title>",""}<meta name="description" content="Driven Properties was established in 2012 and has emerged as the leading real estate company in Dubai. With a team of experienced and dedicated real estate agents we strive to provide you with the best property services in UAE" data-svelte="svelte-1cp7drf">`,""}
    
    ${i(b,"ReadyProjects").$$render(t,{},{},{})}`);export{R as default};
