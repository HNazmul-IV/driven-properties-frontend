import{c as r,a as u,v as i,b as f,d as o,e as $}from"../../../../immutable/chunks/index-7b7abb97.js";import{p as j}from"../../../../immutable/chunks/stores-73de46f1.js";import{B as b}from"../../../../immutable/chunks/breadcrumb-3ab4b0ca.js";import"../../../../immutable/chunks/helpers-b1dcc375.js";const h={code:`.content.svelte-jg5uvl.svelte-jg5uvl{position:relative;width:100%;max-width:100%;margin:auto;overflow:hidden
}.content.svelte-jg5uvl .content-overlay.svelte-jg5uvl{background:rgba(0,0,0,0.7);position:absolute;height:100%;width:100%;left:0;top:0;bottom:0;right:0;opacity:0;-webkit-transition:all 0.4s ease-in-out 0s;-moz-transition:all 0.4s ease-in-out 0s;transition:all 0.4s ease-in-out 0s
}.content.svelte-jg5uvl:hover .content-overlay.svelte-jg5uvl{opacity:1
}.content-image.svelte-jg5uvl.svelte-jg5uvl{width:100%
}img.svelte-jg5uvl.svelte-jg5uvl{box-shadow:1px 1px 5px 1px rgba(0, 0, 0, 0.1);border-radius:1px
}.content-details.svelte-jg5uvl.svelte-jg5uvl{position:absolute;text-align:left;padding-left:1em;padding-right:1em;width:100%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s
}.content.svelte-jg5uvl:hover .content-details.svelte-jg5uvl{top:50%;left:50%;opacity:1}.content-details.svelte-jg5uvl h3.svelte-jg5uvl{color:#fff;font-weight:500;letter-spacing:0.12rem !important;margin-bottom:0.5rem !important;text-transform:uppercase}.content-details.svelte-jg5uvl p.svelte-jg5uvl{color:#fff;font-size:1.1em;margin-bottom:2.5rem}.content-details.svelte-jg5uvl a.svelte-jg5uvl{border-radius:2px;border:1px solid #fff;padding:8px 40px;text-transform:uppercase;font-size:0.9rem;color:#fff}.fadeIn-bottom.svelte-jg5uvl.svelte-jg5uvl{top:80%}@media only screen and (max-width: 768px){section.svelte-jg5uvl.svelte-jg5uvl{padding:0}.content-details.svelte-jg5uvl h3.svelte-jg5uvl{font-weight:500;letter-spacing:0.01rem !important;margin-bottom:0.8rem !important;text-transform:uppercase}.content-details.svelte-jg5uvl p.svelte-jg5uvl{font-size:0.9rem;margin-bottom:2.5rem}}`,map:null},_=r((t,v,d,p)=>{let s,a;a=u(j,e=>s=e);let l=s.url.pathname.split("/"),n=[],g=[],m=[],c=[];return t.css.add(h),a(),`
<section id="hero-noimage" class="d-flex align-items-center svelte-jg5uvl"></section>


${i(b,"BreadCrumb").$$render(t,{LinkOne:l[2],LinkTwo:l[3],Bdtype:2,FstName_Fr:m.name_ru,LstName_Fr:c.name_ru},{},{})}


<section id="about" class="about svelte-jg5uvl"><div class="container aos-init aos-animate" data-aos="fade-up"><div class="section-title"><h2><!-- HTML_TAG_START -->${n.name_ru?n.name_ru:"Preferred Partners"}<!-- HTML_TAG_END --></h2></div>

        <div class="row">${f(g,e=>`<div class="mb-4 col-lg-4 col-xl-4 col-md-6 d-flex flex-row justify-content-center align-items-stretch order-2 order-lg-1 aos-animate" data-aos="zoom-in" data-aos-delay="100"><div class="content svelte-jg5uvl"><div class="content-overlay svelte-jg5uvl"></div> 
                    <img class="content-image svelte-jg5uvl" alt${o("src",e.pfpimgname?"/l9images/preferred-partners/"+e.pfpimgname:"/assets/img/preferred-partners/gen_4413127.jpg",0)}>
                    <div class="content-details fadeIn-bottom svelte-jg5uvl"><h3 class="content-title svelte-jg5uvl">${$(e.pfpname_ru)}</h3>
                        <p class="content-text svelte-jg5uvl"><i class="fa fa-map-marker"></i>
                            <!-- HTML_TAG_START -->${e.pfpdescription_ru}<!-- HTML_TAG_END --></p>
                        <a${o("href",e.pfpslug,0)} target="DrvnPage" class="svelte-jg5uvl">Explore</a></div>
                    
                </div></div>
            `)}</div></div></section>
`}),A=r((t,v,d,p)=>`${t.head+=`${t.title="<title>About Us - Perferred Parnters</title>",""}<meta name="description" content="About Us - Perferred Parnters" data-svelte="svelte-4q2bvb">`,""}

${i(_,"PerferredPartners").$$render(t,{},{},{})}`);export{A as default};
