<script>
    
    import { onMount } from 'svelte';    
    import { page } from '$app/stores'

    import BreadCrumb from '$lib/ru/commons/breadcrumb.svelte';
    import { baseURL, origin } from '../../../../base-url';


    let DAGs =[];
    let allContent =[];
    let currentPage; // Update this to simulate page change.
    let postsPerPage;
    let allPosts;
    let totalPosts;
    let totalPages;

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');

    let GetURLFstNAme =[];
    let GetURLLstNAme = [];

    
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getAllSubCommunities/1`);
        const data = await response.json();
        DAGs = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data1 = await response1.json();
        pageContent = data1;
        //getSignleHeaderMenu API End

        const getFstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
        const dataFstFr = await getFstNameFr.json();
        GetURLFstNAme = dataFstFr;

        const getLstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
        const dataLstFr = await getLstNameFr.json();
        GetURLLstNAme = dataLstFr;

    });

    const getData = (data)=>{

        //allContent = ["hi", "bye", "lie", "tie", "fry", "cry", "pie", "my", "guy"];
        allContent = data;
        currentPage = 1; // Update this to simulate page change.
        postsPerPage = 200;
        allPosts = allContent;
        totalPosts = allPosts.length;
        totalPages = Math.ceil(totalPosts / postsPerPage);

        console.log(totalPosts, totalPages);
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
    LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} 
    headings={pageContent.name_de}
    FstName_Fr={GetURLFstNAme.name_de} LstName_Fr={GetURLLstNAme.name_de}
    Bdtype ={2}
/>

<!--International Team -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        <div class="section-title mb-5">
            <h2 class="mb-4">{@html pageContent.name_de? pageContent.name_de:''}</h2>
        </div>

        <div class="row content mb-5">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description_de ? pageContent.description_de : "" }
            </div>            
        </div>
        

        <div class="row">
            {#each DAGs as DubaiAreaGuides, i }
                {#if i >= postRangeLow && i < postRangeHigh && DubaiAreaGuides.pctitle_de !== null} 
                <div class="mb-4 col-lg-4  col-md-4 col-12 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <a href="/de/{pageSlug[2]}/{pageSlug[3]}/{DubaiAreaGuides.pcslug}" class="Dag">
                        <div class="icon-box">

                            <div class="icon">
                                <!-- /l9images/community/{DubaiAreaGuides.pcimgname} -->
                                <!-- http://15.184.182.107:8002/theme/assets/images/community/1661557585-gen_3044.jpg -->
                                <img src="{origin}/theme/assets/images/community/{DubaiAreaGuides.pcimgname}" alt="as" class="bx bxl-dribbble" />
                            </div>

                            <div class="icon-msg">
                                <h4>{DubaiAreaGuides.pctitle_de}</h4>
                            </div>
                        </div>
                    </a>
                </div>
                <!--International Team box DubaiAreaGuides.id-->
                {/if}
            {:else}
                <p>Не найдено или что-то пошло не так!</p>
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

    <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description2_de ? pageContent.description2_de : "Content Required" } 
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
                            <span>Стоит ли покупать недвижимость в Дубае?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Если у вас есть планы жить в городе в ближайшем будущем, то приобретение недвижимости в Дубае — определенно разумная идея. Вы можете использовать плату за аренду для выплаты ежемесячных ипотечных платежей и стать владельцем недвижимости в одном из лучших городов мира.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-3" aria-expanded="false">
                            <span>В каком районе лучше всего приобрести собственность в Дубае?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Лучшие районы в Дубае для покупки недвижимости — Даунтаун Дубай, Пальма Джумейра, Бизнес-Бей, Джумейра Виллидж Серкл, Интернешнл Сити и так далее. Также появляются и другие районы, которые могут вас заинтересовать.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-4" aria-expanded="false">
                            <span>Выгодно ли покупать недвижимость в Дубае в 2023 году?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Цены на частные жилые объекты, скорее всего, возрастут к концу 2023 года. Поэтому клиенты, которые намерены приобрести недвижимость в Дубае, стараются завершить свои сделки до того, пока цены не начали стремительно расти.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/" class="collapse collapsed" data-bs-target="#accordion-list-5" aria-expanded="false">
                            <span>В чем плюсы покупки недвижимости в Дубае?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Дубайский рынок недвижимости известен своей стабильностью. После покупки недвижимости здесь есть все основания ожидать ее повышения в стоимости. Вы можете сдать ее в аренду, чтобы получить еще больше денег, либо продать по более выгодной цене.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-6" aria-expanded="false">
                            <span>Какая инвестиция в Дубае самая выгодная?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-6" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Самая лучшая инвестиция в Дубае, безусловно, связана с недвижимостью. Дубай расширяется и растет, и с ним увеличивается количество жителей, живущих здесь. Поэтому вы можете приобрести недвижимость здесь и сдавать ее в аренду иностранцам.
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-bs-toggle="collapse"  href="/"  class="collapse collapsed" data-bs-target="#accordion-list-7" aria-expanded="false">
                            <span>Какие подводные камни есть при покупке недвижимости в Дубае?</span> 
                            <i class="bx bx-plus icon-show"></i>
                            <i class="bx bx-minus icon-close"></i>
                        </a>
                        <div id="accordion-list-7" class="collapse" data-bs-parent=".accordion-list" style="">
                            <p>
                                Самое главное, что следует учесть перед покупкой недвижимости в Дубае, это местоположение. Даже если вы решите продать ее в будущем, местоположение будет иметь значение. Другие факторы, на которые следует обратить внимание, включают близость к транспорту, наличие удобств вокруг, размер недвижимости и состояние рынка на момент покупки, а так же ее состояние и юридическая чистота. С этим и многим другим призвана помочь наша компания Driven Properties, которая займется всеми хлопотами при покупке за вас.
                            </p>
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
    li.page-item {
        display: none;
    }
</style>
    