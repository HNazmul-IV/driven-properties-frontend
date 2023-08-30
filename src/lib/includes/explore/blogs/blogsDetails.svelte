<script>
    
    import { onMount } from 'svelte';
    import { page } from '$app/stores'

    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import {WordCount} from '$lib/helpers.js';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL, origin } from '../../../../base-url';

    let pageContent = [];
    let PostContent =[];
    let allBlogs=[];
    let pageSlug = $page.url.pathname.split('/');
    const count=28;

    //console.log(pageSlug[2], pageSlug[3]);

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSinglePost/${pageSlug[3]}`);
        const data = await response.json();
        PostContent = data;
        const ID = PostContent.id;
        //getSignleHeaderMenu API End
        
        const response1 = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data1 = await response1.json();
        pageContent = data1;
        //getSignleHeaderMenu API End

        const response2 = await fetch(`${baseURL}/getLatestPosts/${ID}`);
        const data2 = await response2.json();
        allBlogs = data2;
        //getSignleHeaderMenu API End
        
    });

    const gDateFull = (GData)=>{
        
        //console.log(GData);
        const d = new Date();
        const Year = d.getFullYear();
        // const Months = d.getMonth();
        const Months = d.toLocaleString('default', { month: 'long' });
        const day = d.getDate();
        console.log(day, Months, Year);

        // return day + (31==d||21==d||1==d ? "st" : 22==d||2==d ? "nd" : 23==d || 3==d ? "rd" :"th")
        return day + (31==day||21==day||1==day ? "st" : 22==day||2==day ? "nd" : 23==day || 3==day ? "rd" :"th")+" "+Months+" "+Year;
        
    };
    
</script>

<SEOTools MetaTitle ={`${pageContent.name} - ${PostContent.metatitle}`} MetaDescription ={PostContent.metadescription}/>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
<BreadCrumb 
    LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} 
    headings={pageSlug[3]+" - "+pageContent.name} Bdtype={3}
/>
</section>

<!--Single Post/ Post Details Start -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" id="MainContent" data-aos="fade-up">
            
        <div class="section-title">

            <h2>{@html PostContent.titlename ? PostContent.titlename : "Abu Dhabi Projects" }</h2>

            <div class="UpDatewith">
                <p>Last modified on {gDateFull(PostContent.updated_at)}. Dubai Real Estate Blog</p>
            </div>

            <div class="Writter">
                <p>By: {@html PostContent.wittername ? PostContent.wittername : "Abu Dhabi Projects" }</p>
            </div>
            
        </div>
        
        <div class="row content mb-5">
            {#if PostContent.blogtemplate === 'LeftImage'}
                <div class="col-lg-12 pt-4 pt-lg-0" id="MyContent">
                    <div class="myLImgWithText">
                        <img alt="drvn" src="{origin}{PostContent.imglocal}{PostContent.imgname}" class="img-fluid" />
                        {@html PostContent.description ? PostContent.description : "Content Required" }
                    </div>
                </div>

            {:else if PostContent.blogtemplate === 'RightImage'}
                <div class="col-lg-12 pt-4 pt-lg-0" id="MyContent">
                    <div class="myRImgWithText">
                        <img alt="drvn" src="{origin}{PostContent.imglocal}{PostContent.imgname}" class="img-fluid" />
                        {@html PostContent.description ? PostContent.description : "Content Required" }
                    </div>
                </div>

            {:else}
                <div class="col-lg-12 pt-4 pt-lg-0"> 
                    <img alt="drvn" src="{origin}{PostContent.imglocal}{PostContent.imgname}" class="img-fluid MainImage" />
                </div> 
                        
                <div class="col-lg-12 pt-4 pt-lg-0" id="MyContent"> 
                    {@html PostContent.description ? PostContent.description : "Content Required" }
                </div>

            {/if}

        </div>

    </div>
</section>  
<!--Single Post/ Post Details End -->

<!--Latest 3 Posts Start -->
<section id="LatestPosts">
    <div class="container">
        <div class="row">

            <div class="col-md-12 col-lg-12 col-sm col-12" id="BlogLists">

                <div class="section-title mb-5">
                    <h2 class="text-uppercase">
                        <span>LATEST POSTS</span>
                    </h2>
                </div>

                <div class="row">
                    {#each  allBlogs as BlogPosts (BlogPosts.id) }
                        <div class="col-md-4 col-lg-4 col-sm col-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <a sveltekit:reload href="/explore/blog/{BlogPosts.slug}">
                                <div class="icon-box">
                                    <img alt="drvn" src="{origin}{BlogPosts.imglocal}{BlogPosts.imgname}" class="img-fluid" />
                                    <h4>{BlogPosts.titlename.slice(0, count) + (BlogPosts.titlename.length > count ? "..." : "")}</h4>
                                    <!-- <div class="blog-title-box"><h4>{BlogPosts.titlename}</h4></div> -->
                                    <p>
                                        {@html BlogPosts.description.slice(0, count*4) + (BlogPosts.description.length > count*4 ? " Read More..." : "")  }
                                    </p>
                                </div>
                            </a>
                        </div>
                        <!--Post {{BlogPosts.id}} End-->
                        {:else}
                        No Result found
                    {/each}
                </div>
            </div>
        </div>
    </div>    
</section>
<!--Latest 3 Posts End -->

<style>

    #MainContent div.section-title > h2{
        font-size: 1.4rem; font-weight: 600 !important; color: inherit; margin: 0 0 20px 0px; 
        padding-bottom: 10px; border-bottom: 1px solid;
    }

    #MainContent img.MainImage{
        width: 100%; padding-bottom: 10px;
    }

    
    div.UpDatewith > p{font-size: 1rem; padding-bottom: 5px; font-weight:400;}
    div.Writter > p{font-size: 0.8rem; padding-bottom: 5px; font-weight: 400;}


    @media only screen and (max-width: 768px) {
        #services{ padding: 0px 0 60px 0;} 
        #MainContent div.section-title > h2{font-size: 1rem;}
        div.UpDatewith > p{font-size: 0.9rem; padding-bottom: 10px;}        
    }
</style>
    