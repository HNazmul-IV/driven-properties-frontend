import{c,b as n,e as t,d as i,v}from"./index-7b7abb97.js";import{S as p}from"./Swiper-082aeeef.js";const m={code:"#cliens .container.svelte-te8lda .row.svelte-te8lda>.col-lg-3.svelte-te8lda,.col-md-3.svelte-te8lda.svelte-te8lda.svelte-te8lda{background-color:inherit}#services.svelte-te8lda.svelte-te8lda.svelte-te8lda{padding:30px 0 30px 0}#services.svelte-te8lda .icon-box.svelte-te8lda.svelte-te8lda{border:1px solid #b0b0b0}#services.svelte-te8lda .icon-box h4.svelte-te8lda.svelte-te8lda{line-height:55px;margin:0;font-size:1.5rem;color:#8a8a8a}@media only screen and (max-width: 768px){.icon-box.svelte-te8lda.svelte-te8lda.svelte-te8lda{padding:20px}.icon-box.svelte-te8lda.svelte-te8lda.svelte-te8lda{text-align:center}.img-box.svelte-te8lda.svelte-te8lda.svelte-te8lda{margin:auto}}",map:null},b=c((r,a,s,d)=>(r.css.add(m),`
<section id="services" class="services svelte-te8lda"><div class="container aos-init aos-animate svelte-te8lda" data-aos="fade-up"><div class="row SGAP g-0 svelte-te8lda"><div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1 svelte-te8lda"><a href="/fr/sales/buy-ready-properties/sale-apartments"><div class="icon-box svelte-te8lda"><div class="row"><div class="img-box col-12 col-sm col-md-3 svelte-te8lda"><img alt="drvn" src="/assets/img/home/icons/home-sale.webp" class="img-fluid w-100"></div>
                            <div class="col-12 col-sm"><h4 class="svelte-te8lda">SALES</h4></div></div></div></a></div>

            <div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1 svelte-te8lda"><a href="/fr/rentals/properties-for-rent/rent-apartments"><div class="icon-box svelte-te8lda"><div class="row"><div class="img-box col-12 col-sm col-md-3 svelte-te8lda"><img alt="drvn" src="/assets/img/home/icons/home-rental.webp" class="img-fluid w-100"></div>
                            <div class="col-12 col-sm"><h4 class="svelte-te8lda">RENTAL</h4></div></div></div></a></div>

            <div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1 svelte-te8lda"><a href="/fr/sales/seller/sell-property-in-dubai"><div class="icon-box svelte-te8lda"><div class="row"><div class="img-box col-12 col-sm col-md-3 svelte-te8lda"><img alt="drvn" src="/assets/img/home/icons/home-explore.webp" class="img-fluid w-100"></div>
                            <div class="col-12 col-sm"><h4 class="svelte-te8lda">EXPLORE</h4></div></div></div></a></div>

            <div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1 svelte-te8lda"><a href="fr/explore/dubai-properties-areas"><div class="icon-box svelte-te8lda"><div class="row"><div class="img-box col-12 col-sm col-md-3 svelte-te8lda"><img alt="drvn" src="/assets/img/home/icons/home-market-trends.webp" class="img-fluid w-100"></div>
                            <div class="col-12 col-sm"><h4 class="svelte-te8lda">MARKET TRENDS</h4></div></div></div></a></div></div></div></section>
`)),f=c((r,a,s,d)=>{let{pageContent:l}=a;return a.pageContent===void 0&&s.pageContent&&l!==void 0&&s.pageContent(l),`
<section id="about" class="about"><div class="container" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0">
                <!-- HTML_TAG_START -->${l.description_fr}<!-- HTML_TAG_END --></div></div></div></section>
`}),g=c((r,a,s,d)=>{let{DAGs:l}=a;return a.DAGs===void 0&&s.DAGs&&l!==void 0&&s.DAGs(l),`${l.length!==0?`
<section id="why-us" class="why-us section-bg"><div class="container" data-aos="fade-up"><div class="row"><div class="col-lg-12 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"><div id="EasyTabs"><ul class="nav nav-tabs" id="myTab" role="tablist">${n(l,e=>`${e.pctitle==="Bluewaters Island"?`<li class="nav-item col-md-3 col-lg-3" role="presentation"><button class="nav-link active" id="${t(e.pcslug,!0)+"-tab"}" data-bs-toggle="tab" data-bs-target="${"#"+t(e.pcslug,!0)}" type="button" role="tab"${i("aria-controls",e.pcslug,0)} aria-selected="true">${t(e.pctitle_fr)}</button>
                                </li>`:`<li class="nav-item col-md-3 col-lg-3" role="presentation"><button class="nav-link" id="${t(e.pcslug,!0)+"-tab"}" data-bs-toggle="tab" data-bs-target="${"#"+t(e.pcslug,!0)}" type="button" role="tab"${i("aria-controls",e.pcslug,0)} aria-selected="true">${t(e.pctitle_fr)}</button>
                                </li>`}`)}</ul>

                    <div class="tab-content" id="myTabContent">${n(l,e=>`${e.pctitle==="Bluewaters Island"?`<div class="tab-pane fade show active"${i("id",e.pcslug,0)} role="tabpanel" aria-labelledby="${t(e.pcslug,!0)+"-tab"}"><img alt="drvn"${i("src",e.pchomebgimg?"/l9images/community/"+e.pchomebgimg:"/assets/img/home/community/bluewater.jpg",0)} width="100%">
                                    <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                        <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                        <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                </div>`:`<div class="tab-pane fade"${i("id",e.pcslug,0)} role="tabpanel" aria-labelledby="${t(e.pcslug,!0)+"-tab"}"><img alt="drvn"${i("src",e.pchomebgimg?"/l9images/community/"+e.pchomebgimg:"/assets/img/home/community/bluewater.jpg",0)} width="100%">
                                    <div class="TabBox"><h4><!-- HTML_TAG_START -->${e.pctitle_fr}<!-- HTML_TAG_END --></h4>
                                        <p><!-- HTML_TAG_START -->${e.pcmetatitle_fr?e.pcmetatitle_fr:"Waterfront apartments"}<!-- HTML_TAG_END --></p>
                                        <a href="${"/fr/explore/dubai-properties-areas/"+t(e.pcslug,!0)}" class="btn-learn-more">Lear More</a></div>
                                </div>`}`)}</div></div>
                
                
                <div class="accordion" id="EasyAccordion">${n(l,e=>`${e.pctitle==="Bluewaters Island"?`<div class="accordion-item"><h2 class="accordion-header" id="${"heading"+t(e.pcslug,!0)}"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapse"+t(e.pcslug,!0)}" aria-expanded="true" aria-controls="${"collapse"+t(e.pcslug,!0)}">${t(e.pctitle_fr)}
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

</style>`:""}`}),h=c((r,a,s,d)=>{let{pageContent:l}=a,{AllHomeServices:e}=a;return a.pageContent===void 0&&s.pageContent&&l!==void 0&&s.pageContent(l),a.AllHomeServices===void 0&&s.AllHomeServices&&e!==void 0&&s.AllHomeServices(e),`
<section id="services" class="services"><div class="container" data-aos="fade-up"><div class="section-title">

            <!-- HTML_TAG_START -->${l.description2_fr}<!-- HTML_TAG_END --></div>

        <div class="row SGAP g-0">${n(e,o=>`<div class="col-lg-4 col-xl-4 col-md-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100"><a href="${"/fr/about-us/our-services"+t(o.slug,!0)}"><div class="icon-box"><img alt="drvn"${i("src",o.thimgname?"/l9images/banners/"+o.thimgname:"/assets/img/home/services/service-1.jpg",0)} width="100%">
                            <h4><!-- HTML_TAG_START -->${o.metatitle_fr?o.metatitle_fr:"Property Management"}<!-- HTML_TAG_END --></h4>
                        </div></a>
                </div>`)}</div>

        <div class="row"><div class="col-lg-12 col-xl-12 col-md-12 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"><span class="d-flex flex-row-reverse"><a href="/fr/" class="btn-learn-more-two">Plus de services</a></span></div></div></div></section>
`}),x=c((r,a,s,d)=>{let{pageContent:l}=a,{FactNumbers:e}=a;return a.pageContent===void 0&&s.pageContent&&l!==void 0&&s.pageContent(l),a.FactNumbers===void 0&&s.FactNumbers&&e!==void 0&&s.FactNumbers(e),`${e!==""?`
<section id="fact-numbers" class="fact-numbers section-bg"><div class="container" data-aos="fade-up"><div class="section-title"><h2 class="h2-title">FACT NUMBERS</h2></div>

        <div class="row mb-5 FNGAP g-0">${n(e,o=>`<div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100"><div class="icon-box text-center"><img alt="drvn"${i("src",o.fnpimgname?"/l9images/factnumbers/"+o.fnpimgname:"/assets/img/home/factnumbers/award.png",0)} class="FNimg">
                        <h4>${t(o.fnpname_fr)}</h4>
                        <p>${t(o.fnptitlename_fr)}</p></div>
                </div>`)}</div>

        
        <!-- HTML_TAG_START -->${l.description3_fr}<!-- HTML_TAG_END --></div></section>
`:""}`}),T=c((r,a,s,d)=>`
<section id="hero" class="d-flex align-items-center">${v(p,"Slider").$$render(r,{},{},{})}

    
    
    </section>
`);export{f as A,b as C,x as F,T as S,g as W,h as a};
