import { useState } from "react"

function Parcours() {
  const [selected, setSelected] = useState(null) // modale fermée par défaut

  const parcours = [

    
    {
      slug: "eil",
      date: "Mars 2024 – Avr. 2026",
      type: "Formation · Alternante",
      titre: "Étudiante en Ingénierie Logicielle — EIL",
      organisation: "Visiplus Academy (ISCOD)",
      realisations: ["Salon 2025", "Déploiement Dolibarr", "Refonte site MEGATEC", "Onboarding équipe", "Projet Espace Client"],
      competences: ["Rigueur budgétaire", "Autonomie opérationnelle", "Pédagogie et transmission" , "Écoute active", "Esprit d'analyse", "Coordination d'équipes", "Gestion des priorités", "Intégration d'ERP", "Gestion d'outils collaboratifs", "Déploiement de solutions numériques"],
      soustitre: "Étudiante en alternance — Ingénierie Logicielle",
      description: "ISCOD est une école spécialisée dans la formation par alternance, orientée vers les métiers du numérique et du management. La pédagogie est axée sur la pratique en entreprise, avec un accompagnement en ligne. Ce format m'a permis de monter en compétence directement sur le terrain, en parallèle de modules théoriques sur la gestion de projet, les systèmes d'information et le développement logiciel.",
    },

     {
      slug: "dev",
      date: "Mars 2024 – Avr. 2026",
      type: "Expérience · Alternante",
      titre: "Chargée de projet digital & communication",
      organisation: "MEGATEC",
      realisations: ["Salon 2025", "Déploiement Dolibarr", "Refonte site MEGATEC", "Onboarding équipe", "Projet Espace Client"],
      competences: ["Rigueur budgétaire", "Autonomie opérationnelle", "Pédagogie et transmission" , "Écoute active", "Esprit d'analyse", "Coordination d'équipes", "Gestion des priorités", "Intégration d'ERP", "Gestion d'outils collaboratifs", "Déploiement de solutions numériques"],
      soustitre: "Alternante — Chef de projet digital junior",
      description: "MEGATEC est une PME spécialisée dans la mesure de la qualité de l'air et des environnements industriels. J'y ai piloté la digitalisation des processus internes (déploiement ERP Dolibarr), la refonte du site web (CMS Strapi), l'organisation du Salon Pollutec Lyon 2025 et le cadrage de l'application Espace Client. Mon rôle m'a placée à l'interface entre les équipes métiers, la direction et les prestataires techniques.",
    },

     {
      slug: "etudiante-projet",
      date: "Jan. 2023 – Fév. 2024",
      type: "Formation · Alternant",
      titre: "Étudiante en Chargée de projet digital",
      organisation: "Visiplus Academy (ISCOD)",
      competences: ["Autonomie opérationnelle", "Coordination d'équipes", "Gestion des priorités","Gestion d'outils collaboratifs",],
      soustitre: "Étudiante en alternance — Chargée de projet digital",
      description: "Première formation en alternance chez ISCOD, spécialisée dans la gestion de projet digital. Cette période m'a permis d'acquérir les bases du pilotage de projets numériques, de la communication digitale et de la coordination d'équipes, en parallèle de la pratique terrain chez MEGATEC.",
    },

     {
      slug: "alternante-projet",
      date: "Jan. 2023 – Fév. 2024",
      type: "Expérience · Alternante",
      titre: "Chargée de projet digital & communication MEGATEC",
      organisation: "MEGATEC",
      realisations: ["Refonte site MEGATEC","Onboarding équipe"],
      competences: ["Autonomie opérationnelle", "Pédagogie et transmission", "Coordination d'équipes", "Déploiement de solutions numériques",],
      soustitre: "Alternante — Chargée de projet digital",
      description: "Première expérience en alternance chez MEGATEC, avant de poursuivre en Ingénierie Logicielle. J'ai commencé à prendre en main les projets de digitalisation et de communication de l'entreprise, posant les bases de mon rôle de chef de projet digital.",
    },

      {
      slug: "etudiante-NDRC",
      date: "Fév. 2021 – Juil. 2022",
      type: "Formation · Alternant",
      titre: "Étudiante en NDRC - BTS",
      organisation: "Paris BTS",
      realisations: ["Onboarding équipe"],
      competences: ["Pédagogie et transmission", "Coordination d'équipes",],
      soustitre: "Étudiante en alternance — préparation BTS",
      description: "Formation en alternance chez Paris BTS, préparant un BRS en parallèle d'une expérience terrain chez Rouge Rouge 3. Développement de compétences en gestion, communication et prospection commerciale.",
    
    },

     {
      slug: "alternante-propect",
      date: "Fév. 2021 – Juil. 2022",
      type: "Expérience · Alternante",
      titre: "Chargée de prospection artistique",
      organisation: "Rouge Rouge 3",
      realisations: ["Onboarding équipe"],
      competences: ["Pédagogie et transmission", "Coordination d'équipes",],
      soustitre: "Alternante — Chargée de prospection et communication",
      description: "Rouge Rouge 3 est une agence artistique indépendante. J'y ai assuré la prospection de nouveaux artistes, la gestion des outils CRM Zoho et des campagnes marketing, ainsi que l'onboarding de 2 stagiaires et d'un employé appelé à me succéder.",
    },


    
  ]


  return (
      <>
<>

  <section className="bg-white px-6 py-12 text-gray-900">
 <div  className="mx-auto max-w-6xl">
<p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        Historique
        </p>
 <h2 className="mb-7 text-5xl font-bold ">
        Mon parcours
        </h2>

         <p className="text-gray-500 text-lg leading-3 mb-20">
            Du plus récent au plus ancien. Cliquez sur une entrée pour le détail.
            </p>

<div className="space-y-8">
  {parcours.map((item, index) => (
    <div key={index} className="flex gap-6">
      
      {/* Icône à gauche */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
          {item.type.includes("Formation") ? "🎓" : "💼"}
        </div>
      </div>

      {/* Contenu */}
      <div>
        <div className="flex gap-3 mb-2">
          <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-semibold ">{item.date}</span>
          <span className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-semibold">{item.type}</span>
        </div>
        <p className="font-semibold text-lg">{item.titre}</p>
        <p className=" text-indigo-700 text-sm font-semibold ">{item.organisation}</p>
        <button onClick={() => setSelected(item)} className="text-gray-400 text-sm mt-2">Voir le détail →</button>
      </div>

    </div>
  ))}
</div>



 </div>
  </section>

{selected && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 relative">
      
      {/* Bouton fermer */}
      <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-gray-400">✕</button>
      
      {/* Contenu */}
      <p className="text-indigo-600 text-xs font-semibold uppercase mb-3">{selected.type}</p>
      <h2 className="text-xl font-bold mb-1 text-gray-800">{selected.titre}</h2>
      <p className="text-gray-400 text-sm mb-6">{selected.date} · {selected.organisation}</p>
      {selected.soustitre && <p className="font-semibold text-gray-700 mb-2">{selected.soustitre}</p>}
{selected.description && <p className="text-gray-500 text-sm leading-7 mb-6">{selected.description}</p>}
      {/* Réalisations rattachées */}
{selected.realisations && (
  <div className="mb-6">
    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Réalisations rattachées</p>
    <div className="flex flex-wrap gap-2">
      {selected.realisations.map((r, i) => (
        <span key={i} className="border border-blue-300 rounded-full px-3 py-1 text-sm text-blue-700 font-semibold">{r} →</span>
      ))}
    </div>
  </div>
)}

{/* Compétences rattachées */}
{selected.competences && (
  <div>
    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Compétences rattachées</p>
    <div className="flex flex-wrap gap-2">
      {selected.competences.map((c, i) => (
        <span key={i} className="border border-gray-300 rounded-full px-3 py-1 text-sm text-violet-700  font-semibold">{c} →</span>
      ))}
    </div>
  </div>
)}

    </div>
  </div>
)}

</>


</>


  )
}

export default Parcours