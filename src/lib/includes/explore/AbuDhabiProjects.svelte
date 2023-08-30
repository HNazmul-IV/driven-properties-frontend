<script>
    
    import { onMount } from 'svelte';    
    import { page } from '$app/stores'
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../base-url';

    let DAGs =[];
    let allContent =[];
    let currentPage; // Update this to simulate page change.
    let postsPerPage;
    let allPosts;
    let totalPosts;
    let totalPages;

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');


    onMount(async () =>{

        const response = await fetch(`${baseURL}/getAllSubCommunities/2`);
        const data = await response.json();
        DAGs = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data1 = await response1.json();
        pageContent = data1;
        //getSignleHeaderMenu API End        

    });

    const getData = (data)=>{

        //allContent = ["hi", "bye", "lie", "tie", "fry", "cry", "pie", "my", "guy"];
        allContent = data;
        currentPage = 1; // Update this to simulate page change.
        postsPerPage = 9;
        allPosts = allContent;
        totalPosts = allPosts.length;
        totalPages = Math.ceil(totalPosts / postsPerPage);

        //console.log(totalPosts, totalPages);

    };

    $: postRangeHigh = currentPage * postsPerPage;
    $: postRangeLow = postRangeHigh - postsPerPage;
    const setCurrentPage = newPage => { 
        currentPage = newPage; 
        //window.scrollTo(400, 400); 
    };

</script>

{ getData(DAGs) ? getData(DAGs) :"" }

<SEOTools MetaTitle ={pageContent.metatitle} MetaDescription ={pageContent.metadescription}/>

