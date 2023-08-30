import{c as i,a,v as n,b as l}from"../../../immutable/chunks/index-7b7abb97.js";import p from"algoliasearch/lite";import{p as c}from"../../../immutable/chunks/stores-73de46f1.js";import{B as A}from"../../../immutable/chunks/breadcrumb-1200daf2.js";import"../../../immutable/chunks/helpers-b1dcc375.js";const d="48O3SXQXMR",m="ec1af9fe04b917db992f934e4b96b695",$="tbl_properties";let h=2,b=2,L=9e5,M=1e6;const R=i((T,G,N,u)=>{let s,r;r=a(c,e=>s=e),p(d,m).initIndex($);let _=[],o=s.url.pathname.split("/"),t;return t=`Price:${L} TO ${M}`,t=`${t} AND (No_of_Rooms=${h}`,t=`${t} OR Bedrooms=${b})`,console.log(t),r(),`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css">




${n(A,"BreadCrumb").$$render(T,{LinkOne:o[1],LinkTwo:o[2],BDType:2},{},{})}

<div class="container mt-3 mb-5"><h1>Driven Properties Listing </h1>
  <p>Lets Sereach Properties.</p>
  <div class="row"><div class="table-responsive table-responsive-sm"><table class="table table-striped table-bordered table-sm"><tr><th>Property Name</th>
          
          <th>Community Name</th>
          <th>Area Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Type</th>
          <th>BedRooms</th></tr>      

      ${l(_,e=>`<tr><td><!-- HTML_TAG_START -->${e.Property_Name}<!-- HTML_TAG_END --></td>
          
          <td><!-- HTML_TAG_START -->${e.Community}<!-- HTML_TAG_END --></td>
          <td><!-- HTML_TAG_START -->${e.Sub_Community}<!-- HTML_TAG_END --></td>
          <td><!-- HTML_TAG_START -->${e.Price}<!-- HTML_TAG_END --></td>
          <td><!-- HTML_TAG_START -->${e.Ad_Type}<!-- HTML_TAG_END --></td>
          <td><!-- HTML_TAG_START -->${e.Unit_Type}<!-- HTML_TAG_END --></td>
          <td><!-- HTML_TAG_START -->${e.Bedrooms}<!-- HTML_TAG_END --></td></tr>        
        `)}</table></div></div>
</div>`});export{R as default};
