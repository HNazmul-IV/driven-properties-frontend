<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/commons/LeadFormLeft.svelte'
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../base-url';

    let pageContent = [];
    let Offices = [];
    
    let pageSlug = $page.url.pathname.split('/');
    onMount(async () =>{
        
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End


        // const tble ='tbl_contactaddresses'; 
        // const fields = 'id'; 
        // const myArray = {id:1}; 
        // const arr = encodeURIComponent(JSON.stringify(myArray));
        // const response1 = await fetch(`${baseURL}/getAllRecords/${tble}/${fields}/${arr}`);

        const response1 = await fetch(`${baseURL}/getAllRecords/tbl_contactaddresses`);
        const data1 = await response1.json();
        Offices = data1;
        //getOffices API End        

    });
    //console.log(pageSlug);


</script>

<SEOTools MetaTitle ={pageContent.name} MetaDescription ={pageContent.name}/>

<BreadCrumb 
    imgbg = {"/l9images/banners/"+pageContent.imgname} LinkOne={pageSlug[1]} 
    LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageContent.name} Bdtype={1}
/>
<LeadFormLeft/>


<!-- ======= About Us Section ======= -->
<section id="about-us" class="about-us section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <!--div class="section-title">
            <h2>{@html pageContent.name ? pageContent.name : "Corporate Occupier Services" }</h2>
        </div-->

        <div class="row content">

            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description ? pageContent.description : "Content Required" } 
            </div>

        </div>

        <div class="row mt-5">

            <div class="section-title mt-5">
                <h2> Contact Location </h2>
            </div>
            
            <div class='row'>
                
                {#each Offices as officeAddress (officeAddress.id)}
                    
                    <div class="col-lg-4 col-md-4 col-sm mb-5 pt-4 pt-lg-0 myAddressStyle {officeAddress.id % 2 !== 0 ? 'MyContactBg': '' }">
                        <h6 class='mb-3'>{officeAddress.contacttype}</h6>
                        {@html officeAddress.address ? `<p>${officeAddress.address}</p>` :''}
                        {@html officeAddress.addressline1 ? `<p>${officeAddress.addressline1}</p>` :''}
                        {@html officeAddress.addressline2 ? `<p>${officeAddress.addressline2}</p>` :''}
                        {@html officeAddress.addressline3 ? `<p>${officeAddress.addressline3}</p>` :''}
                        {@html officeAddress.addressline4 ? `<p>${officeAddress.addressline4}</p>` :''}
                        {@html officeAddress.phone ? `<p>Tel: ${officeAddress.phone}</p>` :''}
                        {@html officeAddress.fax ? `<p>Fax: ${officeAddress.fax}</p>` :''}

                    </div>                    
                {/each}
            </div>

        </div>
        
    </div>
</section>
<!-- End About Us Section -->

<style>
.myAddressStyle{ padding-top: 20px !important; padding-bottom: 10px !important;}
.MyContactBg{background-color:#f9f9f9; border-radius: 4px;}
</style>