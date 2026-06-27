export const skillBoxes = [
  { icon: 'fa-code', name: 'Languages', tags: [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'C', icon: 'fas fa-code' },
    { name: 'Bash', icon: 'fas fa-terminal' },
  ]},
  { icon: 'fa-brain', name: 'ML & AI', tags: [
    { name: 'PyTorch', icon: 'fas fa-fire' },
    { name: 'LangChain', icon: 'fas fa-link' },
    { name: 'LangGraph', icon: 'fas fa-project-diagram' },
    { name: 'LlamaIndex', icon: 'fas fa-robot' },
    { name: 'Scikit-Learn', icon: 'fas fa-chart-line' },
    { name: 'XGBoost', icon: 'fas fa-cubes' },
  ]},
  { icon: 'fa-database', name: 'RAG & Vector', tags: [
    { name: 'pgvector', icon: 'fas fa-database' },
    { name: 'ChromaDB', icon: 'fas fa-database' },
    { name: 'BGE-M3', icon: 'fas fa-brain' },
    { name: 'BM25', icon: 'fas fa-search' },
    { name: 'Cross-Encoders', icon: 'fas fa-exchange-alt' },
    { name: 'HyDE', icon: 'fas fa-lightbulb' },
    { name: 'RRF Fusion', icon: 'fas fa-sort' },
  ]},
  { icon: 'fa-eye', name: 'Computer Vision', tags: [
    { name: 'YOLOv8', icon: 'fas fa-camera' },
    { name: 'MediaPipe', icon: 'fas fa-hand-paper' },
    { name: 'OpenCV', icon: 'fas fa-image' },
    { name: 'EasyOCR', icon: 'fas fa-font' },
    { name: 'SORT Tracking', icon: 'fas fa-arrows-alt' },
  ]},
  { icon: 'fa-cubes', name: 'Backend & Frameworks', tags: [
    { name: 'FastAPI', icon: 'fas fa-bolt' },
    { name: 'Django', icon: 'fab fa-python' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Next.js', icon: 'fab fa-react' },
    { name: 'Streamlit', icon: 'fas fa-water' },
    { name: 'Typer', icon: 'fas fa-terminal' },
  ]},
  { icon: 'fa-server', name: 'Databases', tags: [
    { name: 'PostgreSQL', icon: 'fas fa-elephant' },
    { name: 'Redis', icon: 'fas fa-memory' },
    { name: 'Supabase', icon: 'fas fa-database' },
  ]},
  { icon: 'fa-cloud', name: 'Infrastructure', tags: [
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Proxmox', icon: 'fas fa-server' },
    { name: 'Coolify', icon: 'fas fa-sync-alt' },
    { name: 'Nginx', icon: 'fas fa-network-wired' },
    { name: 'Cloudflare', icon: 'fas fa-shield-alt' },
    { name: 'Tailscale', icon: 'fas fa-random' },
  ], highlight: true },
  { icon: 'fa-robot', name: 'LLM Providers', tags: [
    { name: 'Groq', icon: 'fas fa-bolt' },
    { name: 'OpenRouter', icon: 'fas fa-globe' },
    { name: 'Google Gemini', icon: 'fab fa-google' },
    { name: 'NVIDIA NIM', icon: 'fas fa-microchip' },
    { name: 'Ollama', icon: 'fas fa-server' },
  ], highlight: true },
];

