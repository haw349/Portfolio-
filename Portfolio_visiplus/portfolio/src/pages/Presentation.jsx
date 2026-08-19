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
            Un Trello est attitré à chaque projet afin d'obtenir une meilleure visibilité sur l'ensemble des tâches, leurs dates, leurs avancements et leurs priorités. Pour le salon, un planning et un budget prévisionnel ont été réalisés et les dépenses finales ont été inférieures aux prévisions de 26%.
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
            Des formations individuelles personnalisées métier et collectives ont été mises en place, soutenues par un manuel et des mini-guides écrits déposés dans un dossier partagé accessible facilement à tout moment. J'ai été chargée de former des futurs employés au sein de la compagnie Rouge Rouge 3.
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
            Les formations et réunions fixées sont généralement bien respectées, le délai des tâches est facilement observable par ordre de priorité et date grâce à Trello. Pour le salon, les communications, invitations et planning ont été communiqués dans les temps, permettant à MEGATEC de participer au salon sans prise de tête car tout a été préparé en amont.
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
           Dolibarr, Trello et Strapi sont des outils qui ont été appris en autonomie, sans prestataire externe. L'utilisation de l'IA pour la rédaction de fiches techniques et les traductions a permis de gagner du temps avec relecture et validation  de ma part.
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
       Mon objectif à court terme serait d'évoluer vers un poste de consultante AMOA. Ce qui m'attire dans ce métier est le lien entre le besoin et la solution. J'ai appris au sein de MEGATEC l'importance de comprendre avant tout la vraie demande du client, de la traduire puis de la formaliser, afin de mieux accompagner mon équipe de manière claire vers sa réalisation technique et son adoption.
        </p>
       <h6 className="mb-2 text-base font-bold text-gray-900">
        Missions visées
        </h6>
       <p className="text-gray-500 text-base leading-8 mb-6">
        Les missions qui m'attirent sont le recueil et la traduction des besoins en solutions concrètes, la partie migration des données si nécessaire selon le projet, la formation des équipes, ainsi que la création de guides opérationnels facilement navigables afin d’améliorer la facilité d'adoption des outils dans leur quotidien. Ma double compétence, compréhension du métier et développement, me permet de bien comprendre mes interlocuteurs techniques et les utilisateurs.
        </p>
       <h6 className="mb-3 text-base font-bold text-gray-900 ">
        Parcours envisagé
        </h6>
       <p className="text-gray-500 text-base leading-8 mb-6">
        Chargée de projet → Consultante AMOA / ERP → Consultante Digital. À moyen terme, je souhaite rejoindre une entreprise de plus grande taille pour gagner en expérience terrain, découvrir comment les projets y sont pilotés et m'approprier des méthodes de travail plus structurées.</p>
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
       Salon 2025 : optimisation du budget avec une réduction de 26 % par rapport aux prévisions, grâce à des recherches rigoureuses de tous nos besoins pendant le salon tout en respectant le budget et la recherche de qualité. La rigueur me sert autant dans la gestion d'un budget que dans le suivi précis des tâches et des délais d'un projet.
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
       Apprentissage et utilisation de nombreux nouveaux outils comme Mailchimp, Canva, Trello et Dolibarr (notes de frais, commandes clients, bons de livraison), mais aussi montée en compétence en autonomie sur des outils techniques comme React et Supabase, en m'appuyant sur la documentation ou des tutos. Je sais avancer seule sur un sujet nouveau, sans avoir peur de prendre des initiatives.
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
      Formation de cinq utilisateurs sur Dolibarr afin de faciliter son adoption et l'autonomie de leur utilisation au sein de l'entreprise. Ces formations sont accompagnées de mini-guides écrits. J'aime former mes équipes et les accompagner pour rendre accessible ce qui paraît complexe, une qualité utile aussi bien pour former des équipes que pour expliquer un choix technique à des personnes non techniques.
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
       Capacité à interpréter les pics de trafic du site sur Google Analytics suite à une newsletter ou un post. Cet esprit d'analyse me sert aussi à rechercher des stratégies adaptées à l'entreprise par rapport aux données factuelles afin d'augmenter les performances du site.
        </p>
</div>
     </div>


     <div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
      <h6 className="mb-1 text-base font-bold text-gray-900">
       Qualité et sécurité du code
        </h6>
      <p className="text-gray-500 text-sm leading-6 mb-6">
       Attention portée à la qualité et à la sécurité de ce que je développe. Sur l'application espace client, j'ai mis en place des règles d'accès (RLS) garantissant que chaque client ne voit que ses propres documents, une exigence de confidentialité que je considère comme non négociable dans un projet.
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
     J'aime organiser des voyages en anticipant les coûts et les activités (transport, logement, visites). Je compare les options avec des sites comme Kombo, Google ou Booking. Je planifie les étapes de l'hôtel aux activités et je gère un budget, c'est une façon ludique d'exercer mon sens de l'organisation et de l'anticipation, les mêmes réflexes que dans la gestion d'un projet
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
      J'organise des soirées et des événements pour plusieurs participants, avec gestion du planning, du budget et de la logistique au marketing sur les réseaux sociaux. Coordonner les envies de chacun, anticiper les imprévus, tenir les délais et réaliser des emplois du temps : c'est un vrai terrain d'entraînement à la coordination et à la gestion des priorités.
      </p>
</div>
     </div>


<div className="flex gap-3 mb-3">
  <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
  <div>
    <h6 className="mb-1 text-base font-bold text-gray-900">
     Jeux vidéo
      </h6>
    <p className="text-gray-500 text-sm leading-6 mb-6">
    J'aime les jeux vidéo, en particulier les jeux de réflexion comme Professeur Layton. Résoudre des énigmes développe la logique, l'observation et la patience, les mêmes réflexes que face à un problème technique à décortiquer.
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
      J'utilise des outils de planification comme Trello pour structurer mes projets personnels et professionnels, suivre mes tâches et prioriser mes actions. Cette habitude de tout organiser m'aide à rester méthodique et à ne rien laisser au hasard.
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