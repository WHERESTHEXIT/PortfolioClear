import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, FileText, ChevronRight, Eye, Image as ImageIcon, Briefcase, Code, GraduationCap, Award, Sun, Moon } from 'lucide-react';

const INFOS = {
  nom: "Tom DUVAL",
  titre: "Étudiant en BTS SIO SLAM",
  description: "Bienvenue sur mon portfolio réalisé dans le cadre de mon BTS SIO. Vous y trouverez l'ensemble des projets et missions que j'ai pu réaliser durant ma formation, mes stages et mon temps libre.",
  email: "tom.duval2006@icloud.com",
  github: "https://github.com/delasalle-sio-duval-t",
  linkedin: "https://fr.linkedin.com/in/tom-duval-79b81a329",
  cvLink: "https://drive.google.com/file/d/1P1M75AqMVP8mtqR-2k6T-8entxv_FQyx/view?usp=sharing",
  lienPreuvesExternes: "http://urlr.me/xGDYkV"
};

const PROJETS_PERSO = [
  {
    id: 1,
    titre: "IA Reconnaissance d'objets.",
    description: "Utilisation de l'IA opensource Yolo26 afin de réaliser de la détection d'objets (+200 objets).",
    technos: ["Yolo", "IA"],
    image: "/public/images/IA.jpg",
    lien: "https://github.com/WHERESTHEXIT"
  },
  {
    id: 2,
    titre: "Jeux-vidéo FOUND",
    description: "Réalisé en C# sur Unity, c'était mon premier projet de développement (commencé en hiver 2024).",
    technos: ["Unity", "C#"],
    image: "/images/NiveauOverall.png",
    lien: "https://github.com/WHERESTHEXIT"
  },
  {
    id: 3,
    titre: "Portfolio Terminal",
    description: "Mon premier Portfolio, à but uniquement personnel, avec pour inspiration les terminaux de commande des années 90.",
    technos: ["CSS", "HTML", "Github"],
    image: "/public/images/Terminal.png",
    lien: "https://github.com/WHERESTHEXIT"
  },
  {
    id: 4,
    titre: "Ce Portfolio",
    description: "Site web type 'vitrine' afin de présenter l'épreuve E5.",
    technos: ["React", "Github"],
    image: "/public/images/E5.png",
    lien: "https://github.com/WHERESTHEXIT"
  }
];

const PROJETS_PRO = [
  {
    id: 1,
    titre: "Projet Digicode",
    description: "Projet de site web fictif pour la Maison des Ligues de Lorraine, avec des systèmes simple comme la modification de son mot de passe.",
    technos: ["PHP", "HTML", "MySQL"],
    image: "/public/images/digicode.png",
    lien: "https://drive.google.com/drive/folders/1YhsyjgMq0ERPKXfNYqa4QPwEDWVinpBv?usp=sharing"
  },
  {
    id: 2,
    titre: "Projet PrestaShop",
    description: "Réalisation d'un site web fictif gérant la vente de matériel de peinture et d'oeuvres en ligne.",
    technos: ["CMS"],
    image: "/public/images/presta.png",
    lien: "https://drive.google.com/drive/folders/1YhsyjgMq0ERPKXfNYqa4QPwEDWVinpBv?usp=sharing"
  },
  {
    id: 3,
    titre: "Projet TraceGPS",
    description: "Création d'une application C# & Web afin de suivre les parcours sportifs de coureurspar exemple (Strava).",
    technos: ["Github", "C#", "JavaScript", "PHP"],
    image: "/public/images/trace.png",
    lien: "https://drive.google.com/drive/folders/1YhsyjgMq0ERPKXfNYqa4QPwEDWVinpBv?usp=sharing"
  },
  {
    id: 4,
    titre: "Projet Tutorat",
    description: "Application permettant la mise en relation entre les élèves et les étudiants afin qu'ils puissent réaliser leurs révisions/devoirs.",
    technos: ["PowerApps", "Teams", "PowerAutomate", "SharePoint"],
    image: "/public/images/tutorat.png",
    lien: "https://drive.google.com/drive/folders/1YhsyjgMq0ERPKXfNYqa4QPwEDWVinpBv?usp=sharing"
  }
];

