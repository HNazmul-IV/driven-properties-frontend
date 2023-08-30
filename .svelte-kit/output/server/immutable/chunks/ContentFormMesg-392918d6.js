import{c as n,v as a,b as c,d as r}from"./index-7b7abb97.js";import{S as m}from"./Select-7c592fb8.js";/* empty css                                                      */const $={code:"#withInContent.svelte-m40ls3.svelte-m40ls3{background-color:#f3f5fa;border:1px solid #e1e1e1;padding:20px;color:#737373}#withInContent.svelte-m40ls3 .form-control.svelte-m40ls3{border-radius:0;height:50px}#withInContent.svelte-m40ls3 .form-select.svelte-m40ls3{border-radius:0;height:50px}#withInContent.svelte-m40ls3 .btn.svelte-m40ls3{background-color:#4167b1;height:50px;color:#fff;border-radius:0}",map:null},C=n((l,v,p,b)=>{let i=[],d=[],t={id:227,code:"+971",country:"United Arab Emirates"};l.css.add($);let o,s;do o=!0,s=`<div class="container aos-init aos-animate mb-5 mt-1" data-aos="fade-up"><div class="row svelte-m40ls3" id="withInContent"><div class="col-12"><h5>Sorry, we didn&#39;t find anything matching your search.</h5>
            <p>Please submit your details to get the property consultant advice:</p>
            
            <div class="frmDetails"><h3 class="mb-3">Contact Us</h3>

                <div class="col mb-3">
                    <input type="text" class="form-control svelte-m40ls3" id="fname" placeholder="Full Name"></div>

                <div class="col mb-3"><div class="d-flex flex-row "><div class="mypd p-0 col" id="MyCList">
                            
                            

                            ${a(m,"Select").$$render(l,{items:d,optionIdentifier:"Country",getSelectionLabel:e=>e.code+" "+e.country,getOptionLabel:e=>e.code+" "+e.country,placeholder:"Choose Your Country",tabindex:t.id,selectedValue:t.code},{selectedValue:e=>{t.code=e,o=!1}},{})}</div>
                
                        <div class="p-0 col-7">
                            <input type="text" class="form-control svelte-m40ls3" id="phone" placeholder="Phone / Mobile"></div></div></div>

                <div class="col mb-3">
                    <input type="email" class="form-control svelte-m40ls3" id="email" placeholder="Email Address"></div>

                <div class="col mt-3 mb-3"><h3>Additional Information Optional</h3></div>

                <div class="col mb-3">
                    <input type="text" class="form-control svelte-m40ls3" id="community" placeholder="Community or Tower"></div>

                <div class="col-12 mt-3 mb-3"><select id="FSRONE" name="bedrooms" class="form-select form-control frsone svelte-m40ls3"><option value="Bedrooms">Bedrooms</option>${c(i,(e,u)=>`<option${r("value",e.bdtitle,0)}><!-- HTML_TAG_START -->${e.bdtitle}<!-- HTML_TAG_END --></option>`)}</select></div>
                    
                <div class="col mb-3">
                    <button class="btn btn-md Mybtn w-100 svelte-m40ls3">Submit</button></div></div></div></div>        

    
    
</div>`;while(!o);return s});export{C};
