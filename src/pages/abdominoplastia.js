import React from 'react';
import Servicio from '../components/servicio';

function cirugia() {
  return (
        <div className="">
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>ABDOMINOPLASTÍA</h1>
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
                  src="https://cabani.pe/wp-content/uploads/2016/12/ABDOMINOPLAST%C3%8DA.jpg"
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
               DURACIÓN  2 a 3 horas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RECUPERACIÓN 3 semanas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               HOSPITALIZACIÓN 2 días
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               ANESTESIA general o epidural
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS PARCIALES al mes
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS FINALES a los 5 meses
               </div>
                </p> 
            </div>
          </div>
          <div> 
            <center className="mx-10 p-8">
            <p>Resumen: La abdominoplastía es un procedimiento quirúrgico que elimina el exceso de piel y tejido graso del abdomen y que tensa los músculos de la pared abdominal (si fuese necesario). De esta manera, se elimina la flacidez y se logra un abdomen más firme y saludable.</p>

            </center>
          </div>
          <div className="flex justify-center">
          <iframe width="1140" height="641" src="https://www.youtube.com/embed/8Q8M1gcLkOQ" title="Abdominoplastia en Clínica Cabani - Dr. Mario Cabani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="text-center mb-5">Dirección: Av. Guardia Civil 627, San Borja</p>
        </div>
        </div>
  );
}

export default cirugia;