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
  },
  {
    id: 'missionviejo-lake-3br',
    price: 1095000, beds: 3, baths: 3, sqft: 1940, type: 'Single-Family',
    street: '14 Lakeshore Bend', city: 'Mission Viejo', zip: '92691',
    year: 1989, lotSqft: 5300, hoa: 95, daysOnMarket: 6,
    photo: 'linear-gradient(135deg,#3b82f6,#1e40af)',
    desc: 'Bright Mission Viejo home with lake-association access, a vaulted living room, and a private backyard with a built-in fire pit.',
    features: ['Lake association access', 'Vaulted ceilings', 'Built-in fire pit', 'Remodeled kitchen', '2-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'tustin-legacy-3br',
    price: 945000, beds: 3, baths: 3, sqft: 1680, type: 'Townhome',
    street: '120 Legacy Park Loop', city: 'Tustin', zip: '92782',
    year: 2018, lotSqft: 0, hoa: 285, daysOnMarket: 4,
    photo: 'linear-gradient(135deg,#06b6d4,#0e7490)',
    desc: 'Contemporary Tustin Legacy townhome with an open main level, a covered deck, and a two-car garage wired for EV charging.',
    features: ['Open main level', 'Covered deck', 'EV charger ready', 'Smart home wiring', 'Community pool'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'lagunaniguel-ridge-4br',
    price: 1685000, beds: 4, baths: 3, sqft: 2580, type: 'Single-Family',
    street: '8 Seabreeze Ridge', city: 'Laguna Niguel', zip: '92677',
    year: 2001, lotSqft: 6800, hoa: 130, daysOnMarket: 13,
    photo: 'linear-gradient(135deg,#14b8a6,#0f766e)',
    desc: 'Hillside Laguna Niguel home with peek ocean views, a soaring entry, and a terraced yard built for sunset dinners.',
    features: ['Peek ocean views', 'Soaring two-story entry', 'Terraced backyard', 'Primary retreat', '3-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'HOA Documents']
  },
  {
    id: 'brea-hills-4br',
    price: 1145000, beds: 4, baths: 3, sqft: 2240, type: 'Single-Family',
    street: '301 Brea Hills Ct', city: 'Brea', zip: '92821',
    year: 1994, lotSqft: 6100, hoa: 0, daysOnMarket: 9,
    photo: 'linear-gradient(135deg,#a855f7,#7e22ce)',
    desc: 'Spacious Brea two-story near the Birch Street promenade. Downstairs office, big island kitchen, and a low-maintenance yard.',
    features: ['Downstairs office', 'Island kitchen', 'Walk to downtown', 'Solar panels', '3-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  },
  {
    id: 'redondo-southbay-3br',
    price: 1525000, beds: 3, baths: 3, sqft: 1860, type: 'Townhome',
    street: '218 South Bay Walk', city: 'Redondo Beach', zip: '90278',
    year: 2015, lotSqft: 0, hoa: 0, daysOnMarket: 5,
    photo: 'linear-gradient(135deg,#f43f5e,#be123c)',
    desc: 'Coastal South Bay townhome a short ride to the pier. Three levels of light, a rooftop deck, and a chef-ready kitchen.',
    features: ['Rooftop deck', 'Three-level layout', 'Chef-ready kitchen', 'Attached garage', 'No HOA'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Natural Hazard Disclosure', 'Preliminary Title Report']
  },
  {
    id: 'burbank-magnolia-3br',
    price: 1015000, beds: 3, baths: 2, sqft: 1520, type: 'Single-Family',
    street: '529 Magnolia Glen', city: 'Burbank', zip: '91505',
    year: 1951, lotSqft: 5400, hoa: 0, daysOnMarket: 8,
    photo: 'linear-gradient(135deg,#fb923c,#ea580c)',
    desc: 'Charming Magnolia Park bungalow walkable to shops and studios. Updated systems, hardwood floors, and a deep, private lot.',
    features: ['Walk to Magnolia Park', 'Restored hardwoods', 'Updated systems', 'Deep lot', 'Detached garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  },
  {
    id: 'culvercity-arts-2br',
    price: 989000, beds: 2, baths: 2, sqft: 1290, type: 'Condo',
    street: '77 Arts District Pl', city: 'Culver City', zip: '90232',
    year: 2017, lotSqft: 0, hoa: 410, daysOnMarket: 7,
    photo: 'linear-gradient(135deg,#22c55e,#16a34a)',
    desc: 'Sleek Culver City condo steps from the Arts District. Floor-to-ceiling glass, a gourmet kitchen, and a resident sky lounge.',
    features: ['Floor-to-ceiling glass', 'Gourmet kitchen', 'Sky lounge', 'Secured parking', 'Walk to dining'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'HOA Documents', 'Preliminary Title Report']
  },
  {
    id: 'whittier-uptown-4br',
    price: 879000, beds: 4, baths: 2, sqft: 1980, type: 'Single-Family',
    street: '146 Uptown Terrace', city: 'Whittier', zip: '90601',
    year: 1962, lotSqft: 6500, hoa: 0, daysOnMarket: 12,
    photo: 'linear-gradient(135deg,#6366f1,#4f46e5)',
    desc: 'Roomy Uptown Whittier home with original charm, a large family room, and an oversized lot with space for an ADU.',
    features: ['ADU potential', 'Large family room', 'Oversized lot', 'Dual-pane windows', '2-car garage'],
    disclosures: ['Seller Property Questionnaire', 'Inspection Report', 'Preliminary Title Report']
  }
];
