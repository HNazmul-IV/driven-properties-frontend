import{c as b,a as T,v as _,e as t,d as l,b as u}from"../../../immutable/chunks/index-7b7abb97.js";import h from"algoliasearch";import{p as A}from"../../../immutable/chunks/stores-73de46f1.js";import{B as v}from"../../../immutable/chunks/breadcrumb-1200daf2.js";import"../../../immutable/chunks/helpers-b1dcc375.js";const L="48O3SXQXMR",M="ec1af9fe04b917db992f934e4b96b695",S="tbl_properties",D=b((d,y,E,G)=>{let a,r;r=T(A,e=>a=e),h(L,M).initIndex(S);let m=[],s=a.url.pathname.split("/"),i="Sale",p="Apartment",o="Al Furjan",n=2,c=9e5,$=1e6;return r(),`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css">

${_(v,"BreadCrumb").$$render(d,{LinkOne:s[1],LinkTwo:s[2],Bdtype:2},{},{})}

<div data-sveltekit-prefetch class="container mt-3 mb-5"><h1>Driven Properties Listing</h1>
  <p>let&#39;s search properties.</p>
  <form><div class="row mt-5 mb-5"><div class="col"><label for="exampleInputEmail1">Min Price:<br> ${t(c)}</label>
        <input type="text" placeholder="Search..."${l("value",c,0)}></div>

      <div class="col"><label for="exampleInputEmail1">Max Price:<br> ${t($)}</label>
        <input type="text" placeholder="Search..."${l("value",$,0)}></div>

      <div class="col"><label for="exampleInputEmail1">Bedrooms:<br> ${t(n)}</label>
        <input type="text" placeholder="Search..."${l("value",n,0)}></div>

      <div class="col"><label for="exampleInputEmail1">Unit Type:<br> ${t(p)}</label>
        <input type="text" placeholder="Search..."${l("value",p,0)}></div>

      <div class="col"><label for="exampleInputEmail1">Ad Type:<br> ${t(i)}</label>
        <input type="text" placeholder="Search..."${l("value",i,0)}></div>

      <div class="col"><label for="exampleInputEmail1">Community:<br> ${t(o)}</label>
        <input type="text" placeholder="Search..."${l("value",o,0)}></div>

      <div class="col-12 mt-3 mb-3"><button type="submit" class="btn btn-primary btn-sm">Submit</button></div></div></form>

  <div class="row"><div class="table-responsive table-responsive-sm"><table class="table table-striped table-bordered table-sm"><tr><th>Property Name</th>
          <th>Community Name</th>
          <th>Area Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Type</th>
          <th>BedRooms</th></tr>

        ${u(m,e=>`<tr><td><!-- HTML_TAG_START -->${e.Property_Name}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Community}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Sub_Community}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Price}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Ad_Type}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Unit_Type}<!-- HTML_TAG_END --></td>
            <td><!-- HTML_TAG_START -->${e.Bedrooms}<!-- HTML_TAG_END --></td>
          </tr>`)}</table></div></div>
</div>`});export{D as default};
