<script>

    import { onMount } from 'svelte';    
    import { page } from '$app/stores'

    import BlogBannerTxt from '$lib/includes/explore/blogs/blogBannerTxt.svelte';
    import BlogLists from '$lib/includes/explore/blogs/leftBlogList.svelte';
    import LatestPost from '$lib/includes/explore/blogs/rightLatestPost.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../../base-url';
    

    let allBlogs =[];
    let pageContent =[];
    let sideBlogs=[];
    let pageSlug = $page.url.pathname.split('/');

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getAllPosts`);
        const data = await response.json();
        allBlogs = data;
        //getSignleHeaderMenu API End

        for (let i = 0; i < 5; i++) {
            sideBlogs = [...sideBlogs, allBlogs[i]];
        }

        const response1 = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data1 = await response1.json();
        pageContent = data1;
        //getSignleHeaderMenu API End
    });


</script>

<SEOTools MetaTitle ={pageContent.metatitle} MetaDescription ={pageContent.metadescription}/>

<BlogBannerTxt />
<!-- <ExclusiveProjects />
<PremiumListing /> -->

<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row">

            <BlogLists {allBlogs} />
            <!--Section Blog Lists End -->
            
            <LatestPost {sideBlogs} />
            <!--Section Blog Lists End -->

        </div>
    </div>

    
</section>

<style>

.section-bg{
    padding: 60px 0 60px 0 !important;
}
#services .container.aos-init.aos-animate {
    padding: 1em 7em;
}
@media(max-width: 768px){
    #services .container.aos-init.aos-animate {
        padding: 0 !important;
    }
}
</style>