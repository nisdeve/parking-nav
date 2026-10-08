const buildings = [
  // city center tower
  {
    id: "city-center",
    name: "GBK Senayan",
    address: "Gelora Bung Karno, Senayan, Jakarta",
    lat: -6.220596831651067,
    lng: 106.79908131521272,
    floors: [
      {
        level: 1,
        name: "Level 1",
        entrance: { x: 540, y: 245 },
        exit: { x: 110, y: 185 },
        lots: [
          { id: "L1-A1", zone: "A", x: 30, y: 60, w: 52, h: 52, available: true },
          { id: "L1-A2", zone: "A", x: 90, y: 60, w: 52, h: 52, available: false },
          { id: "L1-A3", zone: "A", x: 150, y: 60, w: 52, h: 52, available: true },
          { id: "L1-A4", zone: "A", x: 210, y: 60, w: 52, h: 52, available: true },
          { id: "L1-A5", zone: "A", x: 270, y: 60, w: 52, h: 52, available: false },
          { id: "L1-A6", zone: "A", x: 330, y: 60, w: 52, h: 52, available: true },

          { id: "L1-B1", zone: "B", x: 30, y: 130, w: 52, h: 52, available: false },
          { id: "L1-B2", zone: "B", x: 90, y: 130, w: 52, h: 52, available: true },
          { id: "L1-B3", zone: "B", x: 150, y: 130, w: 52, h: 52, available: true },
          { id: "L1-B4", zone: "B", x: 210, y: 130, w: 52, h: 52, available: false },
          { id: "L1-B5", zone: "B", x: 270, y: 130, w: 52, h: 52, available: true },
          { id: "L1-B6", zone: "B", x: 330, y: 130, w: 52, h: 52, available: true },

          { id: "L1-C1", zone: "C", x: 30, y: 200, w: 52, h: 52, available: true },
          { id: "L1-C2", zone: "C", x: 90, y: 200, w: 52, h: 52, available: false },
          { id: "L1-C3", zone: "C", x: 150, y: 200, w: 52, h: 52, available: true },
          { id: "L1-C4", zone: "C", x: 210, y: 200, w: 52, h: 52, available: true },
          { id: "L1-C5", zone: "C", x: 270, y: 200, w: 52, h: 52, available: false },
          { id: "L1-C6", zone: "C", x: 330, y: 200, w: 52, h: 52, available: true },

          { id: "L1-D1", zone: "D", x: 430, y: 60, w: 52, h: 52, available: true },
          { id: "L1-D2", zone: "D", x: 490, y: 60, w: 52, h: 52, available: true },
          { id: "L1-D3", zone: "D", x: 550, y: 60, w: 52, h: 52, available: false },
          { id: "L1-D4", zone: "D", x: 610, y: 60, w: 52, h: 52, available: true },
          { id: "L1-D5", zone: "D", x: 670, y: 60, w: 52, h: 52, available: false },

          { id: "L1-E1", zone: "E", x: 430, y: 130, w: 52, h: 52, available: true },
          { id: "L1-E2", zone: "E", x: 490, y: 130, w: 52, h: 52, available: false },
          { id: "L1-E3", zone: "E", x: 550, y: 130, w: 52, h: 52, available: true },
          { id: "L1-E4", zone: "E", x: 610, y: 130, w: 52, h: 52, available: false },
          { id: "L1-E5", zone: "E", x: 670, y: 130, w: 52, h: 52, available: true },

          { id: "L1-F1", zone: "F", x: 430, y: 200, w: 52, h: 52, available: false },
          { id: "L1-F2", zone: "F", x: 490, y: 200, w: 52, h: 52, available: true },
          { id: "L1-F3", zone: "F", x: 550, y: 200, w: 52, h: 52, available: false },
          { id: "L1-F4", zone: "F", x: 610, y: 200, w: 52, h: 52, available: true },
          { id: "L1-F5", zone: "F", x: 670, y: 200, w: 52, h: 52, available: true }
        ]
      },
      {
        level: 2,
        name: "Level 2",
        entrance: { x: 530, y: 250 },
        exit: { x: 80, y: 190 },
        lots: [
          { id: "L2-A1", zone: "A", x: 30, y: 60, w: 52, h: 52, available: true },
          { id: "L2-A2", zone: "A", x: 90, y: 60, w: 52, h: 52, available: false },
          { id: "L2-A3", zone: "A", x: 150, y: 60, w: 52, h: 52, available: false },
          { id: "L2-A4", zone: "A", x: 210, y: 60, w: 52, h: 52, available: true },
          { id: "L2-A5", zone: "A", x: 270, y: 60, w: 52, h: 52, available: true },
          { id: "L2-A6", zone: "A", x: 330, y: 60, w: 52, h: 52, available: false },

          { id: "L2-B1", zone: "B", x: 30, y: 130, w: 52, h: 52, available: true },
          { id: "L2-B2", zone: "B", x: 90, y: 130, w: 52, h: 52, available: false },
          { id: "L2-B3", zone: "B", x: 150, y: 130, w: 52, h: 52, available: true },
          { id: "L2-B4", zone: "B", x: 210, y: 130, w: 52, h: 52, available: true },
          { id: "L2-B5", zone: "B", x: 270, y: 130, w: 52, h: 52, available: false },
          { id: "L2-B6", zone: "B", x: 330, y: 130, w: 52, h: 52, available: true },

          { id: "L2-C1", zone: "C", x: 30, y: 200, w: 52, h: 52, available: true },
          { id: "L2-C2", zone: "C", x: 90, y: 200, w: 52, h: 52, available: true },
          { id: "L2-C3", zone: "C", x: 150, y: 200, w: 52, h: 52, available: false },
          { id: "L2-C4", zone: "C", x: 210, y: 200, w: 52, h: 52, available: true },
          { id: "L2-C5", zone: "C", x: 270, y: 200, w: 52, h: 52, available: false },
          { id: "L2-C6", zone: "C", x: 330, y: 200, w: 52, h: 52, available: true },

          { id: "L2-D1", zone: "D", x: 430, y: 60, w: 52, h: 52, available: false },
          { id: "L2-D2", zone: "D", x: 490, y: 60, w: 52, h: 52, available: true },
          { id: "L2-D3", zone: "D", x: 550, y: 60, w: 52, h: 52, available: true },
          { id: "L2-D4", zone: "D", x: 610, y: 60, w: 52, h: 52, available: false },
          { id: "L2-D5", zone: "D", x: 670, y: 60, w: 52, h: 52, available: true },

          { id: "L2-E1", zone: "E", x: 430, y: 130, w: 52, h: 52, available: false },
          { id: "L2-E2", zone: "E", x: 490, y: 130, w: 52, h: 52, available: true },
          { id: "L2-E3", zone: "E", x: 550, y: 130, w: 52, h: 52, available: true },
          { id: "L2-E4", zone: "E", x: 610, y: 130, w: 52, h: 52, available: false },
          { id: "L2-E5", zone: "E", x: 670, y: 130, w: 52, h: 52, available: true },

          { id: "L2-F1", zone: "F", x: 430, y: 200, w: 52, h: 52, available: true },
          { id: "L2-F2", zone: "F", x: 490, y: 200, w: 52, h: 52, available: true },
          { id: "L2-F3", zone: "F", x: 550, y: 200, w: 52, h: 52, available: false },
          { id: "L2-F4", zone: "F", x: 610, y: 200, w: 52, h: 52, available: true },
          { id: "L2-F5", zone: "F", x: 670, y: 200, w: 52, h: 52, available: true }
        ]
      },
      {
        level: 3,
        name: "Level 3",
        entrance: { x: 520, y: 240 },
        exit: { x: 100, y: 185 },
        lots: [
          { id: "L3-A1", zone: "A", x: 30, y: 60, w: 52, h: 52, available: false },
          { id: "L3-A2", zone: "A", x: 90, y: 60, w: 52, h: 52, available: true },
          { id: "L3-A3", zone: "A", x: 150, y: 60, w: 52, h: 52, available: false },
          { id: "L3-A4", zone: "A", x: 210, y: 60, w: 52, h: 52, available: true },
          { id: "L3-A5", zone: "A", x: 270, y: 60, w: 52, h: 52, available: false },
          { id: "L3-A6", zone: "A", x: 330, y: 60, w: 52, h: 52, available: true },

          { id: "L3-B1", zone: "B", x: 30, y: 130, w: 52, h: 52, available: true },
          { id: "L3-B2", zone: "B", x: 90, y: 130, w: 52, h: 52, available: false },
          { id: "L3-B3", zone: "B", x: 150, y: 130, w: 52, h: 52, available: true },
          { id: "L3-B4", zone: "B", x: 210, y: 130, w: 52, h: 52, available: false },
          { id: "L3-B5", zone: "B", x: 270, y: 130, w: 52, h: 52, available: true },
          { id: "L3-B6", zone: "B", x: 330, y: 130, w: 52, h: 52, available: false },

          { id: "L3-C1", zone: "C", x: 30, y: 200, w: 52, h: 52, available: true },
          { id: "L3-C2", zone: "C", x: 90, y: 200, w: 52, h: 52, available: true },
          { id: "L3-C3", zone: "C", x: 150, y: 200, w: 52, h: 52, available: false },
          { id: "L3-C4", zone: "C", x: 210, y: 200, w: 52, h: 52, available: true },
          { id: "L3-C5", zone: "C", x: 270, y: 200, w: 52, h: 52, available: false },
          { id: "L3-C6", zone: "C", x: 330, y: 200, w: 52, h: 52, available: true },

          { id: "L3-D1", zone: "D", x: 430, y: 60, w: 52, h: 52, available: false },
          { id: "L3-D2", zone: "D", x: 490, y: 60, w: 52, h: 52, available: true },
          { id: "L3-D3", zone: "D", x: 550, y: 60, w: 52, h: 52, available: true },
          { id: "L3-D4", zone: "D", x: 610, y: 60, w: 52, h: 52, available: false },
          { id: "L3-D5", zone: "D", x: 670, y: 60, w: 52, h: 52, available: true },

          { id: "L3-E1", zone: "E", x: 430, y: 130, w: 52, h: 52, available: true },
          { id: "L3-E2", zone: "E", x: 490, y: 130, w: 52, h: 52, available: false },
          { id: "L3-E3", zone: "E", x: 550, y: 130, w: 52, h: 52, available: true },
          { id: "L3-E4", zone: "E", x: 610, y: 130, w: 52, h: 52, available: false },
          { id: "L3-E5", zone: "E", x: 670, y: 130, w: 52, h: 52, available: true },

          { id: "L3-F1", zone: "F", x: 430, y: 200, w: 52, h: 52, available: false },
          { id: "L3-F2", zone: "F", x: 490, y: 200, w: 52, h: 52, available: true },
          { id: "L3-F3", zone: "F", x: 550, y: 200, w: 52, h: 52, available: false },
          { id: "L3-F4", zone: "F", x: 610, y: 200, w: 52, h: 52, available: true },
          { id: "L3-F5", zone: "F", x: 670, y: 200, w: 52, h: 52, available: true }
        ]
      }
    ]
  },
  {
    id: "harbor-park",
    name: "Harbor Parking Plaza",
    address: "88 Shoreline Drive",
    lat: 40.7212,
    lng: -74.0018,
    floors: [
      {
        level: 1,
        name: "Level 1",
        entrance: { x: 510, y: 210 },
        exit: { x: 80, y: 210 },
        lots: [
          { id: "H1-A1", zone: "A", x: 30, y: 60, w: 52, h: 52, available: true },
          { id: "H1-A2", zone: "A", x: 90, y: 60, w: 52, h: 52, available: true },
          { id: "H1-A3", zone: "A", x: 150, y: 60, w: 52, h: 52, available: false },
          { id: "H1-A4", zone: "A", x: 210, y: 60, w: 52, h: 52, available: true },
          { id: "H1-A5", zone: "A", x: 270, y: 60, w: 52, h: 52, available: false },
          { id: "H1-A6", zone: "A", x: 330, y: 60, w: 52, h: 52, available: true },

          { id: "H1-B1", zone: "B", x: 30, y: 130, w: 52, h: 52, available: false },
          { id: "H1-B2", zone: "B", x: 90, y: 130, w: 52, h: 52, available: true },
          { id: "H1-B3", zone: "B", x: 150, y: 130, w: 52, h: 52, available: true },
          { id: "H1-B4", zone: "B", x: 210, y: 130, w: 52, h: 52, available: false },
          { id: "H1-B5", zone: "B", x: 270, y: 130, w: 52, h: 52, available: true },
          { id: "H1-B6", zone: "B", x: 330, y: 130, w: 52, h: 52, available: true },

          { id: "H1-C1", zone: "C", x: 430, y: 60, w: 52, h: 52, available: true },
          { id: "H1-C2", zone: "C", x: 490, y: 60, w: 52, h: 52, available: false },
          { id: "H1-C3", zone: "C", x: 550, y: 60, w: 52, h: 52, available: true },
          { id: "H1-C4", zone: "C", x: 610, y: 60, w: 52, h: 52, available: true },
          { id: "H1-C5", zone: "C", x: 670, y: 60, w: 52, h: 52, available: false },

          { id: "H1-D1", zone: "D", x: 430, y: 130, w: 52, h: 52, available: true },
          { id: "H1-D2", zone: "D", x: 490, y: 130, w: 52, h: 52, available: true },
          { id: "H1-D3", zone: "D", x: 550, y: 130, w: 52, h: 52, available: false },
          { id: "H1-D4", zone: "D", x: 610, y: 130, w: 52, h: 52, available: true },
          { id: "H1-D5", zone: "D", x: 670, y: 130, w: 52, h: 52, available: true }
        ]
      }
    ]
  }
];

