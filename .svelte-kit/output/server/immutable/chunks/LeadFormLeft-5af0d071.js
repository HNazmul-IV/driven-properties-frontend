import{c as b,b as o,e as l}from"./index-7b7abb97.js";const c={code:"#frmLeft.svelte-e24bbg.svelte-e24bbg.svelte-e24bbg{position:absolute;top:33vh;right:11vw}#frmLeft.svelte-e24bbg .col-lg-3.svelte-e24bbg.svelte-e24bbg,.col-md-3.svelte-e24bbg.svelte-e24bbg.svelte-e24bbg{width:25%;background-color:rgb(0 0 0 / 60%);color:#fff;padding:40px 20px}#frmLeft.svelte-e24bbg .frmDetails.svelte-e24bbg>h3.svelte-e24bbg{font-size:1.5rem;margin:0 0 15px 0;text-align:center}#frmLeft.svelte-e24bbg .form-control.svelte-e24bbg.svelte-e24bbg{font-size:0.9rem;line-height:1.6rem;background-color:rgb(97 97 97 / 0%);border:1px solid #fff;border-radius:0;margin:0px 0px 20px 0px;color:#fff}#frmLeft.svelte-e24bbg .Mybtn.svelte-e24bbg.svelte-e24bbg{width:100%;color:#fff;background-color:#263977;border-color:#263977;border-radius:4px}.svelte-e24bbg.svelte-e24bbg.svelte-e24bbg::placeholder{color:#fff}@media only screen and (max-width: 768px){#frmLeft.svelte-e24bbg.svelte-e24bbg.svelte-e24bbg{top:40%;right:0}#frmLeft.svelte-e24bbg .col-lg-3.svelte-e24bbg.svelte-e24bbg,.col-md-3.svelte-e24bbg.svelte-e24bbg.svelte-e24bbg{width:100%;background-color:rgb(0 0 0 / 60%);color:#fff;padding:40px 20px}}",map:null},i=b((t,r,v,d)=>{let s=[];return t.css.add(c),`<div class="container svelte-e24bbg" id="frmLeft"><div class="row svelte-e24bbg"><div class="col-md-3 col-lg-3 col offset-md-9 offset-lg-9 float-end svelte-e24bbg"><div class="frmDetails svelte-e24bbg"><h3 class="svelte-e24bbg">REGISTER YOUR INTEREST</h3>

                <div class="col svelte-e24bbg">
                    <input type="text" class="form-control svelte-e24bbg" id="fname" placeholder="Full Name"></div>

                <div class="col svelte-e24bbg"><div class="d-flex flex-row  svelte-e24bbg"><div class="mypd p-0 col svelte-e24bbg">
                            
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select svelte-e24bbg"><option selected value="---Select Country Code" class="svelte-e24bbg">---Select Country Code</option>${o(s,(e,a)=>`<option value="${"+"+l(e.code,!0)}" class="svelte-e24bbg">+${l(e.code)} ${l(e.country)}</option>`)}</select></div>
                        <div class="p-0 col-7 svelte-e24bbg">
                            <input type="text" class="form-control svelte-e24bbg" id="phone" placeholder="Phone / Mobile"></div></div></div>

                <div clas s="col" class="svelte-e24bbg">
                    <input type="email" class="form-control svelte-e24bbg" id="email" placeholder="Email Address"></div>

                <div clas s="col" class="svelte-e24bbg">
                    <button class="btn btn-md Mybtn svelte-e24bbg">Submit</button></div></div></div></div>
</div>`});export{i as L};
