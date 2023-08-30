import{c as r,a as j,v as n,b,e as p,d as c}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as x}from"../../../../../immutable/chunks/stores-73de46f1.js";import{G as a}from"../../../../../immutable/chunks/helpers-b1dcc375.js";import{B as h}from"../../../../../immutable/chunks/breadcrumb-1200daf2.js";import{S as u}from"../../../../../immutable/chunks/SEOText-c0882b30.js";const T={code:".section-title.svelte-182pi3j h2.svelte-182pi3j.svelte-182pi3j{font-size:1.4rem}#team.svelte-182pi3j .icon-box.svelte-182pi3j.svelte-182pi3j{margin:0;background:#f4f4f4;padding:30px 0;border-radius:3px;min-height:450px;height:100%}#team.svelte-182pi3j .icon-box .icon.svelte-182pi3j.svelte-182pi3j{margin:0 auto;width:120px;height:120px;border-radius:50%;overflow:hidden;border:4px solid #fff}#team.svelte-182pi3j .icon-box>.icon img.svelte-182pi3j.svelte-182pi3j{width:120px}#team.svelte-182pi3j .icon-box .icon-msg.svelte-182pi3j.svelte-182pi3j{padding:10px}#team.svelte-182pi3j .icon-box .icon-msg.svelte-182pi3j>p.svelte-182pi3j{font-weight:400 !important;border-bottom:1px solid #dcdcdc;padding-bottom:20px}#team.svelte-182pi3j .icon-box .icon-msg p span i.FSbx.svelte-182pi3j.svelte-182pi3j{color:#222}#team.svelte-182pi3j .icon-box .icon-msg.svelte-182pi3j>h4.svelte-182pi3j{font-size:1.2rem;font-weight:700 !important;margin-top:10px;line-height:1.6rem}@media only screen and (max-width: 768px){section.svelte-182pi3j.svelte-182pi3j.svelte-182pi3j{padding:0}}",map:null},_=r((i,d,m,v)=>{let o,l;l=j(x,e=>o=e);let t=[],$=[],s=o.url.pathname.split("/"),g=new Date;return a(5),a(g.getFullYear()),a(2013),i.css.add(T),l(),`${n(u,"SEOTools").$$render(i,{MetaTitle:t.name,MetaDescription:t.name},{},{})}


<section id="hero-noimage" class="d-flex align-items-center svelte-182pi3j"></section>


<section id="drv-bread" class="section-bg svelte-182pi3j">${n(h,"BreadCrumb").$$render(i,{LinkOne:s[2],LinkTwo:s[3],LinkThree:s[4],headings:t.name,Bdtype:3},{},{})}</section>


<section id="team" class="team section-bg svelte-182pi3j"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title svelte-182pi3j"><h2 class="svelte-182pi3j"><!-- HTML_TAG_START -->${t.name_ru?t.name_ru:"CLIENT TESTIMONIALS"}<!-- HTML_TAG_END --></h2></div>

        <div class="row mt-5">${b($,e=>`${e.clientname_ru!==null?`<div class="mb-5 col-lg-6 col-md-6 col-12 text-center aos-animate" data-aos="zoom-in" data-aos-delay="${p(e.id,!0)+"00"}"><div class="icon-box svelte-182pi3j"><div class="icon svelte-182pi3j"><img${c("src",e.tsimgname?"https://dev.drivenproperties.ru/theme/assets/images/testimonials/"+e.tsimgname:"/assets/img/testimonials/gen_1067.jpg",0)}${c("alt",e.clientname,0)} class="svelte-182pi3j">
                                </div>
                            <div class="icon-msg svelte-182pi3j"><p class="svelte-182pi3j"><span><i class="FSbx bx bxs-quote-left svelte-182pi3j"></i></span>
                                    <!-- HTML_TAG_START -->${e.tsjobdescription?e.tsjobdescription:""}<!-- HTML_TAG_END --> 
                                    <span><i class="FSbx bx bxs-quote-right svelte-182pi3j"></i></span></p>
                                <h4 class="svelte-182pi3j">${p(e.clientname_ru?e.clientname_ru:"")}</h4></div>
                        </div></div>
                    `:""}`)}</div></div></section>
`}),C=r((i,d,m,v)=>`${i.head+=`${i.title="<title>About Us - Client Testimonials</title>",""}<meta name="description" content="About Us Client Testimonials" data-svelte="svelte-caorl6">`,""}


${n(_,"ClientTestimonials").$$render(i,{},{},{})}`);export{C as default};