const STAGES = {
  sio1: {
    entreprise: "ASP France",
    siteWeb: "https://www.asp-france.fr/",
    periode: "Mai 2025 - Juin 2025 (6 semaines)",
    missionPrincipale: "Développement d'un site web & Infogérance.",
    description: "Lors de ce premier stage, j'ai été assigné au développement du site web de l'entreprise. Ma mission principale consistait à développer une nouvelle interface front pour le site de l'entreprise et de gérer les demandes et pannes clients via un HelpDesk.",
    taches: [
      "Analyse du besoin avec le tuteur",
      "Support technique et résolution d'incidents (Helpdesk)",
      "Administration des infrastructures serveurs et réseau",
      "Refonte, migration et développement du site web sous WordPress"
    ],
    images: [
      { url: "/public/images/IMG_8486.jpg", titre: "Aperçu du site web final" },
      { url: "/public/images/IMG_8281.jpg", titre: "Installation de logiciels pour un client" },
      { url: "/public/images/IMG_8265.jpg", titre: "Interface d'un OMSA des serveurs des mairies de la périphérie de Rennes" }
    ]
  },
  sio2: {
    entreprise: "Skyld",
    siteWeb: "https://www.skyld.io/",
    periode: "Janvier 2025 - Février 2026 (5 semaines)",
    missionPrincipale: "Développement d'un site web, optimisation SEO & intégration d'un CMS",
    description: "Pour mon stage de deuxième année, j'ai travaillé sur le site web d'une entreprise de cybersécurité en IA. Celle-ci avait besoin d'intégrer un CMS pour ses articles, d'une optimisation SEO & LLM pour le référencement et des intégrations de besoin concrétisées.",
    taches: [
      "Développement Front-end et évolutions du site web",
      "Optimisation SEO et valorisation numérique de l'entreprise",
      "Intégration de services tiers, CMS et fonctionnalités avancées",
      "Sécurité applicative et lutte contre les bots"
    ],
    images: [
      { url: "/public/images/IMG_0157.JPG", titre: "Interface du CMS (TinaCMS)" },
      { url: "/public/images/IMG_9742.jpg", titre: "Git Merge du site de prod vers le final" }
    ]
  }
};

const PREUVES_CATEGORIES = ["Toutes", "Stage SIO1", "Stage SIO2", "Projets Perso", "Projets Pro"];

