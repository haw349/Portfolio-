import { Link } from "react-router-dom"

function Competences() {

   const competencesHumaines = [
    { nom: "Rigueur budgétaire", pourcentage: 80, slug: "rigueur-budgetaire" },
    { nom: "Autonomie opérationnelle", pourcentage: 85, slug: "autonomie-operationnelle" },
    { nom: "Pédagogie et transmission", pourcentage: 75, slug: "pédagogie-transmission" },
    { nom: "Écoute active", pourcentage: 75, slug: "ecoute-active" },
    { nom: "Esprit d'analyse", pourcentage: 72, slug: "esprit-analyse" },
    { nom: "Coordination d'équipes", pourcentage: 70, slug: "coordination-equipes" },
    { nom: "Gestion des priorités", pourcentage: 70, slug: "gestion-priorités" },
  ]
  
  const competencesTechniques = [
    { nom: "Intégration d'ERP", pourcentage: 80, slug: "Intégration-ERP" },
    { nom: "Gestion d'outils collaboratifs", pourcentage: 85, slug: "Gestion-collaboratifs" },
    { nom: "Déploiement de solutions numériques", pourcentage: 75, slug: "Déploiement-solutions" },
  ]


  
  return (
<>
<>

  <section className="bg-white px-6 py-12 text-gray-900">
 <div  className="mx-auto max-w-6xl">

  
<p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        EIL – Ingénierie Logicielle
        </p>
 <h2 className="mb-7 text-5xl font-bold ">
        Mes 10 compétences
        </h2>

         <p className="text-gray-500 text-lg leading-3 mb-20">
            Cliquez sur une compétence pour accéder à l'article détaillé.
            </p>

   <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm mb-10">
  <h3 className="text-xl font-bold mb-8">Schéma comparatif — Vue d'ensemble</h3>
  
  <div className="grid grid-cols-2 gap-12">
    
    {/* Colonne humaines */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-rose-400"></div>
        <span className="text-sm font-semibold text-gray-600">Compétences humaines</span>
      </div>
      {competencesHumaines.map((c, i) => (
        <div key={i} className="flex items-center gap-3 mb-3">
          <span className="text-xs text-rose-500 text-right w-40 shrink-0">{c.nom}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-rose-400 h-2 rounded-full" style={{width: `${c.pourcentage}%`}}></div>
          </div>
          <span className="text-xs text-gray-900  font-bold w-8">{c.pourcentage}%</span>
        </div>
      ))}
    </div>

    {/* Colonne techniques - à vous de faire ! */}

    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
        <span className="text-sm font-semibold text-indigo-600">Compétences Techniques</span>
      </div>
      {competencesTechniques.map((c, i) => (
        <div key={i} className="flex items-center gap-3 mb-3">
          <span className="text-xs text-indigo-500 text-right w-40 shrink-0">{c.nom}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-400 h-2 rounded-full" style={{width: `${c.pourcentage}%`}}></div>
          </div>
          <span className="text-xs text-gray-900  font-bold w-8">{c.pourcentage}%</span>
        </div>
      ))}
        </div>
  </div>
</div>
  

                

 </div>
  </section>


<section className="bg-white px-6 py-12 text-gray-900">
<div  className="mx-auto max-w-6xl">
<h2 className="mb-7 text-2xl font-bold ">
Compétences humaines
</h2>

 <div className="grid grid-cols-2 gap-4 ">
        {competencesHumaines.map((competence) => (

          
          
  <Link to={`/competences/${competence.slug}`} key={competence.nom} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  
  {/* Nom et % côte à côte */}
  <div className="flex justify-between mb-3">
    <span className="text-gray-800 font-medium">{competence.nom}</span>
    <span className="text-rose-400 font-bold">{competence.pourcentage}%</span>
  </div>

  {/* Barre avec fond gris */}
  <div className="w-full bg-gray-200 rounded-full h-1">
    <div className="bg-rose-400 h-1 rounded-full" style={{width: `${competence.pourcentage}%`}}></div>
  </div>

</Link>
        ))}
    

      </div>       






</div>
</section>

<section className="bg-white px-6 py-12 text-gray-900">
<div  className="mx-auto max-w-6xl">
<h2 className="mb-7 text-2xl font-bold ">
Compétences Techniques
</h2>

 <div className="grid grid-cols-2 gap-4 ">
        {competencesTechniques.map((competence) => (

          
          
  <Link to={`/competences/${competence.slug}`} key={competence.nom} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  
  {/* Nom et % côte à côte */}
  <div className="flex justify-between mb-3">
    <span className="text-gray-800 font-medium">{competence.nom}</span>
    <span className="text-indigo-500 font-bold">{competence.pourcentage}%</span>
  </div>

  {/* Barre avec fond gris */}
  <div className="w-full bg-gray-200 rounded-full h-1">
    <div className="bg-indigo-500 h-1 rounded-full" style={{width: `${competence.pourcentage}%`}}></div>
  </div>

</Link>
        ))}
    

      </div>       






</div>
</section>





</>


</>
  


  )
}

export default Competences