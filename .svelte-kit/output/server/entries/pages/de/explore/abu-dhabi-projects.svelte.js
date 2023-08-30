import{c as m,a as D,e,v as x,b as d}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as T}from"../../../../immutable/chunks/stores-73de46f1.js";import{B as R}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";import"../../../../immutable/chunks/helpers-b1dcc375.js";const k={code:".Dag.svelte-1h87juu.svelte-1h87juu.svelte-1h87juu{color:#444444;text-decoration:none}.why-us.svelte-1h87juu .content.svelte-1h87juu.svelte-1h87juu{padding:50px 0px 0 0px}.section-title.svelte-1h87juu h2.svelte-1h87juu.svelte-1h87juu{font-size:1.4rem}.services.svelte-1h87juu .icon-box.svelte-1h87juu.svelte-1h87juu{padding:0px;margin:0}.services.svelte-1h87juu .icon-box .icon.svelte-1h87juu.svelte-1h87juu{margin:0;position:relative}.services.svelte-1h87juu .icon-box>.icon img.svelte-1h87juu.svelte-1h87juu{width:100%}.services.svelte-1h87juu .icon-box .icon-msg.svelte-1h87juu.svelte-1h87juu{padding:10px}.services.svelte-1h87juu .icon-box .icon-msg.svelte-1h87juu>h4.svelte-1h87juu{font-size:1.2rem;font-weight:400 !important;margin-bottom:7px;line-height:1.6rem}.accordion-list.svelte-1h87juu.svelte-1h87juu.svelte-1h87juu{padding:0}.why-us.svelte-1h87juu .accordion-list li.svelte-1h87juu.svelte-1h87juu{background-color:#dcdcdc}.why-us.svelte-1h87juu .accordion-list.svelte-1h87juu.svelte-1h87juu{color:#222232}.why-us.svelte-1h87juu .accordion-list span.svelte-1h87juu.svelte-1h87juu{color:#222232;font-size:1rem;font-weight:400}.why-us.svelte-1h87juu .accordion-list a.collapsed.svelte-1h87juu.svelte-1h87juu:hover{color:#222232}.why-us.svelte-1h87juu .accordion-list i.svelte-1h87juu.svelte-1h87juu{color:#222232;font-size:1.7rem;font-weight:400}.page-link.svelte-1h87juu.svelte-1h87juu.svelte-1h87juu{color:inherit;border:0;text-align:left;background-color:#f1f1f1;border-radius:3px;line-height:30px;padding:7px 21px;text-transform:capitalize;margin-left:1px}.page-link.svelte-1h87juu.svelte-1h87juu.svelte-1h87juu:focus{color:#222232;box-shadow:0 0 0 0.05rem rgb(0 0 0)}@media only screen and (max-width: 768px){section.svelte-1h87juu.svelte-1h87juu.svelte-1h87juu{padding:0}.services.svelte-1h87juu .icon-box.svelte-1h87juu.svelte-1h87juu{padding:0px;margin:7px 15px}}",map:null},L=m((l,f,A,w)=>{let r,p,v,$;$=D(T,a=>v=a);let u=[],b=[],s,n,g,h,o,t=[],c=v.url.pathname.split("/"),y=[],_=[];const j=a=>{b=a,s=1,n=9,g=b,h=g.length,o=Math.ceil(h/n),console.log(h,o)};return l.css.add(k),r=s*n,p=r-n,$(),`${e(j(u)?j(u):"")}

${x(R,"BreadCrumb").$$render(l,{imgbg:t.imgname?"/l9images/banners/"+t.imgname:"/assets/images/gen_3917.jpg",LinkOne:c[1],LinkTwo:c[2],headings:t.name_ru,FstName_Fr:y.name_ru,LstName_Fr:_.name_ru,Bdtype:2},{},{})}


<section id="services" class="services section-bg svelte-1h87juu"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title mb-5 svelte-1h87juu"><h2 class="mb-4 svelte-1h87juu"><!-- HTML_TAG_START -->${t.name_ru}<!-- HTML_TAG_END --></h2></div>

        <div class="row content mb-5"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${t.description_ru?t.description_ru:""}<!-- HTML_TAG_END --></div></div>

        <div class="row">${u.length?d(u,(a,i)=>`${i>=p&&i<r?`<div class="mb-4 col-lg-4 col-md-4 col-12 aos-animate" data-aos="zoom-in" data-aos-delay="100"><a href="${"/fr/"+e(c[2],!0)+"/"+e(c[3],!0)+"/"+e(a.pcslug,!0)}" class="Dag svelte-1h87juu"><div class="icon-box svelte-1h87juu"><div class="icon svelte-1h87juu"><img src="${"/l9images/community/"+e(a.pcimgname,!0)}" alt="as" class="bx bxl-dribbble svelte-1h87juu"></div>

                            <div class="icon-msg svelte-1h87juu"><h4 class="svelte-1h87juu">${e(a.pctitle_ru)}</h4>
                                <p>${e(a.pcmetatitle_ru)}</p>
                            </div></div>
                    </a></div>
                `:""}`):"<p>Not found or something went wrong!</p>"}</div>

        <div class="row mt-4"><div class="col-12 text-left"><nav aria-label="Page navigation example"><ul class="pagination justify-content-center">${s>1?`<li class="page-item"><a class="page-link svelte-1h87juu" href="/dubai-properties-areas">first
                                </a></li>
                            <li class="page-item"><a class="page-link svelte-1h87juu" href="${"/dubai-properties-areas/"+e(s-1,!0)}">previous
                                </a></li>`:""}

                        ${d([10,9,8,7,6,5,4,3,2,1],a=>`${s-a>0?`<li class="page-item"><a class="page-link svelte-1h87juu" href="${"/dubai-properties-areas/"+e(s-a,!0)}">${e(s-a)}</a>
                                </li>`:""}`)}

                    
                        <li class="page-item"><span class="page-link active svelte-1h87juu">${e(s)}</span></li>
                        

                        ${d(Array(10),(a,i)=>`${s+(i+1)<=o?`<li class="page-item"><a class="page-link svelte-1h87juu" href="${"/dubai-properties-areas/"+e(s+(i+1),!0)}">${e(s+(i+1))}</a>
                                </li>`:""}`)}

                        ${s<o?`<li class="page-item"><a class="page-link svelte-1h87juu" href="${"/dubai-properties-areas/"+e(s+1,!0)}">next
                                </a></li>
                            <li class="page-item"><a class="page-link svelte-1h87juu" href="${"/dubai-properties-areas/"+e(o,!0)}">last
                                </a></li>`:""}</ul></nav></div></div></div></section>  
  


<section id="why-us" class="why-us section-bg svelte-1h87juu"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="row content svelte-1h87juu"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${t.description2_ru?t.description2_ru:"Content Required"}<!-- HTML_TAG_END --></div></div></div>

    <div class="container"><div class="section-title"><h3 class="mt-5 mb-5">FAQs</h3></div>

        <div class="row"><div class="accordion-list svelte-1h87juu"><ul><li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-2" aria-expanded="false"><span class="svelte-1h87juu">Q. Which are the new projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: The upcoming projects in Abu Dhabi are Reportage Al Raha Lofts, Reportage Oasis Residences Two, Emirates E13, DAMAC Marina Bay, ENI Villas, Bloom Park View, Aabar Al Durrah Tower, etc.
                            </p></div></li>
                    
                    <li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-3" aria-expanded="false"><span class="svelte-1h87juu">Q. Can foreigners buy property in Abu Dhabi and live permanently?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: Foreigners can buy properties in the UAE including some of the areas in Abu Dhabi. Being a foreign national, you will still have to abide by the Visa rules of the UAE which requires you to get your Visa sponsored.</p></div></li>
                    
                    <li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-4" aria-expanded="false"><span class="svelte-1h87juu">Q. What do you need to know about the new projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: Some of the important information that you need to note about the new projects in Abu Dhabi is the project name, builder name, popular projects, the locations, and the current as well as future real estate market conditions.</p></div></li>
                    
                    <li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-5" aria-expanded="false"><span class="svelte-1h87juu">Q. Why are people interested in new residential projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: People are interested in owning the new residential projects in Abu Dhabi because of the excellent infrastructure, stable real estate, booming economy, and outstanding living conditions in the city.</p></div></li>
                    
                    <li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-6" aria-expanded="false"><span class="svelte-1h87juu">Q. Which are the most popular future projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-6" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: Some of the most popular future projects in Abu Dhabi are Al Raha Lofts 1 and 2, Al Ghadeer, Saadiyat Lagoons District Townhouses, Reflections at Reem Island, Oasis Residences 1, Al Jurf Gardens, Water\u2019s Edge, The Bridges Apartments, Al Mahra Residence, and Marina Rise.</p></div></li>
                    
                    <li class="svelte-1h87juu"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-1h87juu" data-bs-target="#accordion-list-7" aria-expanded="false"><span class="svelte-1h87juu">Q. Why should one invest in a property in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show svelte-1h87juu"></i>
                            <i class="bx bx-minus icon-close svelte-1h87juu"></i></a>
                        <div id="accordion-list-7" class="collapse" data-bs-parent=".accordion-list" style=""><p>A: With the rapid growth in Abu Dhabi real estate market, there is an upward trend where the off-plan projects are providing an RoI of over 10-11% annually. Abu Dhabi has several exciting locations such as Yas Island, Al Reem Island, and Khalifa City A, which have in recent times provided excellent RoI.</p></div></li></ul></div></div></div>
</section>`}),B=m((l,f,A,w)=>`${l.head+=`${l.title="<title>Abu Dhabi Projects | Property in Abu Dhabi</title>",""}<meta name="description" content="Abu Dhabi Projects | Property in Abu Dhabi" data-svelte="svelte-124td2b">`,""}
    
    ${x(L,"AbuDhabiProjects").$$render(l,{},{},{})}`);export{B as default};
