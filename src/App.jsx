import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Layout, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Terminal, 
  CheckCircle, 
  Briefcase, 
  Cpu, 
  Globe,
  Download,
  Moon,
  Sun
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="font-bold text-2xl flex items-center gap-2">
              <div className="w-8 h-8 bg-[#714B67] rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-purple-900/20">S</div>
              <span className="text-slate-800 dark:text-white">Sedera<span className="text-[#714B67] dark:text-[#a8709a]">.Dev</span></span>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex space-x-8 font-medium">
                {['Accueil', 'Expertise', 'Projets', 'Parcours', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase() === 'accueil' ? 'home' : item.toLowerCase())}
                    className="hover:text-[#714B67] dark:hover:text-[#a8709a] transition-colors dark:text-slate-300"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 transition-all hover:scale-110"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button 
                onClick={() => scrollTo('contact')}
                className="hidden md:block bg-[#714B67] hover:bg-[#5d3d54] text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-900/20"
              >
                Me recruter
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50 -z-10 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-50 -z-10 transition-colors duration-500"></div>

          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Disponible pour opportunités (France/International)
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Développeur <span className="text-[#714B67] dark:text-[#be8bb0]">Odoo</span> & <span className="text-[#017E84] dark:text-[#2dd4dc]">Python</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Je transforme vos processus métiers complexes en modules Odoo performants. 
                De la version 12 à 18, j'optimise votre ERP pour gagner en productivité.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-3 bg-[#714B67] text-white rounded-lg font-semibold hover:bg-[#5d3d54] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 hover:scale-105"
                >
                  Voir mes réalisations <ChevronRight size={18} />
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Télécharger mon CV
                </button>
              </div>

              <div className="pt-8 flex gap-6 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#017E84] dark:text-[#2dd4dc]" />
                  <span>Autonome</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#017E84] dark:text-[#2dd4dc]" />
                  <span>Proactif</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#017E84] dark:text-[#2dd4dc]" />
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6 border-b dark:border-slate-700 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#714B67] to-[#017E84] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner">
                    SA
                  </div>
                  <div>
                    <h3 className="font-bold text-xl dark:text-white">Sedera ANDRIAMANGA</h3>
                    <p className="text-slate-500 dark:text-slate-400">Odoo Developer | Python Backend</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stack Actuelle</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-[#714B67] dark:text-purple-300 text-xs rounded font-medium">Odoo 12-18</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded font-medium">Python</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs rounded font-medium">PostgreSQL</span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-xs rounded font-medium">JS</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Backend Logic</span>
                      <span className="font-bold text-[#714B67] dark:text-[#a8709a]">95%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-[#714B67] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                   <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">SQL / Performance</span>
                      <span className="font-bold text-[#017E84] dark:text-[#2dd4dc]">90%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-[#017E84] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background elements for card */}
              <div className="absolute top-10 -right-4 w-24 h-24 bg-dots-pattern opacity-20 dark:opacity-10"></div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Mon Expertise Technique</h2>
              <div className="w-20 h-1 bg-[#714B67] mx-auto rounded-full"></div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Une maîtrise complète de la chaîne de développement Odoo, de l'infrastructure à l'interface utilisateur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard 
                icon={<Server size={32} className="text-[#714B67] dark:text-[#be8bb0]" />}
                title="Développement Backend"
                skills={['Python (Django/Flask)', 'Odoo ORM', 'PostgreSQL', 'API Rest / XML-RPC', 'Unit Testing']}
                description="Création de logique métier robuste et sécurisée. Développement de modules sur mesure pour répondre aux besoins spécifiques."
              />
              <SkillCard 
                icon={<Layout size={32} className="text-[#017E84] dark:text-[#2dd4dc]" />}
                title="Frontend & UX Odoo"
                skills={['JavaScript (OWL)', 'XML Views', 'QWeb Reports', 'HTML5 / CSS3', 'Bootstrap']}
                description="Personnalisation de l'interface Odoo (POS, Backend, Website) pour améliorer l'expérience utilisateur et la productivité."
              />
              <SkillCard 
                icon={<Terminal size={32} className="text-slate-700 dark:text-slate-300" />}
                title="DevOps & Outils"
                skills={['Git / GitHub', 'Docker / Docker Compose', 'Linux Administration', 'CI/CD Basics', 'VS Code']}
                description="Gestion des environnements de déploiement et versioning pour assurer la stabilité des instances de production."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Projets Réalisés</h2>
                <div className="w-20 h-1 bg-[#017E84] rounded-full"></div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-4 md:mt-0">Une sélection de mes travaux récents.</p>
            </div>

            <div className="space-y-12">
              {/* Project 1 */}
              <ProjectCard 
                title="Optimisation ERP & Customisation Avancée"
                company="MTechniix"
                period="2024 - Présent"
                description="Refonte des flux métiers sur Odoo v17 pour une PME. L'objectif était de réduire le temps administratif et de fiabiliser les stocks."
                tags={['Odoo v17', 'Python', 'Stock', 'Sales', 'Accounting']}
                achievements={[
                  "Conception de modules personnalisés pour la gestion des Achats et Ventes.",
                  "Optimisation UX réduisant de 20% le temps de saisie des opérateurs.",
                  "Intégration avec des partenaires externes via API."
                ]}
                color="border-l-4 border-[#714B67]"
              />

              {/* Project 2 */}
              <ProjectCard 
                title="Digitalisation de Parc Informatique"
                company="Ministère de l'Industrialisation (Madagascar)"
                period="2022 (Stage)"
                description="Développement d'une application web complète pour superviser les équipements et les employés du ministère."
                tags={['CodeIgniter', 'PHP', 'Bootstrap', 'MySQL']}
                achievements={[
                  "Conception de la base de données relationnelle.",
                  "Interface de gestion simplifiée pour le personnel non-technique.",
                  "Tableaux de bord de suivi des pannes et affectations."
                ]}
                color="border-l-4 border-[#017E84]"
              />

               {/* Project 3 */}
               <ProjectCard 
                title="Assistant IA Mobile (Chatbot)"
                company="Projet Académique (ISPM)"
                period="2022"
                description="Création d'un chatbot intelligent intégrant l'API OpenAI pour répondre aux questions des utilisateurs en langage naturel."
                tags={['Flutter', 'Dart', 'OpenAI API', 'Mobile']}
                achievements={[
                  "Intégration d'API REST tierces.",
                  "Développement d'une interface mobile réactive.",
                  "Gestion des états et des requêtes asynchrones."
                ]}
                color="border-l-4 border-slate-700 dark:border-slate-500"
              />
            </div>
          </div>
        </section>

        {/* Timeline / Education */}
        <section id="parcours" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Parcours & Formation</h2>
             
             <div className="max-w-3xl mx-auto border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 pl-8 md:pl-0 space-y-12">
               
               {/* Timeline Item 1 */}
               <div className="relative md:flex group">
                 <div className="hidden md:block w-32 text-right pr-8 pt-1 text-slate-500 dark:text-slate-400 font-bold">2023 - 2024</div>
                 <div className="absolute -left-[41px] md:left-auto md:right-1/2 md:mr-[-9px] mt-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 border-[#714B67]"></div>
                 <div className="md:pl-12 flex-1">
                   <div className="md:hidden text-sm text-slate-500 dark:text-slate-400 font-bold mb-1">2023 - 2024</div>
                   <h3 className="text-xl font-bold text-slate-800 dark:text-white">Master 1 en Informatique</h3>
                   <p className="text-[#714B67] dark:text-[#be8bb0] font-medium mb-2">ISPM - Institut Supérieur Polytechnique de Madagascar</p>
                   <p className="text-slate-600 dark:text-slate-400">Spécialisation en Informatique de Gestion, Génie Logiciel et Intelligence Artificielle. Acquisition de bases solides en algorithmique et gestion de projet.</p>
                 </div>
               </div>

               {/* Timeline Item 2 */}
               <div className="relative md:flex group">
                 <div className="hidden md:block w-32 text-right pr-8 pt-1 text-slate-500 dark:text-slate-400 font-bold">2018</div>
                 <div className="absolute -left-[41px] md:left-auto md:right-1/2 md:mr-[-9px] mt-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 border-[#017E84]"></div>
                 <div className="md:pl-12 flex-1">
                   <div className="md:hidden text-sm text-slate-500 dark:text-slate-400 font-bold mb-1">2018</div>
                   <h3 className="text-xl font-bold text-slate-800 dark:text-white">Baccalauréat Série C</h3>
                   <p className="text-[#017E84] dark:text-[#2dd4dc] font-medium mb-2">Ny Sekolintsika Analamahitsy</p>
                   <p className="text-slate-600 dark:text-slate-400">Formation scientifique rigoureuse, bases mathématiques.</p>
                 </div>
               </div>

             </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-20 bg-[#2d1e2a] dark:bg-[#1f151d] text-white transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white/5 dark:bg-black/20 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
                <p className="text-slate-300">
                  Actuellement basé à Madagascar, je suis <span className="text-green-400 font-bold">disponible immédiatement</span> pour des opportunités en France ou en remote.
                  Je prends en charge mes démarches de mobilité.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <ContactItem 
                    icon={<Mail />} 
                    label="Email" 
                    value="sederaandriamanga@gmail.com" 
                    action="mailto:sederaandriamanga@gmail.com"
                  />
                  <ContactItem 
                    icon={<Phone />} 
                    label="Téléphone / WhatsApp" 
                    value="+261 34 93 896 14" 
                    action="tel:+261349389614"
                  />
                  <ContactItem 
                    icon={<MapPin />} 
                    label="Localisation" 
                    value="Antananarivo (Mobile France)" 
                    action="#"
                  />
                  <div className="pt-4 flex gap-4">
                    <a href="https://www.linkedin.com/in/sedera-andriamanga-456488216" target="_blank" rel="noreferrer" className="bg-[#0077b5] p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full justify-center font-medium">
                      <Briefcase size={20} /> LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-slate-800 dark:text-slate-200 transition-colors">
                  <h3 className="font-bold text-lg mb-4 text-[#714B67] dark:text-[#be8bb0]">Envoyez-moi un message rapide</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Votre Nom / Entreprise</label>
                      <input type="text" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 focus:outline-none focus:border-[#714B67] dark:text-white" placeholder="Recruteur Odoo..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Message</label>
                      <textarea className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 h-24 focus:outline-none focus:border-[#714B67] dark:text-white" placeholder="Bonjour Sedera, nous cherchons un expert technique..."></textarea>
                    </div>
                    <button className="w-full bg-[#714B67] hover:bg-[#5d3d54] text-white font-bold py-3 rounded-lg transition-colors">
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1118] dark:bg-[#0f090d] text-slate-400 py-8 text-center text-sm transition-colors duration-300">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Sedera Arivelo ANDRIAMANGA. Tous droits réservés.</p>
            <div className="flex justify-center gap-4 mt-4">
              <span className="flex items-center gap-1"><Cpu size={14}/> Powered by React & Tailwind</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Sub-components for cleaner code
const SkillCard = ({ icon, title, skills, description }) => (
  <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group hover:-translate-y-1">
    <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, company, period, description, tags, achievements, color }) => (
  <div className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${color} border-slate-200 dark:border-slate-700`}>
    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h3>
        <div className="flex items-center gap-2 text-[#714B67] dark:text-[#be8bb0] font-medium mt-1">
          <Briefcase size={16} />
          <span>{company}</span>
        </div>
      </div>
      <span className="px-4 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-semibold whitespace-nowrap">
        {period}
      </span>
    </div>
    
    <p className="text-slate-600 dark:text-slate-400 mb-6">{description}</p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
        <CheckCircle size={16} className="text-green-500"/> Impact & Réalisations
      </h4>
      <ul className="space-y-2">
        {achievements.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs rounded font-medium uppercase tracking-wide">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ContactItem = ({ icon, label, value, action }) => (
  <a href={action} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
    <div className="text-[#017E84] dark:text-[#2dd4dc]">{icon}</div>
    <div>
      <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  </a>
);

export default Portfolio;