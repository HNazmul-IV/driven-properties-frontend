<script>
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const token = "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
  let mapboxgl;
  let properties = [
    {
      img: "/assets/images/dubai marina-min.jpg",
      title: "Dubai Marina",
      Latitude: "25.088907",
      Longitude: "55.148571",
      guideLink: "/de/explore/dubai-properties-areas/dubai-marina",
      salesLink: "/de/properties-for-sale/dubai-marina/any/any/0-40500000",
    },
    {
      img: "/assets/images/palm jumeirah-min.jpg",
      title: "Palm Jumeirah",
      Latitude: "25.1193261",
      Longitude: "55.1142305",
      guideLink: "/de/explore/dubai-properties-areas/palm-jumeirah",
      salesLink: "/de/properties-for-sale/palm-jumeirah/any/any/0-40500000",
    },
    {
      img: "/assets/images/downtown-min.jpg",
      title: "Downtown Dubai",
      Latitude: "25.1837",
      Longitude: "55.2666",
      guideLink: "/de/explore/dubai-properties-areas/downtown-dubai",
      salesLink: "/de/properties-for-sale/downtown-dubai/any/any/0-40500000",
    },
    {
      img: "/assets/images/dubai hills estate-min.jpg",
      title: "Dubai Hills Estate",
      Latitude: "25.116152912",
      Longitude: "55.262566262",
      guideLink: "/de/explore/dubai-properties-areas/dubai-hills-estate",
      salesLink: "/de/properties-for-sale/dubai-hills-estate/any/any/0-40500000",
    },
    {
      img: "/assets/images/citywalk-min.jpg",
      title: "Citywalk",
      Latitude: "25.204814",
      Longitude: "55.263206",
      guideLink: "/de/explore/dubai-properties-areas/city-walk-dubai",
      salesLink: "/de/properties-for-sale/city-walk/any/any/0-40500000",
    },
    {
      img: "/assets/images/bluewaters-min.jpg",
      title: "Bluewaters",
      Latitude: "25.082916",
      Longitude: "55.122156",
      guideLink: "/de/explore/dubai-properties-areas/bluewaters-island",
      salesLink: "/de/properties-for-sale/bluewaters/any/any/0-40500000",
    },
    {
      img: "/assets/images/mina rashid-min.jpeg",
      title: "Mina Rashid",
      Latitude: "25.284755",
      Longitude: "55.275651",
      guideLink: "#",
      salesLink: "/de/properties-for-sale/mina-rashid/any/any/0-40500000",
    },
  ];
  let map;
  let lat = 25.177602;
  let lng = 55.234789;
  let coordinates = [lng, lat];

  // setting marker according the coordinates
  const getPropertiesMarkerMap = (map) => {
    for (const property of properties) {
      const description = `
                
                <div class="container g-0">
                    <div class="row g-0">
                        <div class="col-12 mb-2">
                            <img  src="${property.img}" class="img-fluid myImgPopup" />
                        </div>
                        <div class="col-sm-12 px-2 mb-2">
                            <h6><strong>${property.title}</strong></h6>
                        </div>
                        <div class="button-container">
                            <a href="${property.guideLink}"><div class="guide-btn">Führung</div></a>
                            <a href="${property.salesLink}"><div class="sales-btn">Verkäufe</div></a>
                        </div>
                    </div>
                </div>
                
            `;
      const el = document.createElement("span");
      el.className = "marker-home";

      let long = Number(property.Longitude),
        lati = Number(property.Latitude);
      // make a marker for each property and add it to the map
      if (long && lati) {
        new mapboxgl.Marker(el)
          .setLngLat([long, lati])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(description))
          .addTo(map);
      }
    }
    // isMapLoading = false;
  };

  onMount(async () => {
    mapboxgl = (await import("mapbox-gl")).default;
    await import("mapbox-gl/dist/mapbox-gl.css");
    mapboxgl.accessToken = token;
    map = new mapboxgl.Map({
      container: "mapView",
      style: "mapbox://styles/mapbox/light-v11",
      center: coordinates,
      zoom: 10.5,
    });

    map.on("load", () => {
      getPropertiesMarkerMap(map);
      map.scrollZoom.disable();
    });
  }); // end onMount
</script>

<div class="col-sm-12">
  <div class="apartment-sale-right">
    <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy" />
  </div>
</div>

<style>
  .myMapListing {
    position: relative;
    height: 500px;
    width: 100%;
  }
  .apartment-sale-right {
    margin-right: 0px;
  }

  @media only screen and (max-width: 768px) {
    .myMapListing {
      top: 70px;
    }
  }
</style>
