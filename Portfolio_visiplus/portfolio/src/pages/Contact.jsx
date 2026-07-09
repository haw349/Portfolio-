import { Mail, Phone, MapPin, Link, Send } from "lucide-react"

function Contact() {
  return (
    <>
    <>
        
  <section className="bg-white px-6 py-12 text-gray-900">
      <div  className="mx-auto max-w-6xl">
<p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium">
        Me joindre
        </p>
      <h2 className="mb-7 text-5xl font-bold ">
        Contact
        </h2>

         <p className="text-gray-500 text-lg leading-3 mb-20">
            N'hésitez pas à me contacter pour toute question ou opportunité
            </p>
      
      <div className="grid gap-12 md:grid-cols-2 mx-auto max-w-6xl">
<div>
  <h6 className="font-semibold mb-7 text-xl">
    Coordonnées
    </h6>

    <div className="flex gap-3 mb-3">
   <div className= "bg-indigo-50 rounded-xl w-11 h-10 flex items-center justify-center">
          <Phone />
          </div>
  <div>
    <p className="mb-1 text-sm  text-gray-400">
      Téléphone
      </p>
    <p className="text-gray-800 font-semibold  text-sm leading-6 mb-6">
      07 82 48 48 31
      </p>
</div>
     </div>


      <div className="flex gap-3 mb-3">
   <div className= "bg-indigo-50 rounded-xl w-11 h-10 flex items-center justify-center">
              <Mail />
          </div>
  <div>
    <p className="mb-1 text-sm  text-gray-400">
      Email
      </p>
    <a href="mailto:hbah73719@gmail.com" className="text-gray-800 font-semibold text-sm leading-6 mb-6 hover:text-indigo-600">
      hbah73719@gmail.com
      </a>
</div>
     </div>


      <div className="flex gap-3 mb-3">
   <div className= "bg-indigo-50 rounded-xl w-11 h-10 flex items-center justify-center">
            <MapPin />
          </div>
  <div>
    <p className="mb-1 text-sm  text-gray-400">
      Ville
      </p>
    <p className="text-gray-800 font-semibold  text-sm leading-6 mb-6">
      Paris, France
      </p>
</div>
     </div>


      <div className="flex gap-3 mb-3">
   <div className= "bg-indigo-50 rounded-xl w-11 h-10 flex items-center justify-center">
            <Link />
          </div>
  <div>
    <p className="mb-1 text-sm text-gray-400">
      LinkedIn
      </p>
    <a href="https://www.linkedin.com/in/hawa-bah-82a8291b0/" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-semibold text-sm leading-6 mb-6 hover:text-indigo-600">
      Voir mon profil
      </a>
</div>
     </div>

</div>


      </div>

     </div>
      </section>



        </>
        </>
  )
}

export default Contact