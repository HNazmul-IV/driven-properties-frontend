<script>
  import algoliasearch from "algoliasearch";

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import BreadCrumb from "$lib/commons/breadcrumb.svelte";

  const ALGOLIA_APP_ID = "48O3SXQXMR";
  const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
  const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
  const ALGOLIA_INDEX_TEST_NAME = "tbl_properties";
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

  let MyFiterData = [];
  let pageSlug = $page.url.pathname.split("/");
  let PerPage = 5000;

  let Ad_Type = "Sale";
  let Unit_Type = "Apartment";
  let MyCommunity = "Al Furjan";
  let No_of_Rooms = 2;
  let Bedrooms = 2;
  let Price = 900000;
  let MaxPrice = 1000000;

  let subQuery = [Price, No_of_Rooms, Bedrooms, Unit_Type, Ad_Type, MyCommunity];
  let MySearchData = ["Price", "No_of_Rooms", "Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
  let MyRSearchAttributes = ["Price", "No_of_Rooms", "Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];
  let MyFilters;
  let Query;


  MyFilters = `Price:${Price} TO ${MaxPrice}`;
  MyFilters = `${MyFilters} AND (No_of_Rooms=${No_of_Rooms}`;
  MyFilters = `${MyFilters} OR Bedrooms=${Bedrooms})`;

  //Query = [ `Unit_Type:${Unit_Type}`,`Ad_Type:${Ad_Type}`,`Community:${MyCommunity}`];
  Query = [Unit_Type, Ad_Type, MyCommunity];

  onMount(async () => {
    LoadMyDATAS(Query, subQuery, MySearchData, MyRSearchAttributes, MyFilters, PerPage);
  });

  const LoadMyDATAS = (Query, subQuery, MySearchData, MyRSearchAttributes, MyFilters, PerPage) => {
    index
      .search(Query ? Query : "", {
        relevancyStrictness: 100,
        filters: MyFilters,
        hitsPerPage: PerPage ? PerPage : 20,
      })
      .then(({ hits }) => {
        console.log(hits);
        MyFiterData = hits;
      });
  };

  //console.log(Query, MyFilters);

  const handleSubmit = () => {
    subQuery = [Price, No_of_Rooms, Bedrooms, Unit_Type, Ad_Type, MyCommunity];
    MySearchData = ["Price", "No_of_Rooms", "Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
    MyRSearchAttributes = ["Price", "No_of_Rooms", "Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];
    MyFilters;
    Query;

    //const filters = 'available = 1 AND (category:Book OR NOT category:Ebook) AND _tags:published AND publication_date:1441745506 TO 1441755506 AND inStock > 0 AND author:"John Doe"';

    //MyFilters = `Price > ${Price}`;
    //MyFilters = `${MyFilters} OR Price:${Price} TO ${MaxPrice}`;

    MyFilters = `Price:${Price} TO ${MaxPrice}`;
    MyFilters = `${MyFilters} AND (No_of_Rooms=${Bedrooms}`;
    MyFilters = `${MyFilters} OR Bedrooms=${Bedrooms})`;

    //Query = [ `Unit_Type:${Unit_Type}`,`Ad_Type:${Ad_Type}`,`Community:${MyCommunity}`];
    Query = [Unit_Type, Ad_Type, MyCommunity];

    LoadMyDATAS(Query, subQuery, MySearchData, MyRSearchAttributes, MyFilters, PerPage);

    console.log(Query, MyFilters);
  };

  const handleKeyup = (event) => {
    //submit = false

    if (event.code == "Enter") {
      event.preventDefault();
      event.target.value;
      value = event.target.value;
      return false;
    }
  };
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css" />

<BreadCrumb LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} Bdtype={2} />

<div data-sveltekit-prefetch class="container mt-3 mb-5">
  <h1>Driven Properties Listing</h1>
  <p>let's search properties.</p>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="row mt-5 mb-5">
      <div class="col">
        <label for="exampleInputEmail1">Min Price:<br /> {Price}</label>
        <input type="text" placeholder="Search..." bind:value={Price} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col">
        <label for="exampleInputEmail1">Max Price:<br /> {MaxPrice}</label>
        <input type="text" placeholder="Search..." bind:value={MaxPrice} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col">
        <label for="exampleInputEmail1">Bedrooms:<br /> {Bedrooms}</label>
        <input type="text" placeholder="Search..." bind:value={Bedrooms} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col">
        <label for="exampleInputEmail1">Unit Type:<br /> {Unit_Type}</label>
        <input type="text" placeholder="Search..." bind:value={Unit_Type} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col">
        <label for="exampleInputEmail1">Ad Type:<br /> {Ad_Type}</label>
        <input type="text" placeholder="Search..." bind:value={Ad_Type} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col">
        <label for="exampleInputEmail1">Community:<br /> {MyCommunity}</label>
        <input type="text" placeholder="Search..." bind:value={MyCommunity} on:keyup|preventDefault={handleKeyup} />
      </div>

      <div class="col-12 mt-3 mb-3">
        <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      </div>
    </div>
  </form>

  <div class="row">
    <div class="table-responsive table-responsive-sm">
      <table class="table table-striped table-bordered table-sm">
        <tr>
          <th>Property Name</th>
          <th>Community Name</th>
          <th>Area Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Type</th>
          <th>BedRooms</th>
        </tr>

        {#each MyFiterData as myfiterdata (myfiterdata.objectID)}
          <tr>
            <td>{@html myfiterdata.Property_Name}</td>
            <td>{@html myfiterdata.Community}</td>
            <td>{@html myfiterdata.Sub_Community}</td>
            <td>{@html myfiterdata.Price}</td>
            <td>{@html myfiterdata.Ad_Type}</td>
            <td>{@html myfiterdata.Unit_Type}</td>
            <td>{@html myfiterdata.Bedrooms}</td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
</div>

<style>
</style>
