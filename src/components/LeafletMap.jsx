import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LOCATIONS = [
  { coords: [28.7041, 77.1025], city: 'Delhi' },
  {
    coords: [26.9124, 75.7873],
    city: 'Jaipur',
    companies: [
      { company: 'IEEE Computer Society', period: '2026', role: 'Technical Core Team' },
      { company: 'IEEE Computer Society', period: '2025', role: 'Technical Junior Team' },
      { company: 'Manipal University', period: '2023 - Present', role: 'B.Tech CS Data Science' },
    ],
  },
  { coords: [12.9716, 77.5946], city: 'Bangalore' },
];

const INITIAL_VIEW = { center: [21, 77], zoom: 5 };

const buildIcon = (city, isCurrent) =>
  L.divIcon({
    className: isCurrent ? 'neo-marker neo-marker-current' : 'neo-marker',
    html: `
      <div class="neo-marker-label ${isCurrent ? 'neo-marker-label-current' : ''}">${city}</div>
      <div class="neo-marker-pin ${isCurrent ? 'neo-marker-pin-current' : ''}"></div>
    `,
    iconSize: isCurrent ? [35, 35] : [30, 30],
    iconAnchor: isCurrent ? [17.5, 50] : [15, 45],
    popupAnchor: [0, isCurrent ? -50 : -45],
  });

function HomeButton() {
  const map = useMap();

  useEffect(() => {
    const HomeControl = L.Control.extend({
      onAdd: function () {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-home');
        const link = L.DomUtil.create('a', '', container);
        link.href = '#';
        link.title = 'Reset map view';
        link.innerHTML = '<i class="fas fa-home"></i>';
        L.DomEvent.on(link, 'click', function (e) {
          e.preventDefault();
          map.setView(INITIAL_VIEW.center, INITIAL_VIEW.zoom);
        });
        return container;
      },
    });
    const ctrl = new HomeControl({ position: 'topright' });
    ctrl.addTo(map);
    return () => { map.removeControl(ctrl); };
  }, [map]);

  return null;
}

function MapFlyTo({ panTo }) {
  const map = useMap();

  useEffect(() => {
    if (panTo) {
      map.flyTo(panTo, 8, { duration: 1 });
    }
  }, [panTo, map]);

  return null;
}

export default function LeafletMap({ panTo }) {
  return (
    <MapContainer
      center={INITIAL_VIEW.center}
      zoom={INITIAL_VIEW.zoom}
      scrollWheelZoom={false}
      className="w-full h-full border-none"
    >
      <TileLayer
        url="https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/{z}/{x}/{y}.jpg"
        attribution="Stamen Watercolor"
        maxZoom={16}
      />
      {LOCATIONS.map((loc) => {
        const isCurrent = loc.city === 'Jaipur';
        return (
          <Marker key={loc.city} position={loc.coords} icon={buildIcon(loc.city, isCurrent)}>
            <Popup>
              <div className="map-popup">
                <div className="map-popup-country">{loc.city}</div>
                {loc.companies?.map((c, i) => (
                  <div key={i}>
                    {i > 0 && <div className="map-popup-divider" />}
                    <div className="map-popup-company">
                      <strong>{c.company}</strong>
                      <span>{c.role}</span>
                      <small>{c.period}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Popup>
          </Marker>
        );
      })}
      <HomeButton />
      <MapFlyTo panTo={panTo} />
    </MapContainer>
  );
}
