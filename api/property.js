// Seam for property-data lookup (funnel step 3 auto-fill).
//
// Wire a property-data provider (ATTOM, Estated, Rentcast, CoreLogic, ...) here,
// keyed by PROPERTY_DATA_API_KEY in your Vercel env, then map the provider's
// response to the shape the funnel expects:
//   { beds, fullBaths, partialBaths, floors, sqft, basement, yearBuilt, pool }
//
// Then set SCO_CONFIG.propertyDataEndpoint = '/api/property' in assets/app.js so
// the funnel's "Confirm your home details" step pre-fills automatically.
'use strict';

module.exports = async (req, res) => {
  const KEY = process.env.PROPERTY_DATA_API_KEY;
  const address = (req.query && req.query.address) || '';

  if (!KEY) {
    res.status(501).json({
      error: 'not_configured',
      message: 'Set PROPERTY_DATA_API_KEY and implement the provider call in api/property.js.'
    });
    return;
  }
  if (!address) {
    res.status(400).json({ error: 'missing_address' });
    return;
  }

  // TODO: call your provider with `address`, e.g.:
  //   const r = await fetch('https://api.provider.com/property?address=' +
  //     encodeURIComponent(address), { headers: { Authorization: 'Bearer ' + KEY } });
  //   const d = await r.json();
  //   res.status(200).json({ beds: d.beds, fullBaths: d.baths, partialBaths: d.halfBaths,
  //     floors: d.stories, sqft: d.livingArea, basement: d.hasBasement,
  //     yearBuilt: d.yearBuilt, pool: d.hasPool });
  res.status(501).json({ error: 'not_implemented', message: 'Implement the provider call in api/property.js.' });
};
