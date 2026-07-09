import { Link } from "react-router-dom"

function Realisations() {

   const mesrealisations = [
    { image : "https://plus.unsplash.com/premium_photo-1733306428104-90afe41a4ad5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type:"Événementiel", nom: "Salon MEGATEC 2025", description:"Organisation et coordination du salon annuel MEGATEC réunissant 80 participants.", slug: "salon-2025",  },
    { image : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type:"Digitalisation ERP", nom: "Déploiement Dolibarr", description:"Déploiement complet de l'ERP Dolibarr chez MEGATEC : paramétrage, migration de données et formation des utilisateurs.", slug: "deploiement-dolibarr",  },
    { image : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type:"Gestion de projet web",nom: "Refonte site MEGATEC", description:"Coordination de la refonte du site MEGATEC avec intégration du CMS Strapi et création de 40+ fiches produits.", slug: "refonte-site",  },
    { image : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", type:"Formation", nom: "Onboarding Stagiaires", description:"Accueil et formation des nouveaux stagiaires aux outils CRM Zoho, Canva et aux processus internes.", slug: "onboarding-stagiaires",  },
    { image : "https://plus.unsplash.com/premium_photo-1700830193308-73775665bcb0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type:"Gestion de projet IT", nom: "Projet Espace Client", description:"Recueil des besoins et cadrage fonctionnel pour le développement d'une application espace client.", slug: "espace-client",  },
  ]
  
 


  
  return (
<>
<>

  <section className="bg-white px-6 py-12 text-gray-900">
 <div  className="mx-auto max-w-6xl">

  
<p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        Portfolio
        </p>
 <h2 className="mb-7 text-5xl font-bold ">
      Mes réalisations
        </h2>

         <p className="text-gray-500 text-lg leading-3 mb-17">
            Cliquez sur une réalisation pour voir le détail complet.
            </p>

              

              


 <div className="grid grid-cols-2 gap-4 ">
        {mesrealisations.map((realisation) => (

          
          
  <Link to={`/realisation/${realisation.slug}`} key={realisation.nom} className="rounded-2xl border border-gray-100 bg-white  shadow-sm">
  
  <div className="mb-6 ">
    <img src={realisation.image} className="w-full object-cover h-48 rounded-t-xl" alt="" />
    <p className=" text-xs uppercase text-indigo-600 font-medium  p-4">
      {realisation.type}</p>
    <span className="text-gray-850 font-medium text-lg p-4">{realisation.nom}</span>

    <p className="text-gray-500 text-sm p-4">
      {realisation.description}</p>

    <span className=" text-sm text-indigo-600 font-medium p-4" >
      Voir le détaill → </span> 


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

export default Realisations