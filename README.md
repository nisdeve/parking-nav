# parking-nav
A comprehensive parking services website with real-time occupancy tracking, multi-scenario routing, and turn-by-turn navigation

Nearby commercial alternatives use OpenStreetMap's Overpass API as the primary source. The app searches within 12 km of an Indonesian destination and returns up to five nearby places, sorted by distance. A bundled catalog in `app.js` is the second source: it fills any remaining result slots and is used when the live lookup is unavailable. The catalog covers major Indonesian urban areas but is curated and is not exhaustive. Nearby result feature labels are demo labels and do not confirm current parking rates, availability, or facility features.

The header location indicator follows the selected destination and displays its city and country. Before a destination is changed, it shows `Jakarta, Indonesia` for the default GBK Senayan location.
