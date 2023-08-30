<script>

    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    

    //import 'normalize.css/normalize.css'
    import 'mapbox-gl/dist/mapbox-gl.css'

    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    import { each } from 'svelte/internal';
  
    //import Apartmentslist from './apartmentslist.svelte';

    export let data=[];
    // export let updateFunction;

    export let boundingBox = {
        "_sw": {
            "lng": 55.064511502076556,
            "lat": 25.004448664717486
        },
        "_ne": {
            "lng": 55.21608849792656,
            "lat": 25.15650411973199
        }
    };

    let geojson={};

    let current = false;
    let chapterName;
    let MyField;
    let activeChapterName
    let MapContent=[];
    
    onMount(async () => {

        const getRandomInt = (max)=>{
            let value =  Math.floor(Math.random() * max);
            return Number.parseInt(value);
        };
        // end getRandomInt

        const generateRandomDecimalInRangeFormatted = (min, max, places)=>{
            let value = Math.random() * (max - min) + min;
            return Number.parseFloat(value).toFixed(places);
        };
        // end generateRandomDecimalInRangeFormatted

        let SData = data.sort();
        
        let lat = 25.163216852696415;
        let lng = 55.25120403896978;         
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        

        const map = new mapboxgl.Map({
            container: 'mapView',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],            
            zoom: 10,
            //bearing: 27,
            //pitch: 45
        });

        boundingBox = map.getBounds();

        const FlyToMyMap = (SData)=>{
            
            /*
            let chapters={};
            let MyObjects={};
            let objid;
            let myDbs;

            for(let d=0; d < SData.length; d++){

                myDbs = SData[d];
                objid = myDbs.objectID;

                chapters[objid] = {

                    center: [myDbs.Longitude,myDbs.Latitude],
                    duration: 700,
                    bearing: 10,
                    zoom: 13.3,
                    pitch: 10,
                    speed:0.5

                    //duration: getRandomInt(6000),
                    //bearing: getRandomInt(30),
                    //zoom: generateRandomDecimalInRangeFormatted(13,10.5,1),
                    //pitch: getRandomInt(30),
                    //speed: generateRandomDecimalInRangeFormatted(0.9, 0.3, 1),
                };
            }

            

            activeChapterName = objid;            
            if(activeChapterName === MyField){ current = true}

            //console.log("Chapter name active: "+activeChapterName);
            //console.log(chapters);

            
            function setActiveChapter(chapterName) {
                if (chapterName === activeChapterName) return;
                //map.flyTo(chapters[chapterName]);                
                //console.log(chapters[chapterName]);

                document.getElementById(chapterName).classList.add('active');
                document.getElementById(activeChapterName).classList.remove('active');
                activeChapterName = chapterName;

                //updateFunction(boundingBox);
            }

            function isElementOnScreen(id) {

                const element = document.getElementById(id);
                const bounds = element.getBoundingClientRect();
                return bounds.top < window.innerHeight && bounds.bottom > 0;
            }

            // On every scroll event, check which element is on screen
            features.onscroll = () => {
                for (const chapterName in chapters) {
                    if (isElementOnScreen(chapterName)) {
                        blackPopup(chapterName);
                        setActiveChapter(chapterName);
                        break;

                    }                        
                }

            };
            
            // FlyTo Animation Part End
            */
            //myid=4245;

            
            let myDivs = document.querySelector("div#features");
            features.addEventListener('mouseenter', (e) => {
                //console.log(e);
                //console.log("Scroll Top: ",e.target.scrollTop);
                console.log(e)
            });

            
        };
        // end FlyToMyMap

        const btnCallingMap = ()=>{

            let MySerbtn = document.getElementById('mySearch');
            //console.log(MySerbtn);
            MySerbtn.addEventListener("click", MybtnClick);

        };
        const MybtnClick = async()=>{
            
            let Community = document.getElementById("Community");
            //console.log(Community.value);

            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Community.value}.json?access_token=${mapboxgl.accessToken}`);
            const Mapdata = await response.json();
            MapContent = Mapdata;
            //getSignlegeocoding API End

            //console.log(MapContent.features[0].geometry.coordinates);

            //map.zoomTo(generateRandomDecimalInRangeFormatted(11,15,1), { duration: 700, offset:MapContent.features[0].geometry.coordinates });
            map.flyTo({
                center: MapContent.features[0].geometry.coordinates,
                //zoom: generateRandomDecimalInRangeFormatted(13,10.5,1),
                // speed:1000
                zoom: 14,
                speed: generateRandomDecimalInRangeFormatted(0.9, 0.3, 1),
                duration: getRandomInt(6000),
                bearing: getRandomInt(30),
                pitch: getRandomInt(30),
            });
        };
        
        const whitePopClear = ()=>{ 

            const popUps = document.getElementsByClassName('white-popup');
            //console.log(popUps);            
            if (popUps[0]) popUps[0].remove();
        };
        // End WhitePopClear
        
        const blackPopup = (chapterName)=>{

            //const popUps = document.getElementsByClassName('white-popup');
            //console.log(popUps);            
            //if (popUps[0]) popUps[0].remove();

            //console.log(chapterName);            
            
        };
        // End blackPopup


        const add_markers = (geojson)=>{

            //const popUps = document.getElementsByClassName('mapboxgl-popup');
            //if (popUps[0]) popUps[0].remove();

            geojson.features.forEach(function (marker) {
  
                boundingBox = map.getBounds();
  
                //if(marker.properties.active == 'Yes' && marker.properties.price >= 90000 ){
                if(marker.properties.active == 'Yes'){                    
                    const popup = new mapboxgl.Popup({ className: "white-popup", closeButton: false, closeOnClick: true  })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML(`${marker.properties.description}`)
                    .addTo(map);
                }
                //updateFunction(boundingBox);
                //console.log(marker)
            });
        };
        // end add_markers

        let MyMapData =(SData)=>{
            
            boundingBox = map.getBounds();

            let length = (SData.length);
            for(let d=0; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong>AED ${covertToIntCurrancy(SData[d].Price).replaceAll('.00','')}</strong>`,
                            'active': `${SData[d].Published}`,
                            'price': SData[d].Price
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [SData[d].Longitude,SData[d].Latitude]
                        }
                    }]
                }

                add_markers(geojson);
                //updateFunction(boundingBox);
            }
            //Load End
            //const popup = new mapboxgl.Popup().addTo(map); popup.remove(map);
        };
        // end MyMapData

        map.on('load', () => {

            btnCallingMap();
            MyMapData(SData);
            FlyToMyMap(SData);
            
            map.on('movestart', (e) => {

                //btnCallingMap();
                //MyMapData(data);
                //FlyToMyMap(data);
            });

            map.zoomTo(11, { duration: 700 });

        });

    });
    
