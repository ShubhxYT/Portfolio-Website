export default function TreasureMap() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="600" fill="#f4e7d7"/>
      <g transform="translate(320, 80)">
        <circle cx="0" cy="0" r="35" fill="none" stroke="#8B4513" strokeWidth="2"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#8B4513" strokeWidth="1"/>
        <polygon points="0,-30 5,-10 -5,-10" fill="#D2691E"/>
        <polygon points="0,30 5,10 -5,10" fill="#8B4513"/>
        <polygon points="30,0 10,5 10,-5" fill="#8B4513"/>
        <polygon points="-30,0 -10,5 -10,-5" fill="#8B4513"/>
        <text x="0" y="-40" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#8B4513">N</text>
      </g>
      <path d="M 80,150 Q 120,200 100,250 T 140,350 Q 160,400 200,420" stroke="#D2691E" strokeWidth="3" fill="none" strokeDasharray="8,8" strokeLinecap="round"/>
      <circle cx="80" cy="150" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
      <circle cx="100" cy="250" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
      <circle cx="140" cy="350" r="8" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
      <g transform="translate(200, 420)">
        <circle cx="0" cy="0" r="25" fill="#FFD700" opacity="0.3"/>
        <line x1="-15" y1="-15" x2="15" y2="15" stroke="#DC143C" strokeWidth="4" strokeLinecap="round"/>
        <line x1="15" y1="-15" x2="-15" y2="15" stroke="#DC143C" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <g opacity="0.4">
        <polygon points="250,200 270,150 290,200" fill="#8B4513"/>
        <polygon points="280,200 300,160 320,200" fill="#A0522D"/>
        <polygon points="220,220 245,170 270,220" fill="#8B4513"/>
      </g>
      <g opacity="0.4">
        <polygon points="100,450 110,420 120,450" fill="#228B22"/>
        <rect x="108" y="450" width="4" height="15" fill="#8B4513"/>
        <polygon points="150,480 160,450 170,480" fill="#228B22"/>
        <rect x="158" y="480" width="4" height="15" fill="#8B4513"/>
        <polygon points="70,500 80,470 90,500" fill="#228B22"/>
        <rect x="78" y="500" width="4" height="15" fill="#8B4513"/>
      </g>
      <g opacity="0.3">
        <path d="M 40,300 Q 50,295 60,300 T 80,300" stroke="#4682B4" strokeWidth="2" fill="none"/>
        <path d="M 40,310 Q 50,305 60,310 T 80,310" stroke="#4682B4" strokeWidth="2" fill="none"/>
        <path d="M 280,520 Q 290,515 300,520 T 320,520" stroke="#4682B4" strokeWidth="2" fill="none"/>
        <path d="M 280,530 Q 290,525 300,530 T 320,530" stroke="#4682B4" strokeWidth="2" fill="none"/>
      </g>
      <rect x="10" y="10" width="380" height="580" fill="none" stroke="#8B4513" strokeWidth="3" strokeDasharray="10,5"/>
      <text x="200" y="50" fontFamily="Caveat" fontSize="28" fill="#8B4513" textAnchor="middle" fontWeight="700">My Journey</text>
    </svg>
  );
}
