import{c,a as d,v as i}from"./index-7b7abb97.js";import{p}from"./stores-73de46f1.js";import{L as $}from"./LeadFormLeft-5af0d071.js";import{B as l}from"./breadcrumb-635bf2b4.js";const T=c((a,g,_,L)=>{let s,n;n=d(p,m=>s=m);let e=[],t=s.url.pathname.split("/"),r=[],o=[];return n(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${i(l,"BreadCrumb").$$render(a,{imgbg:"/l9images/banners/"+e.imgname,LinkOne:t[1],LinkTwo:t[2],LinkThree:t[3],headings:e.name_fr,Bdtype:1,FstName_Fr:r.name_fr,LstName_Fr:o.name_fr},{},{})}
    ${i($,"LeadFormLeft").$$render(a,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_fr?e.description_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`});export{T as C};
