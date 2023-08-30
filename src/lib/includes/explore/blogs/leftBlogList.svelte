<script>

    import MyCSPaginations from '$lib/commons/pagination.svelte';
    import {WordCount} from '$lib/helpers.js';
    import { onMount } from 'svelte';
    import { origin } from '../../../../base-url';

    export let allBlogs;

    const count = 30;

</script>

<div class="col-md-8 col-lg-8 col-sm col-12" id="BlogLists">

    <div class="section-title mb-5">
        <h2 class="text-uppercase">
            <span>Real Estate News</span>
        </h2>
    </div>

    
    <div class="row leftBlogContainer">
        {#each  allBlogs as BlogPosts (BlogPosts.id) }
            <div class="col-md-6 col-lg-6 col-sm col-12 d-flex flex-column align-items-stretch  order-2 order-lg-1">
                <figure>
                    <a href="/explore/blog/{BlogPosts.slug}">
                        <div class="icon-box">
                            {#if BlogPosts.imgname}
                            <img alt="drvn" src="{origin}{BlogPosts.imglocal}{BlogPosts.imgname}" class="img-fluid" />
                            {/if}
                            <h4>{BlogPosts.titlename.slice(0, count) + (BlogPosts.titlename.length > count ? "..." : "")}</h4>
                            <!-- <div class="blog-title-box"><h4>{BlogPosts.titlename}</h4></div> -->
                            <p>
                                {@html BlogPosts.description.slice(0, count*4) + (BlogPosts.description.length > count*4 ? "<span class='read-more'> Read More ></span>" : "")  }
                            </p>
                        </div>
                    </a>
                </figure>
            </div>
            <!--Post {{BlogPosts.id}} End-->
        {/each}

    </div>

    <MyCSPaginations TotalRecords={allBlogs}/>

</div>
<!--Section Blog Lists End -->

<style>
#BlogLists .icon-box img {
    height: 250px;
    width: 100%;
    margin: auto;
    display: block;
    /* box-shadow: 0px -42px 50px 33px #eee; */
}
#BlogLists .icon-box {
    padding: 0px;
    margin-bottom: 30px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 3px #ccc;
    overflow: hidden;
    transition-duration: .3s;
}
#BlogLists .icon-box:hover {
    background: #222;
    color: #fff !important;
}
#BlogLists .icon-box:hover h4 {
    color: #fff;
}

</style>