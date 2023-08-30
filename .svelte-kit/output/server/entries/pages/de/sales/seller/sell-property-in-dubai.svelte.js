import{c as n,b as m,e as i,d as b,a as u,v as a}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as f}from"../../../../../immutable/chunks/stores-73de46f1.js";import{B as _}from"../../../../../immutable/chunks/breadcrumb-635bf2b4.js";import"../../../../../immutable/chunks/helpers-b1dcc375.js";const g={code:"#withInContent.svelte-m40ls3.svelte-m40ls3{background-color:#f3f5fa;border:1px solid #e1e1e1;padding:20px;color:#737373}#withInContent.svelte-m40ls3 .form-control.svelte-m40ls3{border-radius:0;height:50px}#withInContent.svelte-m40ls3 .form-select.svelte-m40ls3{border-radius:0;height:50px}#withInContent.svelte-m40ls3 .btn.svelte-m40ls3{background-color:#4167b1;height:50px;color:#fff;border-radius:0}",map:null},h=n((t,r,d,c)=>{let s=[],o=[];return t.css.add(g),`<div class="container aos-init aos-animate mb-5 mt-5" data-aos="fade-up"><div class="row svelte-m40ls3" id="withInContent"><div class="col-12"><div class="frmDetails"><h3 class="mb-3">Contact Us</h3>

                <div class="col mb-3">
                    <input type="text" class="form-control svelte-m40ls3" id="fname" placeholder="Full Name"></div>

                <div class="col mb-3"><div class="d-flex flex-row "><div class="mypd p-0 col">
                            
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select svelte-m40ls3"><option selected value="Country Code">Country Code</option>${m(o,e=>`<option value="${"+"+i(e.code,!0)}">${i(e.code)} ${i(e.country)}</option>`)}</select></div>
                
                        <div class="p-0 col-7">
                            <input type="text" class="form-control svelte-m40ls3" id="phone" placeholder="Phone / Mobile"></div></div></div>

                <div class="col mb-3">
                    <input type="email" class="form-control svelte-m40ls3" id="email" placeholder="Email Address"></div>

                <div class="col mt-3 mb-3"><h3>Additional Information Optional</h3></div>

                <div class="col mb-3">
                    <input type="text" class="form-control svelte-m40ls3" id="community" placeholder="Community or Tower"></div>

                <div class="col-12 mt-3 mb-3"><select id="FSRONE" name="bedrooms" class="form-select form-control frsone svelte-m40ls3"><option value="Bedrooms">Bedrooms</option>${m(s,(e,l)=>`<option${b("value",e.bdtitle,0)}>${i(e.bdtitle)}</option>`)}</select></div>
                    
                <div class="col mb-3">
                    <button class="btn btn-md Mybtn w-100 svelte-m40ls3">Submit</button></div></div></div></div>        

</div>`});const y={code:"@media only screen and (max-width: 768px){}",map:null},C=n((t,r,d,c)=>{let s,o;o=u(f,v=>s=v);let e=[],l=s.url.pathname.split("/"),$=[],p=[];return t.css.add(y),o(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${a(_,"BreadCrumb").$$render(t,{imgbg:"/l9images/banners/"+e.imgname,LinkOne:l[1],LinkTwo:l[2],LinkThree:l[3],headings:e.name_fr,FstName_Fr:$.name_fr,LstName_Fr:p.name_fr},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description_fr?e.description_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div>

    ${a(h,"ContentForm").$$render(t,{},{},{})}
    
    <div class="container aos-init aos-animate" data-aos="fade-up"><div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${e.description2_fr?e.description2_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div></section>
`}),L=n((t,r,d,c)=>`${t.head+=`${t.title="<title>Seller - Sell Property In Dubai</title>",""}<meta name="description" content="About Us Page app" data-svelte="svelte-p1kgi7">`,""}
    
    ${a(C,"SellPropertyInDubai").$$render(t,{},{},{})}`);export{L as default};
