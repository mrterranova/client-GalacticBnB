import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-filters',
  templateUrl: './more-filters.component.html',
  styleUrls: ['./more-filters.component.css'],
})
export class MoreFiltersComponent implements OnInit {
  public moreFiltersSections = {
    popularFilters: {
      name: 'Popular Filters',
      filters: new Map<string, boolean>()
        .set('Hot Tub', false)
        .set('Wifi', false)
        .set('Pool', false)
        .set('Pets Allowed', false)
        .set('House', false)
        .set('Entire Place', false),
    },
    roomsAndBeds: {
      name: 'Rooms and Beds',
      filters: new Map<string, number>()
        .set('Beds', 0)
        .set('Bedrooms', 0)
        .set('Bathrooms', 0),
    },
    verifiedPlaces: {
      name: 'Verified Places',
      filters: new Map<string, boolean>()
        .set('GalacticBnB Plus', false)
        .set('GalacticBnB Luxe', false)
        .set('Traveling for Work', false),
    },
    moreOptions: {
      name: 'More Options',
      filters: new Map<string, boolean>()
        .set('Super Host', false)
        .set('Accessibility', false),
    },
    amenities: {
      name: 'Amenities',
      filters: new Map<string, boolean>()
        .set('Kitchen', false)
        .set('Shampoo', false)
        .set('Heating', false)
        .set('Air conditioning', false)
        .set('Washer', false)
        .set('Dryer', false)
        .set('Wifi', false)
        .set('Breakfast', false)
        .set('Indoor fireplace', false)
        .set('Hangers', false)
        .set('Iron', false)
        .set('Hair dryer', false)
        .set('Laptop-friendly workspace', false)
        .set('TV', false)
        .set('Crib', false)
        .set('High chair', false)
        .set('Self check-in', false)
        .set('Smoke alarm', false)
        .set('Carbon monoxide alarm', false)
        .set('Private bathroom', false)
        .set('Piano', false)
        .set('Beachfront', false)
        .set('Waterfront', false),
    },
    facilities: {
      name: 'Facilities',
      filters: new Map<string, boolean>()
        .set('Free parking on premises', false)
        .set('Gym', false)
        .set('Hot tub', false)
        .set('Pool', false),
    },
    propertyType: {
      name: 'Property Type',
      filters: new Map<string, boolean>()
        .set('Villa', false)
        .set('Townhouse', false)
        .set('Serviced apartment', false)
        .set('Resort', false)
        .set('Loft', false)
        .set('Hotel', false)
        .set('Hostel', false)
        .set('Guesthouse', false)
        .set('Guest suite', false)
        .set('Cottage', false)
        .set('Chalet', false)
        .set('Cabin', false)
        .set('Bungalow', false)
        .set('Boutique hotel', false)
        .set('Bed and breakfast', false)
        .set('ApartmentHouse', false),
    },
    uniqueStays: {
      name: 'Unique Stays',
      filters: new Map<string, boolean>()
        .set('Barn', false)
        .set('Boat', false)
        .set('Camper/RV', false)
        .set('Campsite', false)
        .set('Casa particular (Cuba)', false)
        .set('Castle', false)
        .set('Dome house', false)
        .set('Earth house', false)
        .set('Farm stay', false)
        .set('Houseboat', false)
        .set('Hut', false)
        .set('Igloo', false)
        .set('Island', false)
        .set('Nature lodge', false)
        .set('Tent', false)
        .set('Tiny house', false)
        .set('Tipi', false)
        .set('Train', false)
        .set('Treehouse', false)
        .set('Yurt', false),
    },
    houseRules: {
      name: 'House Rules',
      filters: new Map<string, boolean>()
        .set('Pets Allowed', false)
        .set('Smoking Allowed', false),
    },
    neighborhoods: {
      name: 'Neighborhoods',
      filters: new Map<string, boolean>()
        .set('Nearby Area 1', false)
        .set('Nearby Area 2', false)
        .set('Nearby Area 3', false)
        .set('Nearby Area 4', false)
        .set('Nearby Area 5', false)
        .set('Nearby Area 6', false)
        .set('Nearby Area 7', false)
        .set('Nearby Area 8', false)
        .set('Nearby Area 9', false)
        .set('Nearby Area 10', false)
        .set('Nearby Area 11', false)
        .set('Nearby Area 12', false)
        .set('Nearby Area 13', false)
        .set('Nearby Area 14', false)
        .set('Nearby Area 15', false)
        .set('Nearby Area 16', false)
        .set('Nearby Area 17', false)
        .set('Nearby Area 18', false)
        .set('Nearby Area 19', false)
        .set('Nearby Area 20', false),
    },
    hostLanguage: {
      name: 'Host Language',
      filters: new Map<string, boolean>()
        .set('English', false)
        .set('French', false)
        .set('German', false)
        .set('Japanese', false)
        .set('Italian', false)
        .set('Russian', false)
        .set('Spanish', false)
        .set('Chinese(Simplified)', false)
        .set('Arabic', false)
        .set('Hindi', false)
        .set('Portuguese', false)
        .set('Turkish', false)
        .set('Indonesian', false)
        .set('Dutch', false)
        .set('Korean', false)
        .set('Bengali', false)
        .set('Thai', false)
        .set('Punjabi', false)
        .set('Greek', false)
        .set('Sign', false)
        .set('Hebrew', false)
        .set('Polish', false)
        .set('Malay', false)
        .set('Tagalog', false)
        .set('Danish', false)
        .set('Swedish', false)
        .set('Norwegian', false)
        .set('Finnish', false)
        .set('Czech', false)
        .set('Hungarian', false)
        .set('Ukrainian', false),
    },
    [Symbol.iterator]: function* () {
      let properties = Object.keys(this);
      for (let i of properties) {
        yield [i, this[i]];
      }
    },
  };
  constructor() {}

  ngOnInit(): void {
    this.getFilterProperties();
  }

  getFilterProperties(): void {
    for (const stuff of this.moreFiltersSections) {
      for (const keys of stuff) {
        console.log(keys.toString());
      }
    }
    //return Object;
  }
}
