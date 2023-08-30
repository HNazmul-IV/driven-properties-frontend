import{c as i,a as v,v as o}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as $}from"../../../../../immutable/chunks/stores-73de46f1.js";import{B as b}from"../../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";import"../../../../../immutable/chunks/helpers-b1dcc375.js";const g={code:"section.svelte-lkl2ps.svelte-lkl2ps{padding:10px 0 100px 0}#about.svelte-lkl2ps .content.svelte-lkl2ps{border:1px solid #cbcbcb;margin:1px;padding:20px 10px 60px 10px;background-color:#f8f8f8}@media only screen and (max-width: 768px){}",map:null},u=i((e,l,r,p)=>{let a,n;n=v($,m=>a=m);let t=[],s=a.url.pathname.split("/"),d=[],c=[];return e.css.add(g),n(),`
<section id="hero-noimage" class="d-flex align-items-center svelte-lkl2ps"></section>


<section id="drv-bread" class="section-bg svelte-lkl2ps">${o(b,"BreadCrumb").$$render(e,{imgbg:"/l9images/banners/"+t.imgname,LinkOne:s[1],LinkTwo:s[2],LinkThree:s[3],headings:t.name_ru,FstName_Fr:d.name_ru,LstName_Fr:c.name_ru,Bdtype:2},{},{})}</section>


<section id="about" class="about section-bg svelte-lkl2ps"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="row content svelte-lkl2ps"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${t.description_ru?t.description_ru:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`}),f=i((e,l,r,p)=>`${e.head+=`${e.title="<title>About Us - Driven Team</title>",""}<meta name="description" content="About Us Driven Team" data-svelte="svelte-1t7ebv2">`,""}

${o(u,"TeamPhotoVideo").$$render(e,{},{},{})}`);export{f as default};
