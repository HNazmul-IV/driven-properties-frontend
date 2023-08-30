import{c as _,v as m,b as T,d as v,e as l,a as P}from"../../../../../../../immutable/chunks/index-7b7abb97.js";import{p as $}from"../../../../../../../immutable/chunks/stores-73de46f1.js";import h from"algoliasearch";import{B as b}from"../../../../../../../immutable/chunks/breadcrumb-1200daf2.js";import{S as N}from"../../../../../../../immutable/chunks/SEOText-c0882b30.js";import{S as p,P as C,N as g,a as A}from"../../../../../../../immutable/chunks/swiper-slide-508ac6d1.js";import"../../../../../../../immutable/chunks/navigation.min-21928df4.js";import{L as R}from"../../../../../../../immutable/chunks/lazy-405eb648.js";import{A as E,f as y,T as f,V as G}from"../../../../../../../immutable/chunks/visitForm-a97eaa39.js";/* empty css                                                       */import{c as w,C as L}from"../../../../../../../immutable/chunks/others-c2922311.js";import"../../../../../../../immutable/chunks/helpers-b1dcc375.js";import"../../../../../../../immutable/chunks/Select-7c592fb8.js";/* empty css                                                                                 */let I="/assets/images/265x230.jpg";const x=_((d,t,s,u)=>{let{images:o}=t,{title:a}=t,c=null;return t.images===void 0&&s.images&&o!==void 0&&s.images(o),t.title===void 0&&s.title&&a!==void 0&&s.title(a),`<div class="g-0 container"><div class="g-0 row"><div class="g-0 col-sm"><div id="MyImgGallery">${m(p,"Swiper").$$render(d,{lazy:!0,autoplay:{delay:3e3,disableOnInteraction:!1},rewind:!0,navigation:!0,pagination:{dynamicBullets:!0},loop:!0,spaceBetween:10,thumbs:{swiper:c},modules:[E,R,C,g,y,f],class:"mySwiper"},{},{default:()=>`${T(o.image,(r,n)=>`${m(A,"SwiperSlide").$$render(d,{},{},{default:()=>`<img${v("data-src",r,0)}${v("src",I,0)} class="swiper-lazy"${v("alt",a,0)}>
                        `})}`)}`})}</div>
            
            <div id="MyImgThub">${m(p,"Swiper").$$render(d,{spaceBetween:10,slidesPerView:8,loop:!0,freeMode:!0,watchSlidesProgress:!0,modules:[g,y,f],class:"mySwiper2"},{},{default:()=>`${T(o.image,(r,n)=>`${m(A,"SwiperSlide").$$render(d,{},{},{default:()=>`<img${v("src",r,0)} class="swiper-lazy"${v("alt",a,0)}>
                    `})}`)}`})}</div></div></div></div>`}),H=_((d,t,s,u)=>{let{Price:o}=t,{AreaSize:a}=t,{bathroom:c}=t,{Beds:r}=t;return t.Price===void 0&&s.Price&&o!==void 0&&s.Price(o),t.AreaSize===void 0&&s.AreaSize&&a!==void 0&&s.AreaSize(a),t.bathroom===void 0&&s.bathroom&&c!==void 0&&s.bathroom(c),t.Beds===void 0&&s.Beds&&r!==void 0&&s.Beds(r),`<div class="g-0 container mt-5 mb-5"><div id="PropertySpec"><div class="g-0 row"><div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/01-tags.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${l(w(o))} / ${l(L(o))}</div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/bed.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${l(r)} Beds
                    </div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/solid/shower.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${l(c)} Bath
                    </div></div></div>

            <div class="g-0 col-sm myRows"><div class="row"><div class="col-sm-12 text-center"><img src="/assets/svgs/brands/codepen.svg" class="myIconSvg"></div>

                    <div class="col-sm-12 mt-2 mb-2 text-center">${l(a)}</div></div></div></div></div></div>`}),B=_((d,t,s,u)=>{let{lists:o=[]}=t,{WebContent:a}=t;return t.lists===void 0&&s.lists&&o!==void 0&&s.lists(o),t.WebContent===void 0&&s.WebContent&&a!==void 0&&s.WebContent(a),`<div class="g-0 container"><div class="row"><div class="col-sm-12"><h3>Property Overview</h3></div></div></div>

<div class="container mt-4 mb-4" id="DPTxtBg">${o.length>0?`<div class="row"><div id="Facilities"><ul>${T(o,(c,r)=>`<li><!-- HTML_TAG_START -->${c}<!-- HTML_TAG_END -->
                        </li>`)}</ul></div></div>`:""}

    <div class="row mt-4" id="DPTxtContent"><div class="col-sm-12"><!-- HTML_TAG_START -->${a}<!-- HTML_TAG_END --></div></div></div>`}),M=_((d,t,s,u)=>`<div class="g-0 container"><div class="row"><div class="col-sm-12 mt-4"><h3>Arrange To View This Property</h3></div></div></div>

${m(G,"VisitContactFrom").$$render(d,{},{},{})}`),O=_((d,t,s,u)=>{let{agentName:o}=t,{agentEmail:a}=t,{agentPhone:c}=t,{agentimage:r}=t,{title:n}=t,{RefNo:e}=t,i=[];return t.agentName===void 0&&s.agentName&&o!==void 0&&s.agentName(o),t.agentEmail===void 0&&s.agentEmail&&a!==void 0&&s.agentEmail(a),t.agentPhone===void 0&&s.agentPhone&&c!==void 0&&s.agentPhone(c),t.agentimage===void 0&&s.agentimage&&r!==void 0&&s.agentimage(r),t.title===void 0&&s.title&&n!==void 0&&s.title(n),t.RefNo===void 0&&s.RefNo&&e!==void 0&&s.RefNo(e),`<div class="g-0 container" id="Agents"><div class="g-0 row"><div class="g-0 col-sm-12 mb-3"><img${v("src",i.tmimgname?"/l9images/teams/"+i.tmimgname:r,0)}${v("alt",o,0)}></div>

        <div class="g-0 col-sm-12"><h4><!-- HTML_TAG_START -->${i.fullname?i.fullname:o}<!-- HTML_TAG_END --></h4></div>

        <div class="g-0 col-sm-12"><p><strong><!-- HTML_TAG_START -->${i.jobtitle?i.jobtitle:"Required"}<!-- HTML_TAG_END --></strong></p></div>

        <div class="g-0 col-sm-12"><div class="row"><div class="col-sm-4"><p><i class="bx bi-volume-up myspeack"></i> 
                        Speaks
                    </p></div>

                <div class="col-sm"><p><!-- HTML_TAG_START -->${i.knlanguage?i.knlanguage:"English, Arabic, French"}<!-- HTML_TAG_END --></p></div></div></div>

        <div class="g-0 col-sm-12">
            <a href="${"tel:+"+l(c.replaceAll("+","").replaceAll(" ",""),!0)}" class="btn btn-secondary btPhone w-100"><i class="bx bi-telephone"></i> 
                Call Now
            </a></div>

        <div class="g-0 col-sm-12 mt-2 mb-2">
            <a class="btn btn-secondary btWhatsapp w-100" href="${"https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding "+l(n,!0)+" Reference No. "+l(e,!0)}"><i class="bx bi-whatsapp"></i> 
                WhatsApp
            </a></div></div></div>`}),F="48O3SXQXMR",k="ec1af9fe04b917db992f934e4b96b695",z="tbl_properties",S=_((d,t,s,u)=>{h(F,k).initIndex(z);let{agentPhone:a}=t,{agentName:c}=t,{QueryCommunity:r}=t,n=[r],e=[];return console.log(n),t.agentPhone===void 0&&s.agentPhone&&a!==void 0&&s.agentPhone(a),t.agentName===void 0&&s.agentName&&c!==void 0&&s.agentName(c),t.QueryCommunity===void 0&&s.QueryCommunity&&r!==void 0&&s.QueryCommunity(r),`${e.length>0?`<div class="g-0 container mt-5 mb-5"><div class="g-0 row"><div class="g-0 col-sm"><div id="SimilarProperties"><h5>Similar Properties</h5>

                <div class="g-0 row mb-3 mt-3">${T(e,i=>`<a href="${"/"+l(i.Emirate.toLowerCase(),!0)+"/"+l(i.Unit_Type.toLowerCase(),!0)+"-for-"+l(i.Ad_Type.toLowerCase(),!0)+"/"+l(i.Community.toLowerCase().replaceAll(" ","-"),!0)+"/"+l(i.Property_Name.toLowerCase().replaceAll(" ","-"),!0)+"/"+l(i.Property_Ref_No.toLowerCase(),!0)}" class=""><div class="col-sm-12"><img class="img-fluid" alt="a" src="https://cdn.crm.drivenproperties.com/image/original/listings/listing/2020/05/07/092156704/photos/3e8a2026-hdr.jpg">
                                <h6 class="mt-3"><!-- HTML_TAG_START -->${i.Property_Title?i.Property_Title:"Spacious | High Floor | Ready to move in"}<!-- HTML_TAG_END --></h6>
                                <p><!-- HTML_TAG_START -->${i.Unit_Type&&i.Ad_Type?i.Unit_Type+" For "+i.Ad_Type:"Apartment For Sale"}<!-- HTML_TAG_END --></p>
                                <p><i></i>
                                    <!-- HTML_TAG_START -->${i.Community&&i.Sub_Community?i.Sub_Community+" "+i.Community:"BLVD Heights Tower 2, Downtown Dubai"}<!-- HTML_TAG_END --></p>
                                <p><strong>AED ${l(w(i.Price))} / ${l(L(i.Price))}</strong></p></div>
                        </a>`)}</div></div></div></div></div>`:""}`});const V={code:"#about.svelte-1s22ote{padding:20px 0 100px 0}@media only screen and (max-width: 768px){section.svelte-1s22ote{padding:0}}",map:null},W="48O3SXQXMR",Q="ec1af9fe04b917db992f934e4b96b695",U="tbl_properties",ae=_((d,t,s,u)=>{let o,a;a=P($,e=>o=e),h(W,Q).initIndex(U);let r=o.url.pathname.split("/"),n=[];return d.css.add(V),a(),`

${m(b,"BreadCrumb").$$render(d,{LinkOne:r[1],LinkTwo:r[2],LinkThree:r[3],LinkFour:r[4],LinkFive:r[5],Bdtype:6},{},{})}

<section id="about" class="about svelte-1s22ote"><div class="container aos-init aos-animate" data-aos="fade-up">${T(n,e=>`${m(N,"SEOTools").$$render(d,{MetaTitle:e.Property_Title&&e.Property_Ref_No?`${e.Property_Title} DIP - ${e.Property_Ref_No}`:"",MetaDescription:`Driven Properties are pleased to offer for ${e.Ad_Type} this brand new property in ${e.Sub_Community} - ${e.Community}. Details: ${e.Property_Title}  - Ref No: ${e.Property_Ref_No}`},{},{})}
            <div class="section-title"><h2><!-- HTML_TAG_START -->${e.Property_Title?e.Property_Title:"Property Title"}<!-- HTML_TAG_END -->                    
                </h2></div>

            <div class="row mb-5"><div class="col-sm-9"><!-- HTML_TAG_START -->${e.Sub_Community&&e.Community?e.Sub_Community+" - "+e.Community:"Property Name"}<!-- HTML_TAG_END --></div>

                <div class="col-sm-3">Reference:
                    <strong><!-- HTML_TAG_START -->${e.Property_Ref_No?e.Property_Ref_No:"Dp-S-40015"}<!-- HTML_TAG_END --></strong>
                </div></div>
            

            <div class="row"><div class="col-sm-9">${m(x,"DSliders").$$render(d,{images:e.Images,title:e.Property_Title},{},{})}

                    ${m(H,"PropertySpcs").$$render(d,{Price:e.Price,Beds:e.Bedrooms,bathroom:e.No_of_Bathroom,AreaSize:e.Unit_Builtup_Area+" "+e.unit_measure},{},{})}
                    
                    ${m(B,"PropertTxtContent").$$render(d,{lists:e.Facilities?e.Facilities.facility:"",WebContent:e.Web_Remarks},{},{})}

                    ${m(M,"PropertVisit").$$render(d,{},{},{})}</div>

                <div class="col-sm-3">${m(O,"Agents").$$render(d,{agentimage:e.Listing_Agent_Photo,agentName:e.Listing_Agent,agentEmail:e.Listing_Agent_Email,agentPhone:e.Listing_Agent_Phone.replaceAll("++",""),title:e.Property_Title,RefNo:e.Property_Ref_No},{},{})}

                    ${m(S,"SimilarProperty").$$render(d,{agentName:e.Listing_Agent,agentPhone:e.Listing_Agent_Phone,QueryCommunity:e.Community},{},{})}

                </div></div>
            `)}</div></section>
`});export{ae as default};
