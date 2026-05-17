import { Language } from "@/contexts/LanguageContext";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation & Header
    home: "Home",
    services: "Services",
    career: "Career",
    contact: "Contact",
    getInTouch: "GET IN TOUCH",
    language: "Language",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Level 1 BBBEE",
    phone: "Phone",
    email: "Email",
    company: "Company",
    privacyTerms: "Privacy & Terms",
    copyright: "EHL Engineering Group",

    // Index Page - Mission Statement
    whoWeAre: "Who we are",
    missionStatement:
      "As a multi-disciplinary project delivery house, we operate in all industries in which we deliver engineering, construction and project management with ongoing operational support. We assume professional and operational responsibility and work hard to mitigate risk when developing, managing and maintaining projects for our clients.",
    missionStatement2:
      "What began as a small South African engineering firm is now a leader in the field of engineering, procurement and construction management (EPCM), and engineering, procurement and construction services (EPC). From concept to design, commissioning and project handover, after service maintenance and support, the EHL Engineering Group is known for delivering turnkey solutions tailored to our clients' needs. Our unique end-to-end approach ensures transparent and efficient project management, providing peace-of-mind along the value chain.",

    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "EHL seeks to offer our clients more than just a standard project-house experience. Our focus is on understanding our client's needs while creating strong partnerships so that our engineering solutions are not only designed safe but also designed to budget.",
    consulting: "Consulting & Studies",
    consultingDesc:
      "Concept Studies, Feasibility Studies, Statutory Approvals and Utility Approvals — comprehensive pre-project consulting to ensure every project starts on solid ground.",
    projectManagement: "Project Management",
    projectManagementDesc:
      "Full EPCM & EPC project management spanning the entire lifecycle. We utilise Earned Value Management (EVM) to track and control projects with rigorous Schedule, Cost, Procurement, Contract and Safety Management.",
    people: "People",
    peopleDesc:
      "Providing top talent across the engineering field — Secondment, Partnership, Owner's Teams and Construction resources. 350+ experienced professionals dedicated to delivering world-class engineering outcomes.",
    powerGeneration: "Power Generation",
    powerGenerationDesc:
      "Complete renewable and conventional power generation solutions: Solar, Wind, Biomass, Gas, BESS, Hydro and Hybrid. Committed to driving the transition to a sustainable energy future.",
    mining: "Mining & Industrial",
    miningDesc:
      "Bespoke solutions for mining and industrial plants — New Builds, Upgrades, Life Extension, Smart Engineering, Modular Plants and Energy Efficiency Optimisation.",
    manufacturing: "Manufacturing",
    manufacturingDesc:
      "Panel Assembly of MCCs, Panels & E-houses, Design, Supply & Assembly, Installation, and Commissioning. Fully IEC 61439 compliant with Schneider, Siemens and ABB switchgear.",
    transmission: "Transmission & Distribution",
    transmissionDesc:
      "Overhead Lines, Substations and Grid Compliance — tailored T&D services delivering innovative solutions that optimise performance, reliability and sustainability.",
    operations: "Operations & Maintenance",
    operationsDesc:
      "Comprehensive O&M services ensuring peak asset performance, minimal downtime and maximum lifespan. Ongoing operational support delivered by experienced on-site teams.",

    // Project Stats & Company Facts
    projectsTitle: "Projects",
    international: "International",
    southAfrica: "South Africa",
    employeesLabel: "Experienced Employees",
    decadesLabel: "Decades of Engineering Excellence",
    projectsLabel: "Projects Delivered",
    happyClientsLabel: "Happy Clients",
    ltiManhoursLabel: "LTI-Free Manhours",

    // Our Strategy
    ourStrategy: "Our Strategy",
    consultStrategy: "Consult",
    consultStrategyDesc: "Communication is key for our experienced consultants, in order to understand client requirements and expectations. We take the time to truly know your project before any design begins.",
    designStrategy: "Design",
    designStrategyDesc: "Creating world-class solutions to not only meet, but exceed client expectations. Our multi-disciplinary design teams leverage the latest tools including BIM, ETAP, AutoCAD, Revit and DigSilent.",
    constructStrategy: "Construct",
    constructStrategyDesc: "Our project teams build and deliver the results and value needed to optimise operations — on time, within budget, and to the highest safety and quality standards.",

    // Our Results
    ourResults: "Our Results",

    // Designed Safe Section
    designedSafeTag: "Safety Culture",
    designedSafe: "Designed Safe",
    designedSafeDesc: "At EHL, safety is non-negotiable. Every action, no matter how small, contributes to our overall safety culture. It's about looking out for one another, speaking up when something doesn't seem right, and going above and beyond to ensure that everyone returns home safely. In 2025, EHL reached a new milestone of 3.5 million LTI-free manhours — a testament to our unwavering commitment.",

    // Team Work Section
    teamWork: "Designed Safe",
    teamWorkDesc:
      "At EHL, safety is non-negotiable. Every action, no matter how small, contributes to our overall safety culture. It's about looking out for one another, speaking up when something doesn't seem right, and going above and beyond to ensure that everyone returns home safely.",
    moreAboutUs: "More about us",

    // CEO Quote
    ceoQuote:
      "Integrity — Honest and transparent in all dealings. With Safety at the forefront of every decision, we build trust through ethical practices and unwavering commitment to the well-being of our teams, partners, and communities. Our people are our greatest asset and our projects are our legacy.",
    ceoName: "Conrad Stark",
    ceoTitle: "Group CEO",

    // Core Values
    ourCoreValues: "Our core values",
    sustainability: "Sustainability",
    sustainabilityDesc: "Committed to environmental responsibility",
    safety: "Safety",
    safetyDesc: "Prioritizing well-being and security in all operations",
    innovation: "Innovation",
    innovationDesc: "Pioneering solutions for renewable energy",
    collaboration: "Collaboration",
    collaborationDesc: "Working together for greater impact",
    empowerment: "Empowerment",
    empowermentDesc: "Enabling communities and organizations",

    // CTA Section
    ctaHeading:
      "Ready to deliver your next project with confidence?",
    ctaSubheading:
      "From concept to commissioning, EHL Engineering Group brings 4 decades of expertise to every challenge. Let's build something exceptional together.",

    // Contact Page
    contactTitle: "Contact",
    contactFormTitle: "Get in Touch",
    contactFormDesc:
      "Have questions or ready to start your next project? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.",
    visitUs: "Visit Us",
    visitUsDesc:
      "Whether you're exploring partnership opportunities or discussing a potential project, our teams are ready to connect with you.",

    // Contact Form Labels
    fullName: "Full Name",
    emailAddress: "Email",
    phoneNumber: "Phone Number",
    companyName: "Company",
    subject: "Subject",
    message: "Message",
    selectSubject: "Select a subject",
    consulting_subject: "Consulting Services",
    engineering_subject: "Engineering & Construction",
    projectManagement_subject: "Project Management",
    operations_subject: "Operations & Maintenance",
    general: "General Inquiry",
    other: "Other",
    sendMessage: "Send Message",
    thankYou: "Thank you for your message!",
    thankYouDesc: "We'll get back to you as soon as possible.",

    // Office Information
    headOffice: "Head Office",
    pretoria: "Pretoria",
    projectManagementTeam: "Project Management",
    miningOps: "Mining Operations",
    regionalLeadership: "Regional Leadership",
    timezone: "Timezone",
    SAST: "SAST (UTC+2)",
    team: "Team",
    teamSize_45: "45+ professionals",
    teamSize_20: "20+ professionals",
    teamSize_25: "25+ professionals",
    description_jo:
      "Our South Africa headquarters serves as the hub for our operations across the continent, supporting projects in renewable energy, mining, and industrial sectors.",
    description_ct:
      "Our Centurion office supports project delivery and management across the Gauteng region with focused expertise in engineering solutions.",
    description_rb:
      "Our Rustenburg office specializes in mining and industrial projects, serving the resource sector across the North West region.",
  },
  zh: {
    // Navigation & Header
    home: "首页",
    services: "服务",
    career: "职业",
    contact: "联系",
    getInTouch: "联系我们",
    language: "语言",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "第1级BBBEE",
    phone: "电话",
    email: "电子邮件",
    company: "公司",
    privacyTerms: "隐私和条款",
    copyright: "EHL工程集团",

    // Index Page - Mission Statement
    whoWeAre: "我们是谁",
    missionStatement:
      "作为多学科项目交付公司，我们在所有行业中运营，提供工程、建筑和项目管理，以及持续的运营支持。我们承担专业和运营责任，并努力在开发、管理和维护客户项目时降低风险。我们提供全面的设计专业知识，例如定制供应和优化解决方案，涵盖所有全球部门，同时也为多学科交钥匙项目提供解决方案。",

    // Services Section
    servicesTitle: "服务",
    consulting: "咨询与研究",
    consultingDesc:
      "全面的咨询服务，包括可行性研究、技术评估和全球工程项目的战略规划。",
    projectManagement: "项目管理",
    projectManagementDesc:
      "专业的项目管理，按时按预算交付。从规划到执行，我们通过严格的监督确保项目成功。",
    people: "人才",
    peopleDesc:
      "我们的才华横溢的工程师和专业人士团队在跨所有部门提供世界级工程解决方案方面拥有数十年的综合经验。",
    powerGeneration: "电力生成",
    powerGenerationDesc:
      "完整的电力生成解决方案，包括可再生能源和常规能源设施的设计、建筑和优化。",
    mining: "采矿和工业",
    miningDesc:
      "采矿和工业工厂的专门解决方案，包括设备、基础设施开发和运营优化。",
    manufacturing: "制造",
    manufacturingDesc:
      "全方位的制造支持，涵盖设施设计、自动化系统、质量控制和生产优化。",
    transmission: "传输和分配",
    transmissionDesc:
      "电力传输和配电基础设施的设计、安装和维护，确保可靠的电力传输。",
    operations: "运营与维护",
    operationsDesc:
      "全面的运维服务，通过预防性维护计划确保最高性能、最小化停机时间和最大化资产寿命。",

    // Project Stats
    projectsTitle: "项目",
    international: "国际",
    southAfrica: "南非",

    // Team Work Section
    teamWork: "团队合作",
    teamWorkDesc:
      "我们的团队在地理位置上无缝协作，提供由本地执行专业知识支持的集中式技术领导。无论是交付变电站、传输基础设施、流程工厂还是可再生能源设施，我们都结合了工程卓越性与负责任的、前瞻性的发展——确保每项资产安全、高效且能够为几代人表现。",
    moreAboutUs: "了解更多关于我们的信息",

    // CEO Quote
    ceoQuote:
      "诚正——在所有交易中诚实透明。安全处于每一项决策的最前沿，我们通过道德实践和对我们团队、合作伙伴和社区福祉的坚定承诺来建立信任。",
    ceoName: "康拉德·斯塔克",
    ceoTitle: "集团首席执行官",

    // Core Values
    ourCoreValues: "我们的核心价值观",
    sustainability: "可持续发展",
    sustainabilityDesc: "致力于环境责任",
    safety: "安全",
    safetyDesc: "优先考虑所有运营中的福祉和安全",
    innovation: "创新",
    innovationDesc: "为可再生能源开拓解决方案",
    collaboration: "协作",
    collaborationDesc: "携手合作以取得更大影响",
    empowerment: "权能",
    empowermentDesc: "赋予社区和组织权能",

    // CTA Section
    ctaHeading: "加入我们的旅程，走向更清洁、更绿色和更可持续的世界。",
    ctaSubheading: "我们可以共同产生积极影响并为子孙后代留下持久的遗产。",

    // Contact Page
    contactTitle: "联系",
    contactFormTitle: "获取联系",
    contactFormDesc:
      "有疑问或准备好开始您的下一个项目吗？我们很乐意听到您的意见。请填写下面的表格，我们的团队会尽快回复您。",
    visitUs: "访问我们",
    visitUsDesc:
      "无论您是在探索合作机会还是讨论潜在项目，我们的团队都已准备好与您联系。",

    // Contact Form Labels
    fullName: "全名",
    emailAddress: "电子邮件",
    phoneNumber: "电话号码",
    companyName: "公司",
    subject: "主题",
    message: "消息",
    selectSubject: "选择一个主题",
    consulting_subject: "咨询服务",
    engineering_subject: "工程与建筑",
    projectManagement_subject: "项目管理",
    operations_subject: "运营与维护",
    general: "一般查询",
    other: "其他",
    sendMessage: "发送消息",
    thankYou: "感谢您的消息！",
    thankYouDesc: "我们会尽快回复您。",

    // Office Information
    headOffice: "总部",
    pretoria: "比勒陀利亚",
    projectManagementTeam: "项目管理",
    miningOps: "采矿运营",
    regionalLeadership: "区域领导",
    timezone: "时区",
    SAST: "SAST (UTC+2)",
    team: "团队",
    teamSize_45: "45+名专业人士",
    teamSize_20: "20+名专业人士",
    teamSize_25: "25+名专业人士",
    description_jo:
      "我们的南非总部是我们在整个大陆业务的枢纽，支持可再生能源、采矿和工业部门的项目。",
    description_ct:
      "我们的世纪城办公室支持高陶地区的项目交付和管理，具有工程解决方案的专业知识。",
    description_rb:
      "我们的鲁斯坦堡办公室专门从事采矿和工业项目，为西北地区的资源部门提供服务。",
  },
  fr: {
    // Navigation & Header
    home: "Accueil",
    services: "Services",
    career: "Carrière",
    contact: "Contact",
    getInTouch: "NOUS CONTACTER",
    language: "Langue",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Niveau 1 BBBEE",
    phone: "Téléphone",
    email: "E-mail",
    company: "Entreprise",
    privacyTerms: "Confidentialité et conditions",
    copyright: "Groupe EHL Engineering",

    // Index Page - Mission Statement
    whoWeAre: "Qui sommes-nous",
    missionStatement:
      "En tant que maison de livraison pluridisciplinaire, nous opérons dans tous les secteurs dans lesquels nous fournissons l'ingénierie, la construction et la gestion de projet avec un soutien opérationnel continu. Nous assumons la responsabilité professionnelle et opérationnelle et nous nous efforçons d'atténuer les risques lors du développement, de la gestion et de la maintenance des projets pour nos clients. Fournir une expertise de conception complète telle que des solutions d'approvisionnement personnalisées et des solutions d'optimisation dans tous les secteurs mondiaux tout en fournissant également des solutions pour les projets clé en main multidisciplinaires.",

    // Services Section
    servicesTitle: "Services",
    consulting: "Consulting et études",
    consultingDesc:
      "Services de conseil complets, y compris études de faisabilité, évaluations techniques et planification stratégique pour les projets d'ingénierie dans le monde.",
    projectManagement: "Gestion de projet",
    projectManagementDesc:
      "Gestion de projet experte livrée à temps et dans les limites du budget. De la planification à l'exécution, nous assurons le succès du projet avec une surveillance rigoureuse.",
    people: "Personnes",
    peopleDesc:
      "Notre équipe de talents composée d'ingénieurs et de professionnels apporte des décennies d'expérience combinée dans la fourniture de solutions d'ingénierie de classe mondiale dans tous les secteurs.",
    powerGeneration: "Production d'énergie",
    powerGenerationDesc:
      "Solutions complètes de production d'énergie, y compris la conception, la construction et l'optimisation des installations d'énergie renouvelable et conventionnelle.",
    mining: "Exploitation minière et industrie",
    miningDesc:
      "Solutions spécialisées pour les mines et les usines industrielles, y compris l'équipement, le développement des infrastructures et l'optimisation opérationnelle.",
    manufacturing: "Fabrication",
    manufacturingDesc:
      "Support complet de la fabrication couvrant la conception des installations, les systèmes d'automatisation, le contrôle qualité et l'optimisation de la production.",
    transmission: "Transport et distribution",
    transmissionDesc:
      "Conception, installation et maintenance des infrastructures de transport et de distribution d'électricité pour une transmission fiable de l'électricité.",
    operations: "Exploitation et maintenance",
    operationsDesc:
      "Services complets d'O&M assurant les performances maximales, le temps d'arrêt minimal et la durée de vie maximale des actifs par le biais de programmes de maintenance préventive.",

    // Project Stats
    projectsTitle: "Projets",
    international: "International",
    southAfrica: "Afrique du Sud",

    // Team Work Section
    teamWork: "Travail d'équipe",
    teamWorkDesc:
      "Nos équipes travaillent de manière fluide entre les géographies, fournissant un leadership technique centralisé soutenu par une expertise d'exécution locale. Qu'il s'agisse de livrer des postes de transformation, des infrastructures de transport, des usines de traitement ou des installations d'énergie renouvelable, nous combinons l'excellence d'ingénierie avec un développement responsable et avant-gardiste — assurant que chaque actif est sûr, efficace et construit pour fonctionner pendant des générations.",
    moreAboutUs: "En savoir plus sur nous",

    // CEO Quote
    ceoQuote:
      "Intégrité — Honnête et transparent dans toutes les transactions. Avec la sécurité à l'avant-garde de chaque décision, nous établissons la confiance par le biais de pratiques éthiques et d'un engagement inébranlable envers le bien-être de nos équipes, partenaires et communautés.",
    ceoName: "Conrad Stark",
    ceoTitle: "PDG Groupe",

    // Core Values
    ourCoreValues: "Nos valeurs fondamentales",
    sustainability: "Durabilité",
    sustainabilityDesc:
      "Engagé en faveur de la responsabilité environnementale",
    safety: "Sécurité",
    safetyDesc:
      "Prioriser le bien-être et la sécurité dans toutes les opérations",
    innovation: "Innovation",
    innovationDesc: "Solutions pionnières pour l'énergie renouvelable",
    collaboration: "Collaboration",
    collaborationDesc: "Travailler ensemble pour un plus grand impact",
    empowerment: "Autonomisation",
    empowermentDesc: "Autonomiser les communautés et les organisations",

    // CTA Section
    ctaHeading:
      "Rejoignez-nous dans notre voyage vers un monde plus propre, plus vert et plus durable.",
    ctaSubheading:
      "Ensemble, nous pouvons avoir un impact positif et laisser un héritage durable aux générations futures.",

    // Contact Page
    contactTitle: "Contact",
    contactFormTitle: "Nous joindre",
    contactFormDesc:
      "Vous avez des questions ou êtes prêt à commencer votre prochain projet? Nous serions ravi d'avoir de vos nouvelles. Remplissez le formulaire ci-dessous et notre équipe vous répondra bientôt.",
    visitUs: "Visitez-nous",
    visitUsDesc:
      "Que vous exploriez les opportunités de partenariat ou que vous discutiez d'un projet potentiel, nos équipes sont prêtes à vous contacter.",

    // Contact Form Labels
    fullName: "Nom complet",
    emailAddress: "E-mail",
    phoneNumber: "Numéro de téléphone",
    companyName: "Entreprise",
    subject: "Sujet",
    message: "Message",
    selectSubject: "Sélectionnez un sujet",
    consulting_subject: "Services de consulting",
    engineering_subject: "Ingénierie et construction",
    projectManagement_subject: "Gestion de projet",
    operations_subject: "Exploitation et maintenance",
    general: "Demande générale",
    other: "Autre",
    sendMessage: "Envoyer le message",
    thankYou: "Merci pour votre message!",
    thankYouDesc: "Nous vous répondrons dans les plus brefs délais.",

    // Office Information
    headOffice: "Siège social",
    pretoria: "Pretoria",
    projectManagementTeam: "Gestion de projet",
    miningOps: "Opérations minières",
    regionalLeadership: "Leadership régional",
    timezone: "Fuseau horaire",
    SAST: "SAST (UTC+2)",
    team: "Équipe",
    teamSize_45: "45+ professionnels",
    teamSize_20: "20+ professionnels",
    teamSize_25: "25+ professionnels",
    description_jo:
      "Notre siège social en Afrique du Sud est le centre névralgique de nos opérations sur le continent, soutenant les projets dans les secteurs des énergies renouvelables, de l'exploitation minière et de l'industrie.",
    description_ct:
      "Notre bureau de Centurion soutient la livraison et la gestion des projets dans la région du Gauteng avec une expertise spécialisée dans les solutions d'ingénierie.",
    description_rb:
      "Notre bureau de Rustenburg se spécialise dans les projets d'exploitation minière et industriels, servant le secteur des ressources dans la région du Nord-Ouest.",
  },
  de: {
    // Navigation & Header
    home: "Startseite",
    services: "Dienstleistungen",
    career: "Karriere",
    contact: "Kontakt",
    getInTouch: "KONTAKTIEREN SIE UNS",
    language: "Sprache",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Stufe 1 BBBEE",
    phone: "Telefon",
    email: "E-Mail",
    company: "Unternehmen",
    privacyTerms: "Datenschutz und Bedingungen",
    copyright: "EHL Engineering Group",

    // Index Page - Mission Statement
    whoWeAre: "Wer wir sind",
    missionStatement:
      "Als multidisziplinäres Projektabwicklungsunternehmen arbeiten wir in allen Branchen, in denen wir Ingenieurwesen, Bauwesen und Projektmanagement mit laufender operativer Unterstützung erbringen. Wir tragen professionelle und betriebliche Verantwortung und arbeiten hart daran, Risiken bei der Entwicklung, Verwaltung und Wartung von Projekten für unsere Kunden zu mindern. Bereitstellung umfassender Designkompetenz wie maßgeschneiderte Versorgungslösungen und Optimierungslösungen in allen globalen Sektoren sowie Lösungen für multidisziplinäre Schlüsselfertigprojekte.",

    // Services Section
    servicesTitle: "Dienstleistungen",
    consulting: "Beratung und Studien",
    consultingDesc:
      "Umfassende Beratungsdienstleistungen, einschließlich Machbarkeitsstudien, technische Bewertungen und strategische Planung für Ingenieurprojekte weltweit.",
    projectManagement: "Projektmanagement",
    projectManagementDesc:
      "Professionelles Projektmanagement liefert pünktlich und im Budget. Von der Planung bis zur Ausführung stellen wir den Projekterfolg durch strenge Überwachung sicher.",
    people: "Personen",
    peopleDesc:
      "Unser talentiertes Team von Ingenieuren und Fachleuten verfügt über jahrzehntelange kombinierte Erfahrung bei der Bereitstellung erstklassiger Ingenieurl ösungen in allen Sektoren.",
    powerGeneration: "Stromerzeugung",
    powerGenerationDesc:
      "Komplette Stromerzeugun gslösungen, einschließlich Entwurf, Konstruktion und Optimierung von Anlagen für erneuerbare und konventionelle Energien.",
    mining: "Bergbau & Industrie",
    miningDesc:
      "Spezialisierte Lösungen für Bergbau- und Industrieanlagen, einschließlich Ausrüstung, Infrastrukturentwicklung und operativer Optimierung.",
    manufacturing: "Fertigung",
    manufacturingDesc:
      "Umfassende Fertigungsunterstützung, die Anlagenplanung, Automatisierungssysteme, Qualitätskontrolle und Produktionsoptimierung abdeckt.",
    transmission: "Übertragung und Verteilung",
    transmissionDesc:
      "Gestaltung, Installation und Wartung von Stromübertragungs- und Verteilungsinfrastruktur für eine zuverlässige Stromversorgung.",
    operations: "Betrieb und Wartung",
    operationsDesc:
      "Umfassende O&M-Dienstleistungen, die durch vorbeugende Wartungsprogramme maximale Leistung, minimale Ausfallzeiten und maximale Lebensdauer der Anlagen gewährleisten.",

    // Project Stats
    projectsTitle: "Projekte",
    international: "International",
    southAfrica: "Südafrika",

    // Team Work Section
    teamWork: "Teamarbeit",
    teamWorkDesc:
      "Unsere Teams arbeiten nahtlos über Geographien hinweg zusammen und bieten zentrale technische Führung, die durch lokale Ausführungskompetenz gestützt wird. Ganz gleich, ob wir Umspannwerke, Übertragungsinfrastrukturen, Verarbeitungsanlagen oder Anlagen für erneuerbare Energien liefern, wir verbinden technische Exzellenz mit verantwortungsvoller, zukunftsorientierter Entwicklung – wir stellen sicher, dass jeder Vermögenswert sicher, effizient und für Generationen ausgelegt ist.",
    moreAboutUs: "Mehr über uns",

    // CEO Quote
    ceoQuote:
      "Integrität — Ehrlich und transparent in allen Transaktionen. Mit Sicherheit an erster Stelle jeder Entscheidung schaffen wir Vertrauen durch ethische Praktiken und unbeugsames Engagement für das Wohlbefinden unserer Teams, Partner und Gemeinden.",
    ceoName: "Conrad Stark",
    ceoTitle: "Gruppen-Geschäftsführer",

    // Core Values
    ourCoreValues: "Unsere Kernwerte",
    sustainability: "Nachhaltigkeit",
    sustainabilityDesc: "Engagement für Umweltverantwortung",
    safety: "Sicherheit",
    safetyDesc:
      "Gewährleistung des Wohlbefindens und der Sicherheit in allen Vorgängen",
    innovation: "Innovation",
    innovationDesc: "Bahnbrechende Lösungen für erneuerbare Energien",
    collaboration: "Zusammenarbeit",
    collaborationDesc: "Zusammenarbeit für größere Auswirkungen",
    empowerment: "Befähigung",
    empowermentDesc: "Befähigung von Gemeinden und Organisationen",

    // CTA Section
    ctaHeading:
      "Begleiten Sie uns auf unserer Reise zu einer sauberen, grüneren und nachhaltigeren Welt.",
    ctaSubheading:
      "Gemeinsam können wir einen positiven Einfluss nehmen und ein bleibendes Erbe für zukünftige Generationen hinterlassen.",

    // Contact Page
    contactTitle: "Kontakt",
    contactFormTitle: "Nehmen Sie Kontakt auf",
    contactFormDesc:
      "Haben Sie Fragen oder sind Sie bereit, Ihr nächstes Projekt zu starten? Wir würden uns freuen, von Ihnen zu hören. Bitte füllen Sie das folgende Formular aus und unser Team wird sich in Kürze bei Ihnen melden.",
    visitUs: "Besuchen Sie uns",
    visitUsDesc:
      "Ganz gleich, ob Sie Partnerschafsmöglichkeiten erkunden oder ein mögliches Projekt besprechen, unsere Teams sind bereit, sich mit Ihnen in Verbindung zu setzen.",

    // Contact Form Labels
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail",
    phoneNumber: "Telefonnummer",
    companyName: "Unternehmen",
    subject: "Betreff",
    message: "Nachricht",
    selectSubject: "Wählen Sie ein Thema",
    consulting_subject: "Beratungsdienstleistungen",
    engineering_subject: "Ingenieurwesen und Konstruktion",
    projectManagement_subject: "Projektmanagement",
    operations_subject: "Betrieb und Wartung",
    general: "Allgemeine Anfrage",
    other: "Sonstiges",
    sendMessage: "Nachricht senden",
    thankYou: "Danke für deine Nachricht!",
    thankYouDesc: "Wir werden uns baldmöglichst bei Ihnen melden.",

    // Office Information
    headOffice: "Zentrale",
    pretoria: "Pretoria",
    projectManagementTeam: "Projektmanagement",
    miningOps: "Bergbaubetriebe",
    regionalLeadership: "Regionale Führung",
    timezone: "Zeitzone",
    SAST: "SAST (UTC+2)",
    team: "Team",
    teamSize_45: "45+ Fachleute",
    teamSize_20: "20+ Fachleute",
    teamSize_25: "25+ Fachleute",
    description_jo:
      "Unser Hauptsitz in Südafrika ist der Drehpunkt für unsere Aktivitäten auf dem gesamten Kontinent und unterstützt Projekte im Bereich erneuerbare Energien, Bergbau und Industrie.",
    description_ct:
      "Unser Büro in Centurion unterstützt die Projektabwicklung und Verwaltung in der Gauteng-Region mit spezialisierter Kompetenz in Ingenieurlösungen.",
    description_rb:
      "Unser Büro in Rustenburg spezialisiert sich auf Bergbau- und Industrieprojekte und betreut den Ressourcensektor in der Region Nordwesten.",
  },
  es: {
    // Navigation & Header
    home: "Inicio",
    services: "Servicios",
    career: "Carrera",
    contact: "Contacto",
    getInTouch: "CONTÁCTENOS",
    language: "Idioma",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Nivel 1 BBBEE",
    phone: "Teléfono",
    email: "Correo electrónico",
    company: "Empresa",
    privacyTerms: "Privacidad y términos",
    copyright: "Grupo de Ingeniería EHL",

    // Index Page - Mission Statement
    whoWeAre: "Quiénes somos",
    missionStatement:
      "Como empresa de entrega de proyectos multidisciplinaria, operamos en todas las industrias en las que entregamos ingeniería, construcción y gestión de proyectos con apoyo operativo continuo. Asumimos responsabilidad profesional y operativa y trabajamos duro para mitigar riesgos al desarrollar, gestionar y mantener proyectos para nuestros clientes. Proporcionamos experiencia integral de diseño como soluciones de suministro personalizadas y soluciones de optimización en todos los sectores globales, al mismo tiempo que proporcionamos soluciones para proyectos llave en mano multidisciplinarios.",

    // Services Section
    servicesTitle: "Servicios",
    consulting: "Consultoría y Estudios",
    consultingDesc:
      "Servicios integrales de consultoría que incluyen estudios de viabilidad, evaluaciones técnicas y planificación estratégica para proyectos de ingeniería en todo el mundo.",
    projectManagement: "Gestión de Proyectos",
    projectManagementDesc:
      "Gestión experta de proyectos entregada a tiempo y dentro del presupuesto. De la planificación a la ejecución, aseguramos el éxito del proyecto con supervisión rigurosa.",
    people: "Personas",
    peopleDesc:
      "Nuestro equipo talentoso de ingenieros y profesionales aporta décadas de experiencia combinada en la entrega de soluciones de ingeniería de clase mundial en todos los sectores.",
    powerGeneration: "Generación de Energía",
    powerGenerationDesc:
      "Soluciones completas de generación de energía, incluyendo diseño, construcción y optimización de instalaciones de energía renovable y convencional.",
    mining: "Minería e Industria",
    miningDesc:
      "Soluciones especializadas para plantas mineras e industriales, incluyendo equipos, desarrollo de infraestructura y optimización operativa.",
    manufacturing: "Fabricación",
    manufacturingDesc:
      "Apoyo integral de fabricación que cubre diseño de instalaciones, sistemas de automatización, control de calidad y optimización de producción.",
    transmission: "Transmisión y Distribución",
    transmissionDesc:
      "Diseño, instalación y mantenimiento de infraestructura de transmisión y distribución de energía para la entrega confiable de energía.",
    operations: "Operaciones y Mantenimiento",
    operationsDesc:
      "Servicios integrales de O&M que aseguran máximo rendimiento, tiempo de inactividad mínimo y vida útil máxima de activos a través de programas de mantenimiento preventivo.",

    // Project Stats
    projectsTitle: "Proyectos",
    international: "Internacional",
    southAfrica: "Sudáfrica",

    // Team Work Section
    teamWork: "Trabajo en Equipo",
    teamWorkDesc:
      "Nuestros equipos trabajan sin problemas en geografías, proporcionando liderazgo técnico centralizado apoyado por experiencia de ejecución local. Ya sea entregando subestaciones, infraestructura de transmisión, plantas de procesos o instalaciones de energía renovable, combinamos excelencia de ingeniería con desarrollo responsable y orientado al futuro, asegurando que cada activo sea seguro, eficiente y esté construido para funcionar durante generaciones.",
    moreAboutUs: "Más sobre nosotros",

    // CEO Quote
    ceoQuote:
      "Integridad — Honesto y transparente en todas las transacciones. Con la seguridad en el frente de cada decisión, generamos confianza a través de prácticas éticas y compromiso inquebrantable con el bienestar de nuestros equipos, socios y comunidades.",
    ceoName: "Conrad Stark",
    ceoTitle: "CEO del Grupo",

    // Core Values
    ourCoreValues: "Nuestros valores fundamentales",
    sustainability: "Sostenibilidad",
    sustainabilityDesc: "Comprometido con la responsabilidad ambiental",
    safety: "Seguridad",
    safetyDesc:
      "Priorizar el bienestar y la seguridad en todas las operaciones",
    innovation: "Innovación",
    innovationDesc: "Soluciones innovadoras para energía renovable",
    collaboration: "Colaboración",
    collaborationDesc: "Trabajar juntos para mayor impacto",
    empowerment: "Empoderamiento",
    empowermentDesc: "Capacitar a comunidades y organizaciones",

    // CTA Section
    ctaHeading:
      "Únete a nosotros en nuestro viaje hacia un mundo más limpio, verde y sostenible.",
    ctaSubheading:
      "Juntos podemos generar un impacto positivo y dejar un legado duradero para las generaciones futuras.",

    // Contact Page
    contactTitle: "Contacto",
    contactFormTitle: "Contáctenos",
    contactFormDesc:
      "¿Tiene preguntas o está listo para comenzar su próximo proyecto? Nos encantaría saber de usted. Complete el formulario a continuación y nuestro equipo se comunicará con usted pronto.",
    visitUs: "Visítanos",
    visitUsDesc:
      "Ya sea que esté explorando oportunidades de asociación o discutiendo un proyecto potencial, nuestros equipos están listos para conectarse con usted.",

    // Contact Form Labels
    fullName: "Nombre completo",
    emailAddress: "Correo electrónico",
    phoneNumber: "Número de teléfono",
    companyName: "Empresa",
    subject: "Asunto",
    message: "Mensaje",
    selectSubject: "Selecciona un tema",
    consulting_subject: "Servicios de consultoría",
    engineering_subject: "Ingeniería y construcción",
    projectManagement_subject: "Gestión de proyectos",
    operations_subject: "Operaciones y mantenimiento",
    general: "Consulta general",
    other: "Otro",
    sendMessage: "Enviar mensaje",
    thankYou: "¡Gracias por tu mensaje!",
    thankYouDesc: "Nos comunicaremos con usted lo antes posible.",

    // Office Information
    headOffice: "Oficina Principal",
    pretoria: "Pretoria",
    projectManagementTeam: "Gestión de Proyectos",
    miningOps: "Operaciones Mineras",
    regionalLeadership: "Liderazgo Regional",
    timezone: "Zona horaria",
    SAST: "SAST (UTC+2)",
    team: "Equipo",
    teamSize_45: "45+ profesionales",
    teamSize_20: "20+ profesionales",
    teamSize_25: "25+ profesionales",
    description_jo:
      "Nuestra oficina central en Sudáfrica es el centro de nuestras operaciones en todo el continente, apoyando proyectos en los sectores de energía renovable, minería e industria.",
    description_ct:
      "Nuestra oficina en Centurion apoya la entrega y gestión de proyectos en la región de Gauteng con experiencia especializada en soluciones de ingeniería.",
    description_rb:
      "Nuestra oficina en Rustenburg se especializa en proyectos mineros e industriales, sirviendo al sector de recursos en la región del Noroeste.",
  },
  ar: {
    // Navigation & Header
    home: "الرئيسية",
    services: "الخدمات",
    career: "المسار الوظيفي",
    contact: "اتصل",
    getInTouch: "اتصل بنا",
    language: "اللغة",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "مستوى 1 BBBEE",
    phone: "هاتف",
    email: "البريد الإلكتروني",
    company: "الشركة",
    privacyTerms: "الخصوصية والشروط",
    copyright: "مجموعة EHL للهندسة",

    // Index Page - Mission Statement
    whoWeAre: "من نحن",
    missionStatement:
      "كشركة متعددة التخصصات لتسليم المشاريع، نعمل في جميع الصناعات التي نقدم فيها الهندسة والبناء وإدارة المشاريع مع الدعم التشغيلي المستمر. نتحمل المسؤولية المهنية والتشغيلية ونعمل بجد لتخفيف المخاطر عند تطوير وإدارة والحفاظ على المشاريع لعملائنا. نوفر خبرة تصميم شاملة مثل الحلول المخصصة للتوريد وحلول التحسين في جميع القطاعات العالمية مع توفير حلول للمشاريع الشاملة متعددة التخصصات.",

    // Services Section
    servicesTitle: "الخدمات",
    consulting: "الاستشارات والدراسات",
    consultingDesc:
      "خدمات استشارية شاملة تشمل دراسات الجدوى والتقييمات الفنية والتخطيط الاستراتيجي لمشاريع الهندسة في جميع أنحاء العالم.",
    projectManagement: "إدارة المشاريع",
    projectManagementDesc:
      "إدارة خبيرة للمشاريع مع التسليم في الوقت المحدد وضمن الميزانية. من التخطيط إلى التنفيذ، نضمن نجاح المشروع من خلال الإشراف الصارم.",
    people: "الأشخاص",
    peopleDesc:
      "يجمع فريقنا الموهوب من المهندسين والمحترفين عقودًا من الخبرة المجمعة في تقديم حلول هندسية عالمية المستوى عبر جميع القطاعات.",
    powerGeneration: "توليد الكهرباء",
    powerGenerationDesc:
      "حلول توليد الكهرباء الكاملة بما في ذلك التصميم والبناء والتحسين لمنشآت الطاقة المتجددة والتقليدية.",
    mining: "التعدين والصناعة",
    miningDesc:
      "حلول متخصصة لمصانع التعدين والصناعية بما في ذلك المعدات وتطوير البنية التحتية والتحسين التشغيلي.",
    manufacturing: "التصنيع",
    manufacturingDesc:
      "دعم تصنيعي شامل يغطي تصميم المنشآت وأنظمة الأتمتة والتحكم بالجودة وتحسين الإنتاج.",
    transmission: "النقل والتوزيع",
    transmissionDesc:
      "تصميم وتركيب وصيانة بنية التحتية لنقل وتوزيع الكهرباء لتسليم موثوق للطاقة.",
    operations: "العمليات والصيانة",
    operationsDesc:
      "خدمات O&M شاملة تضمن الأداء الأقصى وأقل وقت تعطل وأقصى عمر للأصول من خلال برامج الصيانة الوقائية.",

    // Project Stats
    projectsTitle: "المشاريع",
    international: "دولي",
    southAfrica: "جنوب أفريقيا",

    // Team Work Section
    teamWork: "العمل الجماعي",
    teamWorkDesc:
      "تعمل فرقنا بسلاسة عبر الجغرافيات، وتوفر قيادة تقنية مركزية يدعمها خبرة التنفيذ المحلية. سواء أكنا نسلم محطات فرعية أو بنية تحتية للنقل أو محطات معالجة أو مرافق الطاقة المتجددة، فإننا نجمع بين التميز الهندسي مع التطور المسؤول والموجه نحو المستقبل، مما يضمن أن كل أصل آمن وفعال ومبني للعمل لأجيال.",
    moreAboutUs: "المزيد عنا",

    // CEO Quote
    ceoQuote:
      "النزاهة — صريح وشفاف في جميع المعاملات. مع سلامتك في الصدارة من كل قرار، نبني الثقة من خلال الممارسات الأخلاقية والالتزام الثابت برفاهية فريقنا والشركاء والمجتمعات.",
    ceoName: "كونراد ستارك",
    ceoTitle: "الرئيس التنفيذي للمجموعة",

    // Core Values
    ourCoreValues: "قيمنا الأساسية",
    sustainability: "الاستدامة",
    sustainabilityDesc: "ملتزم بالمسؤولية البيئية",
    safety: "السلامة",
    safetyDesc: "أولويات الرفاهية والأمان في جميع العمليات",
    innovation: "الابتكار",
    innovationDesc: "حلول رائدة للطاقة المتجددة",
    collaboration: "التعاون",
    collaborationDesc: "العمل معًا للتأثير الأكبر",
    empowerment: "التمكين",
    empowermentDesc: "تمكين المجتمعات والمنظمات",

    // CTA Section
    ctaHeading: "انضم إلينا في رحلتنا نحو عالم أنظف وأخضر واستدامة أكثر.",
    ctaSubheading:
      "معًا، يمكننا إحداث تأثير إيجابي وترك إرثًا دائمًا للأجيال القادمة.",

    // Contact Page
    contactTitle: "اتصل",
    contactFormTitle: "اتصل بنا",
    contactFormDesc:
      "هل لديك أسئلة أو جاهز لبدء مشروعك التالي؟ نود أن نسمع منك. يرجى ملء النموذج أدناه وسيتواصل فريقنا معك قريبًا.",
    visitUs: "زرنا",
    visitUsDesc:
      "سواء كنت تستكشف فرص الشراكة أو تناقش مشروعًا محتملاً، فإن فرقنا جاهزة للتواصل معك.",

    // Contact Form Labels
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    companyName: "الشركة",
    subject: "الموضوع",
    message: "الرسالة",
    selectSubject: "اختر موضوعًا",
    consulting_subject: "خدمات الاستشارات",
    engineering_subject: "الهندسة والبناء",
    projectManagement_subject: "إدارة المشاريع",
    operations_subject: "العمليات والصيانة",
    general: "استفسار عام",
    other: "آخر",
    sendMessage: "إرسال الرسالة",
    thankYou: "شكرا على رسالتك!",
    thankYouDesc: "سنتواصل معك في أسرع وقت ممكن.",

    // Office Information
    headOffice: "المقر الرئيسي",
    pretoria: "بريتوريا",
    projectManagementTeam: "إدارة المشاريع",
    miningOps: "عمليات التعدين",
    regionalLeadership: "القيادة الإقليمية",
    timezone: "المنطقة الزمنية",
    SAST: "SAST (UTC+2)",
    team: "الفريق",
    teamSize_45: "45+ محترفين",
    teamSize_20: "20+ محترفين",
    teamSize_25: "25+ محترفين",
    description_jo:
      "مقرنا الرئيسي في جنوب أفريقيا هو مركز عملياتنا في جميع أنحاء القارة، وتدعم المشاريع في قطاعات الطاقة المتجددة والتعدين والصناعة.",
    description_ct:
      "تدعم مكتبنا في سنترويون تسليم وإدارة المشاريع عبر منطقة غوتنغ بخبرة متخصصة في حلول الهندسة.",
    description_rb:
      "يتخصص مكتبنا في روستنبرج في مشاريع التعدين والصناعة، وتخدم قطاع الموارد في منطقة الشمال الغربي.",
  },
  pt: {
    // Navigation & Header
    home: "Início",
    services: "Serviços",
    career: "Carreira",
    contact: "Contato",
    getInTouch: "ENTRE EM CONTATO",
    language: "Idioma",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Nível 1 BBBEE",
    phone: "Telefone",
    email: "E-mail",
    company: "Empresa",
    privacyTerms: "Privacidade e termos",
    copyright: "Grupo de Engenharia EHL",

    // Index Page - Mission Statement
    whoWeAre: "Quem somos",
    missionStatement:
      "Como empresa multidisciplinar de entrega de projetos, operamos em todos os setores nos quais prestamos engenharia, construção e gerenciamento de projetos com apoio operacional contínuo. Assumimos responsabilidade profissional e operacional e nos esforçamos para mitigar riscos ao desenvolver, gerenciar e manter projetos para nossos clientes. Oferecemos expertise de design abrangente, como soluções de fornecimento personalizadas e soluções de otimização em todos os setores globais, enquanto também fornecemos soluções para projetos turnkey multidisciplinares.",

    // Services Section
    servicesTitle: "Serviços",
    consulting: "Consultoria e Estudos",
    consultingDesc:
      "Serviços de consultoria abrangentes incluindo estudos de viabilidade, avaliações técnicas e planejamento estratégico para projetos de engenharia em todo o mundo.",
    projectManagement: "Gerenciamento de Projetos",
    projectManagementDesc:
      "Gerenciamento especializado de projetos entregue no prazo e no orçamento. Do planejamento à execução, garantimos o sucesso do projeto com supervisão rigorosa.",
    people: "Pessoas",
    peopleDesc:
      "Nossa equipe talentosa de engenheiros e profissionais traz décadas de experiência combinada na entrega de soluções de engenharia de classe mundial em todos os setores.",
    powerGeneration: "Geração de Energia",
    powerGenerationDesc:
      "Soluções completas de geração de energia, incluindo design, construção e otimização de instalações de energia renovável e convencional.",
    mining: "Mineração e Indústria",
    miningDesc:
      "Soluções especializadas para plantas de mineração e indústria, incluindo equipamentos, desenvolvimento de infraestrutura e otimização operacional.",
    manufacturing: "Manufatura",
    manufacturingDesc:
      "Suporte manufatureiro abrangente cobrindo design de instalações, sistemas de automação, controle de qualidade e otimização de produção.",
    transmission: "Transmissão e Distribuição",
    transmissionDesc:
      "Design, instalação e manutenção de infraestrutura de transmissão e distribuição de energia para entrega confiável de energia.",
    operations: "Operações e Manutenção",
    operationsDesc:
      "Serviços integrais de O&M garantindo desempenho máximo, tempo mínimo de inatividade e vida máxima de ativos através de programas de manutenção preventiva.",

    // Project Stats
    projectsTitle: "Projetos",
    international: "Internacional",
    southAfrica: "África do Sul",

    // Team Work Section
    teamWork: "Trabalho em Equipe",
    teamWorkDesc:
      "Nossas equipes trabalham perfeitamente entre geografias, fornecendo liderança técnica centralizada apoiada por experiência de execução local. Seja entregando subestações, infraestrutura de transmissão, plantas de processo ou instalações de energia renovável, combinamos excelência de engenharia com desenvolvimento responsável e voltado para o futuro, garantindo que cada ativo seja seguro, eficiente e construído para funcionar por gerações.",
    moreAboutUs: "Mais sobre nós",

    // CEO Quote
    ceoQuote:
      "Integridade — Honesto e transparente em todos os negócios. Com segurança na vanguarda de cada decisão, construímos confiança através de práticas éticas e compromisso inabalável com o bem-estar de nossas equipes, parceiros e comunidades.",
    ceoName: "Conrad Stark",
    ceoTitle: "CEO do Grupo",

    // Core Values
    ourCoreValues: "Nossos valores fundamentais",
    sustainability: "Sustentabilidade",
    sustainabilityDesc: "Comprometido com a responsabilidade ambiental",
    safety: "Segurança",
    safetyDesc: "Priorizando bem-estar e segurança em todas as operações",
    innovation: "Inovação",
    innovationDesc: "Soluções pioneiras para energia renovável",
    collaboration: "Colaboração",
    collaborationDesc: "Trabalhando juntos para maior impacto",
    empowerment: "Capacitação",
    empowermentDesc: "Capacitando comunidades e organizações",

    // CTA Section
    ctaHeading:
      "Junte-se a nós em nossa jornada para um mundo mais limpo, mais verde e sustentável.",
    ctaSubheading:
      "Juntos, podemos gerar um impacto positivo e deixar um legado duradouro para as gerações futuras.",

    // Contact Page
    contactTitle: "Contato",
    contactFormTitle: "Entre em Contato",
    contactFormDesc:
      "Tem dúvidas ou está pronto para começar seu próximo projeto? Adoraríamos ouvir você. Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve.",
    visitUs: "Visite-nos",
    visitUsDesc:
      "Seja explorando oportunidades de parceria ou discutindo um possível projeto, nossas equipes estão prontas para conectar com você.",

    // Contact Form Labels
    fullName: "Nome completo",
    emailAddress: "E-mail",
    phoneNumber: "Número de telefone",
    companyName: "Empresa",
    subject: "Assunto",
    message: "Mensagem",
    selectSubject: "Selecione um assunto",
    consulting_subject: "Serviços de consultoria",
    engineering_subject: "Engenharia e construção",
    projectManagement_subject: "Gerenciamento de projetos",
    operations_subject: "Operações e manutenção",
    general: "Consulta geral",
    other: "Outro",
    sendMessage: "Enviar mensagem",
    thankYou: "Obrigado pela sua mensagem!",
    thankYouDesc: "Entraremos em contato com você em breve.",

    // Office Information
    headOffice: "Escritório Principal",
    pretoria: "Pretória",
    projectManagementTeam: "Gerenciamento de Projetos",
    miningOps: "Operações de Mineração",
    regionalLeadership: "Liderança Regional",
    timezone: "Fuso horário",
    SAST: "SAST (UTC+2)",
    team: "Equipe",
    teamSize_45: "45+ profissionais",
    teamSize_20: "20+ profissionais",
    teamSize_25: "25+ profissionais",
    description_jo:
      "Nosso escritório principal na África do Sul é o centro de nossas operações em todo o continente, apoiando projetos nos setores de energia renovável, mineração e indústria.",
    description_ct:
      "Nosso escritório em Centurion apoia a entrega e gerenciamento de projetos na região de Gauteng com experiência especializada em soluções de engenharia.",
    description_rb:
      "Nosso escritório em Rustenburg se especializa em projetos de mineração e indústria, servindo o setor de recursos na região Noroeste.",
  },
  ru: {
    // Navigation & Header
    home: "Главная",
    services: "Услуги",
    career: "Карьера",
    contact: "Контакт",
    getInTouch: "СВЯЗАТЬСЯ С НАМИ",
    language: "Язык",
    iso9001: "ISO 9001:2025",
    level1BBBEE: "Уровень 1 BBBEE",
    phone: "Телефон",
    email: "Электронная почта",
    company: "Компания",
    privacyTerms: "Политика конфиденциальности и условия",
    copyright: "Группа инженерных услуг EHL",

    // Index Page - Mission Statement
    whoWeAre: "Кто мы",
    missionStatement:
      "Как многопрофильная компания по доставке проектов, мы работаем во всех отраслях, в которых обеспечиваем инженерные, строительные и управление проектами с постоянной операционной поддержкой. Мы принимаем профессиональную и операционную ответственность и упорно работаем для снижения рисков при разработке, управлении и обслуживании проектов для наших клиентов. Мы предоставляем комплексную экспертизу проектирования, такую как индивидуальные решения по поставкам и решения по оптимизации во всех глобальных секторах, а также предоставляем решения для многопрофильных проектов под ключ.",

    // Services Section
    servicesTitle: "Услуги",
    consulting: "Консалтинг и исследования",
    consultingDesc:
      "Комплексные консультационные услуги, включая технико-хозяйственные обоснования, технические оценки и стратегическое планирование инженерных проектов по всему миру.",
    projectManagement: "Управление проектами",
    projectManagementDesc:
      "Опытное управление проектами с соблюдением сроков и бюджета. От планирования до реализации, мы обеспечиваем успех проекта строгим контролем.",
    people: "Люди",
    peopleDesc:
      "Наша талантливая команда инженеров и профессионалов обладает десятилетиями опыта в предоставлении инженерных решений мирового класса во всех секторах.",
    powerGeneration: "Генерация электроэнергии",
    powerGenerationDesc:
      "Комплексные решения в области производства электроэнергии, включая проектирование, строительство и оптимизацию объектов возобновляемой и традиционной энергии.",
    mining: "Горнодобывающая и промышленная",
    miningDesc:
      "Специализированные решения для горнодобывающих и промышленных предприятий, включая оборудование, развитие инфраструктуры и операционную оптимизацию.",
    manufacturing: "Производство",
    manufacturingDesc:
      "Комплексная поддержка производства, охватывающая проектирование объектов, системы автоматизации, контроль качества и оптимизацию производства.",
    transmission: "Передача и распределение",
    transmissionDesc:
      "Проектирование, установка и обслуживание инфраструктуры передачи и распределения электроэнергии для надежной доставки электроэнергии.",
    operations: "Операции и обслуживание",
    operationsDesc:
      "Комплексные услуги O&M, обеспечивающие максимальную производительность, минимальные простои и максимальный срок службы активов посредством программ профилактического обслуживания.",

    // Project Stats
    projectsTitle: "Проекты",
    international: "Международные",
    southAfrica: "Южная Африка",

    // Team Work Section
    teamWork: "Работа в команде",
    teamWorkDesc:
      "Наши команды работают беспрепятственно в разных географических регионах, обеспечивая централизованное техническое руководство, поддерживаемое местным опытом реализации. Независимо от того, доставляем ли мы подстанции, инфраструктуру передачи, технологические цеха или объекты возобновляемой энергии, мы сочетаем инженерное совершенство с ответственным и ориентированным на будущее развитием, обеспечивая безопасность, эффективность и долговечность каждого актива на поколения.",
    moreAboutUs: "Больше о нас",

    // CEO Quote
    ceoQuote:
      "Честность — честное и прозрачное в любых отношениях. С безопасностью в центре каждого решения, мы строим доверие через этические практики и непоколебимую приверженность благополучию наших команд, партнеров и сообществ.",
    ceoName: "Конрад Старк",
    ceoTitle: "Генеральный директор группы",

    // Core Values
    ourCoreValues: "Наши основные ценности",
    sustainability: "Устойчивость",
    sustainabilityDesc: "Привержены экологической ответственности",
    safety: "Безопасность",
    safetyDesc: "Приоритет благополучия и безопасности во всех операциях",
    innovation: "Инновация",
    innovationDesc: "Передовые решения для возобновляемой энергии",
    collaboration: "Сотрудничество",
    collaborationDesc: "Совместная работа для большего воздействия",
    empowerment: "Расширение прав и возможностей",
    empowermentDesc: "Расширение прав и возможностей сообществ и организаций",

    // CTA Section
    ctaHeading:
      "Присоединяйтесь к нам в путешествии к более чистому, зеленому и устойчивому миру.",
    ctaSubheading:
      "Вместе мы можем оказать положительное влияние и оставить наследие для будущих поколений.",

    // Contact Page
    contactTitle: "Контакт",
    contactFormTitle: "Свяжитесь с нами",
    contactFormDesc:
      "Есть вопросы или готовы начать свой следующий проект? Нам бы хотелось услышать от вас. Заполните форму ниже и наша команда свяжется с вами в ближайшее время.",
    visitUs: "Посетите нас",
    visitUsDesc:
      "Независимо от того, ищете ли вы возможности партнерства или обсуждаете потенциальный проект, наши команды готовы связаться с вами.",

    // Contact Form Labels
    fullName: "Полное имя",
    emailAddress: "Электронная почта",
    phoneNumber: "Номер телефона",
    companyName: "Компания",
    subject: "Тема",
    message: "Сообщение",
    selectSubject: "Выберите тему",
    consulting_subject: "Консалтинговые услуги",
    engineering_subject: "Инженерия и строительство",
    projectManagement_subject: "Управление проектами",
    operations_subject: "Операции и обслуживание",
    general: "Общий запрос",
    other: "Другое",
    sendMessage: "Отправить сообщение",
    thankYou: "Спасибо за ваше сообщение!",
    thankYouDesc: "Мы свяжемся с вами в ближайшее время.",

    // Office Information
    headOffice: "Главный офис",
    pretoria: "Претория",
    projectManagementTeam: "Управление проектами",
    miningOps: "Горнодобывающие операции",
    regionalLeadership: "Региональное руководство",
    timezone: "Часовой пояс",
    SAST: "SAST (UTC+2)",
    team: "Команда",
    teamSize_45: "45+ специалистов",
    teamSize_20: "20+ специалистов",
    teamSize_25: "25+ специалистов",
    description_jo:
      "Наш главный офис в Южной Африке является центром нашей деятельности на континенте и поддерживает проекты в секторах возобновляемой энергии, горнодобывающей промышленности и промышленности.",
    description_ct:
      "Наш офис в Центурионе поддерживает реализацию и управление проектами в регионе Гаутенг со специализированным опытом в инженерных решениях.",
    description_rb:
      "Наш офис в Рустенбурге специализируется на горнодобывающих и промышленных проектах и обслуживает ресурсный сектор в регионе Северо-Запад.",
  },
};

// Additional translations for service descriptions
const serviceDescriptions: Record<Language, Record<string, string>> = {
  en: {},
  zh: {},
  es: {},
  fr: {},
  de: {},
  ar: {},
  pt: {},
  ru: {},
};

export function t(key: string, language: Language): string {
  return translations[language]?.[key] || translations.en[key] || key;
}
