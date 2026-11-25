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
    { name: 'Pipecat', icon: 'fas fa-microphone' },
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
  { id: 't0', title: 'Knovance AI — Founder & AI Engineer', date: '2026', description: 'Founded a conversational AI startup delivering document-grounded assistants to business clients. Built a low-latency Q&A engine with OKF bundles and BM25 retrieval, then a self-tutoring voice AI on Pipecat.', location: 'India', city: '' },
  { id: 't1', title: 'IEEE Computer Society — Technical Core Team', date: '2026', description: 'Architected a full-stack RAG hiring platform with 17 modules across 8,500 lines — hybrid retrieval fusion (dense vector + BM25 + HyDE with RRF), cross-encoder re-ranking, and defense-in-depth safety system blocking 80%+ of adversarial attacks.', location: 'Manipal University Jaipur, India', city: 'Jaipur' },
  { id: 't2', title: 'IEEE Computer Society — Technical Junior Team', date: '2025', description: 'Contributed to backend modules and evaluation tooling for the Hiring-Assistant platform; first exposure to RRF fusion and cross-encoder re-ranking.', location: 'Manipal University Jaipur, India', city: 'Jaipur' },
  { id: 't3', title: 'WhiteHat Jr — Python Development', date: '2021', description: 'Collaborated remotely on Python-based projects during the pandemic, building a strong foundation in data analysis and visualization using NumPy, Pandas, and Matplotlib.', location: 'Delhi, India (Remote)', city: 'Delhi' },
];

export const education = [
  { school: 'Manipal University Jaipur', degree: 'B.Tech Computer Science (Data Science)', period: '2023 - Present', tags: ['3rd year', 'Data Science', 'AI'] },
  { school: 'GD Goenka Public School', degree: 'CBSE 12th (PCM)', period: 'Completed', tags: ['Physics', 'Chemistry', 'Maths'] },
];

export const STATS = [
  { value: 23, label: 'Public GitHub Repos' },
  { value: 21, label: 'Coolify Apps' },
  { value: 20, suffix: '+', label: 'Custom Domains' },
  { value: 50, suffix: '+', label: 'Services' },
];

