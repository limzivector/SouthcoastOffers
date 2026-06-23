/* =========================================================================
   South Coast Offers — sample listings (fictional demo data)
   Addresses, prices, and details are invented for demonstration only.
   ========================================================================= */
window.SCO_LISTINGS = [
  {
    id: 'irvine-westpark-2br',
    price: 879000, beds: 2, baths: 2, sqft: 1180, type: 'Condo',
    street: '42 Sunlit Terrace', city: 'Irvine', zip: '92602',
    year: 2014, lotSqft: 0, hoa: 320, daysOnMarket: 6,
    photo: 'linear-gradient(135deg,#5b8def,#2f5fbf)',
    desc: 'Light-filled Westpark condo with an open kitchen, quartz counters, and a private balcony. Steps from parks and top-rated schools.',
    features: ['Open-concept kitchen', 'In-unit laundry', 'Attached 2-car garage', 'Community pool & spa', 'Central A/C'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'newport-bayview-4br',
    price: 2395000, beds: 4, baths: 3, sqft: 2840, type: 'Single-Family',
    street: '118 Bayview Crest', city: 'Newport Beach', zip: '92660',
    year: 2006, lotSqft: 6200, hoa: 0, daysOnMarket: 11,
    photo: 'linear-gradient(135deg,#14b8a6,#0e7490)',
    desc: 'Elegant Newport Beach home with vaulted ceilings, a chef’s kitchen, and a resort-style backyard with built-in BBQ and spa.',
    features: ['Chef’s kitchen', 'Primary suite with walk-in closet', 'Solar panels', 'Saltwater spa', '3-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'huntington-pier-3br',
    price: 1265000, beds: 3, baths: 2, sqft: 1720, type: 'Single-Family',
    street: '503 Pier Vista Ln', city: 'Huntington Beach', zip: '92648',
    year: 1998, lotSqft: 5100, hoa: 0, daysOnMarket: 3,
    photo: 'linear-gradient(135deg,#f59e0b,#d97706)',
    desc: 'Coastal single-story just over a mile from the pier. Remodeled kitchen, drought-tolerant landscaping, and an entertainer’s patio.',
    features: ['Remodeled kitchen', 'Hardwood floors', 'Tankless water heater', 'Covered patio', 'RV parking'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'costamesa-eastside-3br',
    price: 1149000, beds: 3, baths: 2, sqft: 1560, type: 'Single-Family',
    street: '236 Eastside Walk', city: 'Costa Mesa', zip: '92627',
    year: 1972, lotSqft: 6000, hoa: 0, daysOnMarket: 14,
    photo: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
    desc: 'Charming Eastside Costa Mesa bungalow with original character, a bright living room, and a generous lot ready for an ADU.',
    features: ['ADU potential', 'Updated electrical', 'Mature landscaping', 'Detached garage', 'Dual-pane windows'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  },
  {
    id: 'anaheim-colony-4br',
    price: 935000, beds: 4, baths: 3, sqft: 2010, type: 'Single-Family',
    street: '77 Colony Park Dr', city: 'Anaheim', zip: '92805',
    year: 2009, lotSqft: 4200, hoa: 145, daysOnMarket: 8,
    photo: 'linear-gradient(135deg,#ef4444,#b91c1c)',
    desc: 'Spacious Anaheim Colony home near the Packing District. Downstairs bedroom and bath, loft, and low-maintenance yard.',
    features: ['Downstairs bedroom & bath', 'Upstairs loft', 'Smart thermostat', 'Community park', '2-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'santaana-floral-2br',
    price: 729000, beds: 2, baths: 2, sqft: 1240, type: 'Townhome',
    street: '19 Floral Park Mews', city: 'Santa Ana', zip: '92701',
    year: 2016, lotSqft: 0, hoa: 240, daysOnMarket: 5,
    photo: 'linear-gradient(135deg,#10b981,#047857)',
    desc: 'Modern townhome near historic Floral Park. Three-story layout with a rooftop deck and direct-access garage.',
    features: ['Rooftop deck', 'Direct-access garage', 'Stainless appliances', 'EV charger ready', 'Low HOA'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'longbeach-belmont-3br',
    price: 1085000, beds: 3, baths: 2, sqft: 1620, type: 'Single-Family',
    street: '344 Belmont Shore Ave', city: 'Long Beach', zip: '90803',
    year: 1948, lotSqft: 4400, hoa: 0, daysOnMarket: 9,
    photo: 'linear-gradient(135deg,#0ea5e9,#0369a1)',
    desc: 'Classic Belmont Shore character home blocks from the beach and 2nd Street. Cove ceilings, a cozy fireplace, and a sunny yard.',
    features: ['Wood-burning fireplace', 'Restored hardwoods', 'Detached garage', 'Walkable to beach', 'Updated kitchen'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'pasadena-bungalow-3br',
    price: 1320000, beds: 3, baths: 2, sqft: 1880, type: 'Single-Family',
    street: '88 Craftsman Row', city: 'Pasadena', zip: '91101',
    year: 1925, lotSqft: 6700, hoa: 0, daysOnMarket: 12,
    photo: 'linear-gradient(135deg,#f97316,#c2410c)',
    desc: 'Storybook Pasadena Craftsman with built-ins, a wraparound porch, and a detached studio perfect for a home office.',
    features: ['Original built-ins', 'Wraparound porch', 'Detached studio', 'Mature oak trees', 'Updated systems'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'torrance-southwood-4br',
    price: 1175000, beds: 4, baths: 3, sqft: 2150, type: 'Single-Family',
    street: '255 Southwood Glen', city: 'Torrance', zip: '90505',
    year: 1985, lotSqft: 5600, hoa: 0, daysOnMarket: 7,
    photo: 'linear-gradient(135deg,#6366f1,#4338ca)',
    desc: 'Move-in-ready Southwood home in a top school zone. Vaulted entry, remodeled baths, and a private pool-sized backyard.',
    features: ['Top-rated schools', 'Remodeled bathrooms', 'Vaulted ceilings', 'Pool-sized yard', '3-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  },
  {
    id: 'glendale-adams-2br',
    price: 815000, beds: 2, baths: 2, sqft: 1320, type: 'Condo',
    street: '410 Adams Hill Way', city: 'Glendale', zip: '91204',
    year: 2019, lotSqft: 0, hoa: 380, daysOnMarket: 4,
    photo: 'linear-gradient(135deg,#ec4899,#be185d)',
    desc: 'Like-new Adams Hill condo with floor-to-ceiling windows, a gourmet kitchen, and skyline views from a private balcony.',
    features: ['Skyline views', 'Gourmet kitchen', 'In-unit laundry', 'Secured parking', 'Fitness center'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'la-highland-3br',
    price: 1045000, beds: 3, baths: 2, sqft: 1490, type: 'Single-Family',
    street: '127 Highland Park Rise', city: 'Los Angeles', zip: '90042',
    year: 1939, lotSqft: 5000, hoa: 0, daysOnMarket: 10,
    photo: 'linear-gradient(135deg,#22c55e,#15803d)',
    desc: 'Stylish Highland Park home walkable to York Blvd. Designer finishes, a chef’s kitchen, and a deck overlooking the hills.',
    features: ['Designer finishes', 'Chef’s kitchen', 'Hillside deck', 'Central A/C', 'Walkable location'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'fullerton-raymond-4br',
    price: 998000, beds: 4, baths: 3, sqft: 2260, type: 'Single-Family',
    street: '63 Raymond Hills Ct', city: 'Fullerton', zip: '92831',
    year: 1991, lotSqft: 7100, hoa: 0, daysOnMarket: 15,
    photo: 'linear-gradient(135deg,#0d9488,#115e59)',
    desc: 'Generous Raymond Hills two-story on a quiet cul-de-sac. Formal dining, a large bonus room, and a terraced backyard.',
    features: ['Cul-de-sac location', 'Bonus room', 'Formal dining', 'Terraced yard', '3-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  }
];
