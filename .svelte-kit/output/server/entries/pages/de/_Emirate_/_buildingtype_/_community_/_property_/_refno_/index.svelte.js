import{c as _,v as m,b as T,d as v,e as c,a as w}from"../../../../../../../../immutable/chunks/index-7b7abb97.js";import{p as P}from"../../../../../../../../immutable/chunks/stores-73de46f1.js";import h from"algoliasearch";import{B as $}from"../../../../../../../../immutable/chunks/breadcrumb-1200daf2.js";import{S as b}from"../../../../../../../../immutable/chunks/SEOText-c0882b30.js";import{S as p,P as N,N as g,a as A}from"../../../../../../../../immutable/chunks/swiper-slide-508ac6d1.js";import"../../../../../../../../immutable/chunks/navigation.min-21928df4.js";import{L as C}from"../../../../../../../../immutable/chunks/lazy-405eb648.js";import{A as R,f,T as y,V as E}from"../../../../../../../../immutable/chunks/visitForm-a97eaa39.js";/* empty css                                                          */import{C as L}from"../../../../../../../../immutable/chunks/others-c2922311.js";import"../../../../../../../../immutable/chunks/helpers-b1dcc375.js";import"../../../../../../../../immutable/chunks/Select-7c592fb8.js";/* empty css                                                                                    */let G="/assets/images/265x230.jpg";const x=_((l,t,s,u)=>{let{images:r}=t,{title:a}=t,d=null;return t.images===void 0&&s.images&&r!==void 0&&s.images(r),t.title===void 0&&s.title&&a!==void 0&&s.title(a),`<div class="g-0 container"><div class="g-0 row"><div class="g-0 col-sm">

            <div id="MyImgGallery">${m(p,"Swiper").$$render(l,{lazy:!0,autoplay:{delay:3e3,disableOnInteraction:!1},rewind:!0,navigation:!0,pagination:{dynamicBullets:!0},loop:!0,spaceBetween:10,thumbs:{swiper:d},modules:[R,C,N,g,f,y],class:"mySwiper"},{},{default:()=>`${T(r.image,(o,n)=>`${m(A,"SwiperSlide").$$render(l,{},{},{default:()=>`<img${v("data-src",o,0)}${v("src",G,0)} class="swiper-lazy"${v("alt",a,0)}>
                        `})}`)}`})}</div>
            
            <div id="MyImgThub">${m(p,"Swiper").$$render(l,{spaceBetween:10,slidesPerView:8,loop:!0,freeMode:!0,watchSlidesProgress:!0,modules:[g,f,y],class:"mySwiper2"},{},{default:()=>`${T(r.image,(o,n)=>`${m(A,"SwiperSlide").$$render(l,{},{},{default:()=>`<img${v("src",o,0)} class="swiper-lazy"${v("alt",a,0)}>
                    `})}`)}`})}</div></div></div>
</div>`}),H=_((l,t,s,u)=>{let{Price:r}=t,{AreaSize:a}=t,{bathroom:d}=t,{Beds:o}=t;const n=()=>{console.log(o)};return t.Price===void 0&&s.Price&&r!==void 0&&s.Price(r),t.AreaSize===void 0&&s.AreaSize&&a!==void 0&&s.AreaSize(a),t.bathroom===void 0&&s.bathroom&&d!==void 0&&s.bathroom(d),t.Beds===void 0&&s.Beds&&o!==void 0&&s.Beds(o),n(),`<div class="g-0 container mt-5 mb-5"><div id="PropertySpec"><div class="g-0 row"><div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/01-tags.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${c(L(r*.27))} USD
                    </div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/bed.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${c(o.split("-")[0])} \u043A\u0440\u043E\u0432\u0430\u0442\u0438
                    </div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/shower.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${c(d)} \u0432\u0430\u043D\u043D\u0430
                    </div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/brands/codepen.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${c(a.split(" ")[0])} \u043A\u0432. \u0444\u0443\u0442
                    </div></div></div></div></div></div>`}),I=_((l,t,s,u)=>{let{lists:r=[]}=t,{WebContent:a}=t;return t.lists===void 0&&s.lists&&r!==void 0&&s.lists(r),t.WebContent===void 0&&s.WebContent&&a!==void 0&&s.WebContent(a),`<div class="g-0 container"><div class="row"><div class="col-sm-12">
            <h3>\u041E\u0431\u0437\u043E\u0440 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438</h3></div></div></div>

<div class="container mt-4 mb-4" id="DPTxtBg">${r.length>0?`<div class="row"><div id="Facilities"><ul>${T(r,(d,o)=>`<li><!-- HTML_TAG_START -->${d}<!-- HTML_TAG_END -->
                        </li>`)}</ul></div></div>`:""}

    <div class="row mt-4" id="DPTxtContent"><div class="col-sm-12"><!-- HTML_TAG_START -->${a}<!-- HTML_TAG_END --></div></div></div>`}),B=_((l,t,s,u)=>`<div class="g-0 container"><div class="row"><div class="col-sm-12 mt-4"><h3>Arrange To View This Property</h3></div></div></div>

${m(E,"VisitContactFrom").$$render(l,{},{},{})}`),M=_((l,t,s,u)=>{let{agentName:r}=t,{agentEmail:a}=t,{agentPhone:d}=t,{agentimage:o}=t,{title:n}=t,{RefNo:e}=t,i=[];return t.agentName===void 0&&s.agentName&&r!==void 0&&s.agentName(r),t.agentEmail===void 0&&s.agentEmail&&a!==void 0&&s.agentEmail(a),t.agentPhone===void 0&&s.agentPhone&&d!==void 0&&s.agentPhone(d),t.agentimage===void 0&&s.agentimage&&o!==void 0&&s.agentimage(o),t.title===void 0&&s.title&&n!==void 0&&s.title(n),t.RefNo===void 0&&s.RefNo&&e!==void 0&&s.RefNo(e),`<div class="g-0 container" id="Agents"><div class="g-0 row"><div class="g-0 col-sm-12 mb-3"><img${v("src",i.tmimgname?"/l9images/teams/"+i.tmimgname:o,0)}${v("alt",r,0)}></div>

        <div class="g-0 col-sm-12"><h4><!-- HTML_TAG_START -->${i.fullname?i.fullname:r}<!-- HTML_TAG_END --></h4></div>

        <div class="g-0 col-sm-12"><p><strong><!-- HTML_TAG_START -->${i.jobtitle?i.jobtitle:"Required"}<!-- HTML_TAG_END --></strong></p></div>

        <div class="g-0 col-sm-12"><div class="row"><div class="col-sm-4"><p><i class="bx bi-volume-up myspeack"></i> 
                        Speaks
                    </p></div>

                <div class="col-sm"><p><!-- HTML_TAG_START -->${i.knlanguage?i.knlanguage:"English, Arabic, French"}<!-- HTML_TAG_END --></p></div></div></div>

        <div class="g-0 col-sm-12">
            <a href="${"tel:+"+c(d.replaceAll("+","").replaceAll(" ",""),!0)}" class="btn btn-secondary btPhone w-100"><i class="bx bi-telephone"></i> 
                \u043F\u043E\u0437\u0432\u043E\u043D\u0438 \u0441\u0435\u0439\u0447\u0430\u0441
            </a></div>

        <div class="g-0 col-sm-12 mt-2 mb-2">
            <a class="btn btn-secondary btWhatsapp w-100" href="${"https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+c(n,!0)+" Reference No. "+c(e,!0)}"><i class="bx bi-whatsapp"></i> 
                WhatsApp
            </a></div></div></div>`}),O="48O3SXQXMR",F="ec1af9fe04b917db992f934e4b96b695",S="tbl_properties",k=_((l,t,s,u)=>{h(O,F).initIndex(S);let{agentPhone:a}=t,{agentName:d}=t,{QueryCommunity:o}=t,n=[o],e=[];return console.log(n),t.agentPhone===void 0&&s.agentPhone&&a!==void 0&&s.agentPhone(a),t.agentName===void 0&&s.agentName&&d!==void 0&&s.agentName(d),t.QueryCommunity===void 0&&s.QueryCommunity&&o!==void 0&&s.QueryCommunity(o),`${e.length>0?`<div class="g-0 container mt-5 mb-5"><div class="g-0 row"><div class="g-0 col-sm"><div id="SimilarProperties"><h5>Similar Properties</h5>

                <div class="g-0 row mb-3 mt-3">${T(e,i=>`<a href="${"/ru/"+c(i.Emirate.toLowerCase(),!0)+"/"+c(i.Unit_Type.toLowerCase(),!0)+"-for-"+c(i.Ad_Type.toLowerCase(),!0)+"/"+c(i.Community.toLowerCase().replaceAll(" ","-"),!0)+"/"+c(i.Property_Name.toLowerCase().replaceAll(" ","-"),!0)+"/"+c(i.Property_Ref_No.toLowerCase(),!0)}" class=""><div class="col-sm-12"><img class="img-fluid" alt="a" src="https://cdn.crm.drivenproperties.com/image/original/listings/listing/2020/05/07/092156704/photos/3e8a2026-hdr.jpg">
                                <h6 class="mt-3"><!-- HTML_TAG_START -->${i.Property_Title?i.Property_Title:"Spacious | High Floor | Ready to move in"}<!-- HTML_TAG_END --></h6>
                                <p><!-- HTML_TAG_START -->${i.Unit_Type&&i.Ad_Type?i.Unit_Type+" For "+i.Ad_Type:"Apartment For Sale"}<!-- HTML_TAG_END --></p>
                                <p><i></i>
                                    <!-- HTML_TAG_START -->${i.Community&&i.Sub_Community?i.Sub_Community+" "+i.Community:"BLVD Heights Tower 2, Downtown Dubai"}<!-- HTML_TAG_END --></p>
                                <p><strong>${c(L(i.Price*.27))} USD</strong></p></div>
                        </a>`)}</div></div></div></div></div>`:""}`});const z={code:"#about.svelte-1s22ote{padding:20px 0 100px 0}@media only screen and (max-width: 768px){section.svelte-1s22ote{padding:0}}",map:null},U="48O3SXQXMR",V="ec1af9fe04b917db992f934e4b96b695",W="tbl_properties",re=_((l,t,s,u)=>{let r,a;a=w(P,e=>r=e),h(U,V).initIndex(W);let o=r.url.pathname.split("/"),n=[];return l.css.add(z),a(),`
${m($,"BreadCrumb").$$render(l,{LinkOne:o[1],LinkTwo:o[2],LinkThree:o[3],LinkFour:o[4],LinkFive:o[5],Bdtype:6},{},{})}

<section id="about" class="about svelte-1s22ote"><div class="container aos-init aos-animate" data-aos="fade-up">${T(n,e=>`${m(b,"SEOTools").$$render(l,{MetaTitle:e.Property_Title&&e.Property_Ref_No?`${e.Property_Title} DIP - ${e.Property_Ref_No}`:"",MetaDescription:`Driven Properties are pleased to offer for ${e.Ad_Type} this brand new property in ${e.Sub_Community} - ${e.Community}. Details: ${e.Property_Title}  - Ref No: ${e.Property_Ref_No}`},{},{})}


            <div class="section-title"><h2><!-- HTML_TAG_START -->${e.Property_Title?e.Property_Title:"Property Title"}<!-- HTML_TAG_END -->                    
                </h2></div>

            <div class="row mb-5"><div class="col-sm-9"><!-- HTML_TAG_START -->${e.Sub_Community&&e.Community?e.Sub_Community+" - "+e.Community:"Property Name"}<!-- HTML_TAG_END --></div>

                <div class="col-sm-3">\u0441\u0441\u044B\u043B\u043A\u0430:
                    <strong><!-- HTML_TAG_START -->${e.Property_Ref_No?e.Property_Ref_No:"Dp-S-40015"}<!-- HTML_TAG_END --></strong>
                </div></div>
            

            <div class="row"><div class="col-sm-9">${m(x,"DSliders").$$render(l,{images:e.Images,title:e.Property_Title},{},{})}

                    ${m(H,"PropertySpcs").$$render(l,{Price:e.Price,Beds:e.Bedrooms,bathroom:e.No_of_Bathroom,AreaSize:e.Unit_Builtup_Area+" "+e.unit_measure},{},{})}
                    
                    ${m(I,"PropertTxtContent").$$render(l,{lists:e.Facilities?e.Facilities.facility:"",WebContent:e.Web_Remarks},{},{})}

                    ${m(B,"PropertVisit").$$render(l,{},{},{})}</div>

                <div class="col-sm-3">${m(M,"Agents").$$render(l,{agentimage:e.Listing_Agent_Photo,agentName:e.Listing_Agent,agentEmail:e.Listing_Agent_Email,agentPhone:e.Listing_Agent_Phone.replaceAll("++",""),title:e.Property_Title,RefNo:e.Property_Ref_No},{},{})}

                    ${m(k,"SimilarProperty").$$render(l,{agentName:e.Listing_Agent,agentPhone:e.Listing_Agent_Phone,QueryCommunity:e.Community},{},{})}

                </div></div>
            `)}</div></section>
`});export{re as default};
