import{c,a as v,e as g,n,d as l,v as y}from"./index-7b7abb97.js";import{S as f}from"./Select-7c592fb8.js";import{p as m}from"./stores-73de46f1.js";/* empty css                                                   */const $={code:"#frmLeft.svelte-gputyr.svelte-gputyr.svelte-gputyr{position:absolute;top:33vh;right:11vw}.frmDetails.svelte-gputyr input.svelte-gputyr.svelte-gputyr{border-radius:44px !important}#frmLeft.svelte-gputyr .col-lg-3.svelte-gputyr.svelte-gputyr,.col-md-3.svelte-gputyr.svelte-gputyr.svelte-gputyr{background-color:rgb(0 0 0 / 60%);color:#fff;padding:40px 20px}#frmLeft.svelte-gputyr .frmDetails.svelte-gputyr>h3.svelte-gputyr{font-size:1.5rem;margin:0 0 15px 0;text-align:center}#frmLeft.svelte-gputyr .form-control.svelte-gputyr.svelte-gputyr{font-size:0.9rem;line-height:1.6rem;background-color:rgb(97 97 97 / 0%);border:1px solid #fff;border-radius:0;margin:0px 0px 20px 0px;color:#fff}#frmLeft.svelte-gputyr .Mybtn.svelte-gputyr.svelte-gputyr{width:100%;color:#263977;background:white;border-color:#263977;border-radius:61px;border:1px solid #263977 !important}.svelte-gputyr.svelte-gputyr.svelte-gputyr::placeholder{color:#fff}@media only screen and (max-width: 768px){#frmLeft.svelte-gputyr.svelte-gputyr.svelte-gputyr{top:40%;right:0}}@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-device-pixel-ratio: 2){#frmLeft.svelte-gputyr.svelte-gputyr.svelte-gputyr{top:40%;right:0}#frmLeft.svelte-gputyr .col-lg-3.svelte-gputyr.svelte-gputyr,.col-md-3.svelte-gputyr.svelte-gputyr.svelte-gputyr{width:100%;background-color:rgb(0 0 0 / 60%);color:#fff;padding:40px 20px}}",map:null},E=c((r,b,x,h)=>{let s;s=v(m,e=>e);let d=[],i="",a="",u="",o={code:"+971",country:"United Arab Emirates"};r.css.add($);let t,p;do t=!0,p=`<div class="container svelte-gputyr" id="frmLeft"><div class="row svelte-gputyr"><div class="${g(n("col-md-3 col-lg-3 col offset-md-9 offset-lg-9 col-sm-11 offset-sm-1 float-end"),!0)+" svelte-gputyr"}">

            <div class="frmDetails svelte-gputyr"><h3 class="svelte-gputyr">REGISTER YOUR INTEREST</h3>

                <div class="col svelte-gputyr">
                    <input type="text"${l("value",u,0)} class="form-control svelte-gputyr" id="fname" placeholder="Full Name"></div>

                <div class="col svelte-gputyr"><div class="d-flex flex-row  svelte-gputyr"><div class="mypd p-0 col svelte-gputyr" id="MyCountiresList">
                            
                            

                            ${y(f,"Select").$$render(r,{id:"country-code",items:d,optionIdentifier:"Country",getSelectionLabel:e=>e.code+" "+e.iso,getOptionLabel:e=>e.code+" "+e.country,placeholder:"Country Code",selectedValue:o.code},{selectedValue:e=>{o.code=e,t=!1}},{})}</div>
                        <div class="p-0 col-7 svelte-gputyr">
                            <input type="text" class="form-control svelte-gputyr"${l("value",a,0)} id="phone" placeholder="Phone / Mobile"></div></div></div>

                <div clas s="col" class="svelte-gputyr">
                    <input type="email" class="form-control svelte-gputyr"${l("value",i,0)} id="email" placeholder="Email Address"></div>

                <div clas s="col" class="svelte-gputyr">
                    <button class="btn btn-md Mybtn svelte-gputyr">Submit</button></div></div></div></div>
</div>`;while(!t);return s(),p});export{E as L};
