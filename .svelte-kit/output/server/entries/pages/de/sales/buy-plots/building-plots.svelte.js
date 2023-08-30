import{c as o,a as $,v as a}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as g}from"../../../../../immutable/chunks/stores-73de46f1.js";import{L as _}from"../../../../../immutable/chunks/LeadFormLeft-5af0d071.js";import{B as u}from"../../../../../immutable/chunks/breadcrumb-635bf2b4.js";import"../../../../../immutable/chunks/helpers-b1dcc375.js";const b={code:"@media only screen and (max-width: 768px){}",map:null},f=o((e,r,d,l)=>{let n,i;i=$(g,p=>n=p);let t=[],s=n.url.pathname.split("/"),c=[],m=[];return e.css.add(b),i(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${a(u,"BreadCrumb").$$render(e,{imgbg:"/l9images/banners/"+t.imgname,LinkOne:s[1],LinkTwo:s[2],LinkThree:s[3],headings:t.name_fr,FstName_Fr:c.name_fr,LstName_Fr:m.name_fr},{},{})}

    ${a(_,"LeadFormLeft").$$render(e,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${t.description_fr?t.description_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`}),F=o((e,r,d,l)=>`${e.head+=`${e.title="<title>Reals Estate Brokage</title>",""}<meta name="description" content="Reals Estate Brokage" data-svelte="svelte-2qn29r">`,""}
    
    ${a(f,"BuildingPlots").$$render(e,{},{},{})}`);export{F as default};