const indonesiaCommercialPlaces = [
  { id: "gbk-senayan", name: "GBK Senayan", address: "Gelora Bung Karno, Senayan, Jakarta", lat: -6.220596831651067, lng: 106.79908131521272 },
  { id: "ratu-plaza", name: "Ratu Plaza", address: "Jl. Jenderal Sudirman, Senayan, Jakarta", lat: -6.2247, lng: 106.8007 },
  { id: "fx-sudirman", name: "fX Sudirman", address: "Jl. Jenderal Sudirman, Senayan, Jakarta", lat: -6.2251, lng: 106.8023 },
  { id: "plaza-senayan", name: "Plaza Senayan", address: "Jl. Asia Afrika, Senayan, Jakarta", lat: -6.2263, lng: 106.7994 },
  { id: "senayan-city", name: "Senayan City", address: "Jl. Asia Afrika, Senayan, Jakarta", lat: -6.2273, lng: 106.7975 },
  { id: "pacific-place", name: "Pacific Place", address: "SCBD, South Jakarta", lat: -6.2248, lng: 106.8096 },
  { id: "scbd-park", name: "SCBD Park", address: "SCBD, South Jakarta", lat: -6.2240, lng: 106.8107 },
  { id: "m-bloc-space", name: "M Bloc Space", address: "Jl. Panglima Polim, South Jakarta", lat: -6.2384, lng: 106.7995 },
  { id: "gandaria-city", name: "Gandaria City", address: "Jl. Sultan Iskandar Muda, South Jakarta", lat: -6.2445, lng: 106.7831 },
  { id: "kota-kasablanka", name: "Kota Kasablanka", address: "Jl. Casablanca Raya, South Jakarta", lat: -6.2239, lng: 106.8434 },
  { id: "grand-indonesia", name: "Grand Indonesia", address: "Jl. MH Thamrin, Central Jakarta", lat: -6.1957, lng: 106.8226 },
  { id: "plaza-indonesia", name: "Plaza Indonesia", address: "Jl. MH Thamrin, Central Jakarta", lat: -6.1938, lng: 106.8222 },
  { id: "sarinah", name: "Sarinah", address: "Jl. MH Thamrin, Central Jakarta", lat: -6.1867, lng: 106.8230 },
  { id: "thamrin-city", name: "Thamrin City", address: "Jl. Thamrin Boulevard, Central Jakarta", lat: -6.1947, lng: 106.8185 },
  { id: "central-park", name: "Central Park", address: "Jl. S. Parman, West Jakarta", lat: -6.1778, lng: 106.7890 },
  { id: "mall-taman-anggrek", name: "Mall Taman Anggrek", address: "Jl. Letjen S. Parman, West Jakarta", lat: -6.1786, lng: 106.7898 },
  { id: "neo-soho", name: "Neo Soho", address: "Jl. Letjen S. Parman, West Jakarta", lat: -6.1752, lng: 106.7908 },
  { id: "citraland-mall", name: "Citraland Mall", address: "Jl. Letjen S. Parman, West Jakarta", lat: -6.1677, lng: 106.7877 },
  { id: "emporium-pluit", name: "Emporium Pluit Mall", address: "Jl. Pluit Selatan Raya, North Jakarta", lat: -6.1275, lng: 106.7918 },
  { id: "pik-avenue", name: "PIK Avenue", address: "Jl. Pantai Indah Kapuk, North Jakarta", lat: -6.1085, lng: 106.7401 },
  { id: "mall-of-indonesia", name: "Mall of Indonesia", address: "Kelapa Gading, North Jakarta", lat: -6.1509, lng: 106.8922 },
  { id: "mall-kelapa-gading", name: "Mall Kelapa Gading", address: "Kelapa Gading, North Jakarta", lat: -6.1588, lng: 106.9082 },
  { id: "artha-gading", name: "Mall Artha Gading", address: "Kelapa Gading, North Jakarta", lat: -6.1387, lng: 106.8890 },
  { id: "green-pramuka-square", name: "Green Pramuka Square", address: "Jl. Ahmad Yani, Central Jakarta", lat: -6.1854, lng: 106.8720 },
  { id: "transmart-cempaka-putih", name: "Transmart Cempaka Putih", address: "Jl. Jenderal Ahmad Yani, Central Jakarta", lat: -6.1715, lng: 106.8713 },
  { id: "cipinang-indah-mall", name: "Cipinang Indah Mall", address: "Jl. Raya Kalimalang, East Jakarta", lat: -6.2399, lng: 106.8943 },
  { id: "tamini-square", name: "Tamini Square", address: "Jl. Taman Mini Raya, East Jakarta", lat: -6.2907, lng: 106.8807 },
  { id: "trans-studio-mall-cibubur", name: "Trans Studio Mall Cibubur", address: "Jl. Alternatif Cibubur, Depok, West Java", lat: -6.3691, lng: 106.9000 },
  { id: "pondok-indah-mall", name: "Pondok Indah Mall", address: "Jl. Metro Pondok Indah, South Jakarta", lat: -6.2669, lng: 106.7821 },
  { id: "blok-m-plaza", name: "Blok M Plaza", address: "Jl. Melawai Raya, South Jakarta", lat: -6.2448, lng: 106.7987 },
  { id: "kuningan-city", name: "Kuningan City", address: "Jl. Prof. Dr. Satrio, South Jakarta", lat: -6.2277, lng: 106.8325 },
  { id: "ciputra-world", name: "Ciputra World Jakarta", address: "Jl. Prof. Dr. Satrio, South Jakarta", lat: -6.2231, lng: 106.8366 },
  { id: "summarecon-mall-bekasi", name: "Summarecon Mall Bekasi", address: "Jl. Bulevar Ahmad Yani, Bekasi, West Java", lat: -6.2260, lng: 107.0011 },
  { id: "grand-mall-bekasi", name: "Grand Mall Bekasi", address: "Jalan Jend Sudirman, Bekasi, West Java", lat: -6.2283366, lng: 106.9834391 },
  { id: "metropolitan-mall-bekasi", name: "Metropolitan Mall Bekasi", address: "Jalan K.H. Noer Ali, Bekasi, West Java", lat: -6.2485213, lng: 106.9909492 },
  { id: "bekasi-cyber-park", name: "Bekasi Cyber Park", address: "Jalan K.H. Noer Alie, Bekasi, West Java", lat: -6.2467047, lng: 106.9911825 },
  { id: "revo-mall-bekasi", name: "Revo Mall", address: "Jalan Ahmad Yani, Bekasi, West Java", lat: -6.2552547, lng: 106.9897842 },
  { id: "mall-naga-pekayon", name: "Mall Naga Pekayon", address: "Jalan Pekayon Raya, Bekasi, West Java", lat: -6.2645396, lng: 106.9870787 },
  { id: "living-world-kota-wisata", name: "Living World Kota Wisata", address: "Kota Wisata, Bogor, West Java", lat: -6.3700, lng: 106.9600 },
  { id: "margo-city", name: "Margo City", address: "Jl. Margonda Raya, Depok, West Java", lat: -6.3728, lng: 106.8330 },
  { id: "pesona-square", name: "Pesona Square", address: "Jl. Ir. H. Juanda, Depok, West Java", lat: -6.3890, lng: 106.8395 },
  { id: "summarecon-mall-serpong", name: "Summarecon Mall Serpong", address: "Gading Serpong, Tangerang, Banten", lat: -6.2416, lng: 106.6270 },
  { id: "aeon-mall-bsd", name: "AEON Mall BSD City", address: "BSD City, Tangerang, Banten", lat: -6.3030, lng: 106.6410 },
  { id: "living-world-alam-sutera", name: "Living World Alam Sutera", address: "Alam Sutera, Tangerang, Banten", lat: -6.2410, lng: 106.6525 },
  { id: "supermal-karawaci", name: "Supermal Karawaci", address: "Jl. Boulevard Diponegoro, Tangerang, Banten", lat: -6.2255, lng: 106.6028 },
  { id: "tangcity-mall", name: "TangCity Mall", address: "Jl. Jenderal Sudirman, Tangerang, Banten", lat: -6.1960, lng: 106.6270 },
  { id: "grand-pakuwon", name: "Grand Pakuwon", address: "Jl. Mayjend Sungkono, Surabaya, East Java", lat: -7.280182, lng: 112.732785 },
  { id: "tunjungan-plaza", name: "Tunjungan Plaza", address: "Jl. Basuki Rahmat, Surabaya, East Java", lat: -7.2658, lng: 112.7422 },
  { id: "pakuwon-trade-center", name: "Pakuwon Trade Center", address: "Jl. Puncak Indah Lontar, Surabaya, East Java", lat: -7.2907, lng: 112.6750 },
  { id: "galaxy-mall", name: "Galaxy Mall Surabaya", address: "Jl. Dharmahusada Indah Timur, Surabaya, East Java", lat: -7.2866, lng: 112.7800 },
  { id: "ciputra-world-surabaya", name: "Ciputra World Surabaya", address: "Jl. Mayjen Sungkono, Surabaya, East Java", lat: -7.2899, lng: 112.7120 },
  { id: "city-of-tomorrow", name: "City of Tomorrow", address: "Jl. Ahmad Yani, Surabaya, East Java", lat: -7.3390, lng: 112.7310 },
  { id: "transmart-surabaya", name: "Transmart Surabaya", address: "Jl. Basuki Rahmat, Surabaya, East Java", lat: -7.2693, lng: 112.7371 },
  { id: "bogor-raya", name: "Bogor Raya Mall", address: "Jl. Pajajaran, Bogor, West Java", lat: -6.5937, lng: 106.7996 },
  { id: "paris-van-java", name: "Paris Van Java", address: "Jl. Sukajadi, Bandung, West Java", lat: -6.8898, lng: 107.5950 },
  { id: "cihampelas-walk", name: "Cihampelas Walk", address: "Jl. Cihampelas, Bandung, West Java", lat: -6.8935, lng: 107.6047 },
  { id: "btc-fashion-mall", name: "Bandung Trade Center Fashion Mall", address: "Jl. Dr. Djunjunan, Bandung, West Java", lat: -6.8896, lng: 107.5793 },
  { id: "istana-plaza", name: "Istana Plaza", address: "Jl. Pasirkaliki, Bandung, West Java", lat: -6.9063, lng: 107.5967 },
  { id: "23-paskal", name: "23 Paskal Shopping Center", address: "Jl. Pasirkaliki, Bandung, West Java", lat: -6.9149, lng: 107.5977 },
  { id: "bandung-digilib", name: "Bandung Indah Plaza", address: "Jl. Merdeka, Bandung, West Java", lat: -6.9155, lng: 107.6099 },
  { id: "trans-studio-mall-bandung", name: "Trans Studio Mall Bandung", address: "Jl. Gatot Subroto, Bandung, West Java", lat: -6.9507, lng: 107.6467 },
  { id: "cimahi-mall", name: "Cimahi Mall", address: "Jl. Gandawijaya, Cimahi, West Java", lat: -6.8720, lng: 107.5410 },
  { id: "grand-city-surabaya", name: "Grand City Mall Surabaya", address: "Jl. Walikota Mustajab, Surabaya, East Java", lat: -7.2655, lng: 112.7500 },
  { id: "delta-plaza-surabaya", name: "Plaza Surabaya", address: "Jl. Pemuda, Surabaya, East Java", lat: -7.2650, lng: 112.7500 },
  { id: "royal-plaza-surabaya", name: "Royal Plaza Surabaya", address: "Jl. Ahmad Yani, Surabaya, East Java", lat: -7.3098, lng: 112.7370 },
  { id: "malang-town-square", name: "Malang Town Square", address: "Jl. Veteran, Malang, East Java", lat: -7.9565, lng: 112.6140 },
  { id: "malang-city-point", name: "Malang City Point", address: "Jl. Terusan Dieng, Malang, East Java", lat: -7.9700, lng: 112.6130 },
  { id: "mall-olympic-garden", name: "Mall Olympic Garden", address: "Jl. Kawi, Malang, East Java", lat: -7.9780, lng: 112.6240 },
  { id: "pakuwon-mall-jogja", name: "Pakuwon Mall Jogja", address: "Jl. Ring Road Utara, Sleman, Yogyakarta", lat: -7.7580, lng: 110.3970 },
  { id: "plaza-ambarukmo", name: "Plaza Ambarrukmo", address: "Jl. Laksda Adisucipto, Sleman, Yogyakarta", lat: -7.7830, lng: 110.4010 },
  { id: "malioboro-mall", name: "Malioboro Mall", address: "Jl. Malioboro, Yogyakarta", lat: -7.7928, lng: 110.3660 },
  { id: "solo-paragon", name: "Solo Paragon Mall", address: "Jl. Yosodipuro, Surakarta, Central Java", lat: -7.5620, lng: 110.8130 },
  { id: "the-park-solo", name: "The Park Mall Solo", address: "Jl. Ir. Soekarno, Sukoharjo, Central Java", lat: -7.5950, lng: 110.8160 },
  { id: "dp-mall-semarang", name: "DP Mall Semarang", address: "Jl. Pemuda, Semarang, Central Java", lat: -6.9840, lng: 110.4100 },
  { id: "paragon-city-mall", name: "Paragon City Mall", address: "Jl. Pemuda, Semarang, Central Java", lat: -6.9830, lng: 110.4120 },
  { id: "ciputra-mall-semarang", name: "Ciputra Mall Semarang", address: "Simpang Lima, Semarang, Central Java", lat: -6.9900, lng: 110.4230 },
  { id: "pekalongan-plaza", name: "Pekalongan Plaza", address: "Jl. Nusantara, Pekalongan, Central Java", lat: -6.8890, lng: 109.6750 },
  { id: "jogja-city-mall", name: "Jogja City Mall", address: "Jl. Magelang, Sleman, Yogyakarta", lat: -7.7470, lng: 110.3600 },
  { id: "sun-plaza-medan", name: "Sun Plaza", address: "Jl. KH Zainul Arifin, Medan, North Sumatra", lat: 3.5830, lng: 98.6690 },
  { id: "centre-point-medan", name: "Centre Point Medan", address: "Jl. Jawa, Medan, North Sumatra", lat: 3.5910, lng: 98.6790 },
  { id: "delipark-medan", name: "DeliPark Mall", address: "Jl. Putri Hijau, Medan, North Sumatra", lat: 3.5895, lng: 98.6680 },
  { id: "cambridge-city-square", name: "Cambridge City Square", address: "Jl. S. Parman, Medan, North Sumatra", lat: 3.5770, lng: 98.6630 },
  { id: "palembang-icon", name: "Palembang Icon", address: "Jl. Angkatan 45, Palembang, South Sumatra", lat: -2.9760, lng: 104.7420 },
  { id: "palembang-square", name: "Palembang Square", address: "Jl. Angkatan 45, Palembang, South Sumatra", lat: -2.9770, lng: 104.7440 },
  { id: "opal-mall", name: "OPI Mall", address: "Jakabaring, Palembang, South Sumatra", lat: -3.0230, lng: 104.7900 },
  { id: "pim-mall-palembang", name: "Palembang Indah Mall", address: "Jl. Letkol Iskandar, Palembang, South Sumatra", lat: -2.9870, lng: 104.7570 },
  { id: "transmart-pekanbaru", name: "Transmart Pekanbaru", address: "Jl. Soekarno-Hatta, Pekanbaru, Riau", lat: 0.4840, lng: 101.4210 },
  { id: "living-world-pekanbaru", name: "Living World Pekanbaru", address: "Jl. Soekarno-Hatta, Pekanbaru, Riau", lat: 0.4810, lng: 101.4240 },
  { id: "ska-mall", name: "Mal SKA", address: "Jl. Soekarno-Hatta, Pekanbaru, Riau", lat: 0.4780, lng: 101.4160 },
  { id: "ciputra-seraya", name: "Ciputra Seraya Mall", address: "Jl. Riau, Pekanbaru, Riau", lat: 0.5390, lng: 101.4380 },
  { id: "basko-grand-mall", name: "Basko Grand Mall", address: "Jl. Prof. Dr. Hamka, Padang, West Sumatra", lat: -0.8970, lng: 100.3510 },
  { id: "transmart-padang", name: "Transmart Padang", address: "Jl. Khatib Sulaiman, Padang, West Sumatra", lat: -0.9230, lng: 100.3540 },
  { id: "ip-mall", name: "IP Mall", address: "Jl. Khatib Sulaiman, Padang, West Sumatra", lat: -0.9200, lng: 100.3570 },
  { id: "batam-city-square", name: "Batam City Square", address: "Jl. Bunga Raya, Batam, Riau Islands", lat: 1.1300, lng: 104.0080 },
  { id: "nagoya-hill", name: "Nagoya Hill Shopping Mall", address: "Jl. Teuku Umar, Batam, Riau Islands", lat: 1.1460, lng: 103.9930 },
  { id: "one-batam-mall", name: "One Batam Mall", address: "Jl. Ahmad Yani, Batam, Riau Islands", lat: 1.0450, lng: 104.0300 },
  { id: "grand-batam-mall", name: "Grand Batam Mall", address: "Jl. Pembangunan, Batam, Riau Islands", lat: 1.1330, lng: 104.0140 },
  { id: "mall-boemi-kedaton", name: "Mall Boemi Kedaton", address: "Jl. Teuku Umar, Bandar Lampung", lat: -5.3830, lng: 105.2560 },
  { id: "central-plaza-lampung", name: "Central Plaza Lampung", address: "Jl. Raden Intan, Bandar Lampung", lat: -5.4235, lng: 105.2620 },
  { id: "transmart-lampung", name: "Transmart Lampung", address: "Jl. Sultan Agung, Bandar Lampung", lat: -5.3760, lng: 105.2670 },
  { id: "mall-jambi-town-square", name: "Jambi Town Square", address: "Jl. Pattimura, Jambi", lat: -1.6100, lng: 103.6000 },
  { id: "wtc-batanghari", name: "WTC Batanghari", address: "Jl. Sultan Thaha, Jambi", lat: -1.5920, lng: 103.6150 },
  { id: "bengkulu-indah-mall", name: "Bengkulu Indah Mall", address: "Jl. KZ Abidin, Bengkulu", lat: -3.7950, lng: 102.2650 },
  { id: "transmart-bengkulu", name: "Transmart Bengkulu", address: "Jl. Jati, Bengkulu", lat: -3.8110, lng: 102.2820 },
  { id: "mall-bali-galleria", name: "Bali Galleria", address: "Jl. By Pass Ngurah Rai, Badung, Bali", lat: -8.7331, lng: 115.1722 },
  { id: "living-world-denpasar", name: "Living World Denpasar", address: "Jl. Gatot Subroto Timur, Denpasar, Bali", lat: -8.6340, lng: 115.2300 },
  { id: "level-21-mall", name: "Level 21 Mall", address: "Jl. Teuku Umar, Denpasar, Bali", lat: -8.6640, lng: 115.2100 },
  { id: "discovery-shopping-mall", name: "Discovery Shopping Mall", address: "Jl. Kartika Plaza, Kuta, Bali", lat: -8.7290, lng: 115.1680 },
  { id: "mataram-mall", name: "Mataram Mall", address: "Jl. Pejanggik, Mataram, West Nusa Tenggara", lat: -8.5840, lng: 116.1160 },
  { id: "epicentrum-mall-mataram", name: "Lombok Epicentrum Mall", address: "Jl. Sriwijaya, Mataram, West Nusa Tenggara", lat: -8.5920, lng: 116.1190 },
  { id: "transmart-makassar", name: "Trans Studio Mall Makassar", address: "Jl. Metro Tanjung Bunga, Makassar, South Sulawesi", lat: -5.1760, lng: 119.3970 },
  { id: "mall-ratu-indah", name: "Mall Ratu Indah", address: "Jl. Dr. Ratulangi, Makassar, South Sulawesi", lat: -5.1500, lng: 119.4170 },
  { id: "panakkukang-mall", name: "Panakkukang Mall", address: "Jl. Boulevard, Makassar, South Sulawesi", lat: -5.1600, lng: 119.4450 },
  { id: "nipah-mall", name: "Nipah Mall", address: "Jl. Urip Sumoharjo, Makassar, South Sulawesi", lat: -5.1320, lng: 119.4390 },
  { id: "pentacity-mall", name: "Pentacity Shopping Venue", address: "Balikpapan Superblock, Balikpapan, East Kalimantan", lat: -1.2650, lng: 116.8280 },
  { id: "e-walk-balikpapan", name: "E-Walk Balikpapan", address: "Balikpapan Superblock, Balikpapan, East Kalimantan", lat: -1.2655, lng: 116.8270 },
  { id: "balikpapan-plaza", name: "Plaza Balikpapan", address: "Jl. Jenderal Sudirman, Balikpapan, East Kalimantan", lat: -1.2780, lng: 116.8390 },
  { id: "big-mall-samarinda", name: "Big Mall Samarinda", address: "Jl. Untung Suropati, Samarinda, East Kalimantan", lat: -0.5000, lng: 117.1270 },
  { id: "samarinda-central-plaza", name: "Samarinda Central Plaza", address: "Jl. Pulau Irian, Samarinda, East Kalimantan", lat: -0.5020, lng: 117.1540 },
  { id: "mall-lembuswana", name: "Lembuswana Mall", address: "Jl. S. Parman, Samarinda, East Kalimantan", lat: -0.4760, lng: 117.1500 },
  { id: "samarinda-square", name: "Samarinda Square", address: "Jl. M. Yamin, Samarinda, East Kalimantan", lat: -0.4650, lng: 117.1510 },
  { id: "duta-mall-banjarmasin", name: "Duta Mall Banjarmasin", address: "Jl. A. Yani, Banjarmasin, South Kalimantan", lat: -3.3290, lng: 114.6000 },
  { id: "q-mall-banjarbaru", name: "Q Mall Banjarbaru", address: "Jl. A. Yani, Banjarbaru, South Kalimantan", lat: -3.4410, lng: 114.8310 },
  { id: "mall-pontianak", name: "Ayani Mega Mall", address: "Jl. Ahmad Yani, Pontianak, West Kalimantan", lat: -0.0550, lng: 109.3450 },
  { id: "gaia-bumi-raya-city", name: "Gaia Bumi Raya City", address: "Jl. Arteri Supadio, Kubu Raya, West Kalimantan", lat: -0.1040, lng: 109.4100 },
  { id: "manado-town-square", name: "Manado Town Square", address: "Jl. Pierre Tendean, Manado, North Sulawesi", lat: 1.4750, lng: 124.8420 },
  { id: "mega-mall-manado", name: "Mega Mall Manado", address: "Jl. Piere Tendean, Manado, North Sulawesi", lat: 1.4900, lng: 124.8430 },
  { id: "transmart-manado", name: "Transmart Carrefour Manado", address: "Jl. A. A. Maramis, Manado, North Sulawesi", lat: 1.5300, lng: 124.9130 },
  { id: "mall-tatura", name: "Palu Grand Mall", address: "Jl. Diponegoro, Palu, Central Sulawesi", lat: -0.8950, lng: 119.8590 },
  { id: "mall-ambon-city-center", name: "Ambon City Center", address: "Passo, Ambon, Maluku", lat: -3.6370, lng: 128.2240 },
  { id: "mall-jayapura", name: "Mall Jayapura", address: "Jl. Sam Ratulangi, Jayapura, Papua", lat: -2.5360, lng: 140.7030 },
  { id: "mall-sorong", name: "Harpan Indah Mall", address: "Jl. Basuki Rahmat, Sorong, Southwest Papua", lat: -0.8950, lng: 131.2860 },
  { id: "mall-kupang", name: "Lippo Plaza Kupang", address: "Jl. Veteran, Kupang, East Nusa Tenggara", lat: -10.1690, lng: 123.6070 },
  { id: "mall-kendari", name: "The Park Kendari", address: "Jl. Brigjen M. Yoenoes, Kendari, Southeast Sulawesi", lat: -3.9840, lng: 122.5160 },
  { id: "mall-gorontalo", name: "Gorontalo Mall", address: "Jl. Sultan Botutihe, Gorontalo", lat: 0.5430, lng: 123.0610 },
  { id: "plaza-bali", name: "Plaza Bali", address: "Jl. By Pass Ngurah Rai, Badung, Bali", lat: -8.7162, lng: 115.1673 },
  { id: "mal-bali-galleria", name: "Bali Galleria", address: "Jl. By Pass Ngurah Rai, Badung, Bali", lat: -8.7331, lng: 115.1722 },
  { id: "pasar-tanah-abang", name: "Pasar Tanah Abang", address: "Tanah Abang, Central Jakarta", lat: -6.1851, lng: 106.8128 },
  { id: "pasar-baru-jakarta", name: "Pasar Baru", address: "Pasar Baru, Central Jakarta", lat: -6.1622, lng: 106.8345 },
  { id: "pasar-senen", name: "Pasar Senen", address: "Senen, Central Jakarta", lat: -6.1750, lng: 106.8420 },
  { id: "itc-mangga-dua", name: "ITC Mangga Dua", address: "Mangga Dua, North Jakarta", lat: -6.1380, lng: 106.8320 },
  { id: "scbd-jakarta", name: "Sudirman Central Business District", address: "SCBD, South Jakarta", lat: -6.2250, lng: 106.8100 },
  { id: "kuningan-business-district", name: "Kuningan Business District", address: "Jl. Prof. Dr. Satrio, South Jakarta", lat: -6.2270, lng: 106.8320 },
  { id: "pasar-baru-bandung", name: "Pasar Baru Trade Center", address: "Jl. Otto Iskandardinata, Bandung, West Java", lat: -6.9178, lng: 107.6042 },
  { id: "braga-business-area", name: "Braga Commercial Area", address: "Jl. Braga, Bandung, West Java", lat: -6.9170, lng: 107.6090 },
  { id: "pasar-atom", name: "Pasar Atom", address: "Jl. Bunguran, Surabaya, East Java", lat: -7.2420, lng: 112.7410 },
  { id: "pasar-turi", name: "Pasar Turi", address: "Jl. Pasar Turi, Surabaya, East Java", lat: -7.2470, lng: 112.7330 },
  { id: "pasar-johar", name: "Pasar Johar", address: "Jl. K.H. Agus Salim, Semarang, Central Java", lat: -6.9690, lng: 110.4250 },
  { id: "simpang-lima-commercial", name: "Simpang Lima Commercial Area", address: "Simpang Lima, Semarang, Central Java", lat: -6.9900, lng: 110.4220 },
  { id: "pasar-beringharjo", name: "Pasar Beringharjo", address: "Jl. Margo Mulyo, Yogyakarta", lat: -7.8000, lng: 110.3660 },
  { id: "pasar-klewer", name: "Pasar Klewer", address: "Jl. Dr. Radjiman, Surakarta, Central Java", lat: -7.5750, lng: 110.8280 },
  { id: "pasar-besar-malang", name: "Pasar Besar Malang", address: "Jl. Pasar Besar, Malang, East Java", lat: -7.9830, lng: 112.6300 },
  { id: "pasar-petisah", name: "Pasar Petisah", address: "Jl. Kota Baru 3, Medan, North Sumatra", lat: 3.5840, lng: 98.6650 },
  { id: "pasar-16-ilir", name: "Pasar 16 Ilir", address: "Jl. 16 Ilir, Palembang, South Sumatra", lat: -2.9910, lng: 104.7620 },
  { id: "pasar-bawah-pekanbaru", name: "Pasar Bawah", address: "Jl. Saleh Abbas, Pekanbaru, Riau", lat: 0.5350, lng: 101.4430 },
  { id: "pasar-raya-padang", name: "Pasar Raya Padang", address: "Jl. Pasar Raya, Padang, West Sumatra", lat: -0.9490, lng: 100.3570 },
  { id: "nagoya-commercial-district", name: "Nagoya Commercial District", address: "Nagoya, Batam, Riau Islands", lat: 1.1460, lng: 103.9930 },
  { id: "pasar-bambu-kuning", name: "Pasar Bambu Kuning", address: "Jl. Imam Bonjol, Bandar Lampung", lat: -5.4230, lng: 105.2600 },
  { id: "cakranegara-market", name: "Cakranegara Market", address: "Cakranegara, Mataram, West Nusa Tenggara", lat: -8.5830, lng: 116.1200 },
  { id: "pasar-butung", name: "Pasar Butung", address: "Jl. Butung, Makassar, South Sulawesi", lat: -5.1310, lng: 119.4070 },
  { id: "pasar-pagi-samarinda", name: "Pasar Pagi Samarinda", address: "Jl. Gajah Mada, Samarinda, East Kalimantan", lat: -0.5010, lng: 117.1490 },
  { id: "pasar-sudimampir", name: "Pasar Sudimampir", address: "Jl. Ujung Murung, Banjarmasin, South Kalimantan", lat: -3.3190, lng: 114.5910 },
  { id: "pasar-tengah-pontianak", name: "Pasar Tengah", address: "Jl. Tanjungpura, Pontianak, West Kalimantan", lat: -0.0260, lng: 109.3410 },
  { id: "manado-trade-center", name: "Manado Trade Center", address: "Jl. Piere Tendean, Manado, North Sulawesi", lat: 1.4900, lng: 124.8430 },
  { id: "pasar-kota-jayapura", name: "Pasar Hamadi", address: "Hamadi, Jayapura, Papua", lat: -2.5630, lng: 140.7130 }
];

