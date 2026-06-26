export const skillBoxes = [
  { icon: 'fa-code', name: 'Languages', tags: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'Bash'] },
  { icon: 'fa-brain', name: 'ML & AI', tags: ['PyTorch', 'LangChain', 'LangGraph', 'Sentence-Transformers', 'Scikit-Learn', 'XGBoost'], highlight: true },
  { icon: 'fa-database', name: 'RAG & Vector', tags: ['pgvector', 'ChromaDB', 'LlamaIndex', 'BGE-M3', 'BM25', 'Cross-Encoders', 'HyDE'] },
  { icon: 'fa-eye', name: 'Computer Vision', tags: ['YOLOv8', 'MediaPipe', 'OpenCV', 'EasyOCR', 'SORT Tracking'] },
  { icon: 'fa-cubes', name: 'Backend & Frameworks', tags: ['FastAPI', 'Django', 'React', 'Next.js', 'Streamlit', 'Typer'] },
  { icon: 'fa-server', name: 'Databases', tags: ['PostgreSQL', 'Nginx', 'Supabase', 'pgvector', 'Redis'] },
  { icon: 'fa-cloud', name: 'Infrastructure', tags: ['Docker', 'Proxmox', 'Coolify', 'Tailscale', 'Cloudflare'] },
  { icon: 'fa-robot', name: 'LLM Providers', tags: ['Groq', 'OpenRouter', 'Google Gemini', 'Ollama', 'NVIDIA NIM'] },
];

export const timeline = [
  { id: 't1', title: 'IEEE Computer Society — Technical Core Team', date: '2026', description: 'Architected a full-stack RAG hiring platform with hybrid retrieval fusion (dense + BM25 + HyDE via RRF), three-layer defense system (19 regex guardrails + LLM gatekeeper + auditor), 20+ file-format ingestion via marker-pdf.', location: 'Jaipur, India', city: 'Jaipur' },
  { id: 't2', title: 'IEEE Computer Society — Technical Junior Team', date: '2025', description: 'Contributed to backend modules and evaluation tooling for the Hiring-Assistant platform; first exposure to RRF fusion and cross-encoder re-ranking.', location: 'Jaipur, India', city: 'Jaipur' },
  { id: 't3', title: 'WhiteHat Jr — Python Development', date: '2021', description: 'Collaborated remotely on Python-based projects during the pandemic, building a strong foundation in data analysis and visualization using NumPy, Pandas, and Matplotlib.', location: 'Delhi, India (Remote)', city: 'Delhi' },
  { id: 't4', title: 'Self-Hosted Infrastructure', date: '2024 - Present', description: 'Architected a complete homelab ecosystem: Proxmox hypervisor on a 6-year-old pandemic PC running Docker LXC + Coolify PaaS, FRP tunnels through Oracle Cloud free-tier VPS, Tailscale mesh VPN, Cloudflare Tunnel — supporting 10+ services across 5 domains with zero monthly hosting cost.', location: 'Jaipur, India', city: 'Jaipur' },
];

export const education = [
  { school: 'Manipal University Jaipur', degree: 'B.Tech Computer Science (Data Science)', period: '2023 - Present', tags: ['3rd year', 'Data Science', 'AI'] },
  { school: 'GD Goenka Public School', degree: 'CBSE 12th (PCM)', period: 'Completed', tags: ['Physics', 'Chemistry', 'Maths'] },
];

export const STATS = [
  { value: 28, label: 'GitHub Repos' },
  { value: 10, label: 'Self-Hosted Services' },
  { value: 5, label: 'Custom Domains' },
  { value: 60, suffix: 'K+', label: 'Lines of Code' },
];

// Empty stubs — populated in Commit 5
export const projects = [];
export const certificates = [];
export const contactInfo = {};
