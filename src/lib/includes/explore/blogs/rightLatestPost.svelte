<script>
    import {WordCount} from '$lib/helpers.js';
    import { afterUpdate, loop_guard } from 'svelte/internal';
    import { origin } from '../../../../base-url';
    export let sideBlogs;

</script>
<div class="col-md-4 col-lg-4 col-sm col-12" id="BlogsLatestPosts">

    <div class="section-title mb-5">
        <h2 class="text-uppercase">
            <span>Latest Posts</span>
        </h2>
    </div>

    <div class="row">
        {#each  sideBlogs as BlogPosts (BlogPosts.id)}
            <a href="/explore/blog/{BlogPosts.slug}">
                <div class="col-sm col-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                    <div class="icon-box">
                        <div class="row">

                            {#if BlogPosts.imgname}
                                <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                    <img alt="drvn" src="{origin}{BlogPosts.imglocal}{BlogPosts.imgname}" class="img-fluid" />
                                </div>
                                <div class="col-md-8 col-lg-8 col-sm-8 col-8">
                                    <h4>{BlogPosts.titlename}</h4>
                                </div>
                            {/if}
                            {#if !BlogPosts.imgname}
                                <div class="col-md-12 col-lg-12 col-sm-12 col-12">
                                    <h4>{BlogPosts.titlename}</h4>
                                </div>
                            {/if}

                        </div>
                    </div>
                </div> 
            </a>
            <!--Post 1 End-->
        {/each}

    </div>

    <div class="section-title mt-5">
        <h2 class="text-uppercase">
            <span>STAY IN TOUCH</span>
        </h2>
    </div>

    <div class="row">
        <div class="col-12 col-sm">
            <div class="d-flex flex-row bd-highlight mb-3">
                <!-- <div class="p-2 bd-highlight">Flex item 1</div>
                <div class="p-2 bd-highlight">Flex item 2</div>
                <div class="p-2 bd-highlight">Flex item 3</div>
                <div class="p-2 bd-highlight">Flex item 4</div>
                <div class="p-2 bd-highlight">Flex item 4</div> -->

                <div class="social-links">
                    <a href="https://twitter.com/DrivenRE" target="DrvnPage" class="twitter">
                      <i class="FSbx bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/c/DrivenPropertiesDubai/videos" target="DrvnPage" class="youtube">
                      <i class="FSbx bx bxl-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/DrivenPropertiesDubai" target="DrvnPage" class="facebook">
                      <i class="FSbx bx bxl-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/drivenproperties/" target="DrvnPage" class="instagram">
                      <i class="FSbx bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/driven-properties-real-estate?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F" target="DrvnPage" class="linkedin">
                      <i class="FSbx bx bxl-linkedin"></i>
                    </a>
                  </div>                
              </div>
        </div>
    </div>

</div>
<!--Section Blog Lists End -->

<style>
    #BlogsLatestPosts .icon-box img {
        border-radius: 7px 7px 7px 7px;
        display: block;
        height: 100%;
    }
</style>