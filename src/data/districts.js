// Seed data for the crop advisor. Each district lists its soil mix
// (percentages), and the crops best suited to that soil with typical
// seasonal water need and sowing season.
//
// Water figures are reference ranges (ICAR-style estimates), not
// site-specific irrigation schedules. Treat as a starting point only.
//
// This module is the natural place to swap in a Firestore read later:
// replace the static export with a `getDocs(collection(db, 'districts'))`
// call and keep the same shape.

export const ZONES = [
  {
    key: 'rayalaseema',
    name: 'Rayalaseema',
    color: '#a8562f',
    districts: ['anantapur', 'kurnool', 'kadapa', 'chittoor'],
  },
  {
    key: 'coastal_andhra',
    name: 'Coastal Andhra',
    color: '#4f7a3f',
    districts: ['krishna', 'guntur', 'west_godavari'],
  },
  {
    key: 'north_coastal_agency',
    name: 'North Coastal / Agency',
    color: '#8a3b2e',
    districts: ['visakhapatnam'],
  },
]

export const SOIL_LABELS = {
  red: 'Red soil',
  black: 'Black cotton soil',
  alluvial: 'Alluvial / deltaic soil',
  laterite: 'Laterite soil',
}

export const SOIL_COLORS = {
  red: '#a8562f',
  black: '#2f2b26',
  alluvial: '#4f7a3f',
  laterite: '#8a3b2e',
}

export const DISTRICTS = {
  anantapur: {
    name: 'Anantapur',
    zone: 'Rayalaseema',
    soilMix: [
      ['red', 87],
      ['black', 13],
    ],
    crops: [
      { name: 'Groundnut', water: '500-600 mm/season', perAcre: '~2,000-2,400 kL/acre', season: 'Kharif (Jun-Sep)' },
      { name: 'Bengal gram', water: '300-350 mm/season', perAcre: '~1,200-1,400 kL/acre', season: 'Rabi (Oct-Jan)' },
      { name: 'Sunflower', water: '450-550 mm/season', perAcre: '~1,800-2,200 kL/acre', season: 'Rabi/Zaid' },
      { name: 'Sweet orange', water: '900-1,100 mm/yr', perAcre: '~3,600-4,400 kL/acre', season: 'Perennial' },
    ],
  },
  kurnool: {
    name: 'Kurnool',
    zone: 'Rayalaseema',
    soilMix: [
      ['black', 55],
      ['red', 45],
    ],
    crops: [
      { name: 'Cotton', water: '700-1,300 mm/season', perAcre: '~2,800-5,200 kL/acre', season: 'Kharif (Jun-Nov)' },
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif' },
      { name: 'Maize', water: '500-800 mm/season', perAcre: '~2,000-3,200 kL/acre', season: 'Kharif/Rabi' },
      { name: 'Red gram', water: '350-450 mm/season', perAcre: '~1,400-1,800 kL/acre', season: 'Kharif' },
    ],
  },
  kadapa: {
    name: 'Kadapa (YSR)',
    zone: 'Rayalaseema',
    soilMix: [
      ['red', 65],
      ['black', 35],
    ],
    crops: [
      { name: 'Groundnut', water: '500-600 mm/season', perAcre: '~2,000-2,400 kL/acre', season: 'Kharif' },
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif' },
      { name: 'Sugarcane', water: '1,500-2,500 mm/yr', perAcre: '~6,000-10,000 kL/acre', season: 'Perennial (12mo)' },
      { name: 'Sunflower', water: '450-550 mm/season', perAcre: '~1,800-2,200 kL/acre', season: 'Rabi' },
    ],
  },
  chittoor: {
    name: 'Chittoor',
    zone: 'Rayalaseema',
    soilMix: [
      ['red', 70],
      ['black', 30],
    ],
    crops: [
      { name: 'Mango', water: '800-1,000 mm/yr', perAcre: '~3,200-4,000 kL/acre', season: 'Perennial' },
      { name: 'Groundnut', water: '500-600 mm/season', perAcre: '~2,000-2,400 kL/acre', season: 'Kharif' },
      { name: 'Ragi (finger millet)', water: '350-450 mm/season', perAcre: '~1,400-1,800 kL/acre', season: 'Kharif' },
      { name: 'Tomato', water: '400-600 mm/season', perAcre: '~1,600-2,400 kL/acre', season: 'Rabi/Zaid' },
    ],
  },
  krishna: {
    name: 'Krishna',
    zone: 'Coastal Andhra',
    soilMix: [
      ['alluvial', 50],
      ['black', 50],
    ],
    crops: [
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif + Rabi' },
      { name: 'Chillies', water: '600-800 mm/season', perAcre: '~2,400-3,200 kL/acre', season: 'Rabi (Oct-Feb)' },
      { name: 'Sugarcane', water: '1,500-2,500 mm/yr', perAcre: '~6,000-10,000 kL/acre', season: 'Perennial (12mo)' },
      { name: 'Cotton', water: '700-1,300 mm/season', perAcre: '~2,800-5,200 kL/acre', season: 'Kharif' },
    ],
  },
  guntur: {
    name: 'Guntur',
    zone: 'Coastal Andhra',
    soilMix: [
      ['black', 60],
      ['alluvial', 40],
    ],
    crops: [
      { name: 'Chillies', water: '600-800 mm/season', perAcre: '~2,400-3,200 kL/acre', season: 'Rabi' },
      { name: 'Cotton', water: '700-1,300 mm/season', perAcre: '~2,800-5,200 kL/acre', season: 'Kharif' },
      { name: 'Tobacco', water: '450-600 mm/season', perAcre: '~1,800-2,400 kL/acre', season: 'Rabi (Aug-Jan)' },
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif' },
    ],
  },
  west_godavari: {
    name: 'West Godavari',
    zone: 'Coastal Andhra',
    soilMix: [
      ['alluvial', 70],
      ['black', 30],
    ],
    crops: [
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif + Rabi' },
      { name: 'Banana', water: '1,600-2,000 mm/yr', perAcre: '~6,400-8,000 kL/acre', season: 'Perennial' },
      { name: 'Sugarcane', water: '1,500-2,500 mm/yr', perAcre: '~6,000-10,000 kL/acre', season: 'Perennial (12mo)' },
      { name: 'Turmeric', water: '1,000-1,400 mm/season', perAcre: '~4,000-5,600 kL/acre', season: 'Kharif (8-9mo)' },
    ],
  },
  visakhapatnam: {
    name: 'Visakhapatnam',
    zone: 'North Coastal / Agency',
    soilMix: [
      ['laterite', 50],
      ['alluvial', 30],
      ['red', 20],
    ],
    crops: [
      { name: 'Cashew', water: '600-800 mm/yr', perAcre: '~2,400-3,200 kL/acre', season: 'Perennial' },
      { name: 'Ragi (finger millet)', water: '350-450 mm/season', perAcre: '~1,400-1,800 kL/acre', season: 'Kharif' },
      { name: 'Paddy', water: '1,200-1,500 mm/season', perAcre: '~4,800-6,000 kL/acre', season: 'Kharif' },
      { name: 'Pulses (mixed)', water: '300-450 mm/season', perAcre: '~1,200-1,800 kL/acre', season: 'Rabi' },
    ],
  },
}
