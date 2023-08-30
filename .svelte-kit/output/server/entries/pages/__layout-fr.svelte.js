import{c as f,a as S,f as z,d as v,v as c,b as $,e,n as x}from"../../immutable/chunks/index-7b7abb97.js";import{p as _}from"../../immutable/chunks/stores-73de46f1.js";import{T as F,a as L,b as w,c as T}from"../../immutable/chunks/TabPanel-bb9f395f.js";import{S as E}from"../../immutable/chunks/Select-7c592fb8.js";import{R as A}from"../../immutable/chunks/RangeSlider-6678e381.js";/* empty css                                    *//* empty css                                                                    */import"../../immutable/chunks/index-5fb08a48.js";/* empty css                                                                  */const R={code:".price-block.svelte-1ghvwlz.svelte-1ghvwlz{position:relative;display:inline-block;width:40%;color:#999;font-weight:bold}.price-block.svelte-1ghvwlz .price.svelte-1ghvwlz{padding:13px 5px 0px 53px;width:100%;font-size:15px;color:#666}.price-block.svelte-1ghvwlz .price-symbol.svelte-1ghvwlz{position:absolute;font-size:12px;color:#666;left:4px;top:18px}.price-block.svelte-1ghvwlz label.svelte-1ghvwlz{position:absolute;font-size:13px;left:3px;font-weight:500;color:black}.dash-sign.svelte-1ghvwlz.svelte-1ghvwlz{display:inline;margin:0px 10px 10px !important;font-weight:bold;font-size:30px;color:#999}.input-group.svelte-1ghvwlz.svelte-1ghvwlz{display:flex !important}button.headerSearch-button.svelte-1ghvwlz.svelte-1ghvwlz{border:1px solid white;border-radius:none;width:100%}#DrvnSlider.svelte-1ghvwlz input.svelte-1ghvwlz{display:inline-block}.range-slider-input-container.svelte-1ghvwlz.svelte-1ghvwlz{text-align:center;display:flex;flex-flow:wrap-reverse}#FSRONE.svelte-1ghvwlz.svelte-1ghvwlz{height:52px;width:100%;padding:10px 20px;border-radius:0;background-position:right 1.13rem center !important}@media only screen and (max-width: 768px){.BxInfo-row.svelte-1ghvwlz.svelte-1ghvwlz{padding:0 10px}}",map:null};let D="";const k=f((s,a,t,u)=>{let o,p;p=S(_,l=>o=l);let{BedRoomType:g=[]}=a,{PropertyType:n=[]}=a,{status:i}=a;o.url.pathname.split("/");let m=[];console.log(D),z();let y=" ",d=[0,15e7];a.BedRoomType===void 0&&t.BedRoomType&&g!==void 0&&t.BedRoomType(g),a.PropertyType===void 0&&t.PropertyType&&n!==void 0&&t.PropertyType(n),a.status===void 0&&t.status&&i!==void 0&&t.status(i),s.css.add(R);let h,r;do h=!0,r=`<div class="row header-search"><div class="col-lg-12 aos-init aos-animate" data-aos="fade-up"><form><div class="row BxInfo-row svelte-1ghvwlz"><div class="combine-status-community row mb-2 mt-2"><div class="col-lg-2 col-md-6 status-search"><select id="FSRONE" name="status" class="form-select frsone svelte-1ghvwlz"><option value="sale">For Sale </option><option value="rent">For Rent </option></select></div>
                    
                    <div${v("class","col-lg-10  col-md-6 community-search",0)}><div class="input-group svelte-1ghvwlz" id="MyCommunityLists1">${c(E,"Select").$$render(s,{items:m,optionIdentifier:l=>l.agserach,getSelectionLabel:l=>l.agserach,getOptionLabel:l=>l.agserach,placeholder:"Rechercher un emplacement ou un projet (par exemple, Business Bay)\u2026.",showIndicator:"true",isClearable:"true",noOptionsMessage:"We can't find your search query. Please check your spelling or try a different location."},{},{})}
                            <input type="hidden" name="protitle" id="Community"${v("value",y.agserach,0)}></div></div></div>

                
                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="protype" class="form-select frsone svelte-1ghvwlz"><option selected value="Type de propri\xE9t\xE9">Type de propri\xE9t\xE9</option>${$(n,(l,b)=>`<option${v("value",l.pttitle_fr,0)}>${e(l.pttitle_fr)} </option>`)}</select></div>

                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="bedrooms" class="form-select frsone svelte-1ghvwlz"><option disabled value="Type de chambres">Type de chambres</option>${$(g,(l,b)=>`<option${v("value",l.bdtitle_fr,0)}>${e(l.bdtitle_fr)}</option>`)}</select></div>


                <div class="col-lg-4 col-md-6 mt-2 svelte-1ghvwlz" id="DrvnSlider">${`${c(A,"RangeSlider").$$render(s,{min:0,max:15e7,pips:!0,values:d},{values:l=>{d=l,h=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-1ghvwlz"><div class="price-block svelte-1ghvwlz"><label class="svelte-1ghvwlz">prix minimum</label><span class="price-symbol svelte-1ghvwlz">\u062F.\u0625 (AED)</span><input type="text" class="price minprice svelte-1ghvwlz" name="minPrice"${v("value",d[0],0)}></div> 
                            <div class="dash-sign svelte-1ghvwlz">-</div>
                            
                            <div class="price-block svelte-1ghvwlz"><label class="svelte-1ghvwlz">prix maximum</label><span class="price-symbol svelte-1ghvwlz">\u062F.\u0625 (AED)</span><input type="text" class="price maxprice svelte-1ghvwlz" name="maxPrice"${v("value",d[1],0)}></div></div>`}</div>
                <div class="offcanvas-buttons"><button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="text-center headerSearch-button btn btn-dark button-search svelte-1ghvwlz"><i class="bi bi-search"></i> 
                        recherche
                    </button></div></div></form></div></div>
`;while(!h);return p(),r});const P={code:'.close-btn.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{position:absolute;right:10px}.offcanvas-body.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{margin-top:-40px;margin-bottom:6px}.bi-envelope.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv::before{content:"\\f32f";font-size:30px}#lang.svelte-ly9icv img.svelte-ly9icv.svelte-ly9icv,#languageSwitcher.svelte-ly9icv img.svelte-ly9icv.svelte-ly9icv{height:15px;margin:5px}.desk-lang.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{display:block}.mob-lang.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{display:none}.navbar-mobile.svelte-ly9icv .dropdown.svelte-ly9icv>.dropdown-active.svelte-ly9icv{display:block;height:100vh !important}.navbar.svelte-ly9icv a.svelte-ly9icv.svelte-ly9icv,.navbar.svelte-ly9icv a.svelte-ly9icv.svelte-ly9icv:focus{padding:10px 0 10px 15px}.navbar.svelte-ly9icv a i.svelte-ly9icv.svelte-ly9icv,.navbar.svelte-ly9icv a:focus i.svelte-ly9icv.svelte-ly9icv{font-size:10px;line-height:0;margin-left:5px;margin-right:10px}li.dropdown.svelte-ly9icv a span.svelte-ly9icv.svelte-ly9icv{text-transform:lowercase}li.dropdown.svelte-ly9icv a span.svelte-ly9icv.svelte-ly9icv::first-letter{text-transform:capitalize}@media(min-width: 769px){.navbar.svelte-ly9icv .dropdown ul.svelte-ly9icv.svelte-ly9icv{padding:10px 10px}.bd-social-icons.svelte-ly9icv a.svelte-ly9icv.svelte-ly9icv{margin:0;padding-left:0 !important}.bd-social-icons.svelte-ly9icv a .FSbx.svelte-ly9icv.svelte-ly9icv,.bd-social-icons.svelte-ly9icv a .bi-envelope.svelte-ly9icv.svelte-ly9icv::before{font-size:1.2em !important}li.dropdown.svelte-ly9icv a.svelte-ly9icv.svelte-ly9icv{font-size:.9em}#header.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{padding:5px 0;background:#0000009e}}@media(max-width: 768px){ul.svelte-ly9icv li.dropdown.svelte-ly9icv.svelte-ly9icv,li.dropdown.svelte-ly9icv li.svelte-ly9icv.svelte-ly9icv{border-top:1px solid #666}li#languageSwitcher.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{border-top:1px solid}#social-container.svelte-ly9icv .social.svelte-ly9icv.svelte-ly9icv{background:#ccc}.desk-lang.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{display:none}.mob-lang.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{display:block}#header.svelte-ly9icv.svelte-ly9icv.svelte-ly9icv{padding:15px 0;background:#000}}',map:null},B=f((s,a,t,u)=>{let o,p,g;g=S(_,r=>p=r);let n=[],i=[11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],m=p.url.pathname.split("/"),y="/"+m[3],d,{WBSettings:h}=a;return a.WBSettings===void 0&&t.WBSettings&&h!==void 0&&t.WBSettings(h),s.css.add(P),o=h.whatsapp,g(),`
<header id="header" class="fixed-top  svelte-ly9icv"><div class="container d-flex align-items-center"><a data-sveltekit-prefetch href="/fr" class="logo me-auto"><img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid"></a>

        <div class="d-inline-flex justify-content-start "><div class="offcanvas offcanvas-top" id="s-demo"><div class="offcanvas-header"><button type="button" class="btn-close close-btn svelte-ly9icv" data-bs-dismiss="offcanvas"></button></div>
                <div class="offcanvas-body container svelte-ly9icv">${c(F,"Tabs").$$render(s,{},{},{default:()=>`${c(L,"TabList").$$render(s,{},{},{default:()=>`${c(w,"Tab").$$render(s,{},{},{default:()=>"\xE0 vendre"})}
                            ${c(w,"Tab").$$render(s,{},{},{default:()=>"a louer"})}`})}
                        ${c(T,"TabPanel").$$render(s,{},{},{default:()=>`${c(k,"HeaderSearchForm").$$render(s,{status:"Sale"},{},{})}`})}
                        ${c(T,"TabPanel").$$render(s,{},{},{default:()=>`${c(k,"HeaderSearchForm").$$render(s,{status:"Rent"},{},{})}`})}`})}</div></div>
            <button class="SearchBtn s-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#s-demo"><i class="bi-search"></i></button></div>

        <nav id="navbar" class="${"navbar "+e("",!0)+" svelte-ly9icv"}"><ul class="navbar-ul svelte-ly9icv">${$(n,r=>`
                    ${r.pid===0?`${r.name!=="Home"?`<li class="${"dropdown "+e("",!0)+" svelte-ly9icv"}"><a${v("id",r.slug,0)} class="svelte-ly9icv"><span class="svelte-ly9icv"><!-- HTML_TAG_START -->${r.name_fr}<!-- HTML_TAG_END --></span>
                                    <i class="bi bi-chevron-down svelte-ly9icv"></i></a>
                                <ul class="${e(x(""),!0)+" svelte-ly9icv"}">${$(n,l=>`${r.id===l.pid?`<div class="twoLevelMenu"><span class="two-level-main-menu svelte-ly9icv">Main Menu</span>
                                                <span class="cancel-two-level-menu svelte-ly9icv">Main Menu
                                                </span></div>
                                            ${i.includes(l.id)?`<li class="svelte-ly9icv"><a class="nodrop svelte-ly9icv" href="${"/fr"+e(r.slug,!0)+e(l.slug,!0)}"><!-- HTML_TAG_START -->${l.name_fr}<!-- HTML_TAG_END --></a></li>`:`<li class="${"dropdown "+e("",!0)+" svelte-ly9icv"}"><a${v("id",l.slug,0)} class="svelte-ly9icv"><span class="svelte-ly9icv"><!-- HTML_TAG_START -->${l.name_fr}<!-- HTML_TAG_END --></span> 
                                                        <span class="three-level-menu svelte-ly9icv"><i class="bi bi-chevron-right svelte-ly9icv"></i>
                                                            </span></a>
                                                    <ul class="${e(x(""),!0)+" svelte-ly9icv"}">${$(n,b=>`${l.id===b.pid?`${y===b.slug?`<li class="svelte-ly9icv"><a class="nodrop1 svelte-ly9icv" sveltekit:reload href="${"/fr"+e(r.slug,!0)+e(l.slug,!0)+e(b.slug,!0)}"><!-- HTML_TAG_START -->${b.name_fr}<!-- HTML_TAG_END --></a>
                                                                    </li>`:`<li class="svelte-ly9icv"><a class="nodrop svelte-ly9icv" sveltekit:prefetch href="${"/fr"+e(r.slug,!0)+e(l.slug,!0)+e(b.slug,!0)}"><!-- HTML_TAG_START -->${b.name_fr}<!-- HTML_TAG_END --></a>
                                                                    </li>`} 
                                                                `:""}`)}</ul>
                                                </li>`}`:""}`)}</ul>
                            </li>`:""}`:""}`)}
                
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 desk-lang svelte-ly9icv"><a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium svelte-ly9icv" sveltekit:reload href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid svelte-ly9icv"></a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end d-flex flex-column justify-content-around social p-1 bd-highlight svelte-ly9icv" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown"><li class="svelte-ly9icv"><a class="dropdown-item svelte-ly9icv" sveltekit:reload${v("href",d,0)}>English <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid svelte-ly9icv"></a></li>
                        <li class="svelte-ly9icv"><a class="dropdown-item svelte-ly9icv" sveltekit:reload href="${"/ar"+e(d,!0)}">\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <img alt="uae-flag" src="/assets/images/uae-flag.png" class="img-fluid svelte-ly9icv"></a></li>
                        
                        </ul></li>   
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 mob-lang svelte-ly9icv"><div id="lang" class="d-flex flex-row justify-content-around social p-3 bd-highlight svelte-ly9icv" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown"><div><a sveltekit:reload${v("href",d,0)} class="svelte-ly9icv">English <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid svelte-ly9icv"></a></div>
                        <div><a sveltekit:reload href="${"/ar"+e(d,!0)}" class="svelte-ly9icv">\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <img alt="uae-flag" src="/assets/images/uae-flag.png" class="img-fluid svelte-ly9icv"></a></div>
                        </div></li>          
                <li id="social-container" class="svelte-ly9icv"><div class="d-flex flex-row justify-content-around social py-3 px-0 bd-highlight svelte-ly9icv"><div class="p-0 bd-highlight bd-social-icons svelte-ly9icv"><a data-sveltekit-prefetch${v("href",h.telephone,0)} class="phone text-center svelte-ly9icv"><i class="FSbx bx bi-telephone svelte-ly9icv"></i></a></div>
                        <div class="p-0 bd-highlight bd-social-icons svelte-ly9icv"><a data-sveltekit-prefetch href="${"https://api.whatsapp.com/send?phone="+e(o,!0)+"&text=Hi%20Driven,%20I%20need%20more%20information"}" class="whatsapp text-center svelte-ly9icv"><i class="FSbx bx bi-whatsapp svelte-ly9icv"></i></a></div>
                        <div class="p-0 bd-highlight bd-social-icons svelte-ly9icv">
                            <a data-sveltekit-prefetch href="#" class="whatsapp text-center svelte-ly9icv"><i class="FSbx bi bi-envelope svelte-ly9icv"></i></a></div></div></li></ul>
            <i class="${"bi bi-list mobile-nav-toggle "+e("bi-list",!0)+" svelte-ly9icv"}"></i></nav>
        </div></header>



`}),O=f((s,a,t,u)=>{let o=[],p=[],n=new Date().getFullYear();return`
<footer id="footer"><div class="footer-newsletter"><div class="container"><div class="row justify-content-center"><div class="col-lg-6"><h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="" method="post"><input type="email" name="email"><input type="submit" value="Subscribe"></form></div></div></div></div>

    <div class="footer-top"><div class="container"><div class="row" id="Dsk"><div class="col-lg-3 col-md-6 footer-links"><h4>LIEUX POPULAIRES SUR DUBAI</h4>
                    <ul>${$(p,i=>`${i.showPopularDubaiArea==="Yes"?`<li><i class="bx bx-chevron-right"></i> <a sveltekit:reload href="${"/fr/explore/dubai-properties-areas/"+e(i.pcslug,!0)}">${e(i.pctitle_fr)}</a></li>`:""}`)}

                        </ul></div>

                <div class="col-lg-3 col-md-6 footer-links"><h4>LES VILLAS SUR PLAN</h4>
                    <ul><li><i class="bx bx-chevron-right"></i> <a href="/">District One Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Golf Links Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Lamborghini Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Murooj Al Furjan West</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Eden The Valley</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">La Mer by Meraas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Fairway Vistas at Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Luxury Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Creek Edge Waterfront Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">XV Villas</a></li></ul></div>

                <div class="col-lg-3 col-md-6 footer-links"><h4>LIENS RAPIDES</h4>
                    <ul><li><i class="bx bx-chevron-right"></i> <a href="/sales/buy-ready-properties/sale-apartments">Biens immobiliers pour vente</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/rentals/properties-for-rent/rent-apartments">Biens immobiliers pour location</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/sales/seller/sell-property-in-dubai">Vendre votre bien immobilier</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Acheter et vendre votre bien immobilier en ligne</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Politique de confidentialit\xE9</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Termes et conditions</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Plan du Site</a></li></ul></div>

                <div class="col-lg-3 col-md-6 footer-links"><h4>CONCERNANT LA SOCIETE</h4>
                    <ul>${$(o,i=>`${i.showAboutCompany==="Yes"?`<li><i class="bx bx-chevron-right"></i> <a href="${"/fr/"+e(i.showAboutURL,!0)}">${e(i.name_fr)}</a></li>`:""}`)}
                        </ul></div></div>

            <div class="row" id="Mob"><div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">LIEUX POPULAIRES SUR DUBAI
                                </button></h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><ul>${$(p,i=>`${i.showPopularDubaiArea==="Yes"?`<li><i class="bx bx-chevron-right"></i> <a sveltekit:reload href="${"/fr/explore/dubai-properties-areas/"+e(i.pcslug,!0)}">${e(i.pctitle_fr)}</a></li>`:""}`)}

                                    </ul></div></div></div></div>

                <div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">OFF PLAN VILLAS
                                </button></h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><ul><li><i class="bx bx-chevron-right"></i> <a href="/">District One Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Golf Links Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Lamborghini Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Murooj Al Furjan West</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Eden The Valley</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">La Mer by Meraas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Fairway Vistas at Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Luxury Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Creek Edge Waterfront Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">XV Villas</a></li></ul></div></div></div></div>

                <div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">LIENS RAPIDES
                                </button></h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><ul><li><i class="bx bx-chevron-right"></i> <a href="/sales/buy-ready-properties/sale-apartments">Properties For Sale</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/rentals/properties-for-rent/rent-apartments">Properties For Rent</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/sales/seller/sell-property-in-dubai">Sell Your Property</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Buy &amp; Rent Property Online</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy Policy</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Terms &amp; Conditions</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Sitemap</a></li></ul></div></div></div></div>

                <div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">CONCERNANT LA SOCIETE
                                </button></h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample"><ul>${$(o,i=>`${i.showAboutCompany==="Yes"?`<li><i class="bx bx-chevron-right"></i> <a href="${"/fr/"+e(i.showAboutURL,!0)}">${e(i.name_fr)}</a></li>`:""}`)}

                                    </ul></div></div></div></div></div></div></div>

    <div class="container footer-bottom clearfix"><div class="copyright"><div class="footer-links d-flex flex-row bd-highlight"><div class="p-2 bd-highlight"><h5>Follow Us :</h5></div>
                <div class="p-2 bd-highlight"><div class="social-links"><a href="https://twitter.com/DrivenRE" target="DrvnPage" class="twitter"><i class="FSbx bx bxl-twitter"></i></a>            
                        <a href="https://www.youtube.com/c/DrivenPropertiesDubai/videos" target="DrvnPage" class="youtube"><i class="FSbx bx bxl-youtube"></i></a>
                        <a href="https://www.facebook.com/DrivenPropertiesDubai" target="DrvnPage" class="facebook"><i class="FSbx bx bxl-facebook-square"></i></a>
                        <a href="https://www.instagram.com/drivenproperties/" target="DrvnPage" class="instagram"><i class="FSbx bx bxl-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/driven-properties-real-estate?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F" target="DrvnPage" class="linkedin"><i class="FSbx bx bxl-linkedin"></i></a></div></div></div></div>
        <div class="credits"><a href="tel:800374836"><img src="https://www.drivenproperties.com/assets/imgs/toll-free-driven-properties.png" alt="df" class="Fcallnow"></a></div></div>

    <div class="container footer-bottom clearfix"><div class="copyright text-center">\xA9 ${e(n)} Copyright <strong><span>Driven Properties LLC</span></strong>. 
            All Rights Reserved. Partner with : <a href="https://houza.com/en/buy/driven-properties-for-sale" target="_blank" class="partners">houza.com</a></div></div></footer>
`}),Y=f((s,a,t,u)=>{let{WBSettings:o=[]}=a;return a.WBSettings===void 0&&t.WBSettings&&o!==void 0&&t.WBSettings(o),`



<main id="main">${c(B,"Header").$$render(s,{WBSettings:o},{},{})}
        ${u.default?u.default({}):""}
    ${c(O,"Footer").$$render(s,{},{},{})}
</main>`});export{Y as default};
