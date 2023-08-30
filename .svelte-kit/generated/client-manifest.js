export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/__layout-ar.svelte"),
	() => import("../../src/routes/__layout-fobs-ar.svelte"),
	() => import("../../src/routes/__layout-fobs-fr.svelte"),
	() => import("../../src/routes/__layout-fobs.svelte"),
	() => import("../../src/routes/__layout-fr.svelte"),
	() => import("../../src/routes/__layout-root.svelte"),
	() => import("../../src/routes/__layout-ru.svelte"),
	() => import("../../src/routes/de/__layout@ru.svelte"),
	() => import("../../src/routes/[Emirate]/[buildingtype]/[community]/[property]/[refno]/index.svelte"),
	() => import("../../src/routes/[Emirate]/[buildingtype]/[community]/[property]/index.svelte"),
	() => import("../../src/routes/[Emirate]/[buildingtype]/[community]/index.svelte"),
	() => import("../../src/routes/[Emirate]/[buildingtype]/index.svelte"),
	() => import("../../src/routes/[Emirate]/index.svelte"),
	() => import("../../src/routes/api/BKUP-[getPageName].svelte"),
	() => import("../../src/routes/api/SerachingOne.svelte"),
	() => import("../../src/routes/api/[getPageName].svelte"),
	() => import("../../src/routes/api/myTest.svelte"),
	() => import("../../src/routes/apitest.svelte"),
	() => import("../../src/routes/de/[Emirate]/[buildingtype]/[community]/[property]/[refno]/index.svelte"),
	() => import("../../src/routes/de/[Emirate]/[buildingtype]/[community]/[property]/index.svelte"),
	() => import("../../src/routes/de/[Emirate]/[buildingtype]/[community]/index.svelte"),
	() => import("../../src/routes/de/[Emirate]/[buildingtype]/index.svelte"),
	() => import("../../src/routes/de/[Emirate]/index.svelte"),
	() => import("../../src/routes/de/about-us/contact-us.svelte"),
	() => import("../../src/routes/de/about-us/driven-properties-international.svelte"),
	() => import("../../src/routes/de/about-us/index.svelte"),
	() => import("../../src/routes/de/about-us/management.svelte"),
	() => import("../../src/routes/de/about-us/our-services/corporate-occupier-services.svelte"),
	() => import("../../src/routes/de/about-us/our-services/development-consultancy.svelte"),
	() => import("../../src/routes/de/about-us/our-services/development-management.svelte"),
	() => import("../../src/routes/de/about-us/our-services/exclusive-sales-and-marketing.svelte"),
	() => import("../../src/routes/de/about-us/our-services/index.svelte"),
	() => import("../../src/routes/de/about-us/our-services/invest-in-property.svelte"),
	() => import("../../src/routes/de/about-us/our-services/mortgage-advisory.svelte"),
	() => import("../../src/routes/de/about-us/our-services/property-management.svelte"),
	() => import("../../src/routes/de/about-us/our-services/real-estate-brokage.svelte"),
	() => import("../../src/routes/de/about-us/our-services/strategic-advisory-and-consulting.svelte"),
	() => import("../../src/routes/de/about-us/preferred-partners.svelte"),
	() => import("../../src/routes/de/about-us/track-record/[pageSlug].svelte"),
	() => import("../../src/routes/de/about-us/track-record/awards.svelte"),
	() => import("../../src/routes/de/about-us/track-record/client-testimonials.svelte"),
	() => import("../../src/routes/de/about-us/track-record/driven-team.svelte"),
	() => import("../../src/routes/de/about-us/track-record/index.svelte"),
	() => import("../../src/routes/de/dubai/index.svelte"),
	() => import("../../src/routes/de/dubai/off-plan-projects/[projectName].svelte"),
	() => import("../../src/routes/de/explore/abu-dhabi-projects/[getByPage].svelte"),
	() => import("../../src/routes/de/explore/abu-dhabi-projects.svelte"),
	() => import("../../src/routes/de/explore/dubai-properties-areas/[getByPage].svelte"),
	() => import("../../src/routes/de/explore/dubai-properties-areas.svelte"),
	() => import("../../src/routes/de/explore/exclusive-projects.svelte"),
	() => import("../../src/routes/de/explore/forbes-global-properties.svelte"),
	() => import("../../src/routes/de/explore/index.svelte"),
	() => import("../../src/routes/de/explore/new-development-dubai.svelte"),
	() => import("../../src/routes/de/explore/ready-projects.svelte"),
	() => import("../../src/routes/de/explore/real-estate-investment-in-dubai.svelte"),
	() => import("../../src/routes/de/explore/why-dubai.svelte"),
	() => import("../../src/routes/de/properties-for-[status]/[community]/[propertytype]/[bedrooms]/[min]-[max]/index.svelte"),
	() => import("../../src/routes/de/properties-for-[status]/[community]/[propertytype]/[bedrooms]/index.svelte"),
	() => import("../../src/routes/de/properties-for-[status]/[community]/[propertytype]/index.svelte"),
	() => import("../../src/routes/de/properties-for-[status]/[community]/index.svelte"),
	() => import("../../src/routes/de/properties-for-[status]/index.svelte"),
	() => import("../../src/routes/de/rentals/commerical/[getByPageName].svelte"),
	() => import("../../src/routes/de/rentals/commerical/[getByPageSlug].svelte"),
	() => import("../../src/routes/de/rentals/commerical/commerial-for-rent/[getByPageName].svelte"),
	() => import("../../src/routes/de/rentals/commerical/commerial-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/commerical/executive-housing-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/commerical/index.svelte"),
	() => import("../../src/routes/de/rentals/commerical/industrial-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/commerical/office-spaces-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/commerical/properties-for-rent/[getByPageName].svelte"),
	() => import("../../src/routes/de/rentals/commerical/properties-for-rent/index.svelte"),
	() => import("../../src/routes/de/rentals/commerical/retail-shops-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/commerical/staff-accommodation-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/index.svelte"),
	() => import("../../src/routes/de/rentals/landlord-services/[getByPageName].svelte"),
	() => import("../../src/routes/de/rentals/landlord-services/index.svelte"),
	() => import("../../src/routes/de/rentals/landlord-services/landlord-representation.svelte"),
	() => import("../../src/routes/de/rentals/landlord-services/why-list-with-driven-for-rent.svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/[getByPageContent].svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/[getByPageName].svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/index.svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/rent-apartments.svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/rent-townhouses.svelte"),
	() => import("../../src/routes/de/rentals/properties-for-rent/rent-villas.svelte"),
	() => import("../../src/routes/de/sales/buy-offplan/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/buy-offplan/index.svelte"),
	() => import("../../src/routes/de/sales/buy-offplan/offplan-apartments.svelte"),
	() => import("../../src/routes/de/sales/buy-offplan/offplan-townhouses.svelte"),
	() => import("../../src/routes/de/sales/buy-offplan/offplan-villas.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/buy-plots/building-plots.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/index.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/land-residentail.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/townhouses-plots.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/villa-plots.svelte"),
	() => import("../../src/routes/de/sales/buy-plots/waterfront-plots.svelte"),
	() => import("../../src/routes/de/sales/buy-ready-properties/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/buy-ready-properties/index.svelte"),
	() => import("../../src/routes/de/sales/buy-ready-properties/sale-apartments.svelte"),
	() => import("../../src/routes/de/sales/buy-ready-properties/sale-townhouses.svelte"),
	() => import("../../src/routes/de/sales/buy-ready-properties/sale-villas.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/executive-housing-for-sale.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/index.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/office-spaces-for-sale.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/retail-shops-for-sale.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/sale-commercial.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/staff-accommodation-for-sale.svelte"),
	() => import("../../src/routes/de/sales/commercial-for-sale/staff-accommodation.svelte"),
	() => import("../../src/routes/de/sales/dev-options/buy-ready-properties/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/dev-options/buy-ready-properties/bkupready-apartments.svelte"),
	() => import("../../src/routes/de/sales/dev-options/buy-ready-properties/bkupready-townhouses.svelte"),
	() => import("../../src/routes/de/sales/dev-options/buy-ready-properties/bkupready-villas.svelte"),
	() => import("../../src/routes/de/sales/dev-options/buy-ready-properties/index.svelte"),
	() => import("../../src/routes/de/sales/index.svelte"),
	() => import("../../src/routes/de/sales/industrial-for-sale/[getByPageName].svelte"),
	() => import("../../src/routes/de/sales/industrial-for-sale/index.svelte"),
	() => import("../../src/routes/de/sales/seller/index.svelte"),
	() => import("../../src/routes/de/sales/seller/sell-property-in-dubai.svelte"),
	() => import("../../src/routes/de/sales/seller/why-list-with-driven.svelte"),
	() => import("../../src/routes/de/thank-you-ru.svelte"),
	() => import("../../src/routes/demo/map.svelte"),
	() => import("../../src/routes/demo/sales.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/properties-for-[status]/[community]/[propertytype]/[bedrooms]/[min]-[max]/index.svelte"),
	() => import("../../src/routes/properties-for-[status]/[community]/[propertytype]/[bedrooms]/index.svelte"),
	() => import("../../src/routes/properties-for-[status]/[community]/[propertytype]/index.svelte"),
	() => import("../../src/routes/properties-for-[status]/[community]/index.svelte"),
	() => import("../../src/routes/properties-for-[status]/index.svelte")
];

