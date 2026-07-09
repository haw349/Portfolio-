import { useParams, Link } from "react-router-dom"
import { ClipboardList, Target, BookOpen, TrendingUp, Link2, Clock} from "lucide-react"

function CompetenceDetail() {
  const { slug } = useParams()
  const competences = [
 
 {
    slug: "autonomie-operationnelle",
    nom: "Autonomie opérationnelle",
    pourcentage: 85,
    type: "Compétence humaine",
    definition: "Prendre en main des tâches et outils avec initiative sans être supervisé de manière constante. L'autonomie consiste à tester, à observer et à se faire confiance lors de la découverte de nouveaux outils et à l'assimilation de tâches. Elle permet un gain de temps et d'être opérationnel plus rapidement.",
    autocritique: "J'ai tendance à chercher seule trop longtemps avant de demander de l'aide, ce qui peut ralentir l'avancement.",
    evolution: "Mon objectif des 18 prochains mois : prendre en main Jira et assurer les comptes rendus de réunions et suivis de projet en totale autonomie.",

    preuves: [
  { titre: "Déploiement Dolibarr", description: "Apprentissage en autonomie complète : documentation officielle, sandbox, forums. J'ai paramétré les modules pour MEGATEC et formé l'équipe sans prestataire externe. Résultat : 2 000€ de consulting évités.", },
  { titre: "Gestion CMS Strapi", description: "Prise en main de la gestion du site de manière autonome avec le CMS Strapi ainsi que l'ajout de plus de 30 fiches.", },
  { titre: "Salon 2025", description: "Organisation pilotée en autonomie totale, de la recherche fournisseurs aux décisions d'achat. Budget : 15 000€ → 11 144€ (-26%).", },
  ],

  realisations: [
  { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
  { titre: "Salon 2025", slug: "salon-2025", },
]

  },



   {
    slug: "pédagogie-transmission",
    nom: "Pédagogie et transmission",
    pourcentage: 75,
    type: "Compétence humaine",
    definition: "La pédagogie consiste à partager ses connaissances pour faciliter l'assimilation d'outils ou de processus nécessaires au fonctionnement de l'entreprise. Elle permet d'accompagner aussi bien les équipes lors d'un déploiement d'outil que les nouveaux arrivants dans leur intégration.",
    autocritique: "Je maîtrise la formation sur les outils métiers Dolibarr, Zoho, Canva avec des retours positifs. Il me manque encore de l'expérience sur les formations techniques complexes : architecture SI, développement, SQL. Ma pédagogie est opérationnelle, mais la structuration checklists, supports réutilisables est encore en cours.",
    evolution: "Mon objectif des 18 prochains mois : former des équipes de 10 utilisateurs ou plus sur des outils complexes.",

    preuves: [
  { titre: "Formations Dolibarr - MEGATEC", description: "12 sessions de formation (individuelles et collectives) animées pour 3 utilisateurs. Méthode : démonstration, pratique guidée, mini-guide écrit remis à chaque participant.", },
  { titre: "Onboarding nouveaux entrants", description: "2 stagiaires formés aux outils CRM Zoho et aux campagnes marketing Zoho, dès leur arrivée.", },
  { titre: "Formation CMS Strapi", description: "1 session individuelle pour accompagner un utilisateur dans la gestion autonome du site.", },
  { titre: "Formation Canva", description: "2 stagiaires formés à la création de supports visuels pour leurs missions.", },
  ],

  realisations: [
  { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
  { titre: "Onboarding équipe", slug: "onboarding-stagiaires", },
]

  },

   {
    slug: "ecoute-active",
    nom: "Écoute active",
    pourcentage: 75,
    type: "Compétence humaine",
    definition: "L'écoute active consiste à écouter attentivement et patientement et à recevoir les informations données afin de comprendre les besoins de son interlocuteur. Cette compétence est importante car elle permet de mieux comprendre le besoin de l'utilisateur et donc de mieux le formuler et le traduire.",
    autocritique: "Je suis efficace à l'écoute en face-à-face et en petit groupe. Ma limite actuelle est parfois un manque de questions suffisamment ciblées pour affiner certaines demandes. Mes axes de progression sont donc la formulation de questions plus précises et la synthèse systématique des besoins exprimés.",
    evolution: "À moyen terme, je souhaite renforcer cette compétence en participant à davantage de réunions projet et en produisant des comptes rendus clairs et structurés. Mon objectif est de poser systématiquement des questions de fond et de synthétiser précisément les besoins exprimés.",

    preuves: [
  { titre: "Recueil besoins Dolibarr", description: "3 réunions d'écoute organisées avec les services comptabilité, commercial et logistique. Résultat : meilleure compréhension des parcours utilisateurs et adaptation des formations Dolibarr aux besoins spécifiques de chaque service.", },
  { titre: "Réunions cadrage appli espace client", description: "Compréhension des besoins de l'application et de son utilisation en entreprise. Résultat : besoins métiers identifiés dès la phase initiale.", },
  { titre: "CR Dolibarr", description: "Regroupement des éléments de réunion en comptes rendus structurés → visibilité claire sur les actions : Vu / En cours / Prochaines étapes.", },
  ],

  realisations: [
  { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
]

  },

   {
    slug: "coordination-equipes",
    nom: "Coordination d'équipes",
    pourcentage: 70,
    type: "Compétence humaine",
    definition: "Coordonner une équipe, c'est permettre d'aligner les compétences de chacun dans un but clair et précis pour tous. Cela implique de comprendre comment fonctionnent ces équipes, de maintenir une bonne dynamique, de mettre en visibilité les actions de chacun avec les deadlines et tâches associées, et notamment d'assurer une bonne fluidité dans le passage des informations entre chaque service (IT, direction, RH, etc.).",
    autocritique: "Je maîtrise la coordination sur des équipes restreintes où les deadlines sont globalement respectées. Ma limite : apprendre à coordonner des équipes plus réticentes, très occupées, avec des retours irréguliers ou peu impliquées dans le projet. C'est un axe de travail en cours.",
    evolution: "À moyen terme, je souhaite apprendre à gérer des équipes occupées et réticentes, puis piloter une équipe de 10 à 15 personnes.",

    preuves: [
  { titre: "Salon Pollutec 2025 – Lyon", description: "Coordination d'une équipe de 3 personnes avec gestion des plannings, des tâches, de l'hébergement et du transport. Animation de points mensuels sur l'avancement et validation des étapes. Résultat : un salon qui s'est déroulé sans encombre, les équipes ont pu se concentrer sur leurs tâches et non sur l'organisation.", },
  ],

  realisations: [
  { titre: "Salon 2025", slug: "salon-2025", },
]

  },


  {
    slug: "rigueur-budgetaire",
    nom: "Rigueur budgétaire",
    pourcentage: 80,
    type: "Compétence humaine",
    definition: "La rigueur budgétaire consiste à respecter une somme dédiée au départ, tout en optimisant chaque euro à travers des recherches et des comparaisons afin de ne pas rogner sur la qualité ni les résultats attendus. C'est une compétence qui demande de la rigueur dans ses recherches, dans la créativité et la priorisation.",
    autocritique: "Je n'ai pas encore géré de budget important au-delà de 20k et n'en connais pas les enjeux, le fonctionnement et les contraintes.",
    evolution: "Mon objectif des 18 prochains mois : piloter un projet avec un budget supérieur à 30k€ et comprendre les contraintes et les attentes liées aux budgets plus importants.",

    preuves: [
  { titre: "Salon 2025", description: "Budget prévu : 15 000€ → Final : 11 144€, soit -26%. Périmètre : stand, goodies, hébergement 3 personnes.", },
  { titre: "Cadeaux clients", description: "Budget prévu : 2 000€ → Final : 1 136€, soit -43%. Périmètre : 17 clients + 15 partenaires.", },
  { titre: "Réaménagement salle d'accueil", description: "Budget fixé : 500€ → Dépense : 200€, soit -60%. Périmètre : 6 plantes, table basse, 2 chaises, lampe LED.", },
  ],

  realisations: [
  { titre: "Salon 2025", slug: "salon-2025", },
 { titre: "Suivi budgétaire Dolibarr", slug: "deploiement-dolibarr", },
]

  } , 

   {
    slug: "Intégration-ERP",
    nom: "Intégration d'ERP",
    pourcentage: 85,
    type: "Compétence Technique",
    definition: "Dolibarr est un ERP open-source, qui couvre un large panel de services (CRM, comptabilité, gestion des stocks, RH) et permet donc de centraliser toutes les données de l'entreprise en un seul logiciel très personnalisable. Les ERP sont aujourd'hui importants dans un monde digitalisé où toutes les informations sont de préférence stockées digitalement par sécurité et centralisées. Cela permet également d'automatiser grâce aux systèmes des tâches plus répétitives. Comme avec le workflow Dolibarr qui permet de ne pas ressaisir les mêmes informations pour le suivi d'un même dossier.",
    autocritique: "Je maîtrise Dolibarr à un niveau opérationnel avancé : déploiement, migration, formation et résolution de bugs. Ma limite : je ne développe pas encore de modules personnalisés en PHP ni d'intégrations API complexes entre systèmes. C'est un axe de progression, à la croisée de ma double compétence métier et développement.",
    evolution: "Mon objectif des 18 prochains mois : déployer des outils plus complexes à plus grande échelle, créer des rapports personnalisés et explorer les alternatives ERP du marché",

    preuves: [
  { titre: "Déploiement complet chez MEGATEC", description: "Découverte et paramétrage des modules, migration des données depuis Excel, formation de 4 utilisateurs (parcours individuels + global notes de frais / congés). Résultats : 100% des notes de frais et congés, 80% des factures et commandes, 100% des produits gérés dans l'outil. Gain de temps estimé à +20%, 3 emailings réalisés et masque aux couleurs de la charte graphique configuré.", },
  { titre: "Résolution de 12 bugs", description: "Identification et correction autonome de 12 bugs fonctionnels : problèmes d'importation, erreurs d'affichage, doublons et blocages. Toutes les corrections ont été effectuées sans intervention externe.", },
  ],

  realisations: [
  { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
]

  } ,
  

  {
  slug: "developpement-frontend",
  nom: "Développement front-end (React)",
  pourcentage: 70,
  type: "Compétence Technique",
  definition: "Le développement front-end consiste à construire toute la partie visible d'une application : les pages et les écrans avec lesquels l'utilisateur interagit directement. Je travaille avec React, qui permet de construire une interface à partir de composants — des blocs réutilisables qui affichent différentes données sans avoir à les recoder à chaque fois — et avec Tailwind pour la mise en forme. Chez MEGATEC, j'ai développé le front de l'espace client, et j'ai également codé ce portfolio.",
  autocritique: "Je sais coder des interfaces simples et fonctionnelles en React. Ma limite : sur les parties plus complexes, je m'appuie encore sur de l'aide et de la documentation technique. Cette compétence est centrale dans mon profil, puisqu'elle m'a permis de développer une application réellement utilisée.",
  evolution: "Mon objectif des 18 prochains mois : développer des interfaces plus techniques en m'appuyant beaucoup moins sur la documentation et gagner en autonomie sur les fonctionnalités avancées.",
  preuves: [
    { titre: "Front de l'espace client MEGATEC", description: "J'ai codé les écrans que l'utilisateur manipule une fois connecté : son tableau de bord, l'affichage de ses documents et fiches techniques, la liste des produits en location et la redirection vers le contact. L'interface s'adapte à chaque client connecté." },
    { titre: "Ce portfolio", description: "Développé en React et Tailwind. J'y ai créé des composants réutilisables (cartes de compétences, cartes de réalisations) : le code parcourt une liste et génère automatiquement l'affichage, au lieu d'écrire chaque bloc à la main." },
  ],
  realisations: [
    { titre: "Projet Espace Client", slug: "espace-client" },
  ],
},
  

{
  slug: "base-de-donnees-supabase",
  nom: "Intégration back-end & base de données (Supabase)",
  pourcentage: 65,
  type: "Compétence Technique",
  definition: "Le back-end et la base de données, c'est toute la partie invisible qui stocke les informations et les fournit à l'application. J'utilise Supabase, qui me sert à la fois de base de données (pour stocker et récupérer les données) et de système d'authentification sécurisé.",
  autocritique: "Je sais créer des tables simples, stocker et récupérer des données. Ma limite : je m'appuie encore sur de la documentation technique pour les opérations plus complexes. Cette compétence est essentielle dans mon profil, car c'est elle qui permet à mon application de fonctionner avec de vraies données.",
  evolution: "Mon objectif des 18 prochains mois : gagner en autonomie sur la conception de bases de données et savoir écrire des requêtes plus complexes sans m'appuyer sur la documentation.",
  preuves: [
    { titre: "Base de données de l'espace client", description: "Les documents de chaque client et les informations produits sont stockés dans Supabase. Quand un client se connecte, l'application va récupérer ses documents dans la base et les affiche à l'écran." },
    { titre: "Authentification sécurisée", description: "Je m'appuie sur le système Auth de Supabase : les mots de passe sont chiffrés et gérés par Supabase, de sorte que personne — pas même moi — n'a accès aux identifiants des clients en clair." },
  ],
  realisations: [
    { titre: "Projet Espace Client", slug: "espace-client" },
  ],
},

{
  slug: "securite-rls",
  nom: "Sécurité applicative (RLS)",
  pourcentage: 60,
  type: "Compétence Technique",
  definition: "La sécurité applicative consiste à protéger les données des utilisateurs pour que chacun n'accède qu'à ce qui le concerne. Sur l'espace client MEGATEC, j'ai mis en place la RLS (Row Level Security) de Supabase : une règle appliquée directement sur la base de données qui garantit que chaque client ne voit que ses propres documents.",
  autocritique: "J'ai réussi à mettre en place des règles RLS en m'appuyant sur de la documentation technique. Ma limite : la démarche n'est pas encore automatique pour moi, et je progresse encore sur les règles de sécurité plus avancées. Cette compétence est importante dans mon profil, car elle garantit la confidentialité des données clients — un enjeu de confiance essentiel pour une entreprise.",
  evolution: "Mon objectif des 18 prochains mois : gagner en autonomie sur la mise en place des règles RLS et savoir écrire des règles de sécurité plus avancées sans m'appuyer sur la documentation.",
  preuves: [
    { titre: "Isolation des données clients", description: "Quand un client se connecte, il n'a accès qu'à ses propres documents ; il ne peut pas voir ceux des autres clients. Cette règle est appliquée au niveau de la base de données elle-même, pas seulement de l'affichage — donc les données restent protégées même si l'interface était contournée." },
    { titre: "Authentification + sécurité", description: "Couplée au système Auth de Supabase, la RLS identifie chaque client connecté et ne lui renvoie que les données qui lui appartiennent." },
  ],
  realisations: [
    { titre: "Projet Espace Client", slug: "espace-client" },
  ],
},

{
  slug: "versioning-deploiement",
  nom: "Versioning & déploiement (Git / Netlify)",
  pourcentage: 65,
  type: "Compétence Technique",
  definition: "Le versioning et le déploiement couvrent la sauvegarde du code et sa mise en ligne. J'utilise Git pour conserver mon code, garder l'historique de mes modifications et pouvoir revenir à une version antérieure. Le déploiement consiste à rendre l'application accessible en ligne.",
  autocritique: "Je comprends le fonctionnement de Git et de GitFlow, et je sais versionner mon code et déployer sur Netlify. Ma limite : je n'ai pas appliqué GitFlow assez tôt dans mon projet, donc je ne l'ai pas encore mis en œuvre en conditions réelles. Cette compétence est essentielle dans mon profil, car elle garantit de garder la main sur son projet et de toujours disposer d'un filet de sécurité.",
  evolution: "Mon objectif des 18 prochains mois : prendre l'habitude de démarrer chaque projet avec Git et GitFlow dès le départ, pour garantir la propreté du code, la traçabilité des versions et un filet de sécurité permanent. À terme, automatiser aussi la mise en ligne à chaque modification.",
  preuves: [
    { titre: "Versioning avec Git", description: "J'ai connecté mon dépôt GitHub à mon projet portfolio via le terminal de mon IDE, pour sauvegarder mon code, suivre son historique et pouvoir revenir à une version antérieure." },
    { titre: "Déploiement sur Netlify", description: "J'ai mis mon portfolio en ligne sur Netlify, le rendant accessible par une URL publique. J'ai également déployé l'application espace client MEGATEC sur Netlify." },

  ],
  realisations: [
    { titre: "Projet Espace Client", slug: "espace-client" },
  ],
},

  
]
  
const competence = competences.find(c => c.slug === slug)

  return (
      <section className="bg-white px-6 py-12 text-gray-900 ">
         <div  className="mx-auto max-w-6xl">
    <div>
         <Link to="/competences" className="text-gray-500 text-sm leading-6 mb-6">← Retour aux compétences</Link>

    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
  
  <div className="flex justify-between items-center font-semibold">
    <div>
      <p className="text-rose-400 text-sm uppercase tracking-widest mb-2 ">
        {competence.type}
      </p>
      <h1 className="text-4xl font-bold text-gray-900">
        {competence.nom}
      </h1>
    </div>
    <span className="text-6xl font-bold text-rose-400">
      {competence.pourcentage}%
    </span>
  </div>

  {/* Barre de progression */}
  <div className="w-full bg-rose-200 rounded-full h-1 mt-4">
    <div className="bg-rose-400 h-1 rounded-full" style={{width: `${competence.pourcentage}%`}}></div>
  </div>


</div>



    </div>
    
<br />

  <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm " >

    <span className=" inline-flex  items-center gap-3 px-3 py-1.5 text-blue-600 rounded-full bg-indigo-100 mb-3">
            <ClipboardList />
          <p className="text-sm font-semibold ">
              Définition & Contexte
            </p>    
    </span>
          <p className="text-gray-500 text-base leading-8 mb-3 px-3">
            {competence.definition}
            </p>
            </div>


            <br />

  <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm " >

    <span className=" inline-flex  items-center gap-3 px-3 py-1.5 text-orange-600 rounded-full bg-orange-100 mb-3">
            <Target />
          <p className="text-sm font-semibold ">
              Autocritique
            </p>    
    </span>
          <p className="text-gray-500 text-base leading-8 mb-3 px-3">
            {competence.autocritique}
            </p>
            </div>


            <br />

  <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm " >

    <span className=" inline-flex  items-center gap-3 px-3 py-1.5 text-emerald-600 rounded-full bg-emerald-50 mb-3">
            <TrendingUp />
          <p className="text-sm font-semibold ">
              Mon évolution (objectif 18 mois)
            </p>    
    </span>
          <p className="text-gray-500 text-base leading-8 mb-3 px-3">
            {competence.evolution}
            </p>
            </div>

            
   

 <br />

  <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm " >

    <span className=" inline-flex  items-center gap-3 px-3 py-1.5 text-violet-600 rounded-full bg-violet-50 mb-3">
            <Clock />
          <p className="text-sm font-semibold ">
              Mes preuves concrétes
            </p>    
    </span>
          <p className="text-gray-500 text-base leading-8 mb-3 px-3">
            {competence.preuves.map((preuve, index) =>  (

       <div >
  <div key={index} className=" flex items-start gap-3 mb-4" >
    <p className=" inline-flex items-center justify-center w-6 h-6 px-2 py-1 text-violet-600 rounded-full bg-violet-50 text-xs font-bold">
      {index + 1}
      </p>
      <div>
        <p className=" font-semibold text-black">
      {preuve.titre}</p>  
      <p>{preuve.description}</p>
</div>
      </div>

  
  </div>
))}
            </p>
            </div>



             <br />

            

  <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm " >

     <span className=" inline-flex  items-center gap-3 px-3 py-1.5 text-green-600 rounded-full bg-green-50 mb-3">
            <Link2 />
          <p className="text-sm font-semibold ">
              Réalisations associées
            </p>    
    </span>

    <div className="flex flex-wrap gap-3 mt-3">
  {competence.realisations.map((realisation, index) => (
    <Link 
      key={index}
      to={`/realisation/${realisation.slug}`}
      className="border border-teal-400 text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-teal-50"
    >
      {realisation.titre}
    </Link>
  ))}
</div>

            </div>



    </div>
    </section>
  )
}

export default CompetenceDetail