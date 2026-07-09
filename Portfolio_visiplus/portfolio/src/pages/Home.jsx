import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-6 text-white">
        
        {/* Lumière gauche */}
        <div className="absolute top-1/4 -left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[105px]" />

        {/* Lumière droite */}
        <div className="absolute bottom-1/4 -right-32 h-100 w-100 rounded-full bg-violet-600/20 blur-[105px]" />

        {/* Contenu principal */}
        <div className="relative z-10 mt-24 flex max-w-4xl flex-col items-center justify-center text-center">
          
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-3xl font-bold text-white shadow-2xl shadow-indigo-600/30">
            HB
          </div>

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-indigo-400">
            Chef de projet IT junior
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Hawa <br />
            <span className="bg-gradient-to-br from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Bah
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            En alternance depuis 3 ans chez MEGATEC, j'ai géré des projets concrets : déploiement de l'ERP Dolibarr, organisation du salon Pollutec avec -26% sur le budget, et cadrage fonctionnel d'une application espace client. J'aime comprendre les besoins terrain et les traduire en solutions. Mon objectif : évoluer vers un poste de Chef de projet IT ou AMOA.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/realisations"
              className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
            >
              Voir mes réalisations
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-gray-600 bg-[#1e202c] px-6 py-3 font-medium text-white transition hover:border-gray-400 hover:bg-[#2a2d3a]"
            >
              Me contacter
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-600 bg-[#1e202c] px-6 py-3 font-medium text-white transition hover:border-gray-400 hover:bg-[#2a2d3a]"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-gray-900">
       <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          
          <div>         
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
              Qui suis-je ?
            </p>
           <h2 className="mb-6 text-3xl font-bold ">
            En quelques mots
           </h2>
           <p className="text-gray-500 text-lg leading-8 mb-8">
            Depuis plus de 3 ans chez MEGATEC, j'ai géré des projets concrets : déploiement d'un ERP avec formation des équipes, coordination d'un salon avec -26% sur le budget. Je gère également le contenu du site via Strapi CMS.
           </p>
           <Link to="/presentation" className="inline-flex items-center text-indigo-600 font-medium transition hover:text-indigo-500 "> 
           En savoir plus
           </Link>
           </div>


         <div className="rounded-2xl border border-gray-50 bg-white p-8 shadow-sm"   >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Aperçu des compétences
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
             Coordination équipes</span>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
              Gestion budgétaire</span>
            <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              Suivi Trello</span>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Déploiement outils</span>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              Gestion CMS</span>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
              Déploiement Dolibarr</span>
          </div>
          
          <Link to="/competences" className="mt-6 inline-flex items-center text-indigo-800 font-semibold">
  Toutes mes compétences
</Link>

           

        </div>

        </div>
       </div>

      </section>
    </>
  )
}

export default Home