const state = {
  selectedBuildingIndex: 0,
  selectedLocation: indonesiaCommercialPlaces[0],
  selectedFloorIndex: 0,
  selectedScenario: "nearest",
  selectedLotId: null,
  selectedSearchResultId: "exact",
  highlightedSuggestionIndex: 0,
  onlineSearchLocations: [],
  nearbyPlaces: [],
  nearbyPlacesLoading: false,
  nearbyPlacesError: "",
  nearbyPlacesController: null,
  nearbyPlacesRequestId: 0,
  nearbyPlacesCache: new Map(),
  searchMessage: "",
  searchRequestController: null,
  searchDebounceTimer: null,
  searchRequestId: 0,
  submitWhenResultsArrive: false,
  selectedVehicle: "car",
  selectedCustomization: "all",
  selectedFilters: new Set(),
  map: null,
  routeLayer: null,
  currentScale: 1,
  driverPosition: { x: 180, y: 260 } // pseudo driver position on the floor
};

const mapContainer = document.getElementById("map");
const buildingListEl = document.getElementById("buildingList");
const floorTabsEl = document.getElementById("floorTabs");
const parkingFloorMapEl = document.getElementById("parkingFloorMap");
const turnListEl = document.getElementById("turnList");
const resultsStatusEl = document.getElementById("resultsStatus");
const resultCountEl = document.getElementById("resultCount");
const availableCountEl = document.getElementById("availableCount");
const occupiedCountEl = document.getElementById("occupiedCount");
const targetLotEl = document.getElementById("targetLot");
const distanceValueEl = document.getElementById("distanceValue");
const etaValueEl = document.getElementById("etaValue");
const floorValueEl = document.getElementById("floorValue");
const exitValueEl = document.getElementById("exitValue");
const buildingSearchEl = document.getElementById("buildingSearch");
const searchSuggestionsEl = document.getElementById("searchSuggestions");
const selectedBuildingEl = document.getElementById("selectedBuilding");
const selectedResultEl = document.getElementById("selectedResult");
const appShellEl = document.getElementById("appShell");
const panelToggleEl = document.getElementById("panelToggle");
const drawerBackdropEl = document.getElementById("drawerBackdrop");

