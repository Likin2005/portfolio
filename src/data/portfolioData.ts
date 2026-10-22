import { Project, SkillCategory, EducationItem, ExperienceItem, AchievementItem } from '../types/portfolio'

export const personalInfo = {
  name: 'Likin M B',
  initials: 'LMB',
  role: 'AI/ML & Backend Software Engineer',
  tagline: 'Engineering scalable backend systems and intelligent AI solutions.',
  bio: `I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at Vidyavardhaka College of Engineering, Mysore. With a strong foundation in Data Structures, Algorithms, and Object-Oriented Systems, I focus on building resilient backend services, high-throughput REST APIs, and practical AI/LLM applications that solve real-world problems.`,
  location: 'Mysore, Karnataka, India',
  email: 'likinmb83@gmail.com',
  github: 'https://github.com/Likin2005',
  linkedin: 'https://www.linkedin.com/in/likin-m-b-664422297',
  cgpa: '8.91',
  degree: 'B.E. in Computer Science (AI & ML)',
  status: 'Open to Software Engineering & AI Internships',
  languages: [
    { name: 'English', level: 'Professional Proficiency' },
    { name: 'Kannada', level: 'Native Speaker' },
    { name: 'Hindi', level: 'Conversational' }
  ],
  interests: [
    'Competitive Programming & DSA',
    'RAG & Multimodal AI Systems',
    'Distributed Backend Architecture',
    'Cricket & Strategy Games',
    'Drawing & Creative Design'
  ]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core algorithmic and systems languages',
    skills: [
      { name: 'C++', description: 'Competitive programming, DSA, memory optimization' },
      { name: 'Python', description: 'Backend development, AI/ML pipelines, scripting' },
      { name: 'C', description: 'Low-level systems, foundational computation' }
    ]
  },
  {
    title: 'Backend & Web Engineering',
    subtitle: 'API design, authentication, and web frameworks',
    skills: [
      { name: 'FastAPI', description: 'Asynchronous microservices, OpenAPI spec' },
      { name: 'Flask', description: 'Lightweight web APIs, AI model serving' },
      { name: 'React', description: 'Component architecture, state management' },
      { name: 'RESTful APIs', description: 'Resource modeling, status codes, idempotency' },
      { name: 'JWT & Auth', description: 'Stateless tokens, role-based access control' },
      { name: 'CRUD Architecture', description: 'Robust data operations and validation' }
    ]
  },
  {
    title: 'Databases & Retrieval',
    subtitle: 'Relational, NoSQL, and vector storage engines',
    skills: [
      { name: 'MySQL (SQL)', description: 'Relational schemas, ACID compliance, queries' },
      { name: 'MongoDB (NoSQL)', description: 'Document stores, flexible collections' },
      { name: 'Vector Retrieval', description: 'Embeddings, similarity search, RAG stores' }
    ]
  },
  {
    title: 'AI, LLMs & Orchestration',
    subtitle: 'Intelligent workflows and generative models',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', description: 'Context injection, vector indexes' },
      { name: 'LLaVA (Multimodal)', description: 'Visual reasoning and verification' },
      { name: 'LangGraph', description: 'Cyclic state machines and agent routing' },
      { name: 'Groq & Llama 3.1', description: 'High-speed LLM inference' },
      { name: 'Vapi & Twilio', description: 'Voice intelligence and telephony automation' }
    ]
  },
  {
    title: 'Computer Science Fundamentals',
    subtitle: 'Theoretical and architectural core',
    skills: [
      { name: 'Data Structures & Algorithms', description: 'Trees, graphs, dynamic programming, sorting' },
      { name: 'Database Management Systems', description: 'Indexing, normalization, transaction isolation' },
      { name: 'Operating Systems', description: 'Processes, concurrency, threads, memory management' },
      { name: 'Computer Networks', description: 'TCP/IP, HTTP/HTTPS, routing protocols' },
      { name: 'Object-Oriented Programming', description: 'Encapsulation, inheritance, design patterns' }
    ]
  },
  {
    title: 'Developer Tools & Practices',
    subtitle: 'Version control and modern engineering workflows',
    skills: [
      { name: 'Git & GitHub', description: 'Branching, code reviews, release workflows' },
      { name: 'Docker', description: 'Containerization, environment parity' },
      { name: 'Postman', description: 'API contract testing and mock servers' },
      { name: 'HTML5 & CSS3', description: 'Semantic markup, responsive layouts' }
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'sustainability-platform',
    title: 'Smart Platform Community for Sustainability',
    subtitle: 'Multimodal AI-Powered Verification Platform',
    category: 'AI & ML',
    featured: true,
    summary: 'An intelligent platform incentivizing sustainable actions through automated multimodal AI verification with RAG and LLaVA.',
    problem: 'Manual verification of community eco-friendly activities (such as recycling, conservation, or tree planting) is slow, susceptible to fraud, and does not scale across large communities.',
    solution: 'Engineered a modern web platform integrating Retrieval-Augmented Generation (RAG) to dynamically query sustainability rules and LLaVA (Large Language and Vision Assistant) to inspect and validate user-submitted photographic proof.',
    architectureDetails: [
      'Implemented RAG architecture with vector retrieval to evaluate user submissions against benchmark environmental criteria.',
      'Integrated LLaVA vision-language model for automated image feature extraction and verification.',
      'Constructed a resilient Flask backend handling authentication, validation endpoints, and community scoring.',
      'Designed responsive interfaces facilitating seamless activity upload and transparent verification feedback.'
    ],
    technologies: ['Python', 'Flask', 'RAG', 'LLaVA', 'Vector Retrieval', 'AI Models', 'REST APIs'],
    githubUrl: 'https://github.com/Likin2005/Smart-Platform-Community-for-Sustainability-LLM-powered-',
    metricsOrHighlights: [
      'Automated visual verification reducing manual audit time',
      'Context-aware scoring powered by dynamic RAG guidelines',
      'Modular REST backend ready for multi-tenant community scale'
    ]
  },
  {
    id: 'logistic-command-voice',
    title: 'Logistic Command Voice Intelligence',
    subtitle: 'Autonomous AI Voice Agent for Supply Chain Workflows',
    category: 'AI & ML',
    featured: true,
    summary: 'A real-time, voice-activated logistics operations system automating dispatch coordination, shipment queries, and workflow triggers.',
    problem: 'Logistics coordinators waste valuable hours manually dialing carriers, confirming transit status, and inputting dispatch updates into fragmented tracking systems.',
    solution: 'Designed an intelligent voice automation pipeline utilizing FastAPI, LangGraph state-machines, and Groq-hosted Llama 3.1 to conduct natural telephony conversations via Vapi and Twilio, directly updating MongoDB in real time.',
    architectureDetails: [
      'Orchestrated deterministic query execution and conversational state management using LangGraph.',
      'Leveraged ultra-low-latency Llama 3.1 inference via Groq for natural, human-like voice conversations.',
      'Configured bi-directional telephony pipelines with Vapi API and Twilio integration.',
      'Built high-performance asynchronous REST endpoints in FastAPI backed by MongoDB persistence.'
    ],
    technologies: ['FastAPI', 'LangGraph', 'Llama 3.1', 'Groq', 'Vapi API', 'Twilio', 'MongoDB', 'React', 'Python'],
    metricsOrHighlights: [
      'Hands-free vocal status retrieval and updates for dispatchers',
      'Real-time synchronization between phone calls and backend database',
      'Predictable state-graph routing with autonomous fallback mechanisms'
    ]
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    subtitle: 'Full-Stack Clinical & Administrative Workflow Engine',
    category: 'Full-Stack',
    featured: true,
    summary: 'An end-to-end hospital operational system with role-based access for patient records, appointment scheduling, billing, and doctor management.',
    problem: 'Healthcare organizations often struggle with disconnected manual record-keeping, leading to scheduling collisions, delayed patient care, and administrative errors.',
    solution: 'Built a robust full-stack web application pairing React with a Flask RESTful API and a normalized MySQL relational database, ensuring ACID compliance and seamless hospital operations.',
    architectureDetails: [
      'Designed role-based access control (RBAC) ensuring discrete portals for doctors, patients, and administrative staff.',
      'Structured normalized relational schema in MySQL supporting transactional appointments and billing records.',
      'Developed comprehensive RESTful CRUD endpoints with backend data validation and error handling.',
      'Crafted an intuitive, accessible React frontend facilitating rapid record search and schedule management.'
    ],
    technologies: ['React', 'Python', 'Flask', 'MySQL', 'REST APIs', 'JWT', 'HTML5', 'CSS3'],
    metricsOrHighlights: [
      'Zero-collision appointment scheduling engine with ACID compliance',
      'Structured patient audit trail from registration through billing',
      'Role-governed dashboard views for clinicians and administrators'
    ]
  },
  {
    id: 'event-manager',
    title: 'Event-Manager',
    subtitle: 'Centralized Event Logistics & Registration Platform',
    category: 'Backend & APIs',
    featured: false,
    summary: 'A specialized event management utility engineered to streamline participant registrations, capacity limits, and departmental club schedules.',
    problem: 'Managing campus events using ad-hoc spreadsheets creates communication bottlenecks, duplicate registrations, and administrative friction.',
    solution: 'Constructed a dedicated event management solution automating participant signups, attendance tracking, and event schedules, directly informed by real-world leadership as Vector Flow Event Head.',
    architectureDetails: [
      'Engineered backend endpoints to handle event creation, participant registration, and capacity tracking.',
      'Integrated validation routines preventing duplicate registrations and enforcing participation quotas.',
      'Designed clean data structures to maintain event timetables and attendee lists.'
    ],
    technologies: ['Python', 'REST APIs', 'Git', 'Responsive Web'],
    githubUrl: 'https://github.com/Likin2005/Event-Manager',
    metricsOrHighlights: [
      'Created to address real-world collegiate event coordination needs',
      'Automated attendee list generation and capacity cap management'
    ]
  }
]

