import{c as h,a as k,e,v as f,b as p}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as L}from"../../../../immutable/chunks/stores-73de46f1.js";import{B as D}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";import{o as G}from"../../../../immutable/chunks/base-url-ce329ce1.js";import"../../../../immutable/chunks/helpers-b1dcc375.js";const P={code:".Dag.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7{color:#444444;text-decoration:none}.why-us.svelte-xinoe7 .content.svelte-xinoe7.svelte-xinoe7{padding:50px 0px 0 0px}.section-title.svelte-xinoe7 h2.svelte-xinoe7.svelte-xinoe7{font-size:1.4rem}.services.svelte-xinoe7 .icon-box.svelte-xinoe7.svelte-xinoe7{padding:0px;margin:0}.services.svelte-xinoe7 .icon-box .icon.svelte-xinoe7.svelte-xinoe7{margin:0;position:relative}.services.svelte-xinoe7 .icon-box>.icon img.svelte-xinoe7.svelte-xinoe7{width:100%}.services.svelte-xinoe7 .icon-box .icon-msg.svelte-xinoe7.svelte-xinoe7{padding:10px}.services.svelte-xinoe7 .icon-box .icon-msg.svelte-xinoe7>h4.svelte-xinoe7{font-size:1.2rem;font-weight:400 !important;margin-bottom:7px;line-height:1.6rem}.accordion-list.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7{padding:0}.why-us.svelte-xinoe7 .accordion-list li.svelte-xinoe7.svelte-xinoe7{background-color:#dcdcdc}.why-us.svelte-xinoe7 .accordion-list.svelte-xinoe7.svelte-xinoe7{color:#222232}.why-us.svelte-xinoe7 .accordion-list span.svelte-xinoe7.svelte-xinoe7{color:#222232;font-size:1rem;font-weight:400}.why-us.svelte-xinoe7 .accordion-list a.collapsed.svelte-xinoe7.svelte-xinoe7:hover{color:#222232}.why-us.svelte-xinoe7 .accordion-list i.svelte-xinoe7.svelte-xinoe7{color:#222232;font-size:1.7rem;font-weight:400}.page-link.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7{color:inherit;border:0;text-align:left;background-color:#f1f1f1;border-radius:3px;line-height:30px;padding:7px 21px;text-transform:capitalize;margin-left:1px}.page-link.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7:focus{color:#222232;box-shadow:0 0 0 0.05rem rgb(0 0 0)}@media only screen and (max-width: 768px){section.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7{padding:0}.services.svelte-xinoe7 .icon-box.svelte-xinoe7.svelte-xinoe7{padding:0px;margin:7px 15px}}li.page-item.svelte-xinoe7.svelte-xinoe7.svelte-xinoe7{display:none}",map:null},R=h((l,_,y,w)=>{let d,x,$,g;g=k(L,i=>$=i);let n=[],m=[],s,c,b,v,o,a=[],r=$.url.pathname.split("/"),T=[],A=[];const u=i=>{m=i,s=1,c=200,b=m,v=b.length,o=Math.ceil(v/c),console.log(v,o)};return l.css.add(P),d=s*c,x=d-c,g(),`${e(u(n)?u(n):"")}

${f(D,"BreadCrumb").$$render(l,{imgbg:a.imgname?"/l9images/banners/"+a.imgname:"/assets/images/gen_3917.jpg",LinkOne:r[1],LinkTwo:r[2],headings:a.name_de,FstName_Fr:T.name_de,LstName_Fr:A.name_de,Bdtype:2},{},{})}


<section id="services" class="services section-bg svelte-xinoe7"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title mb-5 svelte-xinoe7"><h2 class="mb-4 svelte-xinoe7"><!-- HTML_TAG_START -->${a.name_de?a.name_de:""}<!-- HTML_TAG_END --></h2></div>

        <div class="row content mb-5"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${a.description_de?a.description_de:""}<!-- HTML_TAG_END --></div></div>
        

        <div class="row">${n.length?p(n,(i,t)=>`${t>=x&&t<d&&i.pctitle_de!==null?`<div class="mb-4 col-lg-4 col-md-4 col-12 aos-animate" data-aos="zoom-in" data-aos-delay="100"><a href="${"/de/"+e(r[2],!0)+"/"+e(r[3],!0)+"/"+e(i.pcslug,!0)}" class="Dag svelte-xinoe7"><div class="icon-box svelte-xinoe7"><div class="icon svelte-xinoe7">
                                
                                <img src="${e(G,!0)+"/theme/assets/images/community/"+e(i.pcimgname,!0)}" alt="as" class="bx bxl-dribbble svelte-xinoe7"></div>

                            <div class="icon-msg svelte-xinoe7"><h4 class="svelte-xinoe7">${e(i.pctitle_de)}</h4>
                            </div></div>
                    </a></div>
                `:""}`):"<p>\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0438\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A!</p>"}</div>

        <div class="row mt-4"><div class="col-12 text-left"><nav aria-label="Page navigation example"><ul class="pagination justify-content-center">${s>1?`<li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="/dubai-properties-areas">first
                                </a></li>
                            <li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="${"/dubai-properties-areas/"+e(s-1,!0)}">previous
                                </a></li>`:""}

                        ${p([3,2,1],i=>`${s-i>0?`<li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="${"/dubai-properties-areas/"+e(s-i,!0)}">${e(s-i)}</a>
                                </li>`:""}`)}

                        <li class="page-item svelte-xinoe7"><span class="page-link active svelte-xinoe7">${e(s)}</span></li>

                        ${p(Array(3),(i,t)=>`${s+(t+1)<=o?`<li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="${"/dubai-properties-areas/"+e(s+(t+1),!0)}">${e(s+(t+1))}</a>
                                </li>`:""}`)}

                        ${s<o?`<li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="${"/dubai-properties-areas/"+e(s+1,!0)}">next
                                </a></li>
                            <li class="page-item svelte-xinoe7"><a class="page-link svelte-xinoe7" href="${"/dubai-properties-areas/"+e(o,!0)}">last
                                </a></li>`:""}</ul></nav></div></div></div></section>  
  


<section id="why-us" class="why-us section-bg svelte-xinoe7"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="row content svelte-xinoe7"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${a.description2_de?a.description2_de:"Content Required"}<!-- HTML_TAG_END --></div></div></div>
    
    <div class="container"><div class="section-title"><h3 class="mt-5 mb-5">FAQs</h3></div>

        <div class="row"><div class="accordion-list svelte-xinoe7"><ul><li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-2" aria-expanded="false"><span class="svelte-xinoe7">\u0421\u0442\u043E\u0438\u0442 \u043B\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0414\u0443\u0431\u0430\u0435?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043F\u043B\u0430\u043D\u044B \u0436\u0438\u0442\u044C \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u043C \u0431\u0443\u0434\u0443\u0449\u0435\u043C, \u0442\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0414\u0443\u0431\u0430\u0435 \u2014 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E \u0440\u0430\u0437\u0443\u043C\u043D\u0430\u044F \u0438\u0434\u0435\u044F. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u0430\u0440\u0435\u043D\u0434\u0443 \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0445 \u0438\u043F\u043E\u0442\u0435\u0447\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0441\u0442\u0430\u0442\u044C \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u043C\u0438\u0440\u0430.
                            </p></div></li>
                    
                    <li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-3" aria-expanded="false"><span class="svelte-xinoe7">\u0412 \u043A\u0430\u043A\u043E\u043C \u0440\u0430\u0439\u043E\u043D\u0435 \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0414\u0443\u0431\u0430\u0435?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u041B\u0443\u0447\u0448\u0438\u0435 \u0440\u0430\u0439\u043E\u043D\u044B \u0432 \u0414\u0443\u0431\u0430\u0435 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u2014 \u0414\u0430\u0443\u043D\u0442\u0430\u0443\u043D \u0414\u0443\u0431\u0430\u0439, \u041F\u0430\u043B\u044C\u043C\u0430 \u0414\u0436\u0443\u043C\u0435\u0439\u0440\u0430, \u0411\u0438\u0437\u043D\u0435\u0441-\u0411\u0435\u0439, \u0414\u0436\u0443\u043C\u0435\u0439\u0440\u0430 \u0412\u0438\u043B\u043B\u0438\u0434\u0436 \u0421\u0435\u0440\u043A\u043B, \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0448\u043D\u043B \u0421\u0438\u0442\u0438 \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435. \u0422\u0430\u043A\u0436\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0439\u043E\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0432\u0430\u0441 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C.
                            </p></div></li>
                    
                    <li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-4" aria-expanded="false"><span class="svelte-xinoe7">\u0412\u044B\u0433\u043E\u0434\u043D\u043E \u043B\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0414\u0443\u0431\u0430\u0435 \u0432 2023 \u0433\u043E\u0434\u0443?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u0426\u0435\u043D\u044B \u043D\u0430 \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0436\u0438\u043B\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0443\u0442 \u043A \u043A\u043E\u043D\u0446\u0443 2023 \u0433\u043E\u0434\u0430. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0414\u0443\u0431\u0430\u0435, \u0441\u0442\u0430\u0440\u0430\u044E\u0442\u0441\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0441\u0434\u0435\u043B\u043A\u0438 \u0434\u043E \u0442\u043E\u0433\u043E, \u043F\u043E\u043A\u0430 \u0446\u0435\u043D\u044B \u043D\u0435 \u043D\u0430\u0447\u0430\u043B\u0438 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u0442\u0438.
                            </p></div></li>
                    
                    <li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-5" aria-expanded="false"><span class="svelte-xinoe7">\u0412 \u0447\u0435\u043C \u043F\u043B\u044E\u0441\u044B \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0414\u0443\u0431\u0430\u0435?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u0414\u0443\u0431\u0430\u0439\u0441\u043A\u0438\u0439 \u0440\u044B\u043D\u043E\u043A \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E. \u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0434\u0435\u0441\u044C \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0436\u0438\u0434\u0430\u0442\u044C \u0435\u0435 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0430\u0442\u044C \u0435\u0435 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0435\u0449\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u0435\u043D\u0435\u0433, \u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u043F\u043E \u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435.
                            </p></div></li>
                    
                    <li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-6" aria-expanded="false"><span class="svelte-xinoe7">\u041A\u0430\u043A\u0430\u044F \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F \u0432 \u0414\u0443\u0431\u0430\u0435 \u0441\u0430\u043C\u0430\u044F \u0432\u044B\u0433\u043E\u0434\u043D\u0430\u044F?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-6" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u0421\u0430\u043C\u0430\u044F \u043B\u0443\u0447\u0448\u0430\u044F \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F \u0432 \u0414\u0443\u0431\u0430\u0435, \u0431\u0435\u0437\u0443\u0441\u043B\u043E\u0432\u043D\u043E, \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C\u044E. \u0414\u0443\u0431\u0430\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u0442\u0441\u044F \u0438 \u0440\u0430\u0441\u0442\u0435\u0442, \u0438 \u0441 \u043D\u0438\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0436\u0438\u0442\u0435\u043B\u0435\u0439, \u0436\u0438\u0432\u0443\u0449\u0438\u0445 \u0437\u0434\u0435\u0441\u044C. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0434\u0435\u0441\u044C \u0438 \u0441\u0434\u0430\u0432\u0430\u0442\u044C \u0435\u0435 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0446\u0430\u043C.
                            </p></div></li>
                    
                    <li class="svelte-xinoe7"><a data-bs-toggle="collapse" href="/" class="collapse collapsed svelte-xinoe7" data-bs-target="#accordion-list-7" aria-expanded="false"><span class="svelte-xinoe7">\u041A\u0430\u043A\u0438\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u044B\u0435 \u043A\u0430\u043C\u043D\u0438 \u0435\u0441\u0442\u044C \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0414\u0443\u0431\u0430\u0435?</span> 
                            <i class="bx bx-plus icon-show svelte-xinoe7"></i>
                            <i class="bx bx-minus icon-close svelte-xinoe7"></i></a>
                        <div id="accordion-list-7" class="collapse" data-bs-parent=".accordion-list" style=""><p>\u0421\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435, \u0447\u0442\u043E \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0435\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0414\u0443\u0431\u0430\u0435, \u044D\u0442\u043E \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435. \u0414\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0432\u044B \u0440\u0435\u0448\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0435\u0435 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C, \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u0414\u0440\u0443\u0433\u0438\u0435 \u0444\u0430\u043A\u0442\u043E\u0440\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0431\u043B\u0438\u0437\u043E\u0441\u0442\u044C \u043A \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443, \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0443\u0434\u043E\u0431\u0441\u0442\u0432 \u0432\u043E\u043A\u0440\u0443\u0433, \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0440\u044B\u043D\u043A\u0430 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u043A\u0443\u043F\u043A\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0447\u0438\u0441\u0442\u043E\u0442\u0430. \u0421 \u044D\u0442\u0438\u043C \u0438 \u043C\u043D\u043E\u0433\u0438\u043C \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u0430 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F Driven Properties, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0437\u0430\u0439\u043C\u0435\u0442\u0441\u044F \u0432\u0441\u0435\u043C\u0438 \u0445\u043B\u043E\u043F\u043E\u0442\u0430\u043C\u0438 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0437\u0430 \u0432\u0430\u0441.
                            </p></div></li></ul></div></div></div>
</section>`}),F=h((l,_,y,w)=>`${l.head+=`${l.title="<title>Property Areas in Dubai | Dubai Real Estate Communities</title>",""}<meta name="description" content="Get information on Dubai property areas & real estate projects by them like location info, amenities, nearby places, Contact us today for more details" data-svelte="svelte-13tmdn3">`,""}
    
    ${f(R,"DubaiAreaGuides").$$render(l,{},{},{})}`);export{F as default};