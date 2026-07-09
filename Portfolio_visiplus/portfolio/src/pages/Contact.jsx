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
            <Mail />
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
            <Phone />
          </div>
  <div>
    <p className="mb-1 text-sm  text-gray-400">
      Email
      </p>
    <p className="text-gray-800 font-semibold  text-sm leading-6 mb-6">
      hbah73719@gmail.com
      </p>
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
    <p className="mb-1 text-sm  text-gray-400">
      LinkedIn
      </p>
    <p className="text-gray-800 font-semibold  text-sm leading-6 mb-6">
      https://www.linkedin.com/in/hawa-bah-82a8291b0/
      </p>
</div>
     </div>

</div>

<div>
   <h6 className="font-semibold mb-7 text-xl">
    Envoyer un message
   </h6>

<div className="flex gap-3 mb-3">
   <label className="text-gray-500 ">
    Nom *
   </label>


 <label className="text-gray-500 ">
  Email *
  </label>
</div>

<div className="flex gap-3 mb-3">
<div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm" >
<input type="text" placeholder="Votre nom" />  
  </div>
<div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm" >
<input type="text" placeholder="Votre@email.com" />  
  </div>

</div>

 <label className="text-gray-500 "> 
  Sujet 
  </label> <br />
 <div className="rounded-2xl border border-gray-50 bg-white p-3 shadow-sm" >
 <input type="text" placeholder="Object de votre message" /> 
 </div>


<br />


 <label className="text-gray-500 "> 
  <br />Message * 
  <br /></label>
 <div className="rounded-2xl border border-gray-50 bg-white p-4 shadow-sm" >
 <textarea placeholder="Message" ></textarea> 
 </div>
<br />
 <button className="rounded-full bg-indigo-600 px-8 py-2 font-medium text-white transition hover:bg-indigo-500">
  <div className="flex gap-3 mb-1">
    <Send size={16} /> Envoyer
  </div>

 </button>





</div>


      </div>

     </div>
      </section>



        </>
        </>
  )
}

export default Contact