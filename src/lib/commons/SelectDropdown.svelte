<script>
    import Country from '$lib/countryPhoneCodes.json'
</script>

<!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
<!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
<select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select">
    <option selected>---Select Country Code</option>
    {#each Country as Countrylist (Countrylist.code)}
        {#if Countrylist.code === '+971'}
            <option value="+{Countrylist.code}" selected>{Countrylist.code} {Countrylist.country}</option>
        {:else}
            <option value="+{Countrylist.code}">{Countrylist.code} {Countrylist.country}</option>   
        {/if}
    {/each}
</select>

<style>

#frmRight .form-select{
    font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
    border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>");
    
}

#frmLeft .form-control{
    font-size: 0.9rem; line-height:1.6rem; background-color: rgb(97 97 97 / 0%); 
    border:1px solid #fff; border-radius:0; margin: 0px 0px 20px 0px; color:#fff;

}

</style>
