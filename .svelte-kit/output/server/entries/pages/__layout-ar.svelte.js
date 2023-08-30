import{c as x,a as k,f as F,d as c,v as t,b as p,e as a,n as z}from"../../immutable/chunks/index-7b7abb97.js";import{p as S}from"../../immutable/chunks/stores-73de46f1.js";import{T as D,a as _,b as y,c as w}from"../../immutable/chunks/TabPanel-bb9f395f.js";import{S as L}from"../../immutable/chunks/Select-7c592fb8.js";import{R as A}from"../../immutable/chunks/RangeSlider-6678e381.js";/* empty css                                                                    */import"../../immutable/chunks/index-5fb08a48.js";/* empty css                                                                  */const P={code:".price-block.svelte-cnxvi3.svelte-cnxvi3{position:relative;display:inline-block;width:40%;color:#999;font-weight:bold}.price-block.svelte-cnxvi3 .price.svelte-cnxvi3{padding:13px 5px 0px 53px;width:100%;font-size:15px;color:#666}.price-block.svelte-cnxvi3 .price-symbol.svelte-cnxvi3{position:absolute;font-size:12px;color:#666;left:4px;top:18px}.price-block.svelte-cnxvi3 label.svelte-cnxvi3{position:absolute;font-size:13px;left:3px;font-weight:500;color:black}.dash-sign.svelte-cnxvi3.svelte-cnxvi3{display:inline;margin:0px 10px 10px !important;font-weight:bold;font-size:30px;color:#999}.input-group.svelte-cnxvi3.svelte-cnxvi3{display:flex !important}button.headerSearch-button.svelte-cnxvi3.svelte-cnxvi3{border:1px solid white;border-radius:none;width:100%}#DrvnSlider.svelte-cnxvi3 input.svelte-cnxvi3{display:inline-block}.range-slider-input-container.svelte-cnxvi3.svelte-cnxvi3{text-align:center;display:flex;flex-flow:wrap-reverse}#FSRONE.svelte-cnxvi3.svelte-cnxvi3{height:52px;width:100%;padding:10px 20px;border-radius:0;background-position:left 1.13rem center !important}@media only screen and (max-width: 768px){.BxInfo-row.svelte-cnxvi3.svelte-cnxvi3{padding:0 10px}}",map:null};let E="";const T=x((l,i,r,g)=>{let o,h;h=k(S,e=>o=e);let{BedRoomType:d=[]}=i,{PropertyType:n=[]}=i,{status:u}=i;o.url.pathname.split("/");let f=[];console.log(E),F();let m=" ",v=[0,15e7];i.BedRoomType===void 0&&r.BedRoomType&&d!==void 0&&r.BedRoomType(d),i.PropertyType===void 0&&r.PropertyType&&n!==void 0&&r.PropertyType(n),i.status===void 0&&r.status&&u!==void 0&&r.status(u),l.css.add(P);let b,s;do b=!0,s=`<div class="row header-search"><div class="col-lg-12 aos-init aos-animate" data-aos="fade-up"><form><div class="row BxInfo-row svelte-cnxvi3"><div class="combine-status-community row mb-2 mt-2"><div class="col-lg-2 col-md-6 status-search"><select id="FSRONE" name="status" class="form-select frsone svelte-cnxvi3"><option value="sale">For Sale </option><option value="rent">For Rent </option></select></div>
                    
                    <div${c("class","col-lg-10  col-md-6 community-search",0)}><div class="input-group svelte-cnxvi3" id="MyCommunityLists1">${t(L,"Select").$$render(l,{items:f,optionIdentifier:e=>e.agserach,getSelectionLabel:e=>e.agserach,getOptionLabel:e=>e.agserach,placeholder:"\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0628\u0646\u0627\u0621",showIndicator:"true",isClearable:"true",noOptionsMessage:"We can't find your search query. Please check your spelling or try a different location."},{},{})}
                            <input type="hidden" name="protitle" id="Community"${c("value",m.agserach,0)}></div></div></div>

                
                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="protype" class="form-select frsone svelte-cnxvi3"><option selected value="\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0643\u064A\u0629">\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0643\u064A\u0629</option>${p(n,(e,$)=>`<option${c("value",e.pttitle_ar,0)}>${a(e.pttitle_ar)} </option>`)}</select></div>

                <div class="col-lg-4 col-md-6 mt-2"><select id="FSRONE" name="bedrooms" class="form-select frsone svelte-cnxvi3"><option disabled value="\u0646\u0648\u0639 \u063A\u0631\u0641 \u0627\u0644\u0646\u0648\u0645">\u0646\u0648\u0639 \u063A\u0631\u0641 \u0627\u0644\u0646\u0648\u0645</option>${p(d,(e,$)=>`<option${c("value",e.bdtitle_ar,0)}>${a(e.bdtitle_ar)}</option>`)}</select></div>


                <div class="col-lg-4 col-md-6 mt-2 svelte-cnxvi3" id="DrvnSlider">${`${t(A,"RangeSlider").$$render(l,{min:0,max:15e7,pips:!0,values:v},{values:e=>{v=e,b=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-cnxvi3"><div class="price-block svelte-cnxvi3"><label class="svelte-cnxvi3">\u0633\u0639\u0631 \u062F\u0642\u064A\u0642\u0629</label><span class="price-symbol svelte-cnxvi3">\u062F.\u0625 (AED)</span><input type="text" class="price minprice svelte-cnxvi3" name="minPrice"${c("value",v[0],0)}></div> 
                            <div class="dash-sign svelte-cnxvi3">-</div>
                            
                            <div class="price-block svelte-cnxvi3"><label class="svelte-cnxvi3">\u0623\u0642\u0635\u0649 \u0633\u0639\u0631</label><span class="price-symbol svelte-cnxvi3">\u062F.\u0625 (AED)</span><input type="text" class="price maxprice svelte-cnxvi3" name="maxPrice"${c("value",v[1],0)}></div></div>`}</div>
                <div class="offcanvas-buttons"><button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="text-center headerSearch-button btn btn-dark button-search svelte-cnxvi3"><i class="bi bi-search"></i> 
                        \u064A\u0628\u062D\u062B
                    </button></div></div></form></div></div>
`;while(!b);return h(),s});const R={code:'.close-btn.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{position:absolute;right:10px}.offcanvas-body.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{margin-top:-40px;margin-bottom:6px}.bi-envelope.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe::before{content:"\\f32f";font-size:30px}#lang.svelte-r4zrbe img.svelte-r4zrbe.svelte-r4zrbe,#languageSwitcher.svelte-r4zrbe img.svelte-r4zrbe.svelte-r4zrbe{height:15px;margin:5px}.desk-lang.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{display:block}.mob-lang.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{display:none}.navbar-mobile.svelte-r4zrbe .dropdown.svelte-r4zrbe>.dropdown-active.svelte-r4zrbe{display:block;height:100vh !important}.navbar.svelte-r4zrbe a i.svelte-r4zrbe.svelte-r4zrbe,.navbar.svelte-r4zrbe a:focus i.svelte-r4zrbe.svelte-r4zrbe{font-size:10px;line-height:0;margin-left:5px;margin-right:10px}.navbar.svelte-r4zrbe a.svelte-r4zrbe.svelte-r4zrbe,.navbar.svelte-r4zrbe a.svelte-r4zrbe.svelte-r4zrbe:focus{padding:10px 10px 10px 15px !important}@media(min-width: 769px){.navbar.svelte-r4zrbe .dropdown ul.svelte-r4zrbe.svelte-r4zrbe{padding:10px 10px}.bd-social-icons.svelte-r4zrbe a.svelte-r4zrbe.svelte-r4zrbe{margin:0;padding-left:0 !important}.bd-social-icons.svelte-r4zrbe a .FSbx.svelte-r4zrbe.svelte-r4zrbe,.bd-social-icons.svelte-r4zrbe a .bi-envelope.svelte-r4zrbe.svelte-r4zrbe::before{font-size:1.2em !important}li.dropdown.svelte-r4zrbe a.svelte-r4zrbe.svelte-r4zrbe{font-size:.9em}#header.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{padding:5px 0;background:#0000009e}}@media(max-width: 768px){ul.svelte-r4zrbe li.dropdown.svelte-r4zrbe.svelte-r4zrbe,li.dropdown.svelte-r4zrbe li.svelte-r4zrbe.svelte-r4zrbe{border-top:1px solid #666}li#languageSwitcher.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{border-top:1px solid}#social-container.svelte-r4zrbe .social.svelte-r4zrbe.svelte-r4zrbe{background:#ccc}.desk-lang.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{display:none}.mob-lang.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{display:block}button.SearchBtn.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{width:100%;display:block;position:absolute !important;right:22px;top:22px}.navbar-mobile.svelte-r4zrbe .mobile-nav-toggle.svelte-r4zrbe.svelte-r4zrbe{position:absolute;top:15px;left:10px}#header.svelte-r4zrbe .logo.svelte-r4zrbe.svelte-r4zrbe{margin:auto !important}#header.svelte-r4zrbe.svelte-r4zrbe.svelte-r4zrbe{padding:15px 0;background:#4F5C61}}',map:null},B=x((l,i,r,g)=>{let o,h,d;d=k(S,s=>h=s);let n=[],u=[11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],f=h.url.pathname.split("/"),m="/"+f[3],v,{WBSettings:b}=i;return i.WBSettings===void 0&&r.WBSettings&&b!==void 0&&r.WBSettings(b),l.css.add(R),o=b.whatsapp,d(),`
<header id="header" class="fixed-top  svelte-r4zrbe"><div class="container d-flex align-items-center"><a data-sveltekit-prefetch href="/fr" class="logo me-auto svelte-r4zrbe"><img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid"></a>

        <div class="d-inline-flex justify-content-start "><div class="offcanvas offcanvas-top" id="s-demo"><div class="offcanvas-header"><button type="button" class="btn-close close-btn svelte-r4zrbe" data-bs-dismiss="offcanvas"></button></div>
                <div class="offcanvas-body container svelte-r4zrbe">${t(D,"Tabs").$$render(l,{},{},{default:()=>`${t(_,"TabList").$$render(l,{},{},{default:()=>`${t(y,"Tab").$$render(l,{},{},{default:()=>"\u0644\u0644\u0628\u064A\u0639"})}
                            ${t(y,"Tab").$$render(l,{},{},{default:()=>"\u0644\u0644\u0627\u064A\u062C\u0627\u0631"})}`})}
                        ${t(w,"TabPanel").$$render(l,{},{},{default:()=>`${t(T,"HeaderSearchForm").$$render(l,{status:"Sale"},{},{})}`})}
                        ${t(w,"TabPanel").$$render(l,{},{},{default:()=>`${t(T,"HeaderSearchForm").$$render(l,{status:"Rent"},{},{})}`})}`})}</div>
                </div>
            <button class="SearchBtn s-btn svelte-r4zrbe" type="button" data-bs-toggle="offcanvas" data-bs-target="#s-demo"><i class="bi-search"></i></button></div>

        <nav id="navbar" class="${"navbar "+a("",!0)+" svelte-r4zrbe"}"><ul class="navbar-ul svelte-r4zrbe">${p(n,s=>`
                    ${s.pid===0?`${s.name!=="Home"?`<li class="${"dropdown "+a("",!0)+" svelte-r4zrbe"}"><a${c("id",s.slug,0)} class="svelte-r4zrbe"><span><!-- HTML_TAG_START -->${s.name_ar}<!-- HTML_TAG_END --></span>
                                    <i class="bi bi-chevron-down svelte-r4zrbe"></i></a>
                                <ul class="${a(z(""),!0)+" svelte-r4zrbe"}">${p(n,e=>`${s.id===e.pid?`<div class="twoLevelMenu"><span class="two-level-main-menu">Main Menu</span>
                                                <span class="cancel-two-level-menu">Main Menu
                                                </span></div>
                                            ${u.includes(e.id)?`<li class="svelte-r4zrbe"><a class="nodrop svelte-r4zrbe" href="${"/ar"+a(s.slug,!0)+a(e.slug,!0)}"><!-- HTML_TAG_START -->${e.name_ar}<!-- HTML_TAG_END --></a></li>`:`<li class="${"dropdown "+a("",!0)+" svelte-r4zrbe"}"><a${c("id",e.slug,0)} class="svelte-r4zrbe"><span><!-- HTML_TAG_START -->${e.name_ar}<!-- HTML_TAG_END --></span> 
                                                        <span class="three-level-menu"><i class="bi bi-chevron-right svelte-r4zrbe"></i>
                                                            </span></a>
                                                    <ul class="${a(z(""),!0)+" svelte-r4zrbe"}">${p(n,$=>`${e.id===$.pid?`${m===$.slug?`<li class="svelte-r4zrbe"><a class="nodrop1 svelte-r4zrbe" sveltekit:reload href="${"/ar"+a(s.slug,!0)+a(e.slug,!0)+a($.slug,!0)}"><!-- HTML_TAG_START -->${$.name_ar}<!-- HTML_TAG_END --></a>
                                                                    </li>`:`<li class="svelte-r4zrbe"><a class="nodrop svelte-r4zrbe" sveltekit:prefetch href="${"/ar"+a(s.slug,!0)+a(e.slug,!0)+a($.slug,!0)}"><!-- HTML_TAG_START -->${$.name_ar}<!-- HTML_TAG_END --></a>
                                                                    </li>`} 
                                                                `:""}`)}</ul>
                                                </li>`}`:""}`)}</ul>
                            </li>`:""}`:""}`)}
                
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 desk-lang svelte-r4zrbe"><a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium svelte-r4zrbe" sveltekit:reload href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\u0627\u0644\u0639\u0631\u0628\u064A\u0629<img alt="uae-flag" src="/assets/images/uae-flag.png" class="img-fluid svelte-r4zrbe"></a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end d-flex flex-column justify-content-around social p-1 bd-highlight svelte-r4zrbe" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown"><li class="svelte-r4zrbe"><a class="dropdown-item svelte-r4zrbe" sveltekit:reload${c("href",v,0)}>ENGLISH <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid svelte-r4zrbe"></a></li>
                        
                        <li class="svelte-r4zrbe"><a class="dropdown-item svelte-r4zrbe" sveltekit:reload href="${"/fr"+a(v,!0)}">French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid svelte-r4zrbe"></a></li>
                        </ul></li>   
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 mob-lang svelte-r4zrbe"><div id="lang" class="d-flex flex-row justify-content-around social p-3 bd-highlight svelte-r4zrbe" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown"><div><a sveltekit:reload${c("href",v,0)} class="svelte-r4zrbe">ENGLISH <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid svelte-r4zrbe"></a></div>
                        
                        <div><a sveltekit:reload href="${"/fr"+a(v,!0)}" class="svelte-r4zrbe">French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid svelte-r4zrbe"></a></div></div></li>          
                <li id="social-container" class="svelte-r4zrbe"><div class="d-flex flex-row justify-content-around social p-3 bd-highlight svelte-r4zrbe"><div class="p-0 bd-highlight bd-social-icons svelte-r4zrbe"><a data-sveltekit-prefetch${c("href",b.telephone,0)} class="phone text-center svelte-r4zrbe"><i class="FSbx bx bi-telephone svelte-r4zrbe"></i></a></div>
                        <div class="p-0 bd-highlight bd-social-icons svelte-r4zrbe"><a data-sveltekit-prefetch href="${"https://api.whatsapp.com/send?phone="+a(o,!0)+"&text=Hi%20Driven,%20I%20need%20more%20information"}" class="whatsapp text-center svelte-r4zrbe"><i class="FSbx bx bi-whatsapp svelte-r4zrbe"></i></a></div>
                        <div class="p-0 bd-highlight bd-social-icons svelte-r4zrbe"><a data-sveltekit-prefetch href="#" class="whatsapp text-center svelte-r4zrbe"><i class="FSbx bi bi-envelope svelte-r4zrbe"></i></a></div></div></li></ul>
            <i class="${"bi bi-list mobile-nav-toggle "+a("bi-list",!0)+" svelte-r4zrbe"}"></i></nav>
        </div></header>



`}),H=x((l,i,r,g)=>{let o=[],d=new Date().getFullYear();return`
<footer id="footer"><div class="footer-newsletter"><div class="container"><div class="row justify-content-center"><div class="col-lg-6"><h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="" method="post"><input type="email" name="email"><input type="submit" value="Subscribe"></form></div></div></div></div>

    <div class="footer-top"><div class="container"><div class="row" id="Dsk"><div class="col-lg-3 col-md-6 footer-links"><h4>POPULAR DUBAI AREAS</h4>
                    <ul><li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li></ul></div>

                <div class="col-lg-3 col-md-6 footer-links"><h4>OFF PLAN VILLAS</h4>
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

                <div class="col-lg-3 col-md-6 footer-links"><h4>QUICK LINKS</h4>
                    <ul><li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Sale</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Rent</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Sell Your Property</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Buy &amp; Rent Property Online</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy Policy</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Terms &amp; Conditions</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Sitemap</a></li></ul></div>

                <div class="col-lg-3 col-md-6 footer-links"><h4>ABOUT COMPANY</h4>
                    <ul>${p(o,n=>`${n.showAboutCompany==="Yes"?`<li><i class="bx bx-chevron-right"></i> <a href="/ar">${a(n.name_ar)}</a></li>`:""}`)}
                        </ul></div></div>

            <div class="row" id="Mob"><div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">POPULAR DUBAI AREAS
                                </button></h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><ul><li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li></ul></div></div></div></div>

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

                <div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">QUICK LINKS
                                </button></h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><ul><li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Sale</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Rent</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Sell Your Property</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Buy &amp; Rent Property Online</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy Policy</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Terms &amp; Conditions</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Sitemap</a></li></ul></div></div></div></div>

                <div class="col-lg-3 col-md-6 footer-links"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">ABOUT COMPANY
                                </button></h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample"><ul><li><i class="bx bx-chevron-right"></i> <a href="/">Our Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Real Estate Brokerage</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Property Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Development Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Strategic Advisory &amp; Consulting</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Leadership Team</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">The Driven Difference</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Awards</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Driven Properties International</a></li></ul></div></div></div></div></div></div></div>

    <div class="container footer-bottom clearfix"><div class="copyright"><div class="footer-links d-flex flex-row bd-highlight"><div class="p-2 bd-highlight"><h5>\u062A\u0627\u0628\u0639\u0646\u0627
                        :
                    </h5></div>
                <div class="p-2 bd-highlight"><div class="social-links"><a href="https://twitter.com/DrivenRE" target="DrvnPage" class="twitter"><i class="FSbx bx bxl-twitter"></i></a>            
                        <a href="https://www.youtube.com/c/DrivenPropertiesDubai/videos" target="DrvnPage" class="youtube"><i class="FSbx bx bxl-youtube"></i></a>
                        <a href="https://www.facebook.com/DrivenPropertiesDubai" target="DrvnPage" class="facebook"><i class="FSbx bx bxl-facebook-square"></i></a>
                        <a href="https://www.instagram.com/drivenproperties/" target="DrvnPage" class="instagram"><i class="FSbx bx bxl-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/driven-properties-real-estate?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F" target="DrvnPage" class="linkedin"><i class="FSbx bx bxl-linkedin"></i></a></div></div></div></div>
        <div class="credits"><a href="tel:800374836"><img src="https://www.drivenproperties.com/assets/imgs/toll-free-driven-properties.png" alt="df" class="Fcallnow"></a></div></div>

    <div class="container footer-bottom clearfix"><div class="copyright text-center">\xA9 ${a(d)} \u062F\u0631\u06A4\u0646 \u0644\u0644\u0639\u0642\u0627\u0631\u0627\u062A \u0634.\u0630.\u0645.\u0645. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629. \u0634\u0631\u064A\u0643 \u0645\u0639
            : 
            <a href="https://houza.com/en/buy/driven-properties-for-sale" target="_blank" class="partners">houza.com</a></div></div></footer>
`});const C=x((l,i,r,g)=>{let{WBSettings:o=[]}=i;return i.WBSettings===void 0&&r.WBSettings&&o!==void 0&&r.WBSettings(o),`



<main id="main">${t(B,"Header").$$render(l,{WBSettings:o},{},{})}
        ${g.default?g.default({}):""}
    ${t(H,"Footer").$$render(l,{},{},{})}
</main>`});export{C as default};