const PREUVES = [
  { id: 1, url: "/PortfolioClear/images/siteasp.jpg", titre: "Un des sites web finaux d'ASP France.", categorie: "Stage SIO1", description: "Site sous WordPress abandonné après plusieurs propositions." },
  { id: 2, url: "/images/key.jpg", titre: "Activation d'une clé de license Windows.", categorie: "Stage SIO1", description: "Sous demande d'un(e) client(e), nous avons activé une clé Windows 7." },
  { id: 3, url: "/images/word.jpg", titre: "Interface WordPress.", categorie: "Stage SIO1", description: "Interface de développement du CMS WordPress." },
  { id: 4, url: "/images/siteaspini.jpg", titre: "Site initial d'ASP France.", categorie: "Stage SIO1", description: "Site et interface toujours active d'ASP France." },
  { id: 5, url: "/images/serveur1.jpg", titre: "Baie de serveur", categorie: "Stage SIO1", description: "Baie de serveur d'un client d'ASP France." },
  { id: 6, url: "/images/serveur2.jpg", titre: "Baie de serveur", categorie: "Stage SIO1", description: "Baie de serveur d'un autre client d'ASP France." },
  { id: 7, url: "/images/help.jpg", titre: "Assistance HelpDesk d'un des clients.", categorie: "Stage SIO1", description: "Assistance d'un client sur un problème de driver Intel." },
  { id: 8, url: "/images/composants.jpg", titre: "Assistance d'une panne matérielle.", categorie: "Stage SIO1", description: "Assistance d'un client sur un problème de connectique interne." },
  { id: 9, url: "/images/gemini.PNG", titre: "Exemple de SEO sur une IA.", categorie: "Stage SIO2", description: "Exemple de l'optimisation SEO sur l'IA Gemini en anglais." },
  { id: 10, url: "/images/moltbook.png", titre: "Capture d'écran d'une conversation MoltBook.", categorie: "Stage SIO2", description: "Scénario fictif entre deux IA sur le site web MoltBook à propos de l'entreprise Skyld." },
  { id: 11, url: "/images/llm.JPG", titre: "Création du fichier .llm dans le site web.", categorie: "Stage SIO2", description: "Ce fichier sert à optimiser la recherche pour les IA qui scannent Internet." },
  { id: 12, url: "/images/podcast.JPG", titre: "Page podcast du site de Skyld.", categorie: "Stage SIO2", description: "Page créé suite à la requête de mon tuteur de stage." },
  { id: 13, url: "/images/demoproduit.jpg", titre: "Page de démo du produit de l'entreprise.", categorie: "Stage SIO2", description: "Page créé suite à la requête de mon tuteur de stage." },
  { id: 14, url: "/images/github.jpg", titre: "Photo de la page github du site de l'entreprise.", categorie: "Stage SIO2", description: "Github de l'entreprise." },
  { id: 15, url: "/images/code5janv.jpg", titre: "Code source du site web.", categorie: "Stage SIO2", description: "Code source du site web affiché via Visual Studio Code." },
  { id: 16, url: "/images/codeIA.png", titre: "Code source du l'IA de détection d'objets.", categorie: "Projets Perso", description: "Code source de l'IA de détection d'objets affiché via Visual Studio Code." },
  { id: 17, url: "/images/PortfolioTerminal.png", titre: "Extrait du code source du site web du portfolio 'terminal'.", categorie: "Projets Perso", description: "Code source de mon portfolio 'terminal' affiché via Github." },
  { id: 19, url: "/images/changementMdp.png", titre: "Interface de changement de mot de passe de la MDL.", categorie: "Projets Pro", description: "Provenant du projet Digicode." },
  { id: 20, url: "/images/backIndex.png", titre: "Code PHP de la page Index du site de la MDL.", categorie: "Projets Pro", description: "Provenant du projet Digicode." },
  { id: 21, url: "/images/index.png", titre: "Index du site vitrine Prestashop.", categorie: "Projets Pro", description: "Provenant du projet Prestashop." },
  { id: 22, url: "/images/backPresta.png", titre: "Page Admin du site 'Joie Contenue'.", categorie: "Projets Pro", description: "Provenant du projet Prestashop." },
  { id: 23, url: "/images/backcSharp.png", titre: "Code en C# de l'interface 'TraceGPS' sur l'IDE Visual Studio.", categorie: "Projets Pro", description: "Provenant du projet TraceGPS." },
  { id: 24, url: "/images/backForm.png", titre: "Interface de l'application 'TraceGPS' sur l'IDE Visual Studio", categorie: "Projets Pro", description: "Provenant du projet TraceGPS." },
  { id: 25, url: "/images/backPowerApps.png", titre: "Interface de développement de l'application Tutorat sur Power Apps.", categorie: "Projets Pro", description: "Provenant du projet Tutorat." },
  { id: 26, url: "/images/CodeOrcAI.png", titre: "Extrait du code de l'intelligence artificielle du jeu FOUND.", categorie: "Projets Perso", description: "Via l'IDE Visual Studio, à partir d'Unity." },
  { id: 27, url: "/images/NiveauOverall.png", titre: "Interface de développement du jeu FOUND via Unity.", categorie: "Projets Perso", description: "Extrait du menu principal et modifications d'éléments à l'écran." },
];

// --- Icônes personnalisées ---
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Classes CSS réutilisables pour le style Liquid Glass ---
const glassClasses = "bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]";
const glassButtonClasses = "bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/50 dark:border-white/10 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300";

