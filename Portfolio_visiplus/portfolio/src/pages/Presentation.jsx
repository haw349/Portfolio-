import { ClipboardList, BookOpen, ShieldCheck, Settings } from "lucide-react"

function Presentation() {
  return (
    <>
        <>
    <section className="bg-white px-6 py-12 text-gray-900">
      <div  className="mx-auto max-w-6xl">

      
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        Qui je suis
        </p>
      <h2 className="mb-15 text-4xl font-bold ">
        Mes valeurs
        </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-50 bg-white p-8 shadow-sm" >
          <div className= "bg-indigo-50 rounded-xl w-10 h-10 flex items-center justify-center ">
            <ClipboardList />
          </div>
          <h4 className="mb-3 text-lg font-semibold text-gray-900 ">
            Rigueur et sens des responsabilités
            </h4>
          <p className="text-gray-500 text-base leading-8 mb-8">
            Un Trello est attitré à chaque projet afin d'en gérer la visibilité sur l'ensemble des tâches, leurs dates, leurs avancements et leurs priorités. Pour le salon, un planning et un budget prévisionnel ont été mis en place, les dépenses finales ont été inférieures aux prévisions de 26%.
            </p>
        </div>

        <div className="rounded-2xl border border-gray-50 bg-white p-8 shadow-sm" >
          <div className= "bg-indigo-50 rounded-xl w-10 h-10 flex items-center justify-center">
            <BookOpen />
          </div>
          <h4 className="mb-3 text-lg font-semibold text-gray-900  ">
            Partage des connaissances
            </h4>
          <p className="text-gray-500 text-base leading-8 mb-8">
            Des formations individuelles personnalisées métier et collectives ont été animées et mises en place, accompagnées d'un manuel et de mini-guides écrits remis à disposition de chaque participant. J'ai été chargée de former des futurs employés au sein de la compagnie Rouge Rouge 3.
            </p>
        </div>

        <div className="rounded-2xl border border-gray-50 bg-white p-8 shadow-sm" > 
          <div className= "bg-indigo-50 rounded-xl w-10 h-10 flex items-center justify-center">
            <ShieldCheck />
          </div>         
          <h4 className="mb-3 text-lg font-semibold text-gray-900 ">
            Fiabilité et respect des engagements
            </h4>
          <p className="text-gray-500 text-base leading-8 mb-8">
            Les formations et réunions fixées sont respectées, le délai des tâches est généralement observé par ordre de priorité grâce à Trello. Pour le salon, les communications, invitations et planning ont été communiqués dans les temps, garantissant la crédibilité de MEGATEC.
            </p>
        </div>

        <div className="rounded-2xl border border-gray-50 bg-white p-8 shadow-sm" >
          <div className= "bg-indigo-50 rounded-xl w-10 h-10 flex items-center justify-center">
            <Settings />
          </div>
          <h4 className="mb-3 text-lg font-semibold  text-gray-900 ">
            Apprentissage continu
            </h4>
          <p className="text-gray-500 text-base leading-8 mb-8">
            Dolibarr, Trello et Strapi sont des outils qui ont été appris en autonomie complète, sans prestataire externe. L'utilisation de l'IA pour la rédaction de fiches techniques et les traductions a permis un gain de temps significatif avec relecture et validation systématique de ma part.
            </p>
        </div>

        </div> 
        </div>
      </section>

      <section className="bg-white px-6 py-12 text-gray-900 ">
        <div  className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
          Avenir
          </p>
      <h2 className="mb-15 text-4xl font-bold ">
        Mon projet professionnel
        </h2> 
        <div className= "rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
       <h6 className="mb-2 text-base font-bold text-gray-900 ">
        Objectif à 3 ans
        </h6>
       <p className="text-gray-500 text-base leading-8 mb-6">
       Mon objectif à court terme est d'évoluer vers un poste de consultante AMOA.
        </p>
       <h6 className="mb-2 text-base font-bold text-gray-900">
        Missions visées
        </h6>
       <p className="text-gray-500 text-base leading-8 mb-6">
        Les missions qui m'attirent : coordonner des équipes, déployer des outils, former et créer des guides opérationnels. 
        </p>
       <h6 className="mb-3 text-base font-bold text-gray-900 ">
        Parcours envisagé
        </h6>
       <p className="text-gray-500 text-base leading-8 mb-6">
        Chargée de projet  →  Consultante ERP → Consultante Digital</p>
       </div>
       </div>
      </section>

      <section className="bg-white px-6 py-12 text-gray-900">
        <div className="grid gap-12 md:grid-cols-2 mx-auto max-w-6xl">

       <div>
       <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        Humain
        </p>
      <h2 className="mb-10 text-3xl font-bold ">
        Mes qualités
        </h2>

        <div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
      <h6 className="mb-1 text-base font-bold text-gray-900">
        Rigueur et sens des responsabilités
        </h6>
      <p className="text-gray-500 text-sm leading-6 mb-6">
        Salon 2025 : optimisation du budget avec une réduction de 26 % par rapport aux prévisions.
      </p>
       </div>
     </div>

<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
      <h6 className="mb-1 text-base font-bold text-gray-900">
        Autonomie opérationnelle
        </h6>
      <p className="text-gray-500 text-sm leading-6 mb-6">
        Apprentissage et utilisation indépendante de Dolibarr pour la gestion des notes de frais, des commandes clients et des bons de livraison.
        </p>
 </div>
     </div>


 <div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
      <h6 className="mb-1 text-base font-bold text-gray-900">
        Pédagogie et transmission
        </h6>
      <p className="text-gray-500 text-sm leading-6 mb-6">
        Formation de cinq utilisateurs à Dolibarr pour faciliter son adoption et leur permettre d'atteindre l'autonomie.
        </p>
</div>
     </div>


<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
      <h6 className="mb-1 text-base font-bold text-gray-900">
        Esprit d'analyse
        </h6>
      <p className="text-gray-500 text-sm leading-6 mb-6">
       Capacité à interpréter les pics de trafic du site Internet sur Google Analytics suite à une newsletter ou un post sur les réseaux sociaux.
        </p>
</div>
     </div>
        

      </div>

     <div>
     <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
      Loisirs
      </p>
    <h2 className="mb-10 text-3xl font-bold " >
      Mes centres d'intérêt
      </h2>

<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
    <h6 className="mb-1 text-base font-bold text-gray-900">
      Planification de voyages
      </h6>
    <p className="text-gray-500 text-sm leading-6 mb-6">
      Organisation de voyages en optimisant les coûts et les activités (transport, logement, visites). Cette activité me permet de développer mon sens de l'organisation et de la gestion budgétaire.
      </p>
</div>
     </div>

<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
    <h6 className="mb-1 text-base font-bold text-gray-900">
      Organisation d'événements
      </h6>
    <p className="text-gray-500 text-sm leading-6 mb-6">
      Planification de soirées ou d'événements avec gestion du planning et du budget pour plusieurs participants. Cela me permet de travailler la coordination et l'anticipation.
      </p>
</div>
     </div>


<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
    <h6 className="mb-1 text-base font-bold text-gray-900">
      Création audiovisuelle
      </h6>
    <p className="text-gray-500 text-sm leading-6 mb-6">
      Réalisation de vidéos et montages à partir de photos et de séquences vidéo via des outils comme Renderforest. Cette activité développe ma créativité et ma sensibilité visuelle.
      </p>
</div>
     </div>


<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
    <h6 className="mb-1 text-base font-bold text-gray-900">
      Organisation personnelle
      </h6>
    <p className="text-gray-500 text-sm leading-6 mb-6">
      Utilisation d'outils de planification comme Trello pour structurer mes projets personnels et professionnels, afin de suivre les tâches et prioriser les actions.
      </p>
      
      </div>
     </div>


</div>
        </div>
       
      </section>
    
    
    </>
    </>
  )
}

export default Presentation