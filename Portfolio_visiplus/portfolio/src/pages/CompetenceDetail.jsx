import { useParams, Link } from "react-router-dom"
import { ClipboardList, Target, BookOpen, TrendingUp, Link2, Clock} from "lucide-react"

function CompetenceDetail() {
  const { slug } = useParams()
  const competences = [
  {
    slug: "esprit-analyse",
    nom: "Esprit d'analyse",
    pourcentage: 72,
    type: "Compétence humaine",
    definition: "L'esprit d'analyse consiste, à l'aide de différentes informations amassées de différentes manières, à analyser au mieux et à pousser la réflexion sur un problème ou une situation afin d'en comprendre le problème en profondeur. Ce diagnostic permettra par la suite de trouver une solution adaptée au problème ou de réajuster certains éléments.",
    autocritique: "Je n'ai pas encore l'automatisme de réaliser une analyse et une réflexion poussée et je passe plus directement à la recherche de la résolution du problème.",
    evolution: "J'ambitionne de gérer des projets plus complexes pour développer mes compétences en analyse fonctionnelle et construire des stratégies plus complètes",
    preuves: [
  { titre: "Diagnostic bugs Dolibarr", description: "Lors des bugs rencontrés sur Dolibarr, j'ai pris le temps de faire des recherches sur les forums, de réaliser des tests et d'explorer la documentation pour trouver des solutions, sans recourir à un prestataire externe.", },
  { titre: "Intégration Dolibarr - équipes réticentes", description: "Lorsque certaines équipes étaient réticentes à utiliser l'outil, j'ai réalisé des entretiens individuels accompagnés de questionnaires envoyés en amont afin de comprendre le fonctionnement, les problèmes possibles et les solutions envisageables.", },
  { titre: "Analyse besoins application Espace Client", description: "J'ai analysé mes différentes notes de réunion de fin d'année, d'entretiens individuels et d'entretiens avec le client afin de mieux comprendre le besoin et le parcours utilisateur, pour développer une application qui respecterait au mieux la demande.", },
  ],
  realisations: [
  { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
  { titre: "Réunions cadrage appli espace client", slug: "espace-client", },
]

  },


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
    slug: "gestion-priorités",
    nom: "Gestion des priorités",
    pourcentage: 75,
    type: "Compétence humaine",
    definition: "Gérer les priorités, c'est analyser l'ensemble des tâches et mettre en avant celles qui nécessitent une intervention en premier, puis trier les tâches en fonction de leur nécessité et du blocage qu'elles peuvent provoquer selon les timelines des projets. Les imprévus et nouvelles tâches étant constants, il est important de savoir recentrer son équipe sur l'essentiel pour livrer les projets dans les délais.",
    autocritique: "Je suis efficace sur la priorisation dans des projets avec un périmètre défini. Ma limite : sur des projets multi-équipes avec de nombreuses parties prenantes, les arbitrages deviennent plus complexes.",
    evolution: "Mon objectif serait de gérer des projets multi-équipes de plus grande envergure et d'apprendre à utiliser des outils plus poussés et utilisés dans le domaine.",

    preuves: [
  { titre: "Gestion des demandes multiples - MEGATEC", description: "Face aux différentes demandes de l'entreprise liées au site internet, aux fiches techniques, aux imports Dolibarr ou à la création de newsletters clients, il a été important d'analyser les deadlines et le contexte pour choisir la tâche prioritaire selon le profit, la visibilité, la crédibilité et les rendez-vous avec les clients.", },
  { titre: "Déploiement Dolibarr", description: "En pleine intégration, avec de nombreux éléments à mettre en place, il était crucial de visualiser quels éléments devaient être intégrés en premier pour rendre l'outil fonctionnel le plus rapidement possible, puis d'ajuster et d'ajouter les éléments demandés par les équipes pour améliorer l'utilisation et le confort utilisateur.", },
  ],

  realisations: [
  { titre: "Salon 2025", slug: "salon-2025", },
 { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
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
    autocritique: "Je maîtrise Dolibarr à un niveau opérationnel avancé : déploiement, migration, formation et résolution de bugs. Ma limite : je ne fais pas de développement de modules personnalisés (PHP) ni d'intégrations API complexes avec d'autres systèmes. Mon profil visé est AMOA, pas développeur ERP.",
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
    slug: "Gestion-collaboratifs",
    nom: "Gestion d'outils collaboratifs",
    pourcentage: 82,
    type: "Compétence Technique",
    definition: "Les outils de gestion collaboratif permettent d'avoir une meilleure visibilité sur les parties prenantes du projet, les tâches, les délais et les priorités dans un projet, donc de prendre de meilleures décisions sur l'avancement d'un projet.",
    autocritique: "Je maîtrise Trello pour des projets de taille moyenne comme le salon. Ma limite : sur des projets complexes multi-équipes qui nécessiteraient d'utiliser d'autres outils que je ne connais pas et que je ne maîtrise pas.",
    evolution: "Mon objectif des 18 prochains mois : découvrir et utiliser des outils plus largement utilisés dans d'autres entreprises pour la gestion des équipes.",

    preuves: [
  { titre: "Coordination Salon Pollutec 2025", description: "Board dédié avec checklists, assignations et deadlines par responsable. Résultat : la direction pouvait suivre l'avancement en temps réel sans réunion de statut.", },
  { titre: "Suivi déploiement Dolibarr", description: "Board dédié au déploiement Dolibarr avec 8 colonnes : Backlog / Questions & aide / Bugs / Réponses & solutions / Demandes de formation / Demandes & axes d'amélioration / Actions en cours / Actions terminées. Permettait de centraliser tous les retours équipes et de ne rien laisser sans réponse.", },
  { titre: "Développement application Espace Client MEGATEC", description: "Board de suivi du développement de l'application avec gestion des tâches, étapes de validation et remontées client et visibilité complète sur l'avancement du projet.", },
  
  ],

  realisations: [
    { titre: "Salon 2025", slug: "salon-2025", },
   { titre: "Déploiement Dolibarr ", slug: "deploiement-dolibarr", },
]

  } ,
  
  
    {
    slug: "Déploiement-solutions",
    nom: "Déploiement de solutions numériques",
    pourcentage: 72,
    type: "Compétence Technique",
    definition: "Déployer un outil numérique en entreprise est un processus complet qui nécessite d'abord d'analyser des besoins, de paramétrer, une migration des données, puis une formation aux utilisateurs afin de mieux les accompagner au changement.",
    autocritique: "Je maîtrise les déploiements d'outils tels que Dolibarr. Ma limite : je n'ai pas encore piloté de déploiement à grande échelle (100+ utilisateurs) ni de migration de données complexe.",
    evolution: "Mon objectif des 18 prochains mois : piloter un déploiement CRM/ERP pour 20+ utilisateurs.",

    preuves: [
  { titre: "Déploiement Dolibarr - MEGATEC", 
    description: "Pilotage bout-en-bout, paramétrage des modules, migration des données depuis Excel, 12 sessions de formation (individuelles et collectives) pour 4 utilisateurs. Résultats : 100% des notes de frais et congés, 80% des factures et commandes gérés dans l'outil. ", },
  { titre: "Formation outils Zoho - nouveaux entrants", description: "Formation de 2 stagiaires aux outils CRM Zoho et campagnes marketing Zoho dès leur arrivée, avec accompagnement guidé jusqu'à la prise en main autonome.", },
  ],

  realisations: [
   { titre: "Déploiement Dolibarr", slug: "deploiement-dolibarr", },
  { titre: "Onboarding équipe", slug: "onboarding-stagiaires", },
]

  }  

  
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