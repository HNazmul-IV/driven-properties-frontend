<script>
    import { onMount } from 'svelte';
    import { baseURL } from '../../../base-url';

    let BedRoomType = [];
    let Country =[];
    let oneURL; 
    let twoUrl; 
    let threeURL;
    let bedrooms='Bedrooms';
    let expired;

    onMount(async () =>{
        oneURL = !(oneURL) ? `${baseURL}/getAllBedRoom` : 'http://127.0.0.1:8000/api/getAllBedRoom';
        const response1 = await fetch(oneURL);
        const data1 = await response1.json();
        BedRoomType = data1;
        //BedRoomType API End

        twoUrl = !(twoUrl) ? `${baseURL}/getAllCoutnryList` : 'http://127.0.0.1:8000/api/getAllCoutnryList';
        const response2 = await fetch(twoUrl);
        const data2 = await response2.json();
        Country = data2;
        //Country API End

    });
    //console.log(pageSlug);


</script>
<div class="container aos-init aos-animate mb-5 mt-5" data-aos="fade-up">
        
    <div class="row" id="withInContent">
        <div class="col-12">

            <div class="frmDetails">

                <h3 class=" mb-3">Contact Us</h3>

                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Full Name</label-->
                    <input type="text" class="form-control" id="fname" placeholder="Full Name">
                </div>

                <div class="col mb-3">

                    <div class="d-flex flex-row ">
                        <div class="mypd p-0 col">
                            <!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
                            <!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
                            <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select">
                                <option selected>Country Code</option>
                                {#each Country as Countrylist (Countrylist.id)}
                                    <option value="+{Countrylist.code}">{Countrylist.code} {Countrylist.country}</option>
                                {/each}
                            </select>
                        </div>
                
                        <div class="p-0  col-7">
                            <!--label for="exampleFormControlInput1" class="form-label">Phone / Mobile</label-->
                            <input type="text" class="form-control" id="phone" placeholder="Phone / Mobile">
                        </div>

                    </div>
                </div>

                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <input type="email" class="form-control" id="email" placeholder="Email Address">
                </div>

                <div class="col mt-3 mb-3">
                    <h3>Additional Information Optional</h3>                         
                </div>

                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <input type="text" class="form-control" id="community" placeholder="Community or Tower">
                </div>

                <div class="col-12 mt-3 mb-3">
                    <select id="FSRONE" name="bedrooms" class="form-select form-control frsone" bind:value="{bedrooms}">
                        <option value="Bedrooms">Bedrooms</option>
                        {#each BedRoomType as bdroomtype, bd }
                            <option value="{bdroomtype.bdtitle}">{bdroomtype.bdtitle}</option>
                        {/each}
                    </select>
                </div>
                    
                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <button class="btn btn-md Mybtn w-100">Submit</button>
                </div>

            </div>
        </div>
    </div>        

</div>
<style>
    #withInContent{ background-color:#f3f5fa; border: 1px solid #e1e1e1; padding: 20px; color: #737373;}
    #withInContent .form-control{border-radius: 0; height: 50px;}
    #withInContent .form-select {border-radius: 0; height: 50px;}
    #withInContent .btn{ background-color: #4167b1;  height: 50px; color: #fff; border-radius: 0; }
</style>