export const education: EducationItem[] = [
  {
    institution: 'Vidyavardhaka College of Engineering',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
    score: '8.91 CGPA',
    scoreLabel: 'Current CGPA',
    period: '2023 — 2027',
    location: 'Mysore, Karnataka',
    highlights: [
      'Specialized coursework in AI/ML, Data Structures & Algorithms, Database Systems, and Operating Systems',
      'Appointed Academic Peer Tutor for DSA, DBMS, Advanced Java, and Design & Analysis of Algorithms',
      'Active leadership as Event Head and Core Member of Vector Flow student technical organization',
      'Consistently ranked among top academic performers in the department'
    ]
  },
  {
    institution: 'Pramati Hillview Academy',
    degree: 'Senior Secondary & Secondary Education',
    field: 'PCMB (Physics, Chemistry, Mathematics, Biology) — CBSE Board',
    score: '86.6% (12th) | 92.2% (10th)',
    scoreLabel: 'CBSE Scores',
    period: '2020 — 2023',
    location: 'Mysuru, Karnataka',
    highlights: [
      'Strong academic foundation in advanced mathematics, analytical reasoning, and scientific methodology',
      'Graduated with distinction in CBSE Class X (92.2%) and CBSE Class XII PCMB (86.6%)',
      'Active participant in inter-school science and computational events'
    ]
  }
]

