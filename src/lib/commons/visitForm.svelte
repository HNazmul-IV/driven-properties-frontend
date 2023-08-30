<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import { baseURL } from '../../base-url';

    let BedRoomType = [];
    let Country =[];
    let twoUrl; 
    let visitTime='Choose Time';
    let expired;

    onMount(async () =>{
        
        twoUrl = !(twoUrl) ? `${baseURL}/getAllCoutnryList` : 'http://127.0.0.1:8000/api/getAllCoutnryList';
        const response2 = await fetch(twoUrl);
        const data2 = await response2.json();
        Country = data2;
        //Country API End

    });
    //console.log(pageSlug);
    let selected ={code:"+971", country:"United Arab Emirates"};

</script>

<div class="g-0 container aos-init aos-animate mb-5 mt-5" data-aos="fade-up">
        
    <div class="g-0 row" id="withInContent">
        <div class="col-12">

            <div class="frmDetails">

                <div class="col-12 mt-3 mb-3">
                    <select id="FSRONE" name="visitTime" class="form-select form-control frsone" bind:value="{visitTime}">
                        <option>Choose Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Noon">Noon</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>

                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Full Name</label-->
                    <input type="text" class="form-control" id="fname" placeholder="Full Name">
                </div>

                <div class="col mb-3">

                    <div class="d-flex flex-row ">
                        <div class="mypd p-0 col" id="MyCList">
                            <!--label for="exampleFormControlInput1" class="form-label">Country Code</label-->
                            <!--input type="countrycode" class="form-control" id="countrycode" placeholder="+971" required-->
                            <!-- <select data-placeholder="Choose Communities..." aria-label="Default select example" class="form-select chosen-select">
                                <option selected>Country Code</option>
                                {#each Country as Countrylist (Countrylist.id)}
                                    {#if Countrylist.code === '+971'}
                                        <option value="+{Countrylist.code}" selected>{Countrylist.code} {Countrylist.country}</option>
                                    {:else}
                                        <option value="+{Countrylist.code}">{Countrylist.code} {Countrylist.country}</option>   
                                    {/if}
                                {/each}
                            </select> -->
                            <Select
                                items={Country}
                                optionIdentifier="Country"
                                getSelectionLabel={o => o.code +" "+ o.country}
                                getOptionLabel={o => o.code +" "+ o.country}
                                placeholder="Choose Your Country"
                                bind:selectedValue={selected.code}
                            />

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

                    
                <div class="col mb-3">
                    <!--label for="exampleFormControlInput1" class="form-label">Email Address</label-->
                    <button class="btn btn-md Mybtn w-100">Submit</button>
                </div>

            </div>
        </div>
    </div>        

</div>
<style>
    #withInContent{ 
        background-color:#f8f8f8; padding: 20px; color: #737373;
        border-radius: 4px;
    }
    #withInContent .form-control{border-radius: 0; height: 50px;}
    #withInContent .form-select {border-radius: 0; height: 50px;}
    #withInContent .btn{ background-color: #4167b1;  height: 50px; color: #fff; border-radius: 0; }
</style>