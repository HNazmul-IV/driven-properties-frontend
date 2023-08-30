<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';

    import HeaderSearchForm from '$lib/headers/header-search-form.svelte';
    import { baseURL } from '../../../base-url';
    
    let pageContent = [];
    let url = ``;
    let pageSlug = $page.url.pathname.split('/');
    let searchData = "";
    let pageStatus = '';
    const dispatch = createEventDispatcher();

    afterUpdate(()=> {
        url = window.location.href;
        pageStatus = url.split('/')[3].split('-')[2]; // rent/sale
    })

    // onMount function
    onMount(async() =>{ loadData(); });
    const loadData = async ()=>{        
        console.log(pageSlug[1].split('-')[2]);
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End
    };

    let status, community, property, bed, minPrice, maxPrice;

    const onAddChanges = ({detail}) => {
        searchData = detail;
        console.log(searchData.Status);
        if(searchData.Status === "sale" || searchData.Status === "rent"){
            status = searchData.Status ? String(searchData.Status) : 'sale'; // Sale
        }else{
            status = searchData.Ad_Type ? String(searchData.Ad_Type) : 'sale'; // Sale
        }
        community = searchData.Property_Title.agserach ? String(searchData.Property_Title.agserach).replaceAll(' ', '-'): 'any'; // Palm Jumeirah
        property = searchData.Unit_Type ? String(searchData.Unit_Type).replaceAll(' ', '-'): 'any'; // apartment
        bed = searchData.No_of_Rooms ? searchData.No_of_Rooms: 'any'; // 3
        minPrice = searchData.minPrice ? searchData.minPrice: 0; // 0
        maxPrice = searchData.maxPrice ? searchData.maxPrice: 150000000; // 150000000

        goto(`/properties-for-${status.toLowerCase()}/${community.toLowerCase()}/${property.toLowerCase()}/${bed}/${minPrice}-${maxPrice}`);
    }

</script>


<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>

<section id="drv-bread" class="section-bg">
    <div class="container mt-5">
        <h1 class="text-capitalize search-page-title">Property for {pageStatus?pageStatus: 'sale'}</h1>
    </div>
</section>
<!-- End Hero -->

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate " data-aos="fade-up">
        <div class="row content">
            <div class="offcanvas-body container">
                <HeaderSearchForm status={"Sale"} on:frmOnChanges={onAddChanges} />
            </div>
        </div>
    </div>
</section>
<!-- End About Us Section -->

<style>
    section{
        padding: 0;
    }
    
    #drv-bread {
        height: 35vh;
        width: 100%;
        text-align: left;
        padding-top: 100px;
        color: white;
        overflow: hidden;
        background: var(--Drvn-headerColor);
        background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');
        background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    #hero-noimage {
        height: auto;
        background-color: transparent;
        padding: 0 0;
    }
    h1.text-capitalize.search-page-title {
        font-size: 36px;
    }
</style>