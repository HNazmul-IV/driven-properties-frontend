<script>

    export let imgbg = '/assets/images/gen_2868.jpg';
    export let LinkOne = 'Sales';
    export let LinkTwo = 'Buy Ready Property';
    export let LinkThree = 'Ready Apartments';

</script>
<section id="drv-bread" class="section-bg">
    
    <div class="container">        
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <!--a href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-whatsapp"></i></a-->
                <li class="breadcrumb-item bd-highlight"><a class="text-center" href="/"><i class="BrdFSbx bx bi-house-fill"></i></a></li>                    
                <li class="breadcrumb-item bd-highlight"><a href="/">{LinkOne}</a></li>
                <li class="breadcrumb-item bd-highlight"><a href="/">{LinkTwo}</a></li>
                <li class="breadcrumb-item bd-highlight active" aria-current="page">{LinkThree}</li>
            </ol>
        </nav>
        <h1>{LinkThree.toUpperCase()}</h1>

    </div>                       
</section>

<style>
    
    #drv-bread{ 

        height: 35vh; width: 100%; text-align: left; padding-top: 100px; color: white;  overflow: hidden;
        background: var(--Drvn-headerColor);  /* fallback for old browsers */
        background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg');  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(rgb(55 54 54 / 80%), rgb(7 6 7 / 51%)), url('/assets/images/gen_2868.jpg'); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    #drv-bread .breadcrumb-item,.breadcrumb-item+.breadcrumb-item::before{ color:#fff; z-index:9 !important;}
</style>