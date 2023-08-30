// offplan store.js
import { writable } from 'svelte/store';

export let offPlan_Location = writable({
  location: ""
})

export let offPlan_Location_result = writable({
  location_coord: [],
  isMapMoved : false,
  listByMapMove: {},
  location_name: ""
})

export let coord_By_location = writable({
  'Dubai': [25.168282, 55.250286],
  'Abu Dhabi': [24.466667,54.366669], 
})
