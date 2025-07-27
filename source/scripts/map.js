const LATITUDE = 59.968295;
const LONGITUDE = 30.317525;

const mapContainer = document.querySelector('.map .map__wrapper');

const initMap = (element) => {
  const map = L.map(element, {
    center: [LATITUDE, LONGITUDE],
    zoom: 18
  });

  const icon = L.icon({
    iconUrl: '/images/map/icon-map-marker.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }
  ).addTo(map);

  L.marker([LATITUDE, LONGITUDE], { icon: icon }).addTo(map);
};

if (mapContainer) {
  mapContainer.innerHTML = '';
  initMap(mapContainer);
}