// ==========================================
// 🧩 COMPOSANTS DE L'APPLICATION
// ==========================================

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Applique la classe "dark" au body pour Tailwind
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const ImageViewer = () => {
    if (!selectedImage) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
        {/* Fond flouté sombre de la modale */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"></div>
        
        <div className={`relative max-w-5xl w-full flex flex-col items-center justify-center p-4 rounded-3xl ${glassClasses}`} onClick={e => e.stopPropagation()}>
          <button 
            className="absolute -top-4 -right-4 md:top-4 md:right-4 text-slate-800 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10 border border-white/50 dark:border-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.titre || "Image en grand"} 
            className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-xl"
          />
          {selectedImage.titre && (
            <div className="mt-6 text-center w-full">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold">{selectedImage.titre}</h3>
              {selectedImage.description && <p className="text-slate-700 dark:text-slate-300 mt-2 max-w-2xl mx-auto">{selectedImage.description}</p>}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-300/50 transition-colors duration-500 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} relative overflow-hidden`}>
      
      {/* 🎨 ARRIÈRE-PLAN LIQUID GLASS (Orbes colorées floutées) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/30 dark:bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-emerald-400/20 dark:bg-teal-600/10 blur-[100px]"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className={`sticky top-0 z-40 ${glassClasses} border-t-0 border-x-0 rounded-none`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('accueil')}>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Portfolio épreuve E5
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <nav className="flex space-x-2">
                {[
                  { id: 'accueil', label: 'Accueil' },
                  { id: 'projets-perso', label: 'Projets Perso' },
                  { id: 'projets-pro', label: 'Projets Pro' },
                  { id: 'stages', label: 'Stages' },
                  { id: 'preuves', label: 'Preuves' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      currentRoute === item.id 
                        ? 'bg-blue-600/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 shadow-inner' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Toggle Dark Mode */}
              <div className="pl-4 ml-4 border-l border-slate-300/50 dark:border-slate-700/50">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2.5 rounded-2xl ${glassButtonClasses} text-slate-700 dark:text-slate-300`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Menu Mobile Button */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-xl ${glassButtonClasses}`}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-xl ${glassButtonClasses}`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Déroulant */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute w-full top-20 left-0 ${glassClasses} rounded-b-3xl border-t-0 p-4 shadow-2xl`}>
            <div className="space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'projets-perso', label: 'Projets Personnels' },
                { id: 'projets-pro', label: 'Projets Professionnels' },
                { id: 'stages', label: 'Mes Stages' },
                { id: 'preuves', label: 'Preuves & Compétences' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`block w-full text-center px-4 py-4 rounded-2xl text-base font-semibold transition-colors ${
                    currentRoute === item.id 
                      ? 'bg-blue-600/10 text-blue-700 dark:text-blue-300' 
                      : 'hover:bg-white/40 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[calc(100vh-160px)]">
        
        {/* -- PAGE ACCUEIL -- */}
        {currentRoute === 'accueil' && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Hero Section (Centré, sans photo) */}
            <div className={`p-10 md:p-16 rounded-3xl ${glassClasses} text-center max-w-4xl mx-auto relative overflow-hidden`}>
              {/* Effet de reflet interne */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {INFOS.nom}
                  </span>
                </h1>
                
                <div className="inline-block">
                  <span className={`px-6 py-3 rounded-2xl text-lg md:text-xl font-bold text-blue-800 dark:text-blue-200 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 backdrop-blur-md shadow-sm`}>
                    {INFOS.titre}
                  </span>
                </div>
                
                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {INFOS.description}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
                  <a href={INFOS.cvLink} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-md px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all hover:-translate-y-1">
                    <FileText size={22} />
                    Mon Curriculum Vitae
                  </a>
                  <a href={`mailto:${INFOS.email}`} className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold ${glassButtonClasses} hover:-translate-y-1 shadow-lg`}>
                    <Mail size={22} />
                    Me contacter
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-8 pt-8 text-slate-600 dark:text-slate-400">
                  <a href={INFOS.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"><GithubIcon size={32} /></a>
                  <a href={INFOS.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"><LinkedinIcon size={32} /></a>
                </div>
              </div>
            </div>

            {/* Accès rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: 'projets-pro', icon: <Briefcase size={28} />, title: "Projets Pros", desc: "Découvrez les projets réalisés en formation.", color: "text-blue-600 dark:text-blue-400" },
                { id: 'stages', icon: <GraduationCap size={28} />, title: "Expériences en Stage", desc: "Le détail de mes missions lors de mes deux stages de BTS.", color: "text-purple-600 dark:text-purple-400" },
                { id: 'preuves', icon: <Award size={28} />, title: "Tableau des Preuves", desc: "L'ensemble des documents prouvant mes compétences acquises.", color: "text-emerald-600 dark:text-emerald-400" }
              ].map(card => (
                <div key={card.id} onClick={() => navigateTo(card.id)} className={`p-8 rounded-3xl ${glassClasses} hover:bg-white/60 dark:hover:bg-slate-800/60 cursor-pointer group transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`w-14 h-14 rounded-2xl bg-white/50 dark:bg-slate-800/50 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/40 dark:border-white/10 ${card.color}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{card.desc}</p>
                  <span className={`font-semibold flex items-center gap-2 group-hover:gap-3 transition-all ${card.color}`}>
                    Explorer <ChevronRight size={18}/>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -- PAGE PROJETS PERSO & PRO -- */}
        {(currentRoute === 'projets-perso' || currentRoute === 'projets-pro') && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className={`p-8 rounded-3xl ${glassClasses}`}>
              <h1 className="text-4xl font-extrabold flex items-center gap-4">
                {currentRoute === 'projets-perso' ? <Code className="text-blue-500" size={36}/> : <Briefcase className="text-purple-500" size={36}/>} 
                {currentRoute === 'projets-perso' ? 'Projets Personnels' : 'Projets Professionnels'}
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                {currentRoute === 'projets-perso' 
                  ? "Réalisations faites sur mon temps libre par passion ou pour m'exercer." 
                  : "Les projets majeurs réalisés dans le cadre de ma formation."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(currentRoute === 'projets-perso' ? PROJETS_PERSO : PROJETS_PRO).map(projet => (
                <div key={projet.id} className={`flex flex-col rounded-3xl overflow-hidden ${glassClasses} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="relative h-64 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage({ url: projet.image, titre: projet.titre, description: projet.description })}>
                    <img src={projet.image} alt={projet.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-xl">
                        <Eye size={20} /> Agrandir
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{projet.titre}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed">{projet.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projet.technos.map(tech => (
                        <span key={tech} className="bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs px-4 py-1.5 rounded-full font-bold tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {projet.lien && projet.lien !== "#" && (
                      <a href={projet.lien} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl ${glassButtonClasses} text-blue-600 dark:text-blue-400`}>
                        Voir le projet <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -- PAGE STAGES -- */}
        {currentRoute === 'stages' && (
          <StagesPage setSelectedImage={setSelectedImage} />
        )}

        {/* -- PAGE PREUVES -- */}
        {currentRoute === 'preuves' && (
          <PreuvesPage setSelectedImage={setSelectedImage} />
        )}

      </main>

      {/* FOOTER */}
      <footer className={`${glassClasses} border-b-0 border-x-0 rounded-none py-8 mt-12`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} {INFOS.nom}. Portfolio E5 BTS SIO.</p>
          <div className="flex gap-6">
            <a href={INFOS.github} className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><GithubIcon size={24} /></a>
            <a href={INFOS.linkedin} className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><LinkedinIcon size={24} /></a>
          </div>
        </div>
      </footer>

      {/* Modal Lightbox */}
      <ImageViewer />
    </div>
  );
}

// ==========================================
// 📄 SOUS-COMPOSANT : PAGE STAGES
// ==========================================
function StagesPage({ setSelectedImage }) {
  const [activeTab, setActiveTab] = useState('sio2');
  const currentStage = STAGES[activeTab];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className={`p-6 md:p-8 rounded-3xl ${glassClasses} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
        <div>
          <h1 className="text-4xl font-extrabold flex items-center gap-4">
            <GraduationCap className="text-emerald-500" size={36}/> Mes Stages
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Immersion en milieu professionnel.</p>
        </div>
        
        {/* Onglets Glass */}
        <div className="flex bg-black/5 dark:bg-white/5 p-1.5 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/10">
          <button 
            onClick={() => setActiveTab('sio1')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'sio1' ? 'bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            Stage SIO1
          </button>
          <button 
            onClick={() => setActiveTab('sio2')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'sio2' ? 'bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            Stage SIO2
          </button>
        </div>
      </div>

      <div className={`rounded-3xl p-8 md:p-12 ${glassClasses}`}>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div>
              {/* Le nom de l'entreprise devient un lien cliquable si un siteWeb est défini */}
              {currentStage.siteWeb ? (
                <a 
                  href={currentStage.siteWeb} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 text-3xl font-extrabold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                >
                  {currentStage.entreprise} <ExternalLink size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <h2 className="text-3xl font-extrabold">{currentStage.entreprise}</h2>
              )}

              <div className="mt-3">
                <span className="inline-block bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold">
                  {currentStage.periode}
                </span>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Briefcase size={20}/> Missions Principales</h3>
              <p className="font-semibold text-lg mb-2">{currentStage.missionPrincipale}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{currentStage.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Tâches réalisées</h3>
              <ul className="space-y-3">
                {currentStage.taches.map((tache, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white/20 dark:bg-slate-800/20 p-3 rounded-xl border border-white/30 dark:border-white/5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                    <span className="font-medium">{tache}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Galerie Glass */}
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-6">
              <ImageIcon size={18} /> Galerie Captures
            </h3>
            {currentStage.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-video ${glassClasses} p-1`}
                onClick={() => setSelectedImage({ url: img.url, titre: img.titre })}
              >
                <img src={img.url} alt={img.titre} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-1 rounded-xl bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white font-bold text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.titre}</p>
                </div>
              </div>
            ))}
            {currentStage.images.length === 0 && (
              <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500">
                Aucune image.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 📄 SOUS-COMPOSANT : PAGE PREUVES
// ==========================================
function PreuvesPage({ setSelectedImage }) {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const preuvesFiltrees = activeCategory === "Toutes" ? PREUVES : PREUVES.filter(p => p.categorie === activeCategory);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className={`p-8 rounded-3xl ${glassClasses}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-extrabold flex items-center gap-4">
              <Award className="text-orange-500" size={36}/> Tableau des Preuves
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Images, captures d'écran, schémas et certifications justifiant de mes compétences.</p>
          </div>
          
          {/* Nouveau bouton "Voir plus" (Le lien est paramétrable dans INFOS) */}
          <a 
            href={INFOS.lienPreuvesExternes} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-bold whitespace-nowrap bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/20 transition-all shadow-sm w-full md:w-auto hover:-translate-y-1"
          >
            Voir plus <ExternalLink size={20} />
          </a>
        </div>
        
        {/* Filtres Glass */}
        <div className="flex flex-wrap gap-3 mt-8">
          {PREUVES_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                  : glassButtonClasses + ' text-slate-600 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {preuvesFiltrees.map(preuve => (
          <div 
            key={preuve.id} 
            className={`rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300 flex flex-col ${glassClasses}`}
            onClick={() => setSelectedImage({ url: preuve.url, titre: preuve.titre, description: preuve.description })}
          >
            <div className="aspect-video relative overflow-hidden p-1.5">
              <img src={preuve.url} alt={preuve.titre} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/40 text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Eye size={20} />
              </div>
            </div>
            <div className="p-6 pt-4 flex-1">
              <span className="text-xs font-extrabold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-2 block">
                {preuve.categorie}
              </span>
              <h3 className="text-lg font-bold line-clamp-1 mb-2">{preuve.titre}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{preuve.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
