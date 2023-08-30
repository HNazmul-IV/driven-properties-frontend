import{c as r,a as k,e as l,n as t,b as a}from"./index-7b7abb97.js";/* empty css                                             */import{p as i}from"./stores-73de46f1.js";/* empty css                                                    */const c={code:"#frmLeft.svelte-lkkohv.svelte-lkkohv{position:absolute;top:33vh;right:11vw}#frmLeft.svelte-lkkohv .col-lg-3.svelte-lkkohv,.col-md-3.svelte-lkkohv.svelte-lkkohv{background-color:rgb(0 0 0 / 60%);color:#fff;padding:20px 20px;width:1000px}#frmLeft.svelte-lkkohv .lead-form-for-home.svelte-lkkohv{border-radius:4px !important}@media(max-width: 768px){.lead-form-for-home.svelte-lkkohv .frmDetails select.svelte-lkkohv{margin-left:0 !important}}#frmLeft.svelte-lkkohv .form-control.svelte-lkkohv{font-size:0.9rem;line-height:1.6rem;background-color:rgb(97 97 97 / 0%);border:1px solid #fff;border-radius:0;margin:0px 0px 20px 0px;color:#fff}#frmLeft.svelte-lkkohv .Mybtn.svelte-lkkohv{width:100%;color:#333;background-color:#fff;border-radius:4px}.other-pages.svelte-lkkohv.svelte-lkkohv{position:absolute;right:0}.svelte-lkkohv.svelte-lkkohv::placeholder{color:#fff}@media only screen and (max-width: 768px){#frmLeft.svelte-lkkohv.svelte-lkkohv{top:40%;right:0vw !important}#frmLeft.svelte-lkkohv .col-lg-3.svelte-lkkohv,.col-md-3.svelte-lkkohv.svelte-lkkohv{width:90%;margin:10px;background-color:rgb(0 0 0 / 60%);color:#fff;padding:20px 20px}.p-0.col-7.svelte-lkkohv.svelte-lkkohv{width:auto}#frmLeft.other-page.svelte-lkkohv .col-lg-3.svelte-lkkohv,.col-md-3.svelte-lkkohv.svelte-lkkohv{width:100%;margin:0px;background-color:#000000c7;color:#fff;padding:20px 20px;top:54px}}",map:null},g=r((s,h,d,p)=>{let o;o=k(i,e=>e);let v=[];return s.css.add(c),o(),`<div id="frmLeft" class="${l(t("other-page container"),!0)+" svelte-lkkohv"}"><div class="row svelte-lkkohv"><div class="${l(t("other-pages col-md-3 col-lg-3 col offset-md-9 offset-lg-9 col-sm-11 offset-sm-1 float-end"),!0)+" svelte-lkkohv"}">

            <div class="frmDetails svelte-lkkohv"><h3 class="svelte-lkkohv">Teilen Sie Ihr Interesse mit</h3>

                <div class="col svelte-lkkohv">
                    <input type="text" class="form-control input-home svelte-lkkohv" id="fname" placeholder="Vollst\xE4ndiger Name"></div>

                <div class="col svelte-lkkohv"><div class="d-flex flex-col  svelte-lkkohv"><div class="mypd p-0 col svelte-lkkohv">
                            
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select input-home svelte-lkkohv"><option selected value="L\xE4ndervorwahl" class="svelte-lkkohv">L\xE4ndervorwahl</option>${a(v,(e,n)=>`<option value="${"+"+l(e.code,!0)}" class="svelte-lkkohv">+${l(e.code)} ${l(e.country)}</option>`)}</select></div>
                        <div class="p-0 col-7 svelte-lkkohv">
                            <input type="text" class="form-control input-home svelte-lkkohv" id="phone" placeholder="Festnetz-/Mobiltelefonnummer"></div></div></div>

                <div class="col svelte-lkkohv">
                    <input type="email" class="form-control input-home svelte-lkkohv" id="email" placeholder="E-Mail-Adresse"></div>

                <div class="col svelte-lkkohv">
                    <button class="btn btn-md Mybtn svelte-lkkohv">Absenden</button></div></div></div></div>
</div>`});export{g as L};
