<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import { baseURL } from '../../../../base-url';

    export let agentName;
    export let agentEmail;
    export let agentPhone;
    export let agentimage;
    export let title;
    export let RefNo;

    let AgentDetails =[]

    onMount(async () =>{
        
        const response = await fetch(`${baseURL}/getTeamMember/${agentName}/${agentPhone}`);
        const data = await response.json();
        AgentDetails = data;        
        //getAgentDetails API End

    });

</script>

<div class="g-0 container" id="Agents">

    <div class="g-0 row">

        <div class="g-0 col-sm-12 mb-3">
            <img src="{AgentDetails.tmimgname ? "/l9images/teams/"+AgentDetails.tmimgname :agentimage}" alt="{agentName}" />
        </div>

        <div class="g-0 col-sm-12">
            <h4>{@html AgentDetails.fullname ? AgentDetails.fullname : agentName }</h4>
        </div>

        <div class="g-0 col-sm-12">
            <p><strong>{@html AgentDetails.jobtitle ? AgentDetails.jobtitle : 'Required'}</strong></p>
        </div>

        <div class="g-0 col-sm-12">
            <div class="row">

                <div class="col-sm-4">
                    <p>
                        <i class="bx bi-volume-up myspeack"></i> 
                        Speaks
                    </p>
                </div>

                <div class="col-sm">
                    <p>{@html AgentDetails.knlanguage ? AgentDetails.knlanguage :'English, Arabic, French'}</p>
                </div>

            </div>
        </div>

        <div class="g-0 col-sm-12">
            <!-- <button class="btn btn telephone"></button> -->
            <a href="tel:+{(agentPhone.replaceAll('+','')).replaceAll(' ','')}" class="btn btn-secondary btPhone w-100">
                <i class="bx bi-telephone"></i> 
                Call Now
            </a>
        </div>

        <div class="g-0 col-sm-12 mt-2 mb-2">
            <!-- <button class="btn btn telephone"></button> -->
            <a class="btn btn-secondary btWhatsapp w-100" href="https://web.whatsapp.com/send?phone=971553658402&amp;text=Hi Driven, I need more information regarding {title} Reference No. {RefNo}">
                <i class="bx bi-whatsapp"></i> 
                WhatsApp
            </a>
        </div>

    </div>
</div>