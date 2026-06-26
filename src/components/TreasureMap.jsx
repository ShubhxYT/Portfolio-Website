export default function TreasureMap() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 400 600" style={{ filter: 'saturate(0.8)' }}>
      <rect x="10" y="10" width="380" height="580" fill="#f4e7d7" stroke="#8B4513" strokeWidth="3" strokeDasharray="10 5" />
      {/* Compass rose */}
      <g transform="translate(330, 80)">
        <circle r="22" fill="none" stroke="#8B4513" strokeWidth="2" />
        <polygon points="0,-20 4,0 0,4 -4,0" fill="#D2691E" />
        <polygon points="0,20 4,0 0,-4 -4,0" fill="#8B4513" />
        <text x="0" y="-26" fontFamily="Caveat" fontSize="14" fill="#8B4513" textAnchor="middle">N</text>
      </g>
      {/* Dotted route */}
      <path d="M80,500 Q160,420 220,360 T320,180" fill="none" stroke="#D2691E" strokeWidth="3" strokeDasharray="8 8" />
      {/* Location circles */}
      <circle cx="80" cy="500" r="6" fill="#8B4513" />
      <circle cx="220" cy="360" r="6" fill="#8B4513" />
      <circle cx="320" cy="180" r="6" fill="#8B4513" />
      {/* X marks the spot */}
      <g transform="translate(220, 360)">
        <line x1="-10" y1="-10" x2="10" y2="10" stroke="#DC143C" strokeWidth="4" />
        <line x1="10" y1="-10" x2="-10" y2="10" stroke="#DC143C" strokeWidth="4" />
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </g>
      {/* Mountains */}
      <polygon points="60,300 100,240 140,300" fill="#8B4513" opacity="0.4" />
      <polygon points="280,260 320,210 360,260" fill="#8B4513" opacity="0.4" />
      {/* Trees */}
      <g transform="translate(50, 200)">
        <rect x="-2" y="0" width="4" height="10" fill="#5a3d1a" />
        <polygon points="0,-15 -10,5 10,5" fill="#3a7d3a" />
      </g>
      <g transform="translate(180, 130)">
        <rect x="-2" y="0" width="4" height="10" fill="#5a3d1a" />
        <polygon points="0,-18 -12,6 12,6" fill="#3a7d3a" />
      </g>
      {/* Water */}
      <path d="M20,560 q15,-8 30,0 t30,0 t30,0 t30,0" fill="none" stroke="#4682B4" strokeWidth="2" opacity="0.5" />
      <text x="200" y="40" fontFamily="Caveat" fontSize="28" fill="#8B4513" textAnchor="middle" fontWeight="700">My Journey</text>
    </svg>
  );
}