export const dictionary = {
	"": [[0, 125], [1]],
	"apitest": [[0, 19], [1]],
	"api/SerachingOne": [[0, 16], [1]],
	"api/myTest": [[0, 18], [1]],
	"de/about-us": [[8, 9, 27], [1]],
	"de/dubai": [[8, 9, 45], [1]],
	"de/explore": [[8, 9, 53], [1]],
	"de/rentals": [[8, 9, 75], [1]],
	"de/sales": [[8, 9, 116], [1]],
	"de/thank-you-ru": [[8, 9, 122], [1]],
	"demo/map": [[0, 123], [1]],
	"demo/sales": [[0, 124], [1]],
	"de/about-us/contact-us": [[8, 9, 25], [1]],
	"de/about-us/driven-properties-international": [[8, 9, 26], [1]],
	"de/about-us/management": [[8, 9, 28], [1]],
	"de/about-us/our-services": [[8, 9, 33], [1]],
	"de/about-us/preferred-partners": [[8, 9, 39], [1]],
	"de/about-us/track-record": [[8, 9, 44], [1]],
	"de/explore/abu-dhabi-projects": [[8, 9, 48], [1]],
	"de/explore/dubai-properties-areas": [[8, 9, 50], [1]],
	"de/explore/exclusive-projects": [[8, 9, 51], [1]],
	"de/explore/forbes-global-properties": [[8, 9, 52], [1]],
	"de/explore/new-development-dubai": [[8, 9, 54], [1]],
	"de/explore/ready-projects": [[8, 9, 55], [1]],
	"de/explore/real-estate-investment-in-dubai": [[8, 9, 56], [1]],
	"de/explore/why-dubai": [[8, 9, 57], [1]],
	"de/rentals/commerical": [[8, 9, 68], [1]],
	"de/rentals/landlord-services": [[8, 9, 77], [1]],
	"de/rentals/properties-for-rent": [[8, 9, 82], [1]],
	"de/sales/buy-offplan": [[8, 9, 87], [1]],
	"de/sales/buy-plots": [[8, 9, 93], [1]],
	"de/sales/buy-ready-properties": [[8, 9, 99], [1]],
	"de/sales/commercial-for-sale": [[8, 9, 105], [1]],
	"de/sales/industrial-for-sale": [[8, 9, 118], [1]],
	"de/sales/seller": [[8, 9, 119], [1]],
	"de/about-us/our-services/corporate-occupier-services": [[8, 9, 29], [1]],
	"de/about-us/our-services/development-consultancy": [[8, 9, 30], [1]],
	"de/about-us/our-services/development-management": [[8, 9, 31], [1]],
	"de/about-us/our-services/exclusive-sales-and-marketing": [[8, 9, 32], [1]],
	"de/about-us/our-services/invest-in-property": [[8, 9, 34], [1]],
	"de/about-us/our-services/mortgage-advisory": [[8, 9, 35], [1]],
	"de/about-us/our-services/property-management": [[8, 9, 36], [1]],
	"de/about-us/our-services/real-estate-brokage": [[8, 9, 37], [1]],
	"de/about-us/our-services/strategic-advisory-and-consulting": [[8, 9, 38], [1]],
	"de/about-us/track-record/awards": [[8, 9, 41], [1]],
	"de/about-us/track-record/client-testimonials": [[8, 9, 42], [1]],
	"de/about-us/track-record/driven-team": [[8, 9, 43], [1]],
	"de/rentals/commerical/commerial-for-rent": [[8, 9, 66], [1]],
	"de/rentals/commerical/executive-housing-for-rent": [[8, 9, 67], [1]],
	"de/rentals/commerical/industrial-for-rent": [[8, 9, 69], [1]],
	"de/rentals/commerical/office-spaces-for-rent": [[8, 9, 70], [1]],
	"de/rentals/commerical/properties-for-rent": [[8, 9, 72], [1]],
	"de/rentals/commerical/retail-shops-for-rent": [[8, 9, 73], [1]],
	"de/rentals/commerical/staff-accommodation-for-rent": [[8, 9, 74], [1]],
	"de/rentals/landlord-services/landlord-representation": [[8, 9, 78], [1]],
	"de/rentals/landlord-services/why-list-with-driven-for-rent": [[8, 9, 79], [1]],
	"de/rentals/properties-for-rent/rent-apartments": [[8, 9, 83], [1]],
	"de/rentals/properties-for-rent/rent-townhouses": [[8, 9, 84], [1]],
	"de/rentals/properties-for-rent/rent-villas": [[8, 9, 85], [1]],
	"de/sales/buy-offplan/offplan-apartments": [[8, 9, 88], [1]],
	"de/sales/buy-offplan/offplan-townhouses": [[8, 9, 89], [1]],
	"de/sales/buy-offplan/offplan-villas": [[8, 9, 90], [1]],
	"de/sales/buy-plots/building-plots": [[8, 9, 92], [1]],
	"de/sales/buy-plots/land-residentail": [[8, 9, 94], [1]],
	"de/sales/buy-plots/townhouses-plots": [[8, 9, 95], [1]],
	"de/sales/buy-plots/villa-plots": [[8, 9, 96], [1]],
	"de/sales/buy-plots/waterfront-plots": [[8, 9, 97], [1]],
	"de/sales/buy-ready-properties/sale-apartments": [[8, 9, 100], [1]],
	"de/sales/buy-ready-properties/sale-townhouses": [[8, 9, 101], [1]],
	"de/sales/buy-ready-properties/sale-villas": [[8, 9, 102], [1]],
	"de/sales/commercial-for-sale/executive-housing-for-sale": [[8, 9, 104], [1]],
	"de/sales/commercial-for-sale/office-spaces-for-sale": [[8, 9, 106], [1]],
	"de/sales/commercial-for-sale/retail-shops-for-sale": [[8, 9, 107], [1]],
	"de/sales/commercial-for-sale/sale-commercial": [[8, 9, 108], [1]],
	"de/sales/commercial-for-sale/staff-accommodation-for-sale": [[8, 9, 109], [1]],
	"de/sales/commercial-for-sale/staff-accommodation": [[8, 9, 110], [1]],
	"de/sales/dev-options/buy-ready-properties": [[8, 9, 115], [1]],
	"de/sales/seller/sell-property-in-dubai": [[8, 9, 120], [1]],
	"de/sales/seller/why-list-with-driven": [[8, 9, 121], [1]],
	"de/sales/dev-options/buy-ready-properties/bkupready-apartments": [[8, 9, 112], [1]],
	"de/sales/dev-options/buy-ready-properties/bkupready-townhouses": [[8, 9, 113], [1]],
	"de/sales/dev-options/buy-ready-properties/bkupready-villas": [[8, 9, 114], [1]],
	"de/rentals/commerical/commerial-for-rent/[getByPageName]": [[8, 9, 65], [1]],
	"de/rentals/commerical/properties-for-rent/[getByPageName]": [[8, 9, 71], [1]],
	"de/sales/dev-options/buy-ready-properties/[getByPageName]": [[8, 9, 111], [1]],
	"de/about-us/track-record/[pageSlug]": [[8, 9, 40], [1]],
	"de/dubai/off-plan-projects/[projectName]": [[8, 9, 46], [1]],
	"de/explore/abu-dhabi-projects/[getByPage]": [[8, 9, 47], [1]],
	"de/explore/dubai-properties-areas/[getByPage]": [[8, 9, 49], [1]],
	"de/rentals/commerical/[getByPageName]": [[8, 9, 63], [1]],
	"de/rentals/commerical/[getByPageSlug]": [[8, 9, 64], [1]],
	"de/rentals/landlord-services/[getByPageName]": [[8, 9, 76], [1]],
	"de/rentals/properties-for-rent/[getByPageContent]": [[8, 9, 80], [1]],
	"de/rentals/properties-for-rent/[getByPageName]": [[8, 9, 81], [1]],
	"de/sales/buy-offplan/[getByPageName]": [[8, 9, 86], [1]],
	"de/sales/buy-plots/[getByPageName]": [[8, 9, 91], [1]],
	"de/sales/buy-ready-properties/[getByPageName]": [[8, 9, 98], [1]],
	"de/sales/commercial-for-sale/[getByPageName]": [[8, 9, 103], [1]],
	"de/sales/industrial-for-sale/[getByPageName]": [[8, 9, 117], [1]],
	"api/BKUP-[getPageName]": [[0, 15], [1]],
	"de/properties-for-[status]": [[8, 9, 62], [1]],
	"de/properties-for-[status]/[community]": [[8, 9, 61], [1]],
	"de/properties-for-[status]/[community]/[propertytype]": [[8, 9, 60], [1]],
	"de/properties-for-[status]/[community]/[propertytype]/[bedrooms]": [[8, 9, 59], [1]],
	"de/properties-for-[status]/[community]/[propertytype]/[bedrooms]/[min]-[max]": [[8, 9, 58], [1]],
	"api/[getPageName]": [[0, 17], [1]],
	"de/[Emirate]": [[8, 9, 24], [1]],
	"de/[Emirate]/[buildingtype]": [[8, 9, 23], [1]],
	"de/[Emirate]/[buildingtype]/[community]": [[8, 9, 22], [1]],
	"de/[Emirate]/[buildingtype]/[community]/[property]": [[8, 9, 21], [1]],
	"de/[Emirate]/[buildingtype]/[community]/[property]/[refno]": [[8, 9, 20], [1]],
	"properties-for-[status]": [[0, 130], [1]],
	"properties-for-[status]/[community]": [[0, 129], [1]],
	"properties-for-[status]/[community]/[propertytype]": [[0, 128], [1]],
	"properties-for-[status]/[community]/[propertytype]/[bedrooms]": [[0, 127], [1]],
	"properties-for-[status]/[community]/[propertytype]/[bedrooms]/[min]-[max]": [[0, 126], [1]],
	"[Emirate]": [[0, 14], [1]],
	"[Emirate]/[buildingtype]": [[0, 13], [1]],
	"[Emirate]/[buildingtype]/[community]": [[0, 12], [1]],
	"[Emirate]/[buildingtype]/[community]/[property]": [[0, 11], [1]],
	"[Emirate]/[buildingtype]/[community]/[property]/[refno]": [[0, 10], [1]]
};