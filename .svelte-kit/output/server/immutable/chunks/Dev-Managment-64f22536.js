import{c as i,a as o,e as r,v as c}from"./index-7b7abb97.js";import{p as d}from"./stores-73de46f1.js";import{L as m}from"./LeadFormLeft-23e146c1.js";const l={code:"@media only screen and (max-width: 768px){.hero-imgbanner.svelte-16j1mjb{height:70vh !important}}",map:null},b=i((a,p,g,_)=>{let s,t;t=o(d,n=>s=n);let e=[];return s.url.pathname.split("/"),a.css.add(l),t(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>




<section id="drv-bread" class="section-bg"><div class="container "><h1><!-- HTML_TAG_START -->${e.name_ru?e.name_ru:"Contact Us"}<!-- HTML_TAG_END --></h1></div>
    <div class="hero-imgbanner svelte-16j1mjb" style="${"background-image:url("+r(e.imgname?"/assets/images/gen_4081.jpg":"/l9images/banners/"+e.imgname,!0)+");"}"></div>
    ${c(m,"LeadFormLeft").$$render(a,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_ru?e.description_ru:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`});export{b as D};
