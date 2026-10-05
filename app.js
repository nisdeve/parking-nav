const buildings = [
  // city center tower
  {
    id: "city-center",
    name: "City Center Tower",
    address: "15 Market Avenue",
    lat: 40.7128,
    lng: -74.0061,
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
          { id: "L2-F2", zone: "F", x: 490, y: 200, w: 52, h: 52, available: fill },
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

const state = {
  selectedBuildingIndex: 0,
  selectedFloorIndex: 0,
  selectedScenario: "nearest",
  selectedLotId: null,
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
const availableCountEl = document.getElementById("availableCount");
const occupiedCountEl = document.getElementById("occupiedCount");
const targetLotEl = document.getElementById("targetLot");
const distanceValueEl = document.getElementById("distanceValue");
const etaValueEl = document.getElementById("etaValue");
const floorValueEl = document.getElementById("floorValue");
const exitValueEl = document.getElementById("exitValue");
const buildingSearchEl = document.getElementById("buildingSearch");
const selectedBuildingEl = document.getElementById("selectedBuilding");

const map = L.map("map", {
  zoomControl: true,
  attributionControl: true
}).setView([40.7128, -74.0061], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const routeLineLayer = L.layerGroup().addTo(map);

function getCurrentBuilding() {
  return buildings[state.selectedBuildingIndex];
}

function getCurrentFloor() {
  const building = getCurrentBuilding();
  return building.floors[state.selectedFloorIndex];
}

function renderBuildingList() {
  buildingListEl.innerHTML = "";

  buildings.forEach((building, index) => {
    const card = document.createElement("div");
    card.className = "building-card" + (index === state.selectedBuildingIndex ? " active" : "");
    card.innerHTML = `
      <h4>${building.name}</h4>
      <p>${building.address}</p>
    `;

    card.addEventListener("click", () => {
      state.selectedBuildingIndex = index;
      state.selectedFloorIndex = 0;
      state.selectedLotId = null;
      map.setView([building.lat, building.lng], 17);
      renderAll();
    });

    buildingListEl.appendChild(card);
  });
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
  routeLineLayer.clearLayers();

  const marker = L.marker([building.lat, building.lng])
    .addTo(map)
    .bindPopup(`<strong>${building.name}</strong><br>${building.address}`);

  const driverMarker = L.circleMarker([building.lat + 0.00045, building.lng - 0.00018], {
    radius: 8,
    color: "#60a5fa",
    fillColor: "#60a5fa",
    fillOpacity: 1
  }).addTo(map);

  driverMarker.bindPopup("Driver position");
  marker.openPopup();

  const parkingPoints = [
    { lat: building.lat + 0.00015, lng: building.lng + 0.0002, label: "Entrance" },
    { lat: building.lat - 0.00022, lng: building.lng - 0.00016, label: "Exit Gate" }
  ];

  parkingPoints.forEach(point => {
    L.circleMarker([point.lat, point.lng], {
      radius: 6,
      color: point.label === "Entrance" ? "#22c55e" : "#ef4444",
      fillColor: point.label === "Entrance" ? "#22c55e" : "#ef4444",
      fillOpacity: 0.9
    })
      .addTo(map)
      .bindPopup(point.label);
  });
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

  selectedBuildingEl.textContent = building.name;
  renderBuildingList();
  renderFloorTabs();
  renderStreetMapPointer();
  renderStats(floor);
  renderParkingMap(floor);
  renderTripSummary(floor);
  renderTurnList(floor);
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = buildingSearchEl.value.trim().toLowerCase();
  if (!query) return;

  const match = buildings.findIndex((building) =>
    building.name.toLowerCase().includes(query) || building.address.toLowerCase().includes(query)
  );

  if (match >= 0) {
    state.selectedBuildingIndex = match;
    state.selectedFloorIndex = 0;
    state.selectedLotId = null;
    map.setView([buildings[match].lat, buildings[match].lng], 17);
    renderAll();
  }
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

buildings.forEach((building) => {
  const marker = L.marker([building.lat, building.lng]).addTo(map);
  marker.bindPopup(`<strong>${building.name}</strong><br>${building.address}`);
});

renderAll();