const map = L.map("map", {
  zoomControl: true,
  attributionControl: true
}).setView([-6.220596831651067, 106.79908131521272], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const routeLineLayer = L.layerGroup().addTo(map);
const mapResizeObserver = new ResizeObserver(() => map.invalidateSize({ pan: false }));
mapResizeObserver.observe(mapContainer);

function getCurrentBuilding() {
  const building = buildings[state.selectedBuildingIndex];
  const location = state.selectedLocation;
  return { ...building, ...location, floors: building.floors };
}

function getCurrentFloor() {
  const building = getCurrentBuilding();
  return building.floors[state.selectedFloorIndex];
}

function isIndonesiaLocation(lat, lng) {
  return lat >= -11 && lat <= 7 && lng >= 95 && lng <= 141;
}

function getNearbyParkingResults() {
  return state.nearbyPlaces.map((location) => ({
    ...location,
    exact: false,
    demo: false
  }));
}

function getOsmCommercialPlace(element) {
  const tags = element.tags || {};
  const lat = element.type === "node" ? element.lat : element.center?.lat;
  const lng = element.type === "node" ? element.lon : element.center?.lon;
  if (!tags.name || !Number.isFinite(lat) || !Number.isFinite(lng) || !isIndonesiaLocation(lat, lng)) {
    return null;
  }

  const address = [
    tags["addr:street"],
    tags["addr:city"] || tags["addr:town"] || tags["addr:suburb"],
    tags["addr:state"] || tags["addr:province"],
    tags["addr:country"] || "Indonesia"
  ].filter(Boolean).join(", ");

  return {
    id: `osm-${element.type}-${element.id}`,
    locationId: `osm-${element.type}-${element.id}`,
    name: tags.name,
    address: address || "Indonesia",
    lat,
    lng,
    osmTags: tags,
    dataSource: "openstreetmap",
    parkingFeaturesAvailable: false
  };
}

function getNearbyCommercialPlaces(location, candidates, radiusMeters) {
  const nearby = candidates
    .filter((place) =>
      isIndonesiaLocation(place.lat, place.lng)
      && getDistanceInMeters(location.lat, location.lng, place.lat, place.lng) > 100
      && getDistanceInMeters(location.lat, location.lng, place.lat, place.lng) <= radiusMeters
    )
    .map((place) => ({
      ...place,
      distance: getDistanceInMeters(location.lat, location.lng, place.lat, place.lng)
    }))
    .sort((first, second) => first.distance - second.distance);

  const uniquePlaces = [];
  nearby.forEach((place) => {
    const isDuplicate = uniquePlaces.some((candidate) =>
      candidate.name.toLocaleLowerCase() === place.name.toLocaleLowerCase()
      && getDistanceInMeters(candidate.lat, candidate.lng, place.lat, place.lng) < 250
    );
    if (!isDuplicate && uniquePlaces.length < 5) uniquePlaces.push(place);
  });
  return uniquePlaces;
}

async function loadNearbyCommercialPlaces(location) {
  state.nearbyPlacesController?.abort();
  state.nearbyPlacesController = null;
  const requestId = ++state.nearbyPlacesRequestId;
  state.nearbyPlaces = [];
  state.nearbyPlacesError = "";

  if (!isIndonesiaLocation(location.lat, location.lng)) {
    state.nearbyPlacesLoading = false;
    renderAll();
    return;
  }

  const radiusMeters = 12000;
  const localCandidates = indonesiaCommercialPlaces
    .filter((place) => place.id !== location.id)
    .map((place) => ({
      ...place,
      id: `local-${place.id}`,
      locationId: place.id,
      dataSource: "local",
      parkingFeaturesAvailable: false
    }));
  const cacheKey = `${location.lat.toFixed(4)},${location.lng.toFixed(4)}`;
  const cachedPlaces = state.nearbyPlacesCache.get(cacheKey);
  if (cachedPlaces) {
    state.nearbyPlaces = cachedPlaces;
    state.nearbyPlacesLoading = false;
    renderAll();
    return;
  }

  const query = `[out:json][timeout:25];(
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["shop"];
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["office"];
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["amenity"~"marketplace|cinema|theatre"];
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["building"~"commercial|retail"];
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["landuse"~"commercial|retail"];
    nwr(around:${radiusMeters},${location.lat},${location.lng})["name"]["leisure"="shopping_mall"];
  );out center tags;`;
  const controller = new AbortController();
  state.nearbyPlacesController = controller;
  state.nearbyPlacesLoading = true;
  renderAll();

  try {
    const url = new URL("https://overpass-api.de/api/interpreter");
    url.searchParams.set("data", query);
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`Nearby commercial place lookup failed (HTTP ${response.status}).`);
    }

    const data = await response.json();
    if (requestId !== state.nearbyPlacesRequestId) return;

    const osmPlaces = getNearbyCommercialPlaces(
      location,
      (data.elements || []).map(getOsmCommercialPlace).filter(Boolean),
      radiusMeters
    );
    const nearbyPlaces = [...osmPlaces];
    const catalogPlaces = getNearbyCommercialPlaces(location, localCandidates, radiusMeters);
    catalogPlaces.forEach((place) => {
      const duplicatesOsmPlace = nearbyPlaces.some((candidate) =>
        candidate.name.toLocaleLowerCase() === place.name.toLocaleLowerCase()
        && getDistanceInMeters(candidate.lat, candidate.lng, place.lat, place.lng) < 250
      );
      if (!duplicatesOsmPlace && nearbyPlaces.length < 5) nearbyPlaces.push(place);
    });
    state.nearbyPlaces = nearbyPlaces.sort((first, second) => first.distance - second.distance);
    state.nearbyPlacesCache.set(cacheKey, state.nearbyPlaces);
    if (state.nearbyPlacesCache.size > 50) {
      state.nearbyPlacesCache.delete(state.nearbyPlacesCache.keys().next().value);
    }
    state.nearbyPlacesController = null;
    state.nearbyPlacesLoading = false;
    renderAll();
  } catch (error) {
    if (error.name === "AbortError" || requestId !== state.nearbyPlacesRequestId) return;
    state.nearbyPlacesController = null;
    state.nearbyPlacesLoading = false;
    state.nearbyPlaces = getNearbyCommercialPlaces(location, localCandidates, radiusMeters);
    state.nearbyPlacesError = "Live OpenStreetMap lookup is unavailable. Showing the nearest catalog places.";
    renderAll();
  }
}

