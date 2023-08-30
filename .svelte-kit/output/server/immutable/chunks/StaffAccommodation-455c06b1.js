import{c as m,a as d,v as o}from"./index-7b7abb97.js";import{p as l}from"./stores-73de46f1.js";import{L as p}from"./LeadFormLeft-5af0d071.js";import{B as _}from"./breadcrumb-635bf2b4.js";const $={code:"@media only screen and (max-width: 768px){}",map:null},A=m((a,g,f,L)=>{let s,n;n=d(l,c=>s=c);let e=[],t=s.url.pathname.split("/"),i=[],r=[];return a.css.add($),n(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${o(_,"BreadCrumb").$$render(a,{imgbg:"/l9images/banners/"+e.imgname,LinkOne:t[1],LinkTwo:t[2],LinkThree:t[3],headings:e.name_fr,FstName_Fr:i.name_fr,LstName_Fr:r.name_fr},{},{})}

    ${o(p,"LeadFormLeft").$$render(a,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_fr?e.description_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`});export{A as S};
