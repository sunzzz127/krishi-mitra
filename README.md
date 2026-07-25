# Krishi Mitra

A crop and soil advisor for Andhra Pradesh farmers. Pick a district, see the
dominant soil types, and get crop recommendations with water needs and
sowing season.

## Stack

Vite + React + Tailwind CSS, with Firebase wired in and ready for Firestore
(not required to run the app as-is — data currently comes from a local seed
file).

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Project structure

```
src/
  data/districts.js       seed data: soil mix + crops per district
  components/
    DistrictSelector.jsx  district picker grouped by farming zone
    CropDetail.jsx         soil bar + crop cards for the selected district
  App.jsx                  top-level layout and state
  firebase.js               Firebase init (Firestore), reads from .env
```

## Moving data to Firestore

Right now `src/data/districts.js` is a static object. To make it editable
without redeploying:

1. Copy `.env.example` to `.env` and fill in your Firebase project config.
2. Create a `districts` collection in Firestore, one doc per district key,
   matching the shape in `src/data/districts.js`.
3. Replace the static `DISTRICTS` export with a `getDocs` call in a
   `useEffect`/custom hook, keeping the same shape so the components don't
   need to change.

## What's covered so far

8 districts across 3 zones: Rayalaseema, Coastal Andhra, and North
Coastal/Agency. Water figures are seasonal reference ranges, not
site-specific irrigation schedules — flagged in the UI itself.

## Natural next steps

- Expand to all 26 districts (post-2022 AP district split)
- GPS-based district detection instead of manual selection
- Telugu language toggle
- Swap seasonal water ranges for ICAR crop-water-requirement tables
- Add market price data per crop (e.g. via Agmarknet)
