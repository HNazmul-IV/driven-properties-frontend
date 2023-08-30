import{c,b as v,e as t,d as r,v as n}from"../../../../../immutable/chunks/index-7b7abb97.js";import{F as p}from"../../../../../immutable/chunks/factnumbers-09dd9982.js";/* empty css                                                                           *//* empty css                                                                                  */const m={code:".col-md-3.svelte-13jlyth.svelte-13jlyth{background-color:inherit}#services.svelte-13jlyth .icon-box.svelte-13jlyth{background:#222;padding:20px 0 3px 0;border-radius:17px;width:90%}#services.svelte-13jlyth .icon-box h4.svelte-13jlyth{line-height:55px;margin:0;font-size:1rem;color:white;font-weight:400 !important}.icon-box.svelte-13jlyth div.svelte-13jlyth{display:flex;flex-direction:column;align-items:center}.img-fluid.svelte-13jlyth.svelte-13jlyth{max-width:100%;height:50px;width:47px !important}.img-box.svelte-13jlyth.svelte-13jlyth{height:80px;width:80px;background:#3f3f40 !important;z-index:11111111;padding:16px 17px;border-radius:43px}@media only screen and (max-width: 768px){.icon-box.svelte-13jlyth.svelte-13jlyth{padding:20px}.icon-box.svelte-13jlyth.svelte-13jlyth{text-align:center}.img-box.svelte-13jlyth.svelte-13jlyth{margin:auto}}",map:null},$=c((s,a,o,d)=>(s.css.add(m),`
<section id="services" class="services svelte-13jlyth"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="row SGAP g-0" style="margin-top: 4em;"><div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1"><a href="/de/sales/buy-ready-properties/sale-apartments"><div class="icon-box svelte-13jlyth"><div class="row svelte-13jlyth"><div class="img-box col-12 col-sm col-md-3 svelte-13jlyth"><img alt="drvn" src="/assets/img/home/icons/2.png" class="img-fluid w-100 svelte-13jlyth"></div>
                            <div class="col-12 col-sm svelte-13jlyth"><h4 class="svelte-13jlyth">VERKAUF</h4></div></div></div></a></div>

            <div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1"><a href="/de/sales/buy-offplan/offplan-apartments"><div class="icon-box svelte-13jlyth"><div class="row svelte-13jlyth"><div class="img-box col-12 col-sm col-md-3 svelte-13jlyth"><img alt="drvn" src="/assets/img/home/icons/0.png" class="img-fluid w-100 svelte-13jlyth"></div>
                            <div class="col-12 col-sm svelte-13jlyth"><h4 class="svelte-13jlyth">ENTDECKEN</h4></div></div></div></a></div>

            <div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1"><a href="/de/sales/buy-offplan/offplan-apartments"><div class="icon-box svelte-13jlyth"><div class="row svelte-13jlyth"><div class="img-box col-12 col-sm col-md-3 svelte-13jlyth"><img alt="drvn" src="/assets/img/home/icons/3.png" class="img-fluid w-100 svelte-13jlyth"></div>
                            <div class="col-12 col-sm svelte-13jlyth"><h4 class="svelte-13jlyth">MARKTTRENDS</h4></div></div></div></a></div></div></div></section>

`)),b=c((s,a,o,d)=>{let{pageContent:l}=a;return a.pageContent===void 0&&o.pageContent&&l!==void 0&&o.pageContent(l),`
<section id="about" class="about"><div class="container" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${l.description_de}<!-- HTML_TAG_END --></div></div></div></section>
`}),u=c((s,a,o,d)=>{let{DAGs:l}=a;return a.DAGs===void 0&&o.DAGs&&l!==void 0&&o.DAGs(l),`${l.length!==0?`
<section id="why-us" class="why-us section-bg"><div class="container" data-aos="fade-up"><div class="row"><div class="col-lg-12 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"><div id="EasyTabs"><ul class="nav nav-tabs" id="myTab" role="tablist">${v(l,e=>`${e.pctitle==="Bluewaters Island"?`<li class="nav-item col-md-3 col-lg-3" role="presentation"><button class="nav-link active" id="${t(e.pcslug,!0)+"-tab"}" data-bs-toggle="tab" data-bs-target="${"#"+t(e.pcslug,!0)}" type="button" role="tab"${r("aria-controls",e.pcslug,0)} aria-selected="true">${t(e.pctitle_fr)}</button>
                                </li>`:`<li class="nav-item col-md-3 col-lg-3" role="presentation"><button class="nav-link" id="${t(e.pcslug,!0)+"-tab"}" data-bs-toggle="tab" data-bs-target="${"#"+t(e.pcslug,!0)}" type="button" role="tab"${r("aria-controls",e.pcslug,0)} aria-selected="true">${t(e.pctitle_fr)}</button>
                                </li>`}`)}</ul>

                    <div class="tab-content" id="myTabContent">${v(l,e=>`${e.pctitle==="Bluewaters Island"?`<div class="tab-pane fade show active"${r("id",e.pcslug,0)} role="tabpanel" aria-labelledby="${t(e.pcslug,!0)+"-tab"}"><img alt="drvn"${r("src",e.pchomebgimg?"/l9images/community/"+e.pchomebgimg:"/assets/img/home/community/bluewater.jpg",0)} width="100%">
                                    <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                        <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                        <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                </div>`:`<div class="tab-pane fade"${r("id",e.pcslug,0)} role="tabpanel" aria-labelledby="${t(e.pcslug,!0)+"-tab"}"><img alt="drvn"${r("src",e.pchomebgimg?"/l9images/community/"+e.pchomebgimg:"/assets/img/home/community/bluewater.jpg",0)} width="100%">
                                    <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                        <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                        <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                </div>`}`)}</div></div>
                
                
                <div class="accordion" id="EasyAccordion">${v(l,e=>`${e.pctitle==="Bluewaters Island"?`<div class="accordion-item"><h2 class="accordion-header" id="${"heading"+t(e.pcslug,!0)}"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapse"+t(e.pcslug,!0)}" aria-expanded="true" aria-controls="${"collapse"+t(e.pcslug,!0)}">${t(e.pctitle_fr)}
                                    </button></h2>
                                <div id="${"collapse"+t(e.pcslug,!0)}" class="accordion-collapse collapse show" aria-labelledby="${"heading"+t(e.pcslug,!0)}" data-bs-parent="#EasyAccordion"><div class="accordion-body mb-4"><img alt="drvn" src="/assets/img/home/community/bluewater.jpg" width="100%">
                                        <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                            <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                            <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                    </div></div>
                            </div>`:`<div class="accordion-item"><h2 class="accordion-header" id="${"heading"+t(e.pcslug,!0)}"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapse"+t(e.pcslug,!0)}" aria-expanded="false" aria-controls="${"collapse"+t(e.pcslug,!0)}">${t(e.pctitle_fr)}
                                    </button></h2>
                                <div id="${"collapse"+t(e.pcslug,!0)}" class="accordion-collapse collapse" aria-labelledby="${"heading"+t(e.pcslug,!0)}" data-bs-parent="#EasyAccordion"><div class="accordion-body"><img alt="drvn" src="/assets/img/home/community/citywalk.jpg" width="100%">
                                        <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                            <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                            <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                    </div></div>
                            </div>`}`)}</div> 
                
                
                <span class="d-flex flex-row-reverse"><a href="/fr/explore/dubai-properties-areas" class="btn-learn-more-two">Plus de r\xE9gions</a></span></div></div></div></section>




<style>#EasyAccordion { display: none;}

    #EasyTabs > .col-lg-3, .col-md-3{  width: 25%;  }

    #EasyTabs ul li > button{
        width: 100%; text-align:center; height: 70px; color: #222;
        border-radius: 0px;  border-top: 1px solid #222;  border-bottom: 1px solid #222;
        font-size: 1.2rem !important; text-transform: uppercase; font-weight: 500;
    }
    #EasyTabs ul li button:first-child{
        border-left:1px solid #222;
    }
    #EasyTabs ul li button:nth-last-child(even) { border-left:1px solid #222; }

    #EasyTabs ul li button:nth-last-child(odd) { border-right:1px solid #222;}

    #EasyTabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        background-color: black; color:#fff !important; font-weight: 600;
    }

    #myTabContent{ padding:5px 0px 5px 0px; }

    @media only screen and (max-width: 768px) {
        #EasyTabs{ display: none;  }
        #EasyAccordion{display: block;}
        #EasyAccordion div.accordion-body{ padding: 5px 0px;}
        #EasyAccordion .accordion-button{font-size: 1.2rem !important; text-transform: uppercase; border-color:#222 !important; color:#fff; background-color: #222;}
        #EasyAccordion .accordion-button:focus{border-color:#222;}
        .accordion-button:not(.collapsed)::after{ 
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")!important;
        }
        #EasyAccordion .accordion-button::after{ 
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
        }
        #EasyAccordion .TabBox {margin:10px 0px 50px 0px;}
    }

