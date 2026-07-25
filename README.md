## Krishi Mitra

A crop and soil advisor for Andhra Pradesh farmers. Select a district to see
its soil composition, crops best suited to that land, water needs, and
sowing season.

🔗 **Live app:** [andhra-pradesh-soil-advisor.web.app](https://andhra-pradesh-soil-advisor.web.app)

<p align="center">
  <img width="2940" height="1734" alt="image" src="https://github.com/user-attachments/assets/dbdad04f-a8ab-4956-ae65-cc6d53e04328" />
  <img width="2940" height="1734" alt="image" src="https://github.com/user-attachments/assets/7ad033db-8e05-46db-ac37-03a6977d5bce" />
</p>

## About

Most farming advisory apps in India are broad "everything for agriculture"
tools that end up shallow on any one feature. Krishi Mitra focuses narrowly
on one decision — soil-to-crop matching by district — with water needs and
sowing season attached, so a farmer can check before planting, not after.

Currently covers 8 districts across Andhra Pradesh's three farming zones:
Rayalaseema, Coastal Andhra, and North Coastal/Agency.

## Tech stack

- **React** + **Vite** — frontend
- **Tailwind CSS** — styling, dark mode support
- **Firebase Hosting** — deployment
- **Firebase** (Firestore-ready) — data layer, currently static seed data

## Getting started

```bash
git clone https://github.com/sunzzz127/krishi-mitra.git
cd krishi-mitra
npm install
```

Copy `.env.example` to `.env` and fill in your own Firebase project config
(Firebase console → Project settings → General → Your apps → SDK setup).

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## Project structure

```
src/
  data/districts.js       soil mix + crops per district (seed data)
  components/
    Navbar.jsx             sticky nav with dark mode toggle
    Hero.jsx                landing section
    DistrictSelector.jsx    zone-filtered district picker
    CropDetail.jsx          soil bar + crop recommendation cards
    HowItWorks.jsx          3-step explainer
    Footer.jsx              data sourcing + disclaimer
  hooks/useTheme.js         dark mode with system preference detection
  firebase.js                Firebase init, reads from .env
```

## Deploying

```bash
npm run build
firebase deploy
```

## Data sourcing

- Soil composition — state agriculture department district records
- Water figures — seasonal reference ranges, ICAR-style estimates (not
  site-specific irrigation schedules)
- Coverage — 8 of 26 districts, expanding over time

## Roadmap

- [ ] Move district data from static file to Firestore
- [ ] Expand to all 26 AP districts (post-2022 district split)
- [ ] GPS-based district detection
- [ ] Telugu language toggle
- [ ] Market price data per crop (Agmarknet integration)

## License

MIT
