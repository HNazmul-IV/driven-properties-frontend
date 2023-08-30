import{c as d,a as h,v as x,b as p,d as w,e as n}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as A}from"../../../../../immutable/chunks/stores-73de46f1.js";import{G as g}from"../../../../../immutable/chunks/helpers-b1dcc375.js";import{B as y}from"../../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";const L={code:".section-title.svelte-xpa9gf h2.svelte-xpa9gf.svelte-xpa9gf{font-size:1.4rem}.services.svelte-xpa9gf .icon-box.svelte-xpa9gf.svelte-xpa9gf{padding:0px;margin:0}.services.svelte-xpa9gf .icon-box .icon.svelte-xpa9gf.svelte-xpa9gf{margin:0;position:relative}.services.svelte-xpa9gf .icon-box>.icon img.svelte-xpa9gf.svelte-xpa9gf{width:100%}.services.svelte-xpa9gf .icon-box .icon-msg.svelte-xpa9gf.svelte-xpa9gf{padding:10px}.services.svelte-xpa9gf .icon-box .icon-msg.svelte-xpa9gf>h4.svelte-xpa9gf{font-size:0.9rem;font-weight:700 !important;margin-bottom:7px;border-bottom:1px solid #dcdcdc;line-height:1.6rem}.services.svelte-xpa9gf .icon-box .icon-msg.svelte-xpa9gf>p.svelte-xpa9gf{font-weight:400 !important}.accordion-list.svelte-xpa9gf.svelte-xpa9gf.svelte-xpa9gf{padding:0}.why-us.svelte-xpa9gf .accordion-list li.svelte-xpa9gf.svelte-xpa9gf{background-color:#dcdcdc}.why-us.svelte-xpa9gf .accordion-list.svelte-xpa9gf.svelte-xpa9gf{color:#222232}.why-us.svelte-xpa9gf .accordion-list span.svelte-xpa9gf.svelte-xpa9gf{color:#222232;font-size:1.7rem;font-weight:400}.why-us.svelte-xpa9gf .accordion-list a.collapsed.svelte-xpa9gf.svelte-xpa9gf:hover{color:#222232}.why-us.svelte-xpa9gf .accordion-list i.svelte-xpa9gf.svelte-xpa9gf{color:#222232;font-size:1.7rem;font-weight:400}ul.MyAwards.svelte-xpa9gf.svelte-xpa9gf.svelte-xpa9gf{list-style-type:disc}ul.MyAwards.svelte-xpa9gf>li.svelte-xpa9gf.svelte-xpa9gf{padding:0px;margin:25px;line-height:2px;font-size:1.1rem;font-weight:300}ul.MyAwards.svelte-xpa9gf li.svelte-xpa9gf>em.svelte-xpa9gf{font-size:1rem;font-weight:300;color:#222232}@media only screen and (max-width: 768px){section.svelte-xpa9gf.svelte-xpa9gf.svelte-xpa9gf{padding:0}.services.svelte-xpa9gf .icon-box.svelte-xpa9gf.svelte-xpa9gf{padding:0px;margin:7px 15px}ul.MyAwards.svelte-xpa9gf>li.svelte-xpa9gf.svelte-xpa9gf{margin:7px 20px;line-height:25px;font-size:0.9rem}ul.MyAwards.svelte-xpa9gf li.svelte-xpa9gf>em.svelte-xpa9gf{font-size:0.9rem}}",map:null},M=d((s,f,m,$)=>{let c,r;r=h(A,e=>c=e);let o=[],v=[],l=c.url.pathname.split("/"),u=[],_=[],a=new Date,b=g(5);g(a.getFullYear());let T=g(2013);return s.css.add(L),r(),`
<section id="hero-noimage" class="d-flex align-items-center svelte-xpa9gf"></section>


<section id="drv-bread" class="section-bg svelte-xpa9gf">${x(y,"BreadCrumb").$$render(s,{LinkOne:l[1],LinkTwo:l[2],LinkThree:l[3],headings:l[4]+" - "+o.name_ru,FstName_Fr:u.name_ru,LstName_Fr:_.name_ru,Bdtype:3},{},{})}</section>


<section id="services" class="services section-bg svelte-xpa9gf"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title mb-4 svelte-xpa9gf"><h2 class="svelte-xpa9gf"><!-- HTML_TAG_START -->${o.name_ru?o.name_ru:"Best Real Estate Company"}<!-- HTML_TAG_END --></h2></div>
        
        <div class="row">${p(v,e=>`${e.awdyear>=b&&e.awdimgname!==null?`<div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="100"><div class="icon-box svelte-xpa9gf"><div class="icon svelte-xpa9gf"><img${w("src",e.awdimgname?"/l9images/awards/"+e.awdimgname:"/assets/img/awards/gen_4413139.jpg",0)} alt="as" class="bx bxl-dribbble svelte-xpa9gf">
                                </div>

                            <div class="icon-msg svelte-xpa9gf"><h4 class="svelte-xpa9gf"><!-- HTML_TAG_START -->${e.awdtitle_ru?e.awdtitle_ru:"Dubai Large, No 1 Best Quality Brokerage"}<!-- HTML_TAG_END --></h4> 
                                <p class="svelte-xpa9gf"><!-- HTML_TAG_START -->${e.awdcompany_ru?e.awdcompany_ru:"Property Finder"}<!-- HTML_TAG_END -->
                                    - 
                                    <!-- HTML_TAG_START -->${e.awdyear?e.awdyear:"2021"}<!-- HTML_TAG_END -->
                                </p></div>
                        </div></div>
                    `:""}`)}</div></div></section>  



<section id="why-us" class="why-us section-bg svelte-xpa9gf"><div class="container"><div class="row"><div class="accordion-list svelte-xpa9gf"><ul>${p(Array(T),(e,i)=>`<li class="svelte-xpa9gf"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xpa9gf" data-bs-target="${"#accordion-list-"+n(a.getFullYear()-i,!0)}" aria-expanded="false"><span class="svelte-xpa9gf">${n(a.getFullYear()-i)}</span> 
                                <i class="bx bx-plus icon-show svelte-xpa9gf"></i>
                                <i class="bx bx-minus icon-close svelte-xpa9gf"></i></a>
                            <div id="${"accordion-list-"+n(a.getFullYear()-i,!0)}" class="collapse" data-bs-parent=".accordion-list" style=""><ul class="MyAwards svelte-xpa9gf">${p(v,t=>`${t.awdyear==a.getFullYear()-i?`<li class="svelte-xpa9gf"><!-- HTML_TAG_START -->${t.awdtitle_ru?t.awdtitle_ru:"Appreciation Award "}<!-- HTML_TAG_END -->
                                                - 
                                                <em class="svelte-xpa9gf"><!-- HTML_TAG_START -->${t.awdcompany_ru?t.awdcompany_ru:"Nshama"}<!-- HTML_TAG_END --></em>
                                            </li>`:""}`)}
                                </ul></div>
                        </li>`)}</ul></div></div></div>
</section>`}),D=d((s,f,m,$)=>`${s.head+=`${s.title="<title>About Us - Driven Team</title>",""}<meta name="description" content="About Us Driven Team" data-svelte="svelte-1t7ebv2">`,""}

${x(M,"Awards").$$render(s,{},{},{})}`);export{D as default};