export const timeline = [
  { id: 't1', title: 'IEEE Computer Society — Technical Core Team', date: '2026', description: 'Architected a full-stack RAG hiring platform with 17 modules across 8,500 lines — hybrid retrieval fusion (dense vector + BM25 + HyDE with RRF), cross-encoder re-ranking, and defense-in-depth safety system blocking 80%+ of adversarial attacks.', location: 'Manipal University Jaipur, India', city: 'Jaipur' },
  { id: 't2', title: 'IEEE Computer Society — Technical Junior Team', date: '2025', description: 'Contributed to backend modules and evaluation tooling for the Hiring-Assistant platform; first exposure to RRF fusion and cross-encoder re-ranking.', location: 'Manipal University Jaipur, India', city: 'Jaipur' },
  { id: 't3', title: 'WhiteHat Jr — Python Development', date: '2021', description: 'Collaborated remotely on Python-based projects during the pandemic, building a strong foundation in data analysis and visualization using NumPy, Pandas, and Matplotlib.', location: 'Delhi, India (Remote)', city: 'Delhi' },
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

export const projects = [
  {
    id: 'p1',
    title: 'Youtube-To-Posts',
    subtitle: 'AI Content Pipeline',
    gradient: 'from-yellow to-pink',
    short: 'Multi-service SaaS pipeline turning YouTube channels into LinkedIn/Twitter content in the creator\'s exact Hinglish voice.',
    full: 'Architected a multi-service SaaS pipeline (5,900 lines) in 7 days for a 100k-subscriber YouTube creator. Ingests channels, transcribes bilingual Hindi-English (Hinglish) content via Groq Whisper large-v3, profiles creator voice across 9 style dimensions through 8 parallel LLM passes, and generates platform-specific content (LinkedIn posts, Twitter threads) in the creator\'s exact language mix. Two LangGraph generation modes — critique-refine and n-variants-judge — with PostgresSaver checkpointing for resume on failure. Built SaaS migration seams from day one: file-system behind OutputWriter protocol, all LLM calls through single LLMRouter chokepoint, Langfuse observability. Captions-first ingest strategy achieving 70-90% zero-cost video processing.',
    tags: ['Python', 'LangGraph', 'Groq', 'BGE-M3', 'pgvector', 'Streamlit', 'Langfuse'],
    github: 'https://github.com/ShubhxYT/Youtube-To-Posts',
    demo: null,
    featured: true,
  },
  {
    id: 'p2',
    title: 'FullRag-Plus',
    subtitle: 'Production RAG Platform',
    gradient: 'from-primary to-accent',
    short: 'Enterprise-grade RAG (16,200 lines, 85 commits) with continuous evaluation, auto-prompt selection, and Docker Compose stack.',
    full: 'Engineered an enterprise-grade RAG platform (16,200 lines, 85 commits, 14 days) with FastAPI backend, React + TypeScript frontend, and PostgreSQL + pgvector (HNSW, 768-dim cosine). Serves 4 document loaders (PDF/DOCX/HTML/MD), structure-aware chunking with section-path tracking, and LLM enrichment (summaries, keywords, hypothetical questions). Continuous evaluation with regression detection — APScheduler background job running daily retrieval metrics (Precision@k, Recall@k, MRR, NDCG@k) and LLM-as-judge scoring across 4 dimensions (faithfulness, relevance, completeness, coherence) with <10% precision drop alerts. Dual-provider generation pipeline (Google Gemini, Groq) with auto-prompt selection, TTL response cache, transcript fallback for low-confidence queries. 3-service Docker Compose stack + Streamlit admin dashboard with 13 debug pages.',
    tags: ['FastAPI', 'React', 'TypeScript', 'pgvector', 'Gemini', 'Groq', 'Docker', 'Alembic'],
    github: 'https://github.com/ShubhxYT/Production-RAG',
    demo: null,
    featured: true,
  },
  {
    id: 'p3',
    title: 'HappyNest Website',
    subtitle: 'Luxury Farm Stay (Freelance Client)',
    gradient: 'from-primary to-pink',
    short: 'Full-stack luxury farmstay website (happynestfarm.in) for a freelance client — canvas-scrubbed 91-frame GSAP hero, AI concierge, zero hosting cost.',
    full: 'Developed and deployed a full-stack luxury farmstay website (happynestfarm.in) using Next.js + TypeScript with a canvas-scrubbed 91-frame GSAP ScrollTrigger video hero, 12 content sections, dark/light mode, and WhatsApp booking funnel — serving real guests at zero hosting cost on self-hosted homelab. Engineered an AI chat concierge with FastAPI server-side events (SSE) streaming, dual-LLM fallback (OpenRouter Gemini Flash Lite primary → NVIDIA NIM MiniMax M2.7), and Supabase persistence for chat sessions and lead capture — deployed via Coolify CI/CD through FRP tunnel to Oracle Cloud VPS. Implemented cache-augmented generation (CAG) approach with full knowledge base (~15K chars) injected into system prompt — eliminating vector database latency while covering 52 FAQ entries and complete property catalog.',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'FastAPI', 'Supabase', 'OpenRouter', 'NVIDIA NIM', 'Docker'],
    github: null,
    demo: 'https://happynestfarm.in',
    featured: true,
  },
  {
    id: 'p4',
    title: 'Hiring-Assistant',
    subtitle: 'IEEE CS — RAG with Guardrails',
    gradient: 'from-accent to-primary',
    short: 'Production-grade RAG for resumes + job descriptions. Hybrid retrieval fusion + three-layer defense + 20+ file formats.',
    full: 'Architected a full-stack retrieval-augmented generation (RAG) hiring platform — 17 modules across 8,500 lines featuring hybrid retrieval fusion combining dense vector search, BM25 keyword search, and HyDE hypothetical document queries via Reciprocal Rank Fusion (RRF) with cross-encoder re-ranking. Implemented a defense-in-depth safety system with 3 independent validation layers: 19-pattern regex guardrails (prompt injection, jailbreak, command injection), LLM gatekeeper (pre-generation context sufficiency), and LLM auditor (post-generation faithfulness), validated through 12 adversarial red-team tests with over 80% attack block rate. Engineered 20+ document format ingestion pipeline (PDF, DOCX, PPTX, XLSX, EPUB, HTML, images) through marker-pdf and Docling auto-routing with heading-aware chunking and LLM-generated chunk summaries.',
    tags: ['Python', 'ChromaDB', 'BM25', 'HyDE', 'RRF', 'marker-pdf', 'Docling', 'Streamlit'],
    github: 'https://github.com/ShubhxYT/Hiring-Assistant',
    demo: null,
    featured: false,
  },
  {
    id: 'p5',
    title: 'Vaidya Healthcare',
    subtitle: 'Multi-Module Health App',
    gradient: 'from-pink to-yellow',
    short: '10-page Streamlit health app — MediaPipe Pose + YOLOv8m + Hume AI emotion + Google OAuth + Twilio + scikit-learn.',
    full: 'Multi-module health-aware yogic companion built with Streamlit. Pose estimation via MediaPipe BlazePose (33 landmarks) — yoga asana alignment + recognition. Object detection via YOLOv8m for environment awareness. Hume AI emotion analysis for mood-aware recommendations. Google OAuth for sessions, Twilio for caretaker alerts, scikit-learn for habit ML. 10+ Streamlit pages, 2119 lines. The anchor of my healthcare / wellness experiment track — built during a 4-day hackathon in my first semester.',
    tags: ['Streamlit', 'MediaPipe', 'YOLOv8', 'Hume AI', 'Twilio', 'scikit-learn', 'Google OAuth'],
    github: 'https://github.com/ShubhxYT/Vaidya-Healthcare',
    demo: null,
    featured: false,
  },
  {
    id: 'p6',
    title: 'Self-Hosted Infrastructure',
    subtitle: '$0/Month Homelab on Repurposed Hardware',
    gradient: 'from-yellow to-accent',
    short: 'Complete homelab: Proxmox on a 6-year-old pandemic PC + Docker LXC + Coolify + FRP tunnels + Tailscale mesh. 10+ services, 5 domains.',
    full: 'Architected and maintained a complete homelab ecosystem from repurposed consumer hardware. Proxmox hypervisor on a six-year-old pandemic PC running Docker LXC with Coolify PaaS, FRP tunnels through Oracle Cloud free-tier VPS for public ingress, Tailscale mesh VPN for inter-device communication, and Cloudflare Tunnel for media-heavy services. Storage pools include ZFS mirrors built from 2013 MacBook Pro HDDs, a 1.81TB NVMe TrueNAS pool hosting 303GB of Immich photos, and a 20-year-old drive repurposed for ISOs. Deployed pgvector databases, self-hosted Supabase, Ollama local LLM inference, multiple embedding models (BGE-M3, sentence-transformers, nomic-embed-text), and full observability stack (Langfuse, LangSmith). Took three years to go from "I want a NAS" to "I have a self-hosted AI infrastructure that runs production workloads for zero monthly hosting cost." The journey has been mine.',
    tags: ['Proxmox', 'Docker', 'Coolify', 'FRP', 'Tailscale', 'Cloudflare', 'Supabase', 'Ollama', 'TrueNAS', 'Immich'],
    github: null,
    demo: 'https://supabase.shubhsomani.tech',
    featured: true,
  },
];

export const certificates = [
  {
    id: 'c1',
    title: 'Microsoft Azure — From Zero to Hero',
    issuer: 'Microsoft',
    credentialUrl: null,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'c2',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'Stanford University',
    credentialUrl: null,
    gradient: 'from-red-500 to-pink',
  },
  {
    id: 'c3',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford University',
    credentialUrl: null,
    gradient: 'from-yellow to-orange-500',
  },
];

export const contactInfo = {};
