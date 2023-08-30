import{c as v,a as f,b as p,d as i,e}from"./index-7b7abb97.js";import{p as u}from"./stores-73de46f1.js";const x=v((n,o,d,g)=>{let l,r;r=f(u,s=>l=s);let c=[],b=[11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],h=l.url.pathname.split("/"),m="/"+h[3],{WBSettings:$}=o;return o.WBSettings===void 0&&d.WBSettings&&$!==void 0&&d.WBSettings($),$.whatsapp,r(),`
<header id="header" class="fixed-top "><div class="container"><div class="row" id="Forbes"><div class="col-md-4 col-lg-4 col-10"><div class="row"><div class="col-md-2 col-lg-2 col-3"><a data-sveltekit-prefetch href="/" class="logo me-auto"><img alt="drvn" src="/assets/images/favicon-96x96.png" class="img-fluid"></a></div>

                    <div class="col-md-10 col-lg-10 col-9"><a data-sveltekit-prefetch href="/"><h1 class="Fobstxt">Forbes Global Properties</h1></a></div></div></div> 
           

           <div class="col-md-8 col-lg-8 col-2"><div class="row"><div class="col-sm">

                        <nav id="navbar" class="navbar"><ul>${p(c,s=>`${s.pid===0?`${s.name!=="Home"?`<li class="dropdown"><a${i("id",s.slug,0)}><span><!-- HTML_TAG_START -->${s.name}<!-- HTML_TAG_END --></span>
                                                    <i class="bi bi-chevron-down"></i></a>
                                                <ul${i("class","",0)}>${p(c,a=>`${s.id===a.pid?`${b.includes(a.id)?`<li><a href="${e(s.slug,!0)+e(a.slug,!0)}"><!-- HTML_TAG_START -->${a.name}<!-- HTML_TAG_END --></a></li>`:`<li class="dropdown"><a${i("id",a.slug,0)}><span><!-- HTML_TAG_START -->${a.name}<!-- HTML_TAG_END --></span> 
                                                                        <i class="bi bi-chevron-right"></i></a>
                                                                    <ul${i("class","",0)}>${p(c,t=>`${a.id===t.pid?`${m===t.slug?`<li><a sveltekit:reload href="${e(s.slug,!0)+e(a.slug,!0)+e(t.slug,!0)}"><!-- HTML_TAG_START -->${t.name}<!-- HTML_TAG_END --></a></li>`:`<li><a sveltekit:prefetch href="${e(s.slug,!0)+e(a.slug,!0)+e(t.slug,!0)}"><!-- HTML_TAG_START -->${t.name}<!-- HTML_TAG_END --></a></li>`} 
                                                                                `:""}`)}</ul>
                                                                </li>`}`:""}`)}</ul>
                                            </li>`:""}`:""}`)}

                                <li><div class="d-flex flex-row justify-content-start bd-highlight"><div class="p-0 bd-highlight"><a data-sveltekit-prefetch href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-telephone"></i></a></div>
                                        <div class="p-0 bd-highlight"><a data-sveltekit-prefetch href="https://api.whatsapp.com/send?phone=971553658402&text=Forbes+Global+Properties" class="whatsapp text-center"><i class="FSbx bx bi-whatsapp"></i></a></div></div></li>
                                
                                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0"><a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" sveltekit:reload href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">ENGLISH \u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}
                                    </a>
                                    <ul id="lang" class="dropdown-menu dropdown-menu-end border-0 shadow-lg" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown"><li><a class="dropdown-item" sveltekit:reload${i("href",l.url.pathname,0)}>ENGLISH \u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}</a></li>
                                        <li><a class="dropdown-item" sveltekit:reload href="${"/ar"+e(l.url.pathname,!0)}">\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u{1F1E6}\u{1F1EA}</a></li>
                                        <li><a class="dropdown-item" sveltekit:reload href="${"/fr"+e(l.url.pathname,!0)}">French \u{1F1EB}\u{1F1F7}</a></li>
                                        </ul></li></ul>
                            <i class="bi bi-list mobile-nav-toggle"></i></nav>
                        </div></div></div> 
           </div></div></header>
`});const _={code:"#footer.svelte-186rsxq div.footer-bottom.svelte-186rsxq{padding:25px 0}",map:null},A=v((n,o,d,g)=>{let r=new Date().getFullYear();return n.css.add(_),`
<footer id="footer" class="svelte-186rsxq"><div class="container footer-bottom clearfix svelte-186rsxq"><div class="copyright text-center">\xA9 ${e(r)} Copyright <strong><span>Driven Properties LLC</span></strong>.
            All Rights Reserved.
        </div></div></footer>
`});export{A as F,x as H};