export const projects = [
  {
    id: 'p1',
    title: 'FullRag-Plus',
    subtitle: 'Production RAG Platform',
    gradient: 'from-primary to-accent',
    short: 'Evaluated RAG platform with FastAPI, React, pgvector, daily regression checks, provider fallback, and a live chat UI.',
    full: 'A production-ready retrieval-augmented generation system with a FastAPI backend, React TypeScript frontend, and PostgreSQL + pgvector for semantic search. The live app at rag-ui.shubhsomani.tech lets you upload PDF, DOCX, HTML or Markdown, then ask questions in a streaming chat with numbered citations, per-browser chat history, and document delete from the Library. Chunks are embedded with BAAI/bge-base-en-v1.5 together with document name and section path, so questions that name a document can be routed to it; “list all the topics” questions get a heading outline; other questions use vector search with per-document caps. When nothing scores above the insufficiency threshold, the answer says the documents do not cover it. Generation falls back across providers (Gemini or Groq). The repo also ships a Streamlit admin dashboard with 13 debug pages and daily retrieval/LLM-as-judge evaluation.',
    tags: ['FastAPI', 'React', 'TypeScript', 'pgvector', 'Gemini', 'Groq', 'Docker'],
    github: 'https://github.com/ShubhxYT/FullRag-Plus',
    demo: 'https://rag-ui.shubhsomani.tech',
    featured: true,
  },
  {
    id: 'p3',
    title: 'FlowMedic',
    subtitle: 'n8n Observability & Incident Diagnosis',
    gradient: 'from-pink to-accent',
    short: 'AI-powered observability that turns failed n8n executions into sanitized incidents with structured diagnosis suggestions.',
    full: 'FlowMedic turns failed n8n executions into persistent, sanitized incidents and provides structured AI-assisted diagnosis suggestions for human review. It supports multiple isolated workspaces, GUI-managed n8n/AI connections, and per-instance monitoring for teams running n8n workflows. The stack is Python 3.12, FastAPI, Next.js 16, TypeScript, and Docker, with CI on the main branch.',
    tags: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Docker', 'n8n'],
    github: 'https://github.com/ShubhxYT/FlowMedic-n8n',
    demo: null,
    featured: true,
  },
  {
    id: 'p4',
    title: 'Project Eklavya',
    subtitle: 'Pipecat Voice Tutor',
    gradient: 'from-yellow to-primary',
    short: 'File-grounded voice tutor: a Pipecat bot answers only from an ingested course corpus and streams audio to a React learner UI.',
    full: 'A file-grounded voice tutor with a camera-free learner website. A Pipecat voice bot answers only from an ingested course corpus, speaks through a self-hosted voicebox TTS server, and streams real bot audio to a React learner UI. An optional behavior-sensing backend remains available for developer runs. The repo includes OKF-grounded tutoring, Docling ingestion, a React learner UI with a shared lipsync engine, Twilio telephony, and a vision engagement worker.',
    tags: ['Pipecat', 'OKF', 'React', 'Groq', 'Docling', 'Twilio'],
    github: 'https://github.com/ShubhxYT/Project-Eklavya',
    demo: null,
    featured: true,
  },
  {
    id: 'p6',
    title: 'HappyNest Website',
    subtitle: 'Luxury Farm Stay (Freelance Client)',
    gradient: 'from-primary to-pink',
    short: 'Live farm-stay site and AI concierge at happynestfarm.in — CAG answers, SSE streaming, and a zero-cost self-hosted setup.',
    full: 'Developed and deployed a full-stack luxury farmstay website (happynestfarm.in) using Next.js + TypeScript with a canvas-scrubbed 91-frame GSAP ScrollTrigger video hero, 12 content sections, dark/light mode, and a WhatsApp booking funnel — serving real guests on self-hosted infrastructure. Engineered an AI chat concierge with FastAPI server-sent events, dual-LLM fallback, and persistence for chat sessions and lead capture. Uses a cache-augmented generation (CAG) approach with the full knowledge base injected into the system prompt, covering 52 FAQ entries and the complete property catalog.',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'FastAPI', 'Supabase', 'Docker'],
    github: 'https://github.com/ShubhxYT/HappyNest-website',
    demo: 'https://happynestfarm.in',
    featured: true,
  },
  {
    id: 'p11',
    title: 'Youtube-To-Posts',
    subtitle: 'AI Content Pipeline',
    gradient: 'from-yellow to-pink',
    short: 'Multi-service pipeline turning YouTube channels into LinkedIn/Twitter content in the creator’s Hinglish voice.',
    full: 'Architected a multi-service SaaS pipeline (5,900 lines) in 7 days for a 100k-subscriber YouTube creator. Ingests channels, transcribes bilingual Hindi-English (Hinglish) content via Groq Whisper large-v3, profiles creator voice across 9 style dimensions through 8 parallel LLM passes, and generates platform-specific content (LinkedIn posts, Twitter threads) in the creator’s exact language mix. Two LangGraph generation modes — critique-refine and n-variants-judge — with PostgresSaver checkpointing for resume on failure. Captions-first ingest strategy aiming for 70-90% zero-cost video processing.',
    tags: ['Python', 'LangGraph', 'Groq', 'BGE-M3', 'pgvector', 'Streamlit', 'Langfuse'],
    github: 'https://github.com/ShubhxYT/Youtube-To-Posts',
    demo: null,
    featured: false,
  },
  {
    id: 'p14',
    title: 'Vaidya Healthcare',
    subtitle: 'Multi-Module Health App',
    gradient: 'from-pink to-yellow',
    short: '10-page Streamlit health app — MediaPipe Pose, YOLOv8m, Hume AI emotion, Google OAuth, Twilio, and scikit-learn.',
    full: 'Multi-module health-aware yogic companion built with Streamlit. Pose estimation via MediaPipe BlazePose (33 landmarks) for yoga asana alignment and recognition. Object detection via YOLOv8m for environment awareness. Hume AI emotion analysis for mood-aware recommendations. Google OAuth for sessions, Twilio for caretaker alerts, scikit-learn for habit ML. Built during a 4-day hackathon in a first semester.',
    tags: ['Streamlit', 'MediaPipe', 'YOLOv8', 'Hume AI', 'Twilio', 'scikit-learn', 'Google OAuth'],
    github: 'https://github.com/ShubhxYT/Vaidya-Health-Care-with-Yoga-Assistant',
    demo: null,
    featured: false,
  },
  {
    id: 'p15',
    title: 'Self-Hosted Infrastructure',
    subtitle: 'Homelab on Repurposed Hardware',
    gradient: 'from-yellow to-accent',
    short: 'Proxmox homelab on repurposed hardware: Coolify with 21 apps, 50+ services, and 20+ custom domains.',
    full: 'A self-hosted homelab on a Proxmox hypervisor (i7-10700K, repurposed consumer hardware) with a TrueNAS SCALE NVMe pool and ZFS-mirrored LXC storage. Coolify runs 21 applications and 2 databases, alongside a 50+ container/service stack, exposed across 20+ custom domains through FRP tunnels, Tailscale, Cloudflare Tunnels, and Nginx. The production AI/data layer includes pgvector, self-hosted Supabase, Ollama, Voicebox (Kokoro) TTS, Immich, and Langfuse/LangSmith — at zero per-service subscription cost.',
    tags: ['Proxmox', 'Docker', 'Coolify', 'FRP', 'Tailscale', 'Cloudflare', 'Supabase', 'Ollama', 'TrueNAS'],
    github: null,
    demo: 'https://happynestfarm.in',
    featured: false,
  }
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

