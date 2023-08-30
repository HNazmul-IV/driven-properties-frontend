<script>
    
    import { onMount } from 'svelte';    
    import { page } from '$app/stores';

    import BreadCrumb from '$lib/ar/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../base-url';

    let DAGs =[];
    let DAGs1 =[];
    let allContent =[];
    let currentPage; // Update this to simulate page change.
    let postsPerPage;
    let allPosts;
    let totalPosts;
    let totalPages;
    let pageContent = [];

    let GetURLFstNAme =[];
    let GetURLLstNAme = [];
    let pageSlug = $page.url.pathname.split('/');

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getAllSubCommunities/1`);
        const data = await response.json();
        DAGs = data;
        console.log(DAGs);

        const response1 = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[pageSlug.length-1]}`);
        const data1 = await response1.json();
        DAGs1 = data1;
        console.log(DAGs1);

        const getFstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
        const dataFstFr = await getFstNameFr.json();
        GetURLFstNAme = dataFstFr;

        const getLstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
        const dataLstFr = await getLstNameFr.json();
        GetURLLstNAme = dataLstFr;
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

    };

    $: postRangeHigh = currentPage * postsPerPage;
    $: postRangeLow = postRangeHigh - postsPerPage;
    const setCurrentPage = newPage => { 
        currentPage = newPage; 
        //window.scrollTo(400, 400); 
    };

</script>

{ getData(DAGs) ? getData(DAGs) :"" }

<BreadCrumb 
    imgbg={pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_3917.jpg"}
    LinkOne={pageSlug[2]} LinkTwo={pageSlug[3]} 
    headings={pageContent.name_ar}
    FstName_ar={GetURLFstNAme.name_ar} LstName_ar={GetURLLstNAme.name_ar}
    Bdtype ={2}
/>

<!--International Team -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        <div class="section-title mb-5">
            <h2 class="mb-4">{@html DAGs1.metadescription_ar}</h2>
        </div>

        <div class="row content mb-5">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html DAGs1.description_ar ? DAGs1.description_ar : "Content Required" }
            </div>            
        </div>

        <!-- <div class="section-title mb-5">
            <h2 class="mb-4">{@html DAGs1.metadescription_ar}</h2>

            <div>{@html DAGs1.description_ar ? DAGs1.description_ar:'content not available!'}</div>

        </div> -->
        
        <div class="row">
            {#each DAGs as DubaiAreaGuides, i }
                {#if i >= postRangeLow && i < postRangeHigh}
                <div class="mb-4 col-lg-4  col-md-4 col-12 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">

                        <div class="icon">
                            <img src="/l9images/community/{DubaiAreaGuides.pcimgname}" alt="as" class="bx bxl-dribbble" />
                        </div>

                        <div class="icon-msg">
                            <h4>{DubaiAreaGuides.pctitle_ar}</h4>
                        </div>
                    </div>
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

                        {#each [3,2,1] as i}
                            {#if currentPage - i > 0}
                                <li class="page-item">
                                    <a class="page-link" href="/dubai-properties-areas/{currentPage - i}" on:click|preventDefault={() => setCurrentPage(currentPage - i)}>
                                        {currentPage - i}
                                    </a>
                                </li>
                            {/if}
                        {/each}

                        <li class="page-item"><span class="page-link active">{currentPage}</span></li>

                        {#each Array(3) as _, i}
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
    <div class="container">

        <div class="section-title">

            <div>{DAGs1.description2_ar ? DAGs1.description2_ar: ''}</div>
            
            <h3 class="mt-5 mb-5">FAQs</h3>

        </div>

        <div class="row">
            <div class="accordion-list">
                <ul>
                    <li>
                        <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-2" aria-expanded="false">
                            <span>Is it worth buying property in Dubai?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                A: If you have plans to live in the city for the recent future, then buying a property in Dubai is certainly a prudent idea. You can use the rental you pay for the EMIs and own a property in one of the best cities in the world.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-3" aria-expanded="false">
                            <span>Which is the best area to buy property in Dubai?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: The best areas in Dubai to buy a property are Downtown Dubai, Palm Jumeirah, Business Bay, Jumeirah Village Circle, International City, etc. There are also several other localities coming up which may interest you.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-4" aria-expanded="false">
                            <span>Is it a good time to buy property in Dubai 2021?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: Prices for private residential properties are likely to increase by the end of 2021. Therefore, customers who are looking forward to buying a property in Dubai can go ahead and invest their money into it before the prices shoot.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-5" aria-expanded="false">
                            <span>What are the benefits of buying property in Dubai?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: Dubai property market is known for being stable. Once you purchase a property here, it is only likely to increase in value. You can rent out the property to make more money out of it or can resale it for a better price.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-6" aria-expanded="false">
                            <span>What is the best investment in Dubai?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-6" class="collapse" data-bs-parent=".accordion-list" style="">
                           <p>A: The best investment idea in Dubai is undoubtedly real estate. Dubai is expanding and growing and with it are the numbers of expatriates living here. Therefore, you can buy a property here and rent it out to the expats.</p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-7" aria-expanded="false">
                            <span>What should I consider before buying property in Dubai?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-7" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>A: The foremost thing you need to consider before buying a property in Dubai is the location. Even if you resale it in the future, the location will matter. The other factors are proximity to transport, facilities around, size of the property, and the market condition at the time of buying the property.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</section>


<style>
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
    