export const experiences: ExperienceItem[] = [
  {
    role: 'Event Head & Core Member',
    organization: 'Vector Flow Club — VVCE',
    period: '2024 — Present',
    category: 'Leadership',
    description: 'Directed the event planning, execution, and student engagement for one of the college\'s leading technical clubs.',
    achievements: [
      'Spearheaded the planning, coordination, and flawless execution of multi-format campus technical events and workshops.',
      'Conducted orientation and onboarding programs to mentor junior students and integrate them into active club initiatives.',
      'Managed cross-functional student teams across logistics, promotions, and technical setup.'
    ],
    tags: ['Leadership', 'Event Management', 'Mentorship', 'Public Speaking', 'Team Coordination']
  },
  {
    role: 'Academic Peer Tutor',
    organization: 'Department of Computer Science & Engineering — VVCE',
    period: '2024 — Present',
    category: 'Academic',
    description: 'Selected by faculty to provide academic tutoring and problem-solving mentorship to undergraduate peers.',
    achievements: [
      'Mentored students in core computational subjects: Data Structures & Algorithms (DSA), DBMS, Advanced Java, and Design & Analysis of Algorithms (DAA).',
      'Conducted targeted problem-solving sessions focusing on algorithmic thinking, edge-case analysis, and exam preparation.',
      'Assisted students in breaking down complex theoretical proofs and practical database queries into intuitive concepts.'
    ],
    tags: ['DSA', 'DBMS', 'DAA', 'Advanced Java', 'Teaching & Pedagogy', 'Problem Solving']
  }
]

export const achievements: AchievementItem[] = [
  {
    title: 'CodeHunt Competition',
    award: '1st Prize Winner',
    competition: 'National-Level Inter-College Coding Competition',
    level: 'National Level',
    description: 'Clinched the championship trophy by outperforming competitors across multiple rounds of challenging algorithmic problem-solving and optimization problems.',
    keyTakeaway: 'Demonstrated superior proficiency in time-critical algorithm design, data structures, and edge-case testing.',
    tags: ['1st Place', 'Competitive Programming', 'National Level', 'Algorithms']
  },
  {
    title: 'CodeOfDuty Competition',
    award: '3rd Prize Winner',
    competition: 'Inter-College Competitive Programming Sprint',
    level: 'Inter-College',
    description: 'Secured 3rd place in an intensive competitive coding challenge testing speed, accuracy, and algorithmic implementation across tough test suites.',
    keyTakeaway: 'High-speed problem breakdown and accurate implementation under strict clock constraints.',
    tags: ['Podium Finish', 'Data Structures', 'Algorithmic Optimization']
  },
  {
    title: 'CodeBuddy Competition',
    award: 'Cash Prize Recipient',
    competition: 'DSA & Problem-Solving Championship',
    level: 'College / Regional',
    description: 'Awarded an honorable cash prize for standout performance in the CodeBuddy competitive programming contest, showcasing deep mastery of core DSA.',
    keyTakeaway: 'Recognized for elegant and optimal algorithmic solutions in dynamic programming and tree traversals.',
    tags: ['Cash Award', 'DSA Mastery', 'Problem Solving']
  }
]
