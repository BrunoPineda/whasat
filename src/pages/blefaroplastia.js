import React from 'react';
import Servicio from '../components/servicio';

function cirugia() {
  return (
        <div className="">
            <div className="bg-sky-700 mb-0 w-full p-8 flex justify-center font-sans text-white">
                <h1>BLEFAROPLASTÍA</h1>
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
                  src="https://cabani.pe/wp-content/uploads/2016/12/BLEFAROPLAST%C3%8DA.jpg"
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
               DURACIÓN  1 a 2 horas
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RECUPERACIÓN 10 días
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               HOSPITALIZACIÓN no necesita / ambulatoria
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               ANESTESIA local más sedación
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS PARCIALES a los 15 días
               </div>
               <div className="text-center mt-5 mb-5 text-2xl" data-aos="fade-up-right">
               RESULTADOS FINALES a los 5 meses
               </div>
                </p> 
            </div>
          </div>
          <div> 
            <center className="mx-10 p-8">
            <p>Resumen: La blefaroplastía consiste en eliminar el exceso de piel redundante y las bolsas de grasa de los párpados con el fin de lograr una mirada rejuvenecida.</p>
            </center>
          </div>
          <div className="flex justify-center">
          <iframe width="1140" height="641" src="https://www.youtube.com/embed/bns8QTJT0H0" title="Blefaroplastía en Clínica Cabani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p className="text-center mb-5">Dirección: Av. Guardia Civil 627, San Borja</p>
        </div>
        </div>
  );
}

export default cirugia;