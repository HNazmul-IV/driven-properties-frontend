import{c as n,a as z,v as g,e as _,b as $,d as a}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as b}from"../../../../immutable/chunks/stores-73de46f1.js";import{B as T}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";import"../../../../immutable/chunks/helpers-b1dcc375.js";const u={code:".section-title.svelte-5e86gz h2.svelte-5e86gz.svelte-5e86gz{font-size:1.4rem}.services.svelte-5e86gz .icon-box.svelte-5e86gz.svelte-5e86gz{padding:0px;margin:0}.services.svelte-5e86gz .icon-box .icon.svelte-5e86gz.svelte-5e86gz{margin:0;position:relative}.services.svelte-5e86gz .icon-box>.icon img.svelte-5e86gz.svelte-5e86gz{width:100%}.services.svelte-5e86gz .icon-box .icon.svelte-5e86gz>p.svelte-5e86gz{position:absolute;padding:10px;color:#fff;bottom:0;left:0;right:0;margin:0;font-size:1.1rem;font-weight:400;letter-spacing:0.5px}.services.svelte-5e86gz .icon-box .icon-msg.svelte-5e86gz.svelte-5e86gz{padding:10px}.services.svelte-5e86gz .icon-box .icon-msg.svelte-5e86gz>h4.svelte-5e86gz{font-size:1.1rem;font-weight:500 !important;margin-bottom:7px}.services.svelte-5e86gz .icon-box .icon-msg.svelte-5e86gz>p.svelte-5e86gz{font-weight:400 !important}@media only screen and (max-width: 768px){section.svelte-5e86gz.svelte-5e86gz.svelte-5e86gz{padding:0}.services.svelte-5e86gz .icon-box.svelte-5e86gz.svelte-5e86gz{padding:0px;margin:7px 15px}}",map:null},x=n((s,c,v,r)=>{let t,i;i=z(b,e=>t=e);let l=[],m=[],p=[],d=[],o=t.url.pathname.split("/");return s.css.add(u),i(),`
<section id="hero-noimage" class="d-flex align-items-center svelte-5e86gz"></section>


${g(T,"BreadCrumb").$$render(s,{LinkOne:o[2],LinkTwo:o[3],Bdtype:2,FstName_Fr:p.name_ru,LstName_Fr:d.name_ru},{},{})}


<section id="services" class="services section-bg svelte-5e86gz"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title mb-4 svelte-5e86gz"><h2 class="svelte-5e86gz">${_(l.name_ru?l.name_ru:"Driven Properties International")}</h2></div>
        
        <div class="row">${$(m,e=>`<div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="100"><div class="icon-box svelte-5e86gz"><div class="icon svelte-5e86gz"><img${a("src",e.tmimgname?"/l9images/teams/"+e.tmimgname:"/assets/img/team/gen_4066.jpg",0)}${a("alt",e.fullname,0)} class="bx bxl-dribbble svelte-5e86gz">                        
                            <p class="svelte-5e86gz"><!-- HTML_TAG_START -->${e.tmslug_ru?e.tmslug_ru:"China"}<!-- HTML_TAG_END --></p></div>

                        <div class="icon-msg svelte-5e86gz"><h4 class="svelte-5e86gz"><!-- HTML_TAG_START -->${e.fullname_ru?e.fullname_ru:"Thomas Wan"}<!-- HTML_TAG_END --></h4> 
                            <p class="svelte-5e86gz"><!-- HTML_TAG_START -->${e.jobtitle_ru?e.jobtitle_ru:"Associate Partner"}<!-- HTML_TAG_END --></p>
                            <p class="svelte-5e86gz"><b><!-- HTML_TAG_START -->${e.tmphone?e.tmphone:"+971 4 429 7040"}<!-- HTML_TAG_END --></b></p>
                            <p class="svelte-5e86gz"><!-- HTML_TAG_START -->${e.tmemail?e.tmemail:"thomasw@drivenproperties.com"}<!-- HTML_TAG_END --></p></div>
                    </div></div>
                `)}</div></div></section>  
`}),G=n((s,c,v,r)=>`${s.head+=`${s.title="<title>About Us</title>",""}<meta name="description" content="About Us Page app" data-svelte="svelte-xpl071">`,""}
    
    ${g(x,"InternationalTeam").$$render(s,{},{},{})}`);export{G as default};