<BreadCrumb 
    LinkOne={pageSlug[1]} 
    LinkTwo={pageContent.name} 
    imgbg={pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_3917.jpg"}
    headings ={pageContent.name ? pageContent.name : "Why Dubai?" }
    Bdtype={2}
/>

<!--International Team -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        <div class="section-title mb-5">
            <h2 class="mb-4">{@html pageContent.titlename ? pageContent.titlename : "Abu Dhabi Projects" }</h2>
        </div>

        <div class="row content mb-5">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description ? pageContent.description : "Content Required" }
            </div>            
        </div>


        <div class="row">
            {#each DAGs as DubaiAreaGuides, i }
                {#if i >= postRangeLow && i < postRangeHigh}
                <div class="mb-4 col-lg-4  col-md-4 col-12 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <a href="/{pageSlug[1]}/{pageSlug[2]}/{DubaiAreaGuides.pcslug}" class="Dag">
                        <div class="icon-box">

                            <div class="icon">
                                <img src="/l9images/community/{DubaiAreaGuides.pcimgname}" alt="as" class="bx bxl-dribbble" />
                            </div>

                            <div class="icon-msg">
                                <h4>{DubaiAreaGuides.pctitle}</h4>
                                <p>{DubaiAreaGuides.pcmetatitle}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <!--International Team box DubaiAreaGuides.id-->
                {/if}
            {:else}
                <p>Not found or something went wrong!</p>
            {/each}                  
        </div>

        <div class="row mt-4">            

            <div class="col-12 text-left">

                <nav aria-label="Page navigation example">

                    <ul class="pagination justify-content-center">

                        {#if currentPage > 1}
                            <li class="page-item">
                                <a class="page-link" href="/dubai-properties-areas" on:click|preventDefault={() => setCurrentPage(1)}>
                                    first
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="/dubai-properties-areas/{currentPage - 1}" on:click|preventDefault={() => setCurrentPage(currentPage - 1)}>
                                    previous
                                </a>
                            </li>
                        {/if}

                        {#each [10,9,8,7,6,5,4,3,2,1] as i}
                            {#if currentPage - i > 0}
                                <li class="page-item">
                                    <a class="page-link" href="/dubai-properties-areas/{currentPage - i}" on:click|preventDefault={() => setCurrentPage(currentPage - i)}>
                                        {currentPage - i}
                                    </a>
                                </li>
                            {/if}
                        {/each}

                    
                        <li class="page-item"><span class="page-link active">{currentPage}</span></li>
                        

                        {#each Array(10) as _, i}
                            {#if currentPage + (i+1) <= totalPages}
                                <li class="page-item">
                                    <a class="page-link" href="/dubai-properties-areas/{currentPage + (i+1)}" on:click|preventDefault={() => setCurrentPage(currentPage + (i+1))}>
                                        {currentPage + (i+1)}
                                    </a>
                                </li>
                            {/if}
                        {/each}

                        {#if currentPage < totalPages}
                            <li class="page-item">
                                <a class="page-link" href="/dubai-properties-areas/{currentPage + 1}" on:click|preventDefault={() => setCurrentPage(currentPage + 1)}>
                                    next
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="/dubai-properties-areas/{totalPages}" on:click|preventDefault={() => setCurrentPage(totalPages)}>
                                    last
                                </a>
                            </li>
                        {/if}
                        
                    </ul>

                </nav> 
            </div>
        </div>
        
    </div>
</section>  
<!--International Team End -->  

<section id="why-us" class="why-us section-bg">

    <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description2 ? pageContent.description2 : "Content Required" } 
            </div>
        </div>
    </div>

    <div class="container">

        <div class="section-title">
            <h3 class="mt-5 mb-5">FAQs</h3>
        </div>

        <div class="row">
            <div class="accordion-list">
                <ul>
                    <li>
                        <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-2" aria-expanded="false">
                            <span>Q. Which are the new projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                A: The upcoming projects in Abu Dhabi are Reportage Al Raha Lofts, Reportage Oasis Residences Two, Emirates E13, DAMAC Marina Bay, ENI Villas, Bloom Park View, Aabar Al Durrah Tower, etc.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-3" aria-expanded="false">
                            <span>Q. Can foreigners buy property in Abu Dhabi and live permanently?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: Foreigners can buy properties in the UAE including some of the areas in Abu Dhabi. Being a foreign national, you will still have to abide by the Visa rules of the UAE which requires you to get your Visa sponsored.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-4" aria-expanded="false">
                            <span>Q. What do you need to know about the new projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: Some of the important information that you need to note about the new projects in Abu Dhabi is the project name, builder name, popular projects, the locations, and the current as well as future real estate market conditions.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-5" aria-expanded="false">
                            <span>Q. Why are people interested in new residential projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: People are interested in owning the new residential projects in Abu Dhabi because of the excellent infrastructure, stable real estate, booming economy, and outstanding living conditions in the city.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-6" aria-expanded="false">
                            <span>Q. Which are the most popular future projects in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-6" class="collapse" data-bs-parent=".accordion-list" style="">
                           <p>A: Some of the most popular future projects in Abu Dhabi are Al Raha Lofts 1 and 2, Al Ghadeer, Saadiyat Lagoons District Townhouses, Reflections at Reem Island, Oasis Residences 1, Al Jurf Gardens, Water’s Edge, The Bridges Apartments, Al Mahra Residence, and Marina Rise.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-7" aria-expanded="false">
                            <span>Q. Why should one invest in a property in Abu Dhabi?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-7" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: With the rapid growth in Abu Dhabi real estate market, there is an upward trend where the off-plan projects are providing an RoI of over 10-11% annually. Abu Dhabi has several exciting locations such as Yas Island, Al Reem Island, and Khalifa City A, which have in recent times provided excellent RoI.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</section>


<style>
    .Dag{color: #444444; text-decoration: none; }
    .why-us .content{padding:50px 0px 0 0px;}
    .section-title h2{font-size: 1.4rem;}
    .services .icon-box{ padding: 0px; margin: 0;}

    .services .icon-box .icon{margin:0; position: relative;}
    .services .icon-box > .icon img{ width: 100%;}
        /*
            .services .icon-box .icon > p {
                position: absolute; padding: 10px; color: inherit;
                bottom: 0; left: 0; right: 0; margin:0; 
                font-size: 1.1rem; font-weight: 400; letter-spacing: 0.5px;
            }
        */
    .services .icon-box .icon-msg {padding: 10px;}
    .services .icon-box .icon-msg >h4{ 
        font-size: 1.2rem; font-weight: 400 !important; margin-bottom: 7px; 
        line-height: 1.6rem;
    }
    
    .accordion-list{padding: 0;}
    .why-us .accordion-list li{ background-color: #dcdcdc;}
    .why-us .accordion-list { color: #222232;}
    .why-us .accordion-list span{ color: #222232; font-size: 1rem; font-weight:400;}
    .why-us .accordion-list a.collapsed:hover{ color: #222232;}
    .why-us .accordion-list i{ color: #222232; font-size: 1.7rem; font-weight:400;}
    .page-link{ 
        color:inherit; border:0; text-align: left;
        background-color: #f1f1f1; border-radius: 3px; line-height: 30px; 
        padding: 7px 21px; text-transform: capitalize; margin-left: 1px;
    }
    .page-link:focus{ color:#222232; box-shadow: 0 0 0 0.05rem rgb(0 0 0);}

    .page-link .active:focus{ background-color: #d3d3d3; color:#222232; box-shadow: 0 0 0 0.05rem rgb(0 0 0);}

    @media only screen and (max-width: 768px) {
        section{ padding:0;}
        .services .icon-box{ padding: 0px; margin:7px 15px;}
    }
</style>
    