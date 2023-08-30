// store.js
import { writable } from 'svelte/store';

export const serviceFee = writable({
  location: "",
  propertyType: "all",
  year: "all",
  norows: "50"
})

export const rentalTransaction = writable({
  location: "",
  propertyType: "all",
  bedrooms: "all",
  norows: "50"
})

export const saleTransaction = writable({
  location: "",
  propertyType: "all",
  bedrooms: "all",
  transactionType: "all",
  status: "all",
  norows: "50"
})

export const dailyTransactions = writable({
  worthprocedure: "all", // worth of daily procedure(property)
  worthstatus: "all", // worth of status
  notprocedure: "all", // no. of transactions
  notstatus: "all", // no. of transactions status
})


export const marketGuide = writable({
  TPC_propCategory: "all", // worth of daily procedure(property)
  TPC_status: "all", // worth of status
  MDP_community: "select", // no. of transactions
  MDP_status: "all", // no. of transactions status
})