</style>`:""}`}),h=c((s,a,o,d)=>{let{pageContent:l}=a,{AllHomeServices:e}=a;return a.pageContent===void 0&&o.pageContent&&l!==void 0&&o.pageContent(l),a.AllHomeServices===void 0&&o.AllHomeServices&&e!==void 0&&o.AllHomeServices(e),`
<section id="services" class="services"><div class="container" data-aos="fade-up"><div class="section-title">

            <!-- HTML_TAG_START -->${l.description2_ru}<!-- HTML_TAG_END --></div>

        <div class="row SGAP g-0">${v(e,i=>`<div class="col-lg-4 col-xl-4 col-md-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100"><a href="${"/de/about-us/our-services"+t(i.slug,!0)}"><div class="icon-box"><img alt="drvn"${r("src",i.thimgname?"/l9images/banners/"+i.thimgname:"/assets/img/home/services/service-1.jpg",0)} width="100%">
                            <h4><!-- HTML_TAG_START -->${i.metatitle_ru?i.metatitle_ru:"Property Management"}<!-- HTML_TAG_END --></h4>
                        </div></a>
                </div>`)}</div>

        <div class="row"><div class="col-lg-12 col-xl-12 col-md-12 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"><span class="d-flex flex-row-reverse"><a href="/de/" class="btn-learn-more-two">\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</a></span></div></div></div></section>
`});const x={code:'#hero.svelte-qnvvxn{background-image:url("/assets/img/home/sliders/header-bg-min.webp");background-size:cover}@media(max-width: 768px){.float-icon-box.svelte-qnvvxn{padding:6px 9px;bottom:10px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;border-radius:100px;font-size:26px;color:#888;cursor:pointer;z-index:1}.form-close.svelte-qnvvxn{color:red}.bi.svelte-qnvvxn,.bi-whatsapp.svelte-qnvvxn{border-radius:43px;padding:6px 7px;color:#f7f4f5;font-size:21px}.bi-x-lg.svelte-qnvvxn{color:red !important}span.float-text-icon.svelte-qnvvxn{font-size:18px;margin-left:5px;color:white}.icon-container.svelte-qnvvxn{background:#000000cc;height:50px;width:100%;position:fixed;bottom:-1px;z-index:1;display:flex;justify-content:space-evenly}.bi-card-heading.svelte-qnvvxn:before,.bi-whatsapp.svelte-qnvvxn::before,.bi-x-lg.svelte-qnvvxn:before{font-size:18px}.bi-whatsapp.svelte-qnvvxn::before{color:white;content:"\\f618";background:#47c357 !important;border-radius:101px}.bi-card-heading.svelte-qnvvxn:before{background-color:#4167b1;color:white}}@media(min-width: 769px){.float-icon-box.svelte-qnvvxn{display:none}}',map:null},f=c((s,a,o,d)=>(s.css.add(x),`
<section id="hero" class="d-flex align-items-center svelte-qnvvxn">
  </section>
<div class="icon-container svelte-qnvvxn"><div class="p-0 bd-highlight float-icon-box float-icon-box-left svelte-qnvvxn"><a data-sveltekit-prefetch style="color: black;" href="https://api.whatsapp.com/send?phone=971522491227&text=\u0414\u043E\u0431\u0440\u044B\u0439%20\u0434\u0435\u043D\u044C,%20\u0445\u043E\u0442\u0435\u043B%20\u0431\u044B%20\u0443\u0437\u043D\u0430\u0442\u044C%20\u0431\u043E\u043B\u044C\u0448\u0435%20\u043E\u0431%20\u043E\u0434\u043D\u043E\u043C%20\u0438\u0437%20\u0432\u0430\u0448\u0438\u0445%20\u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432" class="text-center"><i class="FSbx bx bi-whatsapp svelte-qnvvxn"></i><span class="float-text-icon svelte-qnvvxn">Whatsapp</span></a></div>

  <div class="float-icon-box float-icon-box-right svelte-qnvvxn"><a href="#home-lead-form" style="color: black;"><div class="form-icon form-open" id="form-open"><i class="bi bi-card-heading svelte-qnvvxn"></i><span class="float-text-icon svelte-qnvvxn">Message</span></div></a>
    </div></div>

`)),w=c((s,a,o,d)=>{let l=[],e=[],i=[];return`${s.head+=`${s.title="<title>Driven Properties - Buy, Rent, Sell Property in Dubai UAE</title>",""}<meta name="description" content="Driven Properties provides Property Management, Real Estate & Investment Advisory services for Residential and Commercial properties in Dubai - Apartments, Villas, Offices, Warehouses, Buildings, etc" data-svelte="svelte-1dfasix">`,""}
    


    ${n(f,"Slider").$$render(s,{},{},{})}
    ${n($,"HomeClients").$$render(s,{},{},{})}
    ${n(b,"HomeAbout").$$render(s,{pageContent:e},{},{})}
    ${n(u,"HomeWhyUs").$$render(s,{DAGs:l},{},{})}
    ${n(h,"HomeServices").$$render(s,{pageContent:e,AllHomeServices:i},{},{})}
    ${n(p,"HomeFactNumbers").$$render(s,{pageContent:e},{},{})}`});export{w as default};