function getDistanceInMeters(startLat, startLng, endLat, endLng) {
  const earthRadius = 6371000;
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = toRadians(endLat - startLat);
  const longitudeDelta = toRadians(endLng - startLng);
  const startLatitude = toRadians(startLat);
  const endLatitude = toRadians(endLat);
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;

  return earthRadius * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function getParkingResults() {
  const building = getCurrentBuilding();
  const nearbyResults = getNearbyParkingResults();

  return [
    {
      id: "exact",
      name: building.name,
      address: building.address,
      lat: building.lat,
      lng: building.lng,
      locationId: building.id,
      buildingIndex: state.selectedBuildingIndex,
      exact: true
    },
    ...nearbyResults
  ];
}

function matchesParkingChoices(result) {
  if (result.exact) return true;
  if (!result.parkingFeaturesAvailable) return false;

  const matchesVehicle = result.vehicles.includes(state.selectedVehicle);
  const matchesCustomization = state.selectedCustomization === "all"
    || (state.selectedCustomization === "rate" && result.rate < 5000)
    || (state.selectedCustomization === "valet" && result.valet)
    || (state.selectedCustomization === "reservation" && result.reservation)
    || (state.selectedCustomization === "on-street" && result.onStreet);
  const matchesFilters = [...state.selectedFilters].every((filter) => result[filter]);

  return matchesVehicle && matchesCustomization && matchesFilters;
}

function getSelectedParkingResult() {
  const building = getCurrentBuilding();
  const exactResult = {
    id: "exact",
    name: building.name,
    address: building.address,
    lat: building.lat,
    lng: building.lng,
    locationId: building.id,
    buildingIndex: state.selectedBuildingIndex,
    exact: true
  };

  return exactResult;
}

function formatNearbyDistance(meters) {
  if (meters <= 0) return "0 m";
  if (meters < 600) {
    return `${Math.ceil(meters / 100) * 100} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
}

function renderBuildingList() {
  buildingListEl.innerHTML = "";

  const building = getCurrentBuilding();
  const results = getParkingResults();
  resultCountEl.textContent = `${results.length} places`;
  resultsStatusEl.textContent = !isIndonesiaLocation(building.lat, building.lng)
    ? "Nearby commercial places are available for Indonesia locations only."
    : state.nearbyPlacesLoading
      ? "Finding nearby commercial places in OpenStreetMap…"
      : state.nearbyPlacesError
        ? state.nearbyPlacesError
        : results.length === 1
          ? "No nearby commercial places found within 12 km."
          : `${results.length - 1} nearest commercial alternatives within 12 km.`;

  const nearbyFeatureLabels = [
    "Rate <5k per hour",
    "Rate <5k per hour",
    "Valet Parking",
    "By Reservation",
    "On-street Parking"
  ];

  results.forEach((result, resultIndex) => {
    const card = document.createElement("button");
    const distance = result.exact
      ? "Exact location"
      : formatNearbyDistance(getDistanceInMeters(building.lat, building.lng, result.lat, result.lng));
    const tags = result.exact
      ? ["Selected location"]
      : result.dataSource === "openstreetmap"
        ? ["OpenStreetMap"]
        : result.dataSource === "local"
        ? ["Alternative"]
        : [
          result.demo ? "Simulated" : null,
          result.rate < 5000 ? "Under 5k/hr" : null,
          result.valet ? "Valet" : null,
          result.reservation ? "Reservation" : null,
          result.onStreet ? "On-street" : null
        ].filter(Boolean);
    if (!result.exact) {
      tags.push(nearbyFeatureLabels[resultIndex - 1]);
    }

    card.type = "button";
    card.className = "building-card" + (result.id === state.selectedSearchResultId ? " active" : "");
    card.innerHTML = `
      <span>
        <span class="result-heading">
          <svg class="result-location-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path>
            <circle cx="12" cy="10" r="2.7"></circle>
          </svg>
          <h3></h3>
        </span>
        <p></p>
        <span class="result-tags"></span>
      </span>
      <span class="result-distance"></span>
    `;
    card.querySelector("h3").textContent = result.name;
    card.querySelector("p").textContent = result.address;
    card.querySelector(".result-distance").textContent = distance;
    const resultTagsEl = card.querySelector(".result-tags");
    tags.filter(Boolean).forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      resultTagsEl.appendChild(tagEl);
    });

    card.addEventListener("click", () => {
      selectLocation(result.locationId || result.id);
    });

    buildingListEl.appendChild(card);
  });
}

function getSearchMatches(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return [];

  const currentLocation = getCurrentBuilding();
  const localMatches = indonesiaCommercialPlaces
    .filter((location) =>
      `${location.name} ${location.address}`.toLocaleLowerCase().includes(normalizedQuery)
    );
  const matches = [...localMatches];

  state.onlineSearchLocations.forEach((location) => {
    const duplicate = matches.some((match) =>
      match.id === location.id
      || getDistanceInMeters(match.lat, match.lng, location.lat, location.lng) < 30
    );
    if (!duplicate) matches.push(location);
  });

  return matches
    .map((location) => ({
      ...location,
      distance: getDistanceInMeters(currentLocation.lat, currentLocation.lng, location.lat, location.lng)
    }))
    .sort((first, second) => first.distance - second.distance)
    .slice(0, 10);
}

function hideSearchSuggestions() {
  cancelPendingWorldwideSearch();
  searchSuggestionsEl.hidden = true;
  searchSuggestionsEl.replaceChildren();
  buildingSearchEl.setAttribute("aria-expanded", "false");
  buildingSearchEl.removeAttribute("aria-activedescendant");
}

function cancelPendingWorldwideSearch() {
  window.clearTimeout(state.searchDebounceTimer);
  state.searchRequestController?.abort();
  state.searchRequestController = null;
  state.searchRequestId += 1;
  state.submitWhenResultsArrive = false;
}

function renderSearchSuggestions() {
  const matches = getSearchMatches(buildingSearchEl.value);
  searchSuggestionsEl.replaceChildren();
  buildingSearchEl.removeAttribute("aria-activedescendant");
  state.highlightedSuggestionIndex = 0;

  if (!buildingSearchEl.value.trim()) {
    hideSearchSuggestions();
    return matches;
  }

  searchSuggestionsEl.hidden = false;
  buildingSearchEl.setAttribute("aria-expanded", "true");

  if (state.searchMessage) {
    const message = document.createElement("p");
    message.className = state.searchMessage.includes("unavailable")
      ? "search-suggestion-message search-suggestion-error"
      : "search-suggestion-message";
    message.setAttribute("role", "status");
    message.textContent = state.searchMessage;
    searchSuggestionsEl.appendChild(message);
  }

  if (matches.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "search-suggestion-empty";
    emptyMessage.textContent = state.searchMessage === "Searching worldwide…"
      ? "Searching locations worldwide…"
      : "No matching locations.";
    searchSuggestionsEl.appendChild(emptyMessage);
    return matches;
  }

  matches.forEach((location, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "search-suggestion";
    option.id = `search-suggestion-${index}`;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(index === state.highlightedSuggestionIndex));
    option.innerHTML = `<span><strong></strong><small></small></span><span class="suggestion-distance"></span>`;
    option.querySelector("strong").textContent = location.name;
    option.querySelector("small").textContent = location.address;
    option.querySelector(".suggestion-distance").textContent = formatDistance(location.distance);
    option.addEventListener("click", () => selectLocation(location));
    searchSuggestionsEl.appendChild(option);
  });

  buildingSearchEl.setAttribute("aria-activedescendant", "search-suggestion-0");
  return matches;
}

function getPhotonLocation(feature) {
  const [lng, lat] = feature.geometry?.coordinates || [];
  const properties = feature.properties || {};
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const name = properties.name
    || properties.street
    || properties.locality
    || properties.city
    || properties.county
    || properties.country;
  if (!name) return null;

  const address = [
    properties.street && properties.housenumber
      ? `${properties.street} ${properties.housenumber}`
      : properties.street,
    properties.city || properties.locality || properties.district,
    properties.state,
    properties.country
  ].filter((part, index, parts) => part && part !== name && parts.indexOf(part) === index).join(", ");
  const osmId = properties.osm_type && properties.osm_id
    ? `${properties.osm_type}-${properties.osm_id}`
    : `${lat.toFixed(6)}-${lng.toFixed(6)}`;

  return {
    id: `photon-${osmId}`,
    name,
    address: address || properties.country || "OpenStreetMap location",
    lat,
    lng,
    city: properties.city || properties.locality || properties.district,
    state: properties.state
  };
}

async function searchWorldwide(query, requestId) {
  const currentLocation = getCurrentBuilding();
  const url = new URL("https://photon.komoot.io/api/");
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "10");
  url.searchParams.set("lat", String(currentLocation.lat));
  url.searchParams.set("lon", String(currentLocation.lng));
  url.searchParams.set("lang", "en");

  const controller = new AbortController();
  state.searchRequestController = controller;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`Location search failed (HTTP ${response.status}).`);
    }

    const data = await response.json();
    if (requestId !== state.searchRequestId) return;

    state.onlineSearchLocations = (data.features || [])
      .map(getPhotonLocation)
      .filter(Boolean);
    state.searchMessage = state.onlineSearchLocations.length > 0
      ? "Worldwide results · © OpenStreetMap"
      : "No worldwide results found. Try another search.";
    state.searchRequestController = null;
    renderSearchSuggestions();

    if (state.submitWhenResultsArrive && state.onlineSearchLocations.length > 0) {
      state.submitWhenResultsArrive = false;
      const firstResult = getSearchMatches(buildingSearchEl.value)[0];
      if (firstResult) selectLocation(firstResult);
    }
  } catch (error) {
    if (error.name === "AbortError" || requestId !== state.searchRequestId) return;
    state.searchRequestController = null;
    state.searchMessage = "Worldwide search is unavailable. Check your internet connection and try again.";
    renderSearchSuggestions();
  }
}

function scheduleWorldwideSearch(query) {
  cancelPendingWorldwideSearch();
  state.onlineSearchLocations = [];
  const requestId = state.searchRequestId;

  if (query.trim().length < 2) {
    state.searchMessage = query.trim()
      ? "Type at least 2 characters to search worldwide."
      : "";
    renderSearchSuggestions();
    return;
  }

  state.searchMessage = "Searching worldwide…";
  renderSearchSuggestions();
  state.searchDebounceTimer = window.setTimeout(() => {
    searchWorldwide(query.trim(), requestId);
  }, 350);
}

function formatDistance(distance) {
  return distance >= 1000
    ? `${(distance / 1000).toFixed(1)} km`
    : `${Math.round(distance)} m`;
}

function selectLocation(location) {
  const selectedLocation = typeof location === "string"
    ? [...state.nearbyPlaces, ...indonesiaCommercialPlaces].find((place) =>
        place.id === location || place.locationId === location
      )
    : location;
  if (!selectedLocation || !Number.isFinite(selectedLocation.lat) || !Number.isFinite(selectedLocation.lng)) return;

  cancelPendingWorldwideSearch();
  state.selectedLocation = selectedLocation;
  state.selectedSearchResultId = "exact";
  state.selectedFloorIndex = 0;
  state.selectedLotId = null;
  state.onlineSearchLocations = [];
  state.searchMessage = "";
  buildingSearchEl.value = "";
  buildingSearchEl.removeAttribute("aria-activedescendant");
  hideSearchSuggestions();
  map.setView([selectedLocation.lat, selectedLocation.lng], 16);
  renderAll();
  loadNearbyCommercialPlaces(selectedLocation);
  closeSearchPanel();
}

function renderFloorTabs() {
  const building = getCurrentBuilding();
  floorTabsEl.innerHTML = "";

  building.floors.forEach((floor, index) => {
    const btn = document.createElement("button");
    btn.className = "floor-tab" + (index === state.selectedFloorIndex ? " active" : "");
    btn.textContent = floor.name;
    btn.addEventListener("click", () => {
      state.selectedFloorIndex = index;
      state.selectedLotId = null;
      renderAll();
    });
    floorTabsEl.appendChild(btn);
  });
}

function renderStreetMapPointer() {
  const building = getCurrentBuilding();
  const selectedResult = getSelectedParkingResult();
  routeLineLayer.clearLayers();

  const marker = L.marker([building.lat, building.lng])
    .addTo(routeLineLayer)
    .bindPopup(`<strong>${building.name}</strong><br>${building.address}`);

  const driverMarker = L.circleMarker([building.lat + 0.00045, building.lng - 0.00018], {
    radius: 8,
    color: "#60a5fa",
    fillColor: "#60a5fa",
    fillOpacity: 1
  }).addTo(routeLineLayer);

  driverMarker.bindPopup("Driver position");

  const parkingPoints = [
    { lat: building.lat + 0.00015, lng: building.lng + 0.0002, label: "Entrance", color: "#22c55e" },
    { lat: building.lat - 0.00022, lng: building.lng - 0.00016, label: "Exit Gate", color: "#ef4444" },
    ...getNearbyParkingResults().map((result) => ({
      lat: result.lat,
      lng: result.lng,
      label: result.name,
      color: result.id === selectedResult.id ? "#f59e0b" : "#60a5fa"
    }))
  ];

  parkingPoints.forEach(point => {
    L.circleMarker([point.lat, point.lng], {
      radius: 6,
      color: point.color,
      fillColor: point.color,
      fillOpacity: 0.9
    })
      .addTo(routeLineLayer)
      .bindPopup(point.label);
  });

  if (!selectedResult.exact) {
    L.circleMarker([selectedResult.lat, selectedResult.lng], {
      radius: 10,
      color: "#fbbf24",
      fillColor: "#f59e0b",
      fillOpacity: 0.95
    })
      .addTo(routeLineLayer)
      .bindPopup(`<strong>${selectedResult.name}</strong><br>${selectedResult.address}`)
      .openPopup();
  } else {
    marker.bindPopup(`<strong>${building.name}</strong><br>${building.address}`).openPopup();
  }
}

function getAvailableLots(floor) {
  return floor.lots.filter(lot => lot.available);
}

function computeLotDistanceToDriver(lot, floor) {
  const dx = lot.x + lot.w / 2 - state.driverPosition.x;
  const dy = lot.y + lot.h / 2 - state.driverPosition.y;
  return Math.hypot(dx, dy);
}

function computeDistanceToSpot(spotX, spotY, targetX, targetY) {
  return Math.hypot(spotX - targetX, spotY - targetY);
}

function chooseLotByScenario(floor) {
  const available = getAvailableLots(floor);

  if (!available.length) {
    return null;
  }

  if (state.selectedScenario === "nearest") {
    return available.reduce((best, lot) => {
      const current = computeLotDistanceToDriver(lot, floor);
      const bestDist = computeLotDistanceToDriver(best, floor);
      return current < bestDist ? lot : best;
    }, available[0]);
  }

  if (state.selectedScenario === "entrance") {
    return available.reduce((best, lot) => {
      const current = computeDistanceToSpot(lot.x + lot.w / 2, lot.y + lot.h / 2, floor.entrance.x, floor.entrance.y);
      const bestDist = computeDistanceToSpot(best.x + best.w / 2, best.y + best.h / 2, floor.entrance.x, floor.entrance.y);
      return current < bestDist ? lot : best;
    }, available[0]);
  }

  if (state.selectedScenario === "exit") {
    return available.reduce((best, lot) => {
      const current = computeDistanceToSpot(lot.x + lot.w / 2, lot.y + lot.h / 2, floor.exit.x, floor.exit.y);
      const bestDist = computeDistanceToSpot(best.x + best.w / 2, best.y + best.h / 2, floor.exit.x, floor.exit.y);
      return current < bestDist ? lot : best;
    }, available[0]);
  }

  return available[0];
}

function renderStats(floor) {
  const available = getAvailableLots(floor).length;
  const occupied = floor.lots.length - available;

  availableCountEl.textContent = String(available);
  occupiedCountEl.textContent = String(occupied);

  if (!state.selectedLotId) {
    const recommended = chooseLotByScenario(floor);
    state.selectedLotId = recommended ? recommended.id : null;
  }

  const selectedLot = floor.lots.find(lot => lot.id === state.selectedLotId);
  targetLotEl.textContent = selectedLot ? selectedLot.id : "-";
}

function buildTurnByTurn(floor, lot) {
  const steps = [];
  const start = { x: state.driverPosition.x, y: state.driverPosition.y };
  const target = { x: lot.x + lot.w / 2, y: lot.y + lot.h / 2 };

  if (target.x > start.x + 50) {
    steps.push("Drive straight ahead toward the highlighted zone.");
  } else if (target.x < start.x - 50) {
    steps.push("Move left and follow the lane markers.");
  } else {
    steps.push("Follow the aisle toward the selected bay.");
  }

  const diffX = target.x - start.x;
  const diffY = target.y - start.y;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    steps.push(diffX > 0 ? "Turn right toward the target bay." : "Turn left toward the target bay.");
  } else {
    steps.push(diffY > 0 ? "Move forward to the upper parking rows." : "Move backward toward the lower parking rows.");
  }

  if (state.selectedScenario === "entrance") {
    steps.push("Keep nearby to the building entrance access corridor.");
  } else if (state.selectedScenario === "exit") {
    steps.push("Follow the route toward the nearest exit gate.");
  } else {
    steps.push("Continue to the closest available parking option.");
  }

  steps.push(`Park in ${lot.id}. Arrive at destination.`);
  return steps.slice(0, 5);
}

function formatDistance(meters) {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function formatEta(seconds) {
  const minutes = Math.max(1, Math.round(seconds / 60));
  return `${minutes} min`;
}

function renderTripSummary(floor) {
  const selectedLot = floor.lots.find(lot => lot.id === state.selectedLotId);
  if (!selectedLot) {
    distanceValueEl.textContent = "0 m";
    etaValueEl.textContent = "0 min";
    floorValueEl.textContent = floor.name;
    exitValueEl.textContent = "Gate 2";
    return;
  }

  const dx = (selectedLot.x + selectedLot.w / 2) - state.driverPosition.x;
  const dy = (selectedLot.y + selectedLot.h / 2) - state.driverPosition.y;
  const distance = Math.hypot(dx, dy);
  const etaSeconds = distance * 1.8; // approximation for demo

  distanceValueEl.textContent = formatDistance(distance);
  etaValueEl.textContent = formatEta(etaSeconds);
  floorValueEl.textContent = floor.name;
  exitValueEl.textContent = "Gate 2";
}

function renderTurnList(floor) {
  const selectedLot = floor.lots.find(lot => lot.id === state.selectedLotId);
  if (!selectedLot) {
    turnListEl.innerHTML = "<li>No available lot selected.</li>";
    return;
  }

  const steps = buildTurnByTurn(floor, selectedLot);
  turnListEl.innerHTML = steps
    .map((step, index) => `<li>${index + 1}. ${step}</li>`)
    .join("");
}

function renderParkingMap(floor) {
  parkingFloorMapEl.innerHTML = "";

  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  svg.setAttribute("viewBox", "0 0 760 320");
  svg.style.transform = `scale(${state.currentScale})`;

  const selectedLot = floor.lots.find(lot => lot.id === state.selectedLotId);

  const pathCurve = (points) => {
    return points.map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      return `L ${point.x} ${point.y}`;
    }).join(" ");
  };

  if (selectedLot) {
    const routePoints = [
      { x: state.driverPosition.x, y: state.driverPosition.y },
      { x: state.driverPosition.x + 40, y: state.driverPosition.y + 10 },
      { x: selectedLot.x + selectedLot.w / 2 - 12, y: selectedLot.y + selectedLot.h / 2 }
    ];

    const line = document.createElementNS(svgNs, "path");
    line.setAttribute("d", pathCurve(routePoints));
    line.setAttribute("class", "route-line");
    svg.appendChild(line);

    const startPoint = document.createElementNS(svgNs, "circle");
    startPoint.setAttribute("cx", state.driverPosition.x);
    startPoint.setAttribute("cy", state.driverPosition.y);
    startPoint.setAttribute("r", 9);
    startPoint.setAttribute("class", "user-point");
    svg.appendChild(startPoint);

    const endPoint = document.createElementNS(svgNs, "circle");
    endPoint.setAttribute("cx", selectedLot.x + selectedLot.w / 2);
    endPoint.setAttribute("cy", selectedLot.y + selectedLot.h / 2);
    endPoint.setAttribute("r", 8);
    endPoint.setAttribute("class", "route-point");
    svg.appendChild(endPoint);
  }

  // Building outline
  const outline = document.createElementNS(svgNs, "rect");
  outline.setAttribute("x", 10);
  outline.setAttribute("y", 20);
  outline.setAttribute("width", 740);
  outline.setAttribute("height", 280);
  outline.setAttribute("rx", 16);
  outline.setAttribute("fill", "rgba(148,163,184,0.08)");
  outline.setAttribute("stroke", "rgba(148,163,184,0.35)");
  outline.setAttribute("stroke-width", "2");
  svg.appendChild(outline);

  // Entrance door
  const entry = document.createElementNS(svgNs, "rect");
  entry.setAttribute("x", floor.entrance.x - 12);
  entry.setAttribute("y", floor.entrance.y - 18);
  entry.setAttribute("width", 58);
  entry.setAttribute("height", 30);
  entry.setAttribute("rx", 8);
  entry.setAttribute("fill", "#22c55e");
  entry.setAttribute("opacity", "0.9");
  svg.appendChild(entry);

  const entryLabel = document.createElementNS(svgNs, "text");
  entryLabel.setAttribute("x", floor.entrance.x + 12);
  entryLabel.setAttribute("y", floor.entrance.y + 5);
  entryLabel.setAttribute("text-anchor", "middle");
  entryLabel.setAttribute("class", "parking-label");
  entryLabel.textContent = "Entry";
  svg.appendChild(entryLabel);

  // Exit gate
  const exit = document.createElementNS(svgNs, "rect");
  exit.setAttribute("x", floor.exit.x - 12);
  exit.setAttribute("y", floor.exit.y - 18);
  exit.setAttribute("width", 58);
  exit.setAttribute("height", 30);
  exit.setAttribute("rx", 8);
  exit.setAttribute("fill", "#ef4444");
  exit.setAttribute("opacity", "0.9");
  svg.appendChild(exit);

  const exitLabel = document.createElementNS(svgNs, "text");
  exitLabel.setAttribute("x", floor.exit.x + 12);
  exitLabel.setAttribute("y", floor.exit.y + 5);
  exitLabel.setAttribute("text-anchor", "middle");
  exitLabel.setAttribute("class", "parking-label");
  exitLabel.textContent = "Exit";
  svg.appendChild(exitLabel);

  floor.lots.forEach((lot) => {
    const rect = document.createElementNS(svgNs, "rect");
    rect.setAttribute("x", lot.x);
    rect.setAttribute("y", lot.y);
    rect.setAttribute("width", lot.w);
    rect.setAttribute("height", lot.h);
    rect.setAttribute("rx", 8);
    rect.setAttribute("class", `lot ${lot.available ? "available" : "occupied"} ${lot.id === state.selectedLotId ? "selected" : ""}`);

    rect.addEventListener("click", () => {
      state.selectedLotId = lot.id;
      renderAll();
    });

    const text = document.createElementNS(svgNs, "text");
    text.setAttribute("x", lot.x + lot.w / 2);
    text.setAttribute("y", lot.y + lot.h / 2 + 4);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("class", "parking-label");
    text.textContent = lot.zone;

    svg.appendChild(rect);
    svg.appendChild(text);
  });

  parkingFloorMapEl.appendChild(svg);
}

function renderAll() {
  const building = getCurrentBuilding();
  const floor = getCurrentFloor();
  const selectedResult = getSelectedParkingResult();

  selectedBuildingEl.textContent = building.name;
  selectedResultEl.textContent = selectedResult.exact
    ? `${selectedResult.name} · Exact location`
    : `${selectedResult.name} · ${Math.round(getDistanceInMeters(building.lat, building.lng, selectedResult.lat, selectedResult.lng))} m away`;
  renderBuildingList();
  renderFloorTabs();
  renderStreetMapPointer();
  renderStats(floor);
  renderParkingMap(floor);
  renderTripSummary(floor);
  renderTurnList(floor);
}

buildingSearchEl.addEventListener("input", () => {
  scheduleWorldwideSearch(buildingSearchEl.value);
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const matches = getSearchMatches(buildingSearchEl.value);
  if (matches.length > 0) {
    selectLocation(matches[0]);
  } else if (state.searchMessage === "Searching worldwide…") {
    state.submitWhenResultsArrive = true;
  } else if (buildingSearchEl.value.trim()) {
    scheduleWorldwideSearch(buildingSearchEl.value);
  } else {
    buildingSearchEl.focus();
  }
});

buildingSearchEl.addEventListener("keydown", (event) => {
  const matches = getSearchMatches(buildingSearchEl.value);

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    if (matches.length === 0) return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    state.highlightedSuggestionIndex = (
      state.highlightedSuggestionIndex + direction + matches.length
    ) % matches.length;
    [...searchSuggestionsEl.querySelectorAll(".search-suggestion")].forEach((option, index) => {
      const isSelected = index === state.highlightedSuggestionIndex;
      option.setAttribute("aria-selected", String(isSelected));
      if (isSelected) {
        buildingSearchEl.setAttribute("aria-activedescendant", option.id);
        option.scrollIntoView({ block: "nearest" });
      }
    });
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    if (matches.length > 0) {
      selectLocation(matches[state.highlightedSuggestionIndex] || matches[0]);
    } else if (state.searchMessage === "Searching worldwide…") {
      state.submitWhenResultsArrive = true;
    }
  } else if (event.key === "Escape" && !searchSuggestionsEl.hidden) {
    hideSearchSuggestions();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-section")) {
    hideSearchSuggestions();
  }
});

document.querySelectorAll('input[name="vehicle"]').forEach((input) => {
  input.addEventListener("change", () => {
    state.selectedVehicle = input.value;
    state.selectedSearchResultId = "exact";
    renderAll();
  });
});

document.querySelectorAll('input[name="customization"]').forEach((input) => {
  input.addEventListener("change", () => {
    state.selectedCustomization = input.value;
    state.selectedSearchResultId = "exact";
    renderAll();
  });
});

document.querySelectorAll('input[name="filter"]').forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      state.selectedFilters.add(input.value);
    } else {
      state.selectedFilters.delete(input.value);
    }
    state.selectedSearchResultId = "exact";
    renderAll();
  });
});

document.querySelectorAll(".scenario-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".scenario-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.selectedScenario = btn.dataset.scenario;
    state.selectedLotId = null;
    renderAll();
  });
});

document.getElementById("useDriverPosition").addEventListener("click", () => {
  const floor = getCurrentFloor();
  const candidate = chooseLotByScenario(floor);
  state.selectedLotId = candidate ? candidate.id : null;
  renderAll();
});

document.getElementById("focusLotBtn").addEventListener("click", () => {
  const floor = getCurrentFloor();
  const lot = floor.lots.find(item => item.id === state.selectedLotId);
  if (lot) {
    const targetX = lot.x + lot.w / 2;
    const targetY = lot.y + lot.h / 2;
    state.driverPosition = { x: targetX - 90, y: targetY + 60 };
    renderAll();
  }
});

document.getElementById("zoomInBtn").addEventListener("click", () => {
  state.currentScale = Math.min(1.75, state.currentScale + 0.1);
  renderAll();
});

document.getElementById("zoomOutBtn").addEventListener("click", () => {
  state.currentScale = Math.max(0.8, state.currentScale - 0.1);
  renderAll();
});

const mobileLayoutQuery = window.matchMedia("(max-width: 760px)");

function updateSearchPanelState() {
  const isMobile = window.innerWidth <= 760;
  const isOpen = isMobile && appShellEl.classList.contains("is-panel-open");
  panelToggleEl.setAttribute("aria-expanded", String(isOpen));
  panelToggleEl.setAttribute("aria-label", isOpen ? "Collapse search and filters" : "Expand search and filters");
  const drawerContentEl = document.getElementById("drawerContent");
  drawerContentEl.setAttribute("aria-hidden", String(isMobile && !isOpen));
  drawerContentEl.inert = isMobile && !isOpen;
  drawerBackdropEl.setAttribute("aria-hidden", String(!isOpen));
  drawerBackdropEl.inert = !isOpen;
  requestAnimationFrame(() => map.invalidateSize({ pan: false }));
}

function openSearchPanel() {
  appShellEl.classList.add("is-panel-open");
  updateSearchPanelState();
}

function closeSearchPanel() {
  appShellEl.classList.remove("is-panel-open");
  updateSearchPanelState();
}

panelToggleEl.addEventListener("click", () => {
  if (swipeHandled) {
    swipeHandled = false;
    return;
  }

  if (appShellEl.classList.contains("is-panel-open")) {
    closeSearchPanel();
  } else {
    openSearchPanel();
  }
});

drawerBackdropEl.addEventListener("click", closeSearchPanel);

mobileLayoutQuery.addEventListener("change", () => {
  appShellEl.classList.remove("is-panel-open");
  updateSearchPanelState();
});

window.addEventListener("resize", () => {
  if (!mobileLayoutQuery.matches) {
    appShellEl.classList.remove("is-panel-open");
  }
  updateSearchPanelState();
});

let touchStart = null;
let swipeHandled = false;

appShellEl.addEventListener("touchstart", (event) => {
  if (window.innerWidth > 760) return;
  const panelOpen = appShellEl.classList.contains("is-panel-open");
  const startedOnHandle = event.target.closest(".drawer-handle");
  if (!startedOnHandle && (panelOpen || event.changedTouches[0].clientX > 32)) return;
  const touch = event.changedTouches[0];
  touchStart = { x: touch.clientX, y: touch.clientY, panelOpen };
}, { passive: true });

appShellEl.addEventListener("touchend", (event) => {
  if (!touchStart) return;
  if (window.innerWidth > 760) {
    touchStart = null;
    return;
  }

  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStart.x;
  const deltaY = Math.abs(touch.clientY - touchStart.y);

  if (deltaY < 70 && !touchStart.panelOpen && deltaX > 55) {
    openSearchPanel();
    swipeHandled = true;
    window.setTimeout(() => {
      swipeHandled = false;
    }, 500);
  } else if (deltaY < 70 && touchStart.panelOpen && deltaX < -55) {
    closeSearchPanel();
    swipeHandled = true;
    window.setTimeout(() => {
      swipeHandled = false;
    }, 500);
  }

  touchStart = null;
}, { passive: true });

appShellEl.addEventListener("touchcancel", () => {
  touchStart = null;
}, { passive: true });

updateSearchPanelState();
renderAll();
loadNearbyCommercialPlaces(state.selectedLocation);

requestAnimationFrame(() => {
  map.invalidateSize();
});