</script>


<div class="MyClas">
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div id="mapView"></div>
            </div>

            <div class="col-sm">

                <div id="features">
                    {#each  data as MyData }
                        ID: {MyData.objectID} / Price: {covertToIntCurrancy(MyData.Price)}
                        <section id="{MyData.objectID}" bind:this={MyField} class="{current === 'true' ? 'active' : ''} MyMpasContent MyID-{MyData.objectID}" >
                            <h5>
                                {@html MyData.Property_Title +" | "+ MyData.Property_Name}
                                <span>{@html MyData.Community}</span>
                            </h5>
                            <p> November 1895. London is shrouded in fog and Sherlock Holmes and Watson pass time restlessly awaiting a new case. "The London criminal is certainly a dull fellow," Sherlock bemoans. "There have been numerous petty thefts," Watson offers in response. Just then a telegram arrives from Sherlock's brother Mycroft with a mysterious case. </p>
                        </section>
                    {/each}
                </div>        
            </div>
        </div>
    </div>
</div>



<style>
    .MyClas{ padding: 60px 0 60px 0 ;}
    #mapView {
        position:relative;
        width: 100%;        
        height: 550px;
    }
    #features {
        width: 100%;
        margin-left:0%;
        font-family: sans-serif;
        overflow-y: scroll;
        height: 550px;
        
    }
    .MyMpasContent {
        padding: 60px 40px 60px 40px;
        line-height: 25px;
        border-bottom: 1px solid #ddd;
        opacity: 0.75;
        font-size: 13px;
    }
    .MyMpasContent.active {
        opacity: 1;
    }
    .MyMpasContent:last-child {
        border-bottom: none;
        margin-bottom: 200px;
    }

</style>

