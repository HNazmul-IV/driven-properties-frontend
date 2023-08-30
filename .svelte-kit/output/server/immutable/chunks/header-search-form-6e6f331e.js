import{c as g,a as w,f as S,d as t,v as d,b as u,e as $}from"./index-7b7abb97.js";import{p as P}from"./stores-73de46f1.js";import{S as T}from"./Select-7c592fb8.js";import{R as k}from"./RangeSlider-6678e381.js";const _={code:".price-block.svelte-7izhkn.svelte-7izhkn{position:relative;display:inline-block;width:40%;color:#999;font-weight:bold}.price-block.svelte-7izhkn .price.svelte-7izhkn{padding:13px 5px 0px 53px;width:100%;font-size:15px;color:#666}.price-block.svelte-7izhkn .price-symbol.svelte-7izhkn{position:absolute;font-size:12px;color:#666;left:4px;top:18px}.price-block.svelte-7izhkn label.svelte-7izhkn{position:absolute;font-size:13px;left:3px;font-weight:500;color:black}.dash-sign.svelte-7izhkn.svelte-7izhkn{display:inline;margin:0px 10px 10px !important;font-weight:bold;font-size:30px;color:#999}.input-group.svelte-7izhkn.svelte-7izhkn{display:flex !important}button.headerSearch-button.svelte-7izhkn.svelte-7izhkn{border:1px solid white;border-radius:none;width:100%}#DrvnSlider.svelte-7izhkn input.svelte-7izhkn{display:inline-block}.range-slider-input-container.svelte-7izhkn.svelte-7izhkn{text-align:center;display:flex;flex-flow:wrap-reverse}@media only screen and (max-width: 768px){.BxInfo-row.svelte-7izhkn.svelte-7izhkn{padding:0 10px}}",map:null};let R="";const A=g((a,s,i,B)=>{let v;v=w(P,e=>e);let{BedRoomType:c=[]}=s,{PropertyType:p=[]}=s,{status:l}=s,b=[],h="sale";console.log(R),S();let y=l,z=" ",n=[0,15e7],o=[0,3e6];const f=()=>{h=l==="Rent"?"rent":"sale"};s.BedRoomType===void 0&&i.BedRoomType&&c!==void 0&&i.BedRoomType(c),s.PropertyType===void 0&&i.PropertyType&&p!==void 0&&i.PropertyType(p),s.status===void 0&&i.status&&l!==void 0&&i.status(l),a.css.add(_);let r,m;do r=!0,f(),m=`<div class="row header-search"><div class="col-lg-12 aos-init aos-animate" data-aos="fade-up"><form><div class="row BxInfo-row svelte-7izhkn"><div class="combine-status-community row mb-2 mt-2"><div class="col-lg-2 col-md-6 status-search"><select id="status" name="status" class="form-select frsone"><option value="sale">For Sale </option><option value="rent">For Rent </option></select></div>
                    
                    <div${t("class","col-lg-10  col-md-6 community-search",0)}><div class="input-group svelte-7izhkn" id="MyCommunityLists1">${d(T,"Select").$$render(a,{items:b,optionIdentifier:e=>e.agserach,getSelectionLabel:e=>e.agserach,getOptionLabel:e=>e.agserach,placeholder:"Search Location or Project (e.g. Business Bay)\u2026.",showChevron:"true",isClearable:"true",noOptionsMessage:"We can't find your search query. Please check your spelling or try a different location."},{},{})}
                            <input type="hidden" name="protitle" id="Community"${t("value",z.agserach,0)}></div></div></div>

                
                <div class="col-lg-4 col-md-6 mt-2"><select id="protype" name="protype" class="form-select frsone"><option value="Property Type">Property Type</option>${u(p,(e,x)=>`<option${t("value",e.pttitle,0)}>${$(e.pttitle)} </option>`)}</select></div>

                <div class="col-lg-4 col-md-6 mt-2"><select id="bedrooms" name="bedrooms" class="form-select frsone"><option value="Bedrooms Type">Bedrooms Type</option>${u(c,(e,x)=>`<option${t("value",e.bdtitle,0)}>${$(e.bdtitle)}</option>`)}</select></div>
                <div class="col-lg-4 col-md-6 mt-2 svelte-7izhkn" id="DrvnSlider">${h==="rent"||y==="Rent"&&l==="rent"?`${d(k,"RangeSlider").$$render(a,{min:0,max:3e6,pips:!0,values:o},{values:e=>{o=e,r=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-7izhkn"><div class="price-block svelte-7izhkn"><label class="svelte-7izhkn">min price</label><span class="price-symbol svelte-7izhkn">\u062F.\u0625 (AED)</span><input type="text" class="price minprice svelte-7izhkn" name="minPrice"${t("value",o[0],0)}></div> 
                            <div class="dash-sign svelte-7izhkn">-</div>
                            
                            <div class="price-block svelte-7izhkn"><label class="svelte-7izhkn">max price</label><span class="price-symbol svelte-7izhkn">\u062F.\u0625 (AED)</span><input type="text" class="price maxprice svelte-7izhkn" name="maxPrice"${t("value",o[1],0)}></div></div>`:`${d(k,"RangeSlider").$$render(a,{min:0,max:15e7,pips:!0,values:n},{values:e=>{n=e,r=!1}},{})}
                        
                        <div class="range-slider-input-container svelte-7izhkn"><div class="price-block svelte-7izhkn"><label class="svelte-7izhkn">min price</label><span class="price-symbol svelte-7izhkn">\u062F.\u0625 (AED)</span><input type="text" class="price minprice svelte-7izhkn" name="minPrice"${t("value",n[0],0)}></div> 
                            <div class="dash-sign svelte-7izhkn">-</div>
                            
                            <div class="price-block svelte-7izhkn"><label class="svelte-7izhkn">max price</label><span class="price-symbol svelte-7izhkn">\u062F.\u0625 (AED)</span><input type="text" class="price maxprice svelte-7izhkn" name="maxPrice"${t("value",n[1],0)}></div></div>`}</div>
                <div class="offcanvas-buttons"><button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="headerSearch-button btn btn-dark button-search svelte-7izhkn"><i class="bi bi-search"></i> 
                        Search
                    </button></div></div></form></div></div>
`;while(!r);return v(),m});export{A as H};