export const contactInfo = {
  email: 'shubhsomani098@gmail.com',
  phone: '9999204212',
  phoneHref: 'tel:+919999204212',
  github: 'https://github.com/ShubhxYT',
  linkedin: 'https://www.linkedin.com/in/shubh-somani',
  website: 'https://shubhsomani.tech',
  resume: '/Shubh_Somani_CV_2026.pdf',
};

export const GALLERY_FALLBACK = [
  { id: 'g1', title: 'Hand Tracking — Finger Counting', description: 'MediaPipe Hands: 21 landmarks per hand in real time. Custom threshold logic distinguishes 0-5 fingers extended.', date: '2024-09-15', type: 'image', media_urls: ['/assets/gallery/hand-counts-1.png'], src: '/assets/gallery/hand-counts-1.png', likes: 0 },
  { id: 'g2', title: 'Virtual Paint — Menu', description: 'Real-time gesture drawing with color palette selection. Uses MediaPipe Hands + OpenCV.', date: '2024-09-20', type: 'image', media_urls: ['/assets/gallery/virtual-paint.png'], src: '/assets/gallery/virtual-paint.png', likes: 0 },
  { id: 'g3', title: 'Object Detection — Cars', description: 'YOLOv8l with SORT Kalman tracker counting cars crossing a line.', date: '2024-11-01', type: 'video', media_urls: ['/assets/gallery/cv-cars.mp4'], src: '/assets/gallery/cv-cars.mp4', likes: 0 },
  { id: 'g4', title: 'Object Detection — People', description: 'Pedestrian detection and counting via YOLOv8m + SORT, with region masking.', date: '2024-11-05', type: 'video', media_urls: ['/assets/gallery/cv-people.mp4'], src: '/assets/gallery/cv-people.mp4', likes: 0 },
  { id: 'g5', title: 'Object Mask — Car', description: 'Segmentation-style overlay showing YOLOv8 instance masks.', date: '2024-11-08', type: 'image', media_urls: ['/assets/gallery/cv-car-mask.png'], src: '/assets/gallery/cv-car-mask.png', likes: 0 },
  { id: 'g6', title: 'Object Mask — People', description: 'YOLOv8m person masks; each person receives a unique tracking ID via SORT.', date: '2024-11-10', type: 'image', media_urls: ['/assets/gallery/cv-people-mask.png'], src: '/assets/gallery/cv-people-mask.png', likes: 0 },
  { id: 'g7', title: 'Face Detection + Mesh', description: 'MediaPipe Face Mesh with 468 landmarks visualized.', date: '2025-01-12', type: 'video', media_urls: ['/assets/gallery/cv-face-1.mp4'], src: '/assets/gallery/cv-face-1.mp4', likes: 0 },
];
