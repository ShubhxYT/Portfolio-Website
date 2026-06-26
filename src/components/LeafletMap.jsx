import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

export default function LeafletMap({ panTo }) {
  return (
    <MapContainer
      center={[21, 77]}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-[400px] border-neo border-border shadow-neo"
      ref={(m) => { if (m && panTo) m.flyTo(panTo, 8, { duration: 1 }); }}
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
              <div className="font-mono">
                <strong className="text-sm">{loc.city}</strong>
                {loc.companies?.map((c, i) => (
                  <div key={i} className="border-t border-black/20 my-1 pt-1">
                    <div className="font-bold text-xs">{c.company}</div>
                    <div className="text-xs">{c.role}</div>
                    <div className="text-xs italic">{c.period}</div>
                  </div>
                ))}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
