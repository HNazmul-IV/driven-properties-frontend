import{c,e as s,d as n,a as h,v as i}from"../../../../../immutable/chunks/index-7b7abb97.js";import{p as b}from"../../../../../immutable/chunks/stores-73de46f1.js";import{L as u}from"../../../../../immutable/chunks/LeadFormLeft-5af0d071.js";import{B as g}from"../../../../../immutable/chunks/breadcrumb-635bf2b4.js";import"../../../../../immutable/chunks/helpers-b1dcc375.js";const f={code:".result.svelte-1h4m89h.svelte-1h4m89h{border:1px solid #2222}.result.svelte-1h4m89h p.svelte-1h4m89h{margin:20px auto;text-align:center;font-weight:600;color:#222}.result.svelte-1h4m89h p strong.svelte-1h4m89h{font-size:2rem}#withInContent.svelte-1h4m89h.svelte-1h4m89h{background-color:#f3f5fa;border:1px solid #e1e1e1;padding:20px;color:#737373}#withInContent.svelte-1h4m89h .form-control.svelte-1h4m89h{border-radius:0;height:50px}#withInContent.svelte-1h4m89h .btn.svelte-1h4m89h{background-color:#4167b1;height:50px;color:#fff;border-radius:0}#withInContent.svelte-1h4m89h .Mybtn2.svelte-1h4m89h{background-color:#222 !important}",map:null},y=c((e,m,d,$)=>{let o=0,l=12,t=1e6,a=5,r=0;return e.css.add(f),`<div class="container aos-init aos-animate mb-5 mt-5" data-aos="fade-up"><div class="row svelte-1h4m89h" id="withInContent"><div class="col-12"><form><div class="frmDetails"><h3 class="mb-3">Mortgage Calculator for Dubai &amp; UAE</h3>                
                    <small>How much you can bare?</small>
                    <br><br> 

                    <div class="col-12 mb-3"><label for="exampleFormControlInput1" class="form-label">Property Value, AED ${s(t)}</label>
                        <input type="text" class="form-control svelte-1h4m89h" placeholder="Property Value, AED"${n("value",t,0)}></div>

                    <div class="col-12 mb-3"><label for="exampleFormControlInput1" class="form-label">Repayment Period, Years ${s(l)}</label>
                        <input type="text" class="form-control svelte-1h4m89h" placeholder="Repayment Period, Years"${n("value",l,0)}></div>

                    <div class="col-12 mb-3"><label for="exampleFormControlInput1" class="form-label">Current Interest Rate, ${s(a)}%</label>
                        <input type="text" class="form-control svelte-1h4m89h" placeholder="Current Interest Rate, %"${n("value",a,0)}></div>

                    <div class="col-12 mb-3"><label for="exampleFormControlInput1" class="form-label">Down Payment, AED ${s(r)}</label>
                        <input type="text" class="form-control svelte-1h4m89h" placeholder="Down Payment, AED"${n("value",r,0)}></div>

                    <p>Monthly Payment</p>
                    <div class="col-12 mb-3 result svelte-1h4m89h"><p class="svelte-1h4m89h"><strong class="svelte-1h4m89h">${s(o)} AED</strong> Monthly
                        </p></div>
                    
                    <div class="col-12 mb-3"><div class="row"><div class="col"><button class="btn btn-md Mybtn w-100 svelte-1h4m89h" disabled>Calculate Mortgage 
                                    <i class="FSbx bx bi-calculator"></i></button></div>

                            <div class="col"><button class="btn Mybtn2 btn-md w-100 svelte-1h4m89h">Get Free Advice                                
                                </button></div></div></div></div></form></div></div>        

</div>`}),_=c((e,m,d,$)=>{let o,l;l=h(b,v=>o=v);let t=[],a=o.url.pathname.split("/"),r=[],p=[];return l(),`
<section id="hero-noimage" class="d-flex align-items-center"></section>


<section id="drv-bread" class="section-bg">${i(g,"BreadCrumb").$$render(e,{imgbg:"/l9images/banners/"+t.imgname,LinkOne:a[1],LinkTwo:a[2],LinkThree:a[3],headings:t.name_fr,Bdtype:1,FstName_Fr:r.name_fr,LstName_Fr:p.name_fr},{},{})}
    ${i(u,"LeadFormLeft").$$render(e,{},{},{})}</section>


<section id="about" class="about"><div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content"><div class="col-lg-12 pt-4 pt-lg-0"><!-- HTML_TAG_START -->${t.description_fr?t.description_fr:"Content Required"}<!-- HTML_TAG_END --></div></div></div>

    ${i(y,"MortgageCalculator").$$render(e,{},{},{})}</section>
`}),L=c((e,m,d,$)=>`${e.head+=`${e.title="<title>Reals Estate Brokage</title>",""}<meta name="description" content="Reals Estate Brokage" data-svelte="svelte-2qn29r">`,""}
    
    
    ${i(_,"PropertyMortgageAdvisoryServices").$$render(e,{},{},{})}`);export{L as default};
