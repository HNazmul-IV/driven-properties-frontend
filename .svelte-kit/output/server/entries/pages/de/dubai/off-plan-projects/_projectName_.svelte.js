import{c as f,v as r,e as v,d as p,f as q,b as S,a as A}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as I}from"../../../../../immutable/chunks/stores-73de46f1.js";import{o as X}from"../../../../../immutable/chunks/base-url-ce329ce1.js";import{S as b,a as w,N as k,P as B}from"../../../../../immutable/chunks/swiper-slide-508ac6d1.js";import"../../../../../immutable/chunks/navigation.min-21928df4.js";import{L as F}from"../../../../../immutable/chunks/loader-8624fcbc.js";import{L as H}from"../../../../../immutable/chunks/LeadFormLeft-23e146c1.js";/* empty css                                                 */import"mapbox-gl";/* empty css                                                */import{Fancybox as M}from"@fancyapps/ui";/* empty css                                                                           *//* empty css                                                                           *//* empty css                                                                                  */const T={code:"#BannerHero.svelte-1iv8qm8 .image-container.svelte-1iv8qm8{background-size:cover !important;background-repeat:no-repeat !important}.banner-title.svelte-1iv8qm8.svelte-1iv8qm8{position:absolute;z-index:111111111;top:40vh;color:white;font-size:4em;font-weight:bold;display:flex;text-align:center;left:15vw;text-shadow:1px 1px 3px #000;left:15vw}.landing-banner-loader.svelte-1iv8qm8.svelte-1iv8qm8{margin:auto;text-align:center;position:absolute;left:45vw;top:40vh}@media(max-width: 768px){.banner-title.svelte-1iv8qm8.svelte-1iv8qm8{font-size:4em;font-weight:bold;display:flex;text-align:center;text-shadow:1px 1px 3px #000;left:0vw}}",map:null},V=f((o,e,t,m)=>{let{main_banner:i}=e,{baseUrl:l}=e,{title:a}=e;const s=()=>{console.log(a)};return e.main_banner===void 0&&t.main_banner&&i!==void 0&&t.main_banner(i),e.baseUrl===void 0&&t.baseUrl&&l!==void 0&&t.baseUrl(l),e.title===void 0&&t.title&&a!==void 0&&t.title(a),o.css.add(T),s(),`<section id="BannerHero" class="svelte-1iv8qm8">${i?"":`<div class="landing-banner-loader svelte-1iv8qm8">${r(F,"Loader").$$render(o,{},{},{})}</div>`}
    ${r(b,"Swiper").$$render(o,{class:"BannerHero swiper-container"},{},{default:()=>`${r(w,"SwiperSlide").$$render(o,{},{},{default:()=>`
            <div class="banner-title svelte-1iv8qm8">${v(a||"")}</div>
            ${r(H,"LeadFormLeft").$$render(o,{},{},{})}
            ${i?`<div class="image-container type-a svelte-1iv8qm8"${p("style",`background: url(${l}${i})`,0)}></div>
            `:""}`})}`})}</section>
`}),G=f((o,e,t,m)=>{let{animation:i="none"}=e,{animation_out:l="none; opacity: 0"}=e,{once:a=!1}=e,{top:s=0}=e,{bottom:c=0}=e,{css_observer:d=""}=e,{css_animation:n=""}=e;const u=q();let y=!0;const _=`__saos-${Math.random()}__`;return e.animation===void 0&&t.animation&&i!==void 0&&t.animation(i),e.animation_out===void 0&&t.animation_out&&l!==void 0&&t.animation_out(l),e.once===void 0&&t.once&&a!==void 0&&t.once(a),e.top===void 0&&t.top&&s!==void 0&&t.top(s),e.bottom===void 0&&t.bottom&&c!==void 0&&t.bottom(c),e.css_observer===void 0&&t.css_observer&&d!==void 0&&t.css_observer(d),e.css_animation===void 0&&t.css_animation&&n!==void 0&&t.css_animation(n),u("update",{observing:y}),`<div${p("id",_,0)}${p("style",d,0)}>${`<div style="${"animation: "+v(i,!0)+"; "+v(n,!0)}">${m.default?m.default({}):""}</div>`}</div>`});const N={code:"@media(max-width: 768px){#projectConcept.svelte-8zipkd{padding:60px 0}}@keyframes from-right{0%{transform:rotateX(0deg) translateX(-90vw) skewX(0deg);opacity:1}10%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes from-left{0%{transform:rotateX(0deg) translateX(-90vw) skewX(0deg);opacity:1}10%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}",map:null},O=f((o,e,t,m)=>{let{baseUrl:i}=e,{pc_main_title:l}=e,{pc_desc:a}=e,{pc_subtitle:s}=e,{pc_image:c}=e,d,n,u,y=[];const _=()=>{d=c?c.split(","):"",console.log(d)},h=()=>{n=s?s.split("@"):"",console.log(n)},x=()=>{u=a?a.split("@"):"",console.log(u)};return e.baseUrl===void 0&&t.baseUrl&&i!==void 0&&t.baseUrl(i),e.pc_main_title===void 0&&t.pc_main_title&&l!==void 0&&t.pc_main_title(l),e.pc_desc===void 0&&t.pc_desc&&a!==void 0&&t.pc_desc(a),e.pc_subtitle===void 0&&t.pc_subtitle&&s!==void 0&&t.pc_subtitle(s),e.pc_image===void 0&&t.pc_image&&c!==void 0&&t.pc_image(c),o.css.add(N),_(),h(),x(),`<section id="projectConcept" class="svelte-8zipkd"><div class="block block-concept project-concept"><div${p("class","",0)}>${r(G,"Saos").$$render(o,{animation:"from-right 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"},{},{default:()=>`<div data-aos="fade-right" class="aos-init aos-animate"><h2 class="opacity-2 display-2 bolder uppercase px-3 px-lg-0 DLPFonts Mgaps">${v(l||"Welcome To Dubai!")}</h2></div>`})}

            ${r(b,"Swiper").$$render(o,{class:"projectConcept swiper-container",navigation:!0,modules:[k]},{},{default:()=>`${S(y,g=>`${r(w,"SwiperSlide").$$render(o,{class:"concept-item__slide is-bg"},{},{default:()=>`<div class="concept-item"><div class="concept-item__media aos-init aos-animate" data-aos="fade-left"><figure class="blur-media mb-0"><picture class="picture"><img${p("src",`${i}${g.slides}`,0)} alt="Take a Deep" loading="lazy" class="blur-media__image"></picture>
                                </figure></div>
                            <div class="concept-item__body aos-init aos-animate" data-aos="fade-up"><div class="concept-item__content t--bg" style="background-color: #bcb164"><h3 class="title-sub t--color" style="color: #ffffff"><small style="color: #ffffff">${v(g.subtitle?g.subtitle:"")} </small></h3>
                                    <p class="concept-item__text" style="color: #505050">${v(g.description?g.description:"")}</p></div>
                            </div></div>                    
                    `})}`)}`})}</div></div>
    </section>
`});const W={code:"h3.title-sub.t--color.svelte-1q712da{font-size:40px;display:flex;flex-wrap:wrap}h2.opacity-2.display-2.bolder.uppercase.DLPFonts.Mgaps.svelte-1q712da{font-size:50px;display:flex;flex-wrap:wrap}",map:null},E=f((o,e,t,m)=>{let{locDis:i}=e,{lng:l=55.181215}=e,{lat:a=25.013484}=e;return console.log("fsdfsdf"),console.log("fsdfsdfasdfsdf"),console.log("sdfdsfdsfsdf"),e.locDis===void 0&&t.locDis&&i!==void 0&&t.locDis(i),e.lng===void 0&&t.lng&&l!==void 0&&t.lng(l),e.lat===void 0&&t.lat&&a!==void 0&&t.lat(a),o.css.add(W),`<section id="mapLocation" class="bg-light"><div class="container"><div class="block block-location">
            <div class="row no-gutters landing-location-container"><div class="col-lg-6 d-flex align-items-center"><div class="inner-column aos-init aos-animate" data-aos="fade-up"><h2 class="opacity-2 display-2 bolder uppercase DLPFonts Mgaps svelte-1q712da">\u041C\u0415\u0421\u0422\u041E\u041F\u041E\u041B\u041E\u0416\u0415\u041D\u0418\u0415 \u0418 \u0420\u0410\u0421\u0421\u0422\u041E\u042F\u041D\u0418\u042F</h2>
                        <h3 class="title-sub t--color svelte-1q712da">\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0440\u044F\u0434\u043E\u043C \u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C </h3>
                        <p>${v(i||"")}</p></div></div>

                <div class="col-lg-6"><div id="map" class="project-map aos-init aos-animate" data-aos="fade-up"></div></div></div></div>
        </div></section>
`});const J=f((o,e,t,m)=>{let{baseUrl:i}=e,{gallery:l}=e,a;const s=()=>{a=l?l.split(","):"",console.log(a)};return M.bind('[data-fancybox="gallery"]',{caption(c,d,n){return`${n.index+1} / ${d.slides.length} <br />`+n.caption}}),e.baseUrl===void 0&&t.baseUrl&&i!==void 0&&t.baseUrl(i),e.gallery===void 0&&t.gallery&&l!==void 0&&t.gallery(l),s(),`<section id="imgGallery"><div class="block block-gallery js-filter-gallery"><div class="container mb-3"><div class="row justify-content-between"><div class="col-md-12"><div data-aos="fade-right" class="aos-init aos-animate"><h2 class="opacity-2 display-2 bolder uppercase DLPFonts Mgaps">\u0413\u0410\u041B\u0415\u0420\u0415\u042F
                        </h2></div></div></div></div>
                
        ${r(b,"Swiper").$$render(o,{class:"swiper-container js-gallery swiper-container-initialized swiper-container-horizontal",slidesPerView:1,rewind:!0,navigation:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:10}},modules:[B,k]},{},{default:()=>`${S(a,c=>`${r(w,"SwiperSlide").$$render(o,{class:"concept-item__slide is-bg"},{},{default:()=>`<a${p("href",`${i}${c}`,0)} class="fancybox" data-caption="First image" data-fancybox="gallery"><img${p("src",`${i}${c}`,0)} alt="Outdoor Images" loading="lazy" class="w-100"></a>
                `})}`)}`})}</div>     
    </section>`}),K=f((o,e,t,m)=>{let{baseUrl:i}=e,{cta_title:l}=e,{cta_banner:a}=e,{cta_subtitle:s}=e,{cta_description:c}=e;return e.baseUrl===void 0&&t.baseUrl&&i!==void 0&&t.baseUrl(i),e.cta_title===void 0&&t.cta_title&&l!==void 0&&t.cta_title(l),e.cta_banner===void 0&&t.cta_banner&&a!==void 0&&t.cta_banner(a),e.cta_subtitle===void 0&&t.cta_subtitle&&s!==void 0&&t.cta_subtitle(s),e.cta_description===void 0&&t.cta_description&&c!==void 0&&t.cta_description(c),`<section id="ctaction"><div class="block block-vh align-items-stretch block-project-feature"><picture class="picture project-feature__media">
            
            <img${p("src",`${i}${a}`,0)} alt="Docs Demo" loading="lazy" class="slider-image"></picture>
        <div class="container d-flex"><div class="project-feature ml-auto aos-init aos-animate" data-aos="fade-up"><div class="project-feature__item"><h3 class="title-sub t--color"><span style="color:#ffffff"><small>${v(l||"CTA Title")}</small>${v(s||"CTA Subtitle")}</span></h3>
                    <p style="color:#ffffff;background: #0000004d;">${v(c||"CTA Description")}</p></div></div></div></div>
    
    
</section>`});const Q={code:"#Sfc.svelte-mwxm0y{background-color:#f5f5f5}@media(max-width: 768px){.opportunity.svelte-mwxm0y{text-align:center}}",map:null},R=f((o,e,t,m)=>{let{baseUrl:i}=e,{sfc:l}=e,{sfcSlides:a}=e,{sfcCaption:s}=e,c,d=[],n;const u=()=>{n=s?s.split("@"):"",console.log(n)},y=()=>{c=a?a.split(","):"",console.log(c,l)};return e.baseUrl===void 0&&t.baseUrl&&i!==void 0&&t.baseUrl(i),e.sfc===void 0&&t.sfc&&l!==void 0&&t.sfc(l),e.sfcSlides===void 0&&t.sfcSlides&&a!==void 0&&t.sfcSlides(a),e.sfcCaption===void 0&&t.sfcCaption&&s!==void 0&&t.sfcCaption(s),o.css.add(Q),y(),u(),`<section id="Sfc" class="svelte-mwxm0y">${`<div><div class="opportunity svelte-mwxm0y"><div class="opportunity-heading aos-init aos-animate" data-aos="fade-up"><h2 class="opacity-2 display-2 bolder uppercase">\u0423\u0414\u041E\u0411\u0421\u0422\u0412\u0410</h2></div>
                <div class="opportunity-body aos-init aos-animate" data-aos="fade-up">${v(l||"")}</div></div>
            ${r(b,"Swiper").$$render(o,{class:"projectConcept swiper-container",navigation:!0,modules:[k]},{},{default:()=>`${S(d,_=>`${r(w,"SwiperSlide").$$render(o,{class:"concept-item__slide is-bg"},{},{default:()=>`<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0"><div class="opportunity-media"><figure class="blur-media"><img${p("src",`${i}${_.slides}`,0)}${p("alt",_.slides,0)} loading="lazy"> 
                                <figcaption class="opportunity-media__text">${v(_.captions)}</figcaption></figure>
                        </div></div>
                `})}`)}`})}</div>`}
</section>`});const Y={code:"#ProjectContactUs.svelte-11bsw9x{padding-top:60px}",map:null},Z=f((o,e,t,m)=>(o.css.add(Y),`<section id="ProjectContactUs" class="svelte-11bsw9x"><div class="py-3 py-lg-4 bottom-contact"><div class="container"><div class="row"><div class="col-lg-6 bottom-contact__buttons aos-init aos-animate" data-aos="fade-up"><div class="bottom-contact__body"><h3 class="headline mb-md-4 t--color opacity-7">How Can We Help?               </h3>
                    <div class="row gutter-half my-3 mb-lg-0"><div class="col-6 col-xl-5"><a href="tel:+97144297040" class="btn btn-primary btn-lg btn-block rounded-lg">Contact                      </a></div>
                        
                                            <div class="col-6 col-xl-5"><a href="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding. https://landing.drivenproperties.com/docs-demo"><svg viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg></a></div></div></div></div>
                <div class="col-lg-6 bottom-contact__phone aos-init aos-animate" data-aos="fade-up"><p class="home-contact__text t--color">To make an appointment online</p>
                    <a href="tel:800374836" class="home-contact__phone t--color">800 37 48 36 </a></div></div></div></div>
    
    
</section>`)),$=f((o,e,t,m)=>{let i,l;l=A(I,P=>i=P);let a=`${X}/theme/assets/images/landing/`,s,c,d,n,u,y,_,h,x,g,C,U,j,L,z,D;return i.url.pathname.split("/"),l(),`${r(V,"BannerHeroPicture").$$render(o,{baseUrl:a,main_banner:s,title:c},{},{})}
${r(O,"ProjectConcept").$$render(o,{pc_main_title:c,pc_image:n,pc_subtitle:d,pc_desc:u,baseUrl:a},{},{})}
${r(E,"MapLocation").$$render(o,{locDis:g,lng:C,lat:U},{},{})}
${r(J,"ImageGallery").$$render(o,{baseUrl:a,gallery:x},{},{})}
${r(K,"CTAction").$$render(o,{baseUrl:a,cta_title:j,cta_banner:z,cta_subtitle:L,cta_description:D},{},{})}
${r(R,"SFC").$$render(o,{sfc:y,baseUrl:a,sfcSlides:_,sfcCaption:h},{},{})}


${r(Z,"ContactUs").$$render(o,{},{},{})}`}),fe=f((o,e,t,m)=>`${r($,"OffPlanProjects").$$render(o,{},{},{})}`);export{fe as default};