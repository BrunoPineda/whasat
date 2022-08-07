import React from 'react';
import Servicio from '../components/servicio';

function cirugia() {
  return (
        <div className="">
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>LIFTING</h1>
            </div>
                  <div className="lg:px-80 container min-w-full  md:px-0 container min-w-full">
              <div className=" mb-10 w-full p-8 flex justify-center font-sans text-center text-xs">
                <h1>Más de 20 años de experiencia</h1>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <blockquote>
              <div className="flex justify-center">
                <img
                  className="mb-5 mt-6 lg:h-[50rem] sm:h-1/3"
                  src="https://cabani.pe/wp-content/uploads/2019/10/LIFTING.jpg"
                />
              </div>
             
              </blockquote>
            </div>
            <div className=" md:block">
            <p className="animate-fade-in-down mx-12 mb-9 text-center text-sm text-4xl ">
                
                <div className="text-center mt-5 mb-5 text-4xl text-blue-900" data-aos="fade-up-right">
                   Cirugías
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               DURACIÓN 1 hora y media a 4 horas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RECUPERACIÓN 3 semanas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               HOSPITALIZACIÓN 1 a 2 día
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               ANESTESIA Local con sedación o general
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS PARCIALES  A los 2 meses
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS FINALES al año
               </div>
                </p> 
            </div>
          </div>
          <div> 
            <center className="mx-10 p-8">
            <p>Resumen: El lifting o ritidectomía facial consiste en el estiramiento de los tejidos con flacidez que se forman como consecuencia del envejecimiento, la exposición al sol, el estrés, factores hereditarios, etc. Normalmente, esta flacidez es más aparente en la pérdida del óvalo facial, aparición de surcos y flacidez del cuello. Gracias a la cirugía se logra tensar los tejidos faciales, además de eliminar el exceso de grasa y redistribuir la piel de la cara y el cuello para recuperar firmeza y mejorar el tono del óvalo facial. Se conserva el aspecto natural de la persona, otorgándole una apariencia más rejuvenecida.</p>
            </center>
          </div>
          <iframe width="1140" height="641" src="https://www.youtube.com/embed/Oxk9Pux8B5Y" title="Lifting facial en Clínica Cabani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="text-center mb-5">Dirección: Av. Guardia Civil 627, San Borja</p>
        </div>
        </div>
  );
}

export default cirugia;