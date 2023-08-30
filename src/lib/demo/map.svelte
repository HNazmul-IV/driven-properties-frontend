<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';

    //import 'normalize.css/normalize.css';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    
    export let data=[];

    let geojson={};

    export let updateFunction;
  
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

    onMount(async() => {
        
        data.sort();

        let lat = 25.163216852696415;
        let lng = 55.25120403896978;         
        
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const map = new mapboxgl.Map({
            container: 'map',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],
            zoom: 15.5,
            bearing: 14,
            pitch: -45
        });

        boundingBox = map.getBounds();

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

        const FlyToMyMap = (data)=>{
            
            let chapters={};
            let MyObjects={};            
            let objid;
            let myDbs;

            for(let d=0; d < data.length; d++)
            {

                myDbs = data[d];
                objid = myDbs.objectID;

                chapters[objid] = {
                    duration: getRandomInt(6000),
                    center: [myDbs.Longitude,myDbs.Latitude],
                    bearing: getRandomInt(30),
                    zoom: generateRandomDecimalInRangeFormatted(15,13.5,1),
                    pitch: getRandomInt(30),
                    speed: generateRandomDecimalInRangeFormatted(0.9, 0.3, 1),
                };
            }
            
            let activeChapterName = objid;

            //console.log("Chapter name active: "+activeChapterName);
            //console.log(chapters);


            function setActiveChapter(chapterName) {
                if (chapterName === activeChapterName) return;
                map.flyTo(chapters[chapterName]);
                document.getElementById(chapterName).classList.add('active');
                document.getElementById(activeChapterName).classList.remove('active');
                activeChapterName = chapterName;
                updateFunction(boundingBox);

            }

            function isElementOnScreen(id) {
                const element = document.getElementById(id);
                const bounds = element.getBoundingClientRect();
                return bounds.top < window.innerHeight && bounds.bottom > 0;
            }

            // On every scroll event, check which element is on screen
            window.onscroll = () => {
                for (const chapterName in chapters) {
                    if (isElementOnScreen(chapterName)) {
                        setActiveChapter(chapterName);
                        break;
                    }
                }
            };            
            // FlyTo Animation Part End  
            
        };
        // end FlyToMyMap

        const add_markers = (geojson)=>{

            const popUps = document.getElementsByClassName('mapboxgl-popup');
            if (popUps[0]) popUps[0].remove();

            geojson.features.forEach(function (marker) {
  
                boundingBox = map.getBounds();
  
                //if(marker.properties.active == 'Yes' && marker.properties.price >= 90000 ){
                if(marker.properties.active == 'Yes'){
                    
                    var el = document.createElement('span');
                    //el.className = 'map-icon map-icon-map-pin marker '+poi;
                    //el.innerHTML = "<span class='tooltip "+icon(icon_name)+" marker-sub "+poi+"' title=\""+marker.properties.description+"\"></span>";
                    //el.innerHTML = "<span class='tooltip  marker-sub' title=\""+marker.properties.description+"\"></span>";
                    // add marker to map                
                    
                    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: true  })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML(`${marker.properties.description}`)
                    .addTo(map);  
                }
                //updateFunction(boundingBox);
                //console.log(marker)                
            });
        }
        // end add_markers

        let MyMapData =(data)=>{
            
            boundingBox = map.getBounds();

            let length = (data.length);
            for(let d=0; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong>AED ${covertToIntCurrancy(data[d].Price).replaceAll('.00','')}</strong>`,
                            'active': `${data[d].Published}`,
                            'price': data[d].Price
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [data[d].Longitude,data[d].Latitude]
                        }
                    }]
                }

                add_markers(geojson);
                updateFunction(boundingBox);
            }
            //Load End
            //const popup = new mapboxgl.Popup().addTo(map); popup.remove(map);
        };
        // end MyMapData
        
        map.on('load', () => {
            
            //console.log(data);
            
            map.addControl(new mapboxgl.FullscreenControl());
            map.addControl(new mapboxgl.NavigationControl());
            map.zoomTo(10, { duration: 700 });

            MyMapData(data);
            FlyToMyMap(data);

            map.on('resize', () => {
                
                boundingBox = map.getBounds();
                updateFunction(boundingBox);
                
                //console.log('map resized');
                //console.log(JSON.stringify(boundingBox));
            });
            // Resize end
            
            map.on('movestart', (e) => {
  
                boundingBox = map.getBounds();
                //map.setFilter('airport', ['has', 'description']);
  
                MyMapData(data);
                FlyToMyMap(data);
                
                updateFunction(boundingBox);
                
                //console.log('Move Start');
                //console.log(JSON.stringify(boundingBox));
  
            });
            // Move Start End
            
            map.on('moveend', () => {
  
                boundingBox = map.getBounds();
                updateFunction(boundingBox);
  
                //console.log('Move End');
                //console.log(JSON.stringify(boundingBox));
            });
            // Move End        
  
            map.on('mousemove',(e)=>{
                
                boundingBox = map.getBounds();
                updateFunction(boundingBox);
  
                //console.log("Mouse Move Event");
                //console.log(JSON.stringify(boundingBox));
            });
            //Mouse Move end
  
            map.on('mouseover', (e) => {
                
                //const popup = new mapboxgl.Popup().addTo(map); popup.remove(map);
                MyMapData(data);
  
            });
            //Mouse Over end
            map.on('mouseleave', (e) => {
                
                boundingBox = map.getBounds();
                updateFunction(boundingBox);
                //console.log('Mouse Leave Event')
                //console.log(JSON.stringify(boundingBox));
            });
            // Mouse Leave end

        });

    });
    // end onMount    
</script>
<section class="mt-5">

    <div id="map"></div>
    <div id="features">
        {#each data as MyMapData (MyMapData.objectID)}
            {#if MyMapData.Published === 'Yes'}
                {#if MyMapData.objectID.toString() === '278' }
                    <div id="{(MyMapData.objectID)}" class="txtContent active">
                        <h3>{@html MyMapData.Community}</h3>
                        <p>
                            {MyMapData.Web_Remarks}
                        </p>
                    </div>
                {:else}
                    <div id="{(MyMapData.objectID)}"  class="txtContent">
                        <h3>{@html MyMapData.Community}</h3>
                        <p>
                            {MyMapData.Web_Remarks}
                        </p>
                    </div>
                {/if}
            {/if}
        {/each}
        
        <!--section id="aldgate">
            <h3>Aldgate Station</h3>
            <p>
                Arthur Cadogan West was found dead, head crushed in on train tracks
                at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich
                Arsenal on the Bruce-Partington submarine, a secret military
                project. Plans for the submarine had been stolen and seven of the
                ten missing papers were found in West's possession. Mycroft implores
                Sherlock to take the case and recover the three missing papers.
            </p>
        </section>
        <section id="london-bridge">
            <h3>London Bridge</h3>
            <p>
                Holmes and Watson's investigations take them across London. Sherlock
                deduces that West was murdered elsewhere, then moved to Aldgate
                Station to create the illusion that he was crushed on the tracks by
                a train. On their way to Woolwich Sherlock dispatches a telegram to
                Mycroft at London Bridge: "Send list of all foreign spies known to
                be in England, with full address."
            </p>
        </section>
        <section id="woolwich">
            <h3>Woolwich Arsenal</h3>
            <p>
                While investigating at Woolwich Arsenal Sherlock learns that West
                did not have the three keys&mdash;door, office, and
                safe&mdash;necessary to steal the papers. The train station clerk
                mentions seeing an agitated West boarding the 8:15 train to London
                Bridge. Sherlock suspects West of following someone who had access
                to the Woolwich chief's keyring with all three keys.
            </p>
        </section>
        <section id="gloucester">
            <h3>Gloucester Road</h3>
            <p>
                Mycroft responds to Sherlock's telegram and mentions several spies.
                Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He
                heads to the nearby Gloucester Road station to investigate and
                learns that the windows of Caulfield Gardens open over rail tracks
                where trains stop frequently.
            </p>
        </section>
        <section id="caulfield-gardens">
            <h3>13 Caulfield Gardens</h3>
            <p>
                Holmes deduces that the murderer placed West atop a stopped train at
                Caulfield Gardens. The train traveled to Aldgate Station before
                West's body finally toppled off. Backtracking to the criminal's
                apartment, Holmes finds a series of classified ads from
                <em>The Daily Telegraph</em> stashed away. All are under the name
                Pierrot: "Monday night after nine. Two taps. Only ourselves. Do not
                be so suspicious. Payment in hard cash when goods delivered."
            </p>
        </section>
        <section id="telegraph">
            <h3>The Daily Telegraph</h3>
            <p>
                Holmes and Watson head to The Daily Telegraph and place an ad to
                draw out the criminal. It reads: "To-night. Same hour. Same place.
                Two taps. Most vitally important. Your own safety at stake.
                Pierrot." The trap works and Holmes catches the criminal: Colonel
                Valentine Walter, the brother of Woolwich Arsenal's chief. He
                confesses to working for Hugo Oberstein to obtain the submarine
                plans in order to pay off his debts.
            </p>
        </section>
        <section id="charing-cross">
            <h3>Charing Cross Hotel</h3>
            <p>
                Walter writes to Oberstein and convinces him to meet in the smoking
                room of the Charing Cross Hotel where he promises additional plans
                for the submarine in exchange for money. The plan works and Holmes
                and Watson catch both criminals.
            </p>
            <small id="citation">
                Adapted from
                <a href="http://www.gutenberg.org/files/2346/2346-h/2346-h.htm">Project Gutenberg</a>
            </small>
        </section-->
    </div>    
</section>

<style>
    
    /*body { margin: 0;  padding: 0; } */

    #map {
        position: relative;
        top: 0;
        bottom: 0;
        width: 100%;
    }

    #map {
        position: fixed;
        width: 50%;
        top:15%;
    }
    #features {
        width: 50%;
        margin-left: 50%;
        font-family: sans-serif;

        overflow-y: scroll;
        background-color: #fafafa;
    }
    .txtContent {
        padding: 20px 30px;
        line-height: 25px;
        border-bottom: 1px solid #ddd;
        opacity: 0.25;
        font-size: 13px;
    }
    .txtContent.active {
        opacity: 1;
    }
    .txtContent:last-child {
        border-bottom: none;
        margin-bottom: 200px;
    }
</style>

