<script>
    import { onMount } from 'svelte';
    
    const d = new Date();
    let year = d.getFullYear();
    onMount( async()=>{

    });
    //
</script>

<!-- ======= Footer ======= -->
<footer id="footer">

    <div class="container footer-bottom clearfix">
        <div class="copyright text-center">
            &copy; {year} Copyright <strong><span>Driven Properties LLC</span></strong>.
            All Rights Reserved.
        </div>
    </div>

</footer>
<!-- End Footer -->

<style>
    #footer div.footer-bottom{ padding: 25px 0;}